import Link from "next/link";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";
import { getCurrentUser } from "@/lib/auth/current-user";
import { LoginForm } from "@/modules/auth/components/login-form";

interface LoginPageProps {
  searchParams?: {
    redirectTo?: string;
  };
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const user = await getCurrentUser();
  if (user) {
    redirect(searchParams?.redirectTo ?? "/mi-panel");
  }

  return (
    <div className="mx-auto max-w-md py-6">
      <Card className="space-y-6 rounded-[2rem] p-8">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand">Área privada</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">Accede a tu cuenta</h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Entra para gestionar tus reservas, tus partidos y toda tu actividad dentro del club.
          </p>
        </div>

        <LoginForm redirectTo={searchParams?.redirectTo} />

        <p className="text-sm text-slate-600">
          ¿Todavía no tienes cuenta?{" "}
          <Link href="/registro" className="font-medium text-brand transition hover:opacity-80">
            Regístrate aquí
          </Link>
          .
        </p>
      </Card>
    </div>
  );
}
