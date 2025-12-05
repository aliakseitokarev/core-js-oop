/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: 'es5',
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  quoteProps: 'consistent',
  singleQuote: true,
  arrowParens: 'always',
  bracketSpacing: true,
  objectWrap: 'collapse',
  bracketSameLine: true,
};

module.exports = config;
