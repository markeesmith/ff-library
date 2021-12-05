module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    verbose: true,
    collectCoverage: true,
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
    ]
}