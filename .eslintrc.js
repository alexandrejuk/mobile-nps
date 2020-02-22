module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "max-len": [
      "error",
      { "code": 80 }
    ],
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true
      }
    ],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    semi: [2, 'never'],
  },
};
