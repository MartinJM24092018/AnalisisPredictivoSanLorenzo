// === NDVI y NDMI Mensual sobre multipolígono - San Lorenzo ===

// 1. Geometría del multipolígono
var geometry = /* color: #d63000 */ee.Geometry({
  "type": "GeometryCollection",
  "geometries": [...],  // Aquí iría toda tu geometría completa que omitimos por espacio
  "coordinates": []
});

Map.centerObject(geometry, 12);
Map.addLayer(geometry, {color: 'red'}, 'Área de estudio');

// 2. Rango de fechas
var inicio = ee.Date('2020-01-01');
var fin = ee.Date('2024-12-31');

// 3. Función para obtener NDVI y NDMI mensualmente
function obtenerIndices(mes) {
  var fechaInicio = ee.Date(mes);
  var fechaFin = fechaInicio.advance(1, 'month');

  var coleccion = ee.ImageCollection("COPERNICUS/S2_SR")
    .filterBounds(geometry)
    .filterDate(fechaInicio, fechaFin)
    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20))
    .median();

  var ndvi = coleccion.normalizedDifference(['B8', 'B4']).rename('NDVI');
  var ndmi = coleccion.normalizedDifference(['B8', 'B11']).rename('NDMI');

  var imagen = ndvi.addBands(ndmi).set({
    'fecha': fechaInicio.format('YYYY-MM'),
    'año': fechaInicio.get('year'),
    'mes': fechaInicio.get('month')
  });

  return imagen.reduceRegion({
    reducer: ee.Reducer.mean(),
    geometry: geometry,
    scale: 10,
    maxPixels: 1e9
  }).set('fecha', fechaInicio.format('YYYY-MM'));
}

// 4. Crear lista de meses
var meses = ee.List.sequence(0, ee.Number(fin.difference(inicio, 'month')).subtract(1))
  .map(function(m) {
    return inicio.advance(ee.Number(m), 'month');
  });

// 5. Ejecutar la función para cada mes
var resultados = ee.FeatureCollection(meses.map(function(mes) {
  return ee.Feature(null, obtenerIndices(ee.Date(mes)));
}));

// 6. Exportar resultados a Google Drive
Export.table.toDrive({
  collection: resultados,
  description: 'NDVI_NDMI_Mensual_SanLorenzo',
  fileFormat: 'CSV'
});
