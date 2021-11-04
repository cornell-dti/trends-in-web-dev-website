---
id: lecture5
title: Lecture 5
---

[Lecture Slides](https://docs.google.com/presentation/d/1LKOlGi1fo_6BewlhKCMEH_rsUZyutd4mfRJeWsSq1Uc/edit?usp=sharing)

[Assignment 3](/docs/assignment3) (due 10/28 6:29 PM on CMS)

## Creating a React project

When working with React, there are a bunch of libraries and tools that we want
to use to make our lives easier. We *could* set it up manually, but thankfully
CRA (create-react-app) does a lot of it for us!

We can set up a project with CRA with the following command:

```bash
yarn create react-app [APP_NAME] --template typescript
```

This will create a folder called `[APP_NAME]` (you can change it to whatever you
want) which will contain a TypeScript React project with everything set up!

You'll be able to run commands like `yarn start` inside that folder to do things
like serve your website locally.

The entry point of the program is (as usual) `src/index.tsx` and the main React
component by convention is found in `src/App.tsx`.

## Your First Component

```tsx title="ContactCard.tsx"
type Props = { readonly name: string; readonly githubLink: string };

const ContactCard = ({ name, githubLink }: Props) => (
  <div>
    You can reach {name} at
    <a href={githubLink}>{githubLink}</a>
  </div>
);
```

## Wat! What's going on

### Functional Component

The simplest component in React is a functional component. A functional component
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
usually use object destructuring to make it more explicit:

```tsx title="ContactCard.tsx"
type Props = { readonly name: string; readonly githubLink: string };

const ContactCard = ({ name, githubLink }: Props) => (
  <div>
    You can reach {name} at
    <a href={githubLink}>{githubLink}</a>
  </div>
);
```

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

React does not care about the arrow function syntax, so you can also write
it in function definition syntax:

```tsx title="ContactCard.tsx"
type Props = { readonly name: string; readonly githubLink: string };

function ContactCard({ name, githubLink }: Props) {
  return (
    <div>
      You can reach {name} at
      <a href={githubLink}>{githubLink}</a>
    </div>
  );
}

export default ContactCard;
```

For this course, we prefer that you use arrow function syntax.

### `App.tsx`

Convention has `App.tsx` as the main component of your React app. To add an
instance of `ContactCard` to your app, you can add it to `App.tsx`.

```tsx title="App.tsx"
const link = 'https://github.com/cornell-dti';

const App = () => {
  return (
    <div className="App">
      <ContactCard name="Cornell DTI" githubLink={link} />
    </div>
  );
}
```

### `index.tsx`

```tsx title="index.tsx"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

In a React app, `index.tsx` is usually the entry point. You usually won't need
to touch this file too much.

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

## Rendering lists

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
