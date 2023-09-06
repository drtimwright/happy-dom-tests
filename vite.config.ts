/// <reference types="vitest" />
module.exports = async () => {
    return {
        test: {
            globals: true,
            environment: "happy-dom",
            setupFiles: "./src/setupTests.ts",
            reporters: ["default"],
            useAtomics: true,
            teardownTimeout: 300000,
            maxConcurrency: 5,
            experimentalVmThreads: true,
            coverage: {
                reporter: ["cobertura"],
                reportsDirectory: "coverage",
            },
        },
    };
};
