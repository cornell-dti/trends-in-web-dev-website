---
id: lecture8
title: Lecture 8
---

[Lecture Slides](https://docs.google.com/presentation/d/1J73ok4GlWVpunQ1eQeKR4aDqkSfXKZh1LOikKifY9tE/edit?usp=sharing)

[Final Project Instructions](finalproject)

[Final Project - Milestone 1](finalproject#milestone-1) due **TBD @michelle**

[Final Project - Milestone 2](finalproject#milestone-2) due **TBD @michelle**

[Final Project - Milestone 3](finalproject#milestone-3) due **TBD @michelle**

## Practice

### The Problem

Suppose you want to create a book rating platform 📚! Users will be able to search a book by title or author and see its avg. rating.

Users will be able to submit book reviews 📩 (one per book title max!) for a given title + author with a rating of 1-5 stars.

A review on a new book will upsert the set of books with a new book (if necessary) and a review associated with that book.

What can the user see?

- Reviews
- by book title
- by author
- by reviewer
- sort by avg. rating

### Modeling the Problem

#### Q: What are the main entities in the model?

AKA, what moving parts contribute to the changing data in the system?

- books (have authors & get reviewed)
- users (user === reviewer)
- book reviews (for a book, by a user)
- author (books may have the same title but different authors)

#### Q: If each Entity can be represented by a data object, what will the structure be like?

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

### Building Out Our Solution

### Q: What Typescript types do we need to write make our data structures concrete?

#### Aside: Types or Interfaces?

| Type                                                                          | Interface                                                                       |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Better suited for raw data                                                    | Useful for a communication protocol or for rich objects with behavior (methods) |
| (typically) has no functionality                                              | Implemented by a class, which handles methods (class functions) efficiently     |
| Supports declaring methods, but this can only be implemented less efficiently | Usually wrapped in a library like RxJS’s Observable data type                   |

#### So What will our database type schema look like?

A no-brainer! Just take the above and shove them into a TypeScript file (types/index.ts):

```ts
export type FireBook = {
  title: string;
  author: string;
};

export type FireReview = {
  rating: number;
  title: string;
  author: string;
  reviewer: string;
};

export type FireReviewer = {
  email: string;
};
```

Note that the primary reason we create a FireReviewer (user) for the site is to make authentication easiser. Firebase has nice features that can allow easy sign-on with Google OAuth and can pass along the signed in user's uid and email for us to store into Firestore into a `reviewers` collection. Nice.

#### Upgrading our Types

There is a slight problem: the types shown above are perfect for enforcing/describing the data going into Book, Review, and Reviewer documents. But they are not enough to address a specific document! In order to address a specific document, it is necessary to create track an ID.

What we can do is the following: create an new FireDocument type and declare new types for Book, Review, and Reviewer as an intersection of FireXX and FireDocument!

```ts
export type FireDoc = {
  id: string;
};

export type Book = FireDoc & FireBook;

export type Review = FireDoc & FireReview;

export type Reviewer = FireDoc & FireReviewer;
```

Great! Now we can address specific documents. In this case, the `uid` of a logged-in user will serve as the `id` of the user's own document. Now given a full Review type, for example, it is possible for Firestore to retreive the exact Review that we need.

## Setting Up our Database

### Create Collections

In order to track our Books, Reviews, and users (reviewers), we need to create collections for them each. Let's call them `books`, `reviewers`, and `reviews`.

Let's start a collection!
![Starting a Collection](/img/lec8/start-collection.png)

Now let's give it a name!
![Creating a Collection](/img/lec8/save-collection.png)

(Now repeat this for the other two collections)

### Set Up Authentication

As mentioned above, Firebase has nice integration with Google sign-on. Let's take advantage of this!

Open the Authentication Tab...
![Opening the Authentication Tab](/img/lec8/open-auth.png)

...and select the 'Google' authentication strategy (this uses the Google sign-on)
![Choosing the Google Auth strategy](/img/lec8/choose-auth.png)

#### And on the client-side:

```ts
// TODO: Replace with your own Firebase config
const firebaseConfig = {
  apiKey: 'asfasdfasdf',
  authDomain: 'trends-sp22-lecture-8.firebaseapp.com',
  projectId: 'trends-sp22-lecture-8',
  storageBucket: 'trends-sp22-lecture-8.appspot.com',
  messagingSenderId: 'sijiofdsjdi',
  appId: '1:3209483200:web:u897j8ydq973342',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  login_hint: 'user@example.com',
  hd: 'cornell.edu',
});
provider.addScope('email');

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    // The signed-in user info.
    const user = result.user;
    userUpload(user, db);
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

export { db };
```

## Architecting the App

### Avoid Hard-coding Routes!

It's a good practice to avoid hard-coding constants such as the path to each collection. Better to include these into a `fireRoutes.ts` file:

```ts
export const BOOKS_PATH = 'books';
export const REVIEWERS_PATH = 'reviewers';
export const REVIEWS_PATH = 'reviews';
```

### Writing our collection query hooks

With the database set up, we need to build queries on the database as well as actions that can write to the database. To avoid prop drilling, we need to build custom React hooks that allow any component to use and "hook into" our data. Our custom hooks need to always have the most up-to-date data available (it is a real-time database after all), so we need to store the information in state variables (so that any components using these variables will be updated when the variable updates).

We can start this a file `fireHooks.ts`:

```ts
const useCollectionWithCallback = (
  collectionId: string,
  callback: () => void,
) => {
  const [coll, setColl] = useState<DocumentData[] | undefined>();
  const collectionRef = collection(db, collectionId);
  // Trigger an effect whenever the query returns a new snapshot
  useEffect(() => {
    const unsubscribe = onSnapshot(query(collectionRef), (querySnapshot) => {
      const docsInCollection: DocumentData[] = [];

      querySnapshot.forEach((doc) => docsInCollection.push(doc.data()));
      // in the effect, set the collection data. This triggers an update in any component using 'coll' (using this collection hook).
      setColl(docsInCollection);
      callback();
    });
    return () => {
      // run any any cleanup code
      unsubscribe();
    };
  }, [collectionId]);
  return coll;
};
```

Alternatively, in a slightly nicer (more functional, more Observable-y way), we can use the rxFire package to simplify some of the code for us:

```ts
const useCollectionWithCallback2 = (
  collectionId: string,
  callback: () => void,
) => {
  const [coll, setColl] = useState<DocumentData[] | undefined>();
  const collectionRef = collection(db, collectionId);
  // trigger an effect whenever the collectionData observable publishes a new version of the data
  useEffect(() => {
    const subscription = collectionData(collectionRef).subscribe(
      (c: DocumentData[]) => {
        // in the effect, set the collection data. This triggers an update in any component using 'coll' (using this collection hook).
        setColl(c);
        callback();
      },
    );
    return () => {
      // run any any cleanup code
      subscription.unsubscribe();
    };
  }, [collectionId]);
  return coll;
};
```

### Build Actions to Write to our Database

Recall the 'anatomy of a Firestore real-time app' image. Now that we have hooked into our data, we need calls that will write to the data. In our case, we need calls to add, edit, and delete reviews. We also need calls to add books and get books/reviews by ID. NOTE: in this tutorial, we use the shortcut of concatenating titles and authors/reviewers to generate document IDs. DO NOT ACTUALLY DO THIS! Do the extra work of generating a Firestore document id with `doc()`.

Editing reviews:

```ts
export const editReview = async (id: string, update: Partial<FireReview>) => {
  await setDoc(doc(db, REVIEWS_PATH, id), update, { merge: true });
};
```

Adding reviews:

```ts
export const addReview = async (id: string, book: FireReview) => {
  // shh
  editReview(id, book);
};
```

Deleting reviews.

```ts
export const deleteReview = async (id: string) => {
  await deleteDoc(doc(db, REVIEWS_PATH, id));
};
```

Adding a book (when there is a new revew on a book that does not quite exist). Note that we use a `transaction` to create the book, because multiple users can attempt to create a book at the same time, so there may be data races (and we want to avoid duplicate entries).

```ts
export const addBook = async (id: string, book: FireBook) => {
  try {
    await runTransaction(db, async (transaction) => {
      const bookDocRef = doc(db, BOOKS_PATH, id);
      const bookDoc = await transaction.get(bookDocRef);

      if (bookDoc.exists()) {
        throw `Book ${book.title} by ${book.author} already exists!`;
      }

      transaction.update(bookDocRef, book);
    });
  } catch (e) {
    console.log('Transaction failed: ', e);
  }
};
```

Getting books and reviews by id:

```ts
export const getBookId = (book: FireBook) => {
  return `${book.title}::${book.author}`;
};
export const getReviewId = (review: FireReview) => {
  return `${review.title}::${review.author}::${review.reviewer}`;
};
```

Uploading a user when auth:

```ts
export const userUpload = (user: User | null, db: Firestore) => {
  if (user != null) {
    const uid = user.uid;
    const email = user.email || 'Dummy Email';

    runTransaction(db, async (transaction) => {
      const userDocumentReference = doc(collection(db, REVIEWERS_PATH), uid);

      const userDocument = await transaction.get(userDocumentReference);
      if (!userDocument.exists()) {
        const fullUserDocument: FireReviewer = {
          email,
        };
        transaction.set(userDocumentReference, fullUserDocument);
      }
      // eslint-disable-next-line no-console
    }).catch(() => console.error('Unable to upload user.'));
  }
};
```

### Finally, the filters to search & sort reviews

```ts
import { FireReview } from '../types';

export const sortByRating = (reviews: FireReview[]) =>
  [...reviews].sort((reviewA, reviewB) => reviewA.rating - reviewB.rating);

export const filterByTitle = (reviews: FireReview[], title: string) =>
  reviews.filter((review) => review.title === title);

export const filterByAuthor = (reviews: FireReview[], author: string) =>
  reviews.filter((review) => review.author === author);

export const filterByReviewer = (reviews: FireReview[], reviewer: string) =>
  reviews.filter((review) => review.reviewer === reviewer);

export const filterByBook = (
  reviews: FireReview[],
  title: string,
  author: string,
) =>
  reviews.filter(
    (review) => review.title === title && review.author === author,
  );
```

Now how can we use the above functions to implement the main feature of our books review platform?

```ts
export const getAvgRatingForBook = (
  reviews: FireReview[],
  title: string,
  author: string,
) => {
  const filteredList = filterByBook(reviews, title, author);
  return (
    filteredList.reduce((prevSum, review) => prevSum + review.rating, 0) /
    filteredList.length
  );
};

export const paginateReviews = (
  reviews: FireReview[],
  resultsPerPage: number,
  page: number,
) => {
  const lastPage = Math.ceil((reviews.length + 1) / page);
  const pageSanitized = Math.min(Math.max(0, page), lastPage);

  return reviews.filter(
    (value, i) =>
      i > pageSanitized * resultsPerPage &&
      i < Math.min(pageSanitized + 1, lastPage),
  );
};
```
