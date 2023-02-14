module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
		'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  parser: '@typescript-eslint/parser',
  overrides: [{ files: ['*.ts', '*.tsx'] }],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
		// tsconfigRootDir: './',
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    indent: [2, 2],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
		'no-unused-vars': "off",
    '@typescript-eslint/no-unused-vars': ['error', { "vars": "local" }],
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle":  ['error', 'always-multiline'],
		"@typescript-eslint/strict-boolean-expressions": "off",
		"@typescript-eslint/prefer-nullish-coalescing": "off",
		"@typescript-eslint/member-delimiter-style": "off",
		"@typescript-eslint/semi": "off",
		"@typescript-eslint/explicit-function-return-type": "warn",
		"@typescript-eslint/naming-convention": "off",
		"@typescript-eslint/no-floating-promises": "warn"
  },
  globals: {
    __IS_DEV__: true
  }
}
