import {
    getLeagueInfo,
    getLeagueRosters,
    getLeagueUsers,
    getLeagueMatchupsByWeek,
    getLeagueWinnersBracket,
    getLeagueTransationsByWeek,
    getLeagueTradedPicks,
    getLeagueDrafts,
} from "../src/sleeper/league";

const leagueId = "649984475912036352";

test("Fetches league info based on leagueId", async () => {
    const leagueInfo = await getLeagueInfo(leagueId);
    expect(leagueInfo.league_id).toBe(leagueId);
});

test("Fetches league rosters based on leagueId", async () => {
    const leagueRosters = await getLeagueRosters(leagueId);
    for (const roster in leagueRosters) {
        expect(leagueRosters[roster].league_id).toBe(leagueId);
    }
});

test("Fetches league uesrs based on leagueId", async () => {
    const leagueUsers = await getLeagueUsers(leagueId);
    for (const user in leagueUsers) {
        expect(leagueUsers[user].league_id).toBe(leagueId);
    }
});

test("Fetches league matchups for specific week", async () => {
    const leagueMatchupsWeek1 = await getLeagueMatchupsByWeek(leagueId, 1);
    for (const matchup in leagueMatchupsWeek1) {
        expect(leagueMatchupsWeek1[matchup]).toBeDefined();
    }
});

test("Fetches league winners bracket by leagueId", async () => {
    const leagueWinnersBracket = await getLeagueWinnersBracket(leagueId);
    for (const matchup in leagueWinnersBracket) {
        expect(leagueWinnersBracket[matchup]).toBeDefined();
    }
});

test("Fetches league transactions by leagueId", async () => {
    const leagueTransactionsWeek1 = await getLeagueTransationsByWeek(
        leagueId,
        1
    );
    for (const transaction in leagueTransactionsWeek1) {
        expect(leagueTransactionsWeek1[transaction]).toBeDefined();
    }
});

test("Fetches league traded picks by leagueId", async () => {
    const tradedPicks = await getLeagueTradedPicks(leagueId);
    for (const pick in tradedPicks) {
        expect(tradedPicks[pick]).toBeDefined();
    }
});

test("Fetches league drafts by leagueId", async () => {
    const drafts = await getLeagueDrafts(leagueId);
    for (const draft in drafts) {
        expect(drafts[draft]).toBeDefined();
    }
});
