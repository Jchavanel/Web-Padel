import Link from "next/link";
import { publicNavigation } from "@/lib/constants/navigation";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold">
          Padel Club MVP
        </Link>

        <nav className="hidden gap-6 md:flex">
          {publicNavigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-600 hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="text-sm text-slate-600 hover:text-slate-900">
            Entrar
          </Link>
          <Link href="/disponibilidad">
            <Button>Reservar</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
