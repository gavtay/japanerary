// eslint.config.js
import { defineConfig } from "eslint-define-config";
import astroParser from "astro-eslint-parser";
import tsParser from "@typescript-eslint/parser";

export default [
  // JS/TS files
  defineConfig({
    files: ["**/*.{js,ts}"],
    languageOptions: {
      parser: tsParser, // parser object, not string
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
    plugins: { "@typescript-eslint": {} },
    rules: {},
  }),

  // Astro files
  defineConfig({
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser, // parser object
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: { astro: {} },
    rules: {},
  }),
];
