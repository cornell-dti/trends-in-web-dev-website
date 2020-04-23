---
id: lecture8
title: Lecture 8
---

[Lecture Slides](https://docs.google.com/presentation/d/1vzLbAXACKcGTcTSr-XPrMa9K0jrqawfwd1l3vEsDAfc/edit#slide=id.g825b4667a9_0_783)

[Lecture Video (coming soon!)](#)

[Final Project](https://github.com/ashneeldas2/trends-sp20/tree/master/FinalProject)

# Bridging the Frontend & Backend

We've worked with Express/Firebase on the backend and React on the frontend. So
far, we've been learning about them separately. How can we bring both ends
together to make one working product?

## Data Fetching

"_data_ is the new oil 🤑"

### What IS data fetching?

Data fetching is **getting information (data) from an outside source (e.g. REST API)**

The frontend wants to **fetch data** from the backend.

Frontend tells Backend what it wants.  
Backend sends the appropriate data to Frontend.  
Frontend displays the data to the user!

In Trends, our React website will be fetching data from our Express server.

### How do we fetch (in React)?

So how do we fetch data with our React frontend?

Two important things to note:

1. Modern browsers have a nifty little JavaScript function called `fetch` that
   you can use to call API endpoints. Libraries such as `axios` provide similar
   functionality.

2. The `useEffect` React hook allows you to trigger side effects, such as
   fetching data!

We want to keep track of our data in our component state, and use hooks like
`useEffect` to `fetch` the data and update the state accordingly!

### Fetching Example

Consider this snippet of code:

```javascript
const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${API}`)
      .then((response) => response.json())
      .then((d) => setData(d));
  });
  // ... other methods, return, etc
};
```

Here are the important parts:

- We have `data` in our component state. Later, we call `setData` on what the
  backend sends to us.
- The `useEffect` hook is used to subscribe to new data.
- `fetch(...)` is called on an API link, followed by `.then(...)` calls that
  format the response into json and then `setData` to the response. The
  `.then()` calls exist because `fetch()` returns a `Promise` (this is explained
  below)

Let's take a deeper look at `fetch`!

## `fetch`

"stop trying to make fetch happen 👧"

`fetch(resource, [init])` is a native browser function for making web requests.

Its params are:

- `resource`: URL of the site you are fetching from
- `init`: optional object containing any custom settings you want to apply to
  the request.

```javascript
    // your init object might look like this
    {
      // HTTP request method
       method: 'GET', // | 'POST' | 'PUT' | 'DELETE' | etc
       // Any request headers you want to add
       headers: {
         'content-type': 'application/json'
       },
       // Request body (remember to stringify!)
       body: JSON.stringify(requestBody)
       // ... other settings
    }
```

- For more on the init object, refer to
  [this link](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)!

**IMPORTANT: fetch() returns a PROMISE!**

## Promises

Operations like web requests don't complete instantly! You want to do other stuff
while the operation is still going on.

Promises represent the **eventual** completion (or failure) of an async operation.

Promises are in one of three possible states:

- `pending`: initial state; neither fulfilled nor rejected
- `fulfilled`: operation completed successfully
- `rejected`: operation failed

#### `.then()`

`.then()` is a function on Promises that return a promise.

```javascript
p.then(onFulfilled[, onRejected])
```

Let's break this down!

- `p` is a Promise.
- `onFulfilled` is the callback function that is run when `p` is fulfilled
- `onRejected` (OPTIONAL) is the callback for when `p` is rejected

```javascript
p.then(
  (value) => {
    // fulfillment
  },
  (reason) => {
    // rejection
  }
);
```

#### `.catch()`

`.catch()` is a function on Promises that catches a rejection.

```javascript
p.catch(onRejected);
```

For example, you might want to `console.log` errors:

```javascript
fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then(...)
  .catch((err) => console.log(err))
```

### Using `.then()` with `fetch()`

`fetch()` returns a `Promise` that resolves to a `Response` object.

Consider this snippet, similar to one shown above:

```javascript
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

If you have too much `.then()` calls within each other, you might build a
PYRAMID OF DOOM ☠.

Adding the async keyword to a function designates that function as an
asynchronous function

Within these async functions we can use await to designate which lines need to
be “awaited” upon to resolve

```javascript
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
something in stock. So you ask an employee named Joe and he **promises** you that he'll be
back with the results.

You are now waiting for Joe to come back. The Promise will be **pending** for as long as
Joe is gone.

Let's say Joe comes back with the results. Now you know whether the store is in
stock or not. Now the Promise is **fulfilled**.

Let's say Joe doesn't come back with the results. Unfortunately an anvil fell on
him or something. Now you know that Joe will not come back with the result. Now the
Promise is **rejected**.

## I don't like `fetch`

Try `axios` instead!

Axios is an npm package that can give you a better experience fetching data.

It's got stuff like:

- `axios.get(url[, config])`
- `axios.post(url[, data[, config]])`
- `axios.put(url[, data[, config]])`
- `axios.delete(url[, config])`

Axios also returns a promise and can be resolved with `.then()`.

Here's an example:

```javascript
// fetch()
const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  setData(posts);
};

