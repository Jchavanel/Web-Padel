import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Card } from "@/components/ui/card";
import { EmptyState } from "@/components/shared/empty-state";

export default function MyReservationsPage() {
  return (
    <DashboardShell title="Mis reservas">
      <Card>
        <h2 className="text-lg font-semibold">Reservas activas</h2>
        <p className="mt-2 text-sm text-slate-600">
          Esta pantalla deberá conectarse al caso de uso `getReservationsByHolder`.
        </p>
      </Card>

      <EmptyState
        title="No hay más reservas cargadas"
        description="El scaffold deja preparada la ruta para conectar datos reales del usuario."
        ctaHref="/disponibilidad"
        ctaLabel="Reservar pista"
      />
    </DashboardShell>
  );
}
