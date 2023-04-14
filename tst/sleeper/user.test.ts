import { User } from "../../src/sleeper/user"
import { UserTypes } from "../../types/sleeper/UserTypes";

const expectedUsername = "DaddyKee";
const expectedUserId = "325092146891735040"
const expectedUserEmail = null;
const expectedUserPhone = null;
const expectedUserAvatar = "9af57bf732c655bed5049dc29a117d64"
const testUser = new User(expectedUsername);

describe("User creation", () => {
    test("sets username", () => {
        expect(testUser.getUsername()).toBe(expectedUsername);
    });
});

describe("User build", () => {
    beforeAll(async () => {
        await testUser.build();
    });

    test("sets userId", () => {
        expect(testUser.getId()).toBe(expectedUserId);
    });

    test("sets email", () => {
        expect(testUser.getEmail()).toBe(expectedUserEmail);
    });

    test("sets phone", () => {
        expect(testUser.getPhone()).toBe(expectedUserPhone);
    });

    test("sets avatar", () => {
        expect(testUser.getAvatar()).toBe(expectedUserAvatar);
    });
});
