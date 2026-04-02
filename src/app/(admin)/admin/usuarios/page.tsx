import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Card } from "@/components/ui/card";

export default function AdminUsersPage() {
  return (
    <DashboardShell title="Usuarios y permisos">
      <Card className="space-y-3">
        <h2 className="text-lg font-semibold">Gestión de roles</h2>
        <p className="text-sm text-slate-600">
          Preparado para asignar usuarios del club a roles `player`, `staff` y `admin`.
        </p>
      </Card>
    </DashboardShell>
  );
}
