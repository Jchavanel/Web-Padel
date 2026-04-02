export interface OpenMatchCard {
  id: string;
  startsAt: string;
  courtName: string;
  levelRange: string;
  category: string;
  playersJoined: number;
  maxPlayers: number;
  pricePerPlayer: number;
  status: "open" | "full" | "cancelled" | "closed";
}
