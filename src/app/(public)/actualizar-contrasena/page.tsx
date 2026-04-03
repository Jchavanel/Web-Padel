import { Card } from "@/components/ui/card";
import { UpdatePasswordForm } from "@/modules/auth/components/update-password-form";

export default function UpdatePasswordPage() {
  return (
    <div className="mx-auto max-w-md py-6">
      <Card className="space-y-6 rounded-[2rem] p-8">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand">Nueva contraseña</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">Elige una clave nueva</h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Introduce tu nueva contraseña para recuperar el acceso a tu cuenta y volver a entrar al área privada.
          </p>
        </div>

        <UpdatePasswordForm />
      </Card>
    </div>
  );
}
