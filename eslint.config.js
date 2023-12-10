import eslintjs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {Array<import('eslint').Linter.FlatConfig>} */
export default [
  {
    ignores: ['**/node_modules/**', '**/dist/**'],
    files: ['**/*.js'],
    rules: eslintjs.configs.recommended.rules,
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: { impliedStrict: true }
      }
    }
  },
  {
    rules: eslintConfigPrettier.rules,
  },
];
