module.exports = {
  root: true,
  plugins: ["jest"],
  extends: ["eslint:recommended", "plugin:jest/recommended", "plugin:jest/style", "prettier"],
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:jest/recommended",
        "plugin:jest/style",
        "prettier",
        "prettier/@typescript-eslint",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.eslint.json"],
      },
      plugins: ["@typescript-eslint", "jest"],
      rules: {
        "@typescript-eslint/array-type": ["error", { default: "generic", readonly: "generic" }],
        "@typescript-eslint/method-signature-style": ["error", "method"],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
      },
    },
  ],
};
