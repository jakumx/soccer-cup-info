# 001 · Mapa mundial interactivo — Plan

## Enfoque

Mapa coroplético clásico con D3.js sobre proyección Mercator. Los datos geográficos vienen de `world-atlas` (topoJSON 110m). Los datos históricos están en un JSON estático. El lookup de país se hace por nombre (mapeando nombres del topoJSON a las claves del JSON de datos).

## Implementación

1. Inicializar proyecto con Vite + React + TypeScript.
2. Instalar dependencias: D3, topojson-client, world-atlas, Motion, Tailwind v4.
3. Copiar `countries-110m.json` de `world-atlas` a `public/`.
4. Crear `src/data/worldcups.json` con datos de los 22 torneos (1930–2022).
5. Implementar `useWorldMap` hook: carga topoJSON, crea proyección, devuelve features.
6. Implementar `map-utils`: escala de color, lookup de país por nombre, tooltip data.
7. Implementar `WorldMap`: renderiza paths coloreados con interacciones.
8. Implementar `WorldMapTooltip`: tooltip animado con Motion.
9. Implementar `ColorLegend` y `ChampionsList`.
10. Verificar que el build pasa.

## Decisiones

- **Lookup por nombre, no por código ISO** — el topoJSON de world-atlas no incluye `iso_a3`. Se mapea por nombre del topoJSON al nombre del país en los datos.
- **Reino Unido → Inglaterra** — el topoJSON tiene "United Kingdom" como un solo país, pero FIFA cuenta a Inglaterra por separado con 1 título (1966).
- **Alemania unificada** — "West Germany" del topoJSON no existe; se unifica con "Germany" que tiene 4 títulos combinados.
- **Proyección Mercator** — más familiar para usuarios que Orthographic.
- **Estilos con Tailwind v4** — consistente con el resto del proyecto.

## Riesgos

- **Países históricos que ya no existen** (Checoslovaquia, URSS, Yugoslavia) — se mapean a sus sucesores modernos (Czechia, Rusia, Serbia). No tienen títulos, solo subcampeonatos/4º puestos, así que el mapa no se ve afectado.
- **Renderizado de SVG en React** — D3 se usa solo para las proyecciones; el render de paths lo hace React directamente, no D3 selections.
