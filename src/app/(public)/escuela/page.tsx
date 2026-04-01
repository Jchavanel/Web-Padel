import Link from "next/link";
import { GraduationCap, Shield, TimerReset, Users2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { SectionTitle } from "@/components/shared/section-title";
import { getPublicSiteContent } from "@/modules/clubs/services/public-content";

export default function AcademyPage() {
  const content = getPublicSiteContent();

  return (
    <div className="pb-16">
      <section className="public-section py-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="space-y-5">
            <Badge tone="info">Escuela y programas</Badge>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              La escuela no debe quedar escondida: es una línea real de ingresos y fidelización.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
              Organiza la oferta por perfiles, comunica beneficios y convierte la parte formativa en una sección comercial sólida dentro del club.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contacto" className={buttonVariants({ size: "lg" })}>
                Solicitar información
              </Link>
              <Link href="/partidos" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Ver comunidad de juego
              </Link>
            </div>
          </div>
          <Card className="rounded-[2rem] p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: GraduationCap, title: "Entrenamiento progresivo" },
                { icon: Users2, title: "Grupos por nivel" },
                { icon: Shield, title: "Fidelización familiar" },
                { icon: TimerReset, title: "Recurrencia mensual" }
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                  <item.icon className="h-5 w-5 text-brand" />
                  <p className="mt-3 text-sm font-medium text-slate-900">{item.title}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="public-section space-y-6 py-6">
        <SectionTitle
          title="Programas de academia"
          description="La estructura debe ayudar a que cada usuario encuentre rápidamente el plan que encaja con su perfil."
        />
        <div className="grid gap-6 xl:grid-cols-3">
          {content.academyPlans.map((plan, index) => (
            <Card key={plan.id} className={`rounded-[2rem] p-6 ${index === 1 ? "border-brand/30 shadow-lg shadow-brand/10" : ""}`}>
              <Badge tone={index === 1 ? "success" : "neutral"}>{plan.audience}</Badge>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">{plan.name}</h2>
              <p className="mt-2 text-sm font-medium text-brand">{plan.price}</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-600">
                {plan.benefits.map((benefit) => (
                  <li key={benefit}>• {benefit}</li>
                ))}
              </ul>
              <Link href="/contacto" className={buttonVariants({ variant: index === 1 ? "primary" : "outline", className: "mt-6" })}>
                Solicitar plaza
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="public-section py-10">
        <Card className="rounded-[2rem] border-white/10 bg-slate-950 p-8 text-white md:p-10">
          <SectionTitle
            title="La escuela conecta con el resto del ecosistema"
            description="Buena academia, buena web y buena operativa terminan alimentando reservas, eventos, ligas y vida de club."
            tone="inverse"
          />
          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300">
            Aquí puedes enlazar más adelante con evaluaciones de nivel, agendas de clase, pagos recurrentes y promociones internas sin rehacer la arquitectura pública.
          </p>
        </Card>
      </section>
    </div>
  );
}
