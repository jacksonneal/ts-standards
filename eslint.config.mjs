import eslintConfigPrettier from "eslint-config-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import typescriptEslint from 'typescript-eslint';

export default typescriptEslint.config(
  ...typescriptEslint.configs.strictTypeChecked,
  ...typescriptEslint.configs.stylisticTypeChecked,
  eslintConfigPrettier,
  {
    ignores: ['**/*.{js,mjs}', '**/dist/*', '**/coverage/*'],
  },
  {
    languageOptions: {
      parserOptions: {
        project: ['./libs/**/tsconfig.json'],
        // @ts-expect-error
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
);
