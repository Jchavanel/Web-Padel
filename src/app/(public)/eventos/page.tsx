import Link from "next/link";
import { CalendarDays, Sparkles, Ticket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/shared/section-title";
import { getPublicSiteContent, type EventShowcase } from "@/modules/clubs/services/public-content";

const posterToneMap: Record<NonNullable<EventShowcase["accent"]>, string> = {
  emerald: "from-slate-950 via-emerald-800 to-slate-900",
  indigo: "from-slate-950 via-indigo-800 to-slate-900",
  amber: "from-slate-950 via-amber-700 to-slate-900",
  rose: "from-slate-950 via-rose-800 to-slate-900"
};

export default async function EventsPage() {
  const content = await getPublicSiteContent();
  const featuredEvent = content.events[0];

  return (
    <div className="pb-16">
      <section className="public-section py-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div className="space-y-5">
            <Badge tone="success">Agenda del club</Badge>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Eventos para jugar más, conocer gente y vivir el club fuera del partido habitual
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
              Americanos, clinics, activaciones, propuestas familiares y planes especiales para que siempre haya algo pasando en el club.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href={featuredEvent?.href ?? "/contacto?motivo=eventos"} className={buttonVariants({ size: "lg" })}>
                {featuredEvent?.ctaLabel ?? "Reservar plaza"}
              </Link>
              <Link href="/contacto" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Proponer evento
              </Link>
            </div>
          </div>

          <Card className="premium-card-dark rounded-[2rem] border-0 p-0 text-white">
            <div className="soft-grid space-y-5 p-8">
              <div className="flex items-center justify-between gap-4">
                <Badge className="bg-white/10 text-white">Evento destacado</Badge>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">{featuredEvent?.type}</span>
              </div>
              <div className="space-y-3">
                <h2 className="text-3xl font-semibold">{featuredEvent?.title}</h2>
                <p className="max-w-md text-sm leading-6 text-slate-200">{featuredEvent?.description}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Fecha</p>
                  <p className="mt-2 font-medium">{featuredEvent?.date}</p>
                  <p className="mt-1 text-slate-300">{featuredEvent?.time}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Precio y aforo</p>
                  <p className="mt-2 font-medium">{featuredEvent?.price}</p>
                  <p className="mt-1 text-slate-300">{featuredEvent?.capacity}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="public-section space-y-6 py-6">
        <SectionTitle
          title="Eventos del mes"
          description="Elige la experiencia que mejor encaja contigo y reserva antes de que se complete el aforo."
        />

        <div className="grid gap-6 xl:grid-cols-3">
          {content.events.map((event) => (
            <Card key={event.id} className="premium-card overflow-hidden rounded-[2rem] p-0">
              <div className={`bg-gradient-to-br ${posterToneMap[event.accent ?? "emerald"]} p-6 text-white`}>
                <div className="flex items-center justify-between gap-4">
                  <Badge className="bg-white/10 text-white">{event.type}</Badge>
                  <Ticket className="h-5 w-5 text-white/70" />
                </div>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight">{event.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-200">{event.description}</p>
              </div>
              <div className="space-y-4 p-6">
                <div className="grid gap-3 text-sm text-slate-700">
                  <div className="flex items-center gap-3"><CalendarDays className="h-4 w-4 text-brand" />{event.date}</div>
                  <div className="flex items-center gap-3"><Sparkles className="h-4 w-4 text-brand" />{event.time}</div>
                  <div className="rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200">Precio: {event.price}</div>
                  <div className="rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200">Aforo: {event.capacity}</div>
                </div>
                <Link href={event.href ?? "/contacto?motivo=eventos"} className={buttonVariants({ variant: "primary" })}>
                  {event.ctaLabel ?? "Reservar plaza"}
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="public-section grid gap-6 py-10 lg:grid-cols-[1fr_1fr]">
        <Card className="premium-card rounded-[2rem] p-8">
          <SectionTitle
            title="Siempre hay un motivo para volver"
            description="Los eventos mantienen el club en movimiento, crean comunidad y convierten una visita puntual en una relación continua con el jugador."
          />
          <div className="mt-6 grid gap-4">
            {[
              "Sube la ocupación en franjas menos demandadas.",
              "Genera razones para volver incluso cuando no toca reservar pista.",
              "Refuerza la comunidad y la recomendación boca a boca.",
              "Aporta oportunidades para marcas, patrocinadores y colaboraciones locales."
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700 ring-1 ring-slate-200">
                {item}
              </div>
            ))}
          </div>
        </Card>

        <Card className="premium-card-dark rounded-[2rem] p-8 text-white">
          <div className="flex items-center gap-2 text-sm font-medium text-emerald-200">
            <Sparkles className="h-4 w-4" />
            Próximo plan en pista
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">Consulta la agenda y reserva tu plaza antes de que se agote el aforo</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Si buscas un plan social, un clinic técnico o una actividad para venir con familia o amigos, aquí tienes el mejor punto de entrada.
          </p>
          <Link href="/contacto?motivo=eventos" className={buttonVariants({ variant: "outline", className: "mt-6 border-white/15 bg-white/5 text-white hover:bg-white/10" })}>
            Pedir información
          </Link>
        </Card>
      </section>
    </div>
  );
}
