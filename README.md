# @bamboechop/eslint-config-node

This ESLint config package contains my preferred set of ESLint rules for a Node.js based project.

## Installation

```
npm install --save-dev @bamboechop/eslint-config-node
```

## Usage

Add the `extends` array to your ESLint config file (e.g. `.eslintrc.js`) and reference this package.

```
extends: [
  `@bamboechop/eslint-config-node`,
]
```

### Configure [eslint-plugin-jira-ticket-todo-comment](https://github.com/bamboechop/eslint-plugin-jira-ticket-todo-comment) plugin

The plugin uses its default configuration which requires you to have the `MP` key in your TODO comments. To override this please check out the [documentation](https://github.com/bamboechop/eslint-plugin-jira-ticket-todo-comment#options) of the plugin.
