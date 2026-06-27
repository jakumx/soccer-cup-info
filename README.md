# SoccerCupInfo

Mapa histórico interactivo de campeones de la Copa del Mundo FIFA (1930–2026).

Explora qué países han ganado más Mundiales, navega por la historia del torneo y descubre cómo se eligen las sedes.

## Funcionalidades

- **Mapa coroplético** — países coloreados según número de títulos, con tooltip interactivo.
- **Línea de tiempo** — hitos históricos desde la fundación de la FIFA (1904) hasta el Mundial de 48 equipos (2026).
- **Sedes** — evolución del proceso de elección de países anfitriones.
- **Ranking de campeones** — lista completa con medallas y años ganados.
- **Dark mode** — tema claro/oscuro automático.

## Stack

| Tecnología | Uso |
|---|---|
| React 19 + TypeScript | UI |
| Vite 8 | Build tool |
| D3.js (d3-geo, d3-scale) | Mapa y escalas |
| topoJSON (world-atlas) | Datos geográficos |
| Tailwind CSS v4 | Estilos |
| Motion | Animaciones |
| AWS Amplify | Hosting (auto-deploy desde main) |

## Desarrollo

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build producción (tsc + vite build)
npm run preview  # Previsualizar build
npm run lint     # Oxlint
```

## Arquitectura

```
src/
├── components/       # WorldMap, WorldMapTooltip, ColorLegend, ChampionsList, WorldCupHistory
├── hooks/            # useWorldMap
├── data/             # worldcups.json, history.ts
├── utils/            # map-utils.ts
├── types/            # Tipos TypeScript
└── styles/           # Tailwind + theme tokens
```

## Live

https://main.d3fqy4hkou1lii.amplifyapp.com/

## Licencia

MIT
