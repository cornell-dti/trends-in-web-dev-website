---
id: lecture2
title: Lecture 2
---

Make sure you have this `tsconfig` before lecture!

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
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true
  },
  "types": ["node"],
  "include": ["./*"],
  "exclude": []
}
```
