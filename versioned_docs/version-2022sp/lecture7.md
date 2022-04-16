---
id: lecture7
title: Lecture 7
---

[Lecture Slides](https://docs.google.com/presentation/d/11pBxUz-CxxT3kQdTvZKewqxzIbhJXgZPUhDILi7n7Ms/edit?usp=sharing)

[Assignment 4](/docs/assignment4) (Due 4/22 at 11:59pm)

[Final Project Team Matching Form](https://docs.google.com/forms/d/e/1FAIpQLScq9DA5jLy1TnvEWqG-DCz5FvOV8tzLyCvKs93ifu0UbjW0UA/viewform) due **Friday, 4/22 at 11:59 PM** (no slip days)

## Promises

Operations like web requests don't complete instantly! You want to do other stuff
while the operation is still going on.

Promises represent the **eventual** completion (or failure) of an async operation.

Promises are in one of three possible states:

- `pending`: initial state; neither fulfilled nor rejected
- `fulfilled`: operation completed successfully
- `rejected`: operation failed

### `.then()`

`.then()` is a function on Promises that return a promise.

```typescript
p.then(onFulfilled[, onRejected])
```

Let's break this down!

- `p` is a Promise.
- `onFulfilled` is the callback function that is run when `p` is fulfilled
- `onRejected` (OPTIONAL) is the callback for when `p` is rejected

```typescript
p.then(
  (value) => {
    // fulfillment
  },
  (reason) => {
    // rejection
  }
);
```

Let's talk about types! `p` in this case might be `fetch()`, which returns the
type `Promise<Response>`. If so, then `value` would have the type `Response`.
Then, if the fulfillment function (which takes in `value`) returns type
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

### `.catch()`

`.catch()` is a function on Promises that catches a rejection.

```typescript
p.catch(onRejected);
```

For example, you might want to `console.log` errors:

```typescript
fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then(...)
  .catch((err) => console.log(err))
```

Note that `onRejected` takes a parameter of type `any`, since we don't know the
type of the error we will get.

### Using `.then()` with `fetch()`

`fetch()` returns a `Promise` that resolves to a `Response` object.

Consider this snippet, similar to one shown above:

```typescript
fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then((response) => response.json())
  .then((d) => setData(d));
  .catch((err) => console.log(err))
```

Here we are getting the response from an endpoint **and then** calling `.json()`
on the response **and then** calling `setData` on the result of `json()`.

If a promise gets rejected anywhere along this chain, we will log the error in
our console.

### async/await

If you have too many `.then()` calls within each other, you might build a
PYRAMID OF DOOM ☠.

Adding the `async` keyword to a function designates that function as an
asynchronous function

Within these `async` functions we can use await to designate which lines need to
be “awaited” upon to resolve

```typescript
// .then
const fetchData = () => {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
    .then((d) => setData(d));
};

// async/await
const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  setData(posts);
};
```

### I still don't understand Promises

Let's say you are at a store and you want to know whether the store has
something in stock. So you ask an employee named Joe and he **promises** you
that he'll be back with the results.

You are now waiting for Joe to come back. The Promise will be **pending** for as
long as Joe is gone.

Let's say Joe comes back with the results. Now you know whether the store is in
stock or not. Now the Promise is **fulfilled**.

Let's say Joe doesn't come back with the results. Unfortunately an anvil fell on
him or something. Now you know that Joe will not come back with the result. Now
the Promise is **rejected**.

## Intro to Databases and Firebase

A lot of the apps we have been making work and maintain states throughout the
lifetime of the app, but lack one critical feature - if we restart the app
or refresh the page, all of our data disappears! We need
some kind of persistent storage for this data: through—you guessed it—a
database.

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

- SQL databases have a predefined schema, whereas NoSQL databases can abide to
  any structure you want it to.
- NoSQL databases are better suited for large sets of data, but not for complex
  queries.
- SQL databases tend to be less expensive for smaller datasets, but also less
  flexible.
- SQL leans towards strong consistency whereas NoSQL favors eventual consistency
  (i.e. there may be some delay in getting the response back)
- SQL databases tend to be vertically scalable (need more computing power on one
  machine to store more data) while NoSQL databases tend to be horizontally
  scalable (can distribute storage and compute power on multiple machines)
- Examples of SQL databases: MySQL, PostgreSQL
- Examples of NoSQL databases: Firebase, MongoDB

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

## Basic Database Manipulations

Let's finally start talking about how we can perform operations on our database
using Typescript.

### Firestore Data Model

Firstly, a Firestore database is NOSQL, document-model database generally comprised of multiple collections,
which may house differing data. To take a simplified example, a Cornell database
could have some of the following collections: `people`, `courses`, `locations`.
Certain collections may be broken up into multiple collections, such as breaking
up `people` into `staff` and `students` or even into subcollections, which we will
not discuss but they exist for those who are interested, as we could simply distinguish
different people with a field, such as `role: Student | Staff`. The id of a collection,
which is what is used to access it, is generally a descriptive name of the collection.

A typical model, including that of Firestore, has collections comprised of documents,
or docs for short, which would be the "items" we want to store. Going back to our
Cornell example, our `people` collection would probably have documents pertaining
to students or staff at Cornell, with each document being uniquely identified
by a unique id, like netid. Within each document, we may have fields like `age`
and `address`, so in this way, documents can be thought of as Objects. But as you
may have already noticed, some documents would have fields that others don't - students
may have a `major` field while staff may have a `salary` field. As it turns out, that's
totally ok! Generally speaking, having more uniform document fields across a collection
gives stronger guarantees about each document and is often a more natural fit, but Firestore
does not require us to have uniform fields within all the documents of a collection, which gives
us a layer of flexibility.

Using the following code, we can create references to both the `people` collection and
specific docs such as the `jt568` doc (which represents me!).

```typescript
const peopleCollectionRef = collection(db, 'people');
const jasonDocRef = doc(db, 'people', 'jt568');
```

For a graphical representation, we can take a look at the
[slide 38](https://docs.google.com/presentation/d/11pBxUz-CxxT3kQdTvZKewqxzIbhJXgZPUhDILi7n7Ms/edit#slide=id.g1244a223d85_0_93)
of Lecture 7. In this example, we are looking at the `peter` doc (the doc's id
is `peter`) and this document is under the `users` collection (the collection's
id is `users`). The fields for the `peter` document are `full_name` and `year`.
Typically it would not be good practice to just use a first name as a document id
because that may not be unique, but we used it anyways for simplicity of demoing.

### Firestore Operations

We generally refer to database operations as `CRUD`, which stands for:

- **C**reate/Insert - Create a document (will fail if the document exists)
- **R**ead/Find/Query - To search for documents based on their properties
- **U**pdate - Update an existing document (will fail otherwise)
- **D**elete - Delete an existing document

### Create

To create a document in Firestore, we primarily use the `setDoc` function.
Here's an example of setting a document in our `people` database.

```typescript
await setDoc(jasonDocRef, { year: '2023', notes_writer: true });
```

`setDoc` will write to the document `jason` within the `people` collection, creating it
if it does not yet exist.

An alternative approach if you strictly want to add and never overwrite a doc is `addDoc`.
Here's the same code but using `addDoc`.

```typescript
await addDoc(peopleCollectionRef, { year: '2023', notes_writer: true });
```

Note, though, that using the latter means the `doc.id` generated will be random, so
you would probably want to add the name into a field. The same behavior with autogenerated ids
can be replicated with setDoc by omitting the name of the document in the `doc()` call.

### Read

To read data in Firestore, we first need to take a snapshot of the data we want to read. Then,
we check if that snapshot of the document we want actually exists before trying to extract its data.

Here's a simple example logging my data. Notice I log `docSnap.data()` and not `docSnap` because
the former is where the data actually resides.

```typescript
const docSnap = await getDoc(jasonDocRef);
if (docSnap.exists()) {
  console.log('Document data:', docSnap.data());
} else {
  console.log('No such document!');
}
```

We can also perform querying on collections, where we filter the database with certain
criteria. Here's a simple example of looking for all people in `people` who are in the year 2023.

```typescript
const query = query(peopleCollectionRef, where('year', '==', 2023));
const querySnapshot = await getDocs(query);
querySnapshot.forEach((doc) => {
  console.log(doc.id, ' => ', doc.data());
});
```

Line by line, we first construct a query for the collection that narrows it down for us.
Next, we take a snapshot of all such documents in the query, and lastly, we perform the same
`doc.data()` approach. We do not need to check if each doc exists because we are using a for loop,
and if a doc does not exist, it simply would not be part of the for loop.

We can also order our search results. Here is an example of ordering by alphabetical order descending.

```typescript
const query = query(peopleCollectionRef, orderBy('name', desc));
// using getDocs to get all documents that match
const querySnapshot = await getDocs(query);
querySnapshot.forEach((doc) => {
  console.log(doc.id, ' => ', doc.data());
});
```

We can actually combine multiple `queryConstraints` (like `where` and `orderBy`)
by listing them out as multiple parameters within `query`.

### Update

Updating a document will only replace the specified fields within a doc and maintain
unmodified fields. So the following code keep the `notes_writer` field but change `year` and
`cat_or_dog`.

```typescript
await updateDoc(jasonDocRef, { year: '2022', cat_or_dog: 'cat' });
```

### Delete

Deleting a document removes it from the collection.

```typescript
await deleteDoc(jasonDocRef);
```

## Sample code

```typescript title="index.ts"
import admin from 'firebase-admin';
import express from 'express';

// require the service account: note the file path
const serviceAccount = require('../service-account.json');
// initialize the firebase app
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const app = express();
const port = 8080;
// allow request body parsing
app.use(express.json());

// check connections
app.get('/', (_, res) => {
  res.send('connected!');
});

// create a post type and post with id
type Post = {
  content: string;
  name: string;
};

type PostWithID = Post & {
  id: string;
};

// CRUD with firestore
let posts1: Post[] = [{ content: 'I miss wellness days', name: 'Becky' }];

// posts collection from db
const postsCollection = db.collection('posts');

// GET requests: get the songs
app.get('/getPostsLocal', (_, res) => {
  res.send(posts1);
});

// use firebase instead
app.get('/getPostsFirebase', async (_, res) => {
  const postsSnapshot = await postsCollection.get();
  const allPostsDoc = postsSnapshot.docs;
  const posts: PostWithID[] = [];
  for (let doc of allPostsDoc) {
    const post: PostWithID = doc.data() as PostWithID;
    post.id = doc.id;
    posts.push(post);
  }
  res.send(posts);
});

// read posts by name
app.get('/getPosts/:name', async function (req, res) {
  const name = req.params.name;
  const postsSnapshot = await postsCollection.where('name', '==', name).get();
  const allPostsDoc = postsSnapshot.docs;
  const posts: PostWithID[] = [];
  for (let doc of allPostsDoc) {
    const post: PostWithID = doc.data() as PostWithID;
    post.id = doc.id;
    posts.push(post);
  }
  res.send(posts);
});

// read posts by id
app.get('/getPostById/:id', async function (req, res) {
  const id = req.params.id;
  const postsSnapshot = await postsCollection.doc(id).get();
  const post: PostWithID = postsSnapshot.data() as PostWithID;
  res.send(post);
});

// sort posts in descending order by name
app.get('/getPostsSorted', async function (req, res) {
  const postsSnapshot = await postsCollection.orderBy('name', 'desc').get();
  const allPostsDoc = postsSnapshot.docs;
  const posts: PostWithID[] = [];
  for (let doc of allPostsDoc) {
    const post: PostWithID = doc.data() as PostWithID;
    post.id = doc.id;
    posts.push(post);
  }
  res.send(posts);
});

// POST method: create a new post
app.post('/addPostLocal', (req, res) => {
  const post: Post = req.body;
  posts1.push(post);
  res.send(`Post created by ${req.body.name}!`);
});

// generate a document with a random name to store the post's data
app.post('/addPostFirebase', async function (req, res) {
  const post: Post = req.body;
  const postDoc = postsCollection.doc();
  await postDoc.set(post);
  res.send(postDoc.id);
});

// POST method: update an existing post
app.post('/updatePostLocal', (req, res) => {
  for (let post of posts1) {
    if (post.name === req.body.name) {
      post.content = req.body.content;
    }
  }
  console.log(posts1);
  res.send('content updated!');
});

// update by id
app.post('/updatePostFirebase/:id', async function (req, res) {
  const newPost: Post = req.body;
  const id: string = req.params.id;
  await postsCollection.doc(id).update(newPost);
  res.send('updated!');
});

// DELETE methdod: delete a post
app.delete('/removePostLocal', (req, res) => {
  const newPosts = [];
  for (let post of posts1) {
    if (post.name !== req.body.name) {
      newPosts.push(post);
    }
  }
  posts1 = newPosts;
  res.send(`Post by ${req.body.name} deleted!`);
});

// delete by id
app.delete('/removePostFirebase/:id', async function (req, res) {
  const id = req.params.id;
  await postsCollection.doc(id).delete();
  res.send('deleted!');
});

app.listen(port, () => console.log(`App started on port ${port}!`));
```
