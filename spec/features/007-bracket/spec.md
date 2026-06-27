# 007 · Bracket (Árbol de Eliminatorias)

**Estado:** implementado ✅

## Qué hace

Muestra el cuadro de eliminatorias de cada edición de la Copa del Mundo en formato de árbol (bracket). Para torneos con eliminación directa (R16, QF, SF, Final), renderiza partidos con cajas de equipo conectadas por líneas SVG. Para torneos sin eliminación directa (1950, 1974, 1978), muestra una grilla de partidos. Incluye el partido por el tercer lugar cuando existe. El campeón se resalta en negrita.

## Por qué

Completa la experiencia de exploración por edición mostrando cómo se desarrolló la fase final del torneo. Es la representación visual más reconocible de una copa del mundo y permite al aficionado revivir la ruta del campeón.

## Criterios de aceptación

- [x] Árbol de eliminatorias con rondas: Octavos, Cuartos, Semifinales, Final según corresponda.
- [x] Partido por el tercer lugar mostrado en el header del bracket.
- [x] Cajas de equipo con nombre, marcador y ganador en negrita.
- [x] Líneas SVG conectando las cajas para mostrar el flujo del torneo.
- [x] Años sin eliminación directa (1950, 1974, 1978) muestran grilla de partidos.
- [x] Header informativo: cantidad de equipos y formato del torneo.
- [x] Campeón resaltado en negrita en la final.
- [x] Penalties mostrados entre paréntesis junto al marcador.
- [x] Soporte responsive con scroll horizontal.
- [x] El proyecto compila sin errores (`npm run build`).

## Fuera de alcance

- Datos de fase de grupos (solo fase final/eliminatorias).
- Animaciones de transición entre años.
- Diagrama de grupos previo al bracket.
