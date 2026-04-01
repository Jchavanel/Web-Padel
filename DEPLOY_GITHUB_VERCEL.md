# GitHub + Vercel

## 1. Subir a GitHub
```bash
git init
git add .
git commit -m "Initial scaffold for padel club MVP"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

## 2. Variables de entorno en Vercel
Añade estas variables en **Project Settings > Environment Variables**:

- `NEXT_PUBLIC_APP_NAME`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
- `ENABLE_DEMO_AUTH`

Opcionales:
- `SUPABASE_SERVICE_ROLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`

## 3. Deploy
- Importa el repositorio desde GitHub en Vercel.
- Vercel detectará Next.js automáticamente.
- Guarda las variables y despliega.
- Cada push a `main` generará un nuevo deploy.

## 4. Supabase
Ejecuta la migración inicial:
- abre `supabase/migrations/0001_init.sql`
- copia su contenido en el SQL Editor de Supabase
- ejecútalo en tu proyecto
