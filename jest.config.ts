import type { Config } from 'jest';
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
const config: Config = {
  // Tell Jest to use ts-jest for TypeScript files
  preset: 'ts-jest',

  // Where your test files are located (default: "tests" folder)
  testMatch: ['**/*.test.tsx'], // Match all test files with .test.tsx

  // Specify the environment in which tests are run
  testEnvironment: 'jest-environment-jsdom',

  // Automatically clear mock calls and instances between every test

  // Code coverage settings (optional)
  collectCoverage: true,
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // Jest transformations to process TypeScript and JavaScript files
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  // Automatically reset mock state between every test
  resetMocks: true,

  // Optionally specify the module file extensions Jest should recognize
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1', // maps @/ to the root directory
  },
  // Specify global variables for ts-jest
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
};

export default createJestConfig(config)