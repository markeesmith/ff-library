import {
    requestResponse,
    requestJson,
    requestStatus,
} from "../src/utils/request";
import { UserInfo } from "../types/UserTypes";
import { downloadPlayerList } from "../src/sleeper/player";

test("Can fetch entire response from url", async () => {
    const url = "https://api.sleeper.app/v1/user/DaddyKee";
    await requestResponse(url).then((res) => {
        expect(res.status).toBe(200);
    });
});

test("Can fetch json data from url", async () => {
    const url = "https://api.sleeper.app/v1/user/DaddyKee";
    const response = await requestJson<UserInfo>(url);
    expect(response.username).toBe("daddykee");
});

test("Can fetch status from url", async () => {
    const url = "https://api.sleeper.app/v1/user/DaddyKee";
    const response = await requestStatus(url);
    expect(response).toBe(200);
});

//test("Can fetch player list from url", async () => {
//    await downloadPlayerList();
//});
