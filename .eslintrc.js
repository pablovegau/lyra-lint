const { CUSTOM_RULES } = require('./constants');

module.exports = {
  env: {
    browser: true,
    'cypress/globals': true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'standard',
    'standard-react',
    'prettier',
    'prettier/react',
    'prettier/standard',
    'plugin:jsx-a11y/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['babel', 'cypress', 'prettier', 'react', 'react-hooks', 'import', 'jsx-a11y'],
  rules: {
    ...CUSTOM_RULES,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
