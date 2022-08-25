import { leagueId, espnS2, swid, season } from "./config";
import { getLeague, getPlayers, Player } from "../../src";

test("should get draft strategy", async () => {
  const { players } = await getPlayers({ leagueId, espnS2, swid, season });
  const playersMap: Map<number, Player> = new Map();
  players.forEach(({ player }) => playersMap.set(player.id, player));

  const { teams } = await getLeague({ leagueId, espnS2, swid, season });
  teams.forEach((team) => {
    const playerNames = team?.draftStrategy?.draftList?.map(({ playerId }) => {
      const player = playersMap.get(playerId);
      expect(player).toBeDefined();
      return player?.fullName;
    });
    if (!playerNames) return;
    console.log(`${team.nickname}:`, playerNames);
  });
});
