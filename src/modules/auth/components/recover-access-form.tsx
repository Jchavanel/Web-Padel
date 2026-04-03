"use client";

import Link from "next/link";
import { useState } from "react";
import { Loader2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/browser";
import { clientEnv } from "@/lib/env/client";
import { recoverAccessSchema } from "@/modules/auth/schemas/recover-access.schema";

export function RecoverAccessForm() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    const parsed = recoverAccessSchema.safeParse({ email });
    if (!parsed.success) {
      setErrorMessage(parsed.error.issues[0]?.message ?? "Escribe un email válido.");
      return;
    }

    const supabase = createClient();
    if (!supabase) {
      setErrorMessage("Falta configurar Supabase en las variables de entorno públicas.");
      return;
    }

    setIsSubmitting(true);
    const { error } = await supabase.auth.resetPasswordForEmail(parsed.data.email, {
      redirectTo: `${window.location.origin}/actualizar-contrasena`
    });
    setIsSubmitting(false);

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    setSuccessMessage("Si existe una cuenta con ese email, recibirás un mensaje con instrucciones para recuperar el acceso.");
    setEmail("");
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="space-y-1.5">
        <label htmlFor="recover-email" className="text-sm font-medium text-slate-900">
          Email
        </label>
        <input
          id="recover-email"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
          placeholder="tu@email.com"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      {errorMessage ? (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">{errorMessage}</div>
      ) : null}

      {successMessage ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">{successMessage}</div>
      ) : null}

      <Button className="w-full" disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Mail className="h-4 w-4" />}
        {isSubmitting ? "Enviando instrucciones" : "Recuperar acceso"}
      </Button>

      <div className="flex items-center justify-between gap-3 text-sm">
        <Link href="/login" className="font-medium text-brand transition hover:opacity-80">
          Volver al acceso
        </Link>
        <Link href="/registro" className="text-slate-600 transition hover:text-slate-900">
          Crear cuenta nueva
        </Link>
      </div>

      {!clientEnv.NEXT_PUBLIC_SUPABASE_URL || !clientEnv.NEXT_PUBLIC_SUPABASE_KEY ? (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Falta configurar Supabase en la app. Revisa <code className="font-mono">NEXT_PUBLIC_SUPABASE_URL</code> y la clave pública.
        </div>
      ) : null}
    </form>
  );
}
