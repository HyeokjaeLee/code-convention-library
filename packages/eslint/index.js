module.exports = {
  plugin: ["prettier"],
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:import/recommended",
    "plugin:promise/recommended",
    "prettier",
    ...[
      "./rules/base",
      "./rules/promise",
      "./rules/import",
      "./rules/react",
      "./rules/jsx-a11y",
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
      version: "detect",
    },
  },

  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        ...["./rules/typescript"].map(require.resolve),
      ],
      settings: {
        /**
         * @description import plugin with Typescript configuration
         * @link https://github.com/alexgorbatchev/eslint-import-resolver-typescript#configuration
         */
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },
      },
      rules: {
        "prettier/prettier": "warn",

        /**
         * @description 블록에 단 하나의 문이 포함될 경우 블록을 생략할 수 있다
         * @link https://github.com/prettier/eslint-config-prettier#curly
         */
        curly: ["error", "multi-or-nest"],
      },
    },
  ],
};
