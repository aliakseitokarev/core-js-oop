const js = require('@eslint/js');
const prettierPlugin = require('eslint-plugin-prettier');
const globals = require('globals');

module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: globals.node,
    },
    plugins: { prettier: prettierPlugin },
    rules: Object.assign({}, js.configs.recommended.rules, {
      'no-console': 'error',
      'no-unused-private-class-members': 'off',
      'prettier/prettier': 'error',
    }),
  },
  { ignores: ['tests/**'] },
];
