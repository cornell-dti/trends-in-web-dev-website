---
id: setup-environment
title: Setup your development environment
---

## Install Node.js

Node is a JavaScript runtime that allows you to run JavaScript code outside of a browser! It powers all of web development today, and is critically necessary for this course.

Go to [this website](https://nodejs.org/en/download/) and follow the instructions to install it on your workstation.

For consistency, please use the latest Node LTS (currently, as of Fall 2023, this is Node 18).

## Install Additional Packages

We will be using a few additional packages to help us with development.

#### Deno

Deno is a drop-in replacement for Node that's faster, more secure, and critically -- supports TypeScript out of the box. We use it for its "REPL" (Read-Eval-Print-Loop) functionality, which allows us to run TypeScript code interactively during demos in class. Install it if you want to follow along with the demos.

[Instructions](https://deno.land/manual@v1.36.1/getting_started/installation)

#### Pnpm

Pnpm is a package manager that is faster and more efficient than the default `npm` package manager.

```bash
npm install -g pnpm
```

## Making a React Project

To make sure you've got everything set up correctly, `cd` into a directory of your choice and run:

```bash
pnpm dlx degit cornell-dti/trends-mono/frontend-starter your-project-name
```

This will create a new directory called `your-project-name` with a React project inside. `cd` into it and run `pnpm install` to install all the dependencies.

Take a look around and edit the code if you'd like.

When you're ready, run `pnpm dev` to start the development server. If everything works as it should, you should be able to navigate to `localhost:5173` and see a React app running!

You can also use that command to create a new 'blank' React project at any time. Bookmark this page and come back to it!
s