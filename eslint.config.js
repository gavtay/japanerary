import { defineConfig } from "eslint-define-config";

export default defineConfig({
  languageOptions: {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    globals: {
      // Browser globals
      window: "readonly",
      document: "readonly",
      // Node globals
      process: "readonly",
      __dirname: "readonly",
      module: "readonly",
      require: "readonly",
    },
  },
  plugins: {
    "@typescript-eslint": {},
    "astro": {},
  },
  linterOptions: {
    reportUnusedDisableDirectives: "error",
  },
  rules: {
    // your custom rules here
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        sourceType: "module",
      },
      rules: {
        // Astro-specific overrides
      },
    },
  ],
});
