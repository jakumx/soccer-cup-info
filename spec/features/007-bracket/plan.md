# 007 · Bracket — Plan

## Enfoque

Componente React puro que recibe un año y renderiza el árbol de eliminatorias usando layout posicional con CSS absoluto y líneas SVG. Los datos se obtienen de `src/data/knockout.ts`. Dos modos de visualización: árbol con conectores (torneos con eliminación directa) y grilla simple (torneos con formato grupo final).

## Implementación

1. Crear `src/components/Bracket.tsx` con las interfaces `BracketProps` y lógica de layout.
2. Crear `src/data/knockout.ts` con datos de todos los torneos (1930–2022).
3. Implementar `MatchBox` — caja SVG con dos equipos, marcador y resaltado del ganador.
4. Implementar `GroupMatchCard` — versión simplificada para formato grilla.
5. Calcular layout posicional: `MATCH_H`, `GAP`, `ARM` para líneas de conexión.
6. Generar líneas SVG entre rondas con `getWinner()` para determinar el flujo.
7. Mostrar tercer lugar en el header con `thirdPlace` del dato.
8. Integrar en el tab de detalle del torneo en `App.tsx`.

## Decisiones

- **Layout con posicionamiento absoluto + SVG** — más mantenible que canvas o D3 para este tipo de visualización. Las cajas son elementos React posicionados con `top` calculado, y las líneas son elementos SVG superpuestos.
- **`getWinner()` centralizado** — función que determina el ganador comparando scores primero y penalties como desempate. Se reutiliza en `MatchBox` y `GroupMatchCard`.
- **Dos modos de visualización** — `isGroupFormat` detecta si el torneo tiene una sola ronda (1950, 1974, 1978) y cambia a grilla en vez de árbol.
- **Datos planos en `knockout.ts`** — un array con todos los torneos, cada uno con sus rondas y partidos. Sin fetching externo ni API.
- **Scroll horizontal** — el árbol puede ser ancho para torneos con 4 rondas; se envuelve en `overflow-x-auto`.

## Riesgos

- **Nombres históricos de equipos** — West Germany, Yugoslavia, etc. Deben coincidir exactamente con los nombres usados en `worldcups.json` y topoJSON.
- **Formato 1950** — no hubo final sino grupo final de 4 equipos. La grilla es la representación más fiel.
- **Formato 1974/1978** — segunda fase en grupos de 4, la grilla solo muestra los partidos decisivos (los que definieron el finalista de cada grupo).
