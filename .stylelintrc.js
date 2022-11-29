module.exports = {
    //--------------------------------------------------------------------------
    // Extends
    //--------------------------------------------------------------------------
    extends: ['stylelint-config-sass-guidelines', 'stylelint-config-recess-order'],

    //--------------------------------------------------------------------------
    // Rules
    //--------------------------------------------------------------------------
    rules: {
        'indentation': [4],
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
