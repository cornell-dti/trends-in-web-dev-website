---
id: lecture1
title: Lecture 1 - ES6 Basics
---

[Lecture Slides](https://docs.google.com/presentation/d/1y_7EWaEBllqTSQOZw_43m02-wh49DatEh0OVSDJkf4A/edit?usp=sharing)

## ~~`var`~~, `let`, and `const`

Before we have ES6, there are only one way to declare variable `var`. (Well,
there are actually another way, but it's very bad and you should never use it.)

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
const myFunction = function(x) {
  return x + 1;
};
```

Now we have this shorthand:

```javascript
const myFunction = x => {
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
const myFunction = x => x + 1;
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

`array.every(function)` runs `function` on each element of `array` and returns
whether any element of the array satisfies the function requirements.

Example: `[1, 4, 9].any(x => x == 1)` will return true. However,
`[1, 4, 9].any(x => x == 2)` will return false.

### `reduce`

`array.reduce(function)` runs `function` on each element of `array` and returns
a single value.

Example: `[1, 4, 9].reduce((sum, curr) => sum + curr)` will return 14.

## Spreading and Destructuring

Say we have a function:

```javascript
const add3 = (a, b, c) => a + b + c;
```

Now if we had an object:

```javascript
const add3Object = {
  a: 3,
  b: 4,
  c: 7
};
```

If we wanted to add each of the three values in `add3Object` using `add3`
we can simply use the **spread operator** `...` to _destructure_ each of the
keys in the object to map to the variables.

```javascript
add3Object(...add3Object);
```

However, this only works if the parameter names match the keys in the object.
(Note: it is possible to have more keys and values, but this is not a good
practice)

This also works for lists:

```javascript
const arr = [1, 2, 3];

add3Object(...arr); // output 6
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

const fib2 = __ =>
  __ === zero || __ === one ? __ : fib2(__ - one) + fib2(__ - two);
```

This is the Fibonacci sequence implemented using type coercion.

### Why Linters Are Necessary

You have just learned some darkest aspects of JavaScript. We must use it because
it's the only language that can be understood by browser. To mitigrate the
problem, people wrote _linters_ that try to automatically find these problems.
They are well integrated with editors so you can directly see the warnings. If
you follow the 'Setup your editor' section, you are good to go. You will see
warnings when you accidentally write some wrong code.
