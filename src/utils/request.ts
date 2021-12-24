import fetch, { Response } from "node-fetch";

async function requestResponse(url: string): Promise<Response> {
    return fetch(url);
}

async function requestJson<T>(url: string): Promise<T> {
    return fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json() as Promise<T>;
        })
        .then((data) => {
            return data;
        });
}

async function requestStatus(url: string): Promise<number> {
    return fetch(url).then((res) => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.status;
    });
}

export { requestResponse, requestJson, requestStatus };
