import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, Trophy, Users, Sparkles, Clock3, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { SectionTitle } from "@/components/shared/section-title";
import { getPublicSiteContent } from "@/modules/clubs/services/public-content";

export default function HomePage() {
  const content = getPublicSiteContent();

  return (
    <div className="pb-16">
      <section className="public-section py-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="hero-panel overflow-hidden rounded-[2rem] p-8 text-white shadow-2xl shadow-slate-950/20 md:p-10">
            <div className="max-w-2xl space-y-6">
              <Badge className="bg-emerald-400/15 text-emerald-100">Club · torneos · eventos · reservas</Badge>
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.25em] text-emerald-200">{content.city}</p>
                <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
                  {content.tagline}
                </h1>
                <p className="max-w-xl text-base leading-7 text-slate-300 md:text-lg">
                  {content.heroDescription}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/disponibilidad" className={buttonVariants({ size: "lg" })}>
                  Reservar pista
                </Link>
                <Link href="/torneos" className={buttonVariants({ variant: "outline", size: "lg", className: "border-white/15 bg-white/5 text-white hover:bg-white/10" })}>
                  Ver torneos
                </Link>
              </div>
              <div className="grid gap-4 pt-4 sm:grid-cols-2 xl:grid-cols-4">
                {content.heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <Card className="poster-glow overflow-hidden border-0 p-0 text-white">
              <div className="space-y-4 p-6 md:p-7">
                <Badge className="bg-white/10 text-white">Cartel destacado</Badge>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.35em] text-emerald-200">Torneo del mes</p>
                  <h2 className="text-3xl font-semibold">{content.tournaments[0]?.title}</h2>
                </div>
                <p className="max-w-md text-sm leading-6 text-slate-200">{content.tournaments[0]?.description}</p>
                <div className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Categorías</p>
                    <p className="mt-2 font-medium">{content.tournaments[0]?.category}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Premios</p>
                    <p className="mt-2 font-medium">{content.tournaments[0]?.prize}</p>
                  </div>
                </div>
                <Link href="/torneos" className={buttonVariants({ variant: "outline", className: "border-white/15 bg-white/5 text-white hover:bg-white/10" })}>
                  Descubrir calendario
                </Link>
              </div>
            </Card>

            <div className="grid gap-5 sm:grid-cols-2">
              <Card className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <CalendarDays className="h-4 w-4 text-brand" />
                  Eventos especiales
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Agenda viva todo el mes</h3>
                <p className="text-sm leading-6 text-slate-600">
                  Americanos, clinics, activaciones y formatos sociales que llenan pistas fuera del horario tradicional.
                </p>
                <Link href="/eventos" className="inline-flex items-center gap-2 text-sm font-medium text-brand">
                  Ver agenda <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
              <Card className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <Users className="h-4 w-4 text-brand" />
                  Escuela y comunidad
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Entrena, compite y fideliza</h3>
                <p className="text-sm leading-6 text-slate-600">
                  Programas por niveles, escuela junior y oferta continua para convertir visitas en clientes recurrentes.
                </p>
                <Link href="/escuela" className="inline-flex items-center gap-2 text-sm font-medium text-brand">
                  Explorar escuela <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="public-section space-y-6 py-10">
        <SectionTitle
          title="Una web comercial y operativa en el mismo producto"
          description="La capa pública vende el club; la capa operativa convierte interés en reservas, actividad y recurrencia."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {content.quickLinks.map((item) => (
            <Card key={item.title} className="flex h-full flex-col justify-between gap-5 rounded-[1.75rem] p-6">
              <div className="space-y-4">
                <Badge tone="info">{item.eyebrow}</Badge>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              </div>
              <Link href={item.href} className="inline-flex items-center gap-2 text-sm font-medium text-brand">
                Abrir sección <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="public-section grid gap-8 py-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-5">
          <SectionTitle
            title="Pistas con identidad propia"
            description="No se trata solo de mostrar huecos libres. Cada pista puede vender una experiencia concreta: torneo, entrenamiento, social o premium."
          />
          <div className="grid gap-4">
            {[
              { icon: Trophy, text: "Pistas preparadas para torneos, clinics y exhibiciones." },
              { icon: Clock3, text: "Franja operativa amplia y reserva clara por horario y duración." },
              { icon: Sparkles, text: "Detalles visuales que comunican categoría, iluminación y servicios." }
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <item.icon className="mt-0.5 h-5 w-5 text-brand" />
                <p className="text-sm leading-6 text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
          <Link href="/pistas" className={buttonVariants({ variant: "secondary" })}>
            Ver zona de pistas
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {content.featuredCourts.map((court) => (
            <Card key={court.id} className="flex h-full flex-col gap-5 rounded-[1.75rem] border-slate-200 p-6">
              <div className="h-40 rounded-[1.5rem] bg-gradient-to-br from-slate-950 via-slate-800 to-emerald-900" />
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-brand">{court.type}</p>
                  <h3 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">{court.name}</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600">{court.subtitle}</p>
                <div className="space-y-2 text-sm text-slate-700">
                  <p>{court.lighting}</p>
                  <p>{court.schedule}</p>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  {court.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white">
        <div className="public-section grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-6">
            <SectionTitle
              title="Torneos y eventos que merecen escaparate"
              description="Una web vendible tiene que mostrar cartel, urgencia, categorías, premios y propuesta de valor."
              tone="inverse"
            />
            <p className="max-w-xl text-sm leading-7 text-slate-300">
              El calendario deportivo del club se convierte en argumento comercial: atrae nuevos jugadores, da visibilidad a patrocinadores y aumenta el valor percibido de la marca.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/torneos" className={buttonVariants({ size: "lg" })}>
                Ver torneos
              </Link>
              <Link href="/eventos" className={buttonVariants({ variant: "outline", size: "lg", className: "border-white/15 bg-white/5 text-white hover:bg-white/10" })}>
                Ver eventos
              </Link>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {content.tournaments.slice(0, 2).map((tournament) => (
              <Card key={tournament.id} className="poster-glow border-0 p-0 text-white">
                <div className="space-y-5 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">{tournament.status}</p>
                      <h3 className="mt-2 text-2xl font-semibold">{tournament.title}</h3>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center">
                      <p className="text-xs text-slate-400">{tournament.month}</p>
                      <p className="text-2xl font-semibold">{tournament.day}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-slate-200">
                    <p>{tournament.category}</p>
                    <p>{tournament.level}</p>
                    <p>{tournament.price}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="public-section grid gap-8 py-12 lg:grid-cols-[1fr_1fr]">
        <Card className="space-y-6 rounded-[2rem] p-8">
          <div className="flex items-center gap-2 text-sm font-medium text-brand">
            <MapPin className="h-4 w-4" />
            Instalaciones y localización
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Un club que se puede descubrir online antes de visitarlo</h2>
            <p className="text-sm leading-7 text-slate-600">
              Presenta amenities, acceso, horarios y experiencia de club para que la decisión de reservar o inscribirse ocurra antes del primer contacto con recepción.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {content.amenities.map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700 ring-1 ring-slate-200">
                {item}
              </div>
            ))}
          </div>
          <Link href="/club" className={buttonVariants({ variant: "outline" })}>
            Conocer el club
          </Link>
        </Card>

        <div className="space-y-6">
          <SectionTitle
            title="Prueba social y oferta recurrente"
            description="Una web vendible transmite actividad constante y credibilidad."
          />
          <div className="grid gap-5">
            {content.testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="rounded-[1.75rem] p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <Star className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-base font-medium text-slate-900">{testimonial.quote}</p>
                    <p className="mt-3 text-sm text-slate-500">{testimonial.name} · {testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="public-section pb-6">
        <Card className="rounded-[2rem] bg-slate-900 p-8 text-white md:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.25em] text-emerald-200">Siguiente paso</p>
              <h2 className="text-3xl font-semibold tracking-tight">Convierte la visita en reserva, partido, torneo o clase.</h2>
              <p className="max-w-2xl text-sm leading-7 text-slate-300">
                Esta base ya separa contenido comercial y operativa de club. La siguiente evolución natural es conectar la reserva, los eventos y los contenidos a datos reales desde panel interno.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/disponibilidad" className={buttonVariants({ size: "lg" })}>
                Reservar ahora
              </Link>
              <Link href="/contacto" className={buttonVariants({ variant: "outline", size: "lg", className: "border-white/15 bg-white/5 text-white hover:bg-white/10" })}>
                Contactar
              </Link>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
