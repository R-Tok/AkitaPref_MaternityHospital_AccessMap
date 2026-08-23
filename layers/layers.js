var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '地理院タイル標準地図',
            'type':'base',
            'opacity': 0.200000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png'
            })
        });
var format___1 = new ol.format.GeoJSON();
var features___1 = format___1.readFeatures(json___1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___1.addFeatures(features___1);
var lyr___1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___1, 
                style: style___1,
                popuplayertitle: '秋田県_分娩施設',
                interactive: true,
                title: '<img src="styles/legend/__1.png" /> 秋田県_分娩施設'
            });
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
                popuplayertitle: '道路ネットワーク_所要時間[分]',
                interactive: true,
    title: '道路ネットワーク_所要時間[分]<br />\
    <img src="styles/legend/__2_0.png" /> 0 - 2<br />\
    <img src="styles/legend/__2_1.png" /> 2 - 4<br />\
    <img src="styles/legend/__2_2.png" /> 4 - 6<br />\
    <img src="styles/legend/__2_3.png" /> 6 - 8<br />\
    <img src="styles/legend/__2_4.png" /> 8 - 10<br />\
    <img src="styles/legend/__2_5.png" /> 10 - 12<br />\
    <img src="styles/legend/__2_6.png" /> 12 - 14<br />\
    <img src="styles/legend/__2_7.png" /> 14 - 16<br />\
    <img src="styles/legend/__2_8.png" /> 16 - 18<br />\
    <img src="styles/legend/__2_9.png" /> 18 - 20<br />\
    <img src="styles/legend/__2_10.png" /> 20 - 22<br />\
    <img src="styles/legend/__2_11.png" /> 22 - 24<br />\
    <img src="styles/legend/__2_12.png" /> 24 - 26<br />\
    <img src="styles/legend/__2_13.png" /> 26 - 28<br />\
    <img src="styles/legend/__2_14.png" /> 28 - 30<br />\
    <img src="styles/legend/__2_15.png" /> 30 - 32<br />\
    <img src="styles/legend/__2_16.png" /> 32 - 34<br />\
    <img src="styles/legend/__2_17.png" /> 34 - 36<br />\
    <img src="styles/legend/__2_18.png" /> 36 - 38<br />\
    <img src="styles/legend/__2_19.png" /> 38 - 40<br />\
    <img src="styles/legend/__2_20.png" /> 40 - 42<br />\
    <img src="styles/legend/__2_21.png" /> 42 - 44<br />\
    <img src="styles/legend/__2_22.png" /> 44 - 46<br />\
    <img src="styles/legend/__2_23.png" /> 46 - 48<br />\
    <img src="styles/legend/__2_24.png" /> 48 - 50<br />\
    <img src="styles/legend/__2_25.png" /> 50 - 52<br />\
    <img src="styles/legend/__2_26.png" /> 52 - 54<br />\
    <img src="styles/legend/__2_27.png" /> 54 - 56<br />\
    <img src="styles/legend/__2_28.png" /> 56 - 58<br />\
    <img src="styles/legend/__2_29.png" /> 58 - 58.48<br />' });

lyr__0.setVisible(true);lyr___1.setVisible(true);lyr___2.setVisible(true);
var layersList = [lyr__0,lyr___1,lyr___2];
lyr___1.set('fieldAliases', {'kumoy_id': 'kumoy_id', 'URL': 'URL', '施設名': '施設名', '住所': '住所', '施設の種類': '施設の種類', '産科病床数': '産科病床数', '産科医師数': '産科医師数', '助産師数': '助産師数', '看護師・准看護師数': '看護師・准看護師数', '年間経腟分娩取扱件数': '年間経腟分娩取扱件数', '年間帝王切開術取扱件数': '年間帝王切開術取扱件数', '立ち会い出産の実施': '立ち会い出産の実施', '無痛分娩の実施有無': '無痛分娩の実施有無', '費用目安': '費用目安', 'LocName': 'LocName', 'fX': 'fX', 'fY': 'fY', 'iConf': 'iConf', 'iLvl': 'iLvl', });
lyr___2.set('fieldAliases', {'u': 'u', 'v': 'v', 'key': 'key', 'length': 'length', 'maxspeed': 'maxspeed', 'min_travel_time': 'min_travel_time', '最寄り施設名': '最寄り施設名', '最寄り到達時間[分]': '最寄り到達時間[分]', });
lyr___1.set('fieldImages', {'kumoy_id': 'Range', 'URL': 'TextEdit', '施設名': 'TextEdit', '住所': 'TextEdit', '施設の種類': 'TextEdit', '産科病床数': 'TextEdit', '産科医師数': 'TextEdit', '助産師数': 'TextEdit', '看護師・准看護師数': 'TextEdit', '年間経腟分娩取扱件数': 'TextEdit', '年間帝王切開術取扱件数': 'TextEdit', '立ち会い出産の実施': 'TextEdit', '無痛分娩の実施有無': 'TextEdit', '費用目安': 'TextEdit', 'LocName': 'TextEdit', 'fX': 'TextEdit', 'fY': 'TextEdit', 'iConf': 'Range', 'iLvl': 'Range', });
lyr___2.set('fieldImages', {'u': 'TextEdit', 'v': 'TextEdit', 'key': 'Range', 'length': 'TextEdit', 'maxspeed': 'TextEdit', 'min_travel_time': 'TextEdit', '最寄り施設名': 'TextEdit', '最寄り到達時間[分]': 'TextEdit', });
lyr___1.set('fieldLabels', {'kumoy_id': 'hidden field', 'URL': 'hidden field', '施設名': 'inline label - visible with data', '住所': 'hidden field', '施設の種類': 'hidden field', '産科病床数': 'hidden field', '産科医師数': 'hidden field', '助産師数': 'hidden field', '看護師・准看護師数': 'hidden field', '年間経腟分娩取扱件数': 'hidden field', '年間帝王切開術取扱件数': 'hidden field', '立ち会い出産の実施': 'hidden field', '無痛分娩の実施有無': 'hidden field', '費用目安': 'hidden field', 'LocName': 'hidden field', 'fX': 'hidden field', 'fY': 'hidden field', 'iConf': 'hidden field', 'iLvl': 'hidden field', });
lyr___2.set('fieldLabels', {'u': 'hidden field', 'v': 'hidden field', 'key': 'hidden field', 'length': 'hidden field', 'maxspeed': 'hidden field', 'min_travel_time': 'hidden field', '最寄り施設名': 'inline label - visible with data', '最寄り到達時間[分]': 'inline label - visible with data', });
lyr___2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});