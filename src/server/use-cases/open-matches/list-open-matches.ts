import { OpenMatchesRepository } from "@/server/repositories/open-matches/open-matches.repository";

const repository = new OpenMatchesRepository();

export async function listOpenMatches() {
  return repository.listOpenMatches();
}
