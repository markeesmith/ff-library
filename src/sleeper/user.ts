import { requestJson } from "../utils/request";
import { UserInfo } from "../UserTypes";

async function getUserInfo(userId: string) : Promise<UserInfo> {
    return requestJson<UserInfo>(
        `https://api.sleeper.app/v1/user/${userId}`
    );
}

export { getUserInfo };
