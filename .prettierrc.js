module.exports = {
    tabWidth: 4,
    useTabs: false,
    semi: false,
    jsxBracketSameLine: false,
    trailingComma: 'es5',
    printWidth: 100,
    arrowParens: 'always',
    proseWrap: 'always',
    quoteProps: 'consistent',
    singleQuote: true,
    jsxSingleQuote: false,
    bracketSpacing: true,
    endOfLine: 'lf',
    overrides: [
        {
            files: ['*.babelrc', '**/*.json', '**/*.jsonc', '*.json'],
            options: {
                parser: 'json',
                tabWidth: 2,
            },
        },
        {
            files: ['*.yaml', '*.yml'],
            options: {
                parser: 'yaml',
                tabWidth: 2,
            },
        },
    ],
}
