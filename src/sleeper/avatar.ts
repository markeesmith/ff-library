import { requestStatus } from "../utils/request";

async function statusFullAvatar(avatarId: string): Promise<number> {
    return requestStatus(`https://sleepercdn.com/avatars/${avatarId}`);
}

async function statusThumbnailAvatar(avatarId: string): Promise<number> {
    return requestStatus(`https://sleepercdn.com/avatars/thumbs/${avatarId}`);
}

export { statusFullAvatar, statusThumbnailAvatar };
