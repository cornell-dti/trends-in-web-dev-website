---
id: lecture3
title: Lecture 3
---

[Lecture Slides](https://docs.google.com/presentation/d/1P8kf-H0n5my1O2OW1MOjo5GpvdMFsWGm68vgwU9TQc8/edit?usp=sharing)

[Assignment 2](/docs/assignment2) (due 10/21 6:29 PM on CMS)

[Install Postman](https://www.postman.com/downloads/)

## Before the lecture

### Create `tsconfig.json`

From now on, we will be using a `tsconfig.json` file within every Node project we create (a recap on how to do that is below this section). Essentially, the `tsconfig.json` is a file at the root of a Node project which indicates it is using TypeScript, and allows us to configure the TypeScript compiler. If you'd like to follow the lecture synchronously, you can put the following chunk of code into the root directory of your lecture 3 project. If you're more curious about how the file works, you can refer [to this link](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

```json
{
  "compilerOptions": {
    "target": "es6",
    "outDir": "./output",
    "lib": ["dom", "dom.iterable", "esnext"],
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "importsNotUsedAsValues": "error",
    "module": "commonjs",
    "moduleResolution": "node",
    "resolveJsonModule": true
  },
  "types": ["node"],
  "include": ["./*"],
  "exclude": []
}
```

### Install Postman

Use the link above to install Postman.

The rest will be updated soon after lecture!