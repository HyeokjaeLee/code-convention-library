module.exports = {
  rules: {
    /**
     * @link https://stylelint.io/user-guide/rules/rule-empty-line-before/
     */
    "rule-empty-line-before": [
      "always",
      {
        except: ["after-single-line-comment", "first-nested"],
      },
    ],

    /**
     * @link https://stylelint.io/user-guide/rules/declaration-empty-line-before/
     */
    "declaration-empty-line-before": null,

    /**
     * @link https://stylelint.io/user-guide/rules/at-rule-empty-line-before/
     */
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["after-same-name", "first-nested"],
      },
    ],
  },
};
