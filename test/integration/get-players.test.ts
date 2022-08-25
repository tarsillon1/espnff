import { leagueId, espnS2, swid, season } from "./config";
import { getPlayers } from "../../src";

test("should get players", async () => {
  const { players } = await getPlayers({ leagueId, espnS2, swid, season });
  expect(players.length).toBeGreaterThan(100);
});
