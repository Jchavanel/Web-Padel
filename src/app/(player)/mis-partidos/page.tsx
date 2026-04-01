import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Card } from "@/components/ui/card";

export default function MyMatchesPage() {
  return (
    <DashboardShell title="Mis partidos">
      <Card>
        <h2 className="text-lg font-semibold">Partidos y solicitudes</h2>
        <p className="mt-2 text-sm text-slate-600">
          Aquí se integrarán las solicitudes a partidos abiertos y el historial del jugador.
        </p>
      </Card>
    </DashboardShell>
  );
}
