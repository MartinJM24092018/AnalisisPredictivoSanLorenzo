// Script para obtener valores mensuales de NDVI y NDMI
// Vereda San Lorenzo, Duitama (Boyacá)

var poligono = ee.FeatureCollection('users/tu_usuario/poligono_SanLorenzo');

// Cargar imágenes Sentinel-2
var sentinel = ee.ImageCollection('COPERNICUS/S2_SR')
  .filterBounds(poligono)
  .filterDate('2020-01-01', '2024-12-31')
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20));

// Calcular NDVI y NDMI
var calcularIndices = function(img) {
  var ndvi = img.normalizedDifference(['B8', 'B4']).rename('NDVI');
  var ndmi = img.normalizedDifference(['B8', 'B11']).rename('NDMI');
  return img.addBands(ndvi).addBands(ndmi);
};

var indices = sentinel.map(calcularIndices);

// Reducir por mes
var mensual = ee.ImageCollection(
  ee.List.sequence(2020, 2024).map(function(year) {
    return ee.List.sequence(1, 12).map(function(month) {
      var filtro = indices.filter(ee.Filter.calendarRange(year, year, 'year'))
                          .filter(ee.Filter.calendarRange(month, month, 'month'));
      return filtro.mean().set('year', year).set('month', month);
    });
  }).flatten()
);

Export.table.toDrive({
  collection: mensual.map(function(img) {
    return ee.Feature(null, {
      'year': img.get('year'),
      'month': img.get('month'),
      'NDVI_mean': img.select('NDVI').reduceRegion({
        reducer: ee.Reducer.mean(),
        geometry: poligono,
        scale: 30
      }).get('NDVI'),
      'NDMI_mean': img.select('NDMI').reduceRegion({
        reducer: ee.Reducer.mean(),
        geometry: poligono,
        scale: 30
      }).get('NDMI')
    });
  }),
  description: 'NDVI_NDMI_SanLorenzo',
  fileFormat: 'CSV'
});
