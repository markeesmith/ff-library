import { request } from "../src/utils/request";
import { UserInfo } from "../types/UserTypes";

test("Can fetch data from url", async () => {
    const url = "https://api.sleeper.app/v1/user/DaddyKee";
    const response = await request<UserInfo>(url);
    expect(response.username).toBe('daddykee');
});