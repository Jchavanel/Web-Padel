import Link from "next/link";
import { Flag, Medal, Ticket, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { SectionTitle } from "@/components/shared/section-title";
import { getPublicSiteContent } from "@/modules/clubs/services/public-content";

export default function TournamentsPage() {
  const content = getPublicSiteContent();

  return (
    <div className="pb-16">
      <section className="public-section py-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div className="space-y-5">
            <Badge tone="warning">Calendario de torneos</Badge>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Compite en torneos con organización, ambiente y premios
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
              Consulta próximas competiciones, categorías, fechas e inscripciones y reserva tu plaza directamente desde la web.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contacto" className={buttonVariants({ size: "lg" })}>
                Inscribirme
              </Link>
              <Link href="/eventos" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Ver eventos
              </Link>
            </div>
          </div>
          <Card className="poster-glow border-0 p-0 text-white">
            <div className="space-y-5 p-8">
              <Badge className="bg-white/10 text-white">Torneo destacado</Badge>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-semibold">{content.tournaments[0]?.title}</h2>
                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-200">{content.tournaments[0]?.description}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center">
                  <p className="text-xs text-slate-400">{content.tournaments[0]?.month}</p>
                  <p className="text-2xl font-semibold">{content.tournaments[0]?.day}</p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Estado</p>
                  <p className="mt-2 font-medium">{content.tournaments[0]?.status}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Premios</p>
                  <p className="mt-2 font-medium">{content.tournaments[0]?.prize}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="public-section space-y-6 py-6">
        <SectionTitle
          title="Próximos torneos"
          description="Consulta categorías, nivel, inscripción y fechas clave para elegir el formato que mejor encaja contigo."
        />
        <div className="grid gap-6 xl:grid-cols-3">
          {content.tournaments.map((tournament, index) => (
            <Card key={tournament.id} className="overflow-hidden rounded-[2rem] p-0">
              <div className={`p-6 text-white ${index === 0 ? "bg-gradient-to-br from-slate-950 via-emerald-800 to-slate-900" : index === 1 ? "bg-gradient-to-br from-slate-950 via-indigo-800 to-slate-900" : "bg-gradient-to-br from-slate-950 via-amber-700 to-slate-900"}`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70">{tournament.status}</p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight">{tournament.title}</h2>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-center">
                    <p className="text-xs text-white/60">{tournament.month}</p>
                    <p className="text-2xl font-semibold">{tournament.day}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 p-6">
                <p className="text-sm leading-6 text-slate-600">{tournament.description}</p>
                <div className="grid gap-3 text-sm text-slate-700">
                  <div className="flex items-center gap-3"><Flag className="h-4 w-4 text-brand" />{tournament.category}</div>
                  <div className="flex items-center gap-3"><Trophy className="h-4 w-4 text-brand" />{tournament.level}</div>
                  <div className="flex items-center gap-3"><Ticket className="h-4 w-4 text-brand" />{tournament.price}</div>
                  <div className="flex items-center gap-3"><Medal className="h-4 w-4 text-brand" />{tournament.prize}</div>
                </div>
                <div className="flex gap-3">
                  <Link href="/contacto" className={buttonVariants({ className: "flex-1" })}>
                    Inscribirme
                  </Link>
                  <Link href="/club" className={buttonVariants({ variant: "outline", className: "flex-1" })}>
                    Ver club
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="public-section grid gap-6 py-10 lg:grid-cols-[1fr_1fr]">
        <Card className="rounded-[2rem] p-8">
          <SectionTitle
            title="Por qué competir con nosotros"
            description="Cuadros bien organizados, horarios claros, instalaciones cuidadas y una experiencia que hace que quieras repetir."
          />
          <div className="mt-6 grid gap-4">
            {[
              "Inscripción clara y comunicación rápida antes del torneo.",
              "Categorías visibles, cuadros bien organizados y ambiente real de competición.",
              "Visibilidad para patrocinadores y colaboradores del club.",
              "Una experiencia completa dentro y fuera de la pista."
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700 ring-1 ring-slate-200">
                {item}
              </div>
            ))}
          </div>
        </Card>

        <Card className="rounded-[2rem] border-white/10 bg-slate-950 p-8 text-white">
          <SectionTitle
            title="Consulta el calendario y asegura tu plaza a tiempo"
            description="Cuando un torneo se llena, se nota rápido. Revisa categorías, nivel y formato antes de quedarte fuera."
            tone="inverse"
          />
          <p className="mt-6 text-sm leading-7 text-slate-300">
            Si quieres apuntarte, resolver dudas sobre categorías o solicitar información para un torneo de empresa, escríbenos y te ayudamos.
          </p>
          <Link href="/contacto" className={buttonVariants({ variant: "outline", className: "mt-6 border-white/15 bg-white/5 text-white hover:bg-white/10" })}>
            Contactar con el club
          </Link>
        </Card>
      </section>
    </div>
  );
}
