module.exports = {
  extends: ["stylelint-config-standard", ...["./rules/base"].map(require.resolve)],
  plugins: ["stylelint-order"],
};