// axios
const fetchData = async () => {
  const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
  setData(posts);
};
```

### Summary

You keep track of your data in component state. Your app displays whatever data
you have.

You update your data by calling an endpoint within `useEffect` and setting your
data to the response that you get back.

You can call endpoints using `fetch()` or `axios` and handle the responses
asynchronously.

## Demo Code

### Backend

#### `index.js`

```javascript
const express = require('express');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://webdev-lec3.firebaseio.com',
});

const app = express();
app.use(express.json());
const db = admin.firestore();

const songsCollection = db.collection('songs');

app.get('/getSongs', async (req, res) => {
  const songs = await songsCollection.get();
  res.json(songs.docs.map((song) => ({ ...song.data(), id: song.id })));
});

app.post('/createSong', async (req, res) => {
  const newSong = req.body;
  const addedSong = await songsCollection.add(newSong);
  res.send(addedSong.id);
});

app.post('/updateRating', async (req, res) => {
  const { id, rating } = req.query;
  await songsCollection.doc(id).update({ rating });
  res.send('Song rating updated!');
});

app.listen(8080, () => console.log('backend started'));
```

### Frontend

#### `SongList.jsx`

```jsx
import React, { useState, useEffect } from 'react';
import Song from './Song';
import SongAdder from './SongAdder';
import axios from 'axios';

export default () => {

  const [songs, setSongs] = useState([]);

  // GET request using fetch
  const fetchSongs = () => {
    fetch('/getSongs')
      .then(res => res.json())
      .then(json => setSongs(json));
  }

  // GET request using axios
  // const fetchSongs = () => {
  //   axios.get('/getSongs')
  //     .then(res => setSongs(res.data));
  // }

  useEffect(() => fetchSongs(), []);

  // POST requset using fetch
  const addSong = (name, artist, rating) => {
    fetch('/createSong', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, artist, rating })
    })
      .then(res => res.text())
      .then(id => setSongs([...songs, { name, artist, rating, id }]))
  }

  // POST request using axios
  // const addSong = (name, artist, rating) => {
  //   axios.post('/createSong', { name, artist, rating })
  //     .then(res => setSongs([...songs, { name, artist, rating, id: res.data }]))
  // }

  // POST request (update) using fetch
  const updateRating = (id, rating) => {
    fetch(`/updateRating?id=${id}&rating=${rating}`, {
      method: 'POST'
    })
      .then(res => setSongs(songs.map(song => song.id === id ? { name: song.name, artist: song.artist, rating, id } : song)))
  }

  // POST request (update) using axios
  // const updateRating = (id, rating) => {
  //   axios.post(`/updateRating?id=${id}&rating=${rating}`)
  //     .then(res => setSongs(songs.map(song => song.id === id ? { name: song.name, artist: song.artist, rating, id } : song)))
  // }

  return (
    <div>
      {songs.map(song => (<div> <Song key={song.id} {...song} updateRating={updateRating} /> <br /> </div>))}
      <SongAdder callback={addSong} />
    </div>
  )
```

#### `SongAdder.jsx`

```jsx
import React, { useState } from 'react';

export default ({ callback }) => {
  const [name, setName] = useState('');
  const [artist, setArtist] = useState('');
  const [rating, setRating] = useState(0);

  return (
    <div>
      <h3> Add a new song! </h3>
      <input
        placeholder="Song name"
        onChange={(e) => setName(e.target.value)}
      /> <br />
      <input
        placeholder="Artist name"
        onChange={(e) => setArtist(e.target.value)}
      />{' '}
      <br />
      <input
        placeholder="Rating"
        onChange={(e) => setRating(e.target.value)}
      /> <br />
      <button onClick={(e) => callback(name, artist, rating)}> Add song</button>
    </div>
  );
};
```

#### `Song.jsx`

```jsx
import React, { useState } from 'react';

export default ({ id, name, artist, rating, updateRating }) => {
  const [newRating, setNewRating] = useState(rating);

  return (
    <div>
      <div>
        {' '}
        The song {name} by {artist} currently has a rating of {rating}/5{' '}
      </div>
      <input
        placeholder="New rating"
        onChange={(e) => setNewRating(e.target.value)}
      />
      <button onClick={(e) => updateRating(id, newRating)}>
        {' '}
        Update Rating{' '}
      </button>
    </div>
  );
};
```
