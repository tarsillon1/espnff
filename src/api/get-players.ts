import type { Auth, League, Player } from "../types";
import { v3BaseUrl, fetch, newCookie } from "./fetch";

export interface GetPlayersRequest extends Auth, League {}

export interface GetPlayersResponse {
  players: { player: Player }[];
}

const views = ["players_wl"].map((view) => `view=${view}`);

const filterHeader = "x-fantasy-filter";
const filterHeaderValue = JSON.stringify({
  players: {
    limit: 1500,
    sortDraftRanks: {
      sortPriority: 100,
      sortAsc: true,
      value: "STANDARD",
    },
  },
});

/**
 * Gets a plethora of information about NFL players in a specified league.
 * @param request identifies the league to get.
 * @returns information about the NFL players in the league.
 */
export const getPlayers = async (request: GetPlayersRequest): Promise<GetPlayersResponse> =>
  fetch(`${v3BaseUrl}/games/ffl/seasons/${request.season}/segments/0/leagues/${request.leagueId}?${views}`, {
    headers: {
      Cookie: newCookie(request),
      [filterHeader]: filterHeaderValue,
    },
  });
