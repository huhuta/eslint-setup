module.exports = {
  extends: [
    'airbnb-base',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
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
