var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '地理院タイル標準地図',
            'opacity': 0.300000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png'
            })
        });
var format_road_network_with_travel_times_t_1 = new ol.format.GeoJSON();
var features_road_network_with_travel_times_t_1 = format_road_network_with_travel_times_t_1.readFeatures(json_road_network_with_travel_times_t_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_road_network_with_travel_times_t_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_road_network_with_travel_times_t_1.addFeatures(features_road_network_with_travel_times_t_1);
var lyr_road_network_with_travel_times_t_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_road_network_with_travel_times_t_1, 
                style: style_road_network_with_travel_times_t_1,
                popuplayertitle: 'road_network_with_travel_times_t',
                interactive: true,
    title: 'road_network_with_travel_times_t<br />\
    <img src="styles/legend/road_network_with_travel_times_t_1_0.png" /> 0 - 200<br />\
    <img src="styles/legend/road_network_with_travel_times_t_1_1.png" /> 200 - 400<br />\
    <img src="styles/legend/road_network_with_travel_times_t_1_2.png" /> 400 - 600<br />\
    <img src="styles/legend/road_network_with_travel_times_t_1_3.png" /> 600 - 800<br />\
    <img src="styles/legend/road_network_with_travel_times_t_1_4.png" /> 800 - 1000<br />\
    <img src="styles/legend/road_network_with_travel_times_t_1_5.png" /> 1000 - 1200<br />\
    <img src="styles/legend/road_network_with_travel_times_t_1_6.png" /> 1200 - 1400<br />\
    <img src="styles/legend/road_network_with_travel_times_t_1_7.png" /> 1400 - 1600<br />\
    <img src="styles/legend/road_network_with_travel_times_t_1_8.png" /> 1600 - 1800<br />\
    <img src="styles/legend/road_network_with_travel_times_t_1_9.png" /> 1800 - 2000<br />\
    <img src="styles/legend/road_network_with_travel_times_t_1_10.png" /> 2000 - 2200<br />\
    <img src="styles/legend/road_network_with_travel_times_t_1_11.png" /> 2200 - 2400<br />\
    <img src="styles/legend/road_network_with_travel_times_t_1_12.png" /> 2400 - 2600<br />\
    <img src="styles/legend/road_network_with_travel_times_t_1_13.png" /> 2600 - 2800<br />\
    <img src="styles/legend/road_network_with_travel_times_t_1_14.png" /> 2800 - 3000<br />\
    <img src="styles/legend/road_network_with_travel_times_t_1_15.png" /> 3000 - 3200<br />\
    <img src="styles/legend/road_network_with_travel_times_t_1_16.png" /> 3200 - 3400<br />\
    <img src="styles/legend/road_network_with_travel_times_t_1_17.png" /> 3400 - 3554<br />' });

lyr__0.setVisible(true);lyr_road_network_with_travel_times_t_1.setVisible(true);
var layersList = [lyr__0,lyr_road_network_with_travel_times_t_1];
lyr_road_network_with_travel_times_t_1.set('fieldAliases', {'u': 'u', 'v': 'v', 'key': 'key', 'highway': 'highway', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'length': 'length', 'maxspeed': 'maxspeed', 'travel_time': 'travel_time', 'lanes': 'lanes', 'bridge': 'bridge', 'tunnel': 'tunnel', 'access': 'access', 'width': 'width', 'min_travel_time': 'min_travel_time', });
lyr_road_network_with_travel_times_t_1.set('fieldImages', {'u': 'TextEdit', 'v': 'TextEdit', 'key': 'Range', 'highway': 'List', 'name': 'List', 'ref': 'List', 'oneway': 'CheckBox', 'length': 'TextEdit', 'maxspeed': 'TextEdit', 'travel_time': 'TextEdit', 'lanes': 'List', 'bridge': 'TextEdit', 'tunnel': 'List', 'access': 'TextEdit', 'width': 'List', 'min_travel_time': 'TextEdit', });
lyr_road_network_with_travel_times_t_1.set('fieldLabels', {'u': 'no label', 'v': 'no label', 'key': 'no label', 'highway': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'length': 'no label', 'maxspeed': 'no label', 'travel_time': 'no label', 'lanes': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'access': 'no label', 'width': 'no label', 'min_travel_time': 'no label', });
lyr_road_network_with_travel_times_t_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});