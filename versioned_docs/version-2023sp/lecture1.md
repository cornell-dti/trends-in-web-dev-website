---
id: lecture1
title: Lecture 1
---

Homework: None!

Slides: [Here](https://docs.google.com/presentation/d/1BlAPMcTlbvqgjwhDZv3GlOiGQhcY9am-dQTrMaGWbbI/edit?usp=sharing)

Explore more:

- A library for functional [Pattern Matching](https://github.com/gvergnaud/ts-pattern) in TypeScript, to make it even easier to write functional code.

# Today's Lecture 2/20

By the end of today, you should be able to:

- Understand the basics of JavaScript
- Understand the basics of TypeScript

## JavaScript

### What is JavaScript

- JavaScript is the de-facto language of the web
- Commonly used in conjunction with HTML/CSS
- Became really popular for powering client-side logic through AJAX
  - Previously, languages like PHP had to communicate with the server before
    coming back with a response
- These days, JavaScript is everywhere!

:::note
Java is to JavaScript as car is to carpet. They are very different languages!
:::

### JavaScript, conceptually.

JavaScript is a multi-paradigm language, in that it supports multiple programming styles, including Object-Oriented Programming (OOP) (such as in CS 2110), and Functional Programming (FP) (such as in CS 3110).

JavaScript is a **dynamic** and **weakly typed** language, meaning that it is not statically typed. This means that we don't have to declare the type of a variable before we use it, and the type of a variable can change at runtime. This is in contrast to languages like Java, which are statically typed.

The "Trend in Web Development" is to use JavaScript functionally. If you're new to functional programming, in essence, we want to avoid mutating state and instead use immutable data structures that are transformed through functions. This is a very powerful paradigm that allows us to write code that is easier to reason about and test. Throughout this class, we'll encourage you to write your code functionally (declaratively), though obviously "normal" OOP or imperative programming is also fine.

### Basic JavaScript Syntax

#### Variables

There are three ways to create variables in JS:

1. ~~`var x = 5`~~
2. `let x = 5`
3. **`const x = 5`**

We prefer using **const** for declaring non-reassignable variables although let is also accepted.
_**Never use var.**_

The differences between the three are:

- `var` is hoisted, meaning that it is accessible _before_ it is declared (yes, you read that right). This is
  bad practice and can lead to bugs. There are some cases where you might want to use `var`, but they're beyond the scope of this class.
- `let` is block-scoped, meaning that it is only accessible within the block it is declared in. This is
  the most common way to declare variables, and is the equivalent of `int x = 5` in Java.
- `const` is block-scoped, and cannot be reassigned. This is the equivalent of `final int x = 5` in Java.
  We prefer using `const` for declaring non-reassignable variables, as it also enforces immutability and the functional paradigm (easier to debug, test, and reason about).

Now that we've gone over the basics of variables, let's see how we can use them.

#### Objects

Objects are a collection of key-value pairs. They are similar to dictionaries in Python, or maps in Java.

```js
const person = {
  name: 'John',
  age: 30,
  height: 6.0,
  isTall: true,
};
```

You can access the values of an object using the dot operator, which brings up the autocomplete menu.

```js
console.log(person.name); // "John"
console.log(person.age); // 30
```

You can also access the values of an object using the bracket operator, which lets you compute the key on the fly if needed.

```js
console.log(person['name']); // "John"
console.log(person['age']); // 30
```

Objects can also be nested.

```js
const person = {
  name: 'John',
  age: 30,
  height: 6.0,
  isTall: true,
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zip: 10001,
  },
};
```

This is the basis of the "JSON" format, which is a common way to store data. In essence, JSON is just the string representation of a big JavaScript object.

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

This should also look familiar.

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
when to use `of` or `in` is that `of` is for iterables (such as arrays), while `in` is for objects.

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

Not too different from what you're used to.

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

When the function body is a single expression, we can omit the curly braces and the return keyword.

```js
const calcRectArea = (width, height) => width * height;
```

Beautiful!

#### functions, conceptually

In this class, we'll be using **arrow functions** for the most part. They're a bit more concise and are the preferred way to write functions in JavaScript.

Conceptually and syntactically, they're simply an anonymous function (an unnamed function (in Java, a lambda expression)) that is assigned to a constant variable. This allows us to utilize all our code in a functional paradigm, with constant and immutable variables that can be both data types like numbers, as well as functions.

Yes, just like in every other language, functions can be recursive, and nested.

Unlike some other languages, since JavaScript does its best to embrace functional programming, you can also have a function return another function, or be passed into another function as an argument.

##### bonus: factory functions and closures

Because of this setup, we can use functions to create other functions, which is called a **factory function**. This is a very powerful tool in functional programming, and is used to create **closures**.

A closure is a function that has access to the scope of another function, even after that function has returned. Essentially, you can persist state in a function between calls to a returned function. Crazy, huh?

Here's an example of a factory function that persists state between calls to the returned function.

```js
function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

const counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
```

#### the spread operator (JS-specific)

The spread operator is a very useful tool in JavaScript. It allows us to "spread" an iterable (such as an array) or an entire object into a new object or array.

```js
const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5, 6]; // [1, 2, 3, 4, 5, 6]
```

This, for instance, lets us easily create a new object composed of all the key-value pairs of an existing object, while adding a new key-value pair, and overriding an existing key-value pair.

```js
const obj = { a: 1, b: 2, c: 3 };
const obj2 = { ...obj, b: 4, d: 5 }; // { a: 1, b: 4, c: 3, d: 5 }
```

In reverse, we can use the same `...` syntax to get the "rest" of the elements in an array or object.

```js
const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr; // first = 1, second = 2, rest = [3, 4, 5]

console.log(first); // 1
console.log(rest[1]); // 4
```

#### destructuring (JS-specific)

Destructuring is a way to extract data from arrays or objects and assign them to variables automatically, without having to use dot notation or bracket notation to access that data from the array or object.

```js
const arr = [1, 2, 3];
const [first, second, third] = arr; // first = 1, second = 2, third = 3

const obj = { a: 1, b: 2, c: 3 };
const { a, b, c } = obj; // a = 1, b = 2, c = 3
```

#### String interpolation and template literals (JS-specific)

String interpolation is a way to insert variables into a string. In JavaScript, we can use template literals to do this.

This is especially powerful because you can actually insert a full computed Javascript expression into the string, and it will be evaluated and inserted into the string.

```js
const name = 'John';
const age = 30;
const greeting = `Hello, my name is ${name} and I am ${age + 1} years old.`;
```

### combining spreading and destructuring

Say we have a function:

```js
const add3 = (a, b, c) => a + b + c;
```

Now if we had an array:

```js
const arr = [1, 2, 3];
```

We can use the **spread operator** `...` to _destructure_ each element of the
array as one of the arguments:

```js
add3(...arr); // same as add3(arr[0], arr[1], arr[2]) output 6
```

We can even destruct props as they are passed into a function:

```js
const add3 = ({ a, b, c }) => a + b + c;
```

:::tip
Head buzzing already? JavaScript is a super powerful language and this was just a small sample of its language features. Check out Mozilla Developer Network (MDN) for the best JavaScript documentation: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
:::

## TypeScript

### What is TypeScript?

TypeScript is a typed _superset_ of JavaScript that compiles to plain JavaScript (actually, all the types will disappear on compilation!). Superset means TypeScript has everything in JavaScript and more. (Built by Microsoft back in 2012, so now it's a little over a decade old!)

### TypeScript, conceptually.

TypeScript was created to solve the problem of JavaScript's weak typing. To do this, while still preserving the power that JavaScript's weak typing gives us, TypeScript adds complex type calculations to JavaScript using the fundamentals of set and type theory.

For instance, you have intersections, unions, and generics. These are all concepts that are used in TypeScript to make it a typed language.

Additionally, to prevent you from having to manually type out types for every variable, function, and object, TypeScript has a type inference engine that can infer types for you. For instance, if you have a variable `x` that is assigned to the number `5`, TypeScript will infer that `x` is a number.

### TypeScript Types

TypeScript has 6 primitive types:

- Boolean
- String
- Number
- Symbol
- undefined
- BigInt

All TypeScript values are those 6 primitive types, or an:

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

TypeScript allows us to add type information! We can add types to variables, functions, and objects, using the colon `:` syntax. This is called **strong typing**, and it prevents us from assigning the wrong type to a variable.

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

Besides the basic types, TypeScript also has 4 more ambiguous types:

#### Any

`any` is a wildcard and it can be anything. `any` places no restrictions on type.

```ts
// Any: can be anything!
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; // now its a boolean
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

### Unknown

`unknown` is similar to `any` but it is more restrictive. `unknown` is a type-safe `any`.

```ts
let notSure: unknown = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean
```

We use this type when we don't know the type of a variable but we want to make sure we check the type before using it. It allows us to broadly define a type which we don't know, and then later programmatically check the type and narrow it down, either via a type guard or type assertion.

An example of a type guard is `typeof`:

```ts
let notSure: unknown = 4;
if (typeof notSure === 'string') {
  // TypeScript knows notSure is a string
  notSure.toUpperCase();
}
```

Type assertions are a way to tell TypeScript that we know better than it does what the type of a variable is. We can use the `as` keyword:

```ts
let notSure: unknown = 4;
// TypeScript knows notSure is a number
(notSure as number).toFixed();
```

#### Never

`never` is the type of values that never occur. For instance, a function that always throws an exception or one that never returns. Variables also acquire the type `never` when narrowed by any type guards that can never be true.

In set theory, think of it as the empty set - when you take the intersection of two sets that have no elements in common, you get the empty set.

```ts
const error = (message: string): never => {
  throw new Error(message);
};

const infiniteLoop = (): never => {
  while (true) {}
};
```

You can think of it as the opposite of `void`, which is the absence of having any type at all.

#### Void

`void` is the absence of having any type at all. You may see this as the return type of functions that do not return a value.

```ts
const warnUser = (): void => {
  console.log('This is my warning message');
};
```

Back to less ambiguous types! We can type functions and more.

#### Functions

Here's how we can type functions:

```ts
// un-typed
const myFunc = (x, y) => x + y;
// typed
const myFunc = (x: number, y: number): number => x + y;
```

`myFunc` has type `(x: number, y: number): number`.

TypeScript can do some limited type inference so if you leave out the return type `number`, TypeScript can infer it since we are just adding two numbers which can only produce a number. If TypeScript can't infer the type, it defaults as `any`.

**Optional or Possibly-Undefined Types (?)**

We can also have optional parameters:

```ts
const introduce = (name: string, github?: string): string => {
  return github
    ? `Hi, I'm ${name}. Checkout my GitHub @${github}`
    : `Hi, I'm ${name}. I don't have a GitHub.`;
};
```

`github?` designates `github` as an optional parameter that defaults to `undefined`.
Essentially, you can think of `?` as syntactic sugar for `| undefined`.

**Default Parameters**

We can also have default parameters:

```ts
const introduce = (name: string, github: string = 'no-github'): string => {
  return github
    ? `Hi, I'm ${name}. Checkout my GitHub @${github}`
    : `Hi, I'm ${name}. I don't have a GitHub.`;
};
```

This is a just an optional parameter with a default value.

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

#### Enumerations

Enumerations are a way to give more friendly names to key-value pair sets of pre-determined values.

```ts
enum TrafficLightColors {
  Red = 'red',
  Green = 'green',
  Yellow = 'yellow',
}
```

The values of the enum are the strings `'red', 'green', 'yellow'`. The names of the enum are the keys `Red, Green, Yellow`.

```ts
let light1: TrafficLightColors = TrafficLightColors.Red;
light1 = TrafficLightColors.Blue; // TypeError
```

Note how, since an Enumeration is a type, we can use it to type variables and prevent them from being any value other than the ones specified in the enum.

#### Interfaces

Interfaces are a way to describe the structure of an object.

```ts
interface Person {
  name: string;
  age: number;
  isAlive: boolean;
}
```

We can use interfaces to type object variables:

```ts
let person1: Person = {
  name: 'John',
  age: 30,
  isAlive: true,
};
```

We can also use interfaces to describe function parameters and return types:

```ts
interface Person {
  name: string;
  age: number;
  isAlive: boolean;
}

interface PersonIntroduction {
  introduction: string;
  isAlive: boolean;
}

const introduce = (person: Person): PersonIntroduction => {
  return {
    introduction: `Hi, I'm ${person.name}. I'm ${person.age} years old.`,
    isAlive: person.isAlive,
  };
};
```

##### Bonus Content: Complex Interface Usage

1. We can enforce the type of an unlimited number of children key-value pairs.

```ts
interface Person {
  name: string;
  age: number;
  isAlive: boolean;
  [key: string]: number | string | boolean;
}
```

Now, we can add any number of key-value pairs to `Person`, keyed by string, with values of type `number | string | boolean`.

2. We can extend other, existing interfaces.

```ts
interface Person {
  name: string;
  age: number;
  isAlive: boolean;
}

interface PersonIntroduction {
  introduction: string;
  isAlive: boolean;
}

interface PersonWithIntroduction extends Person, PersonIntroduction {}
```

Here, PersonWithIntroduction contains the keys: `name, age, isAlive, introduction`.

3. We can reopen interfaces to add new keys.

```ts
interface Person {
  name: string;
  age: number;
  isAlive: boolean;
}

interface PersonIntroduction {
  introduction: string;
  isAlive: boolean;
}

interface PersonWithIntroduction extends Person, PersonIntroduction {}

interface PersonWithIntroduction {
  favoriteColor: string;
}
```

Here, PersonWithIntroduction contains the keys: `name, age, isAlive, introduction, favoriteColor`.

This is because we "reopened" PersonWithIntroduction to add a new key, and this now redefines PersonWithIntroduction.

#### Type Assertions

Type assertions are a way to tell TypeScript that you know better than it does. This is useful when you know that a variable is of a certain type but TypeScript doesn't.

```ts
const myString = 'hello';
const myStringLen = (myString as string).length;
```

Here, we use the `as` keyword to tell TypeScript that `myString` is a string.

Additionally, we have a shorthand for asserting something isn't `null` or `undefined`:

```ts
const myString = 'hello';
const myStringLen = myString!.length;
```

Here, we use the `!` operator to tell TypeScript that `myString` is not `null` or `undefined` (note how it's the opposite of the `?` operator).

#### Generics

Generics are a way to make a function more flexible. They allow you to specify a type parameter that can be used in the function.

```ts
const introduce = <T,>(name: T): string => {
  return `Hi, I'm ${name}.`;
};
```

Here, we use the `<T>` syntax to specify that `name` can be of any type. We can then use `T` in the function body.

Generics can get pretty complex. For instance, we can enforce that the generic type extends a certain type, and then access that type's properties:

```ts
const introduce = <T extends { name: string }>(person: T): string => {
  return `Hi, I'm ${person.name}.`;
};
```

In the example above, we use the `extends` keyword to specify that `T` must extend the type `{ name: string }`. This means that `T` must have a `name` property that is a string. We can then access `person.name` in the function body, even when we have no idea what type `T` actually is.

:::tip
There's also so much more to TypeScript. Check out the TypeScript docs to learn more! [https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)
:::

Now that we know the basics of JS and TS, we can really start leveraging the power of functional programming within these paradigms. Here's a quick overview of some of the functional programming patterns you'll use in this course.

## Functional Programming

### Control Branching:

Unfortunately, JavaScript only has one control statement available in a declarative manner: the ternary operator. This is a very limited way to control branching, and it's not very readable. In essence, it looks like this:

```js
condition ? trueValue : falseValue; // this expression evaluates to trueValue if condition is true, and falseValue otherwise
```

Note how this contrasts to a traditional if-else statement:

```js
if (condition) {
  return trueValue;
} else {
  return falseValue;
}
// this isn't an evaluated expression (thus, "declarative") -- it's an executed series of commands (thus, "imperative")
```

With nested ternary operators, we can take care of many possible cases with surprisingly clean-looking code (though we're still hoping the JavaScript community will add more declarative control branching statements):

```js
condition1
  ? trueValue1
  : condition2
  ? trueValue2
  : condition3
  ? trueValue3
  : falseValue;
```

Some syntactic sugar operators include `??` (nullish coalescing) and `||` (logical OR). These operators are used to assign a value to a variable if the variable is nullish or falsy, respectively. For example:

```js
let x = null;
x ??= 5; // x is now 5
x ||= 10; // x is still 5
```

### Functions:

Conceptually, you'll note all of the following are functions that act and originate from a single data source.

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

## Ugly Pieces of JavaScript

Yes, JavaScript has a bad rep, and for good reason. Here are some of the most
egregious parts of JavaScript -- the stuff that'll probably trip you up at some point.

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

### In-class Demo 1: Types!

TODO: @daniel

- Pre-assessment solutions, but walk them through it and use types
