---
id: lecture5
title: Lecture 5
---

Homework: TODO: @daniel

Slides: TODO: @daniel

Explore more: TODO: @daniel

Now that we have a complete understanding of React for building the raw HTML frontend of our application and manipulating that interface, let's take a look at that most-loved of frontend tasks: styling.

## Styling Options

There are a few different ways to style your React components. We'll go over the most common ones here.

### CSS

CSS is the most common way to style your React components. You can use CSS in a few different ways:

### Inline styles

You can use the `style` prop to pass in a JavaScript object with CSS properties and values. This is the most common way to style React components.

Conceptually, the styles prop takes in an object with camelCased properties, where the names correspond to CSS properties, and the values correspond to the CSS values. For example, the following code will set the color of the text to red:

```tsx
<div style={{ color: 'red' }}>This text is red!</div>
```

Thus, you can manipulate CSS just like you would any other object. For instance,

```tsx
import React from 'react';

const MyComponent: React.FC = () => {
  const styles = {
    container: {
      backgroundColor: 'red',
      padding: '20px',
    },
    text: {
      color: 'white',
    },
  };

  return (
    <div style={styles.container}>
      <p style={styles.text}>Hello, world!</p>
    </div>
  );
};

export default MyComponent;
```

However, because the CSS is camelCased, this comes at a cost: you can't use CSS pseudo-selectors, media queries, or other CSS features that aren't supported by JavaScript. You can't use CSS classes, either.

### CSS files

In React, just like in normal HTML, you can use external CSS files to apply styles to your components. Here's an example of how you can use an external CSS file in a React function component written in TypeScript:

1. Create a new CSS file in your project directory, for example, styles.css.

```css
/* styles.css */
.container {
  background-color: red;
  padding: 20px;
}

.text {
  color: white;
}
```

2. Import the CSS file in your React component file.

```tsx
import React from 'react';
import './styles.css';

const MyComponent: React.FC = () => {
  return (
    <div className="container">
      <p className="text">Hello, world!</p>
    </div>
  );
};

export default MyComponent;
```

In the above example, we import the CSS file styles.css in the React component file, and then we use the className property to apply the classes to the div and p elements.

### CSS modules

CSS modules are a way to use CSS files in a modular way. This means that you can use the same CSS class names in different files without worrying about them conflicting with each other. This is useful when you have a large project with many CSS files.

1. Create a new CSS file in your project directory, for example, `styles.module.css`.

```css
/* styles.module.css */
.container {
  background-color: red;
  padding: 20px;
}

.text {
  color: white;
}
```

2. Import the CSS file in your React component file.

```tsx
import React from 'react';
import styles from './styles.module.css';

const MyComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Hello, world!</p>
    </div>
  );
};

export default MyComponent;
```

In the above example, we import the CSS file styles.module.css in the React component file, and then we use the className property to apply the classes to the div and p elements. Instead of passing a string, we pass the imported object, which contains the scoped class names as properties.

### CSS-in-JS

Alternatively, we want to use an external package or library to load CSS into our React components. This is called CSS-in-JS. There are many different CSS-in-JS libraries, but the most popular ones are styled-components and Tailwind.

Conceptually, React's goal is to move HTML using JS: to flip the usual separation of concerns on its head, and allow you to write HTML in JS. CSS-in-JS libraries take this idea to the next level: they allow you to write CSS in JS. This means that you can use all the features of CSS, including pseudo-selectors, media queries, and CSS classes, in your React components. That way, we have one source of truth for ALL visual information in our application: the React components, which are stylized, structured, and made interactive, all in one place.

#### styled-components

Conceptually, we can use JavaScript's powerful template literal and tag template features to write CSS in JS. This is what styled-components does. styled-components is a library that allows you to write CSS in JS. It's a very popular library, and it's used by many large companies, including Airbnb, Uber, and Netflix. We can pass in a template literal containing regular CSS (including all the powerful stuff, like media queries and selectors) to the styled function, including with props that are inserted into the CSS via interpolated strings, and it will return a React component that we can use in our application. Isn't that cool?

