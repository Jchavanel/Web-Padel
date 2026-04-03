import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Card } from "@/components/ui/card";

export default function ProfilePage() {
  return (
    <DashboardShell title="Perfil">
      <Card className="space-y-3">
        <h2 className="text-lg font-semibold">Datos personales</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <input className="rounded-xl border border-slate-200 px-3 py-2 text-sm" defaultValue="Nombre del jugador" />
          <input className="rounded-xl border border-slate-200 px-3 py-2 text-sm" defaultValue="hola@padeldistrictclub.com" />
          <input className="rounded-xl border border-slate-200 px-3 py-2 text-sm" defaultValue="+34 600 123 456" />
          <input className="rounded-xl border border-slate-200 px-3 py-2 text-sm" defaultValue="3.5" />
        </div>
      </Card>
    </DashboardShell>
  );
}
