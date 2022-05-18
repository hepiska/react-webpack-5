module.exports = {
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: [
    '<rootDir>/src/__jest__/setup.ts',
    'jest-allure/dist/setup',
    '@testing-library/react/cleanup-after-each',
    '@testing-library/jest-dom/extend-expect'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)(spec|test).tsx?$'],
  moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx', 'json', 'node'],
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  },
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90
    }
  },
  collectCoverageFrom: [
    'src/**/*.{ts,js}',
    '!src/**/*.(interface|constant|type|validator|enum).{ts,js}',
    '!**/__mocks__/**',
    '!**/node_modules/**'
  ]
};
