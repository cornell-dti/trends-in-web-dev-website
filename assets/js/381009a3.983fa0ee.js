"use strict";(self.webpackChunktrends_in_web_dev_website=self.webpackChunktrends_in_web_dev_website||[]).push([[2240],{7300:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(6687);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7340:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var n=a(3206),o=a(5421),i=(a(6687),a(7300)),r=["components"],l={id:"lecture7",title:"Lecture 7"},s=void 0,d={unversionedId:"lecture7",id:"version-2022sp/lecture7",isDocsHomePage:!1,title:"Lecture 7",description:"Lecture Slides",source:"@site/versioned_docs/version-2022sp/lecture7.md",sourceDirName:".",slug:"/lecture7",permalink:"/docs/2022sp/lecture7",tags:[],version:"2022sp",frontMatter:{id:"lecture7",title:"Lecture 7"},sidebar:"docs",previous:{title:"Lecture 6",permalink:"/docs/2022sp/lecture6"},next:{title:"Lecture 8",permalink:"/docs/2022sp/lecture8"}},p=[{value:"async/await",id:"asyncawait",children:[],level:3},{value:"Intro to Databases and Firebase",id:"intro-to-databases-and-firebase",children:[{value:"Why do we need a database for our backend?",id:"why-do-we-need-a-database-for-our-backend",children:[],level:3},{value:"MySQL + Relational Databases",id:"mysql--relational-databases",children:[],level:3},{value:"NoSQL and Firestore",id:"nosql-and-firestore",children:[],level:3},{value:"SQL vs NoSQL",id:"sql-vs-nosql",children:[],level:3},{value:"What is Firebase?",id:"what-is-firebase",children:[],level:3},{value:"Why Firebase?",id:"why-firebase",children:[],level:3}],level:2},{value:"Getting Started With Firestore",id:"getting-started-with-firestore",children:[{value:"Firestore Data Model",id:"firestore-data-model",children:[],level:3},{value:"Firestore Operations",id:"firestore-operations",children:[],level:3},{value:"Create",id:"create",children:[],level:3},{value:"Read",id:"read",children:[],level:3},{value:"Update",id:"update",children:[],level:3},{value:"Delete",id:"delete",children:[],level:3}],level:2},{value:"Sample code",id:"sample-code",children:[],level:2}],c={toc:p};function u(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/11pBxUz-CxxT3kQdTvZKewqxzIbhJXgZPUhDILi7n7Ms/edit?usp=sharing"},"Lecture Slides")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/2022sp/assignment4"},"Assignment 4")," (Due 4/22 at 11:59pm)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/forms/d/e/1FAIpQLScq9DA5jLy1TnvEWqG-DCz5FvOV8tzLyCvKs93ifu0UbjW0UA/viewform"},"Final Project Team Matching Form")," due ",(0,i.kt)("strong",{parentName:"p"},"Sunday, 4/17 at 11:59 PM")," (no slip days)"),(0,i.kt)("h3",{id:"asyncawait"},"async/await"),(0,i.kt)("p",null,"If you have too many ",(0,i.kt)("inlineCode",{parentName:"p"},".then()")," calls within each other, you might build a\nPYRAMID OF DOOM \u2620."),(0,i.kt)("p",null,"Adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," keyword to a function designates that function as an\nasynchronous function"),(0,i.kt)("p",null,"Within these ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," functions we can use await to designate which lines need to\nbe \u201cawaited\u201d upon to resolve"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// .then\nconst fetchData = () => {\n  fetch(`https://jsonplaceholder.typicode.com/posts`)\n    .then((response) => response.json())\n    .then((d) => setData(d));\n};\n\n// async/await\nconst fetchData = async () => {\n  const response = await fetch('https://jsonplaceholder.typicode.com/posts');\n  const posts = await response.json();\n  setData(posts);\n};\n")),(0,i.kt)("h2",{id:"intro-to-databases-and-firebase"},"Intro to Databases and Firebase"),(0,i.kt)("p",null,"A lot of the apps we have been making work and maintain states throughout the\nlifetime of the app, but lack one critical feature - if we restart the app\nor refresh the page, all of our data disappears! We need\nsome kind of persistent storage for this data: through\u2014you guessed it\u2014a\ndatabase."),(0,i.kt)("h3",{id:"why-do-we-need-a-database-for-our-backend"},"Why do we need a database for our backend?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data stored within Node.js is per instance"),(0,i.kt)("li",{parentName:"ul"},"Most applications require persistence"),(0,i.kt)("li",{parentName:"ul"},"Data analysis"),(0,i.kt)("li",{parentName:"ul"},"Performant data location"),(0,i.kt)("li",{parentName:"ul"},"Offloading unneeded data from memory")),(0,i.kt)("h3",{id:"mysql--relational-databases"},"MySQL + Relational Databases"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Stores data in tables, utilizing rows and tables."),(0,i.kt)("li",{parentName:"ul"},"Is relational (think a tuple)"),(0,i.kt)("li",{parentName:"ul"},"Has a schema")),(0,i.kt)("h3",{id:"nosql-and-firestore"},"NoSQL and Firestore"),(0,i.kt)("p",null,"We will focus on NoSQL"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Many NoSQL implementations are schema-less or have a partial schema"),(0,i.kt)("li",{parentName:"ul"},"Firestore is a cloud-hosted NoSQL database"),(0,i.kt)("li",{parentName:"ul"},"Very flexible and can be used with most popular languages"),(0,i.kt)("li",{parentName:"ul"},"Uses documents to store data"),(0,i.kt)("li",{parentName:"ul"},"Efficient querying for data")),(0,i.kt)("h3",{id:"sql-vs-nosql"},"SQL vs NoSQL"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SQL databases have a predefined schema, whereas NoSQL databases can abide to\nany structure you want it to."),(0,i.kt)("li",{parentName:"ul"},"NoSQL databases are better suited for large sets of data, but not for complex\nqueries."),(0,i.kt)("li",{parentName:"ul"},"SQL databases tend to be less expensive for smaller datasets, but also less\nflexible."),(0,i.kt)("li",{parentName:"ul"},"SQL leans towards strong consistency whereas NoSQL favors eventual consistency\n(i.e. there may be some delay in getting the response back)"),(0,i.kt)("li",{parentName:"ul"},"SQL databases tend to be vertically scalable (need more computing power on one\nmachine to store more data) while NoSQL databases tend to be horizontally\nscalable (can distribute storage and compute power on multiple machines)"),(0,i.kt)("li",{parentName:"ul"},"Examples of SQL databases: MySQL, PostgreSQL"),(0,i.kt)("li",{parentName:"ul"},"Examples of NoSQL databases: Firebase, MongoDB")),(0,i.kt)("h3",{id:"what-is-firebase"},"What is Firebase?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Firebase is a Backend as a Service (BaaS) offered by Google",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Allows you to store data"),(0,i.kt)("li",{parentName:"ul"},"Host websites"),(0,i.kt)("li",{parentName:"ul"},"Authentication"))),(0,i.kt)("li",{parentName:"ul"},"NoSQL DB",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Not only SQL"),(0,i.kt)("li",{parentName:"ul"},"Non relational")))),(0,i.kt)("h3",{id:"why-firebase"},"Why Firebase?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Real-time operations"),(0,i.kt)("li",{parentName:"ul"},"Firebase Authentication"),(0,i.kt)("li",{parentName:"ul"},"Built-in analytics"),(0,i.kt)("li",{parentName:"ul"},"Also supports hosting/deployment"),(0,i.kt)("li",{parentName:"ul"},"Integration with other Google services"),(0,i.kt)("li",{parentName:"ul"},"Structure we\u2019re familiar with!")),(0,i.kt)("h2",{id:"getting-started-with-firestore"},"Getting Started With Firestore"),(0,i.kt)("p",null,"If you're having trouble setting up your project, feel free to refer to this video\nof me setting one up from ",(0,i.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/18qj5XFPXgZhixGbyBBLMIYkuiyiW-HWs/view?usp=sharing"},"scratch"),".\nIf you still have questions, feel free to post on Ed or come to Office Hours!\nLet's finally start talking about how we can perform operations on our database\nusing Typescript."),(0,i.kt)("h3",{id:"firestore-data-model"},"Firestore Data Model"),(0,i.kt)("p",null,"Firstly, a Firestore database is NOSQL, document-model database generally comprised of multiple collections,\nwhich may house differing data. To take a simplified example, a Cornell database\ncould have some of the following collections: ",(0,i.kt)("inlineCode",{parentName:"p"},"people"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"courses"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"locations"),".\nCertain collections may be broken up into multiple collections, such as breaking\nup ",(0,i.kt)("inlineCode",{parentName:"p"},"people")," into ",(0,i.kt)("inlineCode",{parentName:"p"},"staff")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"students")," or even into subcollections, which we will\nnot discuss but they exist for those who are interested, as we could simply distinguish\ndifferent people with a field, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"role: Student | Staff"),". The id of a collection,\nwhich is what is used to access it, is generally a descriptive name of the collection."),(0,i.kt)("p",null,'A typical model, including that of Firestore, has collections comprised of documents,\nor docs for short, which would be the "items" we want to store. Going back to our\nCornell example, our ',(0,i.kt)("inlineCode",{parentName:"p"},"people")," collection would probably have documents pertaining\nto students or staff at Cornell, with each document being uniquely identified\nby a unique id, like netid. Within each document, we may have fields like ",(0,i.kt)("inlineCode",{parentName:"p"},"age"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"address"),", so in this way, documents can be thought of as Objects. But as you\nmay have already noticed, some documents would have fields that others don't - students\nmay have a ",(0,i.kt)("inlineCode",{parentName:"p"},"major")," field while staff may have a ",(0,i.kt)("inlineCode",{parentName:"p"},"salary")," field. As it turns out, that's\ntotally ok! Generally speaking, having more uniform document fields across a collection\ngives stronger guarantees about each document and is often a more natural fit, but Firestore\ndoes not require us to have uniform fields within all the documents of a collection, which gives\nus a layer of flexibility."),(0,i.kt)("p",null,"Using the following code, we can create references to both the ",(0,i.kt)("inlineCode",{parentName:"p"},"people")," collection and\nspecific docs such as the ",(0,i.kt)("inlineCode",{parentName:"p"},"jt568")," doc (which represents me!)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const peopleCollectionRef = collection(db, 'people');\nconst jasonDocRef = doc(db, 'people', 'jt568');\n")),(0,i.kt)("p",null,"For a graphical representation, we can take a look at the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/11pBxUz-CxxT3kQdTvZKewqxzIbhJXgZPUhDILi7n7Ms/edit#slide=id.g1244a223d85_0_93"},"slide 38"),"\nof Lecture 7. In this example, we are looking at the ",(0,i.kt)("inlineCode",{parentName:"p"},"peter")," doc (the doc's id\nis ",(0,i.kt)("inlineCode",{parentName:"p"},"peter"),") and this document is under the ",(0,i.kt)("inlineCode",{parentName:"p"},"users")," collection (the collection's\nid is ",(0,i.kt)("inlineCode",{parentName:"p"},"users"),"). The fields for the ",(0,i.kt)("inlineCode",{parentName:"p"},"peter")," document are ",(0,i.kt)("inlineCode",{parentName:"p"},"full_name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"year"),".\nTypically it would not be good practice to just use a first name as a document id\nbecause that may not be unique, but we used it anyways for simplicity of demoing."),(0,i.kt)("h3",{id:"firestore-operations"},"Firestore Operations"),(0,i.kt)("p",null,"We generally refer to database operations as ",(0,i.kt)("inlineCode",{parentName:"p"},"CRUD"),", which stands for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"C"),"reate/Insert - Create a document (will fail if the document exists)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"R"),"ead/Find/Query - To search for documents based on their properties"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"U"),"pdate - Update an existing document (will fail otherwise)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"D"),"elete - Delete an existing document")),(0,i.kt)("h3",{id:"create"},"Create"),(0,i.kt)("p",null,"To create a document in Firestore, we primarily use the ",(0,i.kt)("inlineCode",{parentName:"p"},"setDoc")," function.\nHere's an example of setting a document in our ",(0,i.kt)("inlineCode",{parentName:"p"},"people")," database."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await setDoc(jasonDocRef, { year: '2023', notes_writer: true });\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"setDoc")," will write to the document ",(0,i.kt)("inlineCode",{parentName:"p"},"jason")," within the ",(0,i.kt)("inlineCode",{parentName:"p"},"people")," collection, creating it\nif it does not yet exist."),(0,i.kt)("p",null,"An alternative approach if you strictly want to add and never overwrite a doc is ",(0,i.kt)("inlineCode",{parentName:"p"},"addDoc"),".\nHere's the same code but using ",(0,i.kt)("inlineCode",{parentName:"p"},"addDoc"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await addDoc(peopleCollectionRef, { year: '2023', notes_writer: true });\n")),(0,i.kt)("p",null,"Note, though, that using the latter means the ",(0,i.kt)("inlineCode",{parentName:"p"},"doc.id")," generated will be random, so\nyou would probably want to add the name into a field. The same behavior with autogenerated ids\ncan be replicated with setDoc by omitting the name of the document in the ",(0,i.kt)("inlineCode",{parentName:"p"},"doc()")," call."),(0,i.kt)("h3",{id:"read"},"Read"),(0,i.kt)("p",null,"To read data in Firestore, we first need to take a snapshot of the data we want to read. Then,\nwe check if that snapshot of the document we want actually exists before trying to extract its data."),(0,i.kt)("p",null,"Here's a simple example logging my data. Notice I log ",(0,i.kt)("inlineCode",{parentName:"p"},"docSnap.data()")," and not ",(0,i.kt)("inlineCode",{parentName:"p"},"docSnap")," because\nthe former is where the data actually resides."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const docSnap = await getDoc(jasonDocRef);\nif (docSnap.exists()) {\n  console.log('Document data:', docSnap.data());\n} else {\n  console.log('No such document!');\n}\n")),(0,i.kt)("p",null,"We can also perform querying on collections, where we filter the database with certain\ncriteria. Here's a simple example of looking for all people in ",(0,i.kt)("inlineCode",{parentName:"p"},"people")," who are in the year 2023."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const query = query(peopleCollectionRef, where('year', '==', 2023));\nconst querySnapshot = await getDocs(query);\nquerySnapshot.forEach((doc) => {\n  console.log(doc.id, ' => ', doc.data());\n});\n")),(0,i.kt)("p",null,"Line by line, we first construct a query for the collection that narrows it down for us.\nNext, we take a snapshot of all such documents in the query, and lastly, we perform the same\n",(0,i.kt)("inlineCode",{parentName:"p"},"doc.data()")," approach. We do not need to check if each doc exists because we are using a for loop,\nand if a doc does not exist, it simply would not be part of the for loop."),(0,i.kt)("p",null,"We can also order our search results. Here is an example of ordering by alphabetical order descending."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const query = query(peopleCollectionRef, orderBy('name', desc));\n// using getDocs to get all documents that match\nconst querySnapshot = await getDocs(query);\nquerySnapshot.forEach((doc) => {\n  console.log(doc.id, ' => ', doc.data());\n});\n")),(0,i.kt)("p",null,"We can actually combine multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"queryConstraints")," (like ",(0,i.kt)("inlineCode",{parentName:"p"},"where")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"orderBy"),")\nby listing them out as multiple parameters within ",(0,i.kt)("inlineCode",{parentName:"p"},"query"),"."),(0,i.kt)("h3",{id:"update"},"Update"),(0,i.kt)("p",null,"Updating a document will only replace the specified fields within a doc and maintain\nunmodified fields. So the following code keep the ",(0,i.kt)("inlineCode",{parentName:"p"},"notes_writer")," field but change ",(0,i.kt)("inlineCode",{parentName:"p"},"year")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"cat_or_dog"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await updateDoc(jasonDocRef, { year: '2022', cat_or_dog: 'cat' });\n")),(0,i.kt)("h3",{id:"delete"},"Delete"),(0,i.kt)("p",null,"Deleting a document removes it from the collection."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await deleteDoc(jasonDocRef);\n")),(0,i.kt)("h2",{id:"sample-code"},"Sample code"),(0,i.kt)("p",null,"This week's sample code can be found in the files under ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cornell-dti/trends-sp22-starters/tree/main/lec7-soln/components/roster"},"this directory"),"."))}u.isMDXComponent=!0},3206:function(e,t,a){function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},n.apply(this,arguments)}a.d(t,{Z:function(){return n}})},5421:function(e,t,a){function n(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}a.d(t,{Z:function(){return n}})}}]);