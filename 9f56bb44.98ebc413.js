(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(132)),i={id:"lecture8",title:"Lecture 8"},s={unversionedId:"lecture8",id:"version-2020sp/lecture8",isDocsHomePage:!1,title:"Lecture 8",description:"Lecture Slides",source:"@site/versioned_docs/version-2020sp/lecture8.md",slug:"/lecture8",permalink:"/docs/2020sp/lecture8",version:"2020sp",sidebar:"version-2020sp/docs",previous:{title:"Lecture 7",permalink:"/docs/2020sp/lecture7"},next:{title:"Lecture 9",permalink:"/docs/2020sp/lecture9"}},c=[{value:"Bridging the Frontend &amp; Backend",id:"bridging-the-frontend--backend",children:[]},{value:"Data Fetching",id:"data-fetching",children:[{value:"What IS data fetching?",id:"what-is-data-fetching",children:[]},{value:"How do we fetch (in React)?",id:"how-do-we-fetch-in-react",children:[]},{value:"Fetching Example",id:"fetching-example",children:[]}]},{value:"<code>fetch</code>",id:"fetch",children:[]},{value:"Promises",id:"promises",children:[{value:"<code>.then()</code>",id:"then",children:[]},{value:"<code>.catch()</code>",id:"catch",children:[]},{value:"Using <code>.then()</code> with <code>fetch()</code>",id:"using-then-with-fetch",children:[]},{value:"async/await",id:"asyncawait",children:[]},{value:"I still don&#39;t understand Promises",id:"i-still-dont-understand-promises",children:[]}]},{value:"I don&#39;t like <code>fetch</code>",id:"i-dont-like-fetch",children:[]},{value:"CORS workaround: proxy",id:"cors-workaround-proxy",children:[]},{value:"Summary",id:"summary",children:[]},{value:"Demo Code",id:"demo-code",children:[{value:"Backend",id:"backend",children:[]}]}],l={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.google.com/presentation/d/1vzLbAXACKcGTcTSr-XPrMa9K0jrqawfwd1l3vEsDAfc/edit#slide=id.g825b4667a9_0_783"}),"Lecture Slides")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://drive.google.com/file/d/14VO3kfb_kBLSBRlqOaSepNADNPPXFQCp/view?usp=sharing"}),"Lecture Video")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ashneeldas2/trends-sp20/tree/master/FinalProject"}),"Final Project")),Object(r.b)("h2",{id:"bridging-the-frontend--backend"},"Bridging the Frontend & Backend"),Object(r.b)("p",null,"We've worked with Express/Firebase on the backend and React on the frontend. So\nfar, we've been learning about them separately. How can we bring both ends\ntogether to make one working product?"),Object(r.b)("h2",{id:"data-fetching"},"Data Fetching"),Object(r.b)("p",null,'"',Object(r.b)("em",{parentName:"p"},"data"),' is the new oil \ud83e\udd11"'),Object(r.b)("h3",{id:"what-is-data-fetching"},"What IS data fetching?"),Object(r.b)("p",null,"Data fetching is ",Object(r.b)("strong",{parentName:"p"},"getting information (data) from an outside source (e.g. REST API)")),Object(r.b)("p",null,"The frontend wants to ",Object(r.b)("strong",{parentName:"p"},"fetch data")," from the backend."),Object(r.b)("p",null,"Frontend tells Backend what it wants.\nBackend sends the appropriate data to Frontend.\nFrontend displays the data to the user!"),Object(r.b)("p",null,"In Trends, our React website will be fetching data from our Express server."),Object(r.b)("h3",{id:"how-do-we-fetch-in-react"},"How do we fetch (in React)?"),Object(r.b)("p",null,"So how do we fetch data with our React frontend?"),Object(r.b)("p",null,"Two important things to note:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Modern browsers have a nifty little JavaScript function called ",Object(r.b)("inlineCode",{parentName:"p"},"fetch")," that\nyou can use to call API endpoints. Libraries such as ",Object(r.b)("inlineCode",{parentName:"p"},"axios")," provide similar\nfunctionality.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"useEffect")," React hook allows you to trigger side effects, such as\nfetching data!"))),Object(r.b)("p",null,"We want to keep track of our data in our component state, and use hooks like\n",Object(r.b)("inlineCode",{parentName:"p"},"useEffect")," to ",Object(r.b)("inlineCode",{parentName:"p"},"fetch")," the data and update the state accordingly!"),Object(r.b)("h3",{id:"fetching-example"},"Fetching Example"),Object(r.b)("p",null,"Consider this snippet of code:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="App.js"',title:'"App.js"'}),"const App = () => {\n  const [data, setData] = useState([]);\n  useEffect(() => {\n    fetch(`${API}`)\n      .then((response) => response.json())\n      .then((d) => setData(d));\n  });\n  // ... other methods, return, etc\n};\n")),Object(r.b)("p",null,"Here are the important parts:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"We have ",Object(r.b)("inlineCode",{parentName:"li"},"data")," in our component state. Later, we call ",Object(r.b)("inlineCode",{parentName:"li"},"setData")," on what the\nbackend sends to us."),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"useEffect")," hook is used to subscribe to new data."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fetch(...)")," is called on an API link, followed by ",Object(r.b)("inlineCode",{parentName:"li"},".then(...)")," calls that\nformat the response into json and then ",Object(r.b)("inlineCode",{parentName:"li"},"setData")," to the response. The\n",Object(r.b)("inlineCode",{parentName:"li"},".then()")," calls exist because ",Object(r.b)("inlineCode",{parentName:"li"},"fetch()")," returns a ",Object(r.b)("inlineCode",{parentName:"li"},"Promise")," (this is explained\nbelow)")),Object(r.b)("p",null,"Let's take a deeper look at ",Object(r.b)("inlineCode",{parentName:"p"},"fetch"),"!"),Object(r.b)("h2",{id:"fetch"},Object(r.b)("inlineCode",{parentName:"h2"},"fetch")),Object(r.b)("p",null,'"stop trying to make fetch happen \ud83d\udc67"'),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"fetch(resource, [init])")," is a native browser function for making web requests."),Object(r.b)("p",null,"Its params are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"resource"),": URL of the site you are fetching from"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"init"),": optional object containing any custom settings you want to apply to\nthe request.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"    // your init object might look like this\n    {\n      // HTTP request method\n       method: 'GET', // | 'POST' | 'PUT' | 'DELETE' | etc\n       // Any request headers you want to add\n       headers: {\n         'content-type': 'application/json'\n       },\n       // Request body (remember to stringify!)\n       body: JSON.stringify(requestBody)\n       // ... other settings\n    }\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"For more on the init object, refer to\n",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"}),"this link"),"!")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"IMPORTANT: fetch() returns a PROMISE!")),Object(r.b)("h2",{id:"promises"},"Promises"),Object(r.b)("p",null,"Operations like web requests don't complete instantly! You want to do other stuff\nwhile the operation is still going on."),Object(r.b)("p",null,"Promises represent the ",Object(r.b)("strong",{parentName:"p"},"eventual")," completion (or failure) of an async operation."),Object(r.b)("p",null,"Promises are in one of three possible states:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pending"),": initial state; neither fulfilled nor rejected"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fulfilled"),": operation completed successfully"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"rejected"),": operation failed")),Object(r.b)("h3",{id:"then"},Object(r.b)("inlineCode",{parentName:"h3"},".then()")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},".then()")," is a function on Promises that return a promise."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"p.then(onFulfilled[, onRejected])\n")),Object(r.b)("p",null,"Let's break this down!"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"p")," is a Promise."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"onFulfilled")," is the callback function that is run when ",Object(r.b)("inlineCode",{parentName:"li"},"p")," is fulfilled"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"onRejected")," (OPTIONAL) is the callback for when ",Object(r.b)("inlineCode",{parentName:"li"},"p")," is rejected")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"p.then(\n  (value) => {\n    // fulfillment\n  },\n  (reason) => {\n    // rejection\n  }\n);\n")),Object(r.b)("h3",{id:"catch"},Object(r.b)("inlineCode",{parentName:"h3"},".catch()")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},".catch()")," is a function on Promises that catches a rejection."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"p.catch(onRejected);\n")),Object(r.b)("p",null,"For example, you might want to ",Object(r.b)("inlineCode",{parentName:"p"},"console.log")," errors:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"fetch(`https://jsonplaceholder.typicode.com/posts`)\n  .then(...)\n  .catch((err) => console.log(err))\n")),Object(r.b)("h3",{id:"using-then-with-fetch"},"Using ",Object(r.b)("inlineCode",{parentName:"h3"},".then()")," with ",Object(r.b)("inlineCode",{parentName:"h3"},"fetch()")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"fetch()")," returns a ",Object(r.b)("inlineCode",{parentName:"p"},"Promise")," that resolves to a ",Object(r.b)("inlineCode",{parentName:"p"},"Response")," object."),Object(r.b)("p",null,"Consider this snippet, similar to one shown above:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"fetch(`https://jsonplaceholder.typicode.com/posts`)\n  .then((response) => response.json())\n  .then((d) => setData(d));\n  .catch((err) => console.log(err))\n")),Object(r.b)("p",null,"Here we are getting the response from an endpoint ",Object(r.b)("strong",{parentName:"p"},"and then")," calling ",Object(r.b)("inlineCode",{parentName:"p"},".json()"),"\non the response ",Object(r.b)("strong",{parentName:"p"},"and then")," calling ",Object(r.b)("inlineCode",{parentName:"p"},"setData")," on the result of ",Object(r.b)("inlineCode",{parentName:"p"},"json()"),"."),Object(r.b)("p",null,"If a promise gets rejected anywhere along this chain, we will log the error in\nour console."),Object(r.b)("h3",{id:"asyncawait"},"async/await"),Object(r.b)("p",null,"If you have too much ",Object(r.b)("inlineCode",{parentName:"p"},".then()")," calls within each other, you might build a\nPYRAMID OF DOOM \u2620."),Object(r.b)("p",null,"Adding the async keyword to a function designates that function as an\nasynchronous function"),Object(r.b)("p",null,"Within these async functions we can use await to designate which lines need to\nbe \u201cawaited\u201d upon to resolve"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// .then\nconst fetchData = () => {\n  fetch(`https://jsonplaceholder.typicode.com/posts`)\n    .then((response) => response.json())\n    .then((d) => setData(d));\n};\n\n// async/await\nconst fetchData = async () => {\n  const response = await fetch('https://jsonplaceholder.typicode.com/posts');\n  const posts = await response.json();\n  setData(posts);\n};\n")),Object(r.b)("h3",{id:"i-still-dont-understand-promises"},"I still don't understand Promises"),Object(r.b)("p",null,"Let's say you are at a store and you want to know whether the store has\nsomething in stock. So you ask an employee named Joe and he ",Object(r.b)("strong",{parentName:"p"},"promises")," you that he'll be\nback with the results."),Object(r.b)("p",null,"You are now waiting for Joe to come back. The Promise will be ",Object(r.b)("strong",{parentName:"p"},"pending")," for as long as\nJoe is gone."),Object(r.b)("p",null,"Let's say Joe comes back with the results. Now you know whether the store is in\nstock or not. Now the Promise is ",Object(r.b)("strong",{parentName:"p"},"fulfilled"),"."),Object(r.b)("p",null,"Let's say Joe doesn't come back with the results. Unfortunately an anvil fell on\nhim or something. Now you know that Joe will not come back with the result. Now the\nPromise is ",Object(r.b)("strong",{parentName:"p"},"rejected"),"."),Object(r.b)("h2",{id:"i-dont-like-fetch"},"I don't like ",Object(r.b)("inlineCode",{parentName:"h2"},"fetch")),Object(r.b)("p",null,"Try ",Object(r.b)("inlineCode",{parentName:"p"},"axios")," instead!"),Object(r.b)("p",null,"Axios is an npm package that can give you a better experience fetching data."),Object(r.b)("p",null,"It's got stuff like:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"axios.get(url[, config])")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"axios.post(url[, data[, config]])")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"axios.put(url[, data[, config]])")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"axios.delete(url[, config])"))),Object(r.b)("p",null,"Axios also returns a promise and can be resolved with ",Object(r.b)("inlineCode",{parentName:"p"},".then()"),"."),Object(r.b)("p",null,"Here's an example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// fetch()\nconst fetchData = async () => {\n  const response = await fetch('https://jsonplaceholder.typicode.com/posts');\n  const posts = await response.json();\n  setData(posts);\n};\n\n// axios\nconst fetchData = async () => {\n  const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');\n  setData(posts);\n};\n")),Object(r.b)("h2",{id:"cors-workaround-proxy"},"CORS workaround: proxy"),Object(r.b)("p",null,"When you are testing your backend and frontend together on localhost, you will come across some sort of ",Object(r.b)("strong",{parentName:"p"},"CORS policy error")," when you try to call the backend from the frontend."),Object(r.b)("p",null,"One way to get around this is to add this line to your ",Object(r.b)("strong",{parentName:"p"},"frontend"),"'s ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'  "proxy": "http://localhost:8080",\n')),Object(r.b)("p",null,"where ",Object(r.b)("inlineCode",{parentName:"p"},"8080")," is the the port of your ",Object(r.b)("strong",{parentName:"p"},"backend")," (change it accordingly)."),Object(r.b)("p",null,"After adding the proxy config, remove the base URL from your requests:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// do this\nconst posts = await axios.get('/getAllPosts');\n\n// instead of this\nconst posts = await axios.get('http://localhost:8080/getAllPosts');\n")),Object(r.b)("h2",{id:"summary"},"Summary"),Object(r.b)("p",null,"You keep track of your data in component state. Your app displays whatever data\nyou have."),Object(r.b)("p",null,"You update your data by calling an endpoint within ",Object(r.b)("inlineCode",{parentName:"p"},"useEffect")," and setting your\ndata to the response that you get back."),Object(r.b)("p",null,"You can call endpoints using ",Object(r.b)("inlineCode",{parentName:"p"},"fetch()")," or ",Object(r.b)("inlineCode",{parentName:"p"},"axios")," and handle the responses\nasynchronously."),Object(r.b)("h2",{id:"demo-code"},"Demo Code"),Object(r.b)("h3",{id:"backend"},"Backend"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="index.js (backend)"',title:'"index.js','(backend)"':!0}),"const express = require('express');\nconst admin = require('firebase-admin');\nconst serviceAccount = require('./serviceAccount.json');\n\nadmin.initializeApp({\n  credential: admin.credential.cert(serviceAccount),\n  databaseURL: 'https://webdev-lec3.firebaseio.com',\n});\n\nconst app = express();\napp.use(express.json());\nconst db = admin.firestore();\n\nconst songsCollection = db.collection('songs');\n\napp.get('/getSongs', async (req, res) => {\n  const songs = await songsCollection.get();\n  res.json(songs.docs.map((song) => ({ ...song.data(), id: song.id })));\n});\n\napp.post('/createSong', async (req, res) => {\n  const newSong = req.body;\n  const addedSong = await songsCollection.add(newSong);\n  res.send(addedSong.id);\n});\n\napp.post('/updateRating', async (req, res) => {\n  const { id, rating } = req.query;\n  await songsCollection.doc(id).update({ rating });\n  res.send('Song rating updated!');\n});\n\napp.listen(8080, () => console.log('backend started'));\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="SongList.jsx (frontend)"',title:'"SongList.jsx','(frontend)"':!0}),"import React, { useState, useEffect } from 'react';\nimport Song from './Song';\nimport SongAdder from './SongAdder';\nimport axios from 'axios';\n\nexport default () => {\n\n  const [songs, setSongs] = useState([]);\n\n  // GET request using fetch\n  const fetchSongs = () => {\n    fetch('/getSongs')\n      .then(res => res.json())\n      .then(json => setSongs(json));\n  }\n\n  // GET request using axios\n  // const fetchSongs = () => {\n  //   axios.get('/getSongs')\n  //     .then(res => setSongs(res.data));\n  // }\n\n  useEffect(() => fetchSongs(), []);\n\n  // POST requset using fetch\n  const addSong = (name, artist, rating) => {\n    fetch('/createSong', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({ name, artist, rating })\n    })\n      .then(res => res.text())\n      .then(id => setSongs([...songs, { name, artist, rating, id }]))\n  }\n\n  // POST request using axios\n  // const addSong = (name, artist, rating) => {\n  //   axios.post('/createSong', { name, artist, rating })\n  //     .then(res => setSongs([...songs, { name, artist, rating, id: res.data }]))\n  // }\n\n  // POST request (update) using fetch\n  const updateRating = (id, rating) => {\n    fetch(`/updateRating?id=${id}&rating=${rating}`, {\n      method: 'POST'\n    })\n      .then(res => setSongs(songs.map(song => song.id === id ? { name: song.name, artist: song.artist, rating, id } : song)))\n  }\n\n  // POST request (update) using axios\n  // const updateRating = (id, rating) => {\n  //   axios.post(`/updateRating?id=${id}&rating=${rating}`)\n  //     .then(res => setSongs(songs.map(song => song.id === id ? { name: song.name, artist: song.artist, rating, id } : song)))\n  // }\n\n  return (\n    <div>\n      {songs.map(song => (<div> <Song key={song.id} {...song} updateRating={updateRating} /> <br /> </div>))}\n      <SongAdder callback={addSong} />\n    </div>\n  )\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="SongAdder.jsx (frontend)"',title:'"SongAdder.jsx','(frontend)"':!0}),"import React, { useState } from 'react';\n\nexport default ({ callback }) => {\n  const [name, setName] = useState('');\n  const [artist, setArtist] = useState('');\n  const [rating, setRating] = useState(0);\n\n  return (\n    <div>\n      <h3> Add a new song! </h3>\n      <input\n        placeholder=\"Song name\"\n        onChange={(e) => setName(e.target.value)}\n      /> <br />\n      <input\n        placeholder=\"Artist name\"\n        onChange={(e) => setArtist(e.target.value)}\n      />{' '}\n      <br />\n      <input\n        placeholder=\"Rating\"\n        onChange={(e) => setRating(e.target.value)}\n      /> <br />\n      <button onClick={(e) => callback(name, artist, rating)}> Add song</button>\n    </div>\n  );\n};\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="Song.jsx (frontend)"',title:'"Song.jsx','(frontend)"':!0}),"import React, { useState } from 'react';\n\nexport default ({ id, name, artist, rating, updateRating }) => {\n  const [newRating, setNewRating] = useState(rating);\n\n  return (\n    <div>\n      <div>\n        {' '}\n        The song {name} by {artist} currently has a rating of {rating}/5{' '}\n      </div>\n      <input\n        placeholder=\"New rating\"\n        onChange={(e) => setNewRating(e.target.value)}\n      />\n      <button onClick={(e) => updateRating(id, newRating)}>\n        {' '}\n        Update Rating{' '}\n      </button>\n    </div>\n  );\n};\n")))}p.isMDXComponent=!0},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,h=b["".concat(i,".").concat(u)]||b[u]||d[u]||r;return n?o.a.createElement(h,s(s({ref:t},l),{},{components:n})):o.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);