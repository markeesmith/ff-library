import { getUserInfo } from "../src/sleeper/user";

test("Fetches user info from username", async () => {
    const userData = await getUserInfo("DaddyKee");
    expect(userData.user_id).toBe('325092146891735040');
});

test("Fetches user info from userId", async () => {
    const userData = await getUserInfo("325092146891735040");
    expect(userData.username).toBe('daddykee');
});
