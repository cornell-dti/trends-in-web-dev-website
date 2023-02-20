"use strict";(self.webpackChunktrends_in_web_dev_website=self.webpackChunktrends_in_web_dev_website||[]).push([[1801],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5550:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"lecture9",title:"Lecture 9"},s=void 0,c={unversionedId:"lecture9",id:"version-2023sp/lecture9",isDocsHomePage:!1,title:"Lecture 9",description:"Lecture Slides",source:"@site/versioned_docs/version-2023sp/lecture9.md",sourceDirName:".",slug:"/lecture9",permalink:"/docs/lecture9",tags:[],version:"2023sp",frontMatter:{id:"lecture9",title:"Lecture 9"}},u=[{value:"Practice",id:"practice",children:[{value:"The Problem",id:"the-problem",children:[],level:3},{value:"Modeling the Problem",id:"modeling-the-problem",children:[{value:"Q: What are the main entities in the model?",id:"q-what-are-the-main-entities-in-the-model",children:[],level:4},{value:"Q: If each Entity can be represented by a data object, what will the structure be like?",id:"q-if-each-entity-can-be-represented-by-a-data-object-what-will-the-structure-be-like",children:[],level:4}],level:3},{value:"Building Out Our Solution",id:"building-out-our-solution",children:[],level:3},{value:"Q: What Typescript types do we need to write make our data structures concrete?",id:"q-what-typescript-types-do-we-need-to-write-make-our-data-structures-concrete",children:[{value:"Aside: Types or Interfaces?",id:"aside-types-or-interfaces",children:[],level:4},{value:"So What will our database type schema look like?",id:"so-what-will-our-database-type-schema-look-like",children:[],level:4},{value:"Upgrading our Types",id:"upgrading-our-types",children:[],level:4}],level:3}],level:2},{value:"Setting Up our Database",id:"setting-up-our-database",children:[{value:"Create Collections",id:"create-collections",children:[],level:3},{value:"Set Up Authentication",id:"set-up-authentication",children:[{value:"And on the client-side:",id:"and-on-the-client-side",children:[],level:4}],level:3}],level:2},{value:"Architecting the App",id:"architecting-the-app",children:[{value:"Avoid Hard-coding Routes!",id:"avoid-hard-coding-routes",children:[],level:3},{value:"Writing our collection query hooks",id:"writing-our-collection-query-hooks",children:[],level:3},{value:"Build Actions to Write to our Database",id:"build-actions-to-write-to-our-database",children:[],level:3},{value:"Finally, the filters to search &amp; sort reviews",id:"finally-the-filters-to-search--sort-reviews",children:[],level:3}],level:2}],d={toc:u};function p(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1J73ok4GlWVpunQ1eQeKR4aDqkSfXKZh1LOikKifY9tE/edit?usp=sharing"},"Lecture Slides")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"finalproject"},"Final Project Instructions")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"finalproject#milestone-1"},"Final Project - Milestone 1")," due ",(0,o.kt)("strong",{parentName:"p"},"TBD @michelle")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"finalproject#milestone-2"},"Final Project - Milestone 2")," due ",(0,o.kt)("strong",{parentName:"p"},"TBD @michelle")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"finalproject#milestone-3"},"Final Project - Milestone 3")," due ",(0,o.kt)("strong",{parentName:"p"},"TBD @michelle")),(0,o.kt)("h2",{id:"practice"},"Practice"),(0,o.kt)("h3",{id:"the-problem"},"The Problem"),(0,o.kt)("p",null,"Suppose you want to create a book rating platform \ud83d\udcda! Users will be able to search a book by title or author and see its avg. rating."),(0,o.kt)("p",null,"Users will be able to submit book reviews \ud83d\udce9 (one per book title max!) for a given title + author with a rating of 1-5 stars."),(0,o.kt)("p",null,"A review on a new book will upsert the set of books with a new book (if necessary) and a review associated with that book."),(0,o.kt)("p",null,"What can the user see?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reviews"),(0,o.kt)("li",{parentName:"ul"},"by book title"),(0,o.kt)("li",{parentName:"ul"},"by author"),(0,o.kt)("li",{parentName:"ul"},"by reviewer"),(0,o.kt)("li",{parentName:"ul"},"sort by avg. rating")),(0,o.kt)("h3",{id:"modeling-the-problem"},"Modeling the Problem"),(0,o.kt)("h4",{id:"q-what-are-the-main-entities-in-the-model"},"Q: What are the main entities in the model?"),(0,o.kt)("p",null,"AKA, what moving parts contribute to the changing data in the system?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"books (have authors & get reviewed)"),(0,o.kt)("li",{parentName:"ul"},"users (user === reviewer)"),(0,o.kt)("li",{parentName:"ul"},"book reviews (for a book, by a user)"),(0,o.kt)("li",{parentName:"ul"},"author (books may have the same title but different authors)")),(0,o.kt)("h4",{id:"q-if-each-entity-can-be-represented-by-a-data-object-what-will-the-structure-be-like"},"Q: If each Entity can be represented by a data object, what will the structure be like?"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Book")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- title (string)\n- author (string)\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Review")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- rating (number 1-5)\n- description (string)\n- title (string)\n\n- author (string)\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Reviewer/User")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- email (string)\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Author")),(0,o.kt)("p",null,'Authors are not a primary entity. The author is a very simple object that does not "own" any other data, at least according to the specifications of our book reviews platform. We may need to fetch books by author, but we do not ever need to know the list of all authors, for example.'),(0,o.kt)("h3",{id:"building-out-our-solution"},"Building Out Our Solution"),(0,o.kt)("h3",{id:"q-what-typescript-types-do-we-need-to-write-make-our-data-structures-concrete"},"Q: What Typescript types do we need to write make our data structures concrete?"),(0,o.kt)("h4",{id:"aside-types-or-interfaces"},"Aside: Types or Interfaces?"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Interface"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Better suited for raw data"),(0,o.kt)("td",{parentName:"tr",align:null},"Useful for a communication protocol or for rich objects with behavior (methods)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"(typically) has no functionality"),(0,o.kt)("td",{parentName:"tr",align:null},"Implemented by a class, which handles methods (class functions) efficiently")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Supports declaring methods, but this can only be implemented less efficiently"),(0,o.kt)("td",{parentName:"tr",align:null},"Usually wrapped in a library like RxJS\u2019s Observable data type")))),(0,o.kt)("h4",{id:"so-what-will-our-database-type-schema-look-like"},"So What will our database type schema look like?"),(0,o.kt)("p",null,"A no-brainer! Just take the above and shove them into a TypeScript file (types/index.ts):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export type FireBook = {\n  title: string;\n  author: string;\n};\n\nexport type FireReview = {\n  rating: number;\n  title: string;\n  author: string;\n  reviewer: string;\n};\n\nexport type FireReviewer = {\n  email: string;\n};\n")),(0,o.kt)("p",null,"Note that the primary reason we create a FireReviewer (user) for the site is to make authentication easiser. Firebase has nice features that can allow easy sign-on with Google OAuth and can pass along the signed in user's uid and email for us to store into Firestore into a ",(0,o.kt)("inlineCode",{parentName:"p"},"reviewers")," collection. Nice."),(0,o.kt)("h4",{id:"upgrading-our-types"},"Upgrading our Types"),(0,o.kt)("p",null,"There is a slight problem: the types shown above are perfect for enforcing/describing the data going into Book, Review, and Reviewer documents. But they are not enough to address a specific document! In order to address a specific document, it is necessary to create track an ID."),(0,o.kt)("p",null,"What we can do is the following: create an new FireDocument type and declare new types for Book, Review, and Reviewer as an intersection of FireXX and FireDocument!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export type FireDoc = {\n  id: string;\n};\n\nexport type Book = FireDoc & FireBook;\n\nexport type Review = FireDoc & FireReview;\n\nexport type Reviewer = FireDoc & FireReviewer;\n")),(0,o.kt)("p",null,"Great! Now we can address specific documents. In this case, the ",(0,o.kt)("inlineCode",{parentName:"p"},"uid")," of a logged-in user will serve as the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," of the user's own document. Now given a full Review type, for example, it is possible for Firestore to retreive the exact Review that we need."),(0,o.kt)("h2",{id:"setting-up-our-database"},"Setting Up our Database"),(0,o.kt)("h3",{id:"create-collections"},"Create Collections"),(0,o.kt)("p",null,"In order to track our Books, Reviews, and users (reviewers), we need to create collections for them each. Let's call them ",(0,o.kt)("inlineCode",{parentName:"p"},"books"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"reviewers"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"reviews"),"."),(0,o.kt)("p",null,"Let's start a collection!\n",(0,o.kt)("img",{alt:"Starting a Collection",src:n(962).Z})),(0,o.kt)("p",null,"Now let's give it a name!\n",(0,o.kt)("img",{alt:"Creating a Collection",src:n(7241).Z})),(0,o.kt)("p",null,"(Now repeat this for the other two collections)"),(0,o.kt)("h3",{id:"set-up-authentication"},"Set Up Authentication"),(0,o.kt)("p",null,"As mentioned above, Firebase has nice integration with Google sign-on. Let's take advantage of this!"),(0,o.kt)("p",null,"Open the Authentication Tab...\n",(0,o.kt)("img",{alt:"Opening the Authentication Tab",src:n(2083).Z})),(0,o.kt)("p",null,"...and select the 'Google' authentication strategy (this uses the Google sign-on)\n",(0,o.kt)("img",{alt:"Choosing the Google Auth strategy",src:n(6542).Z})),(0,o.kt)("h4",{id:"and-on-the-client-side"},"And on the client-side:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// TODO: Replace with your own Firebase config\nconst firebaseConfig = {\n  apiKey: 'asfasdfasdf',\n  authDomain: 'trends-sp22-lecture-8.firebaseapp.com',\n  projectId: 'trends-sp22-lecture-8',\n  storageBucket: 'trends-sp22-lecture-8.appspot.com',\n  messagingSenderId: 'sijiofdsjdi',\n  appId: '1:3209483200:web:u897j8ydq973342',\n};\n\nconst app = getApps().length ? getApp() : initializeApp(firebaseConfig);\n\nconst db = getFirestore(app);\n\nconst provider = new GoogleAuthProvider();\n\nprovider.setCustomParameters({\n  login_hint: 'user@example.com',\n  hd: 'cornell.edu',\n});\nprovider.addScope('email');\n\nconst auth = getAuth();\nsignInWithPopup(auth, provider)\n  .then((result) => {\n    // This gives you a Google Access Token. You can use it to access the Google API.\n    const credential = GoogleAuthProvider.credentialFromResult(result);\n    const token = credential?.accessToken;\n    // The signed-in user info.\n    const user = result.user;\n    userUpload(user, db);\n    // ...\n  })\n  .catch((error) => {\n    // Handle Errors here.\n    const errorCode = error.code;\n    const errorMessage = error.message;\n    // The email of the user's account used.\n    const email = error.email;\n    // The AuthCredential type that was used.\n    const credential = GoogleAuthProvider.credentialFromError(error);\n    // ...\n  });\n\nexport { db };\n")),(0,o.kt)("h2",{id:"architecting-the-app"},"Architecting the App"),(0,o.kt)("h3",{id:"avoid-hard-coding-routes"},"Avoid Hard-coding Routes!"),(0,o.kt)("p",null,"It's a good practice to avoid hard-coding constants such as the path to each collection. Better to include these into a ",(0,o.kt)("inlineCode",{parentName:"p"},"fireRoutes.ts")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export const BOOKS_PATH = 'books';\nexport const REVIEWERS_PATH = 'reviewers';\nexport const REVIEWS_PATH = 'reviews';\n")),(0,o.kt)("h3",{id:"writing-our-collection-query-hooks"},"Writing our collection query hooks"),(0,o.kt)("p",null,'With the database set up, we need to build queries on the database as well as actions that can write to the database. To avoid prop drilling, we need to build custom React hooks that allow any component to use and "hook into" our data. Our custom hooks need to always have the most up-to-date data available (it is a real-time database after all), so we need to store the information in state variables (so that any components using these variables will be updated when the variable updates).'),(0,o.kt)("p",null,"We can start this a file ",(0,o.kt)("inlineCode",{parentName:"p"},"fireHooks.ts"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const useCollectionWithCallback = (\n  collectionId: string,\n  callback: () => void\n) => {\n  const [coll, setColl] = useState<DocumentData[] | undefined>();\n  const collectionRef = collection(db, collectionId);\n  // Trigger an effect whenever the query returns a new snapshot\n  useEffect(() => {\n    const unsubscribe = onSnapshot(query(collectionRef), (querySnapshot) => {\n      const docsInCollection: DocumentData[] = [];\n\n      querySnapshot.forEach((doc) => docsInCollection.push(doc.data()));\n      // in the effect, set the collection data. This triggers an update in any component using 'coll' (using this collection hook).\n      setColl(docsInCollection);\n      callback();\n    });\n    return () => {\n      // run any any cleanup code\n      unsubscribe();\n    };\n  }, [collectionId]);\n  return coll;\n};\n")),(0,o.kt)("p",null,"Alternatively, in a slightly nicer (more functional, more Observable-y way), we can use the rxFire package to simplify some of the code for us:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const useCollectionWithCallback2 = (\n  collectionId: string,\n  callback: () => void\n) => {\n  const [coll, setColl] = useState<DocumentData[] | undefined>();\n  const collectionRef = collection(db, collectionId);\n  // trigger an effect whenever the collectionData observable publishes a new version of the data\n  useEffect(() => {\n    const subscription = collectionData(collectionRef).subscribe(\n      (c: DocumentData[]) => {\n        // in the effect, set the collection data. This triggers an update in any component using 'coll' (using this collection hook).\n        setColl(c);\n        callback();\n      }\n    );\n    return () => {\n      // run any any cleanup code\n      subscription.unsubscribe();\n    };\n  }, [collectionId]);\n  return coll;\n};\n")),(0,o.kt)("h3",{id:"build-actions-to-write-to-our-database"},"Build Actions to Write to our Database"),(0,o.kt)("p",null,"Recall the 'anatomy of a Firestore real-time app' image. Now that we have hooked into our data, we need calls that will write to the data. In our case, we need calls to add, edit, and delete reviews. We also need calls to add books and get books/reviews by ID. NOTE: in this tutorial, we use the shortcut of concatenating titles and authors/reviewers to generate document IDs. DO NOT ACTUALLY DO THIS! Do the extra work of generating a Firestore document id with ",(0,o.kt)("inlineCode",{parentName:"p"},"doc()"),"."),(0,o.kt)("p",null,"Editing reviews:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export const editReview = async (id: string, update: Partial<FireReview>) => {\n  await setDoc(doc(db, REVIEWS_PATH, id), update, { merge: true });\n};\n")),(0,o.kt)("p",null,"Adding reviews:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export const addReview = async (id: string, book: FireReview) => {\n  // shh\n  editReview(id, book);\n};\n")),(0,o.kt)("p",null,"Deleting reviews."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export const deleteReview = async (id: string) => {\n  await deleteDoc(doc(db, REVIEWS_PATH, id));\n};\n")),(0,o.kt)("p",null,"Adding a book (when there is a new revew on a book that does not quite exist). Note that we use a ",(0,o.kt)("inlineCode",{parentName:"p"},"transaction")," to create the book, because multiple users can attempt to create a book at the same time, so there may be data races (and we want to avoid duplicate entries)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export const addBook = async (id: string, book: FireBook) => {\n  try {\n    await runTransaction(db, async (transaction) => {\n      const bookDocRef = doc(db, BOOKS_PATH, id);\n      const bookDoc = await transaction.get(bookDocRef);\n\n      if (bookDoc.exists()) {\n        throw `Book ${book.title} by ${book.author} already exists!`;\n      }\n\n      transaction.update(bookDocRef, book);\n    });\n  } catch (e) {\n    console.log('Transaction failed: ', e);\n  }\n};\n")),(0,o.kt)("p",null,"Getting books and reviews by id:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export const getBookId = (book: FireBook) => {\n  return `${book.title}::${book.author}`;\n};\nexport const getReviewId = (review: FireReview) => {\n  return `${review.title}::${review.author}::${review.reviewer}`;\n};\n")),(0,o.kt)("p",null,"Uploading a user when auth:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export const userUpload = (user: User | null, db: Firestore) => {\n  if (user != null) {\n    const uid = user.uid;\n    const email = user.email || 'Dummy Email';\n\n    runTransaction(db, async (transaction) => {\n      const userDocumentReference = doc(collection(db, REVIEWERS_PATH), uid);\n\n      const userDocument = await transaction.get(userDocumentReference);\n      if (!userDocument.exists()) {\n        const fullUserDocument: FireReviewer = {\n          email,\n        };\n        transaction.set(userDocumentReference, fullUserDocument);\n      }\n      // eslint-disable-next-line no-console\n    }).catch(() => console.error('Unable to upload user.'));\n  }\n};\n")),(0,o.kt)("h3",{id:"finally-the-filters-to-search--sort-reviews"},"Finally, the filters to search & sort reviews"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { FireReview } from '../types';\n\nexport const sortByRating = (reviews: FireReview[]) =>\n  [...reviews].sort((reviewA, reviewB) => reviewA.rating - reviewB.rating);\n\nexport const filterByTitle = (reviews: FireReview[], title: string) =>\n  reviews.filter((review) => review.title === title);\n\nexport const filterByAuthor = (reviews: FireReview[], author: string) =>\n  reviews.filter((review) => review.author === author);\n\nexport const filterByReviewer = (reviews: FireReview[], reviewer: string) =>\n  reviews.filter((review) => review.reviewer === reviewer);\n\nexport const filterByBook = (\n  reviews: FireReview[],\n  title: string,\n  author: string\n) =>\n  reviews.filter(\n    (review) => review.title === title && review.author === author\n  );\n")),(0,o.kt)("p",null,"Now how can we use the above functions to implement the main feature of our books review platform?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export const getAvgRatingForBook = (\n  reviews: FireReview[],\n  title: string,\n  author: string\n) => {\n  const filteredList = filterByBook(reviews, title, author);\n  return (\n    filteredList.reduce((prevSum, review) => prevSum + review.rating, 0) /\n    filteredList.length\n  );\n};\n\nexport const paginateReviews = (\n  reviews: FireReview[],\n  resultsPerPage: number,\n  page: number\n) => {\n  const lastPage = Math.ceil((reviews.length + 1) / page);\n  const pageSanitized = Math.min(Math.max(0, page), lastPage);\n\n  return reviews.filter(\n    (value, i) =>\n      i > pageSanitized * resultsPerPage &&\n      i < Math.min(pageSanitized + 1, lastPage)\n  );\n};\n")))}p.isMDXComponent=!0},6542:function(e,t,n){t.Z=n.p+"assets/images/choose-auth-d5d53b0b844b4f8aadfaf3ade84d6507.png"},2083:function(e,t,n){t.Z=n.p+"assets/images/open-auth-f7dd76cab784f8cb4d176929fc0ee4f5.png"},7241:function(e,t,n){t.Z=n.p+"assets/images/save-collection-492d86f53cfb36183b76e6819e780a3b.png"},962:function(e,t,n){t.Z=n.p+"assets/images/start-collection-5d6f62d8a4045a5bb607f72ee42a2c78.png"}}]);