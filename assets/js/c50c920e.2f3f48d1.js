"use strict";(self.webpackChunktrends_in_web_dev_website=self.webpackChunktrends_in_web_dev_website||[]).push([[387],{7300:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(6687);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1306:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(3206),o=n(5421),r=(n(6687),n(7300)),i=["components"],s={id:"lecture8",title:"Lecture 8"},l=void 0,c={unversionedId:"lecture8",id:"version-2021fa/lecture8",isDocsHomePage:!1,title:"Lecture 8",description:"Lecture Slides",source:"@site/versioned_docs/version-2021fa/lecture8.md",sourceDirName:".",slug:"/lecture8",permalink:"/docs/lecture8",tags:[],version:"2021fa",frontMatter:{id:"lecture8",title:"Lecture 8"},sidebar:"version-2021fa/docs",previous:{title:"Lecture 7",permalink:"/docs/lecture7"},next:{title:"Lecture 9",permalink:"/docs/lecture9"}},p=[{value:"Concurrently",id:"concurrently",children:[],level:2},{value:"Bridging the Frontend &amp; Backend",id:"bridging-the-frontend--backend",children:[],level:2},{value:"Data Fetching",id:"data-fetching",children:[{value:"What IS data fetching?",id:"what-is-data-fetching",children:[],level:3},{value:"How do we fetch (in React)?",id:"how-do-we-fetch-in-react",children:[],level:3},{value:"Fetching Example",id:"fetching-example",children:[],level:3}],level:2},{value:"<code>fetch</code>",id:"fetch",children:[],level:2},{value:"Promises",id:"promises",children:[{value:"<code>.then()</code>",id:"then",children:[],level:3},{value:"<code>.catch()</code>",id:"catch",children:[],level:3},{value:"Using <code>.then()</code> with <code>fetch()</code>",id:"using-then-with-fetch",children:[],level:3},{value:"async/await",id:"asyncawait",children:[],level:3},{value:"I still don&#39;t understand Promises",id:"i-still-dont-understand-promises",children:[],level:3}],level:2},{value:"What if I don&#39;t like <code>fetch</code>? \ud83d\ude29",id:"what-if-i-dont-like-fetch-",children:[],level:2},{value:"CORS workaround: proxy",id:"cors-workaround-proxy",children:[],level:2},{value:"Summary",id:"summary",children:[],level:2},{value:"Demo Code",id:"demo-code",children:[{value:"Backend",id:"backend",children:[],level:3},{value:"Frontend",id:"frontend",children:[],level:3}],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1Htc7OxgJo8OVVxC6Sepl743kXdstj2k3s9kM7q3UYRc/edit?usp=sharing"},"Lecture Slides")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/assignment5"},"Assignment 5")," ",(0,r.kt)("del",{parentName:"p"},"(due 11/11 6:29 PM on CMS)")," (due date extended to ",(0,r.kt)("strong",{parentName:"p"},"11/14 by 11:59pm"),")"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/finalproject"},"Final Project Instructions")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/finalproject#milestone-0"},"Final Project - Milestone 0")," due ",(0,r.kt)("strong",{parentName:"p"},"11/14 by 11:59pm")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/finalproject#milestone-1"},"Final Project - Milestone 1")," due ",(0,r.kt)("strong",{parentName:"p"},"11/21 by 11:59pm")),(0,r.kt)("h2",{id:"concurrently"},"Concurrently"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"concurrently")," npm package lets us run multiple commands concurrently, as\nthe name suggests. This is perfect for us since we want to run both the backend\nand the frontend at the same time!"),(0,r.kt)("p",null,"You can install and add ",(0,r.kt)("inlineCode",{parentName:"p"},"concurrently")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," by running\n",(0,r.kt)("inlineCode",{parentName:"p"},"yarn install concurrently"),"."),(0,r.kt)("p",null,"We can create a ",(0,r.kt)("inlineCode",{parentName:"p"},"backend")," folder as well as a ",(0,r.kt)("inlineCode",{parentName:"p"},"frontend")," folder which contain\nthe corresponding projects."),(0,r.kt)("p",null,"Then, you can set up your scripts in your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "name": "demo",\n  // ...other stuff\n  "scripts": {\n    "server": "cd backend && yarn start",\n    "frontend": "cd frontend && yarn start",\n    "start": "concurrently \\"yarn server\\" \\"yarn frontend\\" "\n  }\n}\n')),(0,r.kt)("p",null,"Running ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn start")," would use ",(0,r.kt)("inlineCode",{parentName:"p"},"concurrently")," to start both the backend and\nfrontend!"),(0,r.kt)("h2",{id:"bridging-the-frontend--backend"},"Bridging the Frontend & Backend"),(0,r.kt)("p",null,"We've worked with Express/Firebase on the backend and React on the frontend. So\nfar, we've been learning about them separately. How can we bring both ends\ntogether to make one working product?"),(0,r.kt)("h2",{id:"data-fetching"},"Data Fetching"),(0,r.kt)("p",null,'"',(0,r.kt)("em",{parentName:"p"},"data"),' is the new oil \ud83e\udd11"'),(0,r.kt)("h3",{id:"what-is-data-fetching"},"What IS data fetching?"),(0,r.kt)("p",null,"Data fetching is ",(0,r.kt)("strong",{parentName:"p"},"getting information (data) from an outside source (e.g. REST API)")),(0,r.kt)("p",null,"The frontend wants to ",(0,r.kt)("strong",{parentName:"p"},"fetch data")," from the backend."),(0,r.kt)("p",null,"Frontend tells Backend what it wants.\nBackend sends the appropriate data to Frontend.\nFrontend displays the data to the user!"),(0,r.kt)("p",null,"In Trends, our React website will be fetching data from our Express server."),(0,r.kt)("h3",{id:"how-do-we-fetch-in-react"},"How do we fetch (in React)?"),(0,r.kt)("p",null,"So how do we fetch data with our React frontend?"),(0,r.kt)("p",null,"Two important things to note:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modern browsers have a nifty little JavaScript function called ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," that\nyou can use to call API endpoints. Libraries such as ",(0,r.kt)("inlineCode",{parentName:"p"},"axios")," provide similar\nfunctionality.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," React hook allows you to trigger side effects, such as\nfetching data!"))),(0,r.kt)("p",null,"We want to keep track of our data in our component state, and use hooks like\n",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," the data and update the state accordingly!"),(0,r.kt)("h3",{id:"fetching-example"},"Fetching Example"),(0,r.kt)("p",null,"Consider this snippet of code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},"// This corresponds to the type of data you get back in your response\ntype DataType = readonly string[];\n\nconst App = () => {\n  const [data, setData] = useState<DataType>([]);\n  useEffect(() => {\n    fetch(`${API}`)\n      .then((response) => response.json())\n      .then((d) => setData(d));\n  });\n  // ... other methods, return, etc\n};\n")),(0,r.kt)("p",null,"Here are the important parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We have ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," in our component state. Later, we call ",(0,r.kt)("inlineCode",{parentName:"li"},"setData")," on what the\nbackend sends to us."),(0,r.kt)("li",{parentName:"ul"},"We declare a type definition for the ",(0,r.kt)("inlineCode",{parentName:"li"},"useState")," call so that TS knows the type\nof data we're working with. (It can't infer type from an empty array!)"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"useEffect")," hook is used to subscribe to new data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fetch(...)")," is called on an API link, followed by ",(0,r.kt)("inlineCode",{parentName:"li"},".then(...)")," calls that\nformat the response into json and then ",(0,r.kt)("inlineCode",{parentName:"li"},"setData")," to the response. The\n",(0,r.kt)("inlineCode",{parentName:"li"},".then()")," calls exist because ",(0,r.kt)("inlineCode",{parentName:"li"},"fetch()")," returns a ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise")," (this is explained\nbelow)")),(0,r.kt)("p",null,"Let's take a deeper look at ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch"),"!"),(0,r.kt)("h2",{id:"fetch"},(0,r.kt)("inlineCode",{parentName:"h2"},"fetch")),(0,r.kt)("p",null,'"stop trying to make fetch happen \ud83d\udc67"'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fetch(resource, [init])")," is a native browser function for making web requests."),(0,r.kt)("p",null,"Its params are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"resource"),": URL of the site you are fetching from"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"init"),": optional object containing any custom settings you want to apply to\nthe request.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    // your init object might look like this\n    {\n      // HTTP request method\n       method: 'GET', // | 'POST' | 'PUT' | 'DELETE' | etc\n       // Any request headers you want to add\n       headers: {\n         'content-type': 'application/json'\n       },\n       // Request body (remember to stringify!)\n       body: JSON.stringify(requestBody)\n       // ... other settings\n    }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For more on the init object, refer to\n",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"},"this link"),"!")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IMPORTANT: fetch() returns a PROMISE!")),(0,r.kt)("h2",{id:"promises"},"Promises"),(0,r.kt)("p",null,"Operations like web requests don't complete instantly! You want to do other stuff\nwhile the operation is still going on."),(0,r.kt)("p",null,"Promises represent the ",(0,r.kt)("strong",{parentName:"p"},"eventual")," completion (or failure) of an async operation."),(0,r.kt)("p",null,"Promises are in one of three possible states:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pending"),": initial state; neither fulfilled nor rejected"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fulfilled"),": operation completed successfully"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rejected"),": operation failed")),(0,r.kt)("h3",{id:"then"},(0,r.kt)("inlineCode",{parentName:"h3"},".then()")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".then()")," is a function on Promises that return a promise."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"p.then(onFulfilled[, onRejected])\n")),(0,r.kt)("p",null,"Let's break this down!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"p")," is a Promise."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onFulfilled")," is the callback function that is run when ",(0,r.kt)("inlineCode",{parentName:"li"},"p")," is fulfilled"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onRejected")," (OPTIONAL) is the callback for when ",(0,r.kt)("inlineCode",{parentName:"li"},"p")," is rejected")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"p.then(\n  (value) => {\n    // fulfillment\n  },\n  (reason) => {\n    // rejection\n  }\n);\n")),(0,r.kt)("p",null,"Let's talk about types! ",(0,r.kt)("inlineCode",{parentName:"p"},"p")," in this case might be ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch()"),", which returns the\ntype ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise<Response>"),". If so, then ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," would have the type ",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),".\nThen, if the fulfillment function (which takes in ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),") returns type\n",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", then the entire expression would be type ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise<String>"),"."),(0,r.kt)("p",null,"If you've taken CS 3110 or done some functional programming outside of this\nclass/category theory, this might make you think of\nMonads/Applicatives/Functors. The specified behavior for ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"s in JS/TS\ndon't exactly follow the laws of what was just listed, but for learning purposes\nit may be helpful to roughly compare the ",(0,r.kt)("inlineCode",{parentName:"p"},"then")," function to ",(0,r.kt)("inlineCode",{parentName:"p"},"fmap")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"bind"),"."),(0,r.kt)("p",null,"If you're interested, take a look at this snippet and notice how the types\nbehave:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// promise: Promise<Response>\nconst promise = fetch('something');\n\n// kindaFunctor: (res: Response) => number\nconst kindaFunctor = (res: Response) => res.status;\n\n// kindaMonad: (res: Response) => Promise<string>\nconst kindaMonad = (res: Response) => res.text();\n\n// newPromise1: Promise<number>\nconst newPromise1 = promise.then(kindaFunctor);\n\n// newPromise2: Promise<string>\nconst newPromise2 = promise.then(kindaMonad);\n")),(0,r.kt)("h3",{id:"catch"},(0,r.kt)("inlineCode",{parentName:"h3"},".catch()")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".catch()")," is a function on Promises that catches a rejection."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"p.catch(onRejected);\n")),(0,r.kt)("p",null,"For example, you might want to ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log")," errors:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"fetch(`https://jsonplaceholder.typicode.com/posts`)\n  .then(...)\n  .catch((err) => console.log(err))\n")),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"onRejected")," takes a parameter of type ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),", since we don't know the\ntype of the error we will get."),(0,r.kt)("h3",{id:"using-then-with-fetch"},"Using ",(0,r.kt)("inlineCode",{parentName:"h3"},".then()")," with ",(0,r.kt)("inlineCode",{parentName:"h3"},"fetch()")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fetch()")," returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," that resolves to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Response")," object."),(0,r.kt)("p",null,"Consider this snippet, similar to one shown above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"fetch(`https://jsonplaceholder.typicode.com/posts`)\n  .then((response) => response.json())\n  .then((d) => setData(d));\n  .catch((err) => console.log(err))\n")),(0,r.kt)("p",null,"Here we are getting the response from an endpoint ",(0,r.kt)("strong",{parentName:"p"},"and then")," calling ",(0,r.kt)("inlineCode",{parentName:"p"},".json()"),"\non the response ",(0,r.kt)("strong",{parentName:"p"},"and then")," calling ",(0,r.kt)("inlineCode",{parentName:"p"},"setData")," on the result of ",(0,r.kt)("inlineCode",{parentName:"p"},"json()"),"."),(0,r.kt)("p",null,"If a promise gets rejected anywhere along this chain, we will log the error in\nour console."),(0,r.kt)("h3",{id:"asyncawait"},"async/await"),(0,r.kt)("p",null,"If you have too many ",(0,r.kt)("inlineCode",{parentName:"p"},".then()")," calls within each other, you might build a\nPYRAMID OF DOOM \u2620."),(0,r.kt)("p",null,"Adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," keyword to a function designates that function as an\nasynchronous function"),(0,r.kt)("p",null,"Within these ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," functions we can use await to designate which lines need to\nbe \u201cawaited\u201d upon to resolve"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// .then\nconst fetchData = () => {\n  fetch(`https://jsonplaceholder.typicode.com/posts`)\n    .then((response) => response.json())\n    .then((d) => setData(d));\n};\n\n// async/await\nconst fetchData = async () => {\n  const response = await fetch('https://jsonplaceholder.typicode.com/posts');\n  const posts = await response.json();\n  setData(posts);\n};\n")),(0,r.kt)("h3",{id:"i-still-dont-understand-promises"},"I still don't understand Promises"),(0,r.kt)("p",null,"Let's say you are at a store and you want to know whether the store has\nsomething in stock. So you ask an employee named Joe and he ",(0,r.kt)("strong",{parentName:"p"},"promises")," you\nthat he'll be back with the results."),(0,r.kt)("p",null,"You are now waiting for Joe to come back. The Promise will be ",(0,r.kt)("strong",{parentName:"p"},"pending")," for as\nlong as Joe is gone."),(0,r.kt)("p",null,"Let's say Joe comes back with the results. Now you know whether the store is in\nstock or not. Now the Promise is ",(0,r.kt)("strong",{parentName:"p"},"fulfilled"),"."),(0,r.kt)("p",null,"Let's say Joe doesn't come back with the results. Unfortunately an anvil fell on\nhim or something. Now you know that Joe will not come back with the result. Now\nthe Promise is ",(0,r.kt)("strong",{parentName:"p"},"rejected"),"."),(0,r.kt)("h2",{id:"what-if-i-dont-like-fetch-"},"What if I don't like ",(0,r.kt)("inlineCode",{parentName:"h2"},"fetch"),"? \ud83d\ude29"),(0,r.kt)("p",null,"Try ",(0,r.kt)("inlineCode",{parentName:"p"},"axios")," instead!"),(0,r.kt)("p",null,"Axios is an npm package that can give you a better experience fetching data."),(0,r.kt)("p",null,"It has methods like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"axios.get(url[, config])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"axios.post(url[, data[, config]])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"axios.put(url[, data[, config]])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"axios.delete(url[, config])"))),(0,r.kt)("p",null,"Axios also returns a promise and can be resolved with ",(0,r.kt)("inlineCode",{parentName:"p"},".then()"),"."),(0,r.kt)("p",null,"Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// fetch()\nconst fetchData = async () => {\n  const response = await fetch('https://jsonplaceholder.typicode.com/posts');\n  const posts = await response.json();\n  setData(posts);\n};\n\n// axios\nconst fetchData = async () => {\n  const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');\n  setData(posts);\n};\n")),(0,r.kt)("p",null,"In Typescript you can provide type definitions for the response you'll get from\na request, similar to what we do in ",(0,r.kt)("inlineCode",{parentName:"p"},"useState<type>"),". If you don't specify,\nyou'll get the ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// anyResponse: AxiosResponse<any>\nconst anyResponse = await axios.get('url');\n// anyData: any\nconst anyData = anyResponse.data;\n\ntype DataType = ...;\n// typedResponse: AxiosResponse<DataType>\nconst typedResponse = await axios.get<DataType>('url');\n// typedData: DataType\nconst typedData = typedResponse.data;\n")),(0,r.kt)("h2",{id:"cors-workaround-proxy"},"CORS workaround: proxy"),(0,r.kt)("p",null,"When you are testing your backend and frontend together on localhost, you will\ncome across some sort of ",(0,r.kt)("strong",{parentName:"p"},"CORS policy error")," when you try to call the backend\nfrom the frontend."),(0,r.kt)("p",null,"One way to get around this is to add this line to your ",(0,r.kt)("strong",{parentName:"p"},"frontend"),"'s\n",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  "proxy": "http://localhost:8080",\n')),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"8080")," is the the port of your ",(0,r.kt)("strong",{parentName:"p"},"backend")," (change it accordingly)."),(0,r.kt)("p",null,"After adding the proxy config, remove the base URL from your requests:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// do this\nconst posts = await axios.get('/getAllPosts');\n\n// instead of this\nconst posts = await axios.get('http://localhost:8080/getAllPosts');\n")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"You keep track of your data in component state. Your app displays whatever data\nyou have."),(0,r.kt)("p",null,"You update your data by calling an endpoint within ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," and setting your\ndata to the response that you get back."),(0,r.kt)("p",null,"You can call endpoints using ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"axios")," and handle the responses\nasynchronously."),(0,r.kt)("h2",{id:"demo-code"},"Demo Code"),(0,r.kt)("h3",{id:"backend"},"Backend"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts (backend)"',title:'"index.ts','(backend)"':!0},"import admin from 'firebase-admin';\nimport express from 'express';\n\nconst serviceAccount = require('../service-account.json');\n\nadmin.initializeApp({\n  credential: admin.credential.cert(serviceAccount),\n});\n\nconst db = admin.firestore();\n\nconst app = express();\nconst port = 8080;\napp.use(express.json());\n\ntype Product = {\n  price: string;\n  stocked: boolean;\n  name: string;\n};\n\ntype ProductWithID = Product & {\n  id: string;\n};\n\nconst productsCollection = db.collection('products');\n\napp.get('/getProducts', async (_, res) => {\n  const products = await productsCollection.get();\n  res.json(\n    products.docs.map((doc): ProductWithID => {\n      const product = doc.data() as Product;\n      return { ...product, id: doc.id };\n    })\n  );\n});\n\napp.post('/createProduct', async (req, res) => {\n  const newProduct = req.body as Product;\n  const addedProduct = await productsCollection.add(newProduct);\n  res.send(addedProduct.id);\n});\n\napp.post('/updatePrice', async (req, res) => {\n  const { id, rating } = req.query;\n  await productsCollection.doc(id as string).update({ rating });\n  res.send('Product updated!');\n});\n\napp.delete('/deleteProduct', async (req, res) => {\n  const { id } = req.query;\n  await productsCollection.doc(id as string).delete();\n  res.send('Product deleted!');\n});\n\napp.listen(port, () => console.log(`Example app listening on port ${port}!`));\n")),(0,r.kt)("h3",{id:"frontend"},"Frontend"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ProductTable.tsx (frontend)"',title:'"ProductTable.tsx','(frontend)"':!0},"// import axios from \"axios\";\n\nexport type Product = {\n  readonly price: string;\n  readonly stocked: boolean;\n  readonly name: string;\n  readonly id: string;\n};\n\ntype ProductRowProps = {\n  product: Product;\n};\n\n// new code 3\nconst ProductRow = ({\n  product: { name, stocked, price, id },\n}: ProductRowProps) => {\n  // DELETE request using fetch\n  const deleteProduct = () => {\n    fetch(`/deleteProduct?id=${id}`, {\n      method: 'DELETE',\n      headers: {\n        'content-type': 'application/json',\n      },\n    });\n  };\n\n  // DELETE request using axios and async/await\n  // const deleteProduct = async () => {\n  //   await axios.delete('/deleteProduct?id=${id}');\n  // }\n\n  const nameStyle = stocked ? {} : { color: 'red' };\n  return (\n    <tr>\n      <td style={{ ...nameStyle }}>{name}</td>\n      <td>{price}</td>\n      <td>\n        <button onClick={deleteProduct}>X</button>\n      </td>\n    </tr>\n  );\n};\n\ntype Props = {\n  readonly products: Product[];\n  readonly filterText: string;\n  readonly inStockOnly: boolean;\n};\n\nconst ProductTable = ({ products, filterText, inStockOnly }: Props) => {\n  const filteredProducts = products.filter(({ name, stocked }) => {\n    return name.includes(filterText) && (!inStockOnly || stocked);\n  });\n\n  return (\n    <table>\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Price</th>\n        </tr>\n      </thead>\n      <tbody>\n        {filteredProducts.map((product) => (\n          <ProductRow product={product} key={product.id} />\n        ))}\n      </tbody>\n    </table>\n  );\n};\n\nexport default ProductTable;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="FilterableProductTable.tsx (frontend)"',title:'"FilterableProductTable.tsx','(frontend)"':!0},'// import axios from "axios";\nimport { ChangeEvent, useEffect, useState } from \'react\';\nimport ProductTable, { Product } from \'./ProductTable\';\n\ntype SearchProps = {\n  readonly filterText: string;\n  readonly inStockOnly: boolean;\n  readonly handleFilterTextChange: (e: ChangeEvent<HTMLInputElement>) => void;\n  readonly handleCheckBoxChange: (e: ChangeEvent<HTMLInputElement>) => void;\n};\n\nconst SearchBar = ({\n  filterText,\n  inStockOnly,\n  handleFilterTextChange,\n  handleCheckBoxChange,\n}: SearchProps) => (\n  <form>\n    <input\n      type="text"\n      placeholder="search here"\n      value={filterText}\n      onChange={handleFilterTextChange}\n    />\n    <p>\n      <input\n        type="checkbox"\n        checked={inStockOnly}\n        onChange={handleCheckBoxChange}\n      />\n      Only show the products in stock\n    </p>\n  </form>\n);\n\ntype NewProductProps = {\n  products: Product[];\n  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;\n};\n\nconst NewProduct = ({ products, setProducts }: NewProductProps) => {\n  const [price, setPrice] = useState(\'\');\n  const [stocked, setStocked] = useState(true);\n  const [name, setName] = useState(\'\');\n\n  // POST request using fetch\n  const createProduct = () => {\n    const newProduct = { price, stocked, name };\n    fetch(\'/createProduct\', {\n      method: \'POST\',\n      headers: {\n        \'content-type\': \'application/json\',\n      },\n      body: JSON.stringify(newProduct),\n    })\n      .then((res) => res.text())\n      .then((data) => {\n        const newProductWithID = { ...newProduct, id: data };\n        setProducts([...products, newProductWithID]);\n      });\n  };\n\n  // POST request using axios and async/await\n  // const createProduct = async () => {\n  //   const newProduct = { price, stocked, name };\n  //   const { data } = await axios.post<string>(\'/createProduct\', newProduct);\n  //   const newProductWithID = { ...newProduct, id: data };\n  //   setProducts([...products, newProductWithID]);\n  // }\n\n  return (\n    <div>\n      <p>Add New Product:</p>\n      <input\n        type="text"\n        name="name"\n        placeholder="name..."\n        value={name}\n        onChange={(e) => setName(e.target.value)}\n      />\n      <input\n        type="text"\n        name="price"\n        placeholder="price..."\n        value={price}\n        onChange={(e) => setPrice(e.target.value)}\n      />\n      <select\n        name="stock"\n        onChange={(e) => setStocked(e.target.selectedIndex === 0)}\n      >\n        <option value="true">in stock</option>\n        <option value="false">out of stock</option>\n      </select>\n      <button onClick={createProduct}>add a product</button>\n    </div>\n  );\n};\n\nconst FilterableProductTable = () => {\n  const [filterText, setFilterText] = useState(\'\');\n  const [inStockOnly, setInStockOnly] = useState(false);\n  const [products, setProducts] = useState<Product[]>([]);\n\n  // GET request using fetch\n  useEffect(() => {\n    fetch(\'/getProducts\')\n      .then((res) => res.json())\n      .then((data) => {\n        setProducts(data);\n      });\n  }, [products]);\n\n  // GET request using axios and async/await\n  // useEffect(() => {\n  //   (async () => {\n  //     const { data } = await axios.get<Product[]>("/getProducts");\n  //     setProducts(data);\n  //   })();\n  // }, [products]);\n\n  const handleFilterTextChange = (e: ChangeEvent<HTMLInputElement>) => {\n    setFilterText(e.target.value);\n  };\n\n  const handleCheckBoxChange = (e: ChangeEvent<HTMLInputElement>) => {\n    setInStockOnly(e.target.checked);\n  };\n\n  return (\n    <div>\n      <SearchBar\n        filterText={filterText}\n        inStockOnly={inStockOnly}\n        handleFilterTextChange={handleFilterTextChange}\n        handleCheckBoxChange={handleCheckBoxChange}\n      />\n      <ProductTable\n        products={products}\n        filterText={filterText}\n        inStockOnly={inStockOnly}\n      />\n      <NewProduct products={products} setProducts={setProducts} />\n    </div>\n  );\n};\n\nexport default FilterableProductTable;\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx (frontend)"',title:'"App.tsx','(frontend)"':!0},"import './App.css';\nimport FilterableProductTable from './FilterableProductTable';\n\nfunction App() {\n  return (\n    <div>\n      <FilterableProductTable />\n    </div>\n  );\n}\n\nexport default App;\n")))}u.isMDXComponent=!0},3206:function(e,t,n){function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:function(){return a}})},5421:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return a}})}}]);