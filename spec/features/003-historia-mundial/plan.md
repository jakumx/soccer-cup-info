# 003 · Historia del Mundial — Plan

## Enfoque

Sección informativa dividida en tres tabs. En lugar de mostrar todo el contenido apilado verticalmente, los tabs permiten al usuario elegir qué ver sin scroll excesivo.

## Implementación

1. Crear `src/data/history.ts` con dos arrays tipados: `fifaHistory` (hitos 1904–2026) y `hostSelection` (evolución del proceso de sedes).
2. Crear `src/components/WorldCupHistory.tsx` con `TimelineSection` (componente de línea de tiempo reutilizable).
3. Refactorizar `App.tsx` para usar tabs con navegación entre "Mapa", "Historia" y "Sedes".
4. Usar `AnimatePresence` de Motion para transiciones suaves entre tabs.
5. Agregar roles ARIA (`role="tablist"`, `role="tab"`, `role="tabpanel"`) para accesibilidad.

## Decisiones

- **Tabs, no acordeón** — tabs permiten ver el contenido completo de cada sección sin colapsar/expandir.
- **Timeline vertical alternado** — los eventos se muestran a izquierda/derecha alternadamente en desktop, centrados en mobile.
- **Motion `whileInView`** — los eventos de la timeline se animan al hacer scroll, no todos a la vez.
- **Datos en archivo separado** — `history.ts` mantiene los datos fuera del componente para facilitar ediciones futuras.

## Riesgos

- **Pre-commit hook (lint-staged + oxlint)** — oxlint no soporta JSON/CSS/MD, causaba SIGKILL. Se eliminó esa regla de lint-staged.
- **Workflow opencode-review sin git user config** — se agregó `git config` antes de la action.
- **opencode.json con keys no soportadas en CI** — se eliminaron `envFile` y `mcpServers` del config raíz.
