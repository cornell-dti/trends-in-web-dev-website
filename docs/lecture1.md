---
id: lecture1
title: Lecture 1
---

[Lecture Slides](https://docs.google.com/presentation/d/1hkIoGdaiNgzZwTkAWp3VW5ufsQaVeGzN7eHmULhyWpI/edit?usp=sharing)

[Assignment 1](https://github.com/ashneeldas2/trends-sp20/tree/master/Assignments/a1) due **2/19 7:59pm**

## Introduction to HTTP Methods

When you want to visit a website in your browser, you send a request to the server asking for information. These requests have different types including POST, GET, PUT, PATCH, and DELETE. We'll primarily be concerning ourselves POST and GET. Here are MDN's definitions:

- GET - The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
- POST - The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.

You can see more details as well as the rest of the methods at the [official site](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).

## What is Node?

> Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
> Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

### That didn't answer my question.

Node is a program that will interpret your Javascript and is commonly used for web servers.

Node serves as a way to unify the frontend and the backend in one language/framework. On the frontend we have many JavaScript libraries like React, Angular, Vue and on the backend we have Express, Koa, Happi.

## Responding to Requests

One of the first tasks when building a website is responding to the requests that come from the browser. In this lecture, we will be building a basic Node app using Express to interpret requests and respond to them.

Route definition takes the following structure:

```javascript
app.METHOD(PATH, HANDLER);
```

Where:
app is an instance of express.
METHOD is an HTTP request method, in lowercase.
PATH is a path on the server.
HANDLER is the function executed when the route is matched.
The following code sends “hello world” as a result of a GET request to ‘/' endpoint.

```javascript
const express = require('express');
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});
```

## Custom URLs

We can respond differently for requests to different URLs. For example, if we wanted ‘/home' to respond with “Welcome Home!” we could add a second route.

```javascript
app.get('/home', function(req, res) {
  res.send('Welcome Home!');
});
```

Both of these blocks of code respond to GET requests, because we are using Express's `app.get()` function. We tell express what route we want to trigger the response and give it a function that should be run to respond.

https://expressjs.com/en/starter/basic-routing.html

### POST methods

POST method is generally used to submit data to an endpoint.

The following uses Express's `app.post()` method to send a POST request to ‘/' and responds with ‘Got a POST request'. Notice that `app.post()` has a second argument that is a function with two parameters, `req` and `res`. Usually, when you call POST you want to send data with the request. You would send that data as the `req` parameter.

```javascript
app.post('/', function(req, res) {
  res.send('Got a POST request');
});
```

### Regular Expressions

You can match patterns in text rather than specific characters. For example, what if you want to return the same page for all URLs of `/users/[SOME NUMBER]`? We can use regular expressions so that the route will be used for any value. We can use the route string `/users/\d+` to match any number. Regular expressions are outside the scope of this class, but you may find more information in the references below.

### Parameterized Routes

Take a look at this route, paying special attention to the `:` characters. Those denote parameters in the route.

```javascript
app.get('/users/:userId/books/:bookId', function(req, res) {
  res.send(req.params);
});
```

For example, if you navigate to the page `/users/34/books/12973`, you would now be able to use those IDs in your code. `req.params.userId` would now equal `34` and `req.params.bookId` would now equal `12973`. This allows you to respond differently depending on IDs passed to you by the front end.

In the following code snippet we use `app.get()` to query a messages endpoint and we want to get a specific message. We call this query parameter `messageId` and can use it in the function we pass to `app.get()` to return that message.

```javascript
const messages = {...}
app.get('/messages/:messageId', (req, res) => {
 return res.send(messages[req.params.messageId]);
});
```

## References

Don't know where to start? Check out [Express's official getting started page](https://expressjs.com/en/starter/installing.html). The rest of the pages have great content and will help you along your journey.

For a more in-depth exploration of this topic, check out [this tutorial](https://www.robinwieruch.de/node-express-server-rest-api).

[This](http://forbeslindesay.github.io/express-route-tester/) is a useful tool to test your Express regular expressions to make sure that the routes match what you expect.

For an interactive way to learn regular expressions, [consider this site](https://regexone.com/).
