---
id: lecture5
title: Lecture 5
---

[Lecture Slides](https://docs.google.com/presentation/d/1COfNYNSFcZxmYtcV0pBSJSGq6jIFxPHK/edit?usp=sharing&ouid=117514670142351828517&rtpof=true&sd=true)

[Assignment 3](/docs/2022fa/assignment3) (due Monday 1/7 7:30pm PM on CMS)

## Conditional Rendering

Sometimes we only want things to render when a certain condition is met. For
example, only display text when we meet a certain condition. React has
conditional rendering to make this very simple.

```tsx title="PrelimTime.tsx"
import React from 'react';

export default ({ prelimToday }: { readonly prelimToday: boolean }) => {
  if (prelimToday) {
    return <p>I have a prelim today.</p>;
  } else {
    return <p>I don't have a prelim today.</p>;
  }
};
```

In this example, we have a functional component `PrelimTime` that takes in a
prop `prelimToday`. `prelimToday` is a boolean holding whether we have a prelim
today or not. We want the component to display "I have a prelim today." if
`prelimToday` is `true` and "I don't have a prelim today." if it is `false`.

Traditionally, we would use the `if` statement for this behavior (as shown
above). We can also use conditional rendering to make writing this functionality
more convenient.

First we can use the **ternary operator**:

```tsx title="PrelimTime.tsx"
import React from 'react';

export default ({ prelimToday }: { readonly prelimToday: boolean }) => (
  prelimToday
    ? <p>I have a prelim today.</p>
    : <p>I don't have a prelim today.</p>;
);
```

The ternary operator is also very common in other languages as well such as
Java or Python. The basic syntax is as follows:

```ts
[boolean expression] ? [true_result] : [false_result]
```

Before the `?` you have your expression producing `true` or `false`. The part
after the `?` but before the `:` is the result/functionality you want if the
boolean expression evaluates to `true`. The part after the `:` is what you want
to happen if the expression is `false`.

Connecting with the `PrelimTime` example, my boolean expression was just the
prop `prelimToday`, although in your code it can be a more complex boolean
expression. If `prelimToday` is true, I display "I have a prelim today." If
`prelimToday` is false, I display "I have a prelim today."

Notice though, how the only thing changing in this text is adding the word
"don't" if `prelimToday` is `false`. So only if `prelimToday` is `false`, we
want to add don't.

React supports the use of **`&&`** operator:

```tsx title="PrelimTime.tsx"
import React from 'react';

export default ({ prelimToday }: { readonly prelimToday: boolean }) => (
  <p>I {!prelimToday && "don't"} have a prelim today.</p>
);
```

Here, we display the text "I have a prelim today.". However, in the curly
braces, if `prelimToday` is `false` then the word "don't" will be rendered.
Conditional rendering with `&&` is useful when you only have expected behavior
for one branch of the conditional. In this case, I only had desired behavior if
`prelimToday` was `false`.

As you have seen, React's conditional rendering made modifying render behavior
based on conditions a lot easier. In this small example, we went from five lines
of code in the component to just one!

## Composition vs. Inheritance

Composition and inheritance are two programming techniques for defining how classes relate to objects. (Think of classes as the blueprint for a house and objects the actual houses created from that blueprint)

### Composition

**Composition** defines a class as the sum of its individual parts. This is a "has-a" relationship (e.g. a car has a steering wheel, has a window, etc). In Java (and other object oriented languages), these components are represented as _instance_ variables.

### Inheritance

**Inheritance** derives one class from another. If class A is the parent of class B and C, B and C inherit the properties/functions of A. This is a "is-a" relationship (e.g. car is a vehicle, circle is a shape.)

### **React uses Composition**

_“React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.”_
-- [React Docs](https://reactjs.org/docs/2021fa/composition-vs-inheritance.html)

### Containment

Components may not know their children ahead of time.

Children are the components you put within another component:

```jsx
<ComponentA>{/* anything here is a child of Component A */}</ComponentA>
```

Use the `children` prop to pass in children components.

```tsx title="Container.tsx"
import React, { ReactNode } from 'react';
type Props = { readonly children: ReactNode };
const Container = (props: Props) => (
  <div className="Border">{props.children}</div>
);
```

```tsx
const App = () => (
  <div className="App">
    <Container>
      <p>Hello!</p>
      <p>Bye!</p>
    </Container>
  </div>
);
```

`props.children` will have the paragraph elements.

We didn't actually get to this live demo, adapted from [this tutorial](https://reactjs.org/docs/2021fa/composition-vs-inheritance.html) in the React docs, during lecture but it is very simple if you want to try it out yourself. We also show how to import styles.

```tsx title="Container.tsx"
import React, { ReactNode } from 'react';
import './Container.css'; // this is how we import styles

type Props = { readonly children: ReactNode };

export default (props: Props) => <div className="Border">{props.children}</div>;
```

```css title="Container.css"
.Border {
  border: 4px solid black;
  background-color: azure;
}
```

Less common but you also may want multiple "holes" in your component (for example, a left and right child):

```tsx title="SplintPane.tsx"
import React, { ReactNode } from 'react';
import './SplitPane.css';

type Props = { readonly left: ReactNode; readonly right: ReactNode };

export default (props: Props) => (
  <div>
    <div className="LeftPane">{props.left}</div>
    <div className="RightPane">{props.right}</div>
  </div>
);
```

```css title="SplitPane.css"
/* these colors are ugly I know */
.LeftPane {
  float: left;
  width: 50%;
  background-color: red;
}

.RightPane {
  float: right;
  width: 50%;
  background-color: aquamarine;
}
```

```tsx
import React from 'react';
import SplitPane from './SplitPane';
import Container from './Container';

export default () => {
  return (
    <div className="App">
      <Container>
        <p>Hello, world!</p>
      </Container>
      <SplitPane
        left={<div>I'm on the left!</div>}
        right={<div>I'm on the right!</div>}
      />
    </div>
  );
};
```

## Lifting State Up

This section was a (old) live demo, adapted from [this tutorial](https://reactjs.org/docs/2021fa/lifting-state-up.html) in the React docs.

```tsx title="Calculator.tsx"
import { useState } from 'react';
import TemperatureInput from './TemperatureInput';

type Scale = 'celsius' | 'fahrenheit';

const Calculator = () => {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState<Scale>('celsius');

  const onCelsiusChange = (t: string) => {
    setTemperature(t);
    setScale('celsius');
  };

  const onFahrenheitChange = (t: string) => {
    setTemperature(t);
    setScale('fahrenheit');
  };

  const fahrenheitToCelsius = (t: number) => {
    return ((t - 32) * 5) / 9;
  };

  const celsiusToFahrenheit = (t: number) => {
    return (t * 9) / 5 + 32;
  };

  const tryConvert = (targetScale: Scale) => {
    const temp = parseFloat(temperature);
    if (Number.isNaN(temp)) {
      return '';
    }
    const res = getAppropriateTemperature(temp, targetScale);
    const trimmed = Math.round(res * 1000) / 1000;
    return trimmed.toString();
  };

  const getAppropriateTemperature = (tempNum: number, targetScale: Scale) => {
    if (targetScale === scale) {
      return tempNum;
    } else {
      if (targetScale === 'celsius') {
        return fahrenheitToCelsius(tempNum);
      } else {
        return celsiusToFahrenheit(tempNum);
      }
    }
  };

  return (
    <div>
      <TemperatureInput
        scale="celsius"
        temperature={tryConvert('celsius')}
        onTemperatureChange={onCelsiusChange}
      />
      <TemperatureInput
        scale="fahrenheit"
        temperature={tryConvert('fahrenheit')}
        onTemperatureChange={onFahrenheitChange}
      />
    </div>
  );
};

export type { Scale };
export default Calculator;
```

```tsx title="TemperatureInput.tsx"
import { Scale } from './Calculator';

type Props = {
  readonly scale: Scale;
  readonly temperature: string;
  readonly onTemperatureChange: (t: string) => void;
};

const TemperatureInput = ({
  scale,
  temperature,
  onTemperatureChange,
}: Props) => {
  return (
    <div>
      <legend>Enter temperature in {scale}</legend>
      <input
        value={temperature}
        onChange={(event) => onTemperatureChange(event.target.value)}
      />
    </div>
  );
};

export default TemperatureInput;
```

## More On Hooks

A hook in React is a JS/TS **function** for "hooking" into functionality in
React _functional_ components.

We've worked with `useState` and `useEffect` which introduces state and side
effects to your React component, respectively.

### Hook Rules

#### Naming

Hooks have the following naming scheme: `useXXXX` (camelCase). It is
**imperative** that you name your hooks using this scheme - the function name is
the only way to identify the function as a hook to other developers as well as
your IDE.

It is also a good idea to avoid prefixing regular variable names with `use`, to
avoid confusion.

#### Top Level

Hooks (both built-in and custom hooks) can only be called within React
components or other React hooks. More specifically, they should only be called
in the **top level** of such functions.

The reason for this is that you want hooks to be called in the same order, the
same amount of times each time the function runs. This restriction is necessary
for React to optimize the performance of hooks.

This means that you should not call hooks in:

- conditionals
- loops
- nested functions

Here are some examples of what **not** to do (and would trigger linter errors):

```typescript
const RandomComponent = () => {
  const [foo, setFoo] = useState(0); // this is fine
  if (foo < 100) {
    const [bar, setBar] = useState(0); // this is NOT fine
  }
};
```

```typescript
const RandomComponent = () => {
  const [foo, setFoo] = useState(0); // this is fine
  for (let i = 0; i < foo; i++) {
    const [bar, setBar] = useState(0); // this is NOT fine
  }
};
```

```typescript
const RandomComponent = () => {
  const doHookStuff = () => {
    const [bar, setBar] = useState(0); // this is NOT fine
  };
  doHookStuff();
};
```

It's a good practice to call all your hooks line-by-line at the top of your
function.

### Custom Hooks

There are many hooks that React gives us out of the box, but we can put them
together to make our own hooks!

This is useful to abstract out common functionality, the same way programmers do
with regular functions.

If you ever notice that you are doing repetitive tasks with hooks across
multiple React components, it might be a good idea to put all that logic into
your own hook.

#### Syntax for Custom Hook

Just write a function using hooks! Make sure your function is named according to
the `useXXXX` scheme.

There is no function signature that you must follow in order for it to be hook -
it can have whatever arguments and return type that you choose.

Learn more about custom hooks [here](https://reactjs.org/docs/hooks-custom.html)

### `useMemo`

`useMemo` is a useful hook that can help you improve the performance of your
component by reducing the amount of unnecessary calculations.

Syntax: `const result = useMemo(func, deps)`

`func` is an "expensive" calculation that we want to memoize

`deps` is the list of dependencies (just like in `useEffect`)

In essence, the hook will call `func` initially and put whatever it returns into
`result`. Then ONLY when something in `deps` changes does `func` gets called
again - otherwise `result` will be the **memoized** return value. Whenever such
a refresh occurs, the new return value of `func` will overwrite the old memo.

Here is an example of where you might want to `useMemo`:

```typescript
const expensiveFunction = (n: number) => {
  /** do something that takes a lot of cpu */
};

const RandomComponent = () => {
  const [foo, setFoo] = useState(0);
  const [bar, setBar] = useState(0);

  // This runs expensiveFunction when foo changes but bar doesn't
  const baz = expensiveFunction(bar);

  // This runs expensiveFunction ONLY when bar changes
  const baz = useMemo(() => expensiveFunction(bar), [bar]);
};
```

**IMPORTANT PITFALL**: You may be tempted to put `useMemo` everywhere; however,
this is not a good idea. Every hook has some performance overhead, so adding
`useMemo` in places where you don't need it can actually **worsen** performance!

You can _profile_ your code with and without the `useMemo` call to judge whether
it's a good idea. You can profile the performance of your website using the
Developer Tools found in most browsers.

### `useContext`

We've covered passing down props in previous React lectures. However, that's
pretty annoying if _every_ component within a hierarchy needs that prop.

Is there a better way then manually passing down that prop to every component
that needs it?

Yes!

The `useContext` hook allows you to wrap an entire component **tree** with a
"context" that every component in that tree can access!

A great use case for this hook is for theme data - each component needs to know
which theme is selected in order to display the correct colors, for example.

Here is the example pulled from the [official React docs](https://reactjs.org/docs/hooks-reference.html#usecontext)

```javascript
const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

const ThemeContext = React.createContext(themes.light);

const App = () => {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
};

const Toolbar = () => {
  return (
    <div>
      <ThemedButton />
    </div>
  );
};

const ThemedButton = () => {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
};
```

We won't be requiring use of custom hooks, `useMemo`, or `useContext` in our
assignments, so this is just for fun!

## Data Fetching

Data fetching is **getting information (data) from an outside source (e.g. REST API)**

In this lecture we'll be discussing how to fetch data through traditional HTTP
requests (so far the most popular way), but keep in mind that there are other
ways to fetch data out there, which we will cover later.

### How do we fetch (in React)?

So how do we fetch data with our React frontend?

Two important things to note:

1. Modern browsers have a nifty little JavaScript function called `fetch` that
   you can use to call API endpoints. Libraries such as `axios` provide similar
   functionality. There are also libraries like `swr` that provide easy ways to
   re-fetch resources automatically.

2. The `useEffect` React hook allows you to trigger side effects, such as
   fetching data!

We want to keep track of our data in our component state, and use hooks like
`useEffect` to `fetch` the data and update the state accordingly!

### Fetching Example

Consider this snippet of code:

```tsx
// This corresponds to the type of data you expect to get back in your response
type DataType = readonly string[];

const App = () => {
  const [data, setData] = useState<DataType>([]);

  useEffect(() => {
    fetch(`${API}`)
      .then((res) => res.json())
      .then((d) => setData(d));
  });
  // ... other methods, return, etc
};
```

Here are the important parts:

- We have `data` in our component state. Later, we call `setData` on what the
  backend sends to us.
- We declare a type definition for the `useState` call so that TS knows the type
  of data we're working with. (It can't infer type from an empty array!)
- The `useEffect` hook is used to subscribe to new data.
- `fetch(...)` is called on an API link, followed by `.then(...)` calls that
  format the response into json and then `setData` to the response. The
  `.then()` calls exist because `fetch()` returns a `Promise` (this is explained
  below)

Let's take a deeper look at `fetch`!

### `fetch`

"stop trying to make fetch happen 👧"

`fetch(resource, [init])` is a native browser function for making web requests.

Its params are:

- `resource`: URL of the site you are fetching from
- `init`: optional object containing any custom settings you want to apply to
  the request.

```typescript
    // your init object might look like this
    {
      // HTTP request method
       method: 'GET', // | 'POST' | 'PUT' | 'DELETE' | etc
       // Any request headers you want to add
       headers: {
         'content-type': 'application/json'
       },
       // Request body (remember to stringify!)
       body: JSON.stringify(requestBody)
       // ... other settings
    }
```

- For more on the init object, refer to
  [this link](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)!

**IMPORTANT: fetch() returns a PROMISE!**

### Promises

Operations like web requests don't complete instantly! You want to do other stuff
while the operation is still going on.

Promises represent the **eventual** completion (or failure) of an async operation.

Promises are in one of three possible states:

- `pending`: initial state; neither fulfilled nor rejected
- `fulfilled`: operation completed successfully
- `rejected`: operation failed

#### `.then()`

`.then()` is a function on Promises that return a promise.

```typescript
p.then(onFulfilled[, onRejected])
```

Let's break this down!

- `p` is a Promise.
- `onFulfilled` is the callback function that is run when `p` is fulfilled
- `onRejected` (OPTIONAL) is the callback for when `p` is rejected

```typescript
p.then(
  (value) => {
    // fulfillment
  },
  (reason) => {
    // rejection
  }
);
```

Let's talk about types! `p` in this case might be `fetch()`, which returns the
type `Promise<Response>`. If so, then `value` would have the type `Response`.
Then, if the fulfillment function (which takes in `value`) returns type
`string`, then the entire expression would be type `Promise<String>`.

If you've taken CS 3110 or done some functional programming outside of this
class/category theory, this might make you think of
Monads/Applicatives/Functors. The specified behavior for `Promise`s in JS/TS
don't exactly follow the laws of what was just listed, but for learning purposes
it may be helpful to roughly compare the `then` function to `fmap` or `bind`.

If you're interested, take a look at this snippet and notice how the types
behave:

```typescript
// promise: Promise<Response>
const promise = fetch('something');

// kindaFunctor: (res: Response) => number
const kindaFunctor = (res: Response) => res.status;

// kindaMonad: (res: Response) => Promise<string>
const kindaMonad = (res: Response) => res.text();

// newPromise1: Promise<number>
const newPromise1 = promise.then(kindaFunctor);

// newPromise2: Promise<string>
const newPromise2 = promise.then(kindaMonad);
```

#### `.catch()`

`.catch()` is a function on Promises that catches a rejection.

```typescript
p.catch(onRejected);
```

For example, you might want to `console.log` errors:

```typescript
fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then(...)
  .catch((err) => console.log(err));
```

Note that `onRejected` takes a parameter of type `any`, since we don't know the
type of the error we will get.

#### Using `.then()` with `fetch()`

`fetch()` returns a `Promise` that resolves to a `Response` object.

Consider this snippet, similar to one shown above:

```typescript
fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then((res) => res.json())
  .then((d) => setData(d))
  .catch((err) => console.log(err));
```

Here we are getting the response from an endpoint **and then** calling `.json()`
on the response **and then** calling `setData` on the result of `json()`.

If a promise gets rejected anywhere along this chain, we will log the error in
our console.
