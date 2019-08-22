---
id: lecture7
title: Lecture 7 - Database 1
---

## Before the lecture

### Firebase Setup

1. Create an account on [Firebase](https://firebase.google.com). You only need the free version.
2. Go to the database tab in Firebase console. Choose to create **Firestore** starting in locked
   mode.
3. Download the service account in `Project Settings > Service accounts` as `service-account.json`.
   This json should be kept secret.

### Check your setup

#### Code

Create an folder with empty `package.json` and empty `index.js`. Put the downloaded
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
the url of your own.

```javascript
const admin = require('firebase-admin');
const serviceAccount = require('./service-account.json');
const express = require('express');
const bodyParser = require('body-parser');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: '[YOUR_OWN_DATABASE_URL]'
});

const db = admin.firestore();

const app = express();
const port = 8080;
app.use(bodyParser.json());

app.get('/', (_, resp) => resp.send('Hello World!'));

app.get('/self-check', async (_, resp) => {
  const data = {
    name: 'Hello World',
    time: admin.firestore.FieldValue.serverTimestamp()
  };
  console.log('Sending doc to DB.');
  await db
    .collection('test')
    .doc('random-id')
    .set(data);
  console.log('Doc recorded in DB');
  const docRef = db.collection('test').doc('random-id');
  console.log('Trying to obtain doc in DB.');
  const docSnapshot = await docRef.get();
  console.log(
    `We obtained a doc with id ${docSnapshot.id}. It's content is logged below:`
  );
  console.log(docSnapshot.data());
  console.log('Now we will try to remove it.');
  await docRef.delete();
  console.log('The document is deleted.');
  console.log(
    'After all these operations, the db should be empty. We check that.'
  );
  db.collection('test')
    .get()
    .then(querySnapshot => {
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

1. Run `npm install`;
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

## Database 101

### Why do we need a database for our backend

- Data stored within Node.js is **per instance**
- Most applications require **persistence**
- Data analysis
- Performant data location
- Offloading unneeded data from memory

### Types of database

- MySQL + Relational Databases
  - Stores data in tables, utilizing rows and tables.
  - Is relational (think a tuple)
  - Has a schema
- NoSQL + Less-Relational Databases
  - Literally they are not MySQL
  - Many types: hierarchies, object-oriented, and more!
- NoSQL + Firestore
  - We will focus on NoSQL
  - Many NoSQL implementations are schema-less or have a partial schema
  - Firestore is a cloud-hosted NoSQL database
    - Very flexible and can be used with most popular languages
    - Uses documents to store data
    - Efficient querying for data

## Key Terms for Firestore & NoSQL Manipulations

- Document - the "entry" in the database
- ID - the unique identifier for a Document
- Key & Property - like JavaScript, each key is mapped to a property
- Maps - Nested objects within a document
- Collections: Set of related documents

Example:

```yml
alovelance: # id
  - name: # property name
      first: "Ada" # Properties can be nested.
      last: "Lovelace"
    # Properties can have different types. Firestore doesn't enforce the schema.
    born: 1815
```

Here is a JSON representation of the same document:

```json
{
  "id": "alovelance",
  "data": {
    "name": {
      "first": "Ada",
      "last": "Lovelace"
    },
    "born": 1815
  }
}
```

## Basic Database Manipuations

People usually call that `CRUD`, which stands for:

- **C**reate/Insert - Create a document (will fail if the document exists)
- **R**ead/Find/Query - To search for documents based on their properties
- **U**pdate - Update an existing document (will fail otherwise)
- Delete - Delete an existing document

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

```javascript
const admin = require('firebase-admin');
const serviceAccount = require('./service-account.json');
const express = require('express');
const bodyParser = require('body-parser');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://dti-web-dev-sp19-db-demo.firebaseio.com'
});

const db = admin.firestore();

const app = express();
const port = 8080;
app.use(bodyParser.json());

app.get('/', (_, resp) => resp.send('Hello World!'));

const postsCollection = db.collection('posts');

// create a post
app.put('/post', async (req, resp) => {
  const post = req.body;
  const addedDoc = await postsCollection.doc("hi").set(post);
  resp.status(200).send(addedDoc.id);
});

// read all posts
app.get('/post', async (_, resp) => {
  const allPostsDoc = await postsCollection.get();
  resp.status(200)
    .json(allPostsDoc.docs.map(doc => ({ id: doc.id, ...doc.data() })));
});

// 2019-04-17
app.get('/post/today', async (_, resp) => {
  const today = new Date();
  const todayString =
    `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const todayPostsDoc =
    await postsCollection.where('date', '==', todayString).get();
  resp.status(200)
    .json(todayPostsDoc.docs.map(doc => ({ id: doc.id, ...doc.data()})));
});

// sorted posts
app.get('/post/sorted', async (_, resp) => {
  const sortedPosts =
    await postsCollection.orderBy('date', 'desc').get();
  resp.status(200)
    .json(sortedPosts.docs.map(doc => ({id: doc.id, ...doc.data()})));
});

// update a post
app.post('/post/:id', async (req, res) => {
  const id = req.params['id'];
  const newPost = req.body;
  await postsCollection.doc(id).update(newPost);
  res.status(200).send('UPDATED');
});

// delete a post
app.delete('/post/:id', async (req, res) => {
  const id = req.params['id'];
  await postsCollection.doc(id).delete();
  res.status(200).send('DELETED');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
```
