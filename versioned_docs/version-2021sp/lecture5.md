---
id: lecture5
title: Lecture 5
---

[Lecture Video](https://drive.google.com/file/d/1az7P1eYb42oSr8aF1-30lCED9WoRWyVh/view?usp=sharing)

[Lecture Slides](https://docs.google.com/presentation/d/1EkK8zboXxakJYecXWlGR93NvyTevfyy6byxpXZEQVgI/edit?usp=sharing)

[Assignment 4](/docs/assignment4) (due 4/1 3:59 PM on CMS. This is not an April Fool's joke, we swear.)

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

function ContactCard ({ name, githubLink }: Props) = {
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

### `index.tsx`

```tsx title="index.tsx"
import ReactDOM from 'react-dom';
import ContactCard from './ContactCard';

const link = 'https://github.com/cornell-dti';
const root = document.getElementById('root');

ReactDOM.render(<ContactCard name="Cornell DTI" githubLink={link} />, root);
```

In a React app, `index.tsx` is usually the entry point. In the code above, it
renders your component into the DOM element that has id `root`.

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
