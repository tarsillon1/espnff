import { leagueId, espnS2, swid, season } from "./config";
import { getLeague } from "../../src";

test("should get league", async () => {
  const { teams } = await getLeague({ leagueId, espnS2, swid, season });
  expect(teams.length).toBeGreaterThan(0);
});
