import { defineConfig } from "eslint-define-config";

export default [
  // Base config for JS/TS files
  defineConfig({
    files: ["**/*.{js,ts}"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        window: "readonly",
        document: "readonly",
        process: "readonly",
        __dirname: "readonly",
        module: "readonly",
        require: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": {},
    },
    rules: {
      // your custom rules here
    },
  }),

  // Astro-specific config
  defineConfig({
    files: ["**/*.astro"],
    languageOptions: {
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        sourceType: "module",
      },
    },
    plugins: {
      astro: {},
    },
    rules: {
      // Astro-specific rules
    },
  }),
];
