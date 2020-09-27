---
id: setup-editor
title: Setup your editor
---

For convenience, we assume you will use VSCode. If you are using WebStorm and
Atom, you are likely to find some extensions that provide similar
functionalities.

## Recommended Extensions

To install extensions in VS Code, navigate to the left-hand sidebar, and click the building blocks icon at the bottom. This should take you to the Extensions marketplace.

### ESLint

Installing ESLint in VSCode will give you real-time linter feedback in any JavaScript code you write, allowing you to quickly pinpoint many problems and have readable, proper formatting.

Once installed, add these lines to your VSCode Settings (refer to [this link](https://code.visualstudio.com/docs/getstarted/settings) if you need help getting there or alternatively open the command palette in VSCode with `CMD/CTRL+SHIFT+P` and search `settings.json`):

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

This will be useful later when inspecting `package.json` files.
