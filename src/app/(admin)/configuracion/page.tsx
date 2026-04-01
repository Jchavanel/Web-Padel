import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Card } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <DashboardShell title="Configuración del club">
      <Card className="space-y-3">
        <h2 className="text-lg font-semibold">Parámetros operativos</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <input className="rounded-xl border border-slate-200 px-3 py-2 text-sm" defaultValue="Club Central Demo" />
          <input className="rounded-xl border border-slate-200 px-3 py-2 text-sm" defaultValue="Atlantic/Canary" />
          <input className="rounded-xl border border-slate-200 px-3 py-2 text-sm" defaultValue="24" />
          <input className="rounded-xl border border-slate-200 px-3 py-2 text-sm" defaultValue="3" />
        </div>
      </Card>
    </DashboardShell>
  );
}
