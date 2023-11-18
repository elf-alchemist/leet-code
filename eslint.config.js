import { Linter } from 'eslint';
import { configs } from '@eslint/js';
import { nodeBuiltin } from 'globals';

/** @type {Array<Linter.FlatConfig>} */
export default [
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/build/**'],
    files: ['**/*.js'],
    rules: configs.recommended.rules,
    languageOptions: {
      globals: nodeBuiltin,
      sourceType: 'module',
      ecmaVersion: 'latest',
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: { impliedStrict: true }
      }
    }
  },
];
