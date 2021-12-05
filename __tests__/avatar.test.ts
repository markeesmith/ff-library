import { statusFullAvatar, statusThumbnailAvatar } from "../src/sleeper/avatar";

test("Fetches full avatar", async () => {
    const avatarImg = await statusFullAvatar("9af57bf732c655bed5049dc29a117d64");
    expect(avatarImg).toBeDefined();
});

test("Fetches thumbnail avatar", async () => {
    const avatarImg = await statusThumbnailAvatar("9af57bf732c655bed5049dc29a117d64");
    expect(avatarImg).toBeDefined();
});
