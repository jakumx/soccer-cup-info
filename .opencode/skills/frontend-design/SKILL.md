---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces. Use when building web components, pages, or applications with React-based frameworks. Includes Tailwind CSS v4, shadcn/ui components, Motion animations, and visual design philosophy for avoiding generic AI aesthetics.
license: MIT
compatibility: opencode
---

# Frontend Design

Create distinctive, production-grade interfaces avoiding generic "AI slop" aesthetics.

## When to Use

- Building UI with React frameworks (Next.js, Vite, Remix)
- Creating visually distinctive, memorable interfaces
- Implementing accessible components with shadcn/ui
- Styling with Tailwind CSS v4
- Adding animations and micro-interactions
- Creating visual designs, posters, brand materials

## Design Thinking

Before coding, commit to a BOLD aesthetic direction:

- **Purpose**: What problem? Who uses it?
- **Tone**: Pick extreme — brutally minimal, maximalist, retro-futuristic, organic, luxury, playful, editorial
- **Differentiation**: What makes this UNFORGETTABLE?

## Anti-Patterns (NEVER)

- Overused fonts: Inter, Roboto, Arial, system fonts, Space Grotesk
- Cliched colors: purple gradients on white
- Predictable layouts and component patterns
- Cookie-cutter design lacking character
- Generic AI-generated aesthetics

## Best Practices

1. **Accessibility First**: Radix primitives, focus states, semantic HTML
2. **Mobile-First**: Start mobile, layer responsive variants
3. **Design Tokens**: Use `@theme` for spacing, colors, typography
4. **Dark Mode**: Apply dark variants to all themed elements
5. **Performance**: Automatic CSS purging, avoid dynamic class names
6. **TypeScript**: Full type safety
7. **Expert Craftsmanship**: Every detail matters

## Core Stack Summary

**Tailwind v4**: CSS-first config via `@theme`. Single `@import "tailwindcss"`. OKLCH colors. Container queries built-in.

**Motion**: `import { motion, AnimatePresence } from 'motion/react'`. Declarative React animations.

## Implementation Principles

Match implementation complexity to the aesthetic vision.
