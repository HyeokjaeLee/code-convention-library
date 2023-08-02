module.exports = {
  customSyntax: "postcss-scss",
  extends: [
    "stylelint-config-recommended-scss",
    ...["./rules/base.js", "./rules/indentation.js", "./rules/order.js"].map(require.resolve),
  ],
  plugins: ["stylelint-scss", "stylelint-order"],
};
