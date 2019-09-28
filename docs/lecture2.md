---
id: lecture2
title: Lecture 2 - Frontend 1
---

## Before the Lecture

```bash
yarn create react-app lecture2
cd lecture2
yarn start
```

## Your First Component

```jsx
// MyComponent.jsx
import React from 'react';

export default ({ name, githubLink }) => (
  <div>
    <div>My name is {name}.</div>
    <a href={githubLink}>My GitHub</a>
  </div>
);
```

```jsx
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent';

const link = 'https://github.com/cornell-dti';
ReactDOM.render(
  <MyComponent name="Cornell DTI" githubLink={link} />,
  document.getElementById('root')
);
```

## Wat! What's going on

### Functional Component

The simplest component in React is functional component. A functional component
does not have any internal state. You can think of it as a function whose inputs
are some JavaScript object and the output is some HTML code that is generated
from the data.

In React, we call the JavaScript object `props`, so you can see code like this:

```jsx
import React from 'react';

function MyFirstComponent(props) {
  return (
    <div>
      <div>My name is {props.name}.</div>
      <a href={props.githubLink}>My GitHub</a>
    </div>
  );
}
```

Just calling the input `props` is not good for documentation purpose, so we
usually use the object destruct syntax to make it more explicit:

```jsx
import React from 'react';

// Replace props with { name, githubLink }, so we can directly use `name` and
// `githubLink` below.
function MyFirstComponent({ name, githubLink }) {
  return (
    <div>
      <div>My name is {name}.</div>
      <a href={githubLink}>My GitHub</a>
    </div>
  );
}
```

In order for this component to be reused in another file, we need to export it:

```jsx
import React from 'react';

// export default added.
export default function MyFirstComponent({ name, githubLink }) {
  return (
    <div>
      <div>My name is {name}.</div>
      <a href={githubLink}>My GitHub</a>
    </div>
  );
}
```

React does not care about the function definition syntax, so you can also write
it in arrow function syntax:

```jsx
import React from 'react';

export default ({ name, githubLink }) => (
  <div>
    <div>My name is {name}.</div>
    <a href={githubLink}>My GitHub</a>
  </div>
);
```

You can choose whatever style you like for the purpose of this course.

### `index.js`

In a React app, `index.js` is usually the entry point. In the code above, it
renders your component into the DOM element that has id `root`.

## Stateful Component

Imagine you are writing a message board app and you need to implement an editor.

Unlike functional components, you need to maintain state. In React, you will
need a class component:

```jsx
import React, { Component } from 'react';

export default class SimpleEditor extends Component {
  // Define your initial state here.
  state = { name: '' };

  changeName = event => {
    // To extract the value from input box, use the following line.
    const name = event.currentTarget.value;
    this.setState({ name });
    // The above line is a short form of this.setState({ name: name });
  };

  hello = ({ name }) => <p>Hello, {name}</p>;

  render() {
    const { name } = this.state;
    return (
      <div>
        <div>{name !== '' ? this.hello({ name }) : ''}</div>
        <input
          className={styles.InputBox}
          type="text"
          placeholder="Type your name..."
          value={name}
          onChange={this.changeName}
        />
      </div>
    );
  }
}
```

## Rendering lists

You may want to render a list of `YourAwesomeComponent`. Here are some examples
to show how you can achieve this in different ways.

```jsx
import React from 'react';
// Suppose you have a ContactCard component defined there.
import ContactCard from './ContactCard';

const data = [
  { name: 'Sam1', email: 'foo@bar.com' },
  { name: 'Sam2', email: 'bar@baz.com' },
  { name: 'Sam3', email: 'baz@foo.com' }
];

const ListBySimpleMap = () => (
  <div>
    {data.map(contact => (
      <ContactCard
        key={contact.name}
        name={contact.name}
        email={contact.email}
      />
    ))}
  </div>
);

const ListBySimpleMapWithObjectDestructing = () => (
  <div>
    {data.map(({ name, email }) => (
      <ContactCard key={name} name={name} email={email} />
    ))}
  </div>
);

const ListBySimpleMapWithSpread = () => (
  <div>
    {data.map(contact => (
      <ContactCard key={contact.name} {...contact} />
    ))}
  </div>
);
```

Note that we always need a `key` prop. Without this, React will give you
warnings in the console. React needs a unique `key` for each item in the list to
help it avoid rerendering everything when only one item in the list changes.
