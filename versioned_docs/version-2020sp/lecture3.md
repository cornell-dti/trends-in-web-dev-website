---
id: lecture3
title: Lecture 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[Lecture Slides](https://docs.google.com/presentation/d/1iimIRpAw1ud1yhCCx1cdwypZw2J8VVN8mTLWXOc8g-U/edit?usp=sharing)

[Lecture Video](https://drive.google.com/file/d/14JeWpqIm4uiTl0bSO8hgvg_kqVadsR0Z/view?usp=sharing)

[Firebase Documentation](https://firebase.google.com/docs/firestore)

[Assignment 2](https://github.com/ashneeldas2/trends-sp20/tree/master/Assignments/a2) due **03/04 7:59pm**

## Before the lecture

### Install Postman

Install Postman from [https://www.postman.com/downloads/](https://www.postman.com/downloads/)
If necessary, set up a Postman account using your Cornell email address.

### Firebase Setup

1. Create an account on [Firebase](https://firebase.google.com). You only need the free version.
2. Go to Firebase console and click `Add project`. Choose any random name for the project name. You
   won't need Google Analytics in this class but it is fine to enable it. Analytics location doesn't
   matter, leave it at default United States and check the remaining boxes agreeing to terms and click `Create project`.
3. Once your project is created, go into it and go to the `Database` tab under `Develop`. Choose to create database starting in production mode. Keep the Firestore location as default.
4. Download the service account in `Project Settings > Service accounts` as `service-account.json`. `Project Settings` can be found by clicking the gear button on the left panel next to `Project Overview`. Go to `Service accounts` tab and click the `Generate new private key button`. Save the downloaded file as `service-account.json`
   This json should be kept secret.

### Check your setup

#### Code

Create a folder with empty `package.json` and empty `index.js`. Put the downloaded
`service-account.json` in this folder.

Copy the following code into `package.json`.

```json
{
  "name": "self-check",
  "version": "0.1.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "body-parser": "^1.18.3",
    "express": "^4.16.4",
    "firebase-admin": "^7.2.0"
  }
}
```

Copy the following code into `index.js`. Remember to replace `databaseURL` with
the url of your own. You can find this `databaseURL` in the code snippet in the service accounts tab of Firebase.

_Don't worry if you don't understand this code! You'll know what it does and how to write similar code by the end of this course!_

```javascript
const admin = require('firebase-admin');
const serviceAccount = require('./service-account.json');
const express = require('express');
const bodyParser = require('body-parser');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: '[YOUR_OWN_DATABASE_URL]',
});

const db = admin.firestore();

const app = express();
const port = 8080;
app.use(bodyParser.json());

app.get('/', (_, resp) => resp.send('Hello World!'));

app.get('/self-check', async (_, resp) => {
  const data = {
    name: 'Hello World',
    time: admin.firestore.FieldValue.serverTimestamp(),
  };
  console.log('Sending doc to DB.');
  await db.collection('test').doc('random-id').set(data);
  console.log('Doc recorded in DB');
  const docRef = db.collection('test').doc('random-id');
  console.log('Trying to obtain doc in DB.');
  const docSnapshot = await docRef.get();
  console.log(
    `We obtained a doc with id ${docSnapshot.id}. It's content is logged below:`,
  );
  console.log(docSnapshot.data());
  console.log('Now we will try to remove it.');
  await docRef.delete();
  console.log('The document is deleted.');
  console.log(
    'After all these operations, the db should be empty. We check that.',
  );
  db.collection('test')
    .get()
    .then((querySnapshot) => {
      if (querySnapshot.docs.length === 0) {
        console.log('We passed the check. The page in browser should say OK.');
        resp.status(200).send('OK.');
      } else {
        console.log('We failed the check. Please check your setup.');
        resp.status(500).send('Something is messed up!');
      }
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
```

#### Verify that it works

1. Run `yarn install`;
2. Run `node index.js`;
3. Open [`http://localhost:8080`](http://localhost:8080). You will see
   `Hello World!`;
4. Open [`http://localhost:8080/self-check`](http://localhost:8080/self-check).
   You will see `OK!` in the browser. In the terminal, you will see something
   like this:

```text
Example app listening on port 8080!
Sending doc to DB.
Doc recorded in DB
Trying to obtain doc in DB.
We obtained a doc with id random-id. It's content is logged below:
{ name: 'Hello World',
  time: Timestamp { _seconds: 1554738493, _nanoseconds: 994000000 } }
Now we will try to remove it.
The document is deleted.
After all these operations, the db should be empty. We check that.
We passed the check. The page in browser should say OK.
```

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

The following code demonstrate how we can do basic CRUD with Firestore.
Note that the code below does not care about what are the fields of a post,
because Firestore doesn't require you to have a predefined set of field. This
gives you flexibility when writing your backend code.

<Tabs
groupId="lang"
defaultValue="ts"
values={[
{ label: 'TypeScript', value: 'ts', },
{ label: 'JavaScript', value: 'js', },
]}>
<TabItem value="ts">

```typescript title="index.ts"
// in typescript import packages as modules
import admin from 'firebase-admin';
import express from 'express'; // also install type aliases for Request, Response
import bodyParser from 'body-parser';

const serviceAccount = require('./service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://dti-web-dev-sp19-db-demo.firebaseio.com',
});

const db = admin.firestore();

const app = express();
const port: number = 8080;
app.use(bodyParser.json());

// Define a type for our Post document stored in Firebase
type Post = {
  content: string;
  name: string;
};

type PostWithID = Post & {
  id: string;
};

app.get('/', (_, res) => res.send('Hello World!'));

const postsCollection = db.collection('posts');

// create a post
app.post('/post', function (req, res) {
  const post: Post = req.body;
  const myDoc = postsCollection.doc();
  myDoc.set(post);
  res.send(myDoc.id);
});

// read all posts
app.get('/post', async function (_, res) {
  // we don't use the first request parameter
  const allPostsDoc = await postsCollection.get();
  const posts: PostWithID[] = [];
  for (let doc of allPostsDoc.docs) {
    let post: PostWithID = doc.data() as PostWithID;
    post.id = doc.id;
    posts.push(post);
  }
  res.send(posts);
});

// read posts by name
app.get('/post/:name', async function (req, res) {
  const namePostsDoc = await postsCollection
    .where('name', '==', req.params.name)
    .get();
  const posts: PostWithID[] = [];
  for (let doc of namePostsDoc.docs) {
    let post: PostWithID = doc.data() as PostWithID;
    post.id = doc.id;
    posts.push(post);
  }
  res.send(posts);
});

// sorted posts by name
app.get('/postsorted', async function (_, res) {
  // we don't use the first request parameter
  const sortedPosts = await postsCollection.orderBy('name', 'desc').get();
  const posts: PostWithID[] = [];
  for (let doc of sortedPosts.docs) {
    let post: PostWithID = doc.data() as PostWithID;
    post.id = doc.id;
    posts.push(post);
  }
  res.send(posts);
});

// update a post
app.post('/post/:id', async function (req, res) {
  const id: string = req.params.id;
  const newPost = req.body;
  await postsCollection.doc(id).update(newPost);
  res.send('UPDATED');
});

// delete a post
app.delete('/post/:id', async function (req, res) {
  const id: string = req.params.id;
  await postsCollection.doc(id).delete();
  res.send('DELETED');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
```

For TypeScript, we need to compile this down to JavaScript before we run it:

```bash
tsc index.ts
node index.js
```

The first command compiles `index.ts` to a JS file of the same name. The second runs that JS file.

</TabItem>
<TabItem value="js">

```javascript title="index.js"
const admin = require('firebase-admin');
const serviceAccount = require('./service-account.json');
const express = require('express');
const bodyParser = require('body-parser');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://dti-web-dev-sp19-db-demo.firebaseio.com',
});

const db = admin.firestore();

const app = express();
const port = 8080;
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

const postsCollection = db.collection('posts');

// create a post
app.post('/post', function (req, res) {
  const post = req.body;
  const myDoc = postsCollection.doc();
  myDoc.set(post);
  res.send(myDoc.id);
});

// read all posts
app.get('/post', async function (req, res) {
  const allPostsDoc = await postsCollection.get();
  const posts = [];
  for (let doc of allPostsDoc.docs) {
    let post = doc.data();
    post.id = doc.id;
    posts.push(post);
  }
  res.send(posts);
});

// read posts by name
app.get('/post/:name', async function (req, res) {
  const namePostsDoc = await postsCollection
    .where('name', '==', req.params.name)
    .get();
  const posts = [];
  for (let doc of namePostsDoc.docs) {
    let post = doc.data();
    post.id = doc.id;
    posts.push(post);
  }
  res.send(posts);
});

// sorted posts by name
app.get('/postsorted', async function (req, res) {
  const sortedPosts = await postsCollection.orderBy('name', 'desc').get();
  const posts = [];
  for (let doc of sortedPosts.docs) {
    let post = doc.data();
    post.id = doc.id;
    posts.push(post);
  }
  res.send(posts);
});

// update a post
app.post('/post/:id', async function (req, res) {
  const id = req.params.id;
  const newPost = req.body;
  await postsCollection.doc(id).update(newPost);
  res.send('UPDATED');
});

// delete a post
app.delete('/post/:id', async function (req, res) {
  const id = req.params.id;
  await postsCollection.doc(id).delete();
  res.send('DELETED');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
```

Run it using `node index.js`!
</TabItem>
</Tabs>
