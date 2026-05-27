
# Tesis - Modelo Predictivo de Rendimiento Agrícola

Este repositorio contiene los archivos técnicos y complementarios del trabajo de grado titulado:

**“Análisis Predictivo para la Optimización Agrícola en la Vereda San Lorenzo (Boyacá)”**

El proyecto busca estimar el rendimiento agrícola de cultivos como arándano, fresa, lechuga, cebolla de bulbo y espinaca, utilizando variables climáticas, edáficas y satelitales procesadas mediante técnicas de ciencia de datos y aprendizaje automático.

---

## 📁 Estructura del repositorio

```
📂 BD_San_Lorenzo_2020-2024.xlsx        # Base original consolidada (clima, suelo, satélite, agrícola)
📂 base_limpia.xlsx                     # Base depurada para entrenamiento de modelos
📂 rendimientos_temporales.xlsx         # Rendimiento real vs. predicho por cultivo y año
📂 importancia_variables.xlsx           # Resultados de importancia de variables en Random Forest

📂 notebooks/
   ├── Limpieza_Unificacion.ipynb       # Procesos de depuración y cruce de variables
   ├── Entrenamiento_RF.ipynb           # Construcción y evaluación del modelo Random Forest
   └── Visualizaciones.ipynb            # Gráficos de evolución, comparación y clasificación vegetativa

📂 scripts_js/
   ├── NDVI_NDMI.js                     # Extracción mensual de índices NDVI y NDMI (Sentinel-2, GEE)
   ├── Propiedades_Edaficas.js          # Arena, limo, arcilla, pH desde SoilGrids
   └── Integracion_Climatica.js         # Temperatura, precipitación y radiación solar (ERA5-Land, NASA POWER)

📂README.md                               # Documentación general del repositorio
```

---

## 🛠️ Tecnologías utilizadas

- Python (pandas, scikit-learn, NumPy, matplotlib, seaborn)
- Google Earth Engine (JavaScript)
- Microsoft Excel
- Power BI (para visualización de exploraciones)
- GitHub (para control de versiones y archivo de respaldo)

---

## 📊 Datos de entrada

Los datos utilizados provienen de fuentes abiertas:

- **NASA POWER** – Variables climáticas históricas
- **Google Earth Engine** – NDVI y NDMI vía Sentinel-2
- **SoilGrids** – Datos edáficos de textura y pH
- **AGRONET Colombia** – Producción y rendimiento por cultivo

---

## 👤 Autor

**Jonathan Álvarez**  
Estudiante de la Especialización en Ciencia de Datos y Analítica  
Universidad Nacional Abierta y a Distancia – UNAD  
Sogamoso, Boyacá, Colombia

---

## 📄 Licencia

Este proyecto puede ser compartido con fines académicos y educativos, siempre que se cite la fuente y se respete la autoría.
