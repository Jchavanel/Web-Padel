"use client";

import { useMemo, useState } from "react";
import { Loader2, Send } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { contactFormSchema, inquiryTypes, type ContactFormValues } from "@/modules/contact/schemas/contact-form.schema";

type SubmitStatus =
  | { type: "idle" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const inquiryOptions: Record<(typeof inquiryTypes)[number], string> = {
  reserva: "Reserva o disponibilidad",
  torneo: "Torneos",
  evento: "Eventos",
  escuela: "Escuela",
  empresa: "Empresas y grupos"
};

const initialValues: ContactFormValues = {
  fullName: "",
  email: "",
  phone: "",
  inquiryType: "reserva",
  message: ""
};

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [status, setStatus] = useState<SubmitStatus>({ type: "idle" });
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const legalCopy = useMemo(
    () => "Al enviar este formulario aceptas que utilicemos tus datos únicamente para responder a tu consulta.",
    []
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: "idle" });

    const parsed = contactFormSchema.safeParse(values);
    if (!parsed.success) {
      const nextErrors: Partial<Record<keyof ContactFormValues, string>> = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof ContactFormValues | undefined;
        if (field && !nextErrors[field]) {
          nextErrors[field] = issue.message;
        }
      }
      setFieldErrors(nextErrors);
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(parsed.data)
      });

      const result = (await response.json()) as { ok: boolean; message?: string };

      if (!response.ok || !result.ok) {
        setStatus({
          type: "error",
          message: result.message ?? "No hemos podido enviar tu solicitud. Inténtalo de nuevo en unos minutos."
        });
        return;
      }

      setValues(initialValues);
      setStatus({
        type: "success",
        message: result.message ?? "Hemos recibido tu solicitud y te responderemos lo antes posible."
      });
    } catch {
      setStatus({
        type: "error",
        message: "No hemos podido enviar tu solicitud. Revisa tu conexión e inténtalo de nuevo."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function updateField<K extends keyof ContactFormValues>(field: K, value: ContactFormValues[K]) {
    setValues((current) => ({ ...current, [field]: value }));
    setFieldErrors((current) => ({ ...current, [field]: undefined }));
  }

  return (
    <form className="mt-6 grid gap-4" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-1.5">
        <label htmlFor="contact-full-name" className="text-sm font-medium text-slate-900">
          Nombre y apellidos
        </label>
        <input
          id="contact-full-name"
          className="rounded-xl border border-slate-200 px-4 py-3 text-sm"
          placeholder="Tu nombre completo"
          value={values.fullName}
          onChange={(event) => updateField("fullName", event.target.value)}
          autoComplete="name"
        />
        {fieldErrors.fullName ? <p className="text-xs text-rose-600">{fieldErrors.fullName}</p> : null}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-1.5">
          <label htmlFor="contact-email" className="text-sm font-medium text-slate-900">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm"
            placeholder="tu@email.com"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            autoComplete="email"
          />
          {fieldErrors.email ? <p className="text-xs text-rose-600">{fieldErrors.email}</p> : null}
        </div>

        <div className="grid gap-1.5">
          <label htmlFor="contact-phone" className="text-sm font-medium text-slate-900">
            Teléfono
          </label>
          <input
            id="contact-phone"
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm"
            placeholder="+34 600 123 456"
            value={values.phone ?? ""}
            onChange={(event) => updateField("phone", event.target.value)}
            autoComplete="tel"
          />
          {fieldErrors.phone ? <p className="text-xs text-rose-600">{fieldErrors.phone}</p> : null}
        </div>
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="contact-inquiry" className="text-sm font-medium text-slate-900">
          Motivo de contacto
        </label>
        <select
          id="contact-inquiry"
          className="rounded-xl border border-slate-200 px-4 py-3 text-sm"
          value={values.inquiryType}
          onChange={(event) => updateField("inquiryType", event.target.value as ContactFormValues["inquiryType"])}
        >
          {inquiryTypes.map((value) => (
            <option key={value} value={value}>
              {inquiryOptions[value]}
            </option>
          ))}
        </select>
        {fieldErrors.inquiryType ? <p className="text-xs text-rose-600">{fieldErrors.inquiryType}</p> : null}
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="contact-message" className="text-sm font-medium text-slate-900">
          Mensaje
        </label>
        <textarea
          id="contact-message"
          className="min-h-36 rounded-xl border border-slate-200 px-4 py-3 text-sm"
          placeholder="Cuéntanos qué necesitas y te responderemos lo antes posible."
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
        />
        {fieldErrors.message ? <p className="text-xs text-rose-600">{fieldErrors.message}</p> : null}
      </div>

      <button type="submit" disabled={isSubmitting} className={buttonVariants({ className: "w-full" })}>
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {isSubmitting ? "Enviando solicitud" : "Enviar solicitud"}
      </button>

      <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
        <p className="text-sm leading-6 text-slate-600">{legalCopy}</p>
      </div>

      {status.type === "success" ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
          {status.message}
        </div>
      ) : null}

      {status.type === "error" ? (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">
          {status.message}
        </div>
      ) : null}
    </form>
  );
}
