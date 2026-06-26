# soccercupinfo

Mapa histórico interactivo de campeones de la Copa del Mundo FIFA (1930–2022).

## Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4** — estilos con `@theme` y OKLCH
- **D3.js** (`d3-geo`, `d3-scale`) — mapa coroplético mundial
- **topoJSON** (`world-atlas`, `topojson-client`) — datos geográficos
- **Motion** — animaciones de tooltip y UI
- **Context7 MCP** — documentación de librerías para el agente

## Estructura

```
src/
├── components/       # Componentes React (WorldMap, Tooltip, Legend, ChampionsList)
├── hooks/            # Custom hooks (useWorldMap, useTooltip)
├── data/             # worldcups.json con datos históricos
├── utils/            # map-utils.ts (escalas, colores, helpers)
├── types/            # TypeScript definitions
└── styles/           # Tailwind imports + tokens
```

## Agentes de opencode

- `@worldcup-data` — subagente experto en datos históricos del mundial
- `@worldcup-map` — subagente especialista en visualización D3/mapas

## Configuración

- `opencode.json` — MCP servers (Context7) y configuración de agents
- `.opencode/skills/frontend-design/SKILL.md` — skill de diseño frontend
- `.opencode/agents/` — definiciones de agents

## Comandos

```bash
npm run dev      # Desarrollo
npm run build    # Build production
npm run preview  # Preview build
```

## Skills

El proyecto usa la skill `frontend-design` para guiar la implementación de UI con Tailwind v4 y Motion.
