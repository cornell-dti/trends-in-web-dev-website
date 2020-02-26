(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var o=n(1),a=n(9),r=(n(0),n(148)),i={id:"lecture3",title:"Lecture 3"},c={id:"lecture3",title:"Lecture 3",description:"[Lecture Slides](https://docs.google.com/presentation/d/1iimIRpAw1ud1yhCCx1cdwypZw2J8VVN8mTLWXOc8g-U/edit?usp=sharing)",source:"@site/docs/lecture3.md",permalink:"/docs/lecture3",sidebar:"docs",previous:{title:"Lecture 2",permalink:"/docs/lecture2"},next:{title:"Lecture 4",permalink:"/docs/lecture4"}},s=[{value:"Before the lecture",id:"before-the-lecture",children:[{value:"Install Postman",id:"install-postman",children:[]},{value:"Firebase Setup",id:"firebase-setup",children:[]},{value:"Check your setup",id:"check-your-setup",children:[]}]},{value:"Basic Database Manipulations",id:"basic-database-manipulations",children:[]},{value:"Sample code",id:"sample-code",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.google.com/presentation/d/1iimIRpAw1ud1yhCCx1cdwypZw2J8VVN8mTLWXOc8g-U/edit?usp=sharing"}),"Lecture Slides")),Object(r.b)("h2",{id:"before-the-lecture"},"Before the lecture"),Object(r.b)("h3",{id:"install-postman"},"Install Postman"),Object(r.b)("p",null,"Install Postman from ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.postman.com/downloads/"}),"https://www.postman.com/downloads/"),"\nIf necessary, set up a Postman account using your Cornell email address."),Object(r.b)("h3",{id:"firebase-setup"},"Firebase Setup"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Create an account on ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://firebase.google.com"}),"Firebase"),". You only need the free version."),Object(r.b)("li",{parentName:"ol"},"Go to Firebase console and click ",Object(r.b)("inlineCode",{parentName:"li"},"Add project"),". Choose any random name for the project name. You\nwon't need Google Analytics in this class but it is fine to enable it. Analytics location doesn't\nmatter, leave it at default United States and check the remaining boxes agreeing to terms and click ",Object(r.b)("inlineCode",{parentName:"li"},"Create project"),"."),Object(r.b)("li",{parentName:"ol"},"Once your project is created, go into it and go to the ",Object(r.b)("inlineCode",{parentName:"li"},"Database")," tab under ",Object(r.b)("inlineCode",{parentName:"li"},"Develop"),". Choose to create ",Object(r.b)("strong",{parentName:"li"},"Firestore")," starting in production mode. Keep the Firestore location as default."),Object(r.b)("li",{parentName:"ol"},"Download the service account in ",Object(r.b)("inlineCode",{parentName:"li"},"Project Settings > Service accounts")," as ",Object(r.b)("inlineCode",{parentName:"li"},"service-account.json"),". ",Object(r.b)("inlineCode",{parentName:"li"},"Project Settings")," can be found by clicking the gear button on the left panel next to ",Object(r.b)("inlineCode",{parentName:"li"},"Project Overview"),". Go to ",Object(r.b)("inlineCode",{parentName:"li"},"Service accounts")," tab and click the ",Object(r.b)("inlineCode",{parentName:"li"},"Generate new private key button"),". Save the downloaded file as ",Object(r.b)("inlineCode",{parentName:"li"},"service-account.json"),"\nThis json should be kept secret.")),Object(r.b)("h3",{id:"check-your-setup"},"Check your setup"),Object(r.b)("h4",{id:"code"},"Code"),Object(r.b)("p",null,"Create a folder with empty ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," and empty ",Object(r.b)("inlineCode",{parentName:"p"},"index.js"),". Put the downloaded\n",Object(r.b)("inlineCode",{parentName:"p"},"service-account.json")," in this folder."),Object(r.b)("p",null,"Copy the following code into ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "self-check",\n  "version": "0.1.0",\n  "main": "index.js",\n  "license": "MIT",\n  "dependencies": {\n    "body-parser": "^1.18.3",\n    "express": "^4.16.4",\n    "firebase-admin": "^7.2.0"\n  }\n}\n')),Object(r.b)("p",null,"Copy the following code into ",Object(r.b)("inlineCode",{parentName:"p"},"index.js"),". Remember to replace ",Object(r.b)("inlineCode",{parentName:"p"},"databaseURL")," with\nthe url of your own. You can find this ",Object(r.b)("inlineCode",{parentName:"p"},"databaseURL")," in the code snippet in the service accounts tab of Firebase."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Don't worry if you don't understand this code! You'll know what it does and how to write similar code by the end of this course!")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"const admin = require('firebase-admin');\nconst serviceAccount = require('./service-account.json');\nconst express = require('express');\nconst bodyParser = require('body-parser');\n\nadmin.initializeApp({\n  credential: admin.credential.cert(serviceAccount),\n  databaseURL: '[YOUR_OWN_DATABASE_URL]'\n});\n\nconst db = admin.firestore();\n\nconst app = express();\nconst port = 8080;\napp.use(bodyParser.json());\n\napp.get('/', (_, resp) => resp.send('Hello World!'));\n\napp.get('/self-check', async (_, resp) => {\n  const data = {\n    name: 'Hello World',\n    time: admin.firestore.FieldValue.serverTimestamp()\n  };\n  console.log('Sending doc to DB.');\n  await db\n    .collection('test')\n    .doc('random-id')\n    .set(data);\n  console.log('Doc recorded in DB');\n  const docRef = db.collection('test').doc('random-id');\n  console.log('Trying to obtain doc in DB.');\n  const docSnapshot = await docRef.get();\n  console.log(\n    `We obtained a doc with id ${docSnapshot.id}. It's content is logged below:`\n  );\n  console.log(docSnapshot.data());\n  console.log('Now we will try to remove it.');\n  await docRef.delete();\n  console.log('The document is deleted.');\n  console.log(\n    'After all these operations, the db should be empty. We check that.'\n  );\n  db.collection('test')\n    .get()\n    .then(querySnapshot => {\n      if (querySnapshot.docs.length === 0) {\n        console.log('We passed the check. The page in browser should say OK.');\n        resp.status(200).send('OK.');\n      } else {\n        console.log('We failed the check. Please check your setup.');\n        resp.status(500).send('Something is messed up!');\n      }\n    });\n});\n\napp.listen(port, () => console.log(`Example app listening on port ${port}!`));\n")),Object(r.b)("h4",{id:"verify-that-it-works"},"Verify that it works"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Run ",Object(r.b)("inlineCode",{parentName:"li"},"yarn install"),";"),Object(r.b)("li",{parentName:"ol"},"Run ",Object(r.b)("inlineCode",{parentName:"li"},"node index.js"),";"),Object(r.b)("li",{parentName:"ol"},"Open ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"http://localhost:8080"}),Object(r.b)("inlineCode",{parentName:"a"},"http://localhost:8080")),". You will see\n",Object(r.b)("inlineCode",{parentName:"li"},"Hello World!"),";"),Object(r.b)("li",{parentName:"ol"},"Open ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"http://localhost:8080/self-check"}),Object(r.b)("inlineCode",{parentName:"a"},"http://localhost:8080/self-check")),".\nYou will see ",Object(r.b)("inlineCode",{parentName:"li"},"OK!")," in the browser. In the terminal, you will see something\nlike this:")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-text"}),"Example app listening on port 8080!\nSending doc to DB.\nDoc recorded in DB\nTrying to obtain doc in DB.\nWe obtained a doc with id random-id. It's content is logged below:\n{ name: 'Hello World',\n  time: Timestamp { _seconds: 1554738493, _nanoseconds: 994000000 } }\nNow we will try to remove it.\nThe document is deleted.\nAfter all these operations, the db should be empty. We check that.\nWe passed the check. The page in browser should say OK.\n")),Object(r.b)("h2",{id:"basic-database-manipulations"},"Basic Database Manipulations"),Object(r.b)("p",null,"People usually call that ",Object(r.b)("inlineCode",{parentName:"p"},"CRUD"),", which stands for:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"C"),"reate/Insert - Create a document (will fail if the document exists)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"R"),"ead/Find/Query - To search for documents based on their properties"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"U"),"pdate - Update an existing document (will fail otherwise)"),Object(r.b)("li",{parentName:"ul"},"Delete - Delete an existing document")),Object(r.b)("p",null,"For convenience, most NoSQL database also provides an ",Object(r.b)("em",{parentName:"p"},"upsert")," operation. It\nwill create the document or update an existing document. You can think of that\nas an atomic operation that does:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"if (document.exists()) {\n  database.update(document);\n} else {\n  database.insert(document);\n}\n")),Object(r.b)("p",null,"In Firestore, you can either insert a new document with a specified ID, or allow\nFirestore to generate its own ID for you."),Object(r.b)("p",null,"The update method in Firestore allows you to update certain fields of the\ndocument without overwriting the entire thing."),Object(r.b)("h2",{id:"sample-code"},"Sample code"),Object(r.b)("p",null,"The following code demonstrate how we can do basic CRUD with Firestore.\nNote that the code below does not care about what are the fields of a post,\nbecause Firestore doesn't require you to have a predefined set of field. This\ngives you flexibility when writing your backend code."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"const admin = require('firebase-admin');\nconst serviceAccount = require('./service-account.json');\nconst express = require('express');\nconst bodyParser = require('body-parser');\n\nadmin.initializeApp({\n  credential: admin.credential.cert(serviceAccount),\n  databaseURL: 'https://dti-web-dev-sp19-db-demo.firebaseio.com'\n});\n\nconst db = admin.firestore();\n\nconst app = express();\nconst port = 8080;\napp.use(bodyParser.json());\n\napp.get('/', (_, resp) => resp.send('Hello World!'));\n\nconst postsCollection = db.collection('posts');\n\n// create a post\napp.put('/post', async (req, resp) => {\n  const post = req.body;\n  const addedDoc = await postsCollection.doc('hi').set(post);\n  resp.status(200).send(addedDoc.id);\n});\n\n// read all posts\napp.get('/post', async (_, resp) => {\n  const allPostsDoc = await postsCollection.get();\n  resp\n    .status(200)\n    .json(allPostsDoc.docs.map(doc => ({ id: doc.id, ...doc.data() })));\n});\n\n// 2019-04-17\napp.get('/post/today', async (_, resp) => {\n  const today = new Date();\n  const todayString = `${today.getFullYear()}-${today.getMonth() +\n    1}-${today.getDate()}`;\n  const todayPostsDoc = await postsCollection\n    .where('date', '==', todayString)\n    .get();\n  resp\n    .status(200)\n    .json(todayPostsDoc.docs.map(doc => ({ id: doc.id, ...doc.data() })));\n});\n\n// sorted posts\napp.get('/post/sorted', async (_, resp) => {\n  const sortedPosts = await postsCollection.orderBy('date', 'desc').get();\n  resp\n    .status(200)\n    .json(sortedPosts.docs.map(doc => ({ id: doc.id, ...doc.data() })));\n});\n\n// update a post\napp.post('/post/:id', async (req, res) => {\n  const id = req.params['id'];\n  const newPost = req.body;\n  await postsCollection.doc(id).update(newPost);\n  res.status(200).send('UPDATED');\n});\n\n// delete a post\napp.delete('/post/:id', async (req, res) => {\n  const id = req.params['id'];\n  await postsCollection.doc(id).delete();\n  res.status(200).send('DELETED');\n});\n\napp.listen(port, () => console.log(`Example app listening on port ${port}!`));\n")))}d.isMDXComponent=!0},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=o,m=p["".concat(i,".").concat(u)]||p[u]||b[u]||r;return n?a.a.createElement(m,c({ref:t},l,{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);