---
id: lecture2
title: Lecture 2
---

[Lecture Slides](https://docs.google.com/presentation/d/18MXoE6d0WGPSffV_vnuE1prbs5qLchwKce_ZTCsISEw/edit?usp=sharing)

[Assignment 1](/docs/2021fa/assignment1) (due 10/7 6:29 PM on CMS)

[Join the Ed!](https://edstem.org/us/join/Cm4Kt5)

_Topics: Node.js, Express, HTTP Methods_

## How to build a web app

_Intro to Node.js and Yarn_

### How websites work

Websites are accessed by HTTP requests, and these requests go to the server, where it fetches the information queried and sends the data back to the client. This cycle between sending requests back and forth between client and server then repeats!

## Node.js

> Node.js is an open source, cross platform JavaScript V8 runtime environment using a single-threaded event loop.

Let's break it down...

#### Open Source

All of the code is available to you to view on [Github](https://github.com/nodejs/node)! Anyone can contribute-- this democratizes the development process!

#### Cross Platform JavaScript Runtime Environment

- Historically you were only able to run JavaScript on the browser or client
- Node.js takes the V8 JavaScript engine powering Google Chrome outside of the browser allowing you to run Node.js **anywhere**
  - V8 JavaScript engine is a fast JavaScript engine created by Google. Learn more about it [here](https://v8.dev/)!
- Can run Node.js on your terminal as well
- Now, we can use JavaScript as a **universal language**!

#### Single-threaded

- Threads are a separate line of execution and can be ran in parallel - i.e. several at
  the same time.
- However, Node.js uses a single-threaded event loop
  - Run in a single process
  - Requests do not spawn new threads
- Non-blocking

#### How does Node.js handle multiple requests?

- Node.js is **asynchronous**
- When a request is sent, it is dispatched to the server
- Instead of blocking the thread and wasting CPU cycles waiting for the request to finish, Node.js continues its operations
- Once the request is complete, a callback is triggered and information is sent back

#### Event Loop

- Client can send requests into the event loop
- We can register callbacks to server when doing things that might take time (ie. search, query, intensive computation)
- After operation completes, callback will fire and return to requests

:::info
A callback is a function that you can pass to another function to be executed
later. This is a common pattern in web development, since lots of data goes
from the client to the server, and we want to implement certain behavior that fires
after the data is received.
:::

#### Why Node.js?

- Unites front-end and back-end in one language/framework
  - TypeScript/JavaScript
  - Frontend and backend in the same language
- Extremely performant
- Asynchronous and non-blocking
- NPM (Node Package Manager)
  - a directory of many libraries and packages
  - access to huge libraries to use in projects and build upon
  - similar to `pip` in Python, Gradle/Maven in Java, etc (it's okay if you've never heard of these!)

#### Node Package Manager (NPM)

NPM is a dependency manager, like pip for python or maven for java. Think of node packages as recipes made by other people you want to use in your site.
Also part of the open sourced community!

#### package.json

The `package.json` is kind of like a directory for your Node project. It contains
various metadata and information about it, as well as details on what it depends
on, so others can reproduce the behavior of your project.

- Tracks which node packages you use
- **Dependencies**: packages needed at run-time

```
npm install --save <pkg_name>
yarn add <pkg_name>
```

- **devDependencies**: packages used during development (before pushing to production).
  When a "production" or real version gets built prior to deployment, these dependencies
  will not be included. Only install certain tools that ease development in this manner.

```
npm install --save-dev <pkg_name>
yarn add --dev <pkg_name>
```

#### We will use Yarn!

- Faster at installing dependencies in practice
- More optimized

#### NPM vs Yarn commands

- NPM

```
npm init
npm install <pkg_name>
npm uninstall <pkg_name>
npm update <pkg_name>
npm audit
```

- Yarn

```
yarn init
yarn add <pkg_name>
yarn remove <pkg_name>
yarn upgrade <pkg_name>
yarn audit
```

- Very similar
- Audit: checks for vulnerabilities in dependencies

## Express

_Intro to **backend routes**!_

### HTTP Methods

When you want to visit a website in your browser, you send a request to the server asking for information.

- Types
  - POST
  - GET
  - PUT
  - DELETE
  - PATCH
  - (... and more)
- Definitions

  - **POST**: used to submit an entity to the specified resource, often causing a change in state or side effects on server
  - **GET**: requests a representation of the specified resource
    - Should only _retrieve_ data
  - **PUT**: similar to POST request (uploads data), but _idempotently_
    - updates data
    - ie. editing a Facebook post

  An important thing to note with these HTTP "verbs" is that they don't enforce
  their intended properties; i.e. you could theoretically make a `GET` request that
  does `POST` behavior. However, these methods are usually used to develop an API
  that could have multiple users, from your frontend UI to other people using
  your service, so you want them to be as self-documenting as possible.

### Express

- Very popular, lightweight NPM package used as a middle layer for routing HTTP requests
- Middleware that acts as interface between client and server to make it more dynamic

```ts
const express = require('express');
const app = express();

// respond with "hello world" when a GET request is made to
// the homepage (root of website)
app.get('/', function (req, res) {
  res.send('hello world');
});
app.listen(8080, function () {
  console.log('Listening on port 8080');
});
```

### Responding to Requests

One of the first tasks when building a website is responding to the requests that come from the browser. In this lecture, we will be building a basic Node app using Express to interpret requests and respond to them.

Route definition takes the following structure:

```ts
app.METHOD(PATH, HANDLER);
```

Where:
**app** is an instance of express.
**METHOD** is an HTTP request method, in lowercase.
**PATH** is a path on the server.
**HANDLER** is the function executed when the route is matched.

The following code sends “hello world” as a result of a GET request to ‘/' endpoint.

```ts
const express = require('express');
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world');
});
```

#### Route Parameters and Query Parameters

`/route/some-param`

- typically used to identify a **specific** resource

`/route?param=value`

- typically used to **sort/filter** through resources

#### Route Parameters in Express

Take a look at this route, paying special attention to the `:` characters. Those denote parameters in the route.

```ts
app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params);
});
```

For example, if you navigate to the page `/users/34/books/12973`, you would now be able to use those IDs in your code. `req.params.userId` would now equal `34` and `req.params.bookId` would now equal `12973`. This allows you to respond differently depending on IDs passed to you by the front end.

In the following code snippet we use `app.get()` to query a messages endpoint and we want to get a specific message. We call this query parameter `messageId` and can use it in the function we pass to `app.get()` to return that message.

```ts
const messages = {...}
app.get('/messages/:messageId', (req, res) => {
 // messages is an object with an array of message types, with each ID corresponding to its index
 return res.send(messages[req.params.messageId]);
});
```

#### Query Parameters in Express

We can also send information in a request through query parameters.

```ts
app.get('/users/', function (req, res) {
  res.send(req.query.id);
});
```

- Example request:
  `/users?name=samwise`
  - `req.query.name` will be set to "samwise"

#### Multiple Query Parameters

We can define multiple query parameters

```ts
app.get('/products', function (req, res) {
  const name = req.query['name'];
  const maxPriceFilter = req.query['max-price'];
  // do some computation on the backend based on this data
});
```

Notice we can treat queries like objects (ie. the `req.query['name']` syntax).

- Example request: `/products?name=apples&max-price=10`

## How to set up a Node Project

```
yarn init
yarn add <package name>
```

### Initializing a Node project

Let's dive deeper into what happens when you setup a Node project using Yarn.

Navigate to an empty folder where you want your project to be located. I will assume this folder is called `helloworld`.

Run `yarn init` in this folder on the terminal. (Use `cd` to navigate to you `helloworld` folder in terminal)

:::note
Note that we are using `yarn init` rather than `npm init`. We will be using Yarn as our
Node package manager in its class (this is used in production at many companies like Facebook!), and its corresponding commands for installing packages as well.
:::

Upon running `yarn init`, and answering the questions as seen in the previous lecture, we now need to add our dependencies for the project and scripts to start it.

### Installing Dependencies

Node projects don't come with every possible dependency right out of the box. We
will add these with Yarn by using `yarn add <pkg_name>` (which is the equivalent
of `npm install <pkg_name> --save`, but remember we are using Yarn.)

Every time you add a dependency with `yarn add <pkg_name>`, `<pkg_name>` will be added to your dependencies in `package.json` if it can be found. It will also be added to `node_modules/`.

Take a look inside your `node_modules` folder. This is where all your packages will be installed. Notice that even though you just installed one package, multiple packages are in `package.json`. This is because `express` itself has several of its own dependencies that also got installed.

You can find more packages to use on [npmjs.com](https://www.npmjs.com/).

### **Don't Submit `node_modules`!!**

`node_modules` can be potentially hundreds of megabytes of data for packages you installed. It is important to never submit this with your assignment or push it up to any remote repositories such as GitHub. Before submitting an assignment, remember to leave out `node_modules` when zipping your folder. _You will be penalized if `node_modules` is submitted_. Don't worry, we will be able to recover your dependencies simply by running `yarn install`.

## Live Coding Demo

We demoed how to set up a yarn project and create some basic getter HTTP routes.

Set up a yarn project by running `yarn init`. It will ask you a few questions and you can press return to accept all the defaults:

```bash
yarn init v1.22.13
question name (lecture2):
question version (1.0.0):
question description:
question entry point (index.ts):
question repository url:
question author:
question license (MIT):
question private:
success Saved package.json
```

:::tip
You can also use `yarn init -y` to set up a project with all the default values!
:::

This will generate a `package.json` file with all the inputs you provided.

We also want to add several dependencies starting with `express`. Add express with `yarn add express`. Since we are also using TypeScript we want to install the `typescript` and `ts-node` packages as well using `yarn add typescript ts-node`. Finally to get some nice autocompletion features, we want to install `@types/node` and `@types/express` as _devDependencies_ using `yarn add -D @types/node @types/express`.

Your `package.json` should now look like the following:

```json title="package.json"
{
  "name": "lecture2",
  "version": "1.0.0",
  "main": "index.ts",
  "license": "MIT",
  "dependencies": {
    "express": "^4.17.1",
    "ts-node": "^10.2.1",
    "typescript": "^4.4.3"
  },
  "devDependencies": {
    "@types/express": "^4.17.13",
    "@types/node": "^16.10.2"
  }
}
```

Now we can define some basic express routes in a file `index.ts`:

```ts title="index.ts"
import express from 'express';

const app = express();

app.get('/home', function (req, res) {
  res.send('Welcome Home!');
});

// example using path parameters
app.get('/users/:name/:lname', function (req, res) {
  res.send('Hello ' + req.params.name + ' ' + req.params.lname);
});

// example using query parameters
app.get('/users', function (req, res) {
  res.send('Hello ' + req.query.name + ' ' + req.query.lname);
});

// tell express to listen for requests on port 8080
app.listen(8080, function () {
  console.log('server started');
});
```

Add the following to your `package.json`:

```json
// other package.json properties...
"scripts": {
  // other scripts...
  "start": "ts-node index.ts"
}
```

Now when you go to `localhost:8080/home` you should see `Welcome home!`. At
`localhost:8080/users/<your_name>/<your_last_name>` or
`localhost:8080/users/?name=<your_name>&lname=<your_last_name>` you should see
`Hello <your_name> <your_last_name>`.

**This was Node.js (and Express)!**
