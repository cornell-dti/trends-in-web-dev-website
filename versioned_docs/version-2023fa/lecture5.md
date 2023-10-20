---
id: lecture5
title: Lecture 5
---

[Lecture Slides](https://docs.google.com/presentation/d/1HyzeRweOAhfW3fjxfk9IfRqMLVVnEZFqEQ0HlkK3w5Y/edit?usp=sharing)

## Data Fetching

Data fetching is **getting information (data) from an outside source (e.g. REST API)**

In this lecture we'll be discussing how to fetch data through traditional HTTP
requests (so far the most popular way), but keep in mind that there are other
ways to fetch data out there, which we will cover later.

### HTTP Requests and Responses

So far, the information we've talked about has been mostly about the client side of a web application. Clients are computers users use to access our web applications (phones, tablets, laptops, gaming consoles, etc). Client side refers to the **processing that takes place locally** on the user's machine where the client can see the results. So, tasks that requires browsers to run scripes on the client machine without involving any processing on the server are client side tasks. Examples of client side operations are rendering images, registering user input, or clicking buttons.

In the final half of he course, we will be talking about the server side of a web application. Servers are also computers, however servers centralize information and run code to communicate with multiple clients in addition to executing operations on data. So, server side refers to the processing that is **not visible** to the client and is done on the server. So, tasks such as validating submitted data and requests, storing and retrieving data from databases, and sending corrent data to the client are all examples of server side operations.

![client server model](/img/lec6/client-server-model.png)

#### Requests

HTTP requests require one method that indicates the type of request being sent and how to handle the request. The most common methods used are:

- **`GET`**: retrieving information
- **`POST`**: sending information with the request
- **`DELETE`**: deleting information
- **`PUT/PATCH`** updating information

Metadata can be put in the _body_ of a request and can be written in many forms (most common is JSON or XML). For example, a `POST` request to login into a users' account will likely contain account information such as an email and pasword to be authenticated on the server in the body.

Tools like [Postman](https://www.postman.com/) allow you to make these requests. So, if you're ever building a backend server, you can test that your API routes are working.

#### Responses

After sending a HTTP request, the server will respond with a specific status code to give us a general summary of how the request was handled. This helps us determine whether a request was successful or why it was unsuccessful.

##### Most common response codes:

| Code | Meaning                                    |
| ---- | ------------------------------------------ |
| 200  | Successful                                 |
| 404  | Not found                                  |
| 500  | Internal server error (uncaught exception) |

For a more comprehensive list, click [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

### How do we fetch (in React)?

So how do we fetch data with our React frontend?

Two important things to note:

1. Modern browsers have a nifty little JavaScript function called `fetch` that
   you can use to call API endpoints. Libraries such as `axios` provide similar
   functionality. There are also libraries like `swr` that provide easy ways to
   re-fetch resources automatically.

2. The `useEffect` React hook allows you to trigger side effects, such as
   fetching data!

We want to keep track of our data in our component state, and use hooks like
`useEffect` to `fetch` the data and update the state accordingly!

### Fetching Example

Consider this snippet of code:

```tsx
// This corresponds to the type of data you expect to get back in your response
type DataType = readonly string[];

const App = () => {
  const [data, setData] = useState<DataType>([]);

  useEffect(() => {
    fetch(`${API}`)
      .then((res) => res.json())
      .then((d) => setData(d));
  });
  // ... other methods, return, etc
};
```

Here are the important parts:

- We have `data` in our component state. Later, we call `setData` on what the
  backend sends to us.
- We declare a type definition for the `useState` call so that TS knows the type
  of data we're working with. (It can't infer type from an empty array!)
- The `useEffect` hook is used to subscribe to new data.
- `fetch(...)` is called on an API link, followed by `.then(...)` calls that
  format the response into json and then `setData` to the response. The
  `.then()` calls exist because `fetch()` returns a `Promise` (this is explained
  below)

Let's take a deeper look at `fetch`!

### `fetch`

"stop trying to make fetch happen 👧"

`fetch(resource, [init])` is a native browser function for making web requests.

Its params are:

- `resource`: URL of the site you are fetching from
- `init`: _optional_ object containing any custom settings you want to apply to
  the request.

```tsx
fetch(
  url,
  // your init object might look like this
  {
    // HTTP request method
    method: 'GET', // | 'POST' | 'PUT' | 'DELETE' | etc
    // Any request headers you want to add
    headers: {
      'content-type': 'application/json',
    },
    // Request body (remember to stringify!)
    body: JSON.stringify(requestBody),
    // ... other settings
  }
);
```

- For more on the init object, refer to
  [this link](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)!

**IMPORTANT: fetch() returns a PROMISE!**

### Promises

Operations like web requests don't complete instantly! So, while the request is being completed, you want the browser to work on other more important tasks instead of stalling everything and waiting until the operation is complete.

Promises represent the **eventual** completion (or failure) of an async operation. What does async mean?

_async_: the result arrives at an unspecified time, outside the sequential execution context of the rest of your code

Promises are in one of three possible states:

- `pending`: initial state; neither fulfilled nor rejected
- `fulfilled`: operation completed successfully
- `rejected`: operation failed

#### `.then()`

`.then()` is a function on Promises that return a promise.

```tsx
p.then(onFulfilled, onRejected);
```

Let's break this down!

- `p` is a Promise.
- `onFulfilled` is the callback function that is run when `p` is fulfilled
- `onRejected` (OPTIONAL) is the callback function for when `p` is rejected

```typescript
p.then(
  (value) => {
    // fulfullment handler
    console.log('Success');
  },
  (reason) => {
    // rejection handler
    console.log('Rejected');
  }
);
```

You don't usually have to include an rejection handler since the `.catch()` method is an alternative you will typically use to handle rejections and errors. More on that later...

Let's talk about types! `p` in this case might be `fetch()`, which returns the
type `Promise<Response>`. If so, then `value` would have the type `Response`.
Then, if the fulfillment handler (which takes in `value`) returns type
`string`, then the entire expression would be type `Promise<String>`.

If you've taken CS 3110 or done some functional programming outside of this
class/category theory, this might make you think of
Monads/Applicatives/Functors. The specified behavior for `Promise`s in JS/TS
don't exactly follow the laws of what was just listed, but for learning purposes
it may be helpful to roughly compare the `then` function to `fmap` or `bind`.

If you're interested, take a look at this snippet and notice how the types
behave:

```typescript
// promise: Promise<Response>
const promise = fetch('something');

// kindaFunctor: (res: Response) => number
const kindaFunctor = (res: Response) => res.status;

// kindaMonad: (res: Response) => Promise<string>
const kindaMonad = (res: Response) => res.text();

// newPromise1: Promise<number>
const newPromise1 = promise.then(kindaFunctor);

// newPromise2: Promise<string>
const newPromise2 = promise.then(kindaMonad);
```

#### `.catch()`

`.catch()` is a function on Promises that catches a rejection.

```tsx
p.catch(onRejected);
```

For example, you might want to `console.log` errors:

```tsx
fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then(...)
  .catch((err) => console.log(err));
```

Note that `onRejected` takes a parameter of type `any`, since we don't know the
type of the error we will get.

#### Using `.then()` with `fetch()`

`fetch()` returns a `Promise` that resolves to a `Response` object.

Consider this snippet, similar to one shown above:

```tsx
fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then((res) => res.json())
  .then((d) => setData(d))
  .catch((err) => console.log(err));
```

We can have multiple `.then()` calls within each other! Here we are getting the response from an endpoint **and then** calling `.json()`
on the response **and then** calling `setData` on the result of `json()`.

If a promise gets rejected anywhere along this chain, we will log the error in
our console.

### async/await

If you have too many `.then()` calls within each other, you might build a
PYRAMID OF DOOM ☠.

By adding the `async` keyword to a function, we make it an _asynchronous_
function. Within `async` functions, we can use the `await` keyword to wait for a
Promise to return before continuing on to the next statement within the
function.

Here is an example of doing equivalent things with either syntax:

```tsx
const thenCatchExample = () => {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => res.json())
    .then((d) => setData(d));
};

const asyncAwaitExample = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const d = await res.json();
  setData(d);
};
```

In order to handle rejected Promises using async/await, just wrap all your await
statements in a [try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block!

Like this:

```tsx
try {
  asyncAwaitExample();
} catch (error) {
  // display any errors that may occur from async/await function
  console.error(error);
}
```

### Quick Postman Demo

Check out Postman to send API requests! [Here](https://www.postman.com/)

## Live Demo Material

You can get the starter code for the live demo by running:
`yarn create next-app --typescript --example "https://github.com/cornell-dti/trends-sp23-lec6-demo" YOUR_DIR_NAME`

(Replace YOUR_DIR_NAME with whatever you want to name your directory!)
