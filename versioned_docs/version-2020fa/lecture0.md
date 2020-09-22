---
id: lecture0
title: Lecture 0
---

[Lecture Video](https://drive.google.com/file/d/1fEn5b83n42-lX2Y3loyVFN7RQ_ca6y8I/view?usp=sharing)

[Lecture Slides](https://docs.google.com/presentation/d/1WpfGvyGtjkEmM2MrV2yFfQ_b7pVHGbO-GlnViJOa4HY/edit?usp=sharing)

No homework this week! We're still getting CMS/Piazza set up

## JavaScript

### What is JavaScript

- JavaScript is the defacto language of the web
- Commonly used in conjunction with HTML/CSS
- Became really popular for powering client-side logic through AJAX
  - Previously, languages like PHP had to communicate with the server before coming back with a response
- These days JavaScript is everywhere!

:::note
Java is to JavaScript as car is to carpet. They are very different languages!
:::

### Basic JavaScript Syntax

#### Variables

There are three ways to create variables in JS:

1. ~~`var x = 5`~~
2. `let x = 5`
3. **`const x = 5`**

We prefer using **const** for immutability although let is also accepted. _**Never use var.**_

#### if statements

```js
if (condition) {
  // executes if condition is true
} else if (condition2) {
  // executes if condition is false but condition2 is true
} else {
  // executes if condition is false
}
```

#### for loops

##### regular counter for loop

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

##### for of loop

We can use `for..of` loops to loop through elements of an array.

```js
const arr = [10, 20, 30, 40];
for (const val of arr) {
  console.log(val); // prints values: 10, 20, 30, 40
}
```

#### for in loop

We can use `for..in` loops to loop through keys of an object.

```js
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"
```

#### while loops

```js
let n = 0;

while (n < 3) {
  console.log(n);
  n++;
}

// expected output:
// "0"
// "1"
// "2"
```

#### function declaration

We can use the function key word to define a function!

```js
function calcRectArea(width, height) {
  return width * height;
}

console.log(calcRectArea(5, 6)); // 30
```

or we can use _arrow functions_:

```js
const calcRectArea = (width, height) => {
  return width * height;
};
```

More details on arrow functions in a few weeks when we talk about ES6!

:::tip
JavaScript is a super powerful language and this was just a small sample of its language features. Check out Mozilla Developer Network (MDN) for the best JavaScript documentation: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
:::

## TypeScript

TypeScript is a typed _superset_ of JavaScript that compiles to plain JavaScript. Superset means TypeScript has everything in JavaScript and more. (Built by Microsoft!)

### JavaScript Types

JavaScript has 6 primitive types:

- Boolean
- String
- Number
- Symbol
- undefined
- BigInt

All JavaScript values are those 6 primitive types or a:

- object
- function (JavaScript is functional!)
- null

### How are types used?

In JavaScript we had:

```js
let str = 'Hello, trends';
let num = 42;
let truth = true;

const someFunc = (x, s, b) => {
  // do some operations...
  return x;
};
```

Notice we don't have any types here! JavaScript is weakly typed.

```ts
let str: string = 'Hello, trends';
let num: number = 42;
let truth: boolean = false;
const someFunc = (x: number, s: string, b: boolean): number => {
  // do some operations...
  return x;
};
```

TypeScript allows us to add type information!

### Why TypeScript?

JavaScript code can be ambiguous. We had the function:

```js
const someFunc = (x, s, b) => {
  // do some operations...
  return x;
};
```

What are `x, s, b`? What should I pass in for those? What should I expect returned?

Adding the TypeScript types makes this code self-documenting:

```ts
const someFunc = (x: number, s: string, b: boolean): number => {
  // do some operations...
  return x;
};
```

JavaScript variables can also change type which can be undesirable, unexpected, and error-prone.

```js
let str = 'Hello, trends';
let num = 42;
let truth = true;
str = 13;
```

None of these variables have to be any specific type! I can have `str` be a string and then a number.

In the end, we want to use TypeScript because it is:

- Easier to read
- Easier and faster to implement
- Easier to refactor
- Less buggy

### TypeScript Types

Basic Syntax:

```js
let <var_name>: <type> = <something>;
```

We can also use `const` but again no `var`.

#### Basic Types

```ts
// Boolean
let isDone: boolean = false;
// Number can be decimal, or in any base!
let decimal: number = 4.2;
let binary: number = 0b1010;
let hex: number = 0xf00d;
// String
let lang: string = 'typescript';
let templateStr: string = `We love ${lang}`;
// Boolean
let isDone: boolean = false;
// Number can be decimal, or in any base!
let decimal: number = 4.2;
let binary: number = 0b1010;
let hex: number = 0xf00d;
// String
let lang: string = 'typescript';
let templateStr: string = `We love ${lang}`;
```

#### Any

`Any` is a wildcard and it can be anything. `any` places no restrictions on type.

```ts
// Any: can be anything!
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean
```

If you were to use `any` everywhere though you might as well just use JavaScript

```ts
let anyList: any[] = [4, 'maybe a string', false];
```

But it can be useful in specifying collections of items of different types!

#### Functions

Functions can have types too!

```ts
// un-typed
const myFunc = (x, y) => x + y;
// typed
const myFunc = (x: number, y: number): number => x + y;
```

`myFunc` has type `(x: number, y: number): number`.

TypeScript can do some limited type inference so if you leave out the return type `number`, TypeScript can infer it since we are just adding two numbers which can only produce a number. If TypeScript can't infer the type, it defaults as `any`.

We can also have optional parameters:

```ts
const introduce = (name: string, github?: string): string => {
  return github
    ? `Hi, I'm ${name}. Checkout my GitHub @${github}`
    : `Hi, I'm ${name}. I don't have a GitHub.`;
};
```

`github?` designates `github` as an optional parameter that defaults to `undefined`.

#### Literal Types

Literal Types are types that can be a literal set of possibilities that you specify. TypeScript allows number and string literal types:

##### String Literal Types

```ts
// String literal type
type TrafficLightColors = 'red' | 'green' | 'yellow';
```

Any variable with `TrafficLightColors` type can only take on values `"red", "green", "yellow"`.

```ts
let light1: TrafficLightColors = 'red';
light1 = 'blue'; // TypeError
```

##### Numeric Literal Types

```ts
// Numeric literal type
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
const rollDice = (): DiceRoll => {
  // ...
};
```

#### Union Types

With union types, a variable can be of one type or another type.

```ts
const union: number | string = 5; // number
const union2: number | string = 'hello'; // string

type TrafficLightColors = 'red' | 'green' | 'yellow';
type PrimaryColors = 'red' | 'green' | 'blue';

// "red" | "green" | "yellow" | "blue"
type union = PrimaryColors | TrafficLightColors;
```

#### Intersection Types

With union types, a variable must be of one type and another type.

```ts
// Intersection Type
type TrafficLightColors = 'red' | 'green' | 'yellow';
type PrimaryColors = 'red' | 'green' | 'blue';
type intersect = PrimaryColors & TrafficLightColors; // "red" | "green"
```

:::tip
There's also so much more to TypeScript. Checkout TypeScript docs to learn more! [https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)
:::

### Demo

We went through a demo of writing and running code in TypeScript using the preassessment as an example. First install `typescript` and `ts-node`:

```bash
yarn global add typescript
yarn global add ts-node
```

We used the following example code:

```typescript title="script.ts"
const mySum = (inputArray: number[]): number => {
  let sum: number = 0;
  for (const num of inputArray) {
    sum += num;
  }
  return sum;
};

console.log(mySum([1, 2, 3])); // expected 6

const isLeapYear = (year: number): boolean => {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
};

console.log(isLeapYear(2000)); // is a leap year
console.log(isLeapYear(2100)); // is NOT a leap year;

const perfectSquares = (arr: number[]): number[] => {
  const ans: number[] = [];
  for (const num of arr) {
    if (Math.sqrt(num) % 1 === 0) {
      ans.push(num);
    }
  }
  return ans;
};

console.log(perfectSquares([1, 4, 9])); // expected same as input
console.log(perfectSquares([1, 5, 9])); // expected [1, 9]
```

Run it with `ts-node script.ts`
