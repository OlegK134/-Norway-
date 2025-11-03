var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'Границы Норвегии',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> Границы Норвегии'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'Численность женщин',
                interactive: true,
    title: 'Численность женщин<br />\
    <img src="styles/legend/_2_0.png" /> 14814 - 24410<br />\
    <img src="styles/legend/_2_1.png" /> 24410 - 42393<br />\
    <img src="styles/legend/_2_2.png" /> 42393 - 69354<br />\
    <img src="styles/legend/_2_3.png" /> 69354 - 145623<br />\
    <img src="styles/legend/_2_4.png" /> 145623 - 353571<br />'
        });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'Численность мужчин',
                interactive: true,
    title: 'Численность мужчин<br />\
    <img src="styles/legend/_3_0.png" /> 13403 - 22085<br />\
    <img src="styles/legend/_3_1.png" /> 22085 - 38355<br />\
    <img src="styles/legend/_3_2.png" /> 38355 - 62748<br />\
    <img src="styles/legend/_3_3.png" /> 62748 - 131755<br />\
    <img src="styles/legend/_3_4.png" /> 131755 - 319898<br />'
        });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'Численность населения',
                interactive: true,
    title: 'Численность населения<br />\
    <img src="styles/legend/_4_0.png" /> 28217 - 46495<br />\
    <img src="styles/legend/_4_1.png" /> 46495 - 80748<br />\
    <img src="styles/legend/_4_2.png" /> 80748 - 132102<br />\
    <img src="styles/legend/_4_3.png" /> 132102 - 277378<br />\
    <img src="styles/legend/_4_4.png" /> 277378 - 673469<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr__1,lyr__2,lyr__3,lyr__4];
lyr__1.set('fieldAliases', {'ISO_A3': 'ISO_A3', 'ISO_A2': 'ISO_A2', 'WB_A3': 'WB_A3', 'HASC_0': 'HASC_0', 'GAUL_0': 'GAUL_0', 'WB_REGION': 'WB_REGION', 'WB_STATUS': 'WB_STATUS', 'SOVEREIGN': 'SOVEREIGN', 'NAM_0': 'NAM_0', });
lyr__2.set('fieldAliases', {'id': 'id', 'Name': 'Название города', 'X': 'X', 'Y': 'Y', 'Population': 'Численность населения', 'Men': 'Численность мужчин', 'Woman': 'Численность женщин', });
lyr__3.set('fieldAliases', {'id': 'id', 'Name': 'Название города', 'X': 'X', 'Y': 'Y', 'Population': 'Численность населения', 'Men': 'Численность мужчин', 'Woman': 'Численность женщин', });
lyr__4.set('fieldAliases', {'id': 'id', 'Name': 'Название города', 'X': 'X', 'Y': 'Y', 'Population': 'Численность населения', 'Men': 'Численность мужчин', 'Woman': 'Численность женщин', });
lyr__1.set('fieldImages', {'ISO_A3': 'TextEdit', 'ISO_A2': 'TextEdit', 'WB_A3': 'TextEdit', 'HASC_0': 'TextEdit', 'GAUL_0': 'Range', 'WB_REGION': 'TextEdit', 'WB_STATUS': 'TextEdit', 'SOVEREIGN': 'TextEdit', 'NAM_0': 'TextEdit', });
lyr__2.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'X': 'Hidden', 'Y': 'Hidden', 'Population': 'Range', 'Men': 'Range', 'Woman': 'Range', });
lyr__3.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'X': 'Hidden', 'Y': 'Hidden', 'Population': 'Range', 'Men': 'Range', 'Woman': 'Range', });
lyr__4.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'X': 'Hidden', 'Y': 'Hidden', 'Population': 'Range', 'Men': 'Range', 'Woman': 'Range', });
lyr__1.set('fieldLabels', {'ISO_A3': 'no label', 'ISO_A2': 'no label', 'WB_A3': 'no label', 'HASC_0': 'no label', 'GAUL_0': 'no label', 'WB_REGION': 'no label', 'WB_STATUS': 'no label', 'SOVEREIGN': 'no label', 'NAM_0': 'no label', });
lyr__2.set('fieldLabels', {'Name': 'no label', 'Population': 'no label', 'Men': 'no label', 'Woman': 'no label', });
lyr__3.set('fieldLabels', {'Name': 'no label', 'Population': 'no label', 'Men': 'no label', 'Woman': 'no label', });
lyr__4.set('fieldLabels', {'Name': 'header label - always visible', 'Population': 'header label - always visible', 'Men': 'header label - always visible', 'Woman': 'header label - always visible', });
lyr__4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});