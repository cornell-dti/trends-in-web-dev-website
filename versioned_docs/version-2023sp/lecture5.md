---
id: lecture5
title: Lecture 5
---

Homework: Assignment 2: CSS and Complex React, is due 3/25 by 11:59pm

Slides: [Here](https://docs.google.com/presentation/d/1-wR_8W7M_2CbL-32t_CpCes1iwwsh_TY-T8Lt9Xmwfg/edit?usp=sharing)

Explore more:

- Prefabricated React components in Google's Material UI Style: [React MUI](https://mui.com/)
- Prefabricated Tailwind CSS components: [Daisy UI](https://daisyui.com/)

Now that we have a complete understanding of React for building the raw HTML frontend of our application and manipulating that interface, let's take a look at that most-loved of frontend tasks: styling.

# Today's Lecture 3/20

By the end of today, you should be able to:

- Understand the basics of how to use CSS.
- Understand the evolution of CSS and styling solutions
- Understand the different ways to style React components

## The Basics of CSS

### CSS Properties

```html
<div className="“container”">
  <button id="”click-me”" />
  <hr />
</div>
```

```css
.container {
  padding: 2rem 1rem 2rem 1rem;
  margin: 30px;
}

#click-me {
  border: 5px solid #ff0000;
}

hr {
  color: red;
}
```

Above, you can see how we use **_selectors_** to select elements in our HTML and then apply **_properties_** to them. In the above example, we have three selectors: `.container`, `#click-me`, and `hr`. Each selector has a set of properties that are applied to it. For example, the `.container` selector has a `padding` property, a `margin` property, and a `border` property. The `#click-me` selector has a `border` property, and the `hr` selector has a `color` property.

You can check out more properties [here](https://web.stanford.edu/group/csp/cs21/csscheatsheet.pdf).

### CSS Selectors

```html
<div className="“container”">
  <button id="”click-me”" />
  <hr />
</div>
```

```css
div hr:hover {
  background-color: black;
}

.container > #click-me {
  background-color: grey;
}
```

Above, you can see how we use **_selectors_** to select elements in our HTML and then apply **_properties_** to them. In the above example, we have two selectors: `div hr:hover` and `.container > #click-me`. The first refers to any `hr` element that is a child of a `div` element and is being hovered over by the mouse. The second refers to any `#click-me` element that is a child of a `.container` element.

You can check out more selectors [here](https://htmlcheatsheet.com/css/).

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

## Demo 1: External CSS

https://tinyurl.com/6mdndykp

## Demo 2: Inline CSS

https://tinyurl.com/45w66v3t
