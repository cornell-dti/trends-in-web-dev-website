---
id: lecture2
title: Lecture 2
---

[Lecture Video](https://drive.google.com/file/d/1A9MD8NEClykBYMwcoSywPNtGWR2VTVxy/view?usp=sharing)

[Lecture Slides](https://docs.google.com/presentation/d/1pusfE9Zhtzse3yjDCzS4N2Oei2XmhanHElnhYFxXuBA/edit?usp=sharing)

**Join the [Piazza](https://piazza.com/cornell/fall2020/info1998section604)!**

No assignment this week; enjoy your break!

## `tsconfig.json`

From now on, we will be using a `tsconfig.json` file within every Node project
we create (a recap on how to do that is below this section). Essentially, the
`tsconfig.json` is a file at the root of a Node project which indicates it is using TypeScript, and allows us to configure the TypeScript compiler. If you're more curious about how the file works, you can refer [to this link](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

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
