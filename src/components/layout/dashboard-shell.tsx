import type { ReactNode } from "react";
import Link from "next/link";
import { playerNavigation, staffNavigation, adminNavigation } from "@/lib/constants/navigation";
import { LogoutButton } from "@/modules/auth/components/logout-button";
import { getCurrentUser } from "@/lib/auth/current-user";

interface DashboardShellProps {
  title: string;
  children: ReactNode;
}

export async function DashboardShell({ title, children }: DashboardShellProps) {
  const links = [...playerNavigation, ...staffNavigation, ...adminNavigation];
  const user = await getCurrentUser();

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <Link href="/" className="font-semibold">
              Padel District Club
            </Link>
            {user?.email ? <p className="mt-1 text-xs text-slate-500">{user.email}</p> : null}
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-sm text-slate-600">
              Volver al sitio
            </Link>
            <LogoutButton />
          </div>
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
              Gestiona tus reservas, partidos y actividad dentro del club desde un solo espacio.
            </p>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
