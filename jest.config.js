// eslint-disable-next-line no-undef
module.exports = {
  // this is a workaround since enabling coverage breaks sourceMaps
  // See: https://github.com/kulshekhar/ts-jest/issues/917
  // See: https://github.com/facebook/jest/issues/5739
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.ts', '!lib/**', '!node_modules/**'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleFileExtensions: ['js', 'ts', 'json'],
  preset: 'ts-jest',
  reporters: ['default', 'jest-junit'],
  testEnvironment: 'node',
};
