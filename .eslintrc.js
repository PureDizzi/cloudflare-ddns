module.exports = {
    extends: 'standard',
    rules: {
        'no-console': 'warn',
        'no-debugger': 'off',
        'generator-star-spacing': 'off',
        indent: ['error', 4],
        curly: ['error', 'multi'],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        'space-before-function-paren': ['error', {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always'
        }],
        camelcase: [1],
        'prefer-arrow-callback': 'error'
    }
}
