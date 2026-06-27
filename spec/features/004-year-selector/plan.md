# 004 · Year Selector — Plan

## Enfoque

Selector horizontal de años con scroll, integrado al tab de Mapa. Al seleccionar un año, se resalta la sede en el mapa y se muestra una tarjeta de detalles. El estado vive en `App.tsx` y fluye hacia `YearSelector`, `WorldMap` y `TournamentDetails`.

## Implementación

1. Crear `YearSelector.tsx` — fila horizontal con scroll, cada botón es un año, toggle on click.
2. Crear `TournamentDetails.tsx` — tarjeta con información del torneo seleccionado.
3. Actualizar `WorldMap.tsx` — aceptar prop `highlightedCountry`, renderizar con borde dorado.
4. Agregar `getTopoName` en `map-utils.ts` — reverse lookup de nombres de países para el mapa.
5. Agregar mapeo especial `West Germany → Germany` para el caso de 1974.
6. Manejar sede dual 2002 (South Korea / Japan) omitiendo el resaltado.
7. Agregar `aria-pressed` a los botones del selector.

## Decisiones

- **Toggle en vez de selección fija** — clic repetido deselecciona, permitiendo volver al estado neutral del mapa.
- **Resaltado con borde dorado y fill ámbar** — el país anfitrión se distingue claramente sin perder el contexto de títulos.
- **Reverse lookup separado** — `dataKeyToTopoName` se construye automáticamente desde `topoNameToDataKey`, más el caso extra de West Germany.
- **Layout responsive** — en desktop la tarjeta de detalles y la lista de campeones se muestran lado a lado (grid 2 columnas).

## Riesgos

- **Nombres históricos de sedes** — Irlanda del Norte 2028, etc. Si en el futuro hay nombres no mapeados, `getTopoName` devuelve el nombre sin cambios, que puede no coincidir con el topoJSON.
- **Sedes múltiples** — 2002 (Corea/Japón), 2026 (3 países). Se omite el resaltado cuando el string contiene "/".
