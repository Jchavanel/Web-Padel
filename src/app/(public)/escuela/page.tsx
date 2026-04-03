import Link from "next/link";
import { GraduationCap, Shield, TimerReset, Users2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { SectionTitle } from "@/components/shared/section-title";
import { getPublicSiteContent } from "@/modules/clubs/services/public-content";

export default async function AcademyPage() {
  const content = await getPublicSiteContent();

  return (
    <div className="pb-16">
      <section className="public-section py-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="space-y-5">
            <Badge tone="info">Escuela de pádel</Badge>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Aprende, mejora y compite con una escuela pensada para cada etapa
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
              Programas para iniciación, tecnificación, escuela junior y jugadores que quieren dar un paso más con una metodología clara y seguimiento real.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contacto" className={buttonVariants({ size: "lg" })}>
                Solicitar información
              </Link>
              <Link href="/partidos" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Ver partidos y comunidad
              </Link>
            </div>
          </div>
          <Card className="rounded-[2rem] p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: GraduationCap, title: "Entrenamiento progresivo" },
                { icon: Users2, title: "Grupos por nivel" },
                { icon: Shield, title: "Escuela junior" },
                { icon: TimerReset, title: "Planes mensuales" }
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
          title="Nuestros programas"
          description="Cada plan está pensado para un perfil concreto, con objetivos claros y un entorno adecuado para progresar."
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
            title="Empieza en el nivel adecuado y mejora con nosotros"
            description="Cuéntanos tu experiencia, tu edad o tus objetivos y te orientamos hacia el grupo que mejor encaja contigo."
            tone="inverse"
          />
          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300">
            La escuela acompaña a quienes empiezan, a jugadores que quieren rendir mejor y a familias que buscan una actividad estable, bien organizada y con buen ambiente durante todo el año.
          </p>
          <Link href="/contacto" className={buttonVariants({ variant: "outline", className: "mt-6 border-white/15 bg-white/5 text-white hover:bg-white/10" })}>
            Quiero información
          </Link>
        </Card>
      </section>
    </div>
  );
}
