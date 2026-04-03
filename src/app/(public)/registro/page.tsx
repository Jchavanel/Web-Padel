import Link from "next/link";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";
import { getCurrentUser } from "@/lib/auth/current-user";
import { RegisterForm } from "@/modules/auth/components/register-form";

export default async function RegisterPage() {
  const user = await getCurrentUser();
  if (user) {
    redirect("/mi-panel");
  }

  return (
    <div className="mx-auto max-w-2xl py-6">
      <Card className="space-y-6 rounded-[2rem] p-8">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand">Nueva cuenta</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">Crea tu cuenta en el club</h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Regístrate para reservar pistas, apuntarte a torneos, seguir tu actividad y acceder a la comunidad del club.
          </p>
        </div>

        <RegisterForm />

        <p className="text-sm text-slate-600">
          ¿Ya tienes cuenta?{" "}
          <Link href="/login" className="font-medium text-brand transition hover:opacity-80">
            Accede aquí
          </Link>
          .
        </p>
      </Card>
    </div>
  );
}
