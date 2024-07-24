const path = require('path')

module.exports = {
  "parserOptions": {
    "ecmaVersion": "latest",
    "project": ["./tsconfig.json"],
    "tsconfigRootDir": path.resolve(__dirname),
  },
  "ignorePatterns": ["*.d.ts", "*.js"],
  "env": {
    "es6": true
  },
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "only-warn"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  // these 'only-warn' settings allow certain rules/plugins to show as errors instead of warnings: https://github.com/aminya/eslint-plugin-only-warn
  "settings": {
    "only-warn": {
        "exclude-id": "locatrix-rules/import-locatrix-not-projects"
    }
},
  "rules": {
    "arrow-spacing": [
      "warn", 
      { 
        "before": true, 
        "after": true 
      }
    ],
    "jsx-quotes": ["warn", "prefer-double"],
    "no-multiple-empty-lines": ["warn", { "max": 1, "maxBOF": 0, "maxEOF": 0 }],
    "no-trailing-spaces": "warn",
    "no-multi-spaces": "warn",
    "space-infix-ops": "warn",
    "quotes": ["warn", "single", { "avoidEscape": true }],
    "require-await": "warn",
    "space-before-blocks" : ["warn", "always"],
    "space-before-function-paren": [
      "warn", {
        "anonymous": "always",
        "named": "always",
        "asyncArrow": "always"
    }],
    "semi": ["warn", "never"],
    "eol-last": "warn",
    "prefer-const": "off", // there are too many instances where variables are mutated and eslint wants us to mark them as `const`
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": ["warn", {
      "argsIgnorePattern": "^_",
      "varsIgnorePattern": "^_",
      "caughtErrorsIgnorePattern": "^_",
      "ignoreRestSiblings": true
    }],
    "@typescript-eslint/indent": ["warn", 2, {
      // disable indentation checks for multi-line function parameters that have decorators because it was showing warnings
      "ignoredNodes": ["FunctionExpression > .params > :matches(Decorator)"],
      // fixes incorrect indendation warnings for the body of switch-case blocks (has to be capital S lol)
      "SwitchCase": 1
    }],
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "keyword-spacing": ["warn", { "after": true }], // ensures there is a space next to statements such as  => if ()
    "brace-style": "warn", // ensure that else statements start on the same line as the previous satement's closing curly bracket
    "curly": "warn", // Ensures there are no statements without curly brackets
    "key-spacing": ["warn", { "mode": "strict"}], // ensures that there are no more than 1 space between key-value pairs
    "object-curly-spacing": ["warn", "always"], // ensure padding around brackets when creating objects
    "padding-line-between-statements": [ // Ensure there is an empty line between function/method declarations
      "warn",
      {
        "blankLine": "always",
        "prev": "function",
        "next": "function"
      },
      {
        "blankLine": "always",
        "prev": "export",
        "next": "export"
      }
    ]
  }
}