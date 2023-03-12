module.exports = {
    extends: ['stylelint-config-recommended-scss', 'stylelint-config-recess-order', 'stylelint-config-prettier'],
    rules: {
        // 'indentation': [4],
        'color-hex-case': ['lower'],
        'max-nesting-depth': [6],
        'selector-no-qualifying-type': null,
        'shorthand-property-no-redundant-values': null,
        'selector-max-id': null,
        'selector-max-compound-selectors': null,
        'order/properties-alphabetical-order': null,
        'selector-list-comma-newline-after': null
    }
}
