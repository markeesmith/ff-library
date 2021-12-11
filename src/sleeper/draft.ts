import { requestJson } from "../utils/request";
import {
    DraftDetail,
    DraftPickDetail,
    DraftTradedPicks,
} from "../../types/DraftTypes";

async function getDraft(draftId: string): Promise<DraftDetail> {
    return requestJson(`https://api.sleeper.app/v1/draft/${draftId}`);
}

async function getDraftPicks(draftId: string): Promise<Array<DraftPickDetail>> {
    return requestJson(`https://api.sleeper.app/v1/draft/${draftId}/picks`);
}

async function getTradedDraftPicks(
    draftId: string
): Promise<Array<DraftTradedPicks>> {
    return requestJson(
        `https://api.sleeper.app/v1/draft/${draftId}/traded_picks`
    );
}

export { getDraft, getDraftPicks, getTradedDraftPicks };
