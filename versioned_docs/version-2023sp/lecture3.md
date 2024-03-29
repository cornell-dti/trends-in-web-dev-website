---
id: lecture3
title: Lecture 3
---

Homework: Assignment 1: JS, TS, and Basic React, is due 3/11 by 11:59pm

Slides: [Here](https://docs.google.com/presentation/d/1uLo7Qg5X-UTO_IyX2nZTFSdk2a2M6UY1ok8GMkt6Aj0/edit?usp=sharing)

Explore more: N/A

# Today's Lecture 3/6

By the end of today, you should be able to:

- Understand how to create a Next.js project, and what the project structure is
- Understand how to create a React project utilizing hooks and components.

## Before the lecture

### Create a Next.js Project

This will create a Next.js project with TypeScript.

First, make sure that `yarn` is set up on your system.

Then run this command to set up everything!

NOTE: This will **create** a new folder in the current directory containing all
the project files, so run this where you want your project folder to be.

```zsh
yarn create next-app --typescript [optional: directory-name]
```

If you don't specify a directory name in your command, you'll be prompted for
one.

## Recap of Last Lecture: Why React?

### HTTP requests and responses

As previously touched upon in previous lectures, data is most commonly
communicated on the internet between a client and a server through the HTTP
protocol.

When you type in a URL into your browser (the client), it makes a HTTP request
to the server specified by the URL. The server, if reached, then responds with a
HTTP response, which contains various information. Depending on the
server and/or endpoint that the request is for, the response body (the main
content) may contain different types of data.

You might see the data in response bodies ranging from simple strings, to large
JSON objects, to full-on byte streams (most common used for file downloads and
images). Responses will have headers that carry additional information, some
that describe what kind of content the response carries. Note that HTTP requests
also have headers and bodies!

### HTML (and CSS and JavaScript)

However, the most familiar response body you will have encountered as a regular
person is a website, the structure of which is defined in HTML (Hypertext Markup
Language). When encountering this kind of response, your browser will take the
HTML code from the body and render it into a website.

Of course it's not just all HTML that makes up a website. While HTML provides
the structure or backbone of the website, you also have CSS (Cascading Style
Sheets) for styling and JavaScript for interactivity.

### Your Own Website

Now that we understand how information is transmitted over the internet, we can
have a better understanding of how we can host websites for others to
use.

First, we need to have a server that clients (commonly browsers) can send
requests to. In this course, we will be writing a Node.JS app that does exactly
this. Once we have this server, all we have to do is supply the HTML/CSS/JS for
the website to render!

## Rendering

### React.js, specifically, in-depth

We loosely covered a _ton_ of frameworks in the last lesson, but in this lesson and for the remainder of the course, we will be focusing on React.js (and Next.js, which is built atop it).

So, let's review what we covered last time, but in-depth for Next.js specifically.

#### Why React/Next.js?

One important reason, among many others, is that using regular JavaScript to
implement interactivity is hard. React and similar technologies simply make
things like reactive state management easier on the developer's end. We'll talk
more about the advantages of such libraries later on.

While using such libaries, however, we must understand that browsers are only
capable of rendering regular HTML/CSS/JS sites. You might be working with React
in TypeScript, for example, but a browser won't understand your TypeScript source
code.

Of course, there is a solution: we can compile/transpile\* our source code into
regular HTML/CSS/JS that is readable by the browser!

\*Note: usually transpilation is used to describe the process in which source
code is turned into equivalent source code (perhaps in another language), while
compilation is used more generally and often implied to produce machine code.

However, this transpiled HTML/CSS/JS code bundle is incredibly heavy on the JS
end of things. The HTML is mostly empty, waiting for the browser to run the
JavaScript code to actually populate it with content. This results in a rather
large bundle size and another problem that we will discuss.

### A Bit Of A Problem

When using React normally, the rendering of the site is done on the client side
(on the browser). Note that when we talk about client-side rendering, we are not
talking about how the browser turns HTML into pixels on your screen. Instead, we
are talking one step before that, where the browser runs the React application
(in JavaScript) to figure out the resulting HTML.

This reveals a potential weakness of React - the HTML is empty for the most
part, requiring JavaScript to be run before the page actually shows up. This can
lead to undesirable results, such as web crawlers not being able view your
website correctly, since the page is blank/incomplete until the browser runs the
JavaScript for some amount of time.

### Server-Side Rendering

The problem discussed above is exclusive to when the client does this rendering
computation. What if we have the server do it instead? Instead of sending tons
of JS for the browser to execute, we can execute it on the server side and then
send the rendered resulting HTML to the client. This saves the browser the time
it would have taken running the JavaScript!

#### An Analogy

Traditionally to play video games, you would use your computer to run the game,
which might involve running some game logic and computing some shaders to figure
out the pixels on your screen. This might be a suboptimal experience if you
don't have the right or powerful enough hardware. It's like client-side
rendering!

Cloud gaming allows you to offload all this computation to the cloud so that you
can simply receive the pixels you need over the internet to display on your
screen, without figuring out those pixels locally on your own machine. It's like
server-side rendering!

## Next.js

Next.js is a server framework built around React that provides you nice features
like server-side rendering. Over the past few years, this technology has
steadily increased in popularity.

In this course, we'll be taking advantage of Next.js to make our web development
easier. This is something new we're introducing this semester, so please bear
with us as we wade through uncharted territory.

We'll be writing React apps within the Next.js framework and exploring some
other features later on as well, such as authentication.

### Creating Your Project

See [this section](#before-the-lecture) for instructions on creating a Next.js
project.

You can open up the newly created directory in VSCode from your terminal with

```zsh
code [directory name]
```

### Project Structure

Your new project should have a few folders and files - let's talk about the
one's you'll be interacting with the most:

#### `package.json`

- This is the "project file" for all Node.js projects. It contains metadata
  about your project, such as dependencies, as well as user-defined scripts to
  use with yarn/npm. Lecture 2 has some more info on this file.

#### `tsconfig.json`

- This is the TypeScript config file. You usually don't touch this too often,
  but it is responsible for how TypeScript interprets and interacts with your
  codebase.

#### `pages/`

- Pages in Next.js represent full-on web pages attached to a route. You'll see
  `.tsx` (React) files in this folder representing each page (excluding ones
  that start with `_`, such as `_app.tsx`).
- Important Note: Don't put all of your React components in this folder! We'll
  be making a new folder called `components/` for those. Only _pages_ belong
  here.

#### `pages/api/`

- We will see `/api/` folders a lot, which are designated for _backend_ related
  files. You'll find `.ts` files here, which compose the backend API of your
  Next.js server. This frequently serves as "middleware" between the frontend and
  the database. This is important, since we don't want to expose our database
  directly to the frontend.

#### `styles/`

- This is where your CSS styles live by default. Note how the `.css` files are
  named.

#### `public/`

- Static files live here. You might want to place files or images in this
  folder.

#### `components/`

- This folder doesn't exist by default, but let's add it! We'll be putting our
  React components here.

### Running The Server

If we look at our `package.json`, we have have 4 scripts by default:

- `dev`
  - Runs the project in development mode. This is what you'll be running while
    developing. Next.js has hot reloading ("Fast Refresh"), so you won't have to
    rerun this command every time you make a change locally.
- `build`
  - Builds the Next.js project for production use. You'll need to run this
    before running the `next start` command.
- `start`
  - Runs the optimized production build generated by the `next build` command.
- `lint`
  - Searches through your code and tries to find bad code. If you set up ESLint
    with your VSCode correctly, you should be getting linter warnings directly
    in your IDE. However, you can also run this command to run the linter.

You can run these scripts with `yarn [script]`, for example `yarn dev`.

And that's it! Feel free to play around with this project, and we'll be diving
into React in the next lecture.

## How React?

Allows developers to create reusable UI components and manage the state of those components efficiently. React uses a virtual DOM (Document Object Model) to improve performance by minimizing the amount of DOM manipulation required when a user interacts with a React application. This allows for efficient updates and rendering of components, making it a popular choice for building complex and high-performing web and mobile applications.

In essence, it's built around a few core features:

- Reusable components
- Reactivity (state management)

Conceptually, everything in React is a _function_. Your entire UI is therefore a function of your state. This is a very powerful concept.

### Components

Components are the building blocks of visual React. They are reusable pieces of code that can be used to build more complex components. These functional components form the visual basis of all React applications. They are defined as functions that return a React element. They are the simplest way to define a component.

Here, an example of a functional component (implemented as an arrow function):

```jsx
const MyComponent = () => {
  return <div>Hello World!</div>;
};
```

Then, elsewhere, you can reuse MyComponent, such as in a higher-order App.tsx component:

```jsx
const App = () => {
  return (
    <div>
      <MyComponent />
    </div>
  );
};
```

The returned code is JSX, which is a JavaScript extension that allows you to write HTML-like code in JavaScript. It is compiled to JavaScript by Babel, and then inserted as HTML into the DOM.

Thus, we can _compose_ components together to build more complex components. This is the basis of React's component-based architecture, which is _compositional_. This is a very powerful concept, and we'll cover it in more detail later in the next lecture, once you have a more firm grasp of basic React.

### Hooks

Hooks are the building blocks of logical React. They are reusable pieces of code that can be used to manage the state of your application, and are the most powerful feature of React. Changes to a hook variable will cause components and other hooks that depend on it to re-render or re-calculate their values, which is the basis of React's reactivity.

Like for components, you can create custom hooks to encapsulate logic and reuse it across your application. However, extremely frequently, you'll also use the built-in hooks provided by React.

The most important hook is useState, which simply provides a getter and setter for a variable. This is the basis of React's state management.

Here, an example of a component that uses useState:

```jsx
const MyComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
```

The other most important built-in hook is useEffect, which allows you to run code when a component is mounted or unmounted, or when a variable changes. This is the basis of React's lifecycle management.

Lifecycle management is when you want to run code when a component is mounted or unmounted, or when a variable changes, or on every render. It encapsulates logic that must in essence run at certain points during a component's lifecycle.

Here, an example of a component that uses useEffect:

```jsx
const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('The count changed!'); // this will fire every time count variable changes
  }, [count]);

  useEffect(() => {
    console.log('The component mounted or the count changed!'); // this will fire every render (all the time)
  });

  useEffect(() => {
    console.log('The component mounted!'); // this will fire once, when the component is mounted
    return () => {
      console.log('The component unmounted!'); // this will fire once, when the component is unmounted
    };
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
```

Combining components and hooks, you can build complex applications with React that respond to events, update their state accordingly, and then re-render the UI to reflect the new state!

Today, let's build an extremely simple React app to get a feel for how React works. Next time, we'll use useState, useEffect, and components more extensively, along with other React features.

## In-class Demo 1: An Extremely Simple React App

TODO: @daniel

- Let's implement a simple minutes-since-event counter. It'll increase indefinitely, but can be reset to 0.
