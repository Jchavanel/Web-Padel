import Link from "next/link";
import { Check, Clock3, Lightbulb, MapPinned, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { SectionTitle } from "@/components/shared/section-title";
import { getPublicSiteContent } from "@/modules/clubs/services/public-content";

export default function CourtsPage() {
  const content = getPublicSiteContent();

  return (
    <div className="pb-16">
      <section className="public-section py-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="space-y-5">
            <Badge tone="info">Zona de pistas</Badge>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Una oferta de pistas que vende experiencia, no solo huecos libres.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
              La parte comercial de pistas debe explicar qué hace especial cada espacio: entrenar mejor, competir, jugar social o reservar una pista premium para eventos.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/disponibilidad" className={buttonVariants({ size: "lg" })}>
                Reservar pista
              </Link>
              <Link href="/club" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Ver instalaciones
              </Link>
            </div>
          </div>

          <Card className="rounded-[2rem] p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { icon: Clock3, title: "Amplio horario", text: "Reserva desde primera hora hasta la noche con franjas claras y reglas visibles." },
                { icon: Lightbulb, title: "Iluminación premium", text: "Información útil para jugadores que valoran visibilidad y calidad real de juego." },
                { icon: ShieldCheck, title: "Operativa fiable", text: "Bloqueos, disponibilidad y precios alineados con la parte operativa del sistema." },
                { icon: MapPinned, title: "Contexto de uso", text: "Muestra si la pista es social, indoor, central o pensada para competición." }
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <item.icon className="h-5 w-5 text-brand" />
                  <h2 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="public-section space-y-6 py-6">
        <SectionTitle
          title="Pistas destacadas"
          description="Cada ficha comunica atributos útiles para el jugador y mejora la conversión desde la parte pública hacia la reserva."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {content.featuredCourts.map((court, index) => (
            <Card key={court.id} className="overflow-hidden rounded-[2rem] p-0">
              <div className={`h-52 ${index === 0 ? "bg-gradient-to-br from-emerald-700 to-slate-950" : index === 1 ? "bg-gradient-to-br from-slate-950 to-cyan-700" : "bg-gradient-to-br from-orange-500 to-slate-950"}`} />
              <div className="space-y-5 p-6">
                <div>
                  <p className="text-sm font-medium text-brand">{court.type}</p>
                  <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">{court.name}</h2>
                </div>
                <p className="text-sm leading-6 text-slate-600">{court.subtitle}</p>
                <div className="space-y-2 text-sm text-slate-700">
                  <p>{court.lighting}</p>
                  <p>{court.schedule}</p>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  {court.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-brand" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/disponibilidad" className={buttonVariants({ variant: index === 0 ? "primary" : "outline" })}>
                  Ver disponibilidad
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="public-section grid gap-6 py-10 lg:grid-cols-[1fr_1fr]">
        <Card className="rounded-[2rem] p-8">
          <SectionTitle
            title="Cómo debe funcionar la reserva"
            description="El flujo comercial lleva al usuario hasta la operativa sin fricción."
          />
          <div className="mt-6 grid gap-4">
            {[
              "El usuario entra desde la ficha de pista o desde el CTA principal de la home.",
              "Consulta disponibilidad real por fecha, hora y duración.",
              "Ve el precio final antes de confirmar, sin sorpresa en el checkout.",
              "La misma base permite destacar partidos abiertos en franjas con baja ocupación."
            ].map((item, index) => (
              <div key={item} className="flex gap-4 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-sm font-semibold text-brand">
                  {index + 1}
                </span>
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="rounded-[2rem] border-white/10 bg-slate-950 p-8 text-white">
          <SectionTitle
            title="Siguiente evolución técnica"
            description="Cuando conectes este bloque con datos reales, cada pista podrá mostrar ocupación, highlights y disponibilidad dinámica."
            tone="inverse"
          />
          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
            <p>Esto permite convertir la página de pistas en un catálogo vivo del club, no en una página estática sin valor comercial.</p>
            <p>También prepara el terreno para vender torneos, clases y activaciones usando la misma capa pública.</p>
          </div>
          <Link href="/contacto" className={buttonVariants({ variant: "outline", className: "mt-6 border-white/15 bg-white/5 text-white hover:bg-white/10" })}>
            Solicitar demo o visita
          </Link>
        </Card>
      </section>
    </div>
  );
}
