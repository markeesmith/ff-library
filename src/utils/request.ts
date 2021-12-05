import fetch from "node-fetch";

async function request<T>(url: string) : Promise<T> {
    return fetch(url)
        .then( (res) => {
            if (!res.ok) {
                throw new Error(res.statusText)
              }
              return res.json() as Promise<T>
        })
        .then( (data) => {
            return data;
        })
}

export { request };