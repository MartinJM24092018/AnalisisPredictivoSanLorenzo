// Script para extraer propiedades edáficas desde SoilGrids
// Variables: arena, limo, arcilla, pH

var poligono = ee.FeatureCollection('users/tu_usuario/poligono_SanLorenzo');

// Cargar dataset SoilGrids
var soil = ee.ImageCollection('projects/soilgrids-isric/global_soil_properties')
  .select(['sand', 'silt', 'clay', 'ph'])
  .mean();

// Reducir valores promedio sobre el polígono
var propiedades = soil.reduceRegion({
  reducer: ee.Reducer.mean(),
  geometry: poligono,
  scale: 250,
  maxPixels: 1e13
});

print('Propiedades edáficas promedio:', propiedades);

Export.table.toDrive({
  collection: ee.FeatureCollection([
    ee.Feature(null, propiedades)
  ]),
  description: 'Propiedades_Edaficas_SanLorenzo',
  fileFormat: 'CSV'
});
