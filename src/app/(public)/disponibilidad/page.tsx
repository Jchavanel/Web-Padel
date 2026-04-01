import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionTitle } from "@/components/shared/section-title";
import { formatCurrency } from "@/lib/utils/currency";
import { getDailyAvailability } from "@/server/use-cases/reservations/get-daily-availability";
import { previewReservationPrice } from "@/server/use-cases/reservations/preview-reservation-price";

const slotToneMap = {
  free: "success",
  occupied: "neutral",
  blocked: "warning",
  open_match: "info"
} as const;

const slotLabelMap = {
  free: "Libre",
  occupied: "Ocupada",
  blocked: "Bloqueada",
  open_match: "Partido abierto"
} as const;

export default async function AvailabilityPage() {
  const availability = await getDailyAvailability();
  const pricePreview = await previewReservationPrice();

  return (
    <div className="space-y-8">
      <SectionTitle
        title="Disponibilidad y reservas"
        description="Pantalla base del flujo principal del producto."
      />

      <Card className="grid gap-4 md:grid-cols-5">
        <input className="rounded-xl border border-slate-200 px-3 py-2 text-sm" defaultValue="2026-04-12" type="date" />
        <select className="rounded-xl border border-slate-200 px-3 py-2 text-sm" defaultValue="18:00">
          <option>18:00</option>
          <option>19:00</option>
        </select>
        <select className="rounded-xl border border-slate-200 px-3 py-2 text-sm" defaultValue="90">
          <option value="90">90 min</option>
          <option value="60">60 min</option>
          <option value="120">120 min</option>
        </select>
        <select className="rounded-xl border border-slate-200 px-3 py-2 text-sm" defaultValue="all">
          <option value="all">Todas las pistas</option>
        </select>
        <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white">Buscar</button>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[1.5fr_360px]">
        <Card className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left">
                <th className="px-2 py-3 font-semibold text-slate-700">Pista</th>
                <th className="px-2 py-3 font-semibold text-slate-700">17:00</th>
                <th className="px-2 py-3 font-semibold text-slate-700">17:30</th>
                <th className="px-2 py-3 font-semibold text-slate-700">18:00</th>
                <th className="px-2 py-3 font-semibold text-slate-700">18:30</th>
                <th className="px-2 py-3 font-semibold text-slate-700">19:00</th>
              </tr>
            </thead>
            <tbody>
              {availability.map((court) => (
                <tr key={court.courtId} className="border-b border-slate-100 last:border-0">
                  <td className="px-2 py-3 font-medium text-slate-900">{court.courtName}</td>
                  {court.slots.map((slot) => (
                    <td key={`${court.courtId}-${slot.time}`} className="px-2 py-3">
                      <Badge tone={slotToneMap[slot.status]}>{slotLabelMap[slot.status]}</Badge>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card className="space-y-4">
          <SectionTitle
            title="Preview de reserva"
            description="Este bloque deberá conectarse al modal o drawer final del flujo."
          />

          <dl className="space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-slate-600">Pista</dt>
              <dd className="font-medium text-slate-900">Pista 2</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-600">Hora</dt>
              <dd className="font-medium text-slate-900">18:00 - 19:30</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-600">Tarifa</dt>
              <dd className="font-medium text-slate-900">{pricePreview.ruleName}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-600">Base</dt>
              <dd className="font-medium text-slate-900">{formatCurrency(pricePreview.basePrice)}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-600">Luz</dt>
              <dd className="font-medium text-slate-900">{formatCurrency(pricePreview.lightingSurcharge)}</dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-slate-200 pt-3">
              <dt className="font-semibold text-slate-900">Total</dt>
              <dd className="font-semibold text-slate-900">{formatCurrency(pricePreview.totalPrice)}</dd>
            </div>
          </dl>

          <button className="w-full rounded-xl bg-brand px-4 py-2 text-sm font-medium text-white">
            Confirmar reserva
          </button>
        </Card>
      </div>
    </div>
  );
}
