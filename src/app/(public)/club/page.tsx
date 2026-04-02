import Link from "next/link";
import { Coffee, Dumbbell, MapPin, Store, Waves } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { SectionTitle } from "@/components/shared/section-title";
import { getPublicSiteContent } from "@/modules/clubs/services/public-content";

export default function ClubPage() {
  const content = getPublicSiteContent();

  return (
    <div className="pb-16">
      <section className="public-section py-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="space-y-5">
            <Badge tone="neutral">El club</Badge>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Un club pensado para jugar bien y quedarse un rato más
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
              Instalaciones cuidadas, servicios útiles y un ambiente que combina deporte, comunidad y comodidad durante toda la semana.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contacto" className={buttonVariants({ size: "lg" })}>
                Contactar con el club
              </Link>
              <Link href="/disponibilidad" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Reservar pista
              </Link>
            </div>
          </div>
          <Card className="rounded-[2rem] p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Coffee, title: "Terraza y cafetería" },
                { icon: Store, title: "Tienda técnica" },
                { icon: Dumbbell, title: "Zona recovery" },
                { icon: Waves, title: "Vestuarios completos" }
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

      <section className="public-section grid gap-6 py-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Card className="rounded-[2rem] p-8">
          <SectionTitle
            title="Lo que encontrarás en tu visita"
            description="Todo lo que necesitas para venir a jugar, entrenar, competir o pasar tiempo en el club con comodidad."
          />
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {content.amenities.map((amenity) => (
              <div key={amenity} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700 ring-1 ring-slate-200">
                {amenity}
              </div>
            ))}
          </div>
        </Card>

        <Card className="rounded-[2rem] border-white/10 bg-slate-950 p-8 text-white">
          <div className="flex items-center gap-2 text-sm font-medium text-emerald-200">
            <MapPin className="h-4 w-4" />
            Localización
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">Fácil de encontrar, cómodo para volver</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
            <p>{content.address}</p>
            <p>{content.schedule}</p>
            <p>{content.phone}</p>
            <p>{content.email}</p>
          </div>
        </Card>
      </section>

      <section className="public-section py-10">
        <Card className="rounded-[2rem] p-8">
          <SectionTitle
            title="Ven a conocer el club"
            description="Reserva una pista, visita nuestras instalaciones o escríbenos si quieres información sobre escuela, torneos o eventos."
          />
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {[
              "Instalaciones cuidadas y preparadas para juego, formación y competición.",
              "Atención todos los días con horario amplio para reservas y actividades.",
              "Un entorno cómodo para venir a jugar y quedarse un rato más en el club."
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 p-5 text-sm leading-6 text-slate-700 ring-1 ring-slate-200">
                {item}
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}
