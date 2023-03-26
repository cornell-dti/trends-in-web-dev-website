---
id: lecture5
title: Lecture 5
---

Homework: Assignment 2: CSS and Complex React, is due 3/31 by 11:59pm

Slides: [Here](https://docs.google.com/presentation/d/1-wR_8W7M_2CbL-32t_CpCes1iwwsh_TY-T8Lt9Xmwfg/edit?usp=sharing)

Explore more:

- Prefabricated React components in Google's Material UI Style: [React MUI](https://mui.com/)

Now that we have a complete understanding of React for building the raw HTML frontend of our application and manipulating that interface, let's take a look at that most-loved of frontend tasks: styling.

# Today's Lecture 3/20

By the end of today, you should be able to:

- Understand the basics of how to use CSS

## An Intro to CSS

CSS, or Cascading Style Sheets, allows us to control the appearance of HTML elements. It’s the standard “language” of styling. Along with HTML and JS, it’s considered one of the three fundamental web languages.
It’s also an extremely simple, non-Turing-complete language.

### CSS Selectors

CSS selectors are the things that we use to select HTML elements. For example, we can use the `h1` selector to select all `h1` elements, or the `.my-class` selector to select all elements with the `my-class` class.

### CSS Properties

CSS properties are the building blocks of CSS. They are the things that we use to style our HTML elements. For example, we can use the `color` property to change the color of text, or the `background-color` property to change the background color of an element.

## CSS Concepts

### The Box Model

The box model is a concept that describes how HTML elements are laid out on the page. It’s a very simple concept, but it’s important to understand it in order to style elements properly.

The box model is a box that wraps around every HTML element. It consists of margins, borders, padding, and the actual content.

Refer to the slides, or [this article](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model) for more information.

### Positioning

Positioning is a concept that describes how HTML elements are positioned on the page. It’s a very simple concept, but it’s important to understand it in order to style elements properly.

There are four types of positioning:

- Static
- Relative
- Absolute
- Fixed

#### Static Positioning

Static positioning is the default positioning of HTML elements. It means that the element is positioned according to the normal flow of the page. This means that the element will be positioned where it would be if no positioning was applied.

#### Relative Positioning

Relative positioning is a type of positioning that is relative to the normal flow of the page. This means that the element will be positioned where it would be if no positioning was applied, but then offset by the specified amount.

#### Absolute Positioning

Absolute positioning is a type of positioning that is relative to the nearest positioned ancestor. This means that the element will be positioned where it would be if no positioning was applied, but then offset by the specified amount.

This removes the element from the normal flow of the page, and it will not affect the position of other elements on the page.

#### Fixed Positioning

Fixed positioning is a type of positioning that is relative to the viewport. This means that the element will be positioned where it would be if no positioning was applied, but then offset by the specified amount.

This removes the element from the normal flow of the page, and it will not affect the position of other elements on the page.

### CSS Selectors

CSS selectors are the things that we use to select HTML elements. For example, we can use the `h1` selector to select all `h1` elements, or the `.my-class` selector to select all elements with the `my-class` class, or the `#my-id` selector to select the element with the `my-id` id.

We can also combine selectors to select multiple elements. For example, we can use the `h1.my-class` selector to select all `h1` elements with the `my-class` class, or the `h1, h2, h3` selector to select all `h1`, `h2`, and `h3` elements.

You can also apply multiple classes to an element. For example, `<h1 class="my-class my-other-class">Hello, world!</h1>`.

You can also apply the same properties to multiple selectors. For example, `h1, h2, h3 { color: red; }` will make all `h1`, `h2`, and `h3` elements red.

You can also select elements based on their ancestors. For example, `ul li { color: red; }` will make all `li` elements that are descendants of `ul` elements red.

A more advanced concept is to select elements based on their immediate and direct parent elements: `ul > li { color: red; }` will make all `li` elements that are direct descendants of `ul` elements red.

### Units

There are many different units that we can use to specify the size of things in CSS. The most common ones are:

- `px`: Pixels. This is the default unit of measurement for CSS. It’s a fixed unit of measurement, meaning that it will always be the same size on the screen.
- `rem`: Relative to the font size of the root element. This is a relative unit of measurement, meaning that it will be a different size depending on the font size of the root element.
- `%`: Relative to the parent element. This is a relative unit of measurement, meaning that it will be a different size depending on the size of the parent element.
- `vh`: Relative to the height of the viewport. This is a relative unit of measurement, meaning that it will be a different size depending on the height of the viewport.
- `vw`: Relative to the width of the viewport. This is a relative unit of measurement, meaning that it will be a different size depending on the width of the viewport.

### Calculations

We can also perform calculations in CSS. For example, `width: calc(100% - 20px);` will make the width of an element 100% of the width of its parent element, minus 20 pixels.

### Pseudo-classes

Pseudo-classes are special selectors that allow us to select elements based on their state. For example, we can use the `:hover` pseudo-class to select elements when the user is hovering over them with their mouse.

### Cascading

CSS is a cascading language. This means that the order in which we apply CSS rules matters. The last rule that is applied to an element will be the one that is used. Later properties can effectively override earlier properties.

### Media Queries and Clamping

Media queries allow us to apply different CSS rules based on the size of the viewport. For example, we can use a media query to apply different CSS rules when the viewport is less than 600 pixels wide. For example:

```css
@media (max-width: 600px) {
  .my-class {
    width: 100%;
  }
}
```

Alternatively, clamping is a way to clamp a value between a minimum and maximum value. For example, `clamp(0px, 100%, 600px)` will return the value 100% if the value is between 0px and 600px, and will return the value 0px if the value is less than 0px, and will return the value 600px if the value is greater than 600px.

### CSS Variables

CSS variables are a way to define variables in CSS. For example, `--my-variable: red;` will define a variable called `--my-variable` with the value `red`. We can then use this variable in our CSS rules. For example, `color: var(--my-variable);` will set the color of an element to the value of the `--my-variable` variable.

Normally, CSS variables are defined in the `:root` selector. For example:

```css
:root {
  --my-variable: red;
}
```

We can then use this variable in our CSS rules. For example:

```css
.my-class {
  color: var(--my-variable);
}
```

### Flexbox and CSS Grid

Flexbox and CSS Grid are two different ways to layout elements on the page. Flexbox is a one-dimensional layout system, meaning that it only works on one axis at a time. CSS Grid is a two-dimensional layout system, meaning that it works on both the horizontal and vertical axes at the same time.

Refer to the documentation for Flexbox [here](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), and for CSS Grid [here](https://css-tricks.com/snippets/css/complete-guide-grid/).
