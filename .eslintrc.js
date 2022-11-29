module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:unicorn/all',
        'plugin:import/recommended',
        'plugin:sonarjs/recommended',
        'next/core-web-vitals',
        'next',
        'prettier'
    ],

    //--------------------------------------------------------------------------
    // Rules
    //-------------------------------------------------------------------------
    rules: {
        // DISABLE
        '@typescript-eslint/no-empty-interface': [0],
        '@typescript-eslint/no-explicit-any': [0],
        '@typescript-eslint/no-var-requires': [0],
        '@typescript-eslint/no-non-null-assertion': [0],
        'react/prop-types': [0],
        'no-control-regex': [0],
        'unicorn/prevent-abbreviations': [0],
        'unicorn/text-encoding-identifier-case': [0],

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

        // ERROR
        'linebreak-style': [2, 'windows'],
        'quotes': [2, 'single'],
        'semi': [2, 'never'],
        '@typescript-eslint/explicit-module-boundary-types': [
            1,
            {
                allowArgumentsExplicitlyTypedAsAny: true
            }
        ]
    }
}
