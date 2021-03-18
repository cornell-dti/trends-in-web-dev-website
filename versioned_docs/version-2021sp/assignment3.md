---
id: assignment3
title: Assignment 3
---

For this assignment, we will be taking a nice break from Express and Firebase to
learn about some cool JavaScript/Typescript fundamentals!

ALL questions in this assignment MUST be done using `.map`, `.filter`, or
`.reduce`. We will give you no credit for an approach that is not functional.
You don't need for loops to solve these problems!

ALL functions must also be defined using **arrow functions**:

```typescript
(params) => {
  // function body
};
```

You must write your functions from the starter code. You are not allowed to change the function signature.

## Question 1

Write a function, `myMean`, that takes in an array of numbers and returns the mean.

Starter code:

```typescript
export const myMean = (array: number[]): number => {
  /* TODO: add your code */
};
```

## Question 2

Write a function, `getPrimes`, that takes in an array of numbers and returns a
new array containing only the elements that are primes. Reminder: prime numbers
are natural numbers larger than 1 that can only be divisible by itself and 1.
Don't worry about efficiency! It's ok to brute force this :)

Example: `getPrimes([1, 5, 16, 3])` should return `[5, 3]`.

Starter code:

```typescript
export const getPrimes = (array: number[]): number[] => {
  /* TODO: add your code */
};
```

## Question 3

Write a function, `partition`, that takes in an array of numbers and a function
`belongToGroup1`, and returns an object of two arrays `group1` and `group2`.

If `belongToGroup1` returns `true`, then the element should go into `group1`. If
`belongToGroup1` returns `false`, then the element should go into `group2`.

**EXAMPLE**

```typescript
partition([1, 2, 3, 4, 5, 6], (n) => n % 3 === 0); // { group1: [3, 6], group2: [1, 2, 4, 5] }
partition([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0); // { group1: [2, 4, 6], group2: [1, 3, 5] }
```

Starter code:

```typescript
export const partition = (
  array: number[],
  belongToGroup1: (element: number) => boolean
): { group1: number[]; group2: number[] } => {
  /* TODO: add your code */
};
```

## Question 4

Write a function, makeSentences, that takes in an array of objects in the format
`{name: string, age: number, breed: string}` and maps it to an array of
sentences in the format "_name_ is _age_ years old, and is a _breed_."

Please use _object destructuring_ to get object fields.

**NOTE**

A "prototype" is an instance of an object in JavaScript/TypeScript. In
documentation, methods are often denoted like: `Type.prototype.method()`

Remember, anything in JavaScript/TypeScript can be an object!

So, we can do: `5.toExponential(10)` or `let x = 5; x.toExponential()`

Your goal is to round the age to the nearest tenth.

For example, you want to display `"5.6 years"` for the value `5.64`.

Take a look at [this documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#Methods) if you are stuck!

**EXAMPLE**

```typescript
const doggos = [
  { name: 'Sparky', age: 3.35, breed: 'Pomeranian Husky' },
  { name: 'Oreo', age: 5.42, breed: 'Dalmatian' },
  { name: 'Stella', age: 4, breed: 'Alaskan Klee Kai' },
];

makeSentences(doggos);
```

should output

```typescript
[
  'Sparky is 3.4 years old and is a Pomeranian Husky',
  'Oreo is 5.4 years old and is a Dalmatian',
  'Stella is 4.0 years old and is a Alaskan Klee Kai',
];
```

Starter code:

```typescript
// TODO: You should replace this any with an accurate object type in your submission!
type Doggo = any;

export const makeSentences = (array: Doggo[]): string[] => {
  /* TODO: add your code */
};
```

Don't worry about printing "year" vs "years" or "a" vs "an", unless you want the
extra challenge!

## Submission

Please submit to CMS your `index.ts` file containing your implementations of
each of the functions described above.
