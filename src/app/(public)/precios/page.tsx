import Link from "next/link";
import { BadgePercent, Receipt, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { SectionTitle } from "@/components/shared/section-title";
import { formatCurrency } from "@/lib/utils/currency";
import { getPublicPrices } from "@/server/use-cases/pricing/get-public-prices";

export default async function PricesPage() {
  const prices = await getPublicPrices("none");

  return (
    <div className="pb-16">
      <section className="public-section py-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div className="space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-brand">Tarifas, bonos y condiciones</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Precios claros para convertir mejor y reducir fricción en recepción.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
              La parte pública debe comunicar tarifas entendibles; la lógica real sigue viviendo en reglas configurables detrás del sistema.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/disponibilidad" className={buttonVariants({ size: "lg" })}>
                Reservar ahora
              </Link>
              <Link href="/contacto" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Consultar bonos
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: Receipt, title: "Precio final visible", text: "Antes de confirmar la reserva." },
              { icon: BadgePercent, title: "Bonos y membresías", text: "Diferenciados para socio y no socio." },
              { icon: ShieldCheck, title: "Condiciones claras", text: "Cancelación y límites visibles." }
            ].map((item) => (
              <Card key={item.title} className="rounded-[1.75rem] p-5">
                <item.icon className="h-5 w-5 text-brand" />
                <h2 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="public-section space-y-6 py-6">
        <SectionTitle
          title="Tabla pública de tarifas"
          description="Visible, legible y preparada para evolucionar a una gestión real de reglas sin tocar la presentación."
        />

        <Card className="grid gap-4 rounded-[2rem] p-5 md:grid-cols-3">
          <select className="rounded-xl border border-slate-200 px-3 py-3 text-sm" defaultValue="none">
            <option value="none">No socio</option>
            <option value="basic">Socio básico</option>
            <option value="premium">Socio premium</option>
          </select>
          <select className="rounded-xl border border-slate-200 px-3 py-3 text-sm">
            <option>Reserva de pista</option>
          </select>
          <select className="rounded-xl border border-slate-200 px-3 py-3 text-sm">
            <option>Todas las pistas</option>
          </select>
        </Card>

        <Card className="overflow-x-auto rounded-[2rem] p-5">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left">
                <th className="px-2 py-3 font-semibold">Franja</th>
                <th className="px-2 py-3 font-semibold">Duración</th>
                <th className="px-2 py-3 font-semibold">Precio base</th>
                <th className="px-2 py-3 font-semibold">Luz</th>
                <th className="px-2 py-3 font-semibold">Total</th>
                <th className="px-2 py-3 font-semibold">Notas</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((row) => (
                <tr key={row.label} className="border-b border-slate-100 last:border-0">
                  <td className="px-2 py-4 font-medium text-slate-900">{row.label}</td>
                  <td className="px-2 py-4 text-slate-700">{row.durationMinutes} min</td>
                  <td className="px-2 py-4 text-slate-700">{formatCurrency(row.basePrice)}</td>
                  <td className="px-2 py-4 text-slate-700">{formatCurrency(row.lightingSurcharge)}</td>
                  <td className="px-2 py-4 font-semibold text-slate-900">{formatCurrency(row.totalEstimate)}</td>
                  <td className="px-2 py-4 text-slate-500">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="rounded-[2rem] p-6">
            <h2 className="text-xl font-semibold text-slate-900">Bonos destacados</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              <li>• Bono 5 partidos con activación flexible para jugadores recurrentes.</li>
              <li>• Bono 10 partidos orientado a equipos o clientes de oficina.</li>
              <li>• Opciones de tarifa empresa para eventos y uso corporativo.</li>
            </ul>
          </Card>
          <Card className="rounded-[2rem] border-white/10 bg-slate-950 p-6 text-white">
            <h2 className="text-xl font-semibold">Condiciones visibles</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              <li>• Cancelación con 24 horas de antelación.</li>
              <li>• Máximo 3 reservas activas por usuario.</li>
              <li>• El suplemento de luz puede variar por franja y pista.</li>
            </ul>
          </Card>
        </div>
      </section>
    </div>
  );
}
