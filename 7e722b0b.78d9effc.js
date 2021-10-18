(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),s=(n(0),n(143)),r={id:"lecture3",title:"Lecture 3"},i={unversionedId:"lecture3",id:"version-2021fa/lecture3",isDocsHomePage:!1,title:"Lecture 3",description:"Lecture Slides",source:"@site/versioned_docs/version-2021fa/lecture3.md",slug:"/lecture3",permalink:"/docs/lecture3",version:"2021fa",sidebar:"docs",previous:{title:"Lecture 2",permalink:"/docs/lecture2"},next:{title:"Lecture 4",permalink:"/docs/lecture4"}},l=[{value:"Before the lecture",id:"before-the-lecture",children:[{value:"Create <code>tsconfig.json</code>",id:"create-tsconfigjson",children:[]},{value:"Install Postman",id:"install-postman",children:[]}]},{value:"Postman and Request Bodies",id:"postman-and-request-bodies",children:[{value:"Postman",id:"postman",children:[]},{value:"POST Request",id:"post-request",children:[]},{value:"DELETE Request",id:"delete-request",children:[]}]},{value:"Intro to Databases and Firebase",id:"intro-to-databases-and-firebase",children:[{value:"Why do we need a database for our backend?",id:"why-do-we-need-a-database-for-our-backend",children:[]},{value:"MySQL + Relational Databases",id:"mysql--relational-databases",children:[]},{value:"NoSQL and Firestore",id:"nosql-and-firestore",children:[]},{value:"SQL vs NoSQL",id:"sql-vs-nosql",children:[]},{value:"What is Firebase?",id:"what-is-firebase",children:[]},{value:"Why Firebase?",id:"why-firebase",children:[]}]},{value:"Basic Database Manipulations",id:"basic-database-manipulations",children:[]},{value:"Sample code",id:"sample-code",children:[]}],c={toc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.google.com/presentation/d/1P8kf-H0n5my1O2OW1MOjo5GpvdMFsWGm68vgwU9TQc8/edit?usp=sharing"}),"Lecture Slides")),Object(s.b)("p",null,Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/assignment2"}),"Assignment 2")," (due 10/21 6:29 PM on CMS)"),Object(s.b)("p",null,Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.postman.com/downloads/"}),"Install Postman")),Object(s.b)("h2",{id:"before-the-lecture"},"Before the lecture"),Object(s.b)("h3",{id:"create-tsconfigjson"},"Create ",Object(s.b)("inlineCode",{parentName:"h3"},"tsconfig.json")),Object(s.b)("p",null,"From now on, we will be using a ",Object(s.b)("inlineCode",{parentName:"p"},"tsconfig.json")," file within every Node project we create (a recap on how to do that is below this section). Essentially, the ",Object(s.b)("inlineCode",{parentName:"p"},"tsconfig.json")," is a file at the root of a Node project which indicates it is using TypeScript, and allows us to configure the TypeScript compiler. If you'd like to follow the lecture synchronously, you can put the following chunk of code into the root directory of your lecture 3 project. If you're more curious about how the file works, you can refer ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"}),"to this link"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "compilerOptions": {\n    "target": "ES2021",\n    "outDir": "dist",\n    "lib": ["dom", "dom.iterable", "esnext"],\n    "baseUrl": "./src",\n    "skipLibCheck": true,\n    "esModuleInterop": true,\n    "allowSyntheticDefaultImports": true,\n    "strict": true,\n    "forceConsistentCasingInFileNames": true,\n    "isolatedModules": true,\n    "noUnusedLocals": true,\n    "importsNotUsedAsValues": "error",\n    "module": "commonjs",\n    "moduleResolution": "node",\n    "resolveJsonModule": true\n  },\n  "include": ["src"]\n}\n')),Object(s.b)("h3",{id:"install-postman"},"Install Postman"),Object(s.b)("p",null,"Use the link above to install Postman."),Object(s.b)("h2",{id:"postman-and-request-bodies"},"Postman and Request Bodies"),Object(s.b)("h3",{id:"postman"},"Postman"),Object(s.b)("p",null,"Instead of always going to the endpoint in the browser, a robust way of testing\nour endpoints is to use Postman."),Object(s.b)("p",null,"Postman is a software that allows you to simulate requests that could be sent by\na user to your backend. It is useful for testing and ensuring that the behavior\nof your requests (including necessary headers) is what you expect."),Object(s.b)("h3",{id:"post-request"},"POST Request"),Object(s.b)("p",null,"Usually when you want to send a ",Object(s.b)("inlineCode",{parentName:"p"},"POST")," request you also want to send information\nwith it. Situationally, you want to do this using request bodies rather than\nquery parameters."),Object(s.b)("p",null,"Let's say we have this ",Object(s.b)("inlineCode",{parentName:"p"},"addSong")," endpoint:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'}),"app.post('/addSong', (req, res) => {\n  const song: Song = { name: req.body.name, rating: req.body.rating };\n  console.log(song);\n  songs.push(song);\n  res.send(`Song ${req.body.name} added!`);\n});\n")),Object(s.b)("p",null,"where ",Object(s.b)("inlineCode",{parentName:"p"},"Song")," is the type:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'}),"type Song = {\n  name: string;\n  rating: number;\n};\n")),Object(s.b)("p",null,"Previously, we may have considered using query parameters for sending data for\nthe backend. There's nothing wrong with that; for example, we could have used\n",Object(s.b)("inlineCode",{parentName:"p"},"/addSong?name=Despacito&rating=5"),". However, this can lead to extremely long\nURLs, and limit us from sending more complicated data. That's where ",Object(s.b)("strong",{parentName:"p"},"request\nbodies")," come in handy. We can instead send request data in JSON format to the\nbackend, allowing us to use the data more easily and integrate it seamlessly\nwith our backend (which happens to be in TypeScript, so we can easily deal with\nit)."),Object(s.b)("p",null,"The snippet above tells ",Object(s.b)("inlineCode",{parentName:"p"},"express")," to listen for ",Object(s.b)("inlineCode",{parentName:"p"},"POST")," requests at endpoint\n",Object(s.b)("inlineCode",{parentName:"p"},"/addSong"),". ",Object(s.b)("inlineCode",{parentName:"p"},"req.body")," is a JavaScript object, and we access its properties\n",Object(s.b)("inlineCode",{parentName:"p"},"req.body.name")," and ",Object(s.b)("inlineCode",{parentName:"p"},"req.body.rating")," to add a new song to our array of songs."),Object(s.b)("p",null,"Now, we should have a working ",Object(s.b)("inlineCode",{parentName:"p"},"POST")," endpoint that does something with the\nrequest body."),Object(s.b)("p",null,"However, we can't test request bodies quite as easily through the\nbrowser; we can check that this endpoint is working using Postman. Set the\nrequest type to ",Object(s.b)("inlineCode",{parentName:"p"},"POST")," and URL as ",Object(s.b)("inlineCode",{parentName:"p"},"localhost:8080/addSong"),". To send a request\nbody, first go to Headers and add a new key ",Object(s.b)("inlineCode",{parentName:"p"},"Content-Type")," with value\n",Object(s.b)("inlineCode",{parentName:"p"},"application/json"),". This says we are sending JSON input (essentially, an object\nor dictionary) in our request body. JSON is generally used in POST requests to\nsend a payload (and also for more nested structures). In the Body section,\nselect the raw radio button and enter the following in the text field:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "Despacito",\n  "rating": 5\n}\n')),Object(s.b)("p",null,"We will be sending ",Object(s.b)("inlineCode",{parentName:"p"},"name")," with a value of ",Object(s.b)("inlineCode",{parentName:"p"},'"Despacito"')," and ",Object(s.b)("inlineCode",{parentName:"p"},"rating")," with a\nvalue of ",Object(s.b)("inlineCode",{parentName:"p"},"5")," in the request body."),Object(s.b)("p",null,"Sending this request, you should see the corresponding song printed out to the\nconsole by the endpoint."),Object(s.b)("p",null,"Now, let's create another ",Object(s.b)("inlineCode",{parentName:"p"},"POST")," endpoint to update a song's rating. This will\nalso use a request body with just a ",Object(s.b)("inlineCode",{parentName:"p"},"name")," field, which should match the song we\nwant to update."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'}),"app.post('/updateRating', (req, res) => {\n  for (const song of songs) {\n    if (song.name === req.body.name) {\n      song.rating = req.body.rating;\n    }\n  }\n  res.send('Rating updated!');\n  console.log(songs);\n});\n")),Object(s.b)("h3",{id:"delete-request"},"DELETE Request"),Object(s.b)("p",null,"When creating APIs, we use the ",Object(s.b)("inlineCode",{parentName:"p"},"DELETE")," request method to quite simply delete a\nspecific resource. This should be pretty straightforward: we simply take the\nname of the song to delete through the request body, and create a new version of\nthe songs without the specified song. We then send text to the requester that it\nwas deleted."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'}),"app.delete('/removeSong', (req, res) => {\n  const newSongs = [];\n  for (let song of songs) {\n    if (song.name !== req.body.name) {\n      newSongs.push(song);\n    }\n  }\n  songs = newSongs;\n  res.send(`Song ${req.body.name} deleted!`);\n});\n")),Object(s.b)("p",null,"And with that, we're done!"),Object(s.b)("h2",{id:"intro-to-databases-and-firebase"},"Intro to Databases and Firebase"),Object(s.b)("p",null,'The song API we just made "works": we can add songs and then get them\nwhile running the Express server. But it has one fatal flaw: try stopping the\nserver and then running it again. You\'ll see that all the music is gone! We need\nsome kind of persistent storage for this data: through\u2014you guessed it\u2014a\ndatabase.'),Object(s.b)("h3",{id:"why-do-we-need-a-database-for-our-backend"},"Why do we need a database for our backend?"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Data stored within Node.js is per instance"),Object(s.b)("li",{parentName:"ul"},"Most applications require persistence"),Object(s.b)("li",{parentName:"ul"},"Data analysis"),Object(s.b)("li",{parentName:"ul"},"Performant data location"),Object(s.b)("li",{parentName:"ul"},"Offloading unneeded data from memory")),Object(s.b)("h3",{id:"mysql--relational-databases"},"MySQL + Relational Databases"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Stores data in tables, utilizing rows and tables."),Object(s.b)("li",{parentName:"ul"},"Is relational (think a tuple)"),Object(s.b)("li",{parentName:"ul"},"Has a schema")),Object(s.b)("h3",{id:"nosql-and-firestore"},"NoSQL and Firestore"),Object(s.b)("p",null,"We will focus on NoSQL"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Many NoSQL implementations are schema-less or have a partial schema"),Object(s.b)("li",{parentName:"ul"},"Firestore is a cloud-hosted NoSQL database"),Object(s.b)("li",{parentName:"ul"},"Very flexible and can be used with most popular languages"),Object(s.b)("li",{parentName:"ul"},"Uses documents to store data"),Object(s.b)("li",{parentName:"ul"},"Efficient querying for data")),Object(s.b)("h3",{id:"sql-vs-nosql"},"SQL vs NoSQL"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"SQL databases have a predefined schema, whereas NoSQL databases can abide to\nany structure you want it to."),Object(s.b)("li",{parentName:"ul"},"NoSQL databases are better suited for large sets of data, but not for complex\nqueries."),Object(s.b)("li",{parentName:"ul"},"SQL databases tend to be less expensive for smaller datasets, but also less\nflexible."),Object(s.b)("li",{parentName:"ul"},"SQL leans towards strong consistency whereas NoSQL favors eventual consistency\n(i.e. there may be some delay in getting the response back)"),Object(s.b)("li",{parentName:"ul"},"SQL databases tend to be vertically scalable (need more computing power on one\nmachine to store more data) while NoSQL databases tend to be horizontally\nscalable (can distribute storage and compute power on multiple machines)"),Object(s.b)("li",{parentName:"ul"},"Examples of SQL databases: MySQL, PostgreSQL"),Object(s.b)("li",{parentName:"ul"},"Examples of NoSQL databases: Firebase, MongoDB")),Object(s.b)("h3",{id:"what-is-firebase"},"What is Firebase?"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Firebase is a Backend as a Service (BaaS) offered by Google",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Allows you to store data"),Object(s.b)("li",{parentName:"ul"},"Host websites"),Object(s.b)("li",{parentName:"ul"},"Authentication"))),Object(s.b)("li",{parentName:"ul"},"NoSQL DB",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Not only SQL"),Object(s.b)("li",{parentName:"ul"},"Non relational")))),Object(s.b)("h3",{id:"why-firebase"},"Why Firebase?"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Real-time operations"),Object(s.b)("li",{parentName:"ul"},"Firebase Authentication"),Object(s.b)("li",{parentName:"ul"},"Built-in analytics"),Object(s.b)("li",{parentName:"ul"},"Also supports hosting/deployment"),Object(s.b)("li",{parentName:"ul"},"Integration with other Google services"),Object(s.b)("li",{parentName:"ul"},"Structure we\u2019re familiar with!")),Object(s.b)("h2",{id:"basic-database-manipulations"},"Basic Database Manipulations"),Object(s.b)("p",null,"People usually call that ",Object(s.b)("inlineCode",{parentName:"p"},"CRUD"),", which stands for:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"C"),"reate/Insert - Create a document (will fail if the document exists)"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"R"),"ead/Find/Query - To search for documents based on their properties"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"U"),"pdate - Update an existing document (will fail otherwise)"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"D"),"elete - Delete an existing document")),Object(s.b)("p",null,"For convenience, most NoSQL database also provides an ",Object(s.b)("em",{parentName:"p"},"upsert")," operation. It\nwill create the document or update an existing document. You can think of that\nas an atomic operation that does:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"if (document.exists()) {\n  database.update(document);\n} else {\n  database.insert(document);\n}\n")),Object(s.b)("p",null,"In Firestore, you can either insert a new document with a specified ID, or allow\nFirestore to generate its own ID for you."),Object(s.b)("p",null,"The update method in Firestore allows you to update certain fields of the\ndocument without overwriting the entire thing."),Object(s.b)("h2",{id:"sample-code"},"Sample code"),Object(s.b)("p",null,"The following code demonstrates how we can do basic CRUD with Firestore. Note\nthat the code below does not care about what are the fields of a post, because\nFirestore doesn't require you to have a predefined set of fields. This gives you\nflexibility when writing your backend code."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'}),"import admin from 'firebase-admin';\nimport express from 'express';\n\n// require the service account: note the file path\nconst serviceAccount = require('../service-account.json');\n// initialize the firebase app\nadmin.initializeApp({\n  credential: admin.credential.cert(serviceAccount),\n});\n\nconst db = admin.firestore();\nconst app = express();\nconst port = 8080;\n// allow request body parsing\napp.use(express.json());\n\n// check connections\napp.get('/', (_, res) => {\n  res.send('connected!');\n});\n\n// create a post type and post with id\ntype Post = {\n  content: string;\n  name: string;\n};\n\ntype PostWithID = Post & {\n  id: string;\n};\n\n// CRUD with firestore\nlet posts1: Post[] = [{ content: 'I miss wellness days', name: 'Becky' }];\n\n// posts collection from db\nconst postsCollection = db.collection('posts');\n\n// GET requests: get the songs\napp.get('/getPostsLocal', (_, res) => {\n  res.send(posts1);\n});\n\n// use firebase instead\napp.get('/getPostsFirebase', async (_, res) => {\n  const postsSnapshot = await postsCollection.get();\n  const allPostsDoc = postsSnapshot.docs;\n  const posts: PostWithID[] = [];\n  for (let doc of allPostsDoc) {\n    const post: PostWithID = doc.data() as PostWithID;\n    post.id = doc.id;\n    posts.push(post);\n  }\n  res.send(posts);\n});\n\n// read posts by name\napp.get('/getPosts/:name', async function (req, res) {\n  const name = req.params.name;\n  const postsSnapshot = await postsCollection.where('name', '==', name).get();\n  const allPostsDoc = postsSnapshot.docs;\n  const posts: PostWithID[] = [];\n  for (let doc of allPostsDoc) {\n    const post: PostWithID = doc.data() as PostWithID;\n    post.id = doc.id;\n    posts.push(post);\n  }\n  res.send(posts);\n});\n\n// read posts by id\napp.get('/getPostById/:id', async function (req, res) {\n  const id = req.params.id;\n  const postsSnapshot = await postsCollection.doc(id).get();\n  const post: PostWithID = postsSnapshot.data() as PostWithID;\n  res.send(post);\n});\n\n// sort posts in descending order by name\napp.get('/getPostsSorted', async function (req, res) {\n  const postsSnapshot = await postsCollection.orderBy('name', 'desc').get();\n  const allPostsDoc = postsSnapshot.docs;\n  const posts: PostWithID[] = [];\n  for (let doc of allPostsDoc) {\n    const post: PostWithID = doc.data() as PostWithID;\n    post.id = doc.id;\n    posts.push(post);\n  }\n  res.send(posts);\n});\n\n// POST method: create a new post\napp.post('/addPostLocal', (req, res) => {\n  const post: Post = req.body;\n  posts1.push(post);\n  res.send(`Post created by ${req.body.name}!`);\n});\n\n// generate a document with a random name to store the post's data\napp.post('/addPostFirebase', async function (req, res) {\n  const post: Post = req.body;\n  const postDoc = postsCollection.doc();\n  await postDoc.set(post);\n  res.send(postDoc.id);\n});\n\n// POST method: update an existing post\napp.post('/updatePostLocal', (req, res) => {\n  for (let post of posts1) {\n    if (post.name === req.body.name) {\n      post.content = req.body.content;\n    }\n  }\n  console.log(posts1);\n  res.send('content updated!');\n});\n\n// update by id\napp.post('/updatePostFirebase/:id', async function (req, res) {\n  const newPost: Post = req.body;\n  const id: string = req.params.id;\n  await postsCollection.doc(id).update(newPost);\n  res.send('updated!');\n});\n\n// DELETE methdod: delete a post\napp.delete('/removePostLocal', (req, res) => {\n  const newPosts = [];\n  for (let post of posts1) {\n    if (post.name !== req.body.name) {\n      newPosts.push(post);\n    }\n  }\n  posts1 = newPosts;\n  res.send(`Post by ${req.body.name} deleted!`);\n});\n\n// delete by id\napp.delete('/removePostFirebase/:id', async function (req, res) {\n  const id = req.params.id;\n  await postsCollection.doc(id).delete();\n  res.send('deleted!');\n});\n\napp.listen(port, () => console.log(`App started on port ${port}!`));\n")))}d.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(r,".").concat(u)]||p[u]||b[u]||s;return n?o.a.createElement(m,i(i({ref:t},c),{},{components:n})):o.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var c=2;c<s;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);