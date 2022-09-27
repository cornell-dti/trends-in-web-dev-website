---
id: lecture1
title: Lecture 1
---

[Lecture Slides](https://docs.google.com/presentation/d/14LCzgpdo6381cS3gfda4fxdumJyl0WS2tRW5PY4EqGg/edit?usp=sharing)

No homework this week!

## JavaScript

### What is JavaScript

- JavaScript is the de facto language of the web
- Commonly used in conjunction with HTML/CSS
- Became really popular for powering client-side logic through AJAX
  - Previously, languages like PHP had to communicate with the server before
    coming back with a response
- These days, JavaScript is everywhere!

:::note
Java is to JavaScript as car is to carpet. They are very different languages!
:::

### Basic JavaScript Syntax

#### Variables

There are three ways to create variables in JS:

1. ~~`var x = 5`~~
2. `let x = 5`
3. **`const x = 5`**

We prefer using **const** for declaring non-reassignable variables although let is also accepted.
_**Never use var.**_ We'll talk more about why in Lecture 4, where we cover
best-practices in modern JavaScript (ES6).

#### if statements

Nothing surprising here.

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

We can use `for..in` loops to loop through keys of an object. A good way to remember
when to use `of` or `in` is that `of` is for iterables, while `in` is for objects.

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

More details on arrow functions in a few weeks when we talk about ES6 (Lecture 4)!

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

All JavaScript values are those 6 primitive types, or an:

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

Notice we don't have any types here! JavaScript is **weakly typed**, meaning
that it is lenient with declaring what types variables are before you
run a program with them, similarly to Python.

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

`any` is a wildcard and it can be anything. `any` places no restrictions on type.

```ts
// Any: can be anything!
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean
```

If you were to use `any` everywhere though you might as well just use JavaScript.

```ts
let anyList: any[] = [4, 'le string', false];
```

But it can be useful in specifying collections of items of different types, when
you don't know the constituent types. If you did know that they could either
be numbers, strings, or booleans as the above code snippet, you could have written:

```ts
let hodgePodgeList: (number | string | boolean)[] = [4, 'le string', false];
```

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
  return 7; // TypeError
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

### Demo 1 - Types demonstration!

```
type OS = "android" | "ios"

// Types are perfect to describe different formats of data.
// If it has no functionality besides storing values, it's data.

// Interfaces are much more similar to traditional Java interfaces.
// Interfaces specify the pieces of functionality that need
// implementation for classes.
// If your datatype will have methods, use an interface.


// Suppose we are building a product list for
// different types of phone.
// Since products are data, we should use types.

// We can "factor out" the basic ingredients for a phone
type BasePhone = {
  simID: string
}

// We use intersection types to "combine" types
type Smartphone = {
  camera: string[],
  gps: boolean,
  os: OS
} & BasePhone

// We use "optional" types on data that may undefined
type DumbPhone = {
  camera?: string,  // My Nokia 3310 does not have
  works: boolean    // it's debatable
} & BasePhone

type Phone = Smartphone | DumbPhone



const iphoneX: Smartphone = {
  simID: "6072544636",
  camera: ["14 mp front", "2 mp spying tool"],
  gps: false,
  os: "ios"
};

const burnerPhone: DumbPhone = {
  simID: "random",
  works: false
}

function showPhone(phone: Phone) {
  //...
}

```

### Demo 2 - Preassessment Check-in

We went through a demo of writing and running code in TypeScript using the
preassessment as an example. Run the following commands to first create a Node
project and then install `typescript` as well as `ts-node`, a package that runs
TypeScript files through the terminal. Don't worry about the files that appear
when you run these commands for now; we'll explain what they mean next week.

```bash
yarn init # answer the questions as well
yarn add typescript
yarn add ts-node
```

We used the following example code. (note that TypeScript files have a `.ts`
extension, as opposed to JavaScript's `.js`. This will allow VS Code to
recognize that you are coding in TS)

```typescript title="demo.ts"
/*
We want to implement the code concisely and clearly.
Yes, there are many ways to do this.
Yes, there are shorter ways, and more "elegant" ways.

But prioritize readability and modifiability! (Why should you do this?)
*/

// @ts-check

/**
 * Question 1: Arrays
 *
 * Complete the function below. It should return the sum of the numbers in an array.
 *
 * @param {number[]} inputArray
 * @returns {number}
 */
function mySum(inputArray) {
  let total = 0;
  for (let i = 0; i < inputArray.length; i++) {
    total += inputArray[i];
  }
  return total;
}

/**
 * Write a function that returns the sum of the numbers in an array.
 *
 * Complete the function blow that checks if a year is a leap year or not.
 *
 * A leap year is defined as any year that is divisible by 4. However, a year
 * divisible by 100 is NOT a leap year, unless it is also divisible by 400.
 *
 * @param {number} year
 * @returns {boolean}
 */
function isLeapYear(year) {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
}

/**
 * Question 3: isPrime
 *
 * Complete the function below that checks if a number is prime.
 *
 * @param {number} n
 * @returns {boolean}
 */
function isPrime(n) {
  // optimization! We only need to go up to sqrt(n)
  const root = Math.floor(Math.sqrt(n));

  for (let i = 2; i < root; i++) {
    // if number i divides n, then n is not prime.
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

/**
 * Question 4: Control flow
 *
 * Write a function that takes a given array, and returns a new array containing
 * only the elements that are perfect squares.
 *
 * @param {number[]} inputArray
 * @returns {number[]}
 */
function perfectSquares(inputArray) {
  const squares = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (
      inputArray[i] > 0 &&
      inputArray[i] == Math.floor(inputArray[i]) &&
      inputArray[i] == Math.round(Math.pow(Math.sqrt(inputArray[i]), 2))
    ) {
      squares.push(inputArray[i]);
      // Or more functionally:
      // if squares has been declared with a "let" instead of const
      // squares = [...squares, inputArray[i]];
    }
  }

  return squares;

  // smorte: filter out non-integers, then filter out negatives, then filter out numbers that don't match the
  // return inputArray
  //   .filter(x => x >= 0)
  //   .filter(x => x == Math.floor(x))
  //   .filter(x => x == Math.round(Math.pow(Math.floor(Math.sqrt(x)), 2)));
}

module.exports = { mySum, isLeapYear, isPrime, perfectSquares };
```

Here is another preassessment solution, this time with excessive type
annotations and the use of arrow function syntax! See if you can spot any
explicit type annotations that can be inferred instead.

```typescript title="demo2.ts"
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

Run it with `ts-node script.ts`. Voilà! That's a basic introduction to TypeScript.
For more language quirks and useful syntax, visit the [TypeScript website and pick the tutorial that best fits you](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html).
