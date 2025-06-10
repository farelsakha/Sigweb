var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_Desa_1 = new ol.format.GeoJSON();
var features_Desa_1 = format_Desa_1.readFeatures(json_Desa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desa_1.addFeatures(features_Desa_1);
var lyr_Desa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Desa_1, 
                style: style_Desa_1,
                popuplayertitle: 'Desa',
                interactive: true,
                title: '<img src="styles/legend/Desa_1.png" /> Desa'
            });
var format_Intersect_2 = new ol.format.GeoJSON();
var features_Intersect_2 = format_Intersect_2.readFeatures(json_Intersect_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Intersect_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Intersect_2.addFeatures(features_Intersect_2);
var lyr_Intersect_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Intersect_2, 
                style: style_Intersect_2,
                popuplayertitle: 'Intersect',
                interactive: true,
    title: 'Intersect<br />\
    <img src="styles/legend/Intersect_2_0.png" /> 2<br />\
    <img src="styles/legend/Intersect_2_1.png" /> 3<br />\
    <img src="styles/legend/Intersect_2_2.png" /> 4<br />\
    <img src="styles/legend/Intersect_2_3.png" /> 5<br />\
    <img src="styles/legend/Intersect_2_4.png" /> <br />' });

lyr_GoogleTerrain_0.setVisible(true);lyr_Desa_1.setVisible(true);lyr_Intersect_2.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_Desa_1,lyr_Intersect_2];
lyr_Desa_1.set('fieldAliases', {'STATUS_KOT': 'STATUS_KOT', 'KODE_2008': 'KODE_2008', 'DESA_2008': 'DESA_2008', 'KEC_2008': 'KEC_2008', 'KAB_2008': 'KAB_2008', 'PROP_2008': 'PROP_2008', });
lyr_Intersect_2.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'fcode': 'fcode', 'namobj': 'namobj', 'metadata': 'metadata', 'srs_id': 'srs_id', 'remark': 'remark', 'jnssmp': 'jnssmp', 'kaptpa': 'kaptpa', 'artpa': 'artpa', 'ogc_fid_2': 'ogc_fid_2', 'fcode_2': 'fcode_2', 'namobj_2': 'namobj_2', 'metadata_2': 'metadata_2', 'srs_id_2': 'srs_id_2', 'remark_2': 'remark_2', 'jnssmp_2': 'jnssmp_2', 'kaptpa_2': 'kaptpa_2', 'artpa_2': 'artpa_2', 'ogc_fid_3': 'ogc_fid_3', 'fcode_3': 'fcode_3', 'namobj_3': 'namobj_3', 'metadata_3': 'metadata_3', 'srs_id_3': 'srs_id_3', 'remark_3': 'remark_3', 'jnssmp_3': 'jnssmp_3', 'kaptpa_3': 'kaptpa_3', 'artpa_3': 'artpa_3', 'STATUS_KOT': 'STATUS_KOT', 'KODE_2008': 'KODE_2008', 'DESA_2008': 'DESA_2008', 'KEC_2008': 'KEC_2008', 'KAB_2008': 'KAB_2008', 'PROP_2008': 'PROP_2008', });
lyr_Desa_1.set('fieldImages', {'STATUS_KOT': 'TextEdit', 'KODE_2008': 'TextEdit', 'DESA_2008': 'TextEdit', 'KEC_2008': 'TextEdit', 'KAB_2008': 'TextEdit', 'PROP_2008': 'TextEdit', });
lyr_Intersect_2.set('fieldImages', {'ogc_fid': 'TextEdit', 'fcode': 'TextEdit', 'namobj': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'remark': 'TextEdit', 'jnssmp': 'TextEdit', 'kaptpa': 'TextEdit', 'artpa': 'TextEdit', 'ogc_fid_2': 'TextEdit', 'fcode_2': 'TextEdit', 'namobj_2': 'TextEdit', 'metadata_2': 'TextEdit', 'srs_id_2': 'TextEdit', 'remark_2': 'TextEdit', 'jnssmp_2': 'TextEdit', 'kaptpa_2': 'TextEdit', 'artpa_2': 'TextEdit', 'ogc_fid_3': 'TextEdit', 'fcode_3': 'TextEdit', 'namobj_3': 'TextEdit', 'metadata_3': 'TextEdit', 'srs_id_3': 'TextEdit', 'remark_3': 'TextEdit', 'jnssmp_3': 'TextEdit', 'kaptpa_3': 'TextEdit', 'artpa_3': 'TextEdit', 'STATUS_KOT': 'TextEdit', 'KODE_2008': 'TextEdit', 'DESA_2008': 'TextEdit', 'KEC_2008': 'TextEdit', 'KAB_2008': 'TextEdit', 'PROP_2008': 'TextEdit', });
lyr_Desa_1.set('fieldLabels', {'STATUS_KOT': 'no label', 'KODE_2008': 'no label', 'DESA_2008': 'no label', 'KEC_2008': 'inline label - always visible', 'KAB_2008': 'no label', 'PROP_2008': 'no label', });
lyr_Intersect_2.set('fieldLabels', {'ogc_fid': 'no label', 'fcode': 'no label', 'namobj': 'no label', 'metadata': 'no label', 'srs_id': 'no label', 'remark': 'no label', 'jnssmp': 'inline label - always visible', 'kaptpa': 'no label', 'artpa': 'no label', 'ogc_fid_2': 'no label', 'fcode_2': 'no label', 'namobj_2': 'no label', 'metadata_2': 'no label', 'srs_id_2': 'no label', 'remark_2': 'no label', 'jnssmp_2': 'no label', 'kaptpa_2': 'no label', 'artpa_2': 'no label', 'ogc_fid_3': 'no label', 'fcode_3': 'no label', 'namobj_3': 'no label', 'metadata_3': 'no label', 'srs_id_3': 'no label', 'remark_3': 'no label', 'jnssmp_3': 'no label', 'kaptpa_3': 'no label', 'artpa_3': 'no label', 'STATUS_KOT': 'no label', 'KODE_2008': 'no label', 'DESA_2008': 'no label', 'KEC_2008': 'no label', 'KAB_2008': 'no label', 'PROP_2008': 'no label', });
lyr_Intersect_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});