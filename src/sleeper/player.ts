import fetch from "node-fetch";
import * as fs from "fs-extra";
import {
    Players,
    PlayersTrending,
    PlayerTrendingTypes,
} from "../../types/PlayerTypes";

async function downloadPlayerList(): Promise<void> {
    const list = await fetch(`https://api.sleeper.app/v1/players/nfl`);
    const filestream = fs.createWriteStream("./playerList.json");
    await new Promise((resolve, reject) => {
        if (list != null) {
            list.body!.pipe(filestream);
        }
        list.body!.on("error", reject);
        filestream.on("finish", resolve);
    });
}

export { downloadPlayerList };
