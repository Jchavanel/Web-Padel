import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Card } from "@/components/ui/card";

export default function PlayerDashboardPage() {
  return (
    <DashboardShell title="Mi panel">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <Card><p className="text-sm text-slate-500">Próxima reserva</p><p className="mt-2 font-semibold">12/04 · 18:00 · Pista 2</p></Card>
        <Card><p className="text-sm text-slate-500">Próximo partido</p><p className="mt-2 font-semibold">12/04 · 20:00 · Pista 1</p></Card>
        <Card><p className="text-sm text-slate-500">Pendiente de pago</p><p className="mt-2 font-semibold">1 reserva</p></Card>
        <Card><p className="text-sm text-slate-500">Nivel declarado</p><p className="mt-2 font-semibold">3.5</p></Card>
      </div>
    </DashboardShell>
  );
}
