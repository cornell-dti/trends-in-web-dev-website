---
id: lecture4
title: Lecture 4
---

Homework: Assignment 2: CSS and Complex React, is due 3/31 by 11:59pm

Slides: [Here](https://docs.google.com/presentation/d/1JxQXUwKh0oa_nkLB9rkQJ9HVxO0-hgwJ1mxQ54h0c-Q/edit?usp=sharing)

Explore more:

- [useSWR](https://swr.vercel.app/), a custom React hook for data fetching developed by Vercel, the team behind Next.js

# Today's Lecture 3/13

By the end of today, you should be able to:

- Understand how to build complex React apps using multiple components and hooks
- Understand concepts like composition and props

## Introducing Complexity into our React Apps

## Component #1: ContactCard

```tsx title="ContactCard.tsx"
type Props = { readonly name: string; readonly githubLink: string };

const ContactCard = ({ name, githubLink }: Props) => (
  <div>
    You can reach {name} at
    <a href={githubLink}>{githubLink}</a>
  </div>
);
```

## What! What's going on??

### Functional Component

Recall: the simplest component in React is a functional component. A functional component
does not have any internal state. You can think of it as a function whose inputs
are some JavaScript object and the output is some HTML code that is generated
from the data.

In React, we call the JavaScript object `props`, so you can see code like this:

```tsx title="ContactCard.tsx"
type Props = { readonly name: string; readonly githubLink: string };

const ContactCard = (props: Props) => (
  <div>
    You can reach {props.name} at
    <a href={props.githubLink}>{props.githubLink}</a>
  </div>
);
```

Just calling the input `props` is not good for documentation purpose, so we
commonly use object destructuring to make it more explicit:

```tsx title="ContactCard.tsx"
type Props = { readonly name: string; readonly githubLink: string };

const ContactCard = ({ name, githubLink }: Props) => (
  <div>
    You can reach {name} at
    <a href={githubLink}>{githubLink}</a>
  </div>
);
```

#### Modules

In order for this component to be reused in another file, we need to export it:

```tsx title="ContactCard.tsx"
type Props = { readonly name: string; readonly githubLink: string };

const ContactCard = ({ name, githubLink }: Props) => (
  <div>
    You can reach {name} at
    <a href={githubLink}>{githubLink}</a>
  </div>
);

export default ContactCard;
```

This is because React is organized around the concept of **modules**. A module is
a collection of components that are related to each other. In our case, we have
a module called `ContactCard` that contains a single component called
`ContactCard`. In order to use this component in another file, we need to
export it (make it publicly available to other modules).

## Stateful Component

Imagine you are writing a contacts app and you need to implement an editor.

Unlike the previous components, you need to maintain state. In React, you will
need `hooks`. Hooks are functions that use state and lifecycle methods inside
functional components. The `useState` hook is the hook for maintaining state.
Note that the general naming convention of a hook is `useXXXX`.

```tsx
import { useState, ChangeEvent } from 'react';

const NewContact = () => {
  // name is the variable for the state, setName is the function you can use
  // to change the state.
  const [name, setName] = useState('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // To extract the value from input box, use the following line.
    const n = event.currentTarget.value;
    setName(n);
  };
  return (
    <div>
      <p>Name: {name}</p>
      <input
        type="text"
        placeholder="enter the name here"
        value={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default NewContact;
```

`useState` returns a length-2 array that includes the following elements (in order):

1. a state variable that is always synchronized (in a consistent state everywhere any time)
2. a function that can be used to update the state variable.

**Note that the names of the two should always be in the form x, setX.**

```tsx
const [prosAndCons, setProsAndCons] = useState([]);
```

Note that the `useState` statement above uses _array destructuring_ syntax.

## Common use-case one: Rendering lists

You may want to render a list of `YourAwesomeComponent`. Here are some examples
to show how you can achieve this in different ways.

```tsx
// Suppose you have a ContactCard component defined there.
import ContactCard from './ContactCard';

type Contact = { name: string; githubLink: string };

const data: Contact[] = [
  { name: 'Jason', githubLink: 'www.github.com/guessJason' },
  { name: 'Peter', githubLink: 'www.github.com/peterIsCool' },
  { name: 'Enoch', githubLink: 'www.github.com/eno' },
];

const ListBySimpleMap = () => (
  <div>
    {data.map((contact: Contact) => (
      <ContactCard
        key={contact.name}
        name={contact.name}
        githubLink={contact.githubLink}
      />
    ))}
  </div>
);

const ListBySimpleMapWithObjectDestructing = () => (
  <div>
    {data.map(({ name, githubLink }) => (
      <ContactCard key={name} name={name} githubLink={githubLink} />
    ))}
  </div>
);

const ListBySimpleMapWithSpread = () => (
  <div>
    {data.map((contact: Contact) => (
      <ContactCard key={contact.name} {...contact} />
    ))}
  </div>
);
```

Note that we always need a `key` prop. Without this, React will give you
warnings in the console. React needs a unique `key` for each item in the list to
help it avoid rerendering everything when only one item in the list changes.
In this particular example, you should only use `name` as the key if you know
that the property `name` is unique. However, if there are multiple objects with
the same name in the list that are used as a key, it would confuse React.

## Common use-case two: Conditional rendering

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

First we can use the **ternary operator** (remember this?):

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

React supports the use of **`&&`** operator (remember this?):

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

## Modifying State

We can use the `useEffect` hook. Using `useEffect` + `setStateVar` (state variable setter) allows state variables to “hook into” the React component and “ride along” other changes that occur. 🤠🏇 Here is how!

`useEffect(effect_function)` => `useEffect(() => {})`
Whenever the component updates/re-renders, useEffect runs the argument (a function).

`useEffect(() => {setCount(count + 1)})`
The function can have any arbitrary logic/function calls… such as the `setCount` state variable update function! But `setCount` also triggers another component update so…

### Optimizing `useEffect`

`useEffect(function, filters)`
`useEffect` triggers the function at every component update, but you can restrict this to occur only when the variables in the `filters` array update. This makes your React component more optimized. You could say that these variables are a _dependency_ of the `useEffect` statement. Example below:

```tsx
useEffect(function, [prop1, observable])
```

As a fun fact, it is possible to enter an infinite loop if the dependencies are state variables that are also set inside the effect. Don't do this!

### Aside: Lifecycle Cleanup

A good use of useEffect is to hook into file streams, WebSockets, Firebase hooks, or some other Observable-like API in order to make your component _reactive_ to changes in data. (when the observed data/value/file stream updates, the React component should update.) In order to use an API for this purpose, it is often necessary to open up an initial connection or subscription. It is _good manners_ to _cleanup_ by closing or unsubscribing. In a `useEffect` statement, the cleanup code is stored in a function that is returned by the effect (function).

```tsx
useEffect(() => {
  return () => {
    cleanup();
  };
});
```

Example usage below:

```tsx
useEffect(() => {
  return () => {
    ObservableAPI.unsubscribe()
  });
}, [valueFromObservableApi]);

useEffect(() => {
  return () => {
    dataStream.close()
  });
}, [dataStreamContents]);
```

### What we have so far

```tsx
import { useState, useEffect } from 'react';

type Props = { readonly name: string; readonly githubLink: string };

const ContactCard = ({ name, githubLink }: Props) => (
  <div>
    You can reach {name} at
    <a href={githubLink}>{githubLink}</a>
  </div>
);

// -----

const NewContact = () => {
  // name is the variable for the state, setName is the function you can use
  // to change the state.
  const [name, setName] = useState('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // To extract the value from input box, use the following line.
    const n = event.currentTarget.value;
    setName(n);
  };
  return (
    <div>
      <p>Name: {name}</p>
      <input
        type="text"
        placeholder="enter the name here"
        value={name}
        onChange={handleChange}
      />
    </div>
  );
};

// -----

type Contact = { name: string; githubLink: string };

const data: Contact[] = [
  { name: 'Jason', githubLink: 'www.github.com/guessJason' },
  { name: 'Peter', githubLink: 'www.github.com/peterIsCool' },
  { name: 'Enoch', githubLink: 'www.github.com/eno' },
];

const ContactList = () => (
  <div>
    {data.map((contact: Contact) => (
      <ContactCard
        key={contact.name}
        name={contact.name}
        githubLink={contact.githubLink}
      />
    ))}
  </div>
);

// -----

const App = () => {
  const [showNewContactDialog, setShowNewContactDialog] = useState(false);
  return (
    <div>
      <button onClick={() => setShowNewContactDialog(!showNewContactDialog)}>
        {showNewContactDialog ? 'Hide' : 'Show'}
      </button>
      {showNewContactDialog && <NewContact />}
      <ContactList />
    </div>
  );
};
```

#### Note the concepts of Composition and Inheritance we promised we'd come back to last lecture!

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

## Now, let's add more functionality!

There's a few hooks we haven't yet covered, which add additional functionality to React.

### useRef

`useRef` allows you to create a "ref" to an element or a variable in your component. This can be useful for accessing the DOM or for keeping track of a value that should persist across renders.

Here's an example of using `useRef` to create a ref to an input element:

```jsx
import { useRef } from 'react';

function InputExample() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current!.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
```

In this example, we're creating a ref to an `<input>` element using useRef. We pass null as the initial value, which is the default. Then we're passing the ref to the `<input>` element using the ref attribute. We can access the input element using inputRef.current and call focus() on it.

### useCallback

`useCallback` allows you to memoize a callback function, so that it will only be recreated if one of its dependencies has changed. This can be useful for preventing unnecessary re-renders in child components.

Here's an example of using `useCallback` to memoize a callback function:

```jsx
import { useCallback } from 'react';

function Parent({ data }) {
  const handleClick = useCallback(
    (index) => {
      console.log(data[index]);
    },
    [data]
  );

  return <Child onClick={handleClick} />;
}

function Child({ onClick }) {
  const items = [1, 2, 3];

  return (
    <div>
      {items.map((item, index) => (
        <button key={item} onClick={() => onClick(index)}>
          {item}
        </button>
      ))}
    </div>
  );
}
```

In this example, we're using `useCallback` to create a memoized version of the `handleClick` function, which takes an `index` argument and logs the corresponding data from the `data` prop. The second argument to `useCallback` is an array of dependencies, in this case, just `data`. We're passing the memoized `handleClick` function as a prop to the `Child` component. When the buttons in the `Child` component are clicked, the memoized `handleClick` function is called with the corresponding index, and it logs the corresponding data from the `data` prop, without re-creating the function and re-rendering the child component.

### useMemo

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

### useContext

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

### Using Hooks!

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

## In-class Demo 1: Complete Contact info interface

Using useRef, useMemo, useCallback, useState, and useEffect, as well a custom hook or two,
and multiple levels of composition,
we'll create a complete and searchable contact book interface!

TODO: @daniel
