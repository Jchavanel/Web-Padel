import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Card } from "@/components/ui/card";

export default function AdminPricesPage() {
  return (
    <DashboardShell title="Tarifas y reglas">
      <Card className="space-y-3">
        <h2 className="text-lg font-semibold">Reglas de precio</h2>
        <p className="text-sm text-slate-600">
          Esta ruta está preparada para un CRUD de `price_rules` y preview de impacto.
        </p>
      </Card>
    </DashboardShell>
  );
}
