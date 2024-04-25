"use strict";(self.webpackChunktrends_in_web_dev_website=self.webpackChunktrends_in_web_dev_website||[]).push([[2141],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9376:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={id:"lecture7",title:"Lecture 7"},s=void 0,d={unversionedId:"lecture7",id:"version-2024sp/lecture7",isDocsHomePage:!1,title:"Lecture 7",description:"Lecture Slides",source:"@site/versioned_docs/version-2024sp/lecture7.md",sourceDirName:".",slug:"/lecture7",permalink:"/docs/lecture7",tags:[],version:"2024sp",frontMatter:{id:"lecture7",title:"Lecture 7"},sidebar:"docs",previous:{title:"Lecture 6",permalink:"/docs/lecture6"},next:{title:"Lecture 8",permalink:"/docs/lecture8"}},c=[{value:"Intro to Databases and Firebase",id:"intro-to-databases-and-firebase",children:[{value:"Why do we need a database for our backend?",id:"why-do-we-need-a-database-for-our-backend",children:[],level:3},{value:"Types of Databases",id:"types-of-databases",children:[],level:3},{value:"What is Firebase?",id:"what-is-firebase",children:[{value:"Why Firebase?",id:"why-firebase",children:[],level:4}],level:3}],level:2},{value:"Getting Started With Firestore",id:"getting-started-with-firestore",children:[{value:"Firestore Data Model",id:"firestore-data-model",children:[],level:3},{value:"Firestore Operations",id:"firestore-operations",children:[],level:3},{value:"Create",id:"create",children:[],level:3},{value:"Read",id:"read",children:[],level:3},{value:"Update",id:"update",children:[],level:3},{value:"Delete",id:"delete",children:[],level:3}],level:2},{value:"Callback/Promise-based vs Real-Time Queries",id:"callbackpromise-based-vs-real-time-queries",children:[{value:"What do Callback/Promise-based vs. Real-Time Queries Look Like?",id:"what-do-callbackpromise-based-vs-real-time-queries-look-like",children:[],level:3},{value:"How Do Callback/Promised Based vs. Real-Time Queries Work?",id:"how-do-callbackpromised-based-vs-real-time-queries-work",children:[],level:3},{value:"Choosing a Querying Method",id:"choosing-a-querying-method",children:[],level:3},{value:"Firebase Firestore Application: Callback/Promise-based or Real-Time Queries",id:"firebase-firestore-application-callbackpromise-based-or-real-time-queries",children:[{value:"Firestore Real-time Queries",id:"firestore-real-time-queries",children:[],level:4},{value:"Anatomy of a Firebase Firestore Real-Time Application (The &quot;Full&quot; Stack)",id:"anatomy-of-a-firebase-firestore-real-time-application-the-full-stack",children:[],level:4},{value:"Miscellaneous Advice",id:"miscellaneous-advice",children:[],level:4}],level:3}],level:2},{value:"Sample code",id:"sample-code",children:[],level:2},{value:"Instruction to connect Firebase with demo code",id:"instruction-to-connect-firebase-with-demo-code",children:[{value:"Create new Firebase webapp and database",id:"create-new-firebase-webapp-and-database",children:[],level:3},{value:"Connect your codebase to Firebase",id:"connect-your-codebase-to-firebase",children:[],level:3}],level:2}],p={toc:c};function u(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1ODV1BWR333kGsO9OUSpprrQt3Fgp0sw85z9Kr4_OuIU/edit?usp=sharing"},"Lecture Slides")),(0,i.kt)("h2",{id:"intro-to-databases-and-firebase"},"Intro to Databases and Firebase"),(0,i.kt)("p",null,"A lot of the apps we have been making work and maintain states throughout the\nlifetime of the app, but lack one critical feature - if we restart the app\nor refresh the page, all of our data disappears! We need\nsome kind of persistent storage for this data, which is where ",(0,i.kt)("strong",{parentName:"p"},"databases")," get involved."),(0,i.kt)("h3",{id:"why-do-we-need-a-database-for-our-backend"},"Why do we need a database for our backend?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data stored within Node.js is per instance"),(0,i.kt)("li",{parentName:"ul"},"Most applications require persistence"),(0,i.kt)("li",{parentName:"ul"},"Data analysis"),(0,i.kt)("li",{parentName:"ul"},"Performant data location"),(0,i.kt)("li",{parentName:"ul"},"Offloading unneeded data from memory")),(0,i.kt)("h3",{id:"types-of-databases"},"Types of Databases"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"SQL"),(0,i.kt)("th",{parentName:"tr",align:null},"NoSQL"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Stores data in tables, utilizing rows and tables"),(0,i.kt)("td",{parentName:"tr",align:null},"Stores data in documents")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Has predefined schema, which can be relational (tables can provide access to related data points in other tables)"),(0,i.kt)("td",{parentName:"tr",align:null},"Can abide to any structure you want (no schema or partial schema)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Less expensive for smaller datasets and can execute complex queries"),(0,i.kt)("td",{parentName:"tr",align:null},"Better for large sets of data, but not complex queries")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Less flexible"),(0,i.kt)("td",{parentName:"tr",align:null},"More flexible (can be used with most popular languages)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Leans towards strong consistency"),(0,i.kt)("td",{parentName:"tr",align:null},"Favors eventual consistency (here may be some delay in getting response back)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Vertically scalable (need more computing power on one machine to store more data)"),(0,i.kt)("td",{parentName:"tr",align:null},"Horizontally scalable (can distribute storage and compute power on multiple machines")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Examples: MySQL, PostgreSQL"),(0,i.kt)("td",{parentName:"tr",align:null},"Examples: ",(0,i.kt)("strong",{parentName:"td"},"Firebase"),", MongoDB")))),(0,i.kt)("h3",{id:"what-is-firebase"},"What is Firebase?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Firebase is a Backend as a Service (BaaS) offered by Google",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Allows you to store data"),(0,i.kt)("li",{parentName:"ul"},"Host websites"),(0,i.kt)("li",{parentName:"ul"},"Authentication"))),(0,i.kt)("li",{parentName:"ul"},"NoSQL DB",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Not only SQL"),(0,i.kt)("li",{parentName:"ul"},"Non relational")))),(0,i.kt)("h4",{id:"why-firebase"},"Why Firebase?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Real-time operations"),(0,i.kt)("li",{parentName:"ul"},"Firebase Authentication"),(0,i.kt)("li",{parentName:"ul"},"Built-in analytics"),(0,i.kt)("li",{parentName:"ul"},"Also supports hosting/deployment"),(0,i.kt)("li",{parentName:"ul"},"Integration with other Google services"),(0,i.kt)("li",{parentName:"ul"},"Structure we\u2019re familiar with!")),(0,i.kt)("h2",{id:"getting-started-with-firestore"},"Getting Started With Firestore"),(0,i.kt)("p",null,"Let's finally start talking about how we can perform operations on our database\nusing Typescript."),(0,i.kt)("h3",{id:"firestore-data-model"},"Firestore Data Model"),(0,i.kt)("p",null,"Firstly, a Firestore database is NOSQL, document-model database generally comprised of multiple collections,\nwhich may house differing data. To take a simplified example, a Cornell database\ncould have some of the following collections: ",(0,i.kt)("inlineCode",{parentName:"p"},"people"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"courses"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"locations"),".\nCertain collections may be broken up into multiple collections, such as breaking\nup ",(0,i.kt)("inlineCode",{parentName:"p"},"people")," into ",(0,i.kt)("inlineCode",{parentName:"p"},"staff")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"students")," or even into subcollections, which we will\nnot discuss but they exist for those who are interested, as we could simply distinguish\ndifferent people with a field, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"role: Student | Staff"),". The id of a collection,\nwhich is what is used to access it, is generally a descriptive name of the collection."),(0,i.kt)("p",null,'A typical model, including that of Firestore, has collections comprised of documents,\nor docs for short, which would be the "items" we want to store. Going back to our\nCornell example, our ',(0,i.kt)("inlineCode",{parentName:"p"},"people")," collection would probably have documents pertaining\nto students or staff at Cornell, with each document being uniquely identified\nby a unique id, like netid. Within each document, we may have fields like ",(0,i.kt)("inlineCode",{parentName:"p"},"age"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"address"),", so in this way, documents can be thought of as Objects. But as you\nmay have already noticed, some documents would have fields that others don't - students\nmay have a ",(0,i.kt)("inlineCode",{parentName:"p"},"major")," field while staff may have a ",(0,i.kt)("inlineCode",{parentName:"p"},"salary")," field. As it turns out, that's\ntotally ok! Generally speaking, having more uniform document fields across a collection\ngives stronger guarantees about each document and is often a more natural fit, but Firestore\ndoes not require us to have uniform fields within all the documents of a collection, which gives\nus a layer of flexibility."),(0,i.kt)("p",null,"Using the following code, we can create references to both the ",(0,i.kt)("inlineCode",{parentName:"p"},"people")," collection and\nspecific docs such as the ",(0,i.kt)("inlineCode",{parentName:"p"},"myl39")," doc (which represents me!)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const peopleCollectionRef = db.collection('people');\nconst michelleDocRef = peopleCollectionRef.doc('myl39');\n")),(0,i.kt)("h3",{id:"firestore-operations"},"Firestore Operations"),(0,i.kt)("p",null,"We generally refer to database operations as ",(0,i.kt)("inlineCode",{parentName:"p"},"CRUD"),", which stands for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"C"),"reate/Insert - Create a document (will fail if the document exists)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"R"),"ead/Find/Query - To search for documents based on their properties"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"U"),"pdate - Update an existing document (will fail otherwise)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"D"),"elete - Delete an existing document")),(0,i.kt)("h3",{id:"create"},"Create"),(0,i.kt)("p",null,"To create a document in Firestore, we primarily use the ",(0,i.kt)("inlineCode",{parentName:"p"},"set")," function.\nHere's an example of setting a document in our ",(0,i.kt)("inlineCode",{parentName:"p"},"people")," database."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await peopleCollectionRef.set(michelleDocRef, {\n  year: '2023',\n  age: 20,\n});\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"set")," will write to the document ",(0,i.kt)("inlineCode",{parentName:"p"},"myl39")," within the ",(0,i.kt)("inlineCode",{parentName:"p"},"people")," collection, creating it\nif it does not yet exist."),(0,i.kt)("p",null,"Note that ids are autogenerated if the name of the document is not specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"doc()")," call with the ",(0,i.kt)("inlineCode",{parentName:"p"},"set")," function."),(0,i.kt)("h3",{id:"read"},"Read"),(0,i.kt)("p",null,"To read data in Firestore, we first need to take a snapshot of the data we want to read. Then,\nwe check if that snapshot of the document we want actually exists before trying to extract its data."),(0,i.kt)("p",null,"Here's a simple example logging my data. Notice I log ",(0,i.kt)("inlineCode",{parentName:"p"},"doc.data()")," and not ",(0,i.kt)("inlineCode",{parentName:"p"},"doc")," because\nthe former is where the data actually resides."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const doc = await peopleCollectionRef.doc(netid).get();\n\nif (doc.exists) {\n  console.log('Document data:', doc.data());\n} else {\n  console.log('No such document!');\n}\n")),(0,i.kt)("p",null,"We can also perform querying on collections, where we filter the database with certain\ncriteria. Here's a simple example of looking for all people in ",(0,i.kt)("inlineCode",{parentName:"p"},"people")," who are 20."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const snapshot = await peopleCollectionRef\n.where(\u201cage\u201d, \u201c==\u201d, 20)\n.get();\n\nsnapshot .forEach((doc) => {\n console.log(doc.id, ' => ', doc.data());\n});\n")),(0,i.kt)("p",null,"Line by line, we first take a snapshot of all such documents in the query specified, and then, we perform the same ",(0,i.kt)("inlineCode",{parentName:"p"},"doc.data()")," approach. We do not need to check if each doc exists because we are using a for loop, and if a doc does not exist, it simply would not be part of the for loop."),(0,i.kt)("p",null,"We can also order our search results. Here is an example of querying for people who are at least 20 and then ordering them in descending order."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const snapshot = await peopleCollectionRef\n.where(\u201cage\u201d, \u201c>=\u201d, 20)\n.orderBy(\u201cage\u201d, \u201cdesc\u201d)\n.limit(3).get();\n\nquerySnapshot.forEach((doc) => {\n console.log(doc.id, ' => ', doc.data());\n});\n")),(0,i.kt)("h3",{id:"update"},"Update"),(0,i.kt)("p",null,"Updating a document will only replace the specified fields within a doc and maintain\nunmodified fields. So the following code keep the ",(0,i.kt)("inlineCode",{parentName:"p"},"last")," field but change ",(0,i.kt)("inlineCode",{parentName:"p"},"age")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"first"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await peopleCollectionRef\n.doc(\u2018myl39\u2019)\n.update({ age: '20', first: 'michelle' });\n")),(0,i.kt)("p",null,"Note if the document we're trying to access is not available, an error will occur."),(0,i.kt)("h3",{id:"delete"},"Delete"),(0,i.kt)("p",null,"Deleting a document removes it from the collection."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await peopleCollectionRef\n.doc(\u2018myl39\u2019)\n.delete();\n")),(0,i.kt)("h2",{id:"callbackpromise-based-vs-real-time-queries"},"Callback/Promise-based vs Real-Time Queries"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Promise-Based"),(0,i.kt)("th",{parentName:"tr",align:null},"Real-Time"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"If you need the data now, you can query for it"),(0,i.kt)("td",{parentName:"tr",align:null},"You already have the data")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data queries can be decentralized (done in any component)"),(0,i.kt)("td",{parentName:"tr",align:null},"Data queries are fetched and memoized through centralized (React) hooks")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Querying data is imperative, but can quickly become hard to maintain and track (and you lose some of the advantages of a declarative web UI framework)"),(0,i.kt)("td",{parentName:"tr",align:null},"Up-front cost to query data pays off (because you don't ",(0,i.kt)("em",{parentName:"td"},"hopefully")," have to query it again)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"There is no cleanup code"),(0,i.kt)("td",{parentName:"tr",align:null},'You first have to "subscribe" to changes in the data, then unsubscribe after you are done (kind of like opening and closing a file stream when reading a file)')))),(0,i.kt)("h3",{id:"what-do-callbackpromise-based-vs-real-time-queries-look-like"},"What do Callback/Promise-based vs. Real-Time Queries Look Like?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Promise-based queries")," are single queries that return a single async result. So, they are run once and then passed along downstream to children and other descendants of your component. Typically, they are used to react to some update (i.e user clicks a button, a component loads)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Real-time queries"),' are single queries that return a stream of async results such as weather data. These types of queries are used once the data is listenable and needs to be "subscribed to". These take a stream of results and are built on top of wbe sockets, which are abstractions over a byte stream. So, they\'re good for ... real-time applications.'),(0,i.kt)("h3",{id:"how-do-callbackpromised-based-vs-real-time-queries-work"},"How Do Callback/Promised Based vs. Real-Time Queries Work?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Promise based queries")," typically calls some backend API route, which fetches and returns data to you. They're built on top of traditional HTTP requests."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Real-time queries")," might call a backend route to pass data over to a web socket or it'll simply use an API library to makes calls directly to a database (ex. Firebase Firestore call). These queries are usually wrapped in a library like ",(0,i.kt)("a",{parentName:"p",href:"https://rxjs.dev/"},"RxJS"),"'s observable data type or function calls that allow you to subsribe to changes."),(0,i.kt)("h3",{id:"choosing-a-querying-method"},"Choosing a Querying Method"),(0,i.kt)("p",null,'As described in the first section, the type of queries your application will use will affect the app\'s architecture.\nIn particular, real-time queries play nicely with having a centralized query that runs over a listenable data access object that is "owned" either by'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"a top-level component (OK in small apps, but prone to prop drilling in more complex apps), or"),(0,i.kt)("li",{parentName:"ol"},"a custom React hook that wraps an effect (triggering an update when the data access object publishes a new version of the data)")),(0,i.kt)("p",null,"That is not to say that your app cannot use both types of queries. It is just that a real-time application requires a specific architecture in which all data is queried first and passed along to components as props or referenced by components via (potentially custom) React/Redux hooks. This does not play nicely with callback/Promise-based queries because the data from the callback/Promise-based queries may be in an inconsistent state by the time the data from a real-time query has updated."),(0,i.kt)("h3",{id:"firebase-firestore-application-callbackpromise-based-or-real-time-queries"},"Firebase Firestore Application: Callback/Promise-based or Real-Time Queries"),(0,i.kt)("p",null,"Firestore offers you a database that nicely organizes your data into ",(0,i.kt)("em",{parentName:"p"},"documents")," and ",(0,i.kt)("em",{parentName:"p"},"collections")," (groups of documents). It allows you to build queries that can either"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"return ",(0,i.kt)("em",{parentName:"li"},"once")," with a single snapshot of data (a Promise-based query), or"),(0,i.kt)("li",{parentName:"ol"},"allow you to hook into the data's live values (a real-time query).")),(0,i.kt)("h4",{id:"firestore-real-time-queries"},"Firestore Real-time Queries"),(0,i.kt)("p",null,"Provides collection + document data as an listenable (subscribable) data object"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"As soon as a collection updates, the collection access object publishes a new version of the collection"),(0,i.kt)("li",{parentName:"ul"},"As soon as a doc updates, the doc access object publishes a new version of the doc\nThis can be passed as a React prop or an effect dependency, which triggers a component update!")),(0,i.kt)("h4",{id:"anatomy-of-a-firebase-firestore-real-time-application-the-full-stack"},'Anatomy of a Firebase Firestore Real-Time Application (The "Full" Stack)'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Anatomy of a Firebase Firestore Real-Time Update",src:a(7823).Z})),(0,i.kt)("p",null,"Unlike callback/promise-based queries, the connection between updating and fetching data is completely gone. Updating data occurs along an entirely separate channel from subscribing to the data. This means that implementing calls to update data will look very different"),(0,i.kt)("h4",{id:"miscellaneous-advice"},"Miscellaneous Advice"),(0,i.kt)("p",null,"When designing a system:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"avoid two-way dependencies (or as many dependencies as possible)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"as with React & declarative web frameworks, one-way data binding is the way to go"),(0,i.kt)("li",{parentName:"ul"},"avoids: more things to update"),(0,i.kt)("li",{parentName:"ul"},"avoids: more surface area for synchronization errors")))),(0,i.kt)("p",null,"This philosophy helps us prefer real-time queries over Promise-based queries, because there is only a single dependency for the queried data, rather than the set of all the decentralized Promise-based queries."),(0,i.kt)("h2",{id:"sample-code"},"Sample code"),(0,i.kt)("p",null,"This week's sample code starter can be found in the files under ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cornell-dti/trends-fa23-lec7-demo"},"this directory"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/michelleli01/trends-lec7-demo-soln"},"demo solution")),(0,i.kt)("h2",{id:"instruction-to-connect-firebase-with-demo-code"},"Instruction to connect Firebase with demo code"),(0,i.kt)("h3",{id:"create-new-firebase-webapp-and-database"},"Create new Firebase webapp and database"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Login to ",(0,i.kt)("a",{parentName:"li",href:"https://console.firebase.google.com/u/2/"},"Firebase Console")," and ",(0,i.kt)("em",{parentName:"li"},"Add project"),":")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add desired name for the project (ex: ",(0,i.kt)("inlineCode",{parentName:"li"},"trends-demo"),")"),(0,i.kt)("li",{parentName:"ul"},"Turn off Google Analytics for simplicity (can manually integrate later)")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Create new Webapp:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On landing page, click web icon (",(0,i.kt)("inlineCode",{parentName:"li"},"</>"),") OR click ",(0,i.kt)("em",{parentName:"li"},"Add app")," to create new webapp"),(0,i.kt)("li",{parentName:"ul"},"Choose app nickname (ex: ",(0,i.kt)("inlineCode",{parentName:"li"},"lec7-demo"),") then register"),(0,i.kt)("li",{parentName:"ul"},"Use default choice in ",(0,i.kt)("em",{parentName:"li"},"Add Firebase SDK")," then continue to console")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Create new Database:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On left sidebar, under ",(0,i.kt)("em",{parentName:"li"},"Product categories"),", expand ",(0,i.kt)("em",{parentName:"li"},"Build"),", then choose ",(0,i.kt)("em",{parentName:"li"},"Firestore Database")),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("em",{parentName:"li"},"Create database"),", choose location in ",(0,i.kt)("em",{parentName:"li"},"United States")),(0,i.kt)("li",{parentName:"ul"},"Start in ",(0,i.kt)("strong",{parentName:"li"},"test mode")," (allow anyone to read and write, need to be changed when deployed)"),(0,i.kt)("li",{parentName:"ul"},"Add some data to database for testing (collection -> document -> data fields)")),(0,i.kt)("h3",{id:"connect-your-codebase-to-firebase"},"Connect your codebase to Firebase"),(0,i.kt)("p",null,"  This guideline specifically refers to this lecture's demo code"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"On left sidebar, click Setting icon (next to ",(0,i.kt)("em",{parentName:"li"},"Project Overview"),"), then ",(0,i.kt)("em",{parentName:"li"},"Project settings")),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("em",{parentName:"li"},"Service accounts")," tab, then ",(0,i.kt)("em",{parentName:"li"},"Generate new private key")," (do not expose this key on internet - ex: Git, each of the team members need to generate separate private key themselves)"),(0,i.kt)("li",{parentName:"ol"},"Move the newly downloaded json file to your project backend folder (",(0,i.kt)("inlineCode",{parentName:"li"},"server"),"), then rename it to ",(0,i.kt)("inlineCode",{parentName:"li"},"service_account.json")),(0,i.kt)("li",{parentName:"ol"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"service_account.json")," to your ",(0,i.kt)("inlineCode",{parentName:"li"},".gitignore")," (in your root folder)"),(0,i.kt)("li",{parentName:"ol"},"Modify your ",(0,i.kt)("inlineCode",{parentName:"li"},"server/firebase.ts")," to get database as bellow:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { initializeApp, applicationDefault, cert } from "firebase-admin/app";\nimport { getFirestore } from "firebase-admin/firestore";\nimport serviceAccount from "./service_account.json";\n\nconst app = initializeApp({\n  credential: cert(serviceAccount),\n});\nconst db = getFirestore();\n\nexport { db };\n')),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Import ",(0,i.kt)("inlineCode",{parentName:"li"},"db")," wherever you need to interact with the database!")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { db } from "./firebase";\n')))}u.isMDXComponent=!0},7823:function(e,t,a){t.Z=a.p+"assets/images/firestore-real-time-a90f29184434d35c8cd763ff852134fc.png"}}]);