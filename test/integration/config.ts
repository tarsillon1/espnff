import dotenv from "dotenv";

dotenv.config();

export const leagueId = process.env.ESPN_LEAGUE_ID as string;
export const espnS2 = process.env.ESPN_S2 as string;
export const swid = process.env.ESPN_SWID as string;
export const season = process.env.ESPN_SEASON as string;
