import Link from "next/link";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { SectionTitle } from "@/components/shared/section-title";
import { getPublicSiteContent } from "@/modules/clubs/services/public-content";

export default function ContactPage() {
  const content = getPublicSiteContent();

  return (
    <div className="public-section py-10 md:py-14">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Contacto, visitas, reservas de grupo y torneos.
          </h1>
          <p className="max-w-xl text-base leading-7 text-slate-600">
            Esta página debe cerrar la parte comercial: resolver dudas, captar leads y facilitar inscripción o reserva asistida cuando haga falta.
          </p>
          <div className="grid gap-4">
            <Card className="flex items-start gap-4 rounded-[1.75rem] p-5">
              <Phone className="mt-0.5 h-5 w-5 text-brand" />
              <div>
                <p className="text-sm font-medium text-slate-900">Teléfono</p>
                <p className="mt-1 text-sm text-slate-600">{content.phone}</p>
              </div>
            </Card>
            <Card className="flex items-start gap-4 rounded-[1.75rem] p-5">
              <Mail className="mt-0.5 h-5 w-5 text-brand" />
              <div>
                <p className="text-sm font-medium text-slate-900">Email</p>
                <p className="mt-1 text-sm text-slate-600">{content.email}</p>
              </div>
            </Card>
            <Card className="flex items-start gap-4 rounded-[1.75rem] p-5">
              <MapPin className="mt-0.5 h-5 w-5 text-brand" />
              <div>
                <p className="text-sm font-medium text-slate-900">Dirección</p>
                <p className="mt-1 text-sm text-slate-600">{content.address}</p>
              </div>
            </Card>
          </div>
        </div>

        <Card className="rounded-[2rem] p-8">
          <SectionTitle
            title="Formulario de contacto"
            description="Stub comercial preparado para evolucionar a lead capture real o integración con CRM."
          />
          <form className="mt-6 grid gap-4">
            <input className="rounded-xl border border-slate-200 px-4 py-3 text-sm" placeholder="Nombre y apellidos" />
            <input className="rounded-xl border border-slate-200 px-4 py-3 text-sm" placeholder="Email" />
            <input className="rounded-xl border border-slate-200 px-4 py-3 text-sm" placeholder="Teléfono" />
            <select className="rounded-xl border border-slate-200 px-4 py-3 text-sm" defaultValue="reserva">
              <option value="reserva">Reserva o disponibilidad</option>
              <option value="torneo">Torneos</option>
              <option value="evento">Eventos</option>
              <option value="escuela">Escuela</option>
              <option value="empresa">Eventos empresa</option>
            </select>
            <textarea className="min-h-36 rounded-xl border border-slate-200 px-4 py-3 text-sm" placeholder="Cuéntanos qué necesitas" />
            <button type="button" className={buttonVariants({ className: "w-full" })}>
              <Send className="h-4 w-4" />
              Enviar solicitud
            </button>
          </form>

          <div className="mt-6 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
            <p className="text-sm leading-6 text-slate-600">
              [Inference] En una versión de producción, este formulario debería conectarse a Supabase, email transactional o CRM, con validación y seguimiento de leads.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/disponibilidad" className={buttonVariants({ variant: "outline" })}>
              Ir a reservas
            </Link>
            <Link href="/torneos" className={buttonVariants({ variant: "ghost" })}>
              Ver torneos
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
