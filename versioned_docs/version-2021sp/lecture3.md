---
id: lecture3
title: Lecture 3
---

[Lecture Video](https://drive.google.com/file/d/1DYpGQdCfKa2XnOJjuJ2kjhVG-jg5hmZn/view?usp=sharing)

[Lecture Slides](https://docs.google.com/presentation/d/1CuHHTdguCDM3D4vZsoity0O8L43vLeTxvOACjnvem0A/edit?usp=sharing)

[Assignment 2](/docs/assignment2) (due 3/18 3:59 PM on CMS)

[Install Postman](https://www.postman.com/downloads/)

## Before the lecture

### Create `tsconfig.json`

From now on, we will be using a `tsconfig.json` file within every Node project we create (a recap on how to do that is below this section). Essentially, the `tsconfig.json` is a file at the root of a Node project which indicates it is using TypeScript, and allows us to configure the TypeScript compiler. If you'd like to follow the lecture synchronously, you can put the following chunk of code into the root directory of your lecture 3 project. If you're more curious about how the file works, you can refer [to this link](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

```json
{
  "compilerOptions": {
    "target": "es6",
    "outDir": "./output",
    "lib": ["dom", "dom.iterable", "esnext"],
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "importsNotUsedAsValues": "error",
    "module": "commonjs",
    "moduleResolution": "node",
    "resolveJsonModule": true
  },
  "types": ["node"],
  "include": ["./*"],
  "exclude": []
}
```

### Install Postman

Use the link above to install Postman.

## Postman and Request Bodies

### Postman

Instead of always going to the endpoint in the browser, a robust way of testing
our endpoints is to use Postman.

Postman is a software that allows you to simulate requests that could be sent by
a user to your backend. It is useful for testing and ensuring that the behavior
of your requests (including necessary headers) is what you expect.

### POST Request

Usually when you want to send a `POST` request you also want to send information
with it. Situationally, you want to do this using request bodies rather than
query parameters.

Let's say we have this `addSong` endpoint:

```ts title="index.ts"
app.post('/addSong', (req, res) => {
  const song: songtype = { name: req.body.name, rating: req.body.rating };
  console.log(song);
  songs.push(song);
  res.send(`Song ${req.body.name} added!`);
});
```

where `songtype` is:

```ts title="index.ts"
type songtype = {
  name: string;
  rating: number;
};
```

Previously, we may have considered using query parameters for sending data for
the backend. There's nothing wrong with that; for example, we could have used
`/addSong?name=Despacito&rating=5`. However, this can lead to extremely long
URLs, and limit us from sending more complicated data. That's where **request
bodies** come in handy. We can instead send request data in JSON format to the
backend, allowing us to use the data more easily and integrate it seamlessly
with our backend (which happens to be in TypeScript, so we can easily deal with
it).

The snippet above tells `express` to listen for `POST` requests at endpoint
`/addSong`. `req.body` is a JavaScript object, and we access its properties
`req.body.name` and `req.body.rating` to add a new song to our array of songs.

Before this snippet actually works, we need to import something called
`body-parser`. This lets our express server to actually read `req.body`
properly. To do this, we will add the following near the top of our `.ts` file:

```ts title="index.ts"
// To add `body-parser` to your project, run `yarn add body-parser`
import bodyParser from 'body-parser';

// ...
// const app = express();
// ...

app.use(bodyParser.json());
```

Now, we should have a working `POST` endpoint that does something with the
request body.

However, we can't test request bodies quite as easily through the
browser; we can check that this endpoint is working using Postman. Set the
request type to `POST` and URL as `localhost:8080/addSong`. To send a request
body, first go to Headers and add a new key `Content-Type` with value
`application/json`. This says we are sending JSON input (essentially, an object
or dictionary) in our request body. In the Body section, select the raw radio
button and enter the following in the text field:

```json
{
  "name": "Despacito",
  "rating": 5
}
```

We will be sending `name` with a value of `"Despacito"` and `rating` with a
value of `5` in the request body.

Sending this request, you should see the corresponding song printed out to the
console by the endpoint.

Now, let's create another `POST` endpoint to update a song's rating. This will
also use a request body with just a `name` field, which should match the song we
want to update.

```ts title="index.ts"
app.post('/updateRating', (req, res) => {
  for (const song of songs) {
    if (song.name === req.body.name) {
      song.rating = req.body.rating;
    }
  }
  res.send('Rating updated!');
  console.log(songs);
});
```

### DELETE Request

When creating APIs, we use the `DELETE` request method to quite simply delete a
specific resource. This should be pretty straightforward: we simply take the
name of the song to delete through the request body, and create a new version of
the songs without the specified song. We then send text to the requester that it
was deleted.

```ts title="index.ts"
app.delete('/removeSong', (req, res) => {
  const newSongs = [];
  for (let song of songs) {
    if (song.name !== req.body.name) {
      newSongs.push(song);
    }
  }
  songs = newSongs;
  res.send(`Song ${req.body.name} deleted!`);
});
```

And with that, we're done!

## Intro to Databases and Firebase

The song API we just made "works": we can add songs and then get them
while running the Express server. But it has one fatal flaw: try stopping the
server and then running it again. You'll see that all the music is gone! We need
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
- SQL has strong consistency whereas NoSQL has eventual consistency (i.e. there
  may be some delay in getting the response back)
- SQL is vertically scalable (need more computing power on one machine to store
  more data) while NoSQL is horizontally scalable (can distribute storage and
  compute power on multiple machines)

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

People usually call that `CRUD`, which stands for:

- **C**reate/Insert - Create a document (will fail if the document exists)
- **R**ead/Find/Query - To search for documents based on their properties
- **U**pdate - Update an existing document (will fail otherwise)
- **D**elete - Delete an existing document

For convenience, most NoSQL database also provides an _upsert_ operation. It
will create the document or update an existing document. You can think of that
as an atomic operation that does:

```javascript
if (document.exists()) {
  database.update(document);
} else {
  database.insert(document);
}
```

In Firestore, you can either insert a new document with a specified ID, or allow
Firestore to generate its own ID for you.

The update method in Firestore allows you to update certain fields of the
document without overwriting the entire thing.

## Sample code

The following code demonstrates how we can do basic CRUD with Firestore. Note
that the code below does not care about what are the fields of a post, because
Firestore doesn't require you to have a predefined set of fields. This gives you
flexibility when writing your backend code.

```typescript title="index.ts"
import admin from 'firebase-admin';
import express from 'express';
import bodyParser from 'body-parser';
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
app.use(bodyParser.json());
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
app.get('/posts', (_, res) => {
  res.send(posts1);
});
// use firebase instead
app.get('/getPosts', async (_, res) => {
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
app.get('/posts/:name', async function (req, res) {
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
app.get('/postById/:id', async function (req, res) {
  const id = req.params.id;
  const postsSnapshot = await postsCollection.doc(id).get();
  const post: PostWithID = postsSnapshot.data() as PostWithID;
  res.send(post);
});
// sort posts by name
app.get('/postsorted', async function (req, res) {
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
app.post('/addPost', (req, res) => {
  const post: Post = req.body;
  posts1.push(post);
  res.send(`Post created by ${req.body.name}!`);
});
// generate a document with a random name to store the post's data
app.post('/addPost2', async function (req, res) {
  const post: Post = req.body;
  const postDoc = postsCollection.doc();
  await postDoc.set(post);
  res.send(postDoc.id);
});
// POST method: update an existing post
app.post('/updatePost', (req, res) => {
  for (let post of posts1) {
    if (post.name === req.body.name) {
      post.content = req.body.content;
    }
  }
  console.log(posts1);
  res.send('content updated!');
});
// update by id
app.post('/updatePost2/:id', async function (req, res) {
  const newPost: Post = req.body;
  const id: string = req.params.id;
  await postsCollection.doc(id).update(newPost);
  res.send('updated!');
});
// DELETE methdod: delete a post
app.delete('/removePost', (req, res) => {
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
app.delete('/removePost/:id', async function (req, res) {
  const id = req.params.id;
  await postsCollection.doc(id).delete();
  res.send('deleted!');
});
app.listen(port, () => console.log('App started!'));
```
