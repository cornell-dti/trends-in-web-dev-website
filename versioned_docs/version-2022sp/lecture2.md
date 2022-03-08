---
id: lecture2
title: Lecture 2
---

[Lecture Slides](https://docs.google.com/presentation/d/1ZLiN4SOXepDaDzWj7RTBJCHTC8pLOkaGs60OoNqyjiI/edit?usp=sharing)

[Assignment 1](/docs/assignment1) (due ~~3/09 4:59 PM~~ on CMS) **Extended to 3/11 11:59 PM!**

## How to build a web app

_Intro to Node.js and Yarn_

### How websites work

Websites are accessed by HTTP requests, and these requests go to the server, where it fetches the information queried and sends the data back to the client. This cycle between sending requests back and forth between client and server then repeats!

## Node.js

> Node.js is an open source, cross platform JavaScript V8 runtime environment using a single-threaded event loop.

Let's break it down...

#### Open Source

All of the code is available to you to view on [Github](https://github.com/nodejs/node)! Anyone can contribute-- this democratizes the development process!

#### Cross Platform JavaScript Runtime Environment

- Historically you were only able to run JavaScript on the browser or client
- Node.js takes the V8 JavaScript engine powering Google Chrome outside of the browser allowing you to run Node.js **anywhere**
  - V8 JavaScript engine is a fast JavaScript engine created by Google. Learn more about it [here](https://v8.dev/)!
- Can run Node.js on your terminal as well
- Now, we can use JavaScript as a **universal language**!

#### Single-threaded

- Threads are a separate line of execution and can be ran in parallel - i.e. several at
  the same time.
- However, Node.js uses a single-threaded event loop
  - Run in a single process
  - Requests do not spawn new threads
- Non-blocking

#### How does Node.js handle multiple requests?

- Node.js is **asynchronous**
- When a request is sent, it is dispatched to the server
- Instead of blocking the thread and wasting CPU cycles waiting for the request to finish, Node.js continues its operations
- Once the request is complete, a callback is triggered and information is sent back

#### Event Loop

- Client can send requests into the event loop
- We can register callbacks to server when doing things that might take time (ie. search, query, intensive computation)
- After operation completes, callback will fire and return to requests

:::info
A callback is a function that you can pass to another function to be executed
later. This is a common pattern in web development, since lots of data goes
from the client to the server, and we want to implement certain behavior that fires
after the data is received.
:::

#### Why Node.js?

- Unites front-end and back-end in one language/framework
  - TypeScript/JavaScript
  - Frontend and backend in the same language
- Extremely performant
- Asynchronous and non-blocking
- NPM (Node Package Manager)
  - a directory of many libraries and packages
  - access to huge libraries to use in projects and build upon
  - similar to `pip` in Python, Gradle/Maven in Java, etc (it's okay if you've never heard of these!)

#### Node Package Manager (NPM)

NPM is a dependency manager, like pip for python or maven for java. Think of node packages as recipes made by other people you want to use in your site.
Also part of the open sourced community!

#### package.json

The `package.json` is kind of like a directory for your Node project. It contains
various metadata and information about it, as well as details on what it depends
on, so others can reproduce the behavior of your project.

- Tracks which node packages you use
- **Dependencies**: packages needed at run-time

```
npm install --save <pkg_name>
yarn add <pkg_name>
```

- **devDependencies**: packages used during development (before pushing to production).
  When a "production" or real version gets built prior to deployment, these dependencies
  will not be included. Only install certain tools that ease development in this manner.

```
npm install --save-dev <pkg_name>
yarn add --dev <pkg_name>
```

#### We will use Yarn!

- Faster at installing dependencies in practice
- More optimized

#### NPM vs Yarn commands

- NPM

```
npm init
npm install <pkg_name>
npm uninstall <pkg_name>
npm update <pkg_name>
npm audit
```

- Yarn

```
yarn init
yarn add <pkg_name>
yarn remove <pkg_name>
yarn upgrade <pkg_name>
yarn audit
```

- Very similar
- Audit: checks for vulnerabilities in dependencies

## ~~`var`~~, `let`, and `const`

Before we had ES6, there was only one way to declare variable: `var`. (Well,
there is actually another way, but it's very bad and you should never use it.)

For example, if you want to define a variable `a` initialized to `21 * 2`, you
write

```javascript
var a = 21 * 2;
```

However, `var` has a big problem: it is function scoped instead of block scoped.
Therefore, you might accidentally use a local variable that should not be used
anymore!

```javascript
function someComplexFunction() {
  var foo = 42;
  if (someCondition()) {
    var abc = 41 * 2;
    foo += abc;
  }
  // You can still use abc here!
}
```

In ES6, we finally have `let` and `const` that are block scoped. Using block
scoped variables outside of the block will be a runtime error. You should use
`const` whenever possible since it defines an immutable variable, only use `let`
if the variable has to be mutable. As mentioned above, you should never use
`var`.

Here is a rewrite of the `someComplexFunction` above using only let and const:

```javascript
function someComplexFunction() {
  let foo = 42; // foo might be re-assigned. We need to use `let`.
  if (someCondition()) {
    const abc = 41 * 2; // abc is never mutated. We can use `const`.
    foo += abc;
  }
  // You can NOT use abc here! This is nice!
}
```

Sometimes you have to use `let` even if the variable is only assigned one. This
usually happens when then they are separately assigned inside two branches. For
example,

```javascript
let myMood;
if (hasPrelim()) {
  myMood = 'bad';
} else {
  myMood = 'good';
}
```

To prevent this, people use the **ternary operator**.

```javascript
const myMood = hasPrelim() ? 'bad' : 'good';
```

## Arrow Functions

Before ES6 we wrote functions as such:

```javascript
function myFunction(x) {
  return x + 1;
}
```

or

```javascript
const myFunction = function (x) {
  return x + 1;
};
```

Now we have this shorthand:

```javascript
const myFunction = (x) => {
  return x + 1;
};
```

The syntax is

```javascript
const functionName = (parameter1, parameter2, parameter3) => {
  // function body
};
```

For this simple function, we have even shorter shorthand:

```javascript
const myFunction = (x) => x + 1;
```

This shorthand works if the function body is just one line that will be
immediately returned. In this case, we are simply incrementing `x` and
returning the result.

Anonymous Arrow Functions: just don't include `[function name]`

```javascript
(parameter1, parameter2, parameter3) => {
  // function body
};
```

## Functional Programming

### `map`

`array.map(function)` runs `function` on each element of `array` and returns
an array containing the results.

Example: `[1, 4, 9].map(x => Math.sqrt(x))` will return `[1, 2, 3]`.

### `filter`

`array.filter(function)` runs `function` on each element of `array` and return
an array containing all elements that satisfy the function requirements.

Example: `[1, 4, 9].filter(x => x > 3)` will return `[4, 9]`

### `forEach`

`array.forEach(function)` runs `function` on each element of `array`.
The difference between `map` and `forEach` is that map returns a value, whereas
forEach just applies the function to each element of the array.

Example: `[1, 4, 9].forEach(x => console.log(x))` will print out each element
to the console.

### `every`

`array.every(function)` runs `function` on each element of `array` and returns
whether every element of the array satisfies the function requirements.

Example: `[1, 4, 9].every(x => x > 0)` will return true. However,
`[1, 4, 9].every(x => x > 1)` will return false.

### `some`

`array.some(function)` runs `function` on each element of `array` and returns
whether any element of the array satisfies the function requirements.

Example: `[1, 4, 9].some(x => x == 1)` will return true. However,
`[1, 4, 9].some(x => x == 2)` will return false.

### `reduce`

`array.reduce(function)` runs `function` on each element of `array` and returns
a single value.

Example: `[1, 4, 9].reduce((sum, curr) => sum + curr)` will return 14.

`reduce` can take an optional second parameter to change the value that the
accumulator starts at.

Example: `[1, 4, 9].reduce((sum, curr) => sum + curr, 500)` will return 514.

## Spreading and Destructuring

Say we have a function:

```typescript
const add3 = (a: number, b: number, c: number) => a + b + c;
```

Now if we had an array:

```typescript
const arr = [1, 2, 3];
```

We can use the **spread operator** `...` to _destructure_ each element of the
array as one of the arguments:

```typescript
add3(...arr); // same as add3(arr[0], arr[1], arr[2]) output 6
```

Now if we had an object:

```typescript
const add3Object = {
  a: 3,
  b: 4,
  c: 7,
};
```

`add3(...add3Object)` is illegal, since the order of fields in the object is
not guaranteed. However, you can refactor the `add3` function to be:

```typescript
type ABC = { a: number; b: number; c: number };

const add3 = ({ a, b, c }: ABC) => a + b + c;

// equivalent to:
const add3Uglier = (abc: ABC) => abc.a + abc.b + abc.c;
```

Then we can do

```typescript
add3(add3Object);
```

The spread operator and destructuring is especially useful in
_destructuring assignment_.

```javascript
const [a, b] = [1, 2];

console.log(a); // 1
console.log(b); // 2

const arr1 = [1, 2, 3, 4, 5];
const [c, d, ...rest] = arr1;

console.log(c); // 1
console.log(d); // 2
console.log(rest); // [3, 4, 5]
```

## Ugly Pieces of JavaScript

### Truthy, falsy

JavaScript values can be classified into 'truthy' and 'falsy'. Of course, `true`
is truthy and false is `falsy`. Most values are truthy, except:

- `false`
- `''`
- `0`
- `{}`
- `null`
- `undefined`
- `NaN`

The `if` guard in JavaScript checks whether a value is truthy rather than
whether the value is `true`. Similar mechanism applies to `&&` and `||`.
Therefore, we have

- `'' && 'haha'` evaluates to `''`
- `'haha' || ''` evaluates to `'haha'`.

### Global variables

You were told because that there are only one way to define a variable before
ES6: `var`. This is a white lie. You can actually define a variable without
`var`, `let`, and `const`:

```javascript
foo = 3;
```

If you do this, then you just define a **global variable**. It means you can use
the variable `foo` everywhere. If you have a local variable, then you might
accidentally use or override it with the wrong value.

Lessons learned: never use or define global variables.

### Type coercion

Like most languages, JavaScript coerces types to better suit the operations
that are being applied.

#### Example 1

If we execute `true + false` we get 1. This is because there is an
addition operator, and `true` gets coerced to 1 while `false` gets coerced to 0.

#### Example 2

`{} + [] + {} + [1]` returns `0[object Object]1` because `{} + []`
gets evaluated to 0, `{}` gets evaluated to [object Object], and they both get
coerced to strings. Then, adding a list to a string simply adds the contents of
the list to the string, so 1 gets appended to the end.

#### Example 3

```javascript
const zero = +[]; // + coerce [] into 0
const one = +!![]; // ! coerce [] into false, got inverted, then coerce to 1
const two = +!![] + +!![]; // 2 = 1 + 1

const fib2 = (__) =>
  __ === zero || __ === one ? __ : fib2(__ - one) + fib2(__ - two);
```

This is the Fibonacci sequence implemented using type coercion.

## Why Linters Are Necessary

You have just learned some darkest aspects of JavaScript. We must use it because
it's the only language that can be understood by browser. To mitigate the
problem, people wrote _linters_ that try to automatically find these problems.
They are well integrated with editors so you can directly see the warnings. If
you follow the 'Setup your editor' section, you are good to go. You will see
warnings when you accidentally write some wrong code.

## Resources

I recommend the _You Don't Know JS_ series by Kyle Simpson. The ebooks are
available [for free on GitHub](https://github.com/getify/You-Dont-Know-JS/tree/1st-ed).
The series is comprehensive and will teach you everything you want to know.

Additionally, the [MDN Web Docs](https://developer.mozilla.org/en-US/) are a great
resource for quickly looking up the documentation for various features in Javascript, complete with examples.

### JavaScript

We mentioned Mozilla Developer Network as a site for documentation about the JavaScript language, but it's also a great way to get familiar with the language.

Here is their JavaScript guide: [JavaScript Guide - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

It's a bit long, so I recommend skimming through the first few parts, up to and including the Objects section ([Working with objects - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)).

JavaScript objects will show up a good amount in this course, so make sure you understand the basics!

### TypeScript

The official TypeScript website is a great resource to get familiar with the language. There are different guides that assume different programming backgrounds. Choose the article that best suits your background.

Take a look at the Get Started section here: [TypeScript: The starting point for learning TypeScript (typescriptlang.org)](https://www.typescriptlang.org/docs/)

If you've gone through the MDN JavaScript guide, fill in your TypeScript knowledge with this: [TypeScript: Documentation - TypeScript for JavaScript Programmers (typescriptlang.org)](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

There is also a Handbook that you can chug through if interested (not necessary at all): [TypeScript: Handbook - The TypeScript Handbook (typescriptlang.org)](https://www.typescriptlang.org/docs/handbook/intro.html)

Hope this is helpful for you all! This will be the language you'll be working with all-semester, so being comfortable with the language will pay off.

## Demo Code

Need more examples? This code from last year's lecture's live coding demo rewrites
some functions from the preassessment first using loops then with map, filter,
and reduce.

```typescript title="index.ts"
// getSqrts: takes in an array and returns an array with all the square roots
// of those numbers
// example: [1, 4, 9] => [1, 2, 3]
const getSqrts = (arr: number[]): number[] => {
  const result: number[] = [];
  for (const num of arr) {
    result.push(Math.sqrt(num));
  }
  return result;
};
const getSqrtsMap = (arr: number[]): number[] => {
  return arr.map(Math.sqrt);
};

// perfectSquares: takes in an array and returns an array with only the
// elements that are perfect squares
// example: [1, 2, 3] => [1]
const perfectSquares = (arr: number[]): number[] => {
  const result: number[] = [];
  for (const num of arr) {
    if (Math.sqrt(num) % 1 === 0) {
      result.push(num);
    }
  }
  return result;
};
const isPerfectSquare = (num: number) => Math.sqrt(num) % 1 === 0;
const perfectSquaresFilter = (arr: number[]): number[] => {
  return arr.filter(isPerfectSquare);
};

// mySum: takes in an array and returns the sum of the elements
// example: [1, 2, 3] => 6
const mySum = (arr: number[]): number => {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
};
const mySumReduce = (arr: number[]): number => {
  return arr.reduce((acc: number, curr: number) => acc + curr);
};

// testing!
const input = [1, 2, 3];
console.log(getSqrts(input));
console.log(getSqrtsMap(input));
console.log(perfectSquares(input));
console.log(perfectSquaresFilter(input));
console.log(mySum(input));
console.log(mySumReduce(input));
```
