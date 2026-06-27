# 003 · Historia del Mundial

**Estado:** implementado ✅

## Qué hace

El usuario puede navegar entre tres vistas mediante tabs: el mapa interactivo de campeones, una línea de tiempo con los hitos históricos de la Copa del Mundo (1904–2026), y una sección que explica cómo se eligen las sedes del torneo.

## Por qué

La portada inicial solo mostraba datos fríos (mapa + lista). La historia y el proceso de elección de sedes dan contexto y hacen la página más informativa y atractiva para aficionados al fútbol.

## Criterios de aceptación

- [x] Existe una barra de tabs con tres opciones: "Mapa", "Historia", "Sedes".
- [x] El tab "Mapa" muestra el mapa coroplético, la leyenda y la lista de campeones.
- [x] El tab "Historia" muestra una línea de tiempo vertical con hitos desde 1904 hasta 2026.
- [x] El tab "Sedes" muestra el proceso histórico de elección de países anfitriones.
- [x] Los tabs tienen animación de entrada/salida con Motion.
- [x] Los tabs cumplen con roles ARIA (`tablist`, `tab`, `tabpanel`) para accesibilidad.
- [x] Los datos históricos están basados en hechos reales de la FIFA.
- [x] El proyecto compila sin errores (`npm run build`).

## Fuera de alcance

- Datos detallados por edición (grupos, goleadores) — será otra feature.
- Selector de año para filtrar el mapa — backlog.
- Bracket de eliminatorias — v2 del roadmap.
