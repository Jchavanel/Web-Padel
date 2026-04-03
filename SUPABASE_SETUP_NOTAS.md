# Notas para probar contacto y autenticación con Supabase

Para que esta versión funcione correctamente en local o en Vercel hay que revisar estos puntos en Supabase:

## 1. Aplicar las nuevas migraciones
Ejecuta en orden:

- `supabase/migrations/0002_contact_submissions.sql`
- `supabase/migrations/0003_auth_profiles.sql`

La primera crea la tabla `contact_submissions` y habilita inserciones desde el formulario público.
La segunda sincroniza `auth.users` con `public.profiles` al registrarse un nuevo usuario.

## 2. Revisar URL de sitio y redirecciones de Auth
En **Authentication > URL Configuration** añade:

- URL del sitio en local, por ejemplo `http://localhost:3000`
- URL del despliegue en Vercel
- Redirección adicional para recuperación de contraseña:
  - `http://localhost:3000/actualizar-contrasena`
  - `https://tu-dominio/actualizar-contrasena`

Si estas URLs no están permitidas, la recuperación de contraseña no terminará bien.

## 3. Variables de entorno mínimas
La app necesita:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` o `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `ENABLE_DEMO_AUTH=false`

## 4. Comprobaciones rápidas
- El registro debe crear un usuario en `auth.users`.
- Tras registrarte, debe aparecer su perfil en `public.profiles`.
- El formulario de contacto debe insertar una fila en `public.contact_submissions`.
