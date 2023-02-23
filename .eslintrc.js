module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
  ],
  rules: {
    'linebreak-style': 'off',
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    indent: [2, 2],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/jsx-sort-props': ['warn', {
      noSortAlphabetically: false,
    }],
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { vars: 'local' }],
    'comma-dangle': ['error', 'always-multiline'],
    'import/order': 'off',
    'no-return-await': 'warn',
    'i18next/no-literal-string': ['error', { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] }],
    'max-len': ['error', { code: 120, ignoreComments: true }],
    'sort-keys': ['warn', 'asc', { caseSensitive: true, natural: false, minKeys: 2 }],
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
};
