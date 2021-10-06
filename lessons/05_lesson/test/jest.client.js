module.exports = {
    ...require('./jest-common'),
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    snapshotSerializers: ['@emotion/jest/serializer'],
    coverageThreshold: {
        global: {
            statements: 31,
            branches: 18,
            functions: 29,
            lines: 29,
        },
        './src/shared/utils.js': {
            statements: 100,
            branches: 80,
            functions: 100,
            lines: 100,
        }
    }
}