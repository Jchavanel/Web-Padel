import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Card } from "@/components/ui/card";

export default function StaffReservationsPage() {
  return (
    <DashboardShell title="Gestión de reservas">
      <Card className="space-y-3">
        <h2 className="text-lg font-semibold">Acciones del staff</h2>
        <ul className="space-y-2 text-sm text-slate-600">
          <li>• Crear reserva en nombre de un cliente</li>
          <li>• Mover reserva entre pistas o franjas</li>
          <li>• Cancelar reserva y registrar motivo</li>
        </ul>
      </Card>
    </DashboardShell>
  );
}
