module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'airbnb',
        'plugin:jest/recommended',
        'jest-enzyme',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'import',
        'jsx-a11y',
        'react',
        'prettier',
    ],
    rules: {
        // link to sourse
        // https://habr.com/ru/company/ruvds/blog/428173/

        'linebreak-style': 'off',
        "operator-linebreak": [2, "after", { "overrides": { "?": "after" } }],

        "no-use-before-define": ["error", {
            "functions": false,
            "classes": true,
            "variables": true,
        }],

        'arrow-parens': 'off',
        'object-curly-newline': 'off',
        'no-mixed-operators': 'off',
        'arrow-body-style': 'off',
        'function-paren-newline': 'off',
        'no-plusplus': 'off',
        'space-before-function-paren': 0,

        "indent": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],

        'max-len': ['error', 120, 2, {ignoreUrls: true,}],
        'no-console': 'warn',
        'no-alert': 'error',

        'no-param-reassign': 'off',
        "radix": "off",

        'react/require-default-props': 'off',
        'react/forbid-prop-types': 'off',
        'react/prop-types': 'off',
        'react/jsx-filename-extension': ['error', {extensions: ['.jsx','.js']}],

        'prefer-destructuring': 'off',

        'react/no-find-dom-node': 'off',
        'react/no-did-mount-set-state': 'off',
        'react/no-unused-prop-types': 'off',
        'react/jsx-one-expression-per-line': 'off',

        "jsx-a11y/anchor-is-valid": ["error", {"components": ["Link"], "specialLink": ["to"]}],
        "jsx-a11y/label-has-for": [2, {
            "required": {
                "every": ["id"]
            }
        }],

        'prettier/prettier': ['error'],
    },
};
