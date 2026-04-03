import Link from "next/link";
import { Card } from "@/components/ui/card";
import { RecoverAccessForm } from "@/modules/auth/components/recover-access-form";

export default function RecoverAccessPage() {
  return (
    <div className="mx-auto max-w-md py-6">
      <Card className="space-y-6 rounded-[2rem] p-8">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand">Recuperar acceso</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">Te ayudamos a volver a entrar</h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Indica tu email y te enviaremos las instrucciones para recuperar el acceso a tu cuenta.
          </p>
        </div>

        <RecoverAccessForm />

        <p className="text-sm text-slate-600">
          Si sigues teniendo problemas, también puedes escribirnos desde la página de{" "}
          <Link href="/contacto" className="font-medium text-brand transition hover:opacity-80">
            contacto
          </Link>
          .
        </p>
      </Card>
    </div>
  );
}
