
# Tesis - Modelo Predictivo de Rendimiento Agrícola

Este repositorio contiene los archivos técnicos y complementarios del trabajo de grado titulado:

**“Análisis Predictivo para la Optimización Agrícola en la Vereda San Lorenzo (Boyacá)”**

El proyecto busca estimar el rendimiento agrícola de cultivos como arándano, fresa, lechuga, cebolla de bulbo y espinaca, utilizando variables climáticas, edáficas y satelitales procesadas mediante técnicas de ciencia de datos y aprendizaje automático.

---

## 📁 Estructura del repositorio

```
📂 data/
   └── Base_Datos_Consolidada.xlsx         # Base final con todas las variables
📂 scripts/
   └── modelo_predictivo.py                # Script de predicción por cultivo
📂 notebooks/
   └── Modelo_Predictivo_por_Cultivo.ipynb # Notebook interactivo con análisis
📂 gee/
   └── gee_ndvi_ndmi.js                    # Script de Google Earth Engine para NDVI y NDMI
📂 figuras/
   └── Figura_Evolucion_Rendimiento_Cultivos.png
📂 apendices/
   └── Cronograma_Actividades.xlsx         # Cronograma del proyecto
README.md
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
- **Open-Meteo** – Parámetros diarios por coordenadas
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
