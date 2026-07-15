var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '地理院タイル標準地図',
            'type':'base',
            'opacity': 0.300000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png'
            })
        });
var format_road_network_with_travel_times_1 = new ol.format.GeoJSON();
var features_road_network_with_travel_times_1 = format_road_network_with_travel_times_1.readFeatures(json_road_network_with_travel_times_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_road_network_with_travel_times_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_road_network_with_travel_times_1.addFeatures(features_road_network_with_travel_times_1);
var lyr_road_network_with_travel_times_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_road_network_with_travel_times_1, 
                style: style_road_network_with_travel_times_1,
                popuplayertitle: 'road_network_with_travel_times',
                interactive: true,
    title: '道路ネットワーク_最寄り所要時間[s]<br />\
    <img src="styles/legend/road_network_with_travel_times_1_0.png" /> 0 - 200<br />\
    <img src="styles/legend/road_network_with_travel_times_1_1.png" /> 200 - 400<br />\
    <img src="styles/legend/road_network_with_travel_times_1_2.png" /> 400 - 600<br />\
    <img src="styles/legend/road_network_with_travel_times_1_3.png" /> 600 - 800<br />\
    <img src="styles/legend/road_network_with_travel_times_1_4.png" /> 800 - 1000<br />\
    <img src="styles/legend/road_network_with_travel_times_1_5.png" /> 1000 - 1200<br />\
    <img src="styles/legend/road_network_with_travel_times_1_6.png" /> 1200 - 1400<br />\
    <img src="styles/legend/road_network_with_travel_times_1_7.png" /> 1400 - 1600<br />\
    <img src="styles/legend/road_network_with_travel_times_1_8.png" /> 1600 - 1800<br />\
    <img src="styles/legend/road_network_with_travel_times_1_9.png" /> 1800 - 2000<br />\
    <img src="styles/legend/road_network_with_travel_times_1_10.png" /> 2000 - 2200<br />\
    <img src="styles/legend/road_network_with_travel_times_1_11.png" /> 2200 - 2400<br />\
    <img src="styles/legend/road_network_with_travel_times_1_12.png" /> 2400 - 2600<br />\
    <img src="styles/legend/road_network_with_travel_times_1_13.png" /> 2600 - 2800<br />\
    <img src="styles/legend/road_network_with_travel_times_1_14.png" /> 2800 - 3000<br />\
    <img src="styles/legend/road_network_with_travel_times_1_15.png" /> 3000 - 3200<br />\
    <img src="styles/legend/road_network_with_travel_times_1_16.png" /> 3200 - 3400<br />\
    <img src="styles/legend/road_network_with_travel_times_1_17.png" /> 3400 - 3554<br />' });
var format_hospital_AkitaPref_2 = new ol.format.GeoJSON();
var features_hospital_AkitaPref_2 = format_hospital_AkitaPref_2.readFeatures(json_hospital_AkitaPref_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hospital_AkitaPref_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hospital_AkitaPref_2.addFeatures(features_hospital_AkitaPref_2);
var lyr_hospital_AkitaPref_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hospital_AkitaPref_2, 
                style: style_hospital_AkitaPref_2,
                popuplayertitle: 'hospital_AkitaPref',
                interactive: true,
                title: '<img src="styles/legend/hospital_AkitaPref_2.png" /> 秋田県_分娩施設プロット'
            });

lyr__0.setVisible(true);lyr_road_network_with_travel_times_1.setVisible(true);lyr_hospital_AkitaPref_2.setVisible(true);
var layersList = [lyr__0,lyr_road_network_with_travel_times_1,lyr_hospital_AkitaPref_2];
lyr_road_network_with_travel_times_1.set('fieldAliases', {'u': 'u', 'v': 'v', 'key': 'key', 'min_travel_time': 'min_travel_time', });
lyr_hospital_AkitaPref_2.set('fieldAliases', {'kumoy_id': 'kumoy_id', 'URL': 'URL', '施設名': '施設名', '住所': '住所', '施設の種類': '施設の種類', '産科病床数': '産科病床数', '産科医師数': '産科医師数', '助産師数': '助産師数', '看護師・准看護師数': '看護師・准看護師数', '年間経腟分娩取扱件数': '年間経腟分娩取扱件数', '年間帝王切開術取扱件数': '年間帝王切開術取扱件数', '立ち会い出産の実施': '立ち会い出産の実施', '無痛分娩の実施有無': '無痛分娩の実施有無', '費用目安': '費用目安', 'LocName': 'LocName', 'fX': 'fX', 'fY': 'fY', 'iConf': 'iConf', 'iLvl': 'iLvl', });
lyr_road_network_with_travel_times_1.set('fieldImages', {'u': 'TextEdit', 'v': 'TextEdit', 'key': 'Range', 'min_travel_time': 'TextEdit', });
lyr_hospital_AkitaPref_2.set('fieldImages', {'kumoy_id': 'Range', 'URL': 'TextEdit', '施設名': 'TextEdit', '住所': 'TextEdit', '施設の種類': 'TextEdit', '産科病床数': 'TextEdit', '産科医師数': 'TextEdit', '助産師数': 'TextEdit', '看護師・准看護師数': 'TextEdit', '年間経腟分娩取扱件数': 'TextEdit', '年間帝王切開術取扱件数': 'TextEdit', '立ち会い出産の実施': 'TextEdit', '無痛分娩の実施有無': 'TextEdit', '費用目安': 'TextEdit', 'LocName': 'TextEdit', 'fX': 'TextEdit', 'fY': 'TextEdit', 'iConf': 'Range', 'iLvl': 'Range', });
lyr_road_network_with_travel_times_1.set('fieldLabels', {'u': 'no label', 'v': 'no label', 'key': 'no label', 'min_travel_time': 'no label', });
lyr_hospital_AkitaPref_2.set('fieldLabels', {'kumoy_id': 'no label', 'URL': 'no label', '施設名': 'no label', '住所': 'no label', '施設の種類': 'no label', '産科病床数': 'no label', '産科医師数': 'no label', '助産師数': 'no label', '看護師・准看護師数': 'no label', '年間経腟分娩取扱件数': 'no label', '年間帝王切開術取扱件数': 'no label', '立ち会い出産の実施': 'no label', '無痛分娩の実施有無': 'no label', '費用目安': 'no label', 'LocName': 'no label', 'fX': 'no label', 'fY': 'no label', 'iConf': 'no label', 'iLvl': 'no label', });
lyr_hospital_AkitaPref_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});