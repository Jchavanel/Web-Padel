import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/shared/section-title";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="grid gap-8 rounded-3xl bg-white p-8 shadow-sm lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5">
          <p className="text-sm font-medium uppercase tracking-wide text-brand">MVP comercializable</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
            Reserva pistas, publica partidos abiertos y opera el club desde una sola web.
          </h1>
          <p className="max-w-2xl text-base text-slate-600">
            Esta base técnica está preparada para disponibilidad en tiempo real, reglas de precio,
            operativa de recepción y crecimiento a multi-club.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/disponibilidad">
              <Button>Ver disponibilidad</Button>
            </Link>
            <Link href="/partidos">
              <Button variant="secondary">Partidos abiertos</Button>
            </Link>
          </div>
        </div>

        <Card className="space-y-4">
          <SectionTitle
            title="Bloques del MVP"
            description="Lo esencial para salir al mercado sin sobrecargar la primera versión."
          />
          <ul className="space-y-3 text-sm text-slate-700">
            <li>• Calendario de pistas y reservas</li>
            <li>• Precios por franja y membresía</li>
            <li>• Partidos abiertos con plazas</li>
            <li>• Panel de recepción y cobros</li>
          </ul>
        </Card>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card>
          <h2 className="text-lg font-semibold">Disponibilidad</h2>
          <p className="mt-2 text-sm text-slate-600">
            Rejilla diaria por pistas y franjas con estados libres, ocupadas, bloqueadas y partido abierto.
          </p>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold">Precios</h2>
          <p className="mt-2 text-sm text-slate-600">
            Tarifas visibles para socio y no socio con una base preparada para reglas configurables.
          </p>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold">Recepción</h2>
          <p className="mt-2 text-sm text-slate-600">
            Vista operativa del día con reservas, pagos pendientes y acciones rápidas del staff.
          </p>
        </Card>
      </section>
    </div>
  );
}
