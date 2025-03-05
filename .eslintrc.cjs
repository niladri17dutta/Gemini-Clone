// .eslintrc.cjs
module.exports = {
  parserOptions: {
    sourceType: 'script',
    ecmaVersion: 12,
  },
  env: {
    node: true,
    node: { version: 'latest' }, // Try this
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
  ],
  plugins: ['node'],
};