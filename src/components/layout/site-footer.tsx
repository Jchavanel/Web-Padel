import Link from "next/link";
import { publicNavigation } from "@/lib/constants/navigation";
import { getPublicSiteContent } from "@/modules/clubs/services/public-content";

export function SiteFooter() {
  const content = getPublicSiteContent();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand/10 text-sm font-semibold text-brand">
              PD
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Club de pádel</p>
              <p className="text-base font-semibold text-slate-900">{content.clubName}</p>
            </div>
          </div>
          <p className="max-w-md text-sm text-slate-600">{content.tagline}</p>
          <div className="space-y-2 text-sm text-slate-600">
            <p>{content.address}</p>
            <p>{content.phone}</p>
            <p>{content.email}</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Explorar</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-600">
            {publicNavigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-slate-900">
                {item.label}
              </Link>
            ))}
            <Link href="/disponibilidad" className="transition hover:text-slate-900">
              Reservas
            </Link>
            <Link href="/partidos" className="transition hover:text-slate-900">
              Partidos abiertos
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Horarios y servicios</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <p>{content.schedule}</p>
            <p>Atención a torneos, escuela y eventos especiales durante toda la semana.</p>
            <p>Soporte para reservas, recepción y organización deportiva desde la misma plataforma.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-slate-500">
          <p>© 2026 {content.clubName}. Web comercial y operativa para clubes de pádel.</p>
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
