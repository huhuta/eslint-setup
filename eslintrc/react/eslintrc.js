module.exports = {
  extends: [
    'airbnb',
    'prettier/react',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:promise/recommended',
    'plugin:prettier/recommended'
  ],
  env: {
    jest: true,
    browser: true
  },
  plugins: ['jest', 'react', 'import', 'promise', 'prettier'],
  rules: {
    'no-console': 'error',
    'no-alert': 'error',
    'import/no-extraneous-dependencies': 'off',
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '_'
      }
    ],
    'react/jsx-filename-extension': 'off',
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        arrowParens: 'always'
      }
    ]
  }
}
