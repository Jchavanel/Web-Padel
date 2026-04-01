import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Card } from "@/components/ui/card";

export default function AdminCourtsPage() {
  return (
    <DashboardShell title="Pistas">
      <Card className="space-y-3">
        <h2 className="text-lg font-semibold">Configuración de pistas</h2>
        <p className="text-sm text-slate-600">
          Ruta preparada para alta, orden y estado operativo de las pistas.
        </p>
      </Card>
    </DashboardShell>
  );
}
