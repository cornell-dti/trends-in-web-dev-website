---
id: lecture5
title: Lecture 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[Lecture Slides](https://docs.google.com/presentation/d/15bfP0N0QV1Y854Ws5_6b2qqqzNuaVU9AiKrt0Gh7SyE/edit?usp=sharing)

[Lecture Video](https://drive.google.com/file/d/1r515SUWcLaFZ1cf9HiwXe4gh3SEv8A1g/view?usp=sharing)

[Assignment 4](/docs/2020fa/assignment4) due **10/27 3:59pm**

## Before the Lecture

```bash
yarn create react-app lecture5 --template typescript
cd lecture5
yarn start
```

This creates a hot-reloading (refreshes automatically when edits are made) dev version of your React site, hosted at `localhost:3000`.

## Your First Component

<Tabs
groupId="lang"
defaultValue="ts"
values={[
{ label: 'TypeScript', value: 'ts', },
{ label: 'JavaScript', value: 'js', },
]
}>
<TabItem value="ts">

```tsx title="MyComponent.tsx"
import React from 'react';

type Props = { readonly name: string; readonly githubLink: string };

const MyComponent = ({ name, githubLink }: Props) => (
  <div>
    <div>My name is {name}.</div>
    <a href={githubLink}>My GitHub</a>
  </div>
);

export default MyComponent;
```

</TabItem>
<TabItem value="js">

```jsx title="MyComponent.jsx"
import React from 'react';

const MyComponent = ({ name, githubLink }) => (
  <div>
    <div>My name is {name}.</div>
    <a href={githubLink}>My GitHub</a>
  </div>
);

export default MyComponent;
```

</TabItem>
</Tabs>

<Tabs
groupId="lang"
defaultValue="ts"
values={[
{ label: 'TypeScript', value: 'ts', },
{ label: 'JavaScript', value: 'js', },
]
}>
<TabItem value="ts">

```tsx title="index.tsx"
import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent';

const link = 'https://github.com/cornell-dti';
const root = document.getElementById('root');
if (root == null) {
  throw new Error();
}
ReactDOM.render(<MyComponent name="Cornell DTI" githubLink={link} />, root);
```

</TabItem>
<TabItem value="js">

```jsx title="index.js"
import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent';

const link = 'https://github.com/cornell-dti';
ReactDOM.render(
  <MyComponent name="Cornell DTI" githubLink={link} />,
  document.getElementById('root'),
);
```

</TabItem>
</Tabs>

## Wat! What's going on

### Functional Component

The simplest component in React is functional component. A functional component
does not have any internal state. You can think of it as a function whose inputs
are some JavaScript object and the output is some HTML code that is generated
from the data.

In React, we call the JavaScript object `props`, so you can see code like this:

<Tabs
groupId="lang"
defaultValue="ts"
values={[
{ label: 'TypeScript', value: 'ts', },
{ label: 'JavaScript', value: 'js', },
]
}>
<TabItem value="ts">

```tsx title="MyComponent.tsx"
import React from 'react';

type Props = { readonly name: string; readonly githubLink: string };

function MyFirstComponent(props: Props) {
  return (
    <div>
      <div>My name is {props.name}.</div>
      <a href={props.githubLink}>My GitHub</a>
    </div>
  );
}
```

</TabItem>
<TabItem value="js">

```jsx title="MyComponent.jsx"
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

</TabItem>
</Tabs>

Just calling the input `props` is not good for documentation purpose, so we
usually use the object destruct syntax to make it more explicit:

<Tabs
groupId="lang"
defaultValue="ts"
values={[
{ label: 'TypeScript', value: 'ts', },
{ label: 'JavaScript', value: 'js', },
]
}>
<TabItem value="ts">

```tsx title="MyComponent.tsx"
import React from 'react';

type Props = { readonly name: string; readonly githubLink: string };

// Replace props with { name, githubLink }, so we can directly use `name` and
// `githubLink` below.
function MyFirstComponent({ name, githubLink }: Props) {
  return (
    <div>
      <div>My name is {name}.</div>
      <a href={githubLink}>My GitHub</a>
    </div>
  );
}
```

</TabItem>
<TabItem value="js">

```jsx title="MyComponent.jsx"
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

</TabItem>
</Tabs>

In order for this component to be reused in another file, we need to export it:

<Tabs
groupId="lang"
defaultValue="ts"
values={[
{ label: 'TypeScript', value: 'ts', },
{ label: 'JavaScript', value: 'js', },
]
}>
<TabItem value="ts">

```tsx title="MyComponent.tsx"
import React from 'react';

type Props = { readonly name: string; readonly githubLink: string };

// export default added.
export default function MyFirstComponent({ name, githubLink }: Props) {
  return (
    <div>
      <div>My name is {name}.</div>
      <a href={githubLink}>My GitHub</a>
    </div>
  );
}
```

</TabItem>
<TabItem value="js">

```jsx title="MyComponent.jsx"
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

</TabItem>
</Tabs>

React does not care about the function definition syntax, so you can also write
it in arrow function syntax:

<Tabs
groupId="lang"
defaultValue="ts"
values={[
{ label: 'TypeScript', value: 'ts', },
{ label: 'JavaScript', value: 'js', },
]
}>
<TabItem value="ts">

```tsx title="MyComponent.tsx"
import React from 'react';

type Props = { readonly name: string; readonly githubLink: string };

const MyComponent = ({ name, githubLink }: Props) => (
  <div>
    <div>My name is {name}.</div>
    <a href={githubLink}>My GitHub</a>
  </div>
);

export default MyComponent;
```

</TabItem>
<TabItem value="js">

```jsx title="MyComponent.jsx"
import React from 'react';

const MyComponent = ({ name, githubLink }) => (
  <div>
    <div>My name is {name}.</div>
    <a href={githubLink}>My GitHub</a>
  </div>
);

export default MyComponent;
```

</TabItem>
</Tabs>

You can choose whatever style you like for the purpose of this course.

### `index.js` / `index.tsx`

In a React app, `index.js` is usually the entry point.
(`index.tsx` is the entry point if you use TypeScript). In the code above, it
renders your component into the DOM element that has id `root`.

## Stateful Component

Imagine you are writing a message board app and you need to implement an editor.

Unlike the previous components, you need to maintain state. In React, you will
need `hooks`.

<Tabs
groupId="lang"
defaultValue="ts"
values={[
{ label: 'TypeScript', value: 'ts', },
{ label: 'JavaScript', value: 'js', },
]
}>
<TabItem value="ts">

```tsx
import React, { useState, ChangeEvent } from 'react';

export default function SimpleEditor() {
  // name is the variable for the state, setName is the function you can use
  // to change the state.
  const [name, setName] = useState(''); // '' is the initial state for name.

  const changeName = (event: ChangeEvent<HTMLInputElement>) => {
    // To extract the value from input box, use the following line.
    const name = event.currentTarget.value;
    setName(name);
  };

  return (
    <div>
      <div>{name !== '' ? `Hello, ${name}` : ''}</div>
      <input
        className={styles.InputBox}
        type="text"
        placeholder="Type your name..."
        value={name}
        onChange={changeName}
      />
    </div>
  );
}
```

</TabItem>
<TabItem value="js">

```jsx
import React, { useState } from 'react';

export default function SimpleEditor() {
  // name is the variable for the state, setName is the function you can use
  // to change the state.
  const [name, setName] = useState(''); // '' is the initial state for name.

  const changeName = (event) => {
    // To extract the value from input box, use the following line.
    const name = event.currentTarget.value;
    setName(name);
  };

  return (
    <div>
      <div>{name !== '' ? `Hello, ${name}` : ''}</div>
      <input
        className={styles.InputBox}
        type="text"
        placeholder="Type your name..."
        value={name}
        onChange={changeName}
      />
    </div>
  );
}
```

</TabItem>
</Tabs>

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
  { name: 'Sam3', email: 'baz@foo.com' },
];

const ListBySimpleMap = () => (
  <div>
    {data.map((contact) => (
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
    {data.map((contact) => (
      <ContactCard key={contact.name} {...contact} />
    ))}
  </div>
);
```

Note that we always need a `key` prop. Without this, React will give you
warnings in the console. React needs a unique `key` for each item in the list to
help it avoid rerendering everything when only one item in the list changes.
