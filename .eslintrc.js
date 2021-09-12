const { printSchema } = require('graphql');

module.exports = {
  root: true,
  ignorePatterns: [
    "projects/**/*"
  ],
  overrides: [
    {
      files: [
        "*.ts"
      ],
      parserOptions: {
        project: [
          "tsconfig.json"
        ],
        createDefaultProgram: true
      },
      extends: [
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "prettier",
        "plugin:prettier/recommended",
        "graphql"
      ],
      rules: {
        "@angular-eslint/component-selector": [
          "error",
          {
            prefix: "pluma-online",
            style: "kebab-case",
            type: "element"
          }
        ],
        "@angular-eslint/directive-selector": [
          "error",
          {
            prefix: "pluma-online",
            style: "camelCase",
            type: "attribute"
          }
        ],
        "@angular-eslint/no-empty-lifecycle-method": "warn",
        "graphql/template-strings": [
          "error", {
            env: "apollo",
            schemaString: printSchema(require('./server/schema.graphql'))
          }
        ]
      }
    },
    {
      "files": [
        "*.html"
      ],
      "extends": [
        "plugin:@angular-eslint/template/recommended"
      ],
      "rules": {}
    }
  ]
}
