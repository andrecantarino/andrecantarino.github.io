module.exports = {
  projects: [
    /**
     * Server-related tests such as services or middlewares
     */
    {
      displayName: 'services',
      testMatch: [
        '<rootDir>/tests/unit/services/*.(test|spec).js',
        '<rootDir>/tests/unit/services/**/*.(test|spec).js',
      ],
      testEnvironment: 'node',
    },

    /**
     * Common project's components typically written with React
     */
    {
      displayName: 'components',
      testMatch: ['<rootDir>/src/**/*.(test|spec).js'],
      testEnvironment: 'jsdom',
      verbose: true,
    },
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
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