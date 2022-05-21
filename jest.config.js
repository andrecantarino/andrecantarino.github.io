module.exports = {
  projects: [
    {
      displayName: 'components',
      testMatch: ['<rootDir>/src/**/*.(test|spec).js'],
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: [
        '<rootDir>/src/setupTests.js'
      ],
      verbose: true,
    },
  ],
  collectCoverageFrom: [
    './src/**/*.{js,jsx}',
    '!./src/styles/*.{js}',
  ],
  coverageDirectory: './coverage/',
  collectCoverage: true,
  coverageReporters: [
    'json',
    'html',
    'lcov',
  ],
  verbose: true,
};