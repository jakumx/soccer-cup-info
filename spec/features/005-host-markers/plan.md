# 005 · Host Markers — Plan

## Enfoque

Capa SVG adicional dentro del mapa que renderiza círculos en los centroides de los países anfitriones. Los datos de sedes se extraen de `worldcups.json` y se mapean a nombres topoJSON para encontrar las geometrías correctas.

## Implementación

1. Crear `src/data/hosts.ts` — extrae países sede únicos con sus años desde `worldcups.json`. Maneja sedes múltiples (Corea/Japón 2002) dividiendo por " / ".
2. Crear `src/components/HostMarkers.tsx` — renderiza círculos SVG en los centroides calculados con `pathGenerator.centroid()`.
3. Agregar `HostMarkers` al SVG en `WorldMap.tsx` después de los bordes.
4. Escalar tamaño y color del marcador según frecuencia de sede.

## Decisiones

- **Tooltip nativo SVG (`<title>`)** — más simple que tooltip Motion, suficiente para esta feature.
- **Anillo pulsante con `animate-pulse` de Tailwind** — funciona en SVG gracias a que Tailwind v4 aplica las animaciones a elementos SVG.
- **Host data en archivo separado** — `hosts.ts` se puede reutilizar si en el futuro se necesita una lista de sedes fuera del mapa.
- **pathGenerator.centroid()** — método de D3 que devuelve el centroide proyectado [x, y] de una feature geográfica.

## Riesgos

- **Países que cambiaron de nombre** — West Germany → Germany se maneja con `getTopoName`. Para sedes futuras, mantener el mapping actualizado.
- **Centroides en el océano** — para países como Rusia o USA, el centroide puede caer fuera del territorio. No crítico para esta feature.
