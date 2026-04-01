# Padel Club MVP Scaffold

Base técnica inicial para una web de clubes de pádel construida con Next.js (App Router), TypeScript y Supabase.

## Incluye

- Estructura modular por dominios (`reservations`, `pricing`, `open-matches`, `desk`, `admin`)
- Rutas públicas y privadas base
- Layouts y componentes iniciales
- Middleware preparado para sesión demo y actualización de cookies de Supabase
- Clientes Supabase para navegador, servidor y middleware
- Casos de uso server-side con stubs
- Migración SQL inicial para Supabase/PostgreSQL
- `.env.example` y `.env.local` listos para arrancar
- Guía de despliegue en `DEPLOY_GITHUB_VERCEL.md`

## Variables de entorno

1. La app soporta dos nombres de clave pública de Supabase:
   - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

2. Se prioriza `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.

3. `.env.local` está ignorado por Git y **no se subirá** al repositorio.

## Primeros pasos

```bash
npm install
npm run dev
```

## Build

Este scaffold se entrega con `typedRoutes` desactivado para evitar errores de tipado en el primer despliegue de Vercel.

```bash
npm run build
```

## Estructura

- `src/app`: rutas y layouts
- `src/modules`: módulos por dominio
- `src/server`: casos de uso, políticas y repositorios
- `src/lib`: clientes, helpers y utilidades
- `supabase/migrations`: SQL inicial

## Despliegue

Consulta `DEPLOY_GITHUB_VERCEL.md`.

## Estado del scaffold

Esto es una base de arranque. No incluye todavía:

- integración completa con Stripe
- queries reales a Supabase para todas las pantallas
- políticas RLS finales
- formularios de producción
- tests automatizados

La arquitectura ya está preparada para evolucionar sobre esta base sin rehacer el proyecto.
