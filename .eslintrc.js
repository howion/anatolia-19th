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
        'sonarjs/no-duplicate-string': [0],
        'unicorn/prefer-top-level-await': [0],
        'unicorn/numeric-separators-style': [0],
        'react/prop-types': [0],
        'react/display-name': [0],
        'no-control-regex': [0],

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