Here's an example of how you can use styled-components in a React function component written in TypeScript:

```tsx
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: red;
  padding: 20px;
`;

const Text = styled.p`
  color: white;
`;

const MyComponent: React.FC = () => {
  return (
    <Container>
      <Text>Hello, world!</Text>
    </Container>
  );
};

export default MyComponent;
```

styled-components is a popular library for styling React components. It allows you to write CSS styles in JavaScript and apply them to your components. Here's an example of how you can use styled-components in a React function component written in TypeScript:

```tsx
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: red;
  padding: 20px;
`;

const Text = styled.p`
  color: white;
`;

const MyComponent: React.FC = () => {
  return (
    <Container>
      <Text>Hello, world!</Text>
    </Container>
  );
};

export default MyComponent;
```

In the above example, we import the styled-components library and use the styled function to create two new components, Container and Text. These components are like regular React components, but they have styles attached to them. We then use these components in the JSX of our MyComponent and the styles will be applied to the rendered elements.

As promised, you can also pass props to the styled components, to change the styles based on the props passed

```tsx
const Text = styled.p<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? 'white' : 'black')};
`;

const MyComponent: React.FC = () => {
  const [isActive, setIsActive] = React.useState(true);
  return (
    <Container>
      <Text isActive={isActive}>Hello, world!</Text>
      <button onClick={() => setIsActive(!isActive)}>Toggle Active</button>
    </Container>
  );
};
```

In the above example, we passed a type parameter <{isActive: boolean}> to the styled.p function to indicate that isActive prop is expected, and then we use the props object to check the value of isActive and apply the styles accordingly.

styled-components allows you to write CSS styles in a way that's easy to understand and maintain, and it also handles the tedious task of scoping styles to the component. It also allows for dynamic styling based on the props and state of the component.

Perhaps its one downside: it's a bit verbose. You have to write a lot of code to get the same effect as a simple CSS class, and you have to name each styled component it spits out. This can be a bit annoying, especially if you're just trying to get a quick prototype up and running. For this reason, many people prefer to use a CSS-in-JS library that's a bit more concise, like Tailwind.

#### Tailwind

Tailwind is a CSS-in-JS library that's a bit more concise than styled-components. It's a utility-first CSS framework, which means that it provides a set of utility classes that you can use to style your components. These utility classes are very small, and they're designed to be combined together to create complex styles. For example, you can use the text-white class to make the text white, and the bg-red-500 class to make the background red. You can then combine these classes together to create a red text on a white background. Tailwind also provides a set of responsive variants, which allow you to specify different styles for different screen sizes. For example, you can use the text-white sm:text-black class to make the text white on small screens, and black on larger screens.

The learning curve is much steeper than styled-components (since it's no longer technically CSS), but once you get the hang of it, it's a very powerful tool. It has a die-hard fan following among frontend developers, and it's also very popular, being used by many large companies, including Netflix, Shopify, and GitHub.

An example:

```tsx
import React from 'react';
import './index.css';

const MyComponent: React.FC = () => {
  return (
    <div className="bg-red-500 p-4">
      <p className="text-white">Hello, world!</p>
    </div>
  );
};

export default MyComponent;
```

In the above example, we import the CSS file tailwind.css in the React component file, and then we use the className property to apply the classes to the div and p elements.
The classes bg-red-500 and text-white are predefined classes in Tailwind CSS that sets the background color to red and text color to white respectively.

You'll notice that it's also a string, but it's simply passed to the `className` attribute of the element. This is because Tailwind is a CSS-in-JS library, and it's not a React component. It's just a string that contains CSS classes. This means that you can use Tailwind in any framework, not just React. Additionally, it's one-line, and uses abbreviations for almost everything.

## Demo 1: External CSS

https://tinyurl.com/6mdndykp

TODO: @daniel

## Demo 2: Inline CSS

https://tinyurl.com/45w66v3t

TODO: @daniel

# Demo 3: styled-components

https://tinyurl.com/mt8ca7pu

TODO: @daniel

# Demo 4: Tailwind

https://tinyurl.com/nhcba3ns

TODO: @daniel
