---
id: setup-editor
title: Setup your editor
---

For convenience, we assume you will use VSCode. If you are using WebStorm and
Atom, you are likely to find some extensions that provide similar
functionalities.

## Recommeneded Extensions

### ESLint

Install ESLint in VSCode

Add these lines to your VSCode Settings:

```json
  // Other settings ...
  "eslint.alwaysShowStatus": true,
  "eslint.autoFixOnSave": true,
  "eslint.enable": true,
  "eslint.packageManager": "yarn"
```

### Bracket Pair Colorizer

Highlights matching brackets to make code easier to read.

### npm

This will be useful later when looking at `package.json` files.
