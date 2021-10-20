---
id: assignment3
title: Assignment 3
---

For this assignment, we will be taking a nice break from Express and Firebase to
learn about some cool JavaScript/Typescript fundamentals!

**ALL questions in this assignment MUST be done using `.map`, `.filter`, or
`.reduce`. We will give you no credit for an approach that is not functional.**

ALL functions must also be defined using **arrow functions**:

```typescript
(params) => {
  // function body
};
```

You must write your functions from the starter code. You are not allowed to change the function signature.

## Question 1

Write a function `arrayMean` that takes in an array of numbers and returns the mean.
If the array is empty, return undefined.

Starter code:

```typescript
export const arrayMean = (array: number[]): number => {
  /* TODO: add your code */
};
```

### Example for myMean

```typescript
arrayMean([1, 2, 3, 4, 5]); // 3
arrayMean([]); // undefined
```

## Question 2

Write a function `affordableHousing` that takes in an array of `Apartment`s
and returns the list of `id`s of `Apartment`s with `rent` less than or equal to
`budget`.

Starter code:

```typescript
type Apartment = {
  id: string;
  rent: number;
};

export const affordableHousing = (
  listings: Apartment[],
  budget: number
): string[] => {
  /* TODO: add your code */
};
```

### Example for affordableHousing

```typescript
const apts: Apartment[] = [
  { id: 'orbis', rent: 5000 },
  { id: 'ereve', rent: 12345 },
  { id: 'henesys', rent: 1337 },
];

affordableHousing(apts, 5000); // ['orbis', 'henesys']
affordableHousing(apts, 4000); // ['henesys']
```

## Question 3

Write a function `evenEven` that takes in an array of strings and returns
true if every even-length string has the substring `'even'` inside.

Starter code:

```typescript
export const evenEven = (array: string[]): boolean => {
  /* TODO: add your code */
};
```

### Example for evenEven

```typescript
evenEven(['bob']); // true
evenEven(['bob', 'steven']); // true
evenEven(['bob', 'steven', 'anna']); // false
```

## Question 4

Write a function `makeSentences` that takes in an array of objects in the format
`{name: string, age: number, breed: string}` and maps it to an array of
sentences in the format "_name_ is _age_ years old, and is a _breed_."

Please use _object destructuring_ to get object fields.

### NOTE

A "prototype" is an instance of an object in JavaScript/TypeScript. In
documentation, methods are often denoted like: `Type.prototype.method()`

Remember, anything in JavaScript/TypeScript can be an object!

So, we can do: `(5).toExponential(10)` or `let x = 5; x.toExponential()`

Your goal is to round the age to the nearest tenth.

For example, you want to display `"5.6 years"` for the value `5.64` and `"5.7 years"` for the value `5.65`.

Take a look at [this documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#Methods) if you are stuck!

### Example for makeSentences

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
