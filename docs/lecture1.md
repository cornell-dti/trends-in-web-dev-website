---
id: lecture1
title: Lecture 1 - ES6 Basics
---

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
`const`.

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
myFunc(x) {
  return x+1;
}
```
or 

```javascript
myFunc = function(x) {
  return x+1;
}
```

Now we have this shorthand:

```javascript
myFunc = (x) => {
  return x+1;
}
```

The syntax is

```javascript
[function name] = ([function params]) => {
  [function body]
}

```

For this simple function, we have even shorter shorthand:

```javascript
myFunc = x => x+1;
```

This shorthand works if the function body is just one line that will be
immediately returned. In this case, we are simply incrementing `x` and 
returning the result.

Anonymous Arrow Functions: just don't include `[function name]`

```javascript
([function params]) => {
  [function body]
}
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

TODO

## Ugly Pieces of JavaScript

### Truthy, falsy

TODO

### Global variables

TODO

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

```
const zero = +[]; // + coerce [] into 0
const one = +!![]; // ! coerce [] into false, got inverted, then coerce to 1
const two = +!![] + +!![]; // 2 = 1 + 1

const fib2 = 
__ => (__ === zero || __ === one ? __ : fib2(__ - one) + fib2(__ - two));

```
This is the Fibonacci sequence implemented using type coercion. 