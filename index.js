module.exports = {
  env: {
    node: true,
    jest: true,
  },
  extends: [
    `plugin:@typescript-eslint/eslint-recommended`,
    `plugin:@typescript-eslint/recommended`,
    `airbnb-base`,
  ],
  ignorePatterns: [`.eslintrc.js`, `/migrations/*`],
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    project: `tsconfig.json`,
    sourceType: `module`,
  },
  plugins: [
    `@typescript-eslint/eslint-plugin`,
    `import-quotes`,
    `jira-ticket-todo-comment`,
  ],
  root: true,
  rules: {
    '@typescript-eslint/explicit-function-return-type': `error`,
    '@typescript-eslint/explicit-module-boundary-types': `off`,
    '@typescript-eslint/member-delimiter-style': [`error`, {
      multiline: {
        delimiter: `semi`,
        requireLast: true,
      },
      singleline: {
        delimiter: `semi`,
        requireLast: false,
      },
    }],
    '@typescript-eslint/member-ordering': [
      `warn`,
      {
        default: {
          memberTypes: [
            `public-field`,
            `protected-field`,
            `private-field`,
            `constructor`,
            `get`,
            `set`,
            `public-method`,
            `protected-method`,
            `private-method`,
          ],
        },
        interfaces: {
          order: `alphabetically`,
        },
        typeLiterals: {
          order: `alphabetically`,
        },
      },
    ],
    '@typescript-eslint/naming-convention': [
      `error`,
      {
        custom: {
          match: true,
          regex: `^E[A-Z]`,
        },
        format: [`PascalCase`],
        selector: `enum`,
      },
      {
        custom: {
          match: true,
          regex: `^I[A-Z]`,
        },
        format: [`PascalCase`],
        selector: `interface`,
      },
      {
        custom: {
          regex: '^T[A-Z]',
          match: true
        },
        format: ['PascalCase'],
        selector: 'typeAlias',
      },
    ],
    '@typescript-eslint/no-explicit-any': `error`,
    '@typescript-eslint/no-unused-vars': [`warn`, { argsIgnorePattern: `^_` }],
    '@typescript-eslint/no-useless-constructor': `error`,
    '@typescript-eslint/return-await': `error`,
    '@typescript-eslint/semi': [`warn`],
    'arrow-body-style': `off`,
    'arrow-parens': `off`,
    'class-methods-use-this': `off`,
    'import/extensions': `off`,
    'import/no-extraneous-dependencies': `off`,
    'import/no-unresolved': `off`,
    'import/prefer-default-export': `off`,
    'import-quotes/import-quotes': [1, `single`],
    'jira-ticket-todo-comment/jira-ticket-todo-comment': `error`,
    'keyword-spacing': [`error`, {
      after: true,
      before: true,
      overrides: {
        catch: { after: false },
        for: { after: false },
        if: { after: false },
        switch: { after: false },
      },
    }],
    'linebreak-style': `off`,
    'lines-between-class-members': `off`,
    'max-classes-per-file': `off`,
    'max-len': [`warn`, { code: 200 }],
    'no-console': `warn`,
    'no-empty-function': [`error`, { allow: [`constructors`] }],
    'no-plusplus': [`error`, { allowForLoopAfterthoughts: true }],
    'no-restricted-syntax': [
      `warn`,
      `ForInStatement`,
      `LabeledStatement`,
      `WithStatement`,
    ],
    'no-return-await': `off`,
    'no-shadow': `off`,
    'no-unused-vars': [`warn`, { argsIgnorePattern: `^_` }],
    'no-useless-constructor': `off`,
    'no-void': `off`,
    quotes: [`error`, `backtick`],
    semi: `off`,
    'sort-keys': [`warn`, `asc`],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [`.js`, `.jsx`, `.ts`, `.tsx`],
      },
    },
  },
};
