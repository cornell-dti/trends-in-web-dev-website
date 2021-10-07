---
id: assignment2
title: Assignment 2
---

For the second assignment, you will be working with Firebase to perform CRUD
operations and use queries on a database. In this assignment, we're going to
create a database of songs.

:::note
While writing this assignment, please have the app run on port `8080`.
This will make grading easier for us.
:::

## Part 1: Creating the database

First, navigate to [Firebase](https://firebase.google.com/) and create a
new project. Go to the settings icon in the upper left, and click on it. Then,
click project settings and go to service accounts. Copy and paste the code
snippet provided into your `index.ts` file. Generate a new private key
and and rename it to `service-account.json`. Put this file in the root of your
project. Go to the database section (in the navigation bar on the left) and
create a new Firestore database.

## Part 2: Manually make a collection

After the Firestore database is created, make a new collection in the database
called "songs". Within this collection, create a document called "song1".
This document will have three fields, "name", "artist", and "rating", with
respective values "Never Gonna Give You Up", "Rick Astley", and your
personal rating of the song out of 5. At this point, your database should look
something like this:

<img src="/img/a2_db.png" height="120px" width="600px" />

## Part 3: Create new songs

Write a `POST` request with route `/createSong`. This request will simply create
a new song document in the songs collection of the database. The id of the
document should be AUTOMATICALLY generated, not a name of your choice.

We will be passing information in the request body (`req.body`) in the following format:

```json
{
  name: string,
  artist: string,
  rating: int
}

The endpoint should send back the ID of the added document to the frontend.
```

## Part 4: Read the list of songs

Write a `GET` request with route `/getSongs`. This will return a list of the
songs in the songs collection, sorted alphabetically by their name. The returned
objects should also contain the id of the song.

## Part 5: Update a song's rating

Write a `POST` request with route `/updateRating`. This request will update a
specific song's rating in the songs collection of the database. The song will
be identified by its ID in the collection.

We will be passing information in the request body (`req.body`) in the
following format:

```json
{
  id: string,
  rating: int
}
```

## Part 6: Delete a song

Write a `DELETE` request with route `/deleteSong`. This request will delete
a specific song from the songs collection of the database. The song will be
identified by its ID in the collection.

We will be passing the ID of the song in the query parameters (`req.query`)
as a parameter called `id`.

For example, a request to `/deleteSong?id=song1` would delete the song
you created in the first part of the assignment.

:::tip
Don't know where to start? Reference the [live coding demo example](/docs/2021sp/lecture3#SampleCode) from lecture 3! Also, get help in [office hours](introduction#when-are-office-hours)!
:::

## Part 7: Submission

Submit your assignment as a zip containing your `index.ts`, `package.json`, and
`yarn.lock` files. When you submit your code, comment out the initializeApp statement
in the code so we can test it against our own database.

:::caution
DO NOT submit your `node_modules`. We WILL deduct points for this.
Lots of points.
:::

## FAQ

### I can't initialize my app and nothing is working from the get-go.

We're using Google's Cloud Firestore (which stores data as collections of documents)
and not the older Realtime Database (which stores the data in a big JSON tree) for
this class, so make sure you chose the right option. Otherwise, make sure you
have the `serviceAccount.json` in the same directory as your src files.

### Alphabetic sorting isn't working for me. Why?

This might happen because of the actual int value of ASCII characters conflicting
(lowercase letters vs uppercase letters). Verify that it works with songs in the
same case, and it'll be enough for us.

### Getting a bunch of weird TypeScript errors, and I don't think my code is wrong.

Make sure to include the `tsconfig.json` from the [lecture 3 notes](/docs/2021sp/lecture3)
in your project directory.

### Do we need to submit our `service-account.json` along with the other stuff?

We're glad you trust us so much, but we'll be testing your endpoints with our
own `service-account.json` and Firestore database, so no need to include it.
