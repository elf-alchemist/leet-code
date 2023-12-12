import eslintjs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

/** @type {Array<import('eslint').Linter.FlatConfig>} */
export default [
  {
    ignores: ['**/node_modules/**', '**/dist/**'],
    files: ['**/*.js'],
    rules: eslintjs.configs.recommended.rules,
    languageOptions: {
      globals: globals.nodeBuiltin,
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
