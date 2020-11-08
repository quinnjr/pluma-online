module.exports = {
  'printWidth': 80,
  'tabWidth': 2,
  'useTabs': false,
  'semi': true,
  'singleQuote': true,
  'quoteProps': 'as-needed',
  'trailingComma': false,
  'bracketSpacing': true,
  'arrowParens': 'always',
  'overrides': [
    {
      'files': '.editorconfig',
      'options': { parser: 'yaml' }
    },
    {
      'files': 'LICENSE.md',
      'options': { parser: 'markdown' }
    }
  ]
};
