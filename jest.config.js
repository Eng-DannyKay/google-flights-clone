/** @type {import('jest').Config} */
export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/test/setup.ts"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "jest-transform-stub",
  },
  setupFiles: ["<rootDir>/src/test/polyfills.js"],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": [
      "ts-jest",
      {
        useESM: true,
        tsconfig: {
          target: "ES2022",
          lib: ["ES2022", "DOM", "DOM.Iterable"],
          module: "ESNext",
          moduleResolution: "bundler",
          jsx: "react-jsx",
          esModuleInterop: true,
          allowSyntheticDefaultImports: true,
          skipLibCheck: true,
          types: ["vite/client", "jest", "node", "@testing-library/jest-dom"],
        },
      },
    ],
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  globals: {
    "import.meta": {
      env: {
        VITE_RAPIDAPI_KEY: "test-api-key",
      },
    },
  },
  testMatch: ["<rootDir>/src/**/*.(test|spec).(ts|tsx|js|jsx)"],
};
