import Link from "next/link";
import { CalendarClock, Music4, Sparkles, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { SectionTitle } from "@/components/shared/section-title";
import { getPublicSiteContent } from "@/modules/clubs/services/public-content";

export default function EventsPage() {
  const content = getPublicSiteContent();

  return (
    <div className="pb-16">
      <section className="public-section py-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div className="space-y-5">
            <Badge tone="success">Eventos especiales</Badge>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Una agenda viva convierte horas vacías en momentos con valor y comunidad.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
              Los eventos no son relleno visual. Son una palanca de ocupación, fidelización y captación cuando están bien explicados y bien colocados en la web.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/partidos" className={buttonVariants({ size: "lg" })}>
                Ver partidos abiertos
              </Link>
              <Link href="/contacto" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Proponer evento
              </Link>
            </div>
          </div>
          <Card className="rounded-[2rem] p-8">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: Users, title: "Social" },
                { icon: CalendarClock, title: "Clínics" },
                { icon: Music4, title: "Activaciones" }
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-slate-50 p-5 text-center ring-1 ring-slate-200">
                  <item.icon className="mx-auto h-5 w-5 text-brand" />
                  <p className="mt-3 text-sm font-medium text-slate-900">{item.title}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-600">
              Este módulo está pensado para destacar formato, aforo, precio y objetivo del evento desde el primer vistazo.
            </p>
          </Card>
        </div>
      </section>

      <section className="public-section space-y-6 py-6">
        <SectionTitle
          title="Carteles y experiencias del mes"
          description="Cada evento debe vender una atmósfera clara: social, técnica, familiar o promocional."
        />
        <div className="grid gap-6 xl:grid-cols-3">
          {content.events.map((event, index) => (
            <Card key={event.id} className="overflow-hidden rounded-[2rem] p-0">
              <div className={`p-6 text-white ${index === 0 ? "bg-gradient-to-br from-fuchsia-700 to-slate-950" : index === 1 ? "bg-gradient-to-br from-cyan-700 to-slate-950" : "bg-gradient-to-br from-amber-500 to-slate-950"}`}>
                <Badge className="bg-white/10 text-white">{event.type}</Badge>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight">{event.title}</h2>
                <p className="mt-3 text-sm text-white/80">{event.date} · {event.time}</p>
              </div>
              <div className="space-y-4 p-6">
                <p className="text-sm leading-6 text-slate-600">{event.description}</p>
                <div className="grid gap-3 text-sm text-slate-700">
                  <div className="rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200">Precio: {event.price}</div>
                  <div className="rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200">Aforo: {event.capacity}</div>
                </div>
                <Link href="/contacto" className={buttonVariants({ variant: index === 0 ? "primary" : "outline" })}>
                  Reservar plaza
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="public-section grid gap-6 py-10 lg:grid-cols-[1fr_1fr]">
        <Card className="rounded-[2rem] p-8">
          <SectionTitle
            title="Qué gana el club con esta capa"
            description="La agenda pública deja de ser una página marginal y pasa a generar negocio."
          />
          <div className="mt-6 grid gap-4">
            {[
              "Sube ocupación en franjas menos demandadas.",
              "Genera razones para volver al sitio incluso sin reservar pista.",
              "Refuerza marca, comunidad y recomendación boca a boca.",
              "Ayuda a vender patrocinio y colaboraciones locales."
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700 ring-1 ring-slate-200">
                {item}
              </div>
            ))}
          </div>
        </Card>

        <Card className="rounded-[2rem] border-white/10 bg-slate-950 p-8 text-white">
          <div className="flex items-center gap-2 text-sm font-medium text-emerald-200">
            <Sparkles className="h-4 w-4" />
            Capa vendible
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">Una web de club tiene que parecer activa incluso cuando el usuario todavía no piensa reservar.</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Esa es la diferencia entre un software visible y una experiencia de club. El contenido comercial y el sistema operativo tienen que convivir.
          </p>
          <Link href="/club" className={buttonVariants({ variant: "outline", className: "mt-6 border-white/15 bg-white/5 text-white hover:bg-white/10" })}>
            Ver propuesta de club
          </Link>
        </Card>
      </section>
    </div>
  );
}
