# 002 · CI/CD pipeline — Plan

## Enfoque

Tres workflows de GitHub Actions independientes, cada uno responsable de una parte del pipeline. Todo gratis: Amplify free tier, opencode Zen free models, semantic-release open source.

## Implementación

1. Crear `.github/workflows/ci.yml`:
   - Trigger: `pull_request` a `main`.
   - Steps: checkout → npm ci → oxlint → tsc --noEmit → npm run build.
2. Crear `.github/workflows/opencode-review.yml`:
   - Trigger: `pull_request` a `main`.
   - Usar `anomalyco/opencode/github@latest`.
   - Modelo free de Zen (big-pickle).
   - Prompt para revisar calidad, bugs y sugerencias.
3. Crear `.github/workflows/release.yml`:
   - Trigger: `push` a `main`.
   - Usar `cycjimmy/semantic-release-action`.
   - Configurar para crear tag + GitHub Release con changelog.
4. Crear `.github/PULL_REQUEST_TEMPLATE.md`.
5. Configurar husky + commitlint (local) para validar mensajes de commit.
6. Verificar que los workflows son válidos (GitHub Actions linter).

## Decisiones

- **opencode con Zen free** — Big Pickle es un modelo gratuito del ecosistema Zen, sin necesidad de tarjeta de crédito.
- **semantic-release** — ya usamos conventional commits con commitlint, la integración es directa.
- **Amplify auto-deploy** — no necesita workflow de Actions; Amplify Console se conecta al repo y detecta pushes a main.
- **Sin `npm test`** — el proyecto no tiene suite de tests; se valida con `tsc --noEmit` + `npm run build`.

## Riesgos

- **Modelo free de Zen puede dejar de serlo** — si Big Pickle se vuelve de pago, cambiar a otro modelo free o usar DeepSeek V4 Flash Free.
- **Amplify free tiene 1000 min de build/mes** — para un proyecto sin tráfico es más que suficiente.
