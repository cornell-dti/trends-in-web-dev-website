---
id: lecture3
title: Lecture 3
---

## Before the lecture

### Firebase Setup

1. Create an account on [Firebase](https://firebase.google.com). You only need the free version.
2. Go to the database tab in Firebase console. Choose to create **Firestore** starting in locked
   mode.
3. Download the service account in `Project Settings > Service accounts` as `service-account.json`. `Project Settings` can be found by clicking the gear button on the left panel next to `Project Overview`. Go to `Service accounts` tab and click the `Generate new private key button`. Save the downloaded file as `service-account.json`
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