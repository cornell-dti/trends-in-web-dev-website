---
id: lecture1
title: Lecture 1 - ES6 Basics
---

## `~~var~~`, `let`, `const`

TODO

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

### Type coersion

TODO
