# 002 · CI/CD pipeline

**Estado:** implementado ✅

## Qué hace

Cada Pull Request a `main` ejecuta automáticamente lint (oxlint), typecheck (tsc) y build. Un agente de opencode revisa el código y deja comentarios en el PR. Al hacer merge a `main`, se deploya a AWS Amplify y se genera un tag + release en GitHub con changelog automático.

## Por qué

Automatizar la calidad del código y el despliegue elimina errores humanos y acelera el feedback loop. El code review con opencode añade una capa extra de revisión sin coste.

## Criterios de aceptación

- [x] Al abrir un PR a `main`, se ejecuta `ci.yml` (oxlint + tsc + build).
- [x] Al abrir un PR a `main`, opencode revisa el diff y comenta en el PR.
- [x] Al hacer merge a `main`, Amplify detecta el push y hace deploy automático.
- [x] Al hacer merge a `main`, se crea un tag semántico y GitHub Release con changelog.
- [x] Los mensajes de commit deben seguir conventional commits (validado por husky + commitlint).

## Fuera de alcance

- Despliegue a múltiples entornos (staging/prod). Solo hay producción.
- Tests unitarios o de integración (no hay suite de tests aún).
- Notificaciones por Slack/Discord.
