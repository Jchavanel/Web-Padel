import Link from "next/link";
import { publicNavigation } from "@/lib/constants/navigation";
import { buttonVariants } from "@/components/ui/button";
import { getPublicSiteContent } from "@/modules/clubs/services/public-content";

export function SiteHeader() {
  const content = getPublicSiteContent();

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950 text-white shadow-[0_1px_0_rgba(255,255,255,0.05)] backdrop-blur">
      <div className="border-b border-white/10 bg-emerald-400/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-6 py-2 text-xs text-slate-200">
          <p>{content.city} · {content.schedule}</p>
          <p className="text-emerald-200">Eventos, reservas y escuela en una sola experiencia</p>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand/20 text-sm font-semibold text-emerald-200">
              PD
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Club de pádel</p>
              <p className="text-base font-semibold">{content.clubName}</p>
            </div>
          </Link>
        </div>

        <nav className="hidden items-center gap-6 lg:flex">
          {publicNavigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="text-sm text-slate-300 transition hover:text-white">
            Área privada
          </Link>
          <Link href="/disponibilidad" className={buttonVariants({ size: "md" })}>
            Reservar pista
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 lg:hidden">
        <nav className="mx-auto flex max-w-7xl gap-4 overflow-x-auto px-6 py-3 text-sm text-slate-300">
          {publicNavigation.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
