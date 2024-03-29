---
id: lecture6
title: Lecture 6
---

[Finished Last few slides](https://docs.google.com/presentation/d/15DhdsQndeQQhJVDXuLhgpdrOWREQUD0X/edit?usp=sharing&ouid=117514670142351828517&rtpof=true&sd=true)

[Main Lecture Slides](https://docs.google.com/presentation/d/1eZNqJOUIht1_0M5Dat7h7HJOk8GlYYTE/edit?usp=sharing&ouid=117514670142351828517&rtpof=true&sd=true)

[Assignment 3](assignment4) (due Monday 11/14 7:30 PM on CMS)

[Final Project Team Matching Form](https://forms.gle/TWQbB4Z67PiukRPq8) due **Sunday, 11/14 at 11:59 PM** (no slip days)

### Async/Await

We'll cover this in the future but `async`/`await` is an alternative (sometimes
preferred) syntax for `.then()` and `.catch()` calls.

By adding the `async` keyword to a function, we make it an _asynchronous_
function. Within `async` functions, we can use the `await` keyword to wait for a
Promise to return before continuing on to the next statement within the
function.

Here is an example of doing equivalent things with either syntax:

```typescript
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

## Live Demo Material

The demo only covers the latter half of the lecture (data fetching). Feel free
to play around with hooks on your own time!

You can get the starter code for the live demo by running:
`yarn create next-app --typescript --example "https://github.com/cornell-dti/trends-fa22-starters/tree/main/lec6-demo-data-fetching" YOUR_DIR_NAME`

(Replace YOUR_DIR_NAME with whatever you want to name your directory!)

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

## Getting Started With Firestore

If you're having trouble setting up your project, feel free to refer to this video
of me setting one up from [scratch](https://drive.google.com/file/d/18qj5XFPXgZhixGbyBBLMIYkuiyiW-HWs/view?usp=sharing).
If you still have questions, feel free to post on Ed or come to Office Hours!
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

This week's sample code can be found in the files under [this directory](https://github.com/cornell-dti/trends-fa22-starters/tree/main/lec6-soln-firebase/components/roster).
