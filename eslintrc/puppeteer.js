module.exports = {
  extends: [
    'airbnb-base/legacy',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
  plugins: ['prettier', 'promise'],
  rules: {
    'no-unused-vars': ['error', { varsIgnorePattern: '_' }],
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
      },
    ],
  },
}
