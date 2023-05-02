/* eslint-disable sonarjs/no-duplicate-string */
module.exports = {
    env: {
        browser: true,
        commonjs: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:unicorn/all',
        'plugin:import/recommended',
        'plugin:sonarjs/recommended',
        'next/core-web-vitals',
        'plugin:@next/next/recommended',
        'plugin:prettier/recommended'
    ],
    rules: {
        // DISABLE
        '@typescript-eslint/no-empty-interface': [0],
        '@typescript-eslint/no-explicit-any': [0],
        '@typescript-eslint/no-var-requires': [0],
        '@typescript-eslint/no-non-null-assertion': [0],
        'unicorn/prefer-top-level-await': [0],
        'react/prop-types': [0],
        'react/display-name': [0],
        'no-control-regex': [0],
        'unicorn/prevent-abbreviations': [0],
        'unicorn/text-encoding-identifier-case': [0],
        'unicorn/no-abusive-eslint-disable': [0],
        'unicorn/no-useless-undefined': [0],
        'unicorn/no-keyword-prefix': [0],
        'unicorn/prefer-query-selector': [0],
        'unicorn/consistent-function-scoping': [0],
        'unicorn/prefer-spread': [0],
        'unicorn/no-null': [0],

        // WARN
        '@typescript-eslint/ban-ts-comment': [
            1,
            {
                'ts-expect-error': 'allow-with-description',
                'ts-ignore': 'allow-with-description',
                'ts-nocheck': 'allow-with-description',
                'minimumDescriptionLength': 2
            }
        ],
        'indent': [1, 4, { SwitchCase: 1 }],
        'max-len': [1, { code: 120 }],
        'unicorn/no-null': [1],
        'prettier/prettier': [1],

        // ERROR
        'linebreak-style': [2, 'windows'],
        'quotes': [2, 'single'],
        'semi': [2, 'never']
    }
}
