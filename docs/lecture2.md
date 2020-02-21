---
id: lecture2
title: Lecture 2
---

[Lecture Slides](https://docs.google.com/presentation/d/1DOnubRBOjOE8JWchbZziMK4COBPXyLq5MBfcTE2ZVRc/edit?usp=sharing)

No assignment this week; enjoy your break!

## How to set up a Node project

### Initializing a Node project

Here I will be walking you through how to set up a Node project.

Navigate to an empty folder where you want your project to be located. I will assume this folder is called `helloworld`.

Run `yarn init` in this folder on the terminal. (Use `cd` to navigate to you `helloworld` folder in terminal)

Upon running `yarn init`, you should be prompted to answer eight questions. Hit enter each time, we will use the default answer for all of these questions:

```bash
yarn init v1.19.2
question name (helloworld):
question version (1.0.0):
question description:
question entry point (index.js):
question repository url:
question author:
question license (MIT):
question private:
success Saved package.json
✨  Done in 16.19s.
```

In the end, these questions create a `package.json` file. Your `package.json` should like this:

```json
// package.json
{
  "name": "helloworld",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}
```

The `package.json` is very important. It contains all the metadata about your project. Notice that the name, version, main, and license match the default responses we gave `yarn init`. For future projects, you may want to have more specific values for these keys, but for now the defaults will suffice.

`package.json` essentially acts as an ingredients list for your project. It contains all dependencies your project needs and instructions for how to start and build your project.

### Installing Packages

Lets try installing a package. In the first assignment we asked you to use `express`. Install `express` by running:

`yarn add express`

After installation completes, take a look at your `package.json`:

```json
{
  "name": "test",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

Notice that `express` was added to our dependencies. Now `express` is available for you to use in your project!

Every time you add a dependency with `yarn add <pkg_name>`, `<pkg_name>` will be added to your dependencies in `package.json` if it can be found. It will also be added to your `node_modules`.

Take a look inside your `node_modules` folder. This is where all your packages will be installed. Notice that even though you just installed one package, multiple packages are in `package.json`. This is because `express` itself has several dependencies that also got installed.

You can find packages to use on [npmjs.com](npmjs.com).

### **Don't Submit `node_modules`!!**

`node_modules` can potentially hundreds of megabytes of data on packages you installed. It is important to never submit this with your assignment or push it up to any remote repositories such as GitHub. Before submitting an assignment, remember to remove `node_modules` from the folder and then zip it and submit the zip file. _You will be penalized if `node_modules` is submitted_. Don't worry we will be able to recover your dependencies simply by running `yarn install`.

### Removing packages

Lets say you made a typo installing `express` and you instead ran

`yarn add experss`

Your `package.json` should look like this:

```json
{
  "name": "test",
  "scripts": {
    "start": "node app.js"
  },
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "express": "^4.17.1",
    "experss": ""
  }
}

```

Unfortunately, some malicious developer capitalized on this typo mistake and made `experss` an actual package. How do you remove experss?

There are two ways. First, you can just run `yarn remove experss`. This will remove `experss` from your `package.json` and your `node_modules` folder.

### `yarn install`

Another way is to delete `experss` manually from your `package.json`. (Just delete the line that has `experss`). This won't actually get rid of the package from your `node_modules`.

To update your `node_modules`, first delete your `node_modules` folder and then run

`yarn install`

This fetches all your dependencies again based on your `package.json` and since `experss` is no longer there, it is not installed.

## More Express and HTTP Methods

Now that we have our Node project set up, we can start writing our first script using JavaScript and express.

### GET Request

Lets make a simple endpoint that gets the value of a variable `x`.

Create a new file called `index.js` and add the following:

```js
// index.js
const express = require('express');
const app = express();
let x = 0;

app.get('/getX', function(req, res) {
        res.send(x + "");
});

