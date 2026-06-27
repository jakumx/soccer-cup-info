# 004 · Year Selector (Explorador por Edición)

**Estado:** implementado ✅

## Qué hace

El usuario puede seleccionar un año de la Copa del Mundo desde una fila horizontal de botones. Al seleccionar un año, el país anfitrión se resalta en el mapa con un borde dorado y se muestra una tarjeta con los detalles del torneo: campeón, subcampeón, tercer y cuarto lugar, número de equipos, partidos, goles y máximo goleador.

## Por qué

Es la puerta de entrada al explorador por edición (v2 del roadmap). Permite al usuario navegar los 22 mundiales de forma rápida y visual, conectando la selección con el mapa y los datos del torneo.

## Criterios de aceptación

- [x] Existe una fila horizontal de botones con todos los años (1930–2022).
- [x] Al hacer clic en un año, se resalta visualmente el botón seleccionado.
- [x] Al hacer clic en el mismo año nuevamente, se deselecciona (toggle).
- [x] Al seleccionar un año, el país anfitrión se resalta en el mapa (borde dorado/ámbar).
- [x] Al seleccionar un año, aparece una tarjeta con los detalles del torneo.
- [x] La tarjeta muestra: campeón, subcampeón, 3°/4° lugar, equipos, partidos, goles y goleador.
- [x] El resaltado en el mapa funciona correctamente para casos especiales (West Germany → Germany).
- [x] Mundiales con sede múltiple (2002: South Korea / Japan) omiten el resaltado en lugar de fallar.
- [x] Los botones tienen `aria-pressed` para accesibilidad.
- [x] El proyecto compila sin errores (`npm run build`).

## Fuera de alcance

- Árbol de eliminatorias (bracket) — será otra feature de v2.
- Goleadores detallados por ronda — solo se muestra el máximo goleador del torneo.
- Datos del Mundial 2026 — no ha ocurrido aún.
