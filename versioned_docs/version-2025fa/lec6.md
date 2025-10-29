---
id: lec6
title: Lecture 6
---
Welcome to Lecture 6!

We will introduce Express.js today, which is a backend web framework to help us with routing and middleware security.

Homework: MS1, due Oct 31

[Lecture Slides](https://docs.google.com/presentation/d/1mlzPsMicTSNz97K7VlBi0WkdrKv4BXNGg-xp12Wp9-I/edit?slide=id.g3432863c193_0_4#slide=id.g3432863c193_0_4)

## Intro to Express.js

Now that we understand the difference between what we mean by client side programming and server side programming. Our primary focus for the first 4 lectures was client side programming. Now we’re going to dive deeper into server side programming. One tool we can use to create our own server is a framework called Express.js. Express.js is a minimal and flexible web application framework that provides us a set of features to create our own APIs.

To install Express, run `npm install express` or `yarn add express` in your preferred directory. If you're using `yarn`, make sure `yarn` is properly installed on your local development environment.

### Quick Example

```typescript
import express from 'express';

const app = express();
const port = 8080;
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

Here is a quick example on how to set up the boiler plate code for creating an express server.

We start by importing the express function from the `express` framework that we just installed using npm.

Then we’re going to create a variable called app. This is just an instance of express, which is used to create an application. In our case, we’re using this instance of express to create our server application.

This next line is `app.use(express.json())`. This just automatically parses any incoming requests into JSON objects. This makes it easier to handle data sent from the client.

There’s an interesting line `app.use(cors());` This line enables the express app to respond to something called preflight requests. A preflight request is something like an OPTION request sent to the server before the actual request is sent. An OPTION request is an HTTP method that is sent by browsers to find out what methods are allowed by the server. This allows clients to obtain any parameters and requirements for specific resources and server capabilities that might be necessary. This is just an aside and isn’t crucial. If you’re interested in learning more about OPTION requests, come to office hours! Basically, this line allows our server to be accessible to any domain that requests a resource from our server via a browser. This basically relaxes the security applied to an API. These CORS errors can get really painful, so remember to add this line if you run into them.

The next section is where we’re actually creating our API endpoints. Using the app instance, we’re going ot create a `GET` endpoint with the location at the root, which is indicated by the string in the function. Then here is some interesting syntax, which I will go into in more detail later. Essentially, we’re creating a `GET` endpoint at the root path and then sending a response to the client saying “Hello World”

Finally, this last section is where our server application will actually listen for any connections from clients on the specified port, which we indicated before as `8080`. When our server is up and running, we will console log “Server listening on port `[insert port number]` in this case it’s `8080`. This function will constantly listen for any connections being made.

When running the application with `npm start`, the server will be listening on `http://localhost:[insert port number here]`.

### Routing

Routing determines how our server responses to a client request to particular endpoint. An endpoint simply consists of a URI (or path) and a specific HTTP request method (`GET`, `POST`, `PUT`, `DELETE`)

```typescript
app.[METHOD]([PATH], [HANDLER])
```

#### GET Endpoint

```typescript
app.get('/', (req, res) => {
  res.send('Hello World!');
});
```

Here we go back to the get request that we saw previously. Essentially here again we have a `GET` request with the path at the root. We could change this string to anything we want. Then the next parameter is the handler, which is a call back function that is executed when the route is matched. So, when the client makes a `GET` request to the root path of our server running on port 8080, the server will match that request to this function right here and call the handler. The req and res objects are created automatically by the framework and is passed as an argument to route handler functions.

The handler takes in the request object and a response object as parameters and executes the body of this function. The request object represents an HTTP request and contains any data that the client may have sent over to the server (query strings, parameters, body, HTTP headers, etc). This isn’t applicable to `GET` request since `GET` requests are only used to request data. But, we will look at other method types later. The second parameter is the response object which represents the HTTP response object the server will send back to the client. So, this in example, when the client request is routed to this handler, the server will send an object containing the string `Hello World.`

#### POST Endpoint

```typescript
app.post('/', (req, res) => {
  	const body = req.body
res.send(‘This is a POST request’)
})
```

Here we have a `POST` request with the path at the root. We are allowed to have multiple endpoints with the same path they just have to be different HTTP methods. So, we can have a `GET` endpoint and a `POST` endpoint at the same path. But, we cannot have two `GET` endpoints with the same path.

#### PUT Endpoint

```typescript
app.put('/user', (req, res) => {
  const body = req.body;
  const username = req.body.username;
  res.send('This is a PUT request');
});
```

Here we have a `PUT` request with the path at `/user`.
Here the handler will get the variable called body to the req.body, which represents any data that the client may have sent over to the server at this endpoint. The handler also sets a constant called username to the username parameter sent in through the body of the client’s HTTP request. Then the handler will send a response back saying `This is a PUT request.` A `PUT` request is typically used for updating data, we will take more of a deep dive into all this in the next lecture when we talk about databases.

#### DELETE Endpoint

```typescript
app.delete('/user/:id', (req, res) => {
  res.send('This is a delete request for id ${req.params.id}');
});
```

Here we have a `DELETE` request with the path at “/user/:id”. This is an interesting path because we have :id. Here we have defined a route that takes in a parameter called id. When we visit something like /user/1, the server will respond with `This is a DELETE request for id 1.` You can include parameters into any endpoint path for your server and read them from the request object sent from the client’s HTTP request. This is an example of a dynamic route.

## Postman

In order to test our APIs and make sure that they are responding appropriately for certain routes, Postman is a great tool for sending and receiving API requests directly to and from the server.

Postman is an API platform used for building and using APIs.

[Download here](https://www.postman.com/)

## Sample code

This week's sample code starter can be found in the files under [this directory](https://github.com/cornell-dti/trends-mono-fa25).
