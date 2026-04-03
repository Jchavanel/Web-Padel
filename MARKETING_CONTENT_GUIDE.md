# Contenido dinámico de Home, Torneos y Eventos

Esta versión deja conectada la capa pública de marketing a Supabase sin romper el fallback actual.

## Qué se lee desde Supabase
- `marketing_highlights`: tarjetas destacadas de home
- `marketing_tournaments`: torneos públicos
- `marketing_events`: eventos públicos

## Cómo funciona
- Si las tablas existen y tienen filas activas, la web muestra ese contenido.
- Si la migración no está aplicada o no hay filas activas, la web usa el contenido de respaldo definido en `src/modules/clubs/services/public-content.ts`.

## Campos importantes
### marketing_highlights
- `eyebrow`
- `title`
- `description`
- `href`
- `cta_label`
- `metric`
- `display_order`
- `is_active`

### marketing_tournaments
- `title`
- `start_date`
- `status`
- `category`
- `level`
- `price_label`
- `prize_label`
- `description`
- `href`
- `cta_label`
- `venue`
- `accent`
- `is_featured`
- `display_order`
- `is_active`

### marketing_events
- `title`
- `event_date`
- `time_label`
- `event_type`
- `price_label`
- `capacity_label`
- `description`
- `href`
- `cta_label`
- `accent`
- `is_featured`
- `display_order`
- `is_active`

## Recomendaciones de uso
- Marca solo un torneo y un evento con `is_featured = true` para que el primero de cada lista sea el destacado visual.
- Usa `display_order` para ordenar tarjetas sin tocar código.
- Usa `href` para enviar al usuario a contacto, reservas o una futura ficha de detalle.
- Mantén `is_active = false` para ocultar contenido sin borrarlo.
