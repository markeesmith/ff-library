import fetch from "node-fetch";

async function requestJson<T>(url: string) : Promise<T> {
    return fetch(url)
        .then( (res) => {
            if (!res.ok) {
                throw new Error(res.statusText)
            }
            return res.json() as Promise<T>;
        })
        .then( (data) => {
            return data;
        })
}

async function requestStatus(url: string) : Promise<number> {
    return fetch(url)
        .then( (res) => {
            if (!res.ok) {
                throw new Error(res.statusText)
            }
            return res.status;
        })
}

export { 
    requestJson,
    requestStatus
};