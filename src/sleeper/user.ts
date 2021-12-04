import fetch from "node-fetch";
import { UserInfo } from "../../types/UserTypes";

async function getUserInfo(userId: string) : Promise<UserInfo> {
    return fetch(`https://api.sleeper.app/v1/user/${userId}`)
        .then( (res) => {
            if (!res.ok) {
                throw new Error(res.statusText)
              }
              return res.json() as Promise<UserInfo>
        })
        .then( (data) => {
            return data;
        })
}

export { getUserInfo };
