"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CheckCircle2, KeyRound, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/browser";
import { updatePasswordSchema } from "@/modules/auth/schemas/update-password.schema";

export function UpdatePasswordForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    if (!supabase) {
      setErrorMessage("Falta configurar Supabase en la app.");
      return;
    }

    let isMounted = true;

    async function prepareRecoverySession() {
      const url = new URL(window.location.href);
      const hash = new URLSearchParams(window.location.hash.replace(/^#/, ""));
      const accessToken = hash.get("access_token");
      const refreshToken = hash.get("refresh_token");
      const hashType = hash.get("type");
      const code = url.searchParams.get("code");
      const queryType = url.searchParams.get("type");

      if (code && queryType === "recovery") {
        const { error } = await supabase.auth.exchangeCodeForSession(code);

        if (error && isMounted) {
          setErrorMessage("No hemos podido validar tu enlace de recuperación.");
          return;
        }
      } else if (hashType === "recovery" && accessToken && refreshToken) {
        const { error } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken
        });

        if (error && isMounted) {
          setErrorMessage("No hemos podido validar tu enlace de recuperación.");
          return;
        }
      }

      const {
        data: { session }
      } = await supabase.auth.getSession();

      if (!session && isMounted) {
        setErrorMessage("El enlace de recuperación no es válido o ha caducado. Solicita uno nuevo.");
        return;
      }

      if (isMounted) {
        setIsReady(true);
      }
    }

    void prepareRecoverySession();

    return () => {
      isMounted = false;
    };
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    const parsed = updatePasswordSchema.safeParse({ password, confirmPassword });
    if (!parsed.success) {
      setErrorMessage(parsed.error.issues[0]?.message ?? "Revisa la contraseña nueva.");
      return;
    }

    const supabase = createClient();
    if (!supabase) {
      setErrorMessage("Falta configurar Supabase en la app.");
      return;
    }

    setIsSubmitting(true);
    const { error } = await supabase.auth.updateUser({ password: parsed.data.password });
    setIsSubmitting(false);

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    setSuccessMessage("Tu contraseña se ha actualizado correctamente. Ya puedes entrar con tu nueva clave.");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="space-y-1.5">
        <label htmlFor="new-password" className="text-sm font-medium text-slate-900">
          Nueva contraseña
        </label>
        <input
          id="new-password"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
          type="password"
          autoComplete="new-password"
          placeholder="Mínimo 8 caracteres"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          disabled={!isReady || isSubmitting}
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="confirm-new-password" className="text-sm font-medium text-slate-900">
          Confirmar nueva contraseña
        </label>
        <input
          id="confirm-new-password"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
          type="password"
          autoComplete="new-password"
          placeholder="Repite tu nueva contraseña"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          disabled={!isReady || isSubmitting}
        />
      </div>

      {errorMessage ? (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">{errorMessage}</div>
      ) : null}

      {successMessage ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">{successMessage}</div>
      ) : null}

      <Button className="w-full" disabled={!isReady || isSubmitting}>
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : successMessage ? <CheckCircle2 className="h-4 w-4" /> : <KeyRound className="h-4 w-4" />}
        {isSubmitting ? "Actualizando contraseña" : "Guardar nueva contraseña"}
      </Button>

      <div className="flex items-center justify-between gap-3 text-sm">
        <Link href="/login" className="font-medium text-brand transition hover:opacity-80">
          Volver al acceso
        </Link>
        <Link href="/recuperar-acceso" className="text-slate-600 transition hover:text-slate-900">
          Solicitar otro enlace
        </Link>
      </div>
    </form>
  );
}
