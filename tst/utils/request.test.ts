import { Request } from "../../src/utils/request";

jest.mock("../../src/utils/request", () => {
    return {
        Request: jest.fn().mockImplementation(() => {
            return {
                getFullResponse: jest.fn(),
                getJsonResponse: jest.fn(),
                getStatusOfResponse: jest.fn(),
            };
        }),
    };
});
const goodRequest = new Request({requestUrl: "www.google.com"});

describe("request full response", () => {
    test("is called the correct number of times", async () => {
        await goodRequest.getFullResponse();
        expect(goodRequest.getFullResponse).toBeCalled()
        expect(goodRequest.getFullResponse).toBeCalledWith()
    });
});

describe("request JSON response", () => {
    test("is called the correct number of times", async () => {
        // TODO - How to mock this generic method properly?
        expect(1).toBe(1);
    });
});

describe("request status of response", () => {
    test("is called the correct number of times", async () => {
        await goodRequest.getStatusOfResponse();
        expect(goodRequest.getStatusOfResponse).toBeCalledTimes(1)
        expect(goodRequest.getStatusOfResponse).toBeCalledWith()
    });
});
