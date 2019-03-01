module.exports = {
  extends: [
    'airbnb-base',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', 'promise'],
  rules: {
    'no-unused-vars': ['error', {
      varsIgnorePattern: '_'
    }],
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        arrowParens: 'always',
      },
    ],
  },
}
