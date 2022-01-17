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
Check out [Lecture 2](/docs/2021fa/lecture2) for more details on how this setup works!
:::

Now you can create an `index.ts` file to add your routes and assignment code in.

## Endpoints

### 1. Simple URL

The first endpoint will be a simple `GET` method at `/`. The endpoint will not
take any input and responds with `"ok!"`.

### 2. Query Parameters

The second endpoint will be a `GET` method to `/book` with a **query parameter**
called `name`.

- If the name is `'scott'`, you will return `"Cracking the Coding Interview"`.
- If the name is `'enoch'`, you will return `"The Pragmatic Programmer"`.
- Finally, if no name is supplied or is any other value, return the
  name of your favorite book!

Let's make things **case-insensitive**!

Examples:

- a request to `/book?name=SCOTT` will return `"Cracking the Coding Interview"`
- a request to `/book?name=enoch` will return `"The Pragmatic Programmer"`

P.S. Don't worry, these aren't actually our favorite books.

### 3. Route Parameters

The third endpoint will be a `GET` request to
`/first/:firstName/last/:lastName`. This will simply send `"[firstName] [lastName] is really cool!"` as a response.

Example: a request to `/first/enoch/last/chen` will send `"enoch chen is really cool!"` to the frontend.

## Testing your code

To test your code, run `ts-node index.ts`. Your server should be up and running
(if not, debug!).

Once the server is running, you should be able to navigate to `localhost:<PORT>`
on your browser where PORT is the port number you've told Express to listen on.

Now you can manually test by navigating to `localhost:<PORT>/book?name=bob`, for
example.

You might notice that using a browser to hit endpoints is a bit inflexible. If
you are feeling fancy, you can download
[Postman](https://www.postman.com/downloads/) to test your server. This is the
tool of our choice for testing APIs, especially for manual testing. **We will be
introducing Postman in Lecture 3 next week**, but feel free to play around with
the tool ahead of time!

## Submission

Please submit to CMS the `index.ts` file in which you've defined your routes by
**Thursday 10/7 at 6:29pm**. You are allowed max 3 slip days (out of 6 total for
all assignments and the final project) per an assignment.

## FAQ

### What's the difference between a route and query parameter?

Query parameters come after a `?` in a route. For example: with
`/book?name=Enoch`, `'Enoch'` would be in `req.query.name`. We could make the
query parameter name anything we want, from `id` to `pizza` and we could access
it through `req.query`. For example, with `/book?name=Enoch&pizza=cheese` we
will access the string `'cheese'` through `req.query.pizza`.

Route parameters are an actual part of the route and come after a `:`. For
example: with `/first/:firstName/last/:lastName`, in the request
`/first/scott/last/wang`, `'scott'` would be in `req.params.firstName`. What
would `req.params.lastName` be?

### I still need help. Where should I go?

Check out the office hours schedule on [our syllabus](/docs/2021fa/introduction#when-are-office-hours). In addition, you can join the [Ed](https://edstem.org/us/courses/14933/discussion/) and post your question.
