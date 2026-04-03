import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { SectionTitle } from "@/components/shared/section-title";
import { getPublicSiteContent } from "@/modules/clubs/services/public-content";
import { ContactForm } from "@/modules/contact/components/contact-form";

export default async function ContactPage() {
  const content = await getPublicSiteContent();

  return (
    <div className="public-section py-10 md:py-14">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Contacto, reservas de grupo, torneos y escuela
          </h1>
          <p className="max-w-xl text-base leading-7 text-slate-600">
            Estamos aquí para ayudarte a reservar, apuntarte a un torneo, conocer la escuela o preparar una actividad especial en el club.
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
            title="Cuéntanos qué necesitas"
            description="Rellena el formulario y te responderemos lo antes posible. También puedes escribirnos si quieres organizar un evento, pedir información sobre la escuela o reservar para un grupo."
          />
          <ContactForm />

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/disponibilidad" className={buttonVariants({ variant: "outline" })}>
              Reservar pista
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
