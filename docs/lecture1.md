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

TODO

## Ugly Pieces of JavaScript

### Truthy, falsy

TODO

### Global variables

TODO

### Type coersion

TODO
