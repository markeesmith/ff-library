import { Request } from "../utils/request"
import { UserTypes } from "../../types/sleeper/UserTypes"

class User {
    private username: string;
    private id: string;
    private email: string;
    private phone: string;
    private avatar: string;
    private readonly requestUrl: string;

    constructor(username: string) {
        this.username = username;
        this.requestUrl = `${userUrlBase}${this.username}`
    }

    public async build() {
        let userData = await new Request({requestUrl: this.requestUrl}).getJSONResponse<UserTypes>();
        this.id = userData.user_id;
        this.email = userData.email;
        this.phone = userData.phone;
        this.avatar = userData.avatar;
    }

    getUsername(): string {
        return this.username;
    }

    getId(): string {
        return this.id;
    }

    getEmail(): string {
        return this.email;
    }

    getPhone(): string {
        return this.phone;
    }

    getAvatar(): string {
        return this.avatar;
    }
}

const userUrlBase="https://api.sleeper.app/v1/user/";

export { User };
