import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
    rules: {
      // React rules
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/react-in-jsx-scope": "off",

      // Prettier rules
      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          semi: false,
          trailingComma: "es5",
          bracketSpacing: true,
          arrowParens: "always",
        },
      ],
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginPrettier.configs.recommended, // Enables Prettier integration
  prettierConfig, // Disables conflicting ESLint rules with Prettier
];
