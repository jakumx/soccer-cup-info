# 005 · Host Markers (Sedes en el mapa)

**Estado:** implementado ✅

## Qué hace

Muestra marcadores circulares en todos los países que han sido sede de la Copa del Mundo. Cada marcador tiene un tamaño y color según cuántas veces el país ha sido anfitrión, y al hacer hover muestra los años exactos. El mapa tiene un anillo pulsante alrededor de cada marcador para llamar la atención.

## Por qué

Complementa el mapa de campeones mostrando dónde se han jugado los mundiales, no solo quién los ganó. Da contexto geográfico adicional y hace el mapa más informativo.

## Criterios de aceptación

- [x] Todos los países sede aparecen con un marcador circular en el mapa.
- [x] El tamaño del marcador varía según la frecuencia: 1 vez (pequeño), 2 veces (mediano), 3+ (grande).
- [x] El color varía: 1 vez (púrpura), 2 veces (gris), 3+ (ámbar/dorado).
- [x] Los marcadores tienen un anillo pulsante animado.
- [x] Al hacer hover sobre un marcador, un tooltip nativo SVG muestra el país y años.
- [x] Sedes múltiples (2002: Corea/Japón) se muestran ambas.
- [x] El proyecto compila sin errores (`npm run build`).

## Fuera de alcance

- Tooltip personalizado con Motion (usa tooltip nativo SVG `title`).
- Interactividad clic en los marcadores (solo hover).
