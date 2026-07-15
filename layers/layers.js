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
var format__s_1 = new ol.format.GeoJSON();
var features__s_1 = format__s_1.readFeatures(json__s_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__s_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__s_1.addFeatures(features__s_1);
var lyr__s_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__s_1, 
                style: style__s_1,
                popuplayertitle: '道路ネットワーク_最寄り所要時間[s]',
                interactive: true,
    title: '道路ネットワーク_最寄り所要時間[s]<br />\
    <img src="styles/legend/_s_1_0.png" /> 0 - 200<br />\
    <img src="styles/legend/_s_1_1.png" /> 200 - 400<br />\
    <img src="styles/legend/_s_1_2.png" /> 400 - 600<br />\
    <img src="styles/legend/_s_1_3.png" /> 600 - 800<br />\
    <img src="styles/legend/_s_1_4.png" /> 800 - 1000<br />\
    <img src="styles/legend/_s_1_5.png" /> 1000 - 1200<br />\
    <img src="styles/legend/_s_1_6.png" /> 1200 - 1400<br />\
    <img src="styles/legend/_s_1_7.png" /> 1400 - 1600<br />\
    <img src="styles/legend/_s_1_8.png" /> 1600 - 1800<br />\
    <img src="styles/legend/_s_1_9.png" /> 1800 - 2000<br />\
    <img src="styles/legend/_s_1_10.png" /> 2000 - 2200<br />\
    <img src="styles/legend/_s_1_11.png" /> 2200 - 2400<br />\
    <img src="styles/legend/_s_1_12.png" /> 2400 - 2600<br />\
    <img src="styles/legend/_s_1_13.png" /> 2600 - 2800<br />\
    <img src="styles/legend/_s_1_14.png" /> 2800 - 3000<br />\
    <img src="styles/legend/_s_1_15.png" /> 3000 - 3200<br />\
    <img src="styles/legend/_s_1_16.png" /> 3200 - 3400<br />\
    <img src="styles/legend/_s_1_17.png" /> 3400 - 3554<br />' });
var format___2 = new ol.format.GeoJSON();
var features___2 = format___2.readFeatures(json___2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___2.addFeatures(features___2);
var lyr___2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___2, 
                style: style___2,
                popuplayertitle: '分娩施設プロット_秋田県',
                interactive: true,
                title: '<img src="styles/legend/__2.png" /> 分娩施設プロット_秋田県'
            });

lyr__0.setVisible(true);lyr__s_1.setVisible(true);lyr___2.setVisible(true);
var layersList = [lyr__0,lyr__s_1,lyr___2];
lyr__s_1.set('fieldAliases', {'u': 'u', 'v': 'v', 'key': 'key', 'min_travel_time': 'min_travel_time', });
lyr___2.set('fieldAliases', {'kumoy_id': 'kumoy_id', 'URL': 'URL', '施設名': '施設名', '住所': '住所', '施設の種類': '施設の種類', '産科病床数': '産科病床数', '産科医師数': '産科医師数', '助産師数': '助産師数', '看護師・准看護師数': '看護師・准看護師数', '年間経腟分娩取扱件数': '年間経腟分娩取扱件数', '年間帝王切開術取扱件数': '年間帝王切開術取扱件数', '立ち会い出産の実施': '立ち会い出産の実施', '無痛分娩の実施有無': '無痛分娩の実施有無', '費用目安': '費用目安', 'LocName': 'LocName', 'fX': 'fX', 'fY': 'fY', 'iConf': 'iConf', 'iLvl': 'iLvl', });
lyr__s_1.set('fieldImages', {'u': 'TextEdit', 'v': 'TextEdit', 'key': 'Range', 'min_travel_time': 'TextEdit', });
lyr___2.set('fieldImages', {'kumoy_id': 'Range', 'URL': 'TextEdit', '施設名': 'TextEdit', '住所': 'TextEdit', '施設の種類': 'TextEdit', '産科病床数': 'TextEdit', '産科医師数': 'TextEdit', '助産師数': 'TextEdit', '看護師・准看護師数': 'TextEdit', '年間経腟分娩取扱件数': 'TextEdit', '年間帝王切開術取扱件数': 'TextEdit', '立ち会い出産の実施': 'TextEdit', '無痛分娩の実施有無': 'TextEdit', '費用目安': 'TextEdit', 'LocName': 'TextEdit', 'fX': 'TextEdit', 'fY': 'TextEdit', 'iConf': 'Range', 'iLvl': 'Range', });
lyr__s_1.set('fieldLabels', {'u': 'no label', 'v': 'no label', 'key': 'no label', 'min_travel_time': 'no label', });
lyr___2.set('fieldLabels', {'kumoy_id': 'no label', 'URL': 'no label', '施設名': 'no label', '住所': 'no label', '施設の種類': 'no label', '産科病床数': 'no label', '産科医師数': 'no label', '助産師数': 'no label', '看護師・准看護師数': 'no label', '年間経腟分娩取扱件数': 'no label', '年間帝王切開術取扱件数': 'no label', '立ち会い出産の実施': 'no label', '無痛分娩の実施有無': 'no label', '費用目安': 'no label', 'LocName': 'no label', 'fX': 'no label', 'fY': 'no label', 'iConf': 'no label', 'iLvl': 'no label', });
lyr___2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});