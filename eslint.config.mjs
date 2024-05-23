import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["**/node_modules/", ".dist/"],
    languageOptions: { globals: globals.browser },
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-undef": "error",
      "@typescript-eslint/no-use-before-define": "error",
      "@typescript-eslint/no-console": "warn",
    },
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier",
    ],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
