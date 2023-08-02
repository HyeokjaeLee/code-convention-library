module.exports = {
  extends: ["stylelint-config-recommended-scss", ...["./rules/base.js"].map(require.resolve)],

  plugins: ["stylelint-order"],
};
