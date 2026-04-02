import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Card } from "@/components/ui/card";

export default function StaffPaymentsPage() {
  return (
    <DashboardShell title="Cobros">
      <Card className="space-y-3">
        <h2 className="text-lg font-semibold">Cobros manuales y conciliación</h2>
        <p className="text-sm text-slate-600">
          Preparado para integrar Stripe y pagos registrados por recepción.
        </p>
      </Card>
    </DashboardShell>
  );
}
