module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    ...[
      './rules/base',
      './rules/promise',
      './rules/import',
      './rules/react',
      './rules/jsx-a11y',
    ].map(require.resolve),
  ],

  env: {
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },

  parserOptions: {
    ecmaFeatures: { jsx: true },
    jsx: true,
    useJSXTextNode: true,
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        ...['./rules/typescript'].map(require.resolve),
      ],
      settings: {
        /**
         * @description import plugin with Typescript configuration
         * @link https://github.com/alexgorbatchev/eslint-import-resolver-typescript#configuration
         */
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
      },
    },
  ],
};
