import {
    getDraft,
    getDraftPicks,
    getTradedDraftPicks,
} from "../src/sleeper/draft";

const draftId = "515530667727593473";

test("Fetches draft detail from draftId", async () => {
    const draftDetails = await getDraft(draftId);
    expect(draftDetails.season).toBe("2020");
    expect(draftDetails.status).toBe("complete");
});

test("Fetches draft pick detail from draftId", async () => {
    const draftPickDetail = await getDraftPicks(draftId);
    expect(draftPickDetail.length).toBe(48);
});

test("Fetches traded draft picks", async () => {
    const draftTradedPicks = await getTradedDraftPicks(draftId);
    for (const pick in draftTradedPicks) {
        expect(draftTradedPicks[pick].season).toBe("2020");
    }
});
