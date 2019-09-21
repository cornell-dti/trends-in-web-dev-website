---
id: lecture1
title: Lecture 1 - ES6 Basics
---

## `~~var~~`, `let`, `const`

TODO

## Arrow Functions

Before ES6 we wrote functions as such:

```javascript
function myFunc(x) {
  return x+1;
}
```
or 

```javascript
let myFunc = function(x) {
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

TODO

### `filter`

TODO

### `forEach`

TODO

### `every`

TODO

### `any`

TODO

### `some`

TODO

### `reduce`

TODO

## Spreading and Destructuring

Say we have a function:

```javascript
let add3 = (a, b, c) => a+b+c;
```

Now if we had an object: 

```javascript
add3Object = {
  a: 3,
  b: 4,
  c: 7
}
```

If we wanted to add each of the three values in `add3Object` using `add3`
we can simply use the **spread operator** `...` to *destructure* each of the 
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
*destructuring assignment*.

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

TODO

### Global variables

TODO

### Type coersion

TODO
