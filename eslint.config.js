import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      import: importPlugin,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "react/react-in-jsx-scope": "off",
      "react-native/no-inline-styles": "off",
      "no-undef": "off",
      "import/order": [
        "error",
        {
          groups: ["external", "builtin", "internal", "parent", "sibling"],
          pathGroups: [
            {
              pattern: "react+(|-native)",
              group: "external",
              position: "before",
            },
            {
              pattern: "@+(routes|screens|components|hooks|theme)",
              group: "internal",
              position: "before",
            },
            {
              pattern: "./",
              group: "internal",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["react+(|-native)"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          "newlines-between": "always",
        },
      ],
    },
  },
];
