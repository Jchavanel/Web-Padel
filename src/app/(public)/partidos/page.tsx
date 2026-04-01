import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/shared/section-title";
import { formatCurrency } from "@/lib/utils/currency";
import { formatDateTime } from "@/lib/utils/dates";
import { listOpenMatches } from "@/server/use-cases/open-matches/list-open-matches";

export default async function OpenMatchesPage() {
  const openMatches = await listOpenMatches();

  return (
    <div className="space-y-8">
      <SectionTitle
        title="Partidos abiertos"
        description="Pantalla base para captar disponibilidad y completar plazas sin intervención manual."
      />

      <Card className="grid gap-4 md:grid-cols-5">
        <select className="rounded-xl border border-slate-200 px-3 py-2 text-sm">
          <option>Hoy</option>
          <option>Mañana</option>
        </select>
        <select className="rounded-xl border border-slate-200 px-3 py-2 text-sm">
          <option>Todas las horas</option>
        </select>
        <select className="rounded-xl border border-slate-200 px-3 py-2 text-sm">
          <option>Nivel 2.5 - 4.0</option>
        </select>
        <select className="rounded-xl border border-slate-200 px-3 py-2 text-sm">
          <option>Con plazas</option>
        </select>
        <Button variant="secondary">Buscar</Button>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {openMatches.map((match) => (
          <Card key={match.id} className="space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold">{match.courtName}</h3>
                <p className="text-sm text-slate-600">{formatDateTime(match.startsAt)}</p>
              </div>
              <Badge tone="info">Con plazas</Badge>
            </div>

            <dl className="grid gap-3 text-sm md:grid-cols-2">
              <div>
                <dt className="text-slate-500">Nivel</dt>
                <dd className="font-medium">{match.levelRange}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Categoría</dt>
                <dd className="font-medium">{match.category}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Jugadores</dt>
                <dd className="font-medium">
                  {match.playersJoined}/{match.maxPlayers}
                </dd>
              </div>
              <div>
                <dt className="text-slate-500">Precio/jugador</dt>
                <dd className="font-medium">{formatCurrency(match.pricePerPlayer)}</dd>
              </div>
            </dl>

            <div className="flex gap-3">
              <Button className="flex-1">Unirme</Button>
              <Button className="flex-1" variant="ghost">
                Ver detalle
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
