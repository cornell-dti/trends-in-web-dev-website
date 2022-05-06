---
id: lecture8
title: Lecture 8
---

[Lecture Slides](https://docs.google.com/presentation/d/1hTeo4xK5m54hoik8U2tct8t8Tm5iBx5kpZ3Z7YVZx6M/edit?usp=sharing)

[Assignment 4](/docs/assignment4) (Due 4/22 at 11:59pm)

# Some Theory

## Querying Methods for your React/Next.js App

| Promise-Based                                                                                                                   | Real-Time                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| If you need the data now, you can query for it                                                                                  | You already have the data                                                                                                                                      |
| Data queries can be decentralized (done in any component)                                                                       | Data queries are fetched and memoized through centralized (React) hooks                                                                                        |
| Quering data is imperative can quickly become spaghetti (and you lose some of the advantages of a declarative web UI framework) | Up-front cost to query data that pays off (because you don't _Hopefully_ have to query it again)                                                               |
| There is no cleanup code                                                                                                        | You first have to "subscribe" to changes in the data, then unsubscribe after you are done (kind of like opening and closing a file stream when reading a file) |

### How do Callback/Promise-based vs. Real-Time Queries Look Like?

| Promise-Based                                                                                                     | Real-Time                                        |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| Single query, single async result                                                                                 | Single query, a stream of async results          |
| - Async: result arrives at an unspecified time, outside the sequential execution context of the rest of your code | - ex: weather data                               |
| Run once, pass along indefinitely downstream (children & other descendants of your component)                     | Listenable data that needs to be "subscribed to" |
| Typically reacts to some update                                                                                   | Built on top of WebSockets                       |
| -ex: user click, first time a component loads, etc.                                                               | - ex: an abstraction over a byte stream          |
|                                                                                                                   | Good for… real-time applications                 |

### How Do Callback/Promised Based vs. Real-Time Queries Work?

| Promise-Based                                                            | Real-Time                                                                                                          |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| Typically calls a (backend) API route that fetches & returns data to you | Might call a backend route to pass data over a WebSocket                                                           |
| Uusuallyuilt on top of HTTP requests                                     | Or simply uses an API library to make calls directly to a database                                                 |
| - built on top pf HTTP Requests                                          | - ex: Firebase Firestore call                                                                                      |
|                                                                          | Usually wrapped in a library like RxJS’s Observable data type or a library that allows you to subscribe to changes |
|                                                                          |                                                                                                                    |
|                                                                          |                                                                                                                    |
|                                                                          |                                                                                                                    |

### Choosing a Querying Method

As described in the first section, the type of queries your application will use will affect the app's architecture.
In particular, real-time queries play nicely with having a centralized query that runs over a listenable data access object that is "owned" either by

1. a top-level component (OK in small apps, but prone to prop drilling in more complex apps), or
2. a custom React hook that wraps an effect (triggering an update when the data access object publishes a new version of the data)

That is not to say that your app cannot use both types of queries. It is just that a real-time application requires a specific architecture in which all data is queried first and passed along to components as props or referenced by components via (potentially custom) React/Redux hooks. This does not play nicely with callback/Promise-based queries because the data from the callback/Promise-based queries may be in an inconsistent state by the time the data from a real-time query has updated.

## Your Firebase Firestore Application: Callback/Promise-based or Real-Time Queries

Firestore offers you a database that nicely organizes your data into _documents_ and _collections_ (groups of documents). It allows you to build queries that can either

1. return _once_ with a single snapshot of data (a Promise-based query), or
2. allow you to hook into the data's live values (a real-time query).

## Firestore Real-time Queries

Provides collection + document data as an listenable (subscribable) data object

- As soon as a collection updates, the collection access object publishes a new version of the collection
- As soon as a doc updates, the doc access object publishes a new version of the doc
  This can be passed as a React prop or an effect dependency, which triggers a component update!

## Anatomy of a Firebase Firestore Real-Time Application (The "Full" Stack)

![Anatomy of a Firebase Firestore Real-Time Update](/img/lec8/firestore-real-time.png)

Unlike callback/promise-based queries, the connection between updating and fetching data is completely gone. Updating data occurs along an entirely separate channel from subscribing to the data. This means that implementing calls to update data will look very different

## Miscellaneous Advice

When designing a system:

- avoid two-way dependencies (or as many dependencies as possible)
  - as with React & declarative web frameworks, one-way data binding is the way to go
  - avoids: more things to update
  - avoids: more surface area for synchronization errors

This philosophy helps us prefer real-time queries over Promise-based queries, because there is only a single dependency for the queried data, rather than the set of all the decentralized Promise-based queries.

# The Practice

## The Problem

Suppose you want to create a book rating platform 📚! Users will be able to search a book by title or author and see its avg. rating.

Users will be able to submit book reviews 📩 (one per book title max!) for a given title + author with a rating of 1-5 stars.

A review on a new book will upsert the set of books with a new book (if necessary) and a review associated with that book.

What can the user see?

- Reviews
- by book title
- by author
- by reviewer
- sort by avg. rating

## Modeling the Problem

### Q: What are the main entities in the model?

AKA, what moving parts contribute to the changing data in the system?

- books (have authors & get reviewed)
- users (user === reviewer)
- book reviews (for a book, by a user)
- author (books may have the same title but different authors)

### Q: If each Entity can be represented by a data object, what will the structure be like?

_Book_

```
- title (string)
- author (string)
```

_Review_

```
- rating (number 1-5)
- description (string)
- title (string)

- author (string)
```

_Reviewer/User_

```
- email (string)
```

_Author_

Authors are not a primary entity. The author is a very simple object that does not "own" any other data, at least according to the specifications of our book reviews platform. We may need to fetch books by author, but we do not ever need to know the list of all authors, for example.

### Q: What Typescript types do we need to write make our data structures concrete?

#### Aside: Types or Interfaces?

| Type                                                                          | Interface                                                                   |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Better suited for data                                                        | Useful for a communication protocol or for objects with behavior (methods)  |
| (typically) has no functionality                                              | Implemented by a class, which handles methods (class functions) efficiently |
| Supports declaring methods, but this can only be implemented less efficiently | Usually wrapped in a library like RxJS’s Observable data type               |
