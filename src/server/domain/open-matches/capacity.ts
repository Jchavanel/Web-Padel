export function getOpenMatchCapacity(playersJoined: number, maxPlayers: number) {
  return {
    playersJoined,
    maxPlayers,
    remaining: Math.max(maxPlayers - playersJoined, 0)
  };
}
