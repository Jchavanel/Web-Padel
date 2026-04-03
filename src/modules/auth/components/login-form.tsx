"use client";

import Link from "next/link";
import { useState } from "react";
import { Loader2, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/browser";
import { clientEnv } from "@/lib/env/client";
import { loginSchema } from "@/modules/auth/schemas/login.schema";

interface LoginFormProps {
  redirectTo?: string;
}

export function LoginForm({ redirectTo = "/mi-panel" }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);

    const parsed = loginSchema.safeParse({ email, password });
    if (!parsed.success) {
      setErrorMessage(parsed.error.issues[0]?.message ?? "Revisa los datos introducidos.");
      return;
    }

    const supabase = createClient();
    if (!supabase) {
      setErrorMessage("Falta configurar Supabase en las variables de entorno públicas.");
      return;
    }

    setIsSubmitting(true);
    const { error } = await supabase.auth.signInWithPassword(parsed.data);
    setIsSubmitting(false);

    if (error) {
      setErrorMessage(error.message === "Invalid login credentials" ? "Email o contraseña incorrectos." : error.message);
      return;
    }

    window.location.assign(redirectTo);
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="space-y-1.5">
        <label htmlFor="login-email" className="text-sm font-medium text-slate-900">
          Email
        </label>
        <input
          id="login-email"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
          placeholder="tu@email.com"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="login-password" className="text-sm font-medium text-slate-900">
          Contraseña
        </label>
        <input
          id="login-password"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
          placeholder="Tu contraseña"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <div className="flex items-center justify-between gap-3 text-sm">
        <Link href="/recuperar-acceso" className="font-medium text-brand transition hover:opacity-80">
          He olvidado mi contraseña
        </Link>
        <Link href="/registro" className="text-slate-600 transition hover:text-slate-900">
          Crear cuenta
        </Link>
      </div>

      {errorMessage ? (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">{errorMessage}</div>
      ) : null}

      <Button className="w-full" disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <LogIn className="h-4 w-4" />}
        {isSubmitting ? "Accediendo" : "Entrar"}
      </Button>

      <p className="text-xs leading-6 text-slate-500">
        Accedes con la misma cuenta para reservar pistas, apuntarte a torneos y gestionar tu actividad dentro del club.
      </p>

      {!clientEnv.NEXT_PUBLIC_SUPABASE_URL || !clientEnv.NEXT_PUBLIC_SUPABASE_KEY ? (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Falta configurar Supabase en la app. Revisa <code className="font-mono">NEXT_PUBLIC_SUPABASE_URL</code> y la clave pública.
        </div>
      ) : null}
    </form>
  );
}
