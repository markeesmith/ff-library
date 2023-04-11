import fetch, { Response } from "node-fetch"

/**
 * Send async request(s) and receive the response in the desired format
 */
class Request {
    url: string;

    constructor(props: RequestProps) {
        this.url = props.requestUrl;
    }

    /**
     * Get the full response from the provided request URL
     * @returns A promise that contains the full response
     */
    async getFullResponse(): Promise<Response> {
        return fetch(this.url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
    }

    /**
     * Get the response payload in JSON format
     * @returns A promise that contains the response payload in JSON format
     */
    async getJSONResponse<T>(): Promise<T> {
        return fetch(this.url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json() as Promise<T>;
            })
            .then((data) => {
                console.log("TESTING")
                return data;
            })
    }

    /**
     * Get the response status
     * @returns A promise that contains the response status
     */
    async getStatusOfResponse(): Promise<number> {
        return fetch(this.url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.status;
            });
    }
}

interface RequestProps {
    /**
     * Full URL of request
     */
    requestUrl: string;
}

export {
    Request,
    RequestProps
}
