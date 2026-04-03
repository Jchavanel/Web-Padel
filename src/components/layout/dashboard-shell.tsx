import type { ReactNode } from "react";
import Link from "next/link";
import { playerNavigation, staffNavigation, adminNavigation } from "@/lib/constants/navigation";

interface DashboardShellProps {
  title: string;
  children: ReactNode;
}

export function DashboardShell({ title, children }: DashboardShellProps) {
  const links = [...playerNavigation, ...staffNavigation, ...adminNavigation];

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-semibold">
            Padel District Club
          </Link>
          <Link href="/" className="text-sm text-slate-600">
            Volver al sitio
          </Link>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[260px_1fr]">
        <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="mb-4 text-sm font-semibold text-slate-900">Navegación</p>
          <nav className="flex flex-col gap-2">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <main className="space-y-6">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">{title}</h1>
            <p className="mt-2 text-sm text-slate-600">
              Área privada para reservas, gestión diaria y seguimiento de la actividad del club.
            </p>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
