module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    verbose: true,
    collectCoverage: false,
    rootDir: "./",
    roots: [
        "<rootDir>"
    ],
    moduleDirectories: [
        "node_modules",
        "src"
    ],
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    testMatch: [
        "**/__tests__/**/*.test.ts"
    ],
    transform: {
        "^.+\\.(t|j)s?$": "babel-jest"
    },
    transformIgnorePatterns: [
        "node_modules/(?!(node-fetch"
        + "|fetch-blob"
        + ")/)",
    ],
    moduleNameMapper: {
        "^node:http/(.*)": "<rootDir>/node-fetch/$1"
      },
}