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
            <Badge tone="info">Nuestras pistas</Badge>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Pistas para competir, entrenar y disfrutar del pádel como toca
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
              Cada espacio del club está pensado para un tipo de experiencia: competición, entrenamiento, juego social o eventos especiales.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/disponibilidad" className={buttonVariants({ size: "lg" })}>
                Reservar pista
              </Link>
              <Link href="/club" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Ver el club
              </Link>
            </div>
          </div>

          <Card className="rounded-[2rem] p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { icon: Clock3, title: "Horario amplio", text: "Reserva desde primera hora de la mañana hasta la noche con franjas claras y proceso rápido." },
                { icon: Lightbulb, title: "Iluminación y condiciones de juego", text: "Información útil sobre luz, superficie, entorno y tipo de pista para que elijas justo lo que necesitas." },
                { icon: ShieldCheck, title: "Reserva clara y directa", text: "Consulta disponibilidad real, conoce el precio antes de confirmar y reserva en pocos pasos." },
                { icon: MapPinned, title: "Opciones para cada plan", text: "Competición, escuela, partidos sociales, entrenamientos privados y eventos especiales." }
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
          title="Elige la pista que mejor encaja con tu partido"
          description="Cada ficha resume el tipo de experiencia, el entorno de juego y los detalles que más valoran nuestros jugadores."
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
            title="Reserva online en menos de un minuto"
            description="Consulta fecha, hora y duración, compara pistas y confirma tu reserva con total claridad antes de pagar."
          />
          <div className="mt-6 grid gap-4">
            {[
              "Elige la pista que prefieres desde esta misma página o desde el botón principal de la home.",
              "Consulta disponibilidad real por fecha, hora y duración.",
              "Revisa el precio final antes de confirmar, sin sorpresas en el último paso.",
              "Encuentra una experiencia distinta para cada tipo de partido: entrenamiento, social o competición."
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
            title="Reserva una pista que se adapte a tu plan"
            description="Desde una tarde de entrenamiento hasta un partido especial con amigos o una pista preparada para competición."
            tone="inverse"
          />
          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
            <p>La pista adecuada cambia la experiencia del partido. Por eso te mostramos detalles útiles antes de reservar.</p>
            <p>Si tienes dudas sobre horarios, disponibilidad o quieres organizar una actividad especial, te ayudamos desde contacto.</p>
          </div>
          <Link href="/contacto" className={buttonVariants({ variant: "outline", className: "mt-6 border-white/15 bg-white/5 text-white hover:bg-white/10" })}>
            Contactar con el club
          </Link>
        </Card>
      </section>
    </div>
  );
}
