# Tech stack y convenciones

## Tecnologías

- **Lenguaje:** TypeScript estricto
- **Framework / runtime:** React 19 + Vite 8
- **Mapa:** D3.js (`d3-geo`, `d3-scale`) + topoJSON (`world-atlas`, `topojson-client`)
- **Estilos:** Tailwind CSS v4
- **Animaciones:** Motion (antes Framer Motion)
- **Tests:** no hay suite — se valida con `npm run build` (tsc + vite build)
- **Despliegue:** AWS Amplify (free tier), auto-deploy desde main

## Archivos / módulos clave

- `src/data/worldcups.json` — datos históricos completos (22 torneos, 1930–2022).
- `src/components/WorldMap.tsx` — mapa coroplético D3.
- `src/components/WorldMapTooltip.tsx` — tooltip interactivo animado.
- `src/components/ColorLegend.tsx` — leyenda de la escala de color.
- `src/hooks/useWorldMap.ts` — carga de topoJSON y proyección D3.
- `src/utils/map-utils.ts` — escalas de color, lookup de países, helpers.
- `public/countries-110m.json` — topoJSON del mundo (desde `world-atlas`).
- `opencode.json` — configuración de opencode (MCP, agents, skills).

## Comandos

- `npm run dev` — arranca el servidor de desarrollo (Vite).
- `npm run build` — compila para producción (tsc + vite build).
- `npm run lint` — oxlint.
- `npm run preview` — previsualiza el build de producción.

## Modelo de datos / dominio

- **Tournament** — año, sede, campeón, subcampeón, 3º/4º, goles, partidos, equipos, max. goleador.
- **CountryStats** — títulos, subcampeonatos, 3º/4º puestos, código ISO α-3, años ganados.
- **TooltipData** — nombre del país, títulos, años, posición del ratón.
- Los datos se importan directamente del JSON, sin fetch asíncrono.

## Convenciones

- `camelCase` para variables y funciones.
- Componentes en `src/components/`, hooks en `src/hooks/`, tipos en `src/types/`.
- Prefijo `use` para hooks.
- Eventos de D3 se conectan vía props de React, no con selecciones D3.
- Idioma: español para UI, inglés para código.

## Estilo visual

- Tema claro/oscuro automático (prefers-color-scheme).
- Tipografía: DM Serif Display para títulos, Jakarta Sans para texto.
- Paleta de azules secuencial para el mapa (escala de 0 a 5+ títulos).
- Layout responsive: el mapa se adapta al ancho del contenedor.

## Límites duros

- No añadir dependencias sin aprobación.
- No modificar `public/countries-110m.json` (se regenera con `npm update world-atlas`).
- No subir `.env` al repo.
- No hardcodear API keys en el código.
