# 001 · Mapa mundial interactivo

**Estado:** implementado ✅

## Qué hace

El usuario ve un mapa del mundo donde cada país está coloreado según cuántas Copas del Mundo ha ganado. Al pasar el ratón sobre un país, aparece un tooltip con el nombre, número de títulos y años de victoria. Debajo del mapa hay una leyenda de colores y una lista con el ranking completo de campeones.

## Por qué

Es la funcionalidad principal del proyecto: visualizar de un vistazo la distribución geográfica de los campeonatos mundiales. Sin esta feature, el proyecto no tiene razón de ser.

## Criterios de aceptación

- [x] El mapa carga y renderiza todos los países del mundo con topoJSON.
- [x] Los países con títulos aparecen coloreados en una escala de azules.
- [x] Los países sin títulos aparecen en gris claro.
- [x] Al hacer hover, aparece un tooltip animado con país, títulos y años.
- [x] Debajo del mapa se muestra una leyenda de la escala de color.
- [x] La lista de campeones muestra todos los países con títulos, ordenados de más a menos.
- [x] El proyecto compila sin errores (`npm run build`).

## Fuera de alcance

- Animaciones de transición entre años (será otra feature).
- Datos del Mundial 2026 (aún no ocurrió).
- Comparativa entre países (backlog).
