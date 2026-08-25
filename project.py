import geopandas as gpd
import networkx as nx
import osmnx as ox
import re

# 座標系をWGS84 (EPSG:4326) に統一
hospital = gpd.read_file('clinic_data_merged_geocoding.geojson').to_crs(epsg=4326)
population_mesh = gpd.read_file('500m_mesh_2024_05_GEOJSON/500m_mesh_2024_05.geojson').to_crs(epsg=4326)

# 秋田県境界を取得して産院を県内のみに絞る
akita_gdf = ox.geocode_to_gdf("Akita Prefecture, Japan").to_crs(epsg=4326)
hospital = gpd.sjoin(hospital, akita_gdf, how='inner', predicate='within')
print(f"秋田県内産院数: {len(hospital)} (全国データから絞り込み)")

# 経路計算に使う施設名フィールドを判定
hospital_name_field = '施設名' if '施設名' in hospital.columns else ('name' if 'name' in hospital.columns else None)
if hospital_name_field is None:
    raise ValueError("施設名フィールド '施設名' が hospital データに見つかりません")

# 道路フィルタの定義
road_filter_tertiary = '["highway"~"motorway|trunk|primary|secondary|tertiary"]'

# tertiary までのグラフを取得（統一）
G = ox.graph_from_place(
    "Akita Prefecture, Japan",
    network_type="drive",
    custom_filter=road_filter_tertiary
)


""" route = nx.shortest_path(
    G,
    source=0,
    target=1,
    weight="travel_time"
)

print(route) """

# maxspeedのデフォルト値を設定（highwayタイプ別）
default_speeds = {
    'motorway': 80,
    'trunk': 60,
    'primary': 50,
    'secondary': 40,
    'tertiary': 40
}

def parse_maxspeed(value):
    if value is None:
        return None
    if isinstance(value, list):
        value = value[0]
    if isinstance(value, (int, float)):
        return float(value)
    if isinstance(value, str):
        m = re.search(r"\d+(?:\.\d+)?", value)
        if m:
            return float(m.group())
    return None

for u, v, k, data in G.edges(keys=True, data=True):
    maxspeed = parse_maxspeed(data.get('maxspeed'))
    if maxspeed is None:
        highway = data.get('highway')
        if isinstance(highway, list):
            highway = highway[0]
        maxspeed = default_speeds.get(highway, 50)
    data['maxspeed'] = maxspeed
    length = data.get('length', None)
    if length is None or maxspeed <= 0:
        data['travel_time'] = None
    else:
        data['travel_time'] = length / (maxspeed / 3.6)

# 道路ネットワークをGeoDataFrameに変換
nodes, edges = ox.graph_to_gdfs(G)
nodes.to_file('1_road_network_nodes_t.geojson', driver='GeoJSON')
edges.to_file('2_road_network_edges_t.geojson', driver='GeoJSON')

# travel_timeの確認（null値がないか、計算が正しいか確認）
print("\ntravel_time設定後:")
print(f"  edges: {len(edges)} 本")
print(f"  nodes: {len(nodes)} 個")
print(f"  maxspeedのnull数: {edges['maxspeed'].isnull().sum()}")

# 産院の位置をネットワークのノードにマッピング
hospital_nodes = ox.nearest_nodes(G, hospital.geometry.x, hospital.geometry.y)
print(f"\n産院マッピング情報:")
print(f"  総産院数: {len(hospital)}")
print(f"  マッピングされたノード数: {len(hospital_nodes)}")
print(f"  ユニークなマッピングノード数: {len(set(hospital_nodes))}")

# マッピングされたノードを確認（デバッグ用）
unique_hospital_nodes = set(hospital_nodes)
print(f"  マッピングノード一覧: {sorted(list(unique_hospital_nodes)[:10])}...")  # 最初の10個

# 各産院ノードのノード次数を確認（孤立ノードの検出）
isolated_nodes = []
for node in unique_hospital_nodes:
    degree = G.degree(node)
    if degree < 2:
        isolated_nodes.append(node)
        print(f"  警告: ノード {node} の次数が {degree} です（孤立している可能性）")

# 孤立ノードを除去
if isolated_nodes:
    unique_hospital_nodes = unique_hospital_nodes - set(isolated_nodes)
    print(f"  孤立ノード {len(isolated_nodes)} 個を除去: {isolated_nodes}")
    print(f"  有効な産院ノード数: {len(unique_hospital_nodes)}")

# 各ノードに対して最短所要時間とそれを出す施設名を保存する
node_time = {}
node_hospital_name = {}

# 注: nearest_nodes が hospital の行順に対応することを前提に、施設名を同じ順に対応させる
hospital_names = hospital[hospital_name_field].fillna('不明').astype(str).tolist()

for hospital_node, hospital_name in zip(hospital_nodes, hospital_names):
    try:
        dist = nx.shortest_path_length(G, source=hospital_node, weight='travel_time')
        count_before = len(node_time)
        for node, time in dist.items():
            if node not in node_time or time < node_time[node]:
                node_time[node] = time
                node_hospital_name[node] = hospital_name
        count_after = len(node_time)
        print(f"  ノード {hospital_node}: {count_after - count_before} 個のノードを追加")
    except nx.NodeNotFound:
        print(f"  エラー: ノード {hospital_node} がグラフに見つかりません")

print(f"\n距離計算後:")
print(f"  到達可能なノード総数: {len(node_time)}")
if node_time:
    print(f"  到達時間: 最小={min(node_time.values()):.2f}秒, 最大={max(node_time.values()):.2f}秒")

# 評価用に、最短時間だけを保持した legacy 互換も作成
# 今回は最終出力で node_time を使う


# エッジに最短所要時間と最寄り施設名を付与
# graph_to_gdfs のエッジは MultiIndex なので、u/v を列として展開してから使うのが安全
edges = edges.reset_index()
if 'u' not in edges.columns or 'v' not in edges.columns:
    raise ValueError("edges に u / v 列がありません。graph_to_gdfs の出力構造を確認してください。")

# 行ごとの両端ノードの最短所要時間候補を比較して、最小値を採用
edges['min_travel_time'] = edges.apply(
    lambda row: min(node_time.get(row['u'], float('inf')), node_time.get(row['v'], float('inf'))),
    axis=1
)

# 各エッジの最寄り施設名は、最短時間を持つ端点ノードに対応する施設名を採用する
edges['最寄り施設名'] = edges.apply(
    lambda row: node_hospital_name.get(row['u'], None)
    if node_time.get(row['u'], float('inf')) <= node_time.get(row['v'], float('inf'))
    else node_hospital_name.get(row['v'], None),
    axis=1
)

# 無限大の時間を除去（到達不可能なノード）
edges = edges[edges['min_travel_time'] != float('inf')]

# 逆向きの重複を削除して、1区間1地物にする
# 例: (u=1, v=2) と (u=2, v=1) を同一視する
edges['edge_key'] = edges.apply(
    lambda row: tuple(sorted((row['u'], row['v']))),
    axis=1
)
edges = edges.drop_duplicates(subset='edge_key', keep='first').drop(columns=['edge_key'])

# GeoJSONとして保存
edges.to_file('road_network_with_travel_times_最寄り施設名0822.geojson', driver='GeoJSON')
print(f"\n出力完了:")
print(f"  最終出力エッジ数: {len(edges)}")
