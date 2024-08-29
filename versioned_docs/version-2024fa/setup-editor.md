---
id: setup-editor
title: Setup your editor
---

# Install an Editor

We recommend using [VSCode](https://code.visualstudio.com/), which is free for students. Install it from the website.

Note: Course staff, instructors, and TAs will be using VSCode, so if you are using any other editors (such as [WebStorm](https://www.jetbrains.com/webstorm/)), you may need to do some extra work to get help from us.

## Recommended VSCode Extensions

To install extensions in VS Code, navigate to the left-hand sidebar, and click the building blocks icon near the bottom. This should take you to the Extensions marketplace.

### ESLint

Installing ESLint in VSCode will give you real-time linter feedback in any JavaScript code you write, allowing you to quickly pinpoint many problems and have readable, proper formatting.

Once installed, add these lines to your VSCode Settings (refer to [this link](https://code.visualstudio.com/docs/getstarted/settings) if you need help getting there or alternatively open the command palette in VSCode with <kbd>CMD</kbd>/<kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>P</kbd> and search `settings.json`):

```json
  // Other settings ...
  "eslint.alwaysShowStatus": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.packageManager": "yarn"
```

### Prettier

Prettier is a code formatter that will automatically format your code to be consistent with the rest of the class.

Install it and it should automatically work!