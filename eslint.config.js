import { defineConfig } from "eslint-define-config";
import astroParser from "astro-eslint-parser";

export default [
  // JS/TS files
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
      },
    },
    plugins: {
      "@typescript-eslint": {},
    },
    rules: {
      // your custom rules
    },
  }),

  // Astro files
  defineConfig({
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser, // ✅ pass the actual parser object
      parserOptions: {
        parser: "@typescript-eslint/parser", // JS/TS inside Astro
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
