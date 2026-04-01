# Padel Club MVP Scaffold

Scaffold técnico inicial para una web de clubes de pádel construida con Next.js (App Router), TypeScript y Supabase.

## Qué incluye

- Estructura modular por dominios (`reservations`, `pricing`, `open-matches`, `desk`, `admin`)
- Rutas públicas y privadas
- Layouts base
- Middleware preparado para auth
- Clientes Supabase para navegador y servidor
- Casos de uso server-side con stubs y datos demo
- Componentes reutilizables mínimos
- Migración SQL inicial para Supabase/PostgreSQL

## Primeros pasos

1. Copia `.env.example` a `.env.local`
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Arranca el proyecto:
   ```bash
   npm run dev
   ```

## Estructura

- `src/app`: rutas y layouts
- `src/modules`: módulos por dominio
- `src/server`: casos de uso, políticas y repositorios
- `src/lib`: clientes, helpers y utilidades
- `supabase/migrations`: SQL inicial

## Estado del scaffold

Esto es una base de arranque. No incluye todavía:
- integración completa con Stripe,
- queries reales a Supabase para todas las pantallas,
- RLS detallado,
- formularios finales de producción,
- testing automatizado.

La base está preparada para evolucionar hacia esas piezas sin rehacer la arquitectura.
