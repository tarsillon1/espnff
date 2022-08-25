import type { Auth, League, Team } from "../types";
import { v3BaseUrl, fetch, newCookie } from "./fetch";

export interface GetLeagueRequest extends Auth, League {}

export interface GetLeagueResponse {
  /**
   * Information about each team in the league.
   */
  teams: Team[];
}

const views = [
  "mDraftDetail",
  "mLiveScoring",
  "mMatchupScore",
  "mPendingTransactions",
  "mPositionalRatings",
  "mSettings",
  "mRoster",
  "mStatus",
  "mPositionalRatingsStats",
]
  .map((view) => `view=${view}`)
  .join("&");

/**
 * Gets a plethora of information about a league.
 * @param request identifies the league to get.
 * @returns information about the league.
 */
export const getLeague = async (request: GetLeagueRequest): Promise<GetLeagueResponse> =>
  fetch(`${v3BaseUrl}/games/ffl/seasons/${request.season}/segments/0/leagues/${request.leagueId}?${views}`, {
    headers: {
      Cookie: newCookie(request),
    },
  });
