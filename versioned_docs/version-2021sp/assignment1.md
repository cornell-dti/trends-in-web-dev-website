---
id: assignment1
title: Assignment 1
---

For the first assignment, you will be setting up a basic server with 3 simple GET endpoints.

## Set up your project

First, let's set up your first Node project!

To create a project, first make a folder for your assignment code using `mkdir a1` in terminal and change into that directory with `cd a1`. You can then use the command `code .` to open that folder in VSCode (install VSCode [here](https://code.visualstudio.com/)). You can also just open it in VSCode from the application directly.

Set up the yarn project by running `yarn init -y` in that `a1` folder. Add the necessary dependencies: `express`, `typescript`, `ts-node`, `@types/node`, `@types/express` by running:

```bash
yarn init -y
yarn add express
yarn add --dev typescript ts-node @types/express
```

:::info
Check out [Lecture 2](/docs/lecture2) for more details on how this setup works!
:::

Now you can create an `index.ts` file to add your routes and assignment code in.

## Endpoints

### 1. Simple URL

The first endpoint will be a simple `GET` request to `/book`. You will send your favorite book's name to the frontend.

### 2. Query Parameters

The second endpoint will be a `GET` request to `/book` with a query parameter called `name`. If the name is "Peter", you will return "Cracking the Coding Interview". If the name is "Becky", you will return "The Pragmatic Programmer". Otherwise, return the name of any book you choose!

Example: a request to `/book?name=peter` will return "Cracking the Coding Interview."

P.S. Don't worry, these aren't actually our favorite books.

### 3. Route Parameters

The third endpoint will be a `GET` request to `/book/:userid`. This will simply send "`userid` is really cool!" to the frontend.

Example: a request to `/book/peter` will send "peter is really cool!" to the frontend.

## Testing your code

To test your code, run `ts-node index.ts`. Your server should be up and running (if not, debug!) and you should be able to navigate to `localhost:<PORT>/book` where PORT is the port number express is listening for requests on (we usually use `8080`) and specify query/path parameters that give the intended results.

## Getting help

If you're stuck, we have [TA office hours](/docs/introduction#when-are-office-hours) every week day so feel free to come and ask questions! In addition, you can join the [Piazza](http://piazza.com/cornell/fall2020/info1998section604) and post your question. Please make it public if it's just a general question with no code screenshots, otherwise make it private.

## Submission

Please submit to CMS the `index.ts` file in which you've defined your routes by **Thursday 3/11 at 3:59pm**. You are allowed max 3 slip days (out of 6 total for all assignments and the final project) per an assignment.

## FAQ

### Does case-sensitivity matter for the `/book` query parameter?

We won't discount you for this when grading, but when it comes to implementing
things like this as a software engineer, it's up to you to make the best possible
design decision!

### What's the difference between a route and query parameter?

Query parameters come after a `?` in a route. For example: with `/books?name=Megan`, `Megan`' would be in `req.query.name`. We could make the query parameter name anything we
want, from `id` to `pizza` and we could access it through `req.query.paramName`.

Route parameters are an actual part of the route and come after a `:`. For example: with `/books/:userid`, in the request `/books/Megan`, `'Megan'` would be in `req.params.userid`.

### Two endpoints for the same path?!?!? What's going on?

This is allowed and not a typo. While you might need to make two endpoints if you need to handle a route's path parameters (say `/users` and and `/users/:id`), think about what the query parameters would be from visiting route `/book` rather than `/book?name=megan`, and see if you can consolidate the logic into just one endpoint: `req.query.name` will have some kind of value no matter what, even if you don't pass in a query parameter value.

Extra aside: you might have heard of REST APIs: they all follow certain design principles that allow developers to know what to expect based on an abstract specification of what the API routes do. Generally, REST APIs use path params to identify a specific resource, and query params to filter those resources.

### I still need help. Where should I go?

Check out the office hours schedule on [our syllabus](/docs/introduction#when-are-office-hours).
