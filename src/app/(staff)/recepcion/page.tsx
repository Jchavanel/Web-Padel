import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Card } from "@/components/ui/card";
import { formatDateTime } from "@/lib/utils/dates";
import { getDeskDayView } from "@/server/use-cases/desk/get-desk-day-view";

export default async function DeskPage() {
  const rows = await getDeskDayView();

  return (
    <DashboardShell title="Recepción">
      <div className="grid gap-6 md:grid-cols-4">
        <Card><p className="text-sm text-slate-500">Ocupación</p><p className="mt-2 font-semibold">72%</p></Card>
        <Card><p className="text-sm text-slate-500">Reservas activas</p><p className="mt-2 font-semibold">38</p></Card>
        <Card><p className="text-sm text-slate-500">Pendientes de cobro</p><p className="mt-2 font-semibold">6</p></Card>
        <Card><p className="text-sm text-slate-500">Pistas bloqueadas</p><p className="mt-2 font-semibold">1</p></Card>
      </div>

      <Card className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left">
              <th className="px-2 py-3 font-semibold">Hora</th>
              <th className="px-2 py-3 font-semibold">Pista</th>
              <th className="px-2 py-3 font-semibold">Titular</th>
              <th className="px-2 py-3 font-semibold">Reserva</th>
              <th className="px-2 py-3 font-semibold">Pago</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-slate-100 last:border-0">
                <td className="px-2 py-3">{formatDateTime(row.startsAt)}</td>
                <td className="px-2 py-3">{row.courtName}</td>
                <td className="px-2 py-3">{row.holderName}</td>
                <td className="px-2 py-3">{row.status}</td>
                <td className="px-2 py-3">{row.paymentStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </DashboardShell>
  );
}
