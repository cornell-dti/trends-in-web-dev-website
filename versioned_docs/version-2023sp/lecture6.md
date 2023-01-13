---
id: lecture6
title: Lecture 6
---

[Lecture Slides](https://docs.google.com/presentation/d/1gS0nwkjPdHZpO2uI6FdMb3jpyhgwn6c_SV4Juf8uBoQ/edit?usp=sharing)

[Assignment 3](assignment3) (due Friday 4/1 11:59 PM on CMS)

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

### Async/Await

We'll cover this in the future but `async`/`await` is an alternative (sometimes
preferred) syntax for `.then()` and `.catch()` calls.

By adding the `async` keyword to a function, we make it an _asynchronous_
function. Within `async` functions, we can use the `await` keyword to wait for a
Promise to return before continuing on to the next statement within the
function.

Here is an example of doing equivalent things with either syntax:

```typescript
const thenCatchExample = () => {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => res.json())
    .then((d) => setData(d));
};

const asyncAwaitExample = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const d = await res.json();
  setData(d);
};
```

In order to handle rejected Promises using async/await, just wrap all your await
statements in a [try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block!

## Live Demo Material

The demo only covers the latter half of the lecture (data fetching). Feel free
to play around with hooks on your own time!

You can get the starter code for the live demo by running:
`yarn create next-app --typescript --example "https://github.com/cornell-dti/trends-sp22-starters/tree/main/lec6-demo" YOUR_DIR_NAME`

(Replace YOUR_DIR_NAME with whatever you want to name your directory!)
