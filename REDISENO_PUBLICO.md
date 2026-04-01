# Rediseño público aplicado

## Qué cambia
- Home comercial orientada a venta de club, no a mostrar un MVP técnico.
- Nuevas páginas públicas:
  - `/pistas`
  - `/torneos`
  - `/eventos`
  - `/escuela`
  - `/club`
  - `/contacto`
- Header y footer rediseñados.
- Navegación pública ampliada.
- Mejora visual de:
  - `/disponibilidad`
  - `/precios`
  - `/partidos`
- Branding unificado como `Padel District Club`.
- Rutas privadas de administración movidas a `/admin/...` para evitar conflictos con URLs públicas.

## Ajustes técnicos importantes
- `typedRoutes` sigue desactivado para evitar fallos de build en Vercel.
- Se corrigió el patrón inválido `Link > button` usando `buttonVariants()` reutilizable.
- Se validó que no existan rutas públicas duplicadas y que los `href` internos apunten a rutas existentes.

## Siguientes mejoras recomendadas
1. Conectar contenido público a tablas reales en Supabase (`events`, `tournaments`, `banners`, `courts_content`).
2. Crear panel interno para editar torneos, eventos y destacados de home.
3. Añadir assets reales: fotos, carteles y branding definitivo.
4. Integrar formularios reales de contacto/lead capture.
5. Añadir tests de build y smoke tests en CI.