app.listen(8080, function(req, res) {
        console.log('Hello, World!')
});
```

This should be familiar. The first line loads in the `express` dependency and the second line initializes `express`. We declare a variable called `x` that we will be accessing and updating in this example.

`app.get` specifies that any `GET` requests sent to the endpoint `/getX` will send back the value of `x`.

Lastly, `app.listen` starts the server on port 8080 asking it to listen for requests.

Lets test this script by running `node index.js` in the terminal at your `helloworld` directory.

`Hello, World!` should be printed on the terminal showing that the port is up and running and listening for requests.

Use your web browser to navigate to `localhost:8080/getX`. You should see the value of `x`, 0, on the page.

You can terminate the running of the script using CTRL/Command+C.

### Postman

Instead of always going to the endpoint in the browser, a robust way of testing our endpoints is to use Postman.

Postman is a software that allows you to simulate requests that could be sent by a user to your backend. It is useful for testing and ensuring that the behavior of your requests (including necessary headers) is what you expect.

Download Postman [here](https://www.postman.com/downloads/).

Once you have Postman set up, make a request to the `/getX` endpoint by setting the request type as `GET` and the url as `localhost:8080/getX`. You should see 0 in the response body.

### POST Request

Another type of request we talked about was a POST request, used to send data to the backend. Here we will use a POST request to update our variable `x`.

Add the following to your `index.js` file after your `app.get` call:

```js
// index.js
app.post('/addOne', function(req, res) {
        if (req.query.variable === 'x') {
                x += 1;
                res.send(x + "");
        } else {
                res.send('We do not have that variable! :(');
        }
});
```

This code block tells `express` that if it receives a POST request at `/addOne` it should check if a query parameter was provided and if that parameter is `x`, increment `x` and send that new value of `x` back. Essentially, if we navigate to `localhost:8080/addOne?variable=x`, `x` will be incremented and the new value will be sent back. Notice that we are using a query variable `variable`. If we don't provide this query parameter or don't set it to `x`, the result shown will be `We do not have that variable! :(`

Using Postman, we can check this endpoint by setting the request type as `POST` and sending the request to `localhost:8080/addOne?variable=x`. You should see `x` incremented. Sending a `GET` request to `localhost:8080/getX` should return the same value. Alternatively, if we try sending a `POST` request to `localhost:8080/addOne?variable=y` or `localhost:8080/addOne`, you will see `We do not have that variable! :(`.

### Request Bodies

Usually when you want to send a `POST` request you also want to send information with it. We can do this using request bodies.

To do this, we will need to use another package `body-parser`. `body-parser` should already be installed with `express`, but if not you can run `yarn add body-parser`.

We can import it into our script using `const bodyParser = require('body-parser');` and tell express to use it to parse JSON input using `app.use(bodyParser.json());`.

Your index.js should now look like the following:

```js
// index.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let x = 0;

app.get('/getX', function(req, res) {
        res.send(x + "");
});

app.post('/add1', function(req, res) {
        if (req.query.variable === 'x') {
                x += 1;
                res.send(x + "");
        } else {
                res.send('We don\'t have that variable! :(');
        }
});

app.listen(8080, function(req, res) {
        console.log('Hello, World!')
});
```

Now we can add the following function:

```js
app.post('/updateVar', function(req, res) {
        x = req.body.x;
        res.send(x + "");
});
```

This tells `express` to listen for `POST` requests at endpoint `/updateVar`. `req.body.x` is the request body and we update our local variable `x` to that value and send it back.

We can check that this endpoint is working using Postman. Set the request type to `POST` and url as `localhost:8080/updateVar`. To send a request body, first go to Headers and add a new key `Content-Type` with value `application/json`. This says we are sending JSON input (essentially, an object of dictionary) in our request body. In the Body section, select the raw radio button and enter the following in the text field:

```json
{
  "x": 3000
}
```

We will be sending `x` with a value of 3000 in the request body.

Sending this request, you should see 3000 printed in the request body.

## Intro to Databases and Firebase

### Why do we need a database for our backend?

- Data stored within Node.js is per instance
- Most applications require persistence
- Data analysis
- Performant data location
- Offloading unneeded data from memory

### MySQL + Relational Databases

- Stores data in tables, utilizing rows and tables.
- Is relational (think a tuple)
- Has a schema

### NoSQL and Firestore

We will focus on NoSQL

- Many NoSQL implementations are schema-less or have a partial schema
- Firestore is a cloud-hosted NoSQL database
- Very flexible and can be used with most popular languages
- Uses documents to store data
- Efficient querying for data

### SQL vs NoSQL

- SQL databases have a predefined schema, whereas NoSQL databases can abide to any structure you want it to.
- NoSQL databases are better suited for large sets of data, but not for complex queries.
- SQL databases tend to be less expensive for smaller datasets, but also less flexible.
- SQL has strong consistency whereas NoSQL has eventual consistency (i.e. there may be some delay in getting the response back)
- SQL is vertically scalable (need more computing power on one machine to store more data) while NoSQL is horizontally scalable (can distribute storage and compute power on multiple machines)

### What is Firebase?

- Firebase is a Backend as a Service (BaaS) offered by Google
  - Allows you to store data
  - Host websites
  - Authentication
- NoSQL DB
  - Not only SQL
  - Non relational

### Why Firebase?

- Real-time operations
- Firebase Authentication
- Built-in analytics
- Also supports hosting/deployment
- Integration with other Google services
- Structure we’re familiar with!
