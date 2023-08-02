module.exports = {
  rules: {
    /**
     * @description 셀렉터 클래스 패턴
     * @link https://stylelint.io/user-guide/rules/selector-class-pattern/
     */
    "selector-class-pattern": null,

    /**
     * @description 폰트 키워드 제네릭 허용 여부
     * @link https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword/
     */
    "font-family-no-missing-generic-family-keyword": true,

    /**
     * @description 키워드 대소문자 처리
     * @link https://stylelint.io/user-guide/rules/value-keyword-case/
     */
    "value-keyword-case": "lower",

    /**
     * @description 알 수 없는 함수 허용 여부
     * @link https://stylelint.io/user-guide/rules/function-no-unknown/
     */
    "function-no-unknown": null,

    /**
     * @description nesting 선택자 허용 여부
     * @link https://stylelint.io/user-guide/rules/no-descending-specificity/
     */
    "no-descending-specificity": true,

    /**
     * @description 컬러 네임 허용 여부
     * @link https://stylelint.io/user-guide/rules/color-named/
     */
    "color-named": "always-where-possible",
  },
};
