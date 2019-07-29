module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['standard', 'standard-jsx', 'prettier/@typescript-eslint'],
  plugins: [
    '@typescript-eslint',
    'standard',
    'react',
    'react-hooks',
    'prettier'
  ],
  parserOptions: { project: 'tsconfig.json' },
  rules: {
    semi: ['error', 'always'],
    'no-extra-semi': 'error',
    'space-before-function-paren': 'off',
    'keyword-spacing': ['error', { before: true, after: true }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-unused-vars': 'off',
    'import/export': 'error'
  },
  settings: { react: { version: 'detect' } }
};
