import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md">
      <Card className="space-y-5">
        <div>
          <h1 className="text-2xl font-semibold">Acceso</h1>
          <p className="mt-1 text-sm text-slate-600">
            Accede a tus reservas, partidos y actividad dentro del club.
          </p>
        </div>

        <div className="space-y-3">
          <input className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="Email" />
          <input className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="Contraseña" type="password" />
        </div>

        <Button className="w-full">Entrar</Button>
      </Card>
    </div>
  );
}
