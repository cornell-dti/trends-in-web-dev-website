"use strict";(self.webpackChunktrends_in_web_dev_website=self.webpackChunktrends_in_web_dev_website||[]).push([[4315],{7300:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(6687);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1486:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=a(3206),r=a(5421),o=(a(6687),a(7300)),i=["components"],l={id:"lecture8",title:"Lecture 8"},s=void 0,c={unversionedId:"lecture8",id:"version-2022fa/lecture8",isDocsHomePage:!1,title:"Lecture 8",description:"Lecture Slides",source:"@site/versioned_docs/version-2022fa/lecture7.md",sourceDirName:".",slug:"/lecture8",permalink:"/docs/lecture8",tags:[],version:"2022fa",frontMatter:{id:"lecture8",title:"Lecture 8"}},u=[{value:"Querying Methods for your React/Next.js App",id:"querying-methods-for-your-reactnextjs-app",children:[{value:"How do Callback/Promise-based vs. Real-Time Queries Look Like?",id:"how-do-callbackpromise-based-vs-real-time-queries-look-like",children:[],level:3},{value:"How Do Callback/Promised Based vs. Real-Time Queries Work?",id:"how-do-callbackpromised-based-vs-real-time-queries-work",children:[],level:3},{value:"Choosing a Querying Method",id:"choosing-a-querying-method",children:[],level:3}],level:2},{value:"Your Firebase Firestore Application: Callback/Promise-based or Real-Time Queries",id:"your-firebase-firestore-application-callbackpromise-based-or-real-time-queries",children:[],level:2},{value:"Firestore Real-time Queries",id:"firestore-real-time-queries",children:[],level:2},{value:"Anatomy of a Firebase Firestore Real-Time Application (The &quot;Full&quot; Stack)",id:"anatomy-of-a-firebase-firestore-real-time-application-the-full-stack",children:[],level:2},{value:"Miscellaneous Advice",id:"miscellaneous-advice",children:[],level:2},{value:"The Problem",id:"the-problem",children:[],level:2},{value:"Modeling the Problem",id:"modeling-the-problem",children:[{value:"Q: What are the main entities in the model?",id:"q-what-are-the-main-entities-in-the-model",children:[],level:3},{value:"Q: If each Entity can be represented by a data object, what will the structure be like?",id:"q-if-each-entity-can-be-represented-by-a-data-object-what-will-the-structure-be-like",children:[],level:3}],level:2},{value:"Building Out our Solution",id:"building-out-our-solution",children:[{value:"Q: What Typescript types do we need to write make our data structures concrete?",id:"q-what-typescript-types-do-we-need-to-write-make-our-data-structures-concrete",children:[{value:"Aside: Types or Interfaces?",id:"aside-types-or-interfaces",children:[],level:4},{value:"So What will our database type schema look like?",id:"so-what-will-our-database-type-schema-look-like",children:[],level:4},{value:"Upgrading our Types",id:"upgrading-our-types",children:[],level:4}],level:3}],level:2},{value:"Setting Up our Database",id:"setting-up-our-database",children:[{value:"Create Collections",id:"create-collections",children:[],level:3},{value:"Set Up Authentication",id:"set-up-authentication",children:[{value:"And on the client-side:",id:"and-on-the-client-side",children:[],level:4}],level:3}],level:2},{value:"Architecting the App",id:"architecting-the-app",children:[{value:"Avoid Hard-coding Routes!",id:"avoid-hard-coding-routes",children:[],level:3},{value:"Writing our collection query hooks",id:"writing-our-collection-query-hooks",children:[],level:3},{value:"Build Actions to Write to our Database",id:"build-actions-to-write-to-our-database",children:[],level:3},{value:"Finally, the filters to search &amp; sort reviews",id:"finally-the-filters-to-search--sort-reviews",children:[],level:3}],level:2}],d={toc:u};function p(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1kvB0qMpubHe0dUMLni_e4GrGujrWF1ie/edit#slide=id.p39"},"Lecture Slides")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"assignment4"},"Assignment 4")," (Due 11/14 at 11:59pm)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"finalproject"},"Final Project")," (MS0 Due 11/21, MS1 Due 11/28, MS2 Due 12/5, MS3 Due 12/13 at 11:59pm)"),(0,o.kt)("h1",{id:"some-theory"},"Some Theory"),(0,o.kt)("h2",{id:"querying-methods-for-your-reactnextjs-app"},"Querying Methods for your React/Next.js App"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Promise-Based"),(0,o.kt)("th",{parentName:"tr",align:null},"Real-Time"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"If you need the data now, you can query for it"),(0,o.kt)("td",{parentName:"tr",align:null},"You already have the data")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Data queries can be decentralized (done in any component)"),(0,o.kt)("td",{parentName:"tr",align:null},"Data queries are fetched and memoized through centralized (React) hooks")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Quering data is imperative can quickly become spaghetti (and you lose some of the advantages of a declarative web UI framework)"),(0,o.kt)("td",{parentName:"tr",align:null},"Up-front cost to query data that pays off (because you don't ",(0,o.kt)("em",{parentName:"td"},"Hopefully")," have to query it again)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"There is no cleanup code"),(0,o.kt)("td",{parentName:"tr",align:null},'You first have to "subscribe" to changes in the data, then unsubscribe after you are done (kind of like opening and closing a file stream when reading a file)')))),(0,o.kt)("h3",{id:"how-do-callbackpromise-based-vs-real-time-queries-look-like"},"How do Callback/Promise-based vs. Real-Time Queries Look Like?"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Promise-Based"),(0,o.kt)("th",{parentName:"tr",align:null},"Real-Time"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Single query, single async result"),(0,o.kt)("td",{parentName:"tr",align:null},"Single query, a stream of async results")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"- Async: result arrives at an unspecified time, outside the sequential execution context of the rest of your code"),(0,o.kt)("td",{parentName:"tr",align:null},"- ex: weather data")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Run once, pass along indefinitely downstream (children & other descendants of your component)"),(0,o.kt)("td",{parentName:"tr",align:null},'Listenable data that needs to be "subscribed to"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Typically reacts to some update"),(0,o.kt)("td",{parentName:"tr",align:null},"Built on top of WebSockets")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"-ex: user click, first time a component loads, etc."),(0,o.kt)("td",{parentName:"tr",align:null},"- ex: an abstraction over a byte stream")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Good for\u2026 real-time applications")))),(0,o.kt)("h3",{id:"how-do-callbackpromised-based-vs-real-time-queries-work"},"How Do Callback/Promised Based vs. Real-Time Queries Work?"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Promise-Based"),(0,o.kt)("th",{parentName:"tr",align:null},"Real-Time"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Typically calls a (backend) API route that fetches & returns data to you"),(0,o.kt)("td",{parentName:"tr",align:null},"Might call a backend route to pass data over a WebSocket")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Usually built on top of HTTP requests"),(0,o.kt)("td",{parentName:"tr",align:null},"Or simply uses an API library to make calls directly to a database")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Built on top pf HTTP Requests"),(0,o.kt)("td",{parentName:"tr",align:null},"- ex: Firebase Firestore call")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Usually wrapped in a library like RxJS\u2019s Observable data type or function calls that allow you to subscribe to changes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h3",{id:"choosing-a-querying-method"},"Choosing a Querying Method"),(0,o.kt)("p",null,'As described in the first section, the type of queries your application will use will affect the app\'s architecture.\nIn particular, real-time queries play nicely with having a centralized query that runs over a listenable data access object that is "owned" either by'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"a top-level component (OK in small apps, but prone to prop drilling in more complex apps), or"),(0,o.kt)("li",{parentName:"ol"},"a custom React hook that wraps an effect (triggering an update when the data access object publishes a new version of the data)")),(0,o.kt)("p",null,"That is not to say that your app cannot use both types of queries. It is just that a real-time application requires a specific architecture in which all data is queried first and passed along to components as props or referenced by components via (potentially custom) React/Redux hooks. This does not play nicely with callback/Promise-based queries because the data from the callback/Promise-based queries may be in an inconsistent state by the time the data from a real-time query has updated."),(0,o.kt)("h2",{id:"your-firebase-firestore-application-callbackpromise-based-or-real-time-queries"},"Your Firebase Firestore Application: Callback/Promise-based or Real-Time Queries"),(0,o.kt)("p",null,"Firestore offers you a database that nicely organizes your data into ",(0,o.kt)("em",{parentName:"p"},"documents")," and ",(0,o.kt)("em",{parentName:"p"},"collections")," (groups of documents). It allows you to build queries that can either"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"return ",(0,o.kt)("em",{parentName:"li"},"once")," with a single snapshot of data (a Promise-based query), or"),(0,o.kt)("li",{parentName:"ol"},"allow you to hook into the data's live values (a real-time query).")),(0,o.kt)("h2",{id:"firestore-real-time-queries"},"Firestore Real-time Queries"),(0,o.kt)("p",null,"Provides collection + document data as an listenable (subscribable) data object"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As soon as a collection updates, the collection access object publishes a new version of the collection"),(0,o.kt)("li",{parentName:"ul"},"As soon as a doc updates, the doc access object publishes a new version of the doc\nThis can be passed as a React prop or an effect dependency, which triggers a component update!")),(0,o.kt)("h2",{id:"anatomy-of-a-firebase-firestore-real-time-application-the-full-stack"},'Anatomy of a Firebase Firestore Real-Time Application (The "Full" Stack)'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Anatomy of a Firebase Firestore Real-Time Update",src:a(7713).Z})),(0,o.kt)("p",null,"Unlike callback/promise-based queries, the connection between updating and fetching data is completely gone. Updating data occurs along an entirely separate channel from subscribing to the data. This means that implementing calls to update data will look very different"),(0,o.kt)("h2",{id:"miscellaneous-advice"},"Miscellaneous Advice"),(0,o.kt)("p",null,"When designing a system:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"avoid two-way dependencies (or as many dependencies as possible)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"as with React & declarative web frameworks, one-way data binding is the way to go"),(0,o.kt)("li",{parentName:"ul"},"avoids: more things to update"),(0,o.kt)("li",{parentName:"ul"},"avoids: more surface area for synchronization errors")))),(0,o.kt)("p",null,"This philosophy helps us prefer real-time queries over Promise-based queries, because there is only a single dependency for the queried data, rather than the set of all the decentralized Promise-based queries."),(0,o.kt)("h1",{id:"the-practice"},"The Practice"),(0,o.kt)("h2",{id:"the-problem"},"The Problem"),(0,o.kt)("p",null,"Suppose you want to create a book rating platform \ud83d\udcda! Users will be able to search a book by title or author and see its avg. rating."),(0,o.kt)("p",null,"Users will be able to submit book reviews \ud83d\udce9 (one per book title max!) for a given title + author with a rating of 1-5 stars."),(0,o.kt)("p",null,"A review on a new book will upsert the set of books with a new book (if necessary) and a review associated with that book."),(0,o.kt)("p",null,"What can the user see?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reviews"),(0,o.kt)("li",{parentName:"ul"},"by book title"),(0,o.kt)("li",{parentName:"ul"},"by author"),(0,o.kt)("li",{parentName:"ul"},"by reviewer"),(0,o.kt)("li",{parentName:"ul"},"sort by avg. rating")),(0,o.kt)("h2",{id:"modeling-the-problem"},"Modeling the Problem"),(0,o.kt)("h3",{id:"q-what-are-the-main-entities-in-the-model"},"Q: What are the main entities in the model?"),(0,o.kt)("p",null,"AKA, what moving parts contribute to the changing data in the system?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"books (have authors & get reviewed)"),(0,o.kt)("li",{parentName:"ul"},"users (user === reviewer)"),(0,o.kt)("li",{parentName:"ul"},"book reviews (for a book, by a user)"),(0,o.kt)("li",{parentName:"ul"},"author (books may have the same title but different authors)")),(0,o.kt)("h3",{id:"q-if-each-entity-can-be-represented-by-a-data-object-what-will-the-structure-be-like"},"Q: If each Entity can be represented by a data object, what will the structure be like?"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Book")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- title (string)\n- author (string)\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Review")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- rating (number 1-5)\n- description (string)\n- title (string)\n\n- author (string)\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Reviewer/User")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- email (string)\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Author")),(0,o.kt)("p",null,'Authors are not a primary entity. The author is a very simple object that does not "own" any other data, at least according to the specifications of our book reviews platform. We may need to fetch books by author, but we do not ever need to know the list of all authors, for example.'),(0,o.kt)("h2",{id:"building-out-our-solution"},"Building Out our Solution"),(0,o.kt)("h3",{id:"q-what-typescript-types-do-we-need-to-write-make-our-data-structures-concrete"},"Q: What Typescript types do we need to write make our data structures concrete?"),(0,o.kt)("h4",{id:"aside-types-or-interfaces"},"Aside: Types or Interfaces?"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Interface"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Better suited for raw data"),(0,o.kt)("td",{parentName:"tr",align:null},"Useful for a communication protocol or for rich objects with behavior (methods)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"(typically) has no functionality"),(0,o.kt)("td",{parentName:"tr",align:null},"Implemented by a class, which handles methods (class functions) efficiently")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Supports declaring methods, but this can only be implemented less efficiently"),(0,o.kt)("td",{parentName:"tr",align:null},"Usually wrapped in a library like RxJS\u2019s Observable data type")))),(0,o.kt)("h4",{id:"so-what-will-our-database-type-schema-look-like"},"So What will our database type schema look like?"),(0,o.kt)("p",null,"A no-brainer! Just take the above and shove them into a TypeScript file (types/index.ts):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export type FireBook = {\n  title: string;\n  author: string;\n};\n\nexport type FireReview = {\n  rating: number;\n  title: string;\n  author: string;\n  reviewer: string;\n};\n\nexport type FireReviewer = {\n  email: string;\n};\n")),(0,o.kt)("p",null,"Note that the primary reason we create a FireReviewer (user) for the site is to make authentication easiser. Firebase has nice features that can allow easy sign-on with Google OAuth and can pass along the signed in user's uid and email for us to store into Firestore into a ",(0,o.kt)("inlineCode",{parentName:"p"},"reviewers")," collection. Nice."),(0,o.kt)("h4",{id:"upgrading-our-types"},"Upgrading our Types"),(0,o.kt)("p",null,"There is a slight problem: the types shown above are perfect for enforcing/describing the data going into Book, Review, and Reviewer documents. But they are not enough to address a specific document! In order to address a specific document, it is necessary to create track an ID."),(0,o.kt)("p",null,"What we can do is the following: create an new FireDocument type and declare new types for Book, Review, and Reviewer as an intersection of FireXX and FireDocument!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export type FireDoc = {\n  id: string;\n};\n\nexport type Book = FireDoc & FireBook;\n\nexport type Review = FireDoc & FireReview;\n\nexport type Reviewer = FireDoc & FireReviewer;\n")),(0,o.kt)("p",null,"Great! Now we can address specific documents. In this case, the ",(0,o.kt)("inlineCode",{parentName:"p"},"uid")," of a logged-in user will serve as the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," of the user's own document. Now given a full Review type, for example, it is possible for Firestore to retreive the exact Review that we need."),(0,o.kt)("h2",{id:"setting-up-our-database"},"Setting Up our Database"),(0,o.kt)("h3",{id:"create-collections"},"Create Collections"),(0,o.kt)("p",null,"In order to track our Books, Reviews, and users (reviewers), we need to create collections for them each. Let's call them ",(0,o.kt)("inlineCode",{parentName:"p"},"books"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"reviewers"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"reviews"),"."),(0,o.kt)("p",null,"Let's start a collection!\n",(0,o.kt)("img",{alt:"Starting a Collection",src:a(7600).Z})),(0,o.kt)("p",null,"Now let's give it a name!\n",(0,o.kt)("img",{alt:"Creating a Collection",src:a(2243).Z})),(0,o.kt)("p",null,"(Now repeat this for the other two collections)"),(0,o.kt)("h3",{id:"set-up-authentication"},"Set Up Authentication"),(0,o.kt)("p",null,"As mentioned above, Firebase has nice integration with Google sign-on. Let's take advantage of this!"),(0,o.kt)("p",null,"Open the Authentication Tab...\n",(0,o.kt)("img",{alt:"Opening the Authentication Tab",src:a(6819).Z})),(0,o.kt)("p",null,"...and select the 'Google' authentication strategy (this uses the Google sign-on)\n",(0,o.kt)("img",{alt:"Choosing the Google Auth strategy",src:a(6508).Z})),(0,o.kt)("h4",{id:"and-on-the-client-side"},"And on the client-side:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// TODO: Replace with your own Firebase config\nconst firebaseConfig = {\n  apiKey: 'asfasdfasdf',\n  authDomain: 'trends-sp22-lecture-8.firebaseapp.com',\n  projectId: 'trends-sp22-lecture-8',\n  storageBucket: 'trends-sp22-lecture-8.appspot.com',\n  messagingSenderId: 'sijiofdsjdi',\n  appId: '1:3209483200:web:u897j8ydq973342',\n};\n\nconst app = getApps().length ? getApp() : initializeApp(firebaseConfig);\n\nconst db = getFirestore(app);\n\nconst provider = new GoogleAuthProvider();\n\nprovider.setCustomParameters({\n  login_hint: 'user@example.com',\n  hd: 'cornell.edu',\n});\nprovider.addScope('email');\n\nconst auth = getAuth();\nsignInWithPopup(auth, provider)\n  .then((result) => {\n    // This gives you a Google Access Token. You can use it to access the Google API.\n    const credential = GoogleAuthProvider.credentialFromResult(result);\n    const token = credential?.accessToken;\n    // The signed-in user info.\n    const user = result.user;\n    userUpload(user, db);\n    // ...\n  })\n  .catch((error) => {\n    // Handle Errors here.\n    const errorCode = error.code;\n    const errorMessage = error.message;\n    // The email of the user's account used.\n    const email = error.email;\n    // The AuthCredential type that was used.\n    const credential = GoogleAuthProvider.credentialFromError(error);\n    // ...\n  });\n\nexport { db };\n")),(0,o.kt)("h2",{id:"architecting-the-app"},"Architecting the App"),(0,o.kt)("h3",{id:"avoid-hard-coding-routes"},"Avoid Hard-coding Routes!"),(0,o.kt)("p",null,"It's a good practice to avoid hard-coding constants such as the path to each collection. Better to include these into a ",(0,o.kt)("inlineCode",{parentName:"p"},"fireRoutes.ts")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export const BOOKS_PATH = 'books';\nexport const REVIEWERS_PATH = 'reviewers';\nexport const REVIEWS_PATH = 'reviews';\n")),(0,o.kt)("h3",{id:"writing-our-collection-query-hooks"},"Writing our collection query hooks"),(0,o.kt)("p",null,'With the database set up, we need to build queries on the database as well as actions that can write to the database. To avoid prop drilling, we need to build custom React hooks that allow any component to use and "hook into" our data. Our custom hooks need to always have the most up-to-date data available (it is a real-time database after all), so we need to store the information in state variables (so that any components using these variables will be updated when the variable updates).'),(0,o.kt)("p",null,"We can start this a file ",(0,o.kt)("inlineCode",{parentName:"p"},"fireHooks.ts"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const useCollectionWithCallback = (\n  collectionId: string,\n  callback: () => void\n) => {\n  const [coll, setColl] = useState<DocumentData[] | undefined>();\n  const collectionRef = collection(db, collectionId);\n  // Trigger an effect whenever the query returns a new snapshot\n  useEffect(() => {\n    const unsubscribe = onSnapshot(query(collectionRef), (querySnapshot) => {\n      const docsInCollection: DocumentData[] = [];\n\n      querySnapshot.forEach((doc) => docsInCollection.push(doc.data()));\n      // in the effect, set the collection data. This triggers an update in any component using 'coll' (using this collection hook).\n      setColl(docsInCollection);\n      callback();\n    });\n    return () => {\n      // run any any cleanup code\n      unsubscribe();\n    };\n  }, [collectionId]);\n  return coll;\n};\n")),(0,o.kt)("p",null,"Alternatively, in a slightly nicer (more functional, more Observable-y way), we can use the rxFire package to simplify some of the code for us:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const useCollectionWithCallback2 = (\n  collectionId: string,\n  callback: () => void\n) => {\n  const [coll, setColl] = useState<DocumentData[] | undefined>();\n  const collectionRef = collection(db, collectionId);\n  // trigger an effect whenever the collectionData observable publishes a new version of the data\n  useEffect(() => {\n    const subscription = collectionData(collectionRef).subscribe(\n      (c: DocumentData[]) => {\n        // in the effect, set the collection data. This triggers an update in any component using 'coll' (using this collection hook).\n        setColl(c);\n        callback();\n      }\n    );\n    return () => {\n      // run any any cleanup code\n      subscription.unsubscribe();\n    };\n  }, [collectionId]);\n  return coll;\n};\n")),(0,o.kt)("h3",{id:"build-actions-to-write-to-our-database"},"Build Actions to Write to our Database"),(0,o.kt)("p",null,"Recall the 'anatomy of a Firestore real-time app' image. Now that we have hooked into our data, we need calls that will write to the data. In our case, we need calls to add, edit, and delete reviews. We also need calls to add books and get books/reviews by ID. NOTE: in this tutorial, we use the shortcut of concatenating titles and authors/reviewers to generate document IDs. DO NOT ACTUALLY DO THIS! Do the extra work of generating a Firestore document id with ",(0,o.kt)("inlineCode",{parentName:"p"},"doc()"),"."),(0,o.kt)("p",null,"Editing reviews:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export const editReview = async (id: string, update: Partial<FireReview>) => {\n  await setDoc(doc(db, REVIEWS_PATH, id), update, { merge: true });\n};\n")),(0,o.kt)("p",null,"Adding reviews:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export const addReview = async (id: string, book: FireReview) => {\n  // shh\n  editReview(id, book);\n};\n")),(0,o.kt)("p",null,"Deleting reviews."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export const deleteReview = async (id: string) => {\n  await deleteDoc(doc(db, REVIEWS_PATH, id));\n};\n")),(0,o.kt)("p",null,"Adding a book (when there is a new revew on a book that does not quite exist). Note that we use a ",(0,o.kt)("inlineCode",{parentName:"p"},"transaction")," to create the book, because multiple users can attempt to create a book at the same time, so there may be data races (and we want to avoid duplicate entries)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export const addBook = async (id: string, book: FireBook) => {\n  try {\n    await runTransaction(db, async (transaction) => {\n      const bookDocRef = doc(db, BOOKS_PATH, id);\n      const bookDoc = await transaction.get(bookDocRef);\n\n      if (bookDoc.exists()) {\n        throw `Book ${book.title} by ${book.author} already exists!`;\n      }\n\n      transaction.update(bookDocRef, book);\n    });\n  } catch (e) {\n    console.log('Transaction failed: ', e);\n  }\n};\n")),(0,o.kt)("p",null,"Getting books and reviews by id:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export const getBookId = (book: FireBook) => {\n  return `${book.title}::${book.author}`;\n};\nexport const getReviewId = (review: FireReview) => {\n  return `${review.title}::${review.author}::${review.reviewer}`;\n};\n")),(0,o.kt)("p",null,"Uploading a user when auth:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export const userUpload = (user: User | null, db: Firestore) => {\n  if (user != null) {\n    const uid = user.uid;\n    const email = user.email || 'Dummy Email';\n\n    runTransaction(db, async (transaction) => {\n      const userDocumentReference = doc(collection(db, REVIEWERS_PATH), uid);\n\n      const userDocument = await transaction.get(userDocumentReference);\n      if (!userDocument.exists()) {\n        const fullUserDocument: FireReviewer = {\n          email,\n        };\n        transaction.set(userDocumentReference, fullUserDocument);\n      }\n      // eslint-disable-next-line no-console\n    }).catch(() => console.error('Unable to upload user.'));\n  }\n};\n")),(0,o.kt)("h3",{id:"finally-the-filters-to-search--sort-reviews"},"Finally, the filters to search & sort reviews"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { FireReview } from '../types';\n\nexport const sortByRating = (reviews: FireReview[]) =>\n  [...reviews].sort((reviewA, reviewB) => reviewA.rating - reviewB.rating);\n\nexport const filterByTitle = (reviews: FireReview[], title: string) =>\n  reviews.filter((review) => review.title === title);\n\nexport const filterByAuthor = (reviews: FireReview[], author: string) =>\n  reviews.filter((review) => review.author === author);\n\nexport const filterByReviewer = (reviews: FireReview[], reviewer: string) =>\n  reviews.filter((review) => review.reviewer === reviewer);\n\nexport const filterByBook = (\n  reviews: FireReview[],\n  title: string,\n  author: string\n) =>\n  reviews.filter(\n    (review) => review.title === title && review.author === author\n  );\n")),(0,o.kt)("p",null,"Now how can we use the above functions to implement the main feature of our books review platform?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export const getAvgRatingForBook = (\n  reviews: FireReview[],\n  title: string,\n  author: string\n) => {\n  const filteredList = filterByBook(reviews, title, author);\n  return (\n    filteredList.reduce((prevSum, review) => prevSum + review.rating, 0) /\n    filteredList.length\n  );\n};\n\nexport const paginateReviews = (\n  reviews: FireReview[],\n  resultsPerPage: number,\n  page: number\n) => {\n  const lastPage = Math.ceil((reviews.length + 1) / page);\n  const pageSanitized = Math.min(Math.max(0, page), lastPage);\n\n  return reviews.filter(\n    (value, i) =>\n      i > pageSanitized * resultsPerPage &&\n      i < Math.min(pageSanitized + 1, lastPage)\n  );\n};\n")))}p.isMDXComponent=!0},6508:function(e,t,a){t.Z=a.p+"assets/images/choose-auth-d5d53b0b844b4f8aadfaf3ade84d6507.png"},7713:function(e,t,a){t.Z=a.p+"assets/images/firestore-real-time-a90f29184434d35c8cd763ff852134fc.png"},6819:function(e,t,a){t.Z=a.p+"assets/images/open-auth-f7dd76cab784f8cb4d176929fc0ee4f5.png"},2243:function(e,t,a){t.Z=a.p+"assets/images/save-collection-492d86f53cfb36183b76e6819e780a3b.png"},7600:function(e,t,a){t.Z=a.p+"assets/images/start-collection-5d6f62d8a4045a5bb607f72ee42a2c78.png"},3206:function(e,t,a){function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},n.apply(this,arguments)}a.d(t,{Z:function(){return n}})},5421:function(e,t,a){function n(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,{Z:function(){return n}})}}]);