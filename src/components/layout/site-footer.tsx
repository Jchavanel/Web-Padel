import Link from "next/link";
import { publicNavigation } from "@/lib/constants/navigation";
import { buttonVariants } from "@/components/ui/button";
import { getPublicSiteContent } from "@/modules/clubs/services/public-content";

export async function SiteFooter() {
  const content = await getPublicSiteContent();

  return (
    <footer className="mt-10 border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.15fr_0.85fr_0.85fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand/20 text-sm font-semibold text-emerald-200">
              PD
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Club de pádel</p>
              <p className="text-base font-semibold text-white">{content.clubName}</p>
            </div>
          </div>
          <p className="max-w-md text-sm text-slate-300">{content.tagline}</p>
          <div className="space-y-2 text-sm text-slate-400">
            <p>{content.address}</p>
            <p>{content.phone}</p>
            <p>{content.email}</p>
          </div>
          <Link href="/disponibilidad" className={buttonVariants({ className: "mt-2" })}>
            Reservar pista
          </Link>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Explorar</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            {publicNavigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link href="/disponibilidad" className="transition hover:text-white">
              Reservas
            </Link>
            <Link href="/partidos" className="transition hover:text-white">
              Partidos abiertos
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Horarios y servicios</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <p>{content.schedule}</p>
            <p>Escuela, torneos, eventos especiales y reservas asistidas durante toda la semana.</p>
            <p>Atención para jugadores, familias, grupos y empresas que quieran vivir el club de otra manera.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-slate-500">
          <p>© 2026 {content.clubName}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span>Privacidad</span>
            <span>Términos</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
