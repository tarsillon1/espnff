export interface Auth {
  /**
   * SWID is a cookie that uniquely identifies a user.
   * Can be found in browser Dev Tools > Application > Cookies.
   */
  swid: string;

  /**
   * ESPN_S2 is a cookie that authenticates a user.
   * Can be found in browser Dev Tools > Application > Cookies.
   */
  espnS2: string;
}

export interface League {
  /**
   * Identifies the league.
   * Can be found by logging into your league and copying from the `leagueId` query parameter in the URL.
   */
  leagueId: string;

  /**
   * Season year to filter by (ex. 2022).
   */
  season: string;
}

export interface DraftListItem {
  playerId: number;
}

export interface DraftStrategy {
  /**
   * List of players ranked from best to worst.
   */
  draftList: DraftListItem[];
}

export interface RosterPlayer {
  playerId: number;
  lineupSlotId: RosterSlot;
}

export interface Roster {
  entries: RosterPlayer[];
}

export interface Team {
  nickname: string;
  draftStrategy?: DraftStrategy;
  roster: Roster;
}

export interface Player {
  id: number;
  fullName: string;
}

export interface Link {
  /**
   * Link to game on ESPN website.
   */
  href: string;
}

export interface Competitor {
  /**
   * Name of the team.
   */
  name: string;
}

export interface PlayPlayer {
  playerId: string;
}

export interface Play {
  playId: number;
  players: PlayPlayer[];

  /**
   * True if the play resulted in points.
   */
  scoringPlay: boolean;

  /**
   * A description of what occurred on the play.
   */
  text: string;

  /**
   * Time the play ended.
   */
  walltime: string;
}

export interface Drive {
  plays: Play[];
}

export interface Event {
  /**
   * Scoring plays for this game.
   */
  scoringPlays: Play[];

  /**
   * Current drive for the game.
   */
  drive: Drive;

  /**
   * Competitors involved in the contest.
   */
  competitors: Competitor[];

  /**
   * HTTP links to ESPN for the game.
   */
  links: Link[];
}

export enum RosterSlot {
  Bench = 20,
}
