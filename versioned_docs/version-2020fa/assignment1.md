---
id: assignment1
title: Assignment 1
---

For the first assignment, you will be setting up a basic server with 3 endpoints as follows:

## Set up your project

To create a project, first make a folder for your assignment code using `mkdir a1` and change into that directory with `cd a1`. You can then use the command `code .` to open that folder in VSCode (install VSCode [here](https://code.visualstudio.com/)). You can also just open it in VSCode from the application directly.

Set up the yarn project by running `yarn init -y` in that `a1` folder. Add the necessary dependencies `express`, `typescript`, `ts-node`, `@types/node`, `@types/express` by running:

```bash
yarn init -y
yarn add express
yarn add --dev typescript ts-node @types/express
```

:::info
Check out [lecture1](./lecture1) for more details on how this setup works!
:::

Now you can create an `index.ts` file to add your routes and assignment code in.

## Simple URL

The first endpoint will be a simple `GET` request to `/book`. You will send your favorite book's name to the frontend.

## Query Parameters

The second endpoint will be a `GET` request to `/book` with a query parameter called `name`. If the name is "Megan", you will return "Cracking the Coding Interview". If the name is "Ashneel", you will return "The Pragmatic Programmer". Otherwise, return the name of any book you choose!

Example: a request to `/book?name=megan` will return "Cracking the Coding Interview."

P.S. Don't worry, these aren't actually our favorite books.

## Route Parameters

The third endpoint will be a `GET` request to `/book/:userid`. This will simply send "`userid` is really cool!" to the frontend.

Example: a request to `/book/ashneel` will send "ashneel is really cool!" to the frontend.

## Testing your code

To test your code run `ts-node index.ts`. Your server should be up and running (if not, debug!) and you should be able to navigate to `localhost:<PORT>/book` where PORT is the port number express is listening for requests on (we usually use `8080`) and specify query/path parameters that give the intended results.

## Getting help

If you're stuck, we have [TA office hours](./introduction#when-are-office-hours) every week day so feel free to come and ask questions! In addition, you can join the [Piazza](http://piazza.com/cornell/fall2020/info1998section604) and post your question. Please make it public if it's just a general question with no code screenshots, otherwise make it private.

## Submission

Please submit to CMS the `index.ts` file where you have defined your routes by **Tuesday 9/29 at 3:59pm** although you are allowed max 3 slip days (out of 6 total) per an assignment. (Note: we are still getting CMS set up. If we are unable to have CMS up by Monday, we will notify you of another mode of submission or extend the deadline)
