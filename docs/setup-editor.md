---
id: setup-editor
title: Setup your editor
---

For convenience, we assume you will use VSCode. If you are using WebStorm and
Atom, you are likely to find some extensions that provide similar
functionalities.

## Recommened Extensions

### ESLint

Install ESLint in VSCode

Add these lines to your VSCode Settings:

```json
  // Other settings ...
  "eslint.alwaysShowStatus": true,
  "eslint.autoFixOnSave": true,
  "eslint.enable": true,
  "eslint.packageManager": "yarn",
  "eslint.validate": [
    { "autoFix": true, "language": "javascript" },
    { "autoFix": true, "language": "javascriptreact" },
    { "autoFix": true, "language": "typescript" },
    { "autoFix": true, "language": "typescriptreact" }
  ],
```
