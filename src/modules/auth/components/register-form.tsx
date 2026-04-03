"use client";

import Link from "next/link";
import { useState } from "react";
import { Loader2, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/browser";
import { clientEnv } from "@/lib/env/client";
import { registerSchema } from "@/modules/auth/schemas/register.schema";

export function RegisterForm() {
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(field: keyof typeof formValues, value: string) {
    setFormValues((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    const parsed = registerSchema.safeParse(formValues);
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
    const { error, data } = await supabase.auth.signUp({
      email: parsed.data.email,
      password: parsed.data.password,
      options: {
        data: {
          full_name: parsed.data.fullName,
          phone: parsed.data.phone || null
        }
      }
    });
    setIsSubmitting(false);

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    if (data.session) {
      window.location.assign("/mi-panel");
      return;
    }

    setSuccessMessage("Tu cuenta se ha creado. Revisa tu email para confirmar el acceso antes de iniciar sesión.");
    setFormValues({
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: ""
    });
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="space-y-1.5">
        <label htmlFor="register-full-name" className="text-sm font-medium text-slate-900">
          Nombre y apellidos
        </label>
        <input
          id="register-full-name"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
          placeholder="Tu nombre completo"
          autoComplete="name"
          value={formValues.fullName}
          onChange={(event) => updateField("fullName", event.target.value)}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="register-email" className="text-sm font-medium text-slate-900">
            Email
          </label>
          <input
            id="register-email"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
            placeholder="tu@email.com"
            type="email"
            autoComplete="email"
            value={formValues.email}
            onChange={(event) => updateField("email", event.target.value)}
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="register-phone" className="text-sm font-medium text-slate-900">
            Teléfono
          </label>
          <input
            id="register-phone"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
            placeholder="+34 600 123 456"
            autoComplete="tel"
            value={formValues.phone}
            onChange={(event) => updateField("phone", event.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="register-password" className="text-sm font-medium text-slate-900">
            Contraseña
          </label>
          <input
            id="register-password"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
            placeholder="Mínimo 8 caracteres"
            type="password"
            autoComplete="new-password"
            value={formValues.password}
            onChange={(event) => updateField("password", event.target.value)}
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="register-confirm-password" className="text-sm font-medium text-slate-900">
            Confirmar contraseña
          </label>
          <input
            id="register-confirm-password"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
            placeholder="Repite tu contraseña"
            type="password"
            autoComplete="new-password"
            value={formValues.confirmPassword}
            onChange={(event) => updateField("confirmPassword", event.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 text-sm">
        <Link href="/login" className="font-medium text-brand transition hover:opacity-80">
          Ya tengo cuenta
        </Link>
        <span className="text-slate-600">Podrás reservar y gestionar tu actividad desde el primer acceso.</span>
      </div>

      {errorMessage ? (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">{errorMessage}</div>
      ) : null}

      {successMessage ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">{successMessage}</div>
      ) : null}

      <Button className="w-full" disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <UserPlus className="h-4 w-4" />}
        {isSubmitting ? "Creando cuenta" : "Crear cuenta"}
      </Button>

      {!clientEnv.NEXT_PUBLIC_SUPABASE_URL || !clientEnv.NEXT_PUBLIC_SUPABASE_KEY ? (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Falta configurar Supabase en la app. Revisa <code className="font-mono">NEXT_PUBLIC_SUPABASE_URL</code> y la clave pública.
        </div>
      ) : null}
    </form>
  );
}
