import { requestJson } from "../utils/request";
import {
    LeagueInfo,
    LeagueRosters,
    LeagueUsers,
    LeagueMatchups,
    LeagueWinnersBracket,
    LeagueTransactions,
    LeagueTradedPicks,
} from "../../types/LeagueTypes";
import { DraftForLeague } from "../../types/DraftTypes";

async function getLeagueInfo(leagueId: string): Promise<LeagueInfo> {
    return requestJson(`https://api.sleeper.app/v1/league/${leagueId}`);
}

async function getLeagueRosters(
    leagueId: string
): Promise<Array<LeagueRosters>> {
    return requestJson(`https://api.sleeper.app/v1/league/${leagueId}/rosters`);
}

async function getLeagueUsers(leagueId: string): Promise<Array<LeagueUsers>> {
    return requestJson(`https://api.sleeper.app/v1/league/${leagueId}/users`);
}

async function getLeagueMatchupsByWeek(
    leagueId: string,
    week: number
): Promise<Array<LeagueMatchups>> {
    return requestJson(
        `https://api.sleeper.app/v1/league/${leagueId}/matchups/${week}`
    );
}

async function getLeagueWinnersBracket(
    leagueId: string
): Promise<Array<LeagueWinnersBracket>> {
    return requestJson(
        `https://api.sleeper.app/v1/league/${leagueId}/winners_bracket`
    );
}

async function getLeagueTransationsByWeek(
    leagueId: string,
    week: number
): Promise<Array<LeagueTransactions>> {
    return requestJson(
        `https://api.sleeper.app/v1/league/${leagueId}/transactions/${week}`
    );
}

async function getLeagueTradedPicks(
    leagueId: string
): Promise<Array<LeagueTradedPicks>> {
    return requestJson(
        `https://api.sleeper.app/v1/league/${leagueId}/traded_picks`
    );
}

async function getLeagueDrafts(
    leagueId: string
): Promise<Array<DraftForLeague>> {
    return requestJson(`https://api.sleeper.app/v1/league/${leagueId}/drafts`);
}

export {
    getLeagueInfo,
    getLeagueRosters,
    getLeagueUsers,
    getLeagueMatchupsByWeek,
    getLeagueWinnersBracket,
    getLeagueTransationsByWeek,
    getLeagueTradedPicks,
    getLeagueDrafts,
};
