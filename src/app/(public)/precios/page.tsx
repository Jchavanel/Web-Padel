import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/shared/section-title";
import { formatCurrency } from "@/lib/utils/currency";
import { getPublicPrices } from "@/server/use-cases/pricing/get-public-prices";

export default async function PricesPage() {
  const prices = await getPublicPrices("none");

  return (
    <div className="space-y-8">
      <SectionTitle
        title="Tarifas del club"
        description="Vista pública simplificada apoyada en reglas configurables de precio."
      />

      <Card className="grid gap-4 md:grid-cols-3">
        <select className="rounded-xl border border-slate-200 px-3 py-2 text-sm" defaultValue="none">
          <option value="none">No socio</option>
          <option value="basic">Socio básico</option>
          <option value="premium">Socio premium</option>
        </select>
        <select className="rounded-xl border border-slate-200 px-3 py-2 text-sm">
          <option>Reserva de pista</option>
        </select>
        <select className="rounded-xl border border-slate-200 px-3 py-2 text-sm">
          <option>Todas las pistas</option>
        </select>
      </Card>

      <Card className="overflow-x-auto">
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
                <td className="px-2 py-3">{row.label}</td>
                <td className="px-2 py-3">{row.durationMinutes} min</td>
                <td className="px-2 py-3">{formatCurrency(row.basePrice)}</td>
                <td className="px-2 py-3">{formatCurrency(row.lightingSurcharge)}</td>
                <td className="px-2 py-3 font-medium">{formatCurrency(row.totalEstimate)}</td>
                <td className="px-2 py-3 text-slate-600">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <h3 className="text-lg font-semibold">Bonos</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>• Bono 5 partidos</li>
            <li>• Bono 10 partidos</li>
            <li>• Tarifa empresas</li>
          </ul>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold">Condiciones</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>• Cancelación con 24 horas de antelación</li>
            <li>• Máximo 3 reservas activas por usuario</li>
            <li>• La luz puede variar según franja y pista</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
