(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(138)),o={id:"lecture2",title:"Lecture 2"},s={unversionedId:"lecture2",id:"version-2021sp/lecture2",isDocsHomePage:!1,title:"Lecture 2",description:"Lecture Video",source:"@site/versioned_docs/version-2021sp/lecture2.md",slug:"/lecture2",permalink:"/docs/2021sp/lecture2",version:"2021sp",sidebar:"docs",previous:{title:"Lecture 1",permalink:"/docs/2021sp/lecture1"},next:{title:"Lecture 3",permalink:"/docs/2021sp/lecture3"}},l=[{value:"How to build a web app",id:"how-to-build-a-web-app",children:[{value:"How websites work",id:"how-websites-work",children:[]}]},{value:"Node.js",id:"nodejs",children:[]},{value:"Express",id:"express",children:[{value:"HTTP Methods",id:"http-methods",children:[]},{value:"Express",id:"express-1",children:[]},{value:"Responding to Requests",id:"responding-to-requests",children:[]}]},{value:"How to set up a Node Project",id:"how-to-set-up-a-node-project",children:[{value:"Initializing a Node project",id:"initializing-a-node-project",children:[]},{value:"Installing Dependencies",id:"installing-dependencies",children:[]},{value:"<strong>Don&#39;t Submit <code>node_modules</code>!!</strong>",id:"dont-submit-node_modules",children:[]},{value:"How to use and interpret package.json",id:"how-to-use-and-interpret-packagejson",children:[]}]},{value:"Live Coding Demo",id:"live-coding-demo",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://drive.google.com/file/d/10HpyZAh7yJIfy912gnU0KTDd_FQVb7C-/view?usp=sharing"}),"Lecture Video")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.google.com/presentation/d/1jk3I6avNSea4GVDafBIsm_tx21WDPPen0D67Shld4dg/edit?usp=sharing"}),"Lecture Slides")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/2021sp/assignment1"}),"Assignment 1")," (due 3/13 3:59 PM on CMS)"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://edstem.org/us/courses/4868/discussion/"}),"Join the Ed!")," (\ud83e\udd80Piazza is gone\ud83e\udd80)"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Topics: Node.js, Express, HTTP Methods")),Object(i.b)("h2",{id:"how-to-build-a-web-app"},"How to build a web app"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Intro to Node.js and Yarn")),Object(i.b)("h3",{id:"how-websites-work"},"How websites work"),Object(i.b)("p",null,"Websites are accessed by HTTP requests, and these requests go to the server, where it fetches the information queried and sends the data back to the client. This cycle between sending requests back and forth between client and server then repeats!"),Object(i.b)("h2",{id:"nodejs"},"Node.js"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Node.js is an open source, cross platform JavaScript V8 runtime environment using a single-threaded event loop.")),Object(i.b)("p",null,"Let's break it down..."),Object(i.b)("h4",{id:"open-source"},"Open Source"),Object(i.b)("p",null,"All of the code is available to you to view on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/nodejs/node"}),"Github"),"! Anyone can contribute-- this democratizes the development process!"),Object(i.b)("h4",{id:"cross-platform-javascript-runtime-environment"},"Cross Platform JavaScript Runtime Environment"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Historically you were only able to run JavaScript on the browser or client"),Object(i.b)("li",{parentName:"ul"},"Node.js takes the V8 Javascript engine powering Google Chrome outside of the browser allowing you to run Node.js ",Object(i.b)("strong",{parentName:"li"},"anywhere"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"V8 Javascript engine is a fast Javascript engine created by Google. Learn more about it ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://v8.dev/"}),"here"),"!"))),Object(i.b)("li",{parentName:"ul"},"Can run Node.js on your terminal as well"),Object(i.b)("li",{parentName:"ul"},"Now, we can use Javascript as a ",Object(i.b)("strong",{parentName:"li"},"universal language"),"!")),Object(i.b)("h4",{id:"single-threaded"},"Single-threaded"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Threads allow computers to divide up tasks on different cores (multi-tasking)"),Object(i.b)("li",{parentName:"ul"},"Node.js uses a single-threaded event loop",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Run in a single process"),Object(i.b)("li",{parentName:"ul"},"Requests do not spawn new threads"))),Object(i.b)("li",{parentName:"ul"},"Non-blocking")),Object(i.b)("h4",{id:"how-does-nodejs-handle-multiple-requests"},"How does Node.js handle multiple requests?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Node.js is ",Object(i.b)("strong",{parentName:"li"},"asynchronous")),Object(i.b)("li",{parentName:"ul"},"When a request is sent, it is dispatched to server"),Object(i.b)("li",{parentName:"ul"},"Instead of blocking the thread and wasting CPU cycles waiting for the request to finish, Node.js continues its operations"),Object(i.b)("li",{parentName:"ul"},"Once the request is complete, a callback is triggered and information is sent back")),Object(i.b)("h4",{id:"event-loop"},"Event Loop"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Client can send requests into the event loop"),Object(i.b)("li",{parentName:"ul"},"Register callback to server when doing things that might take time (ie. search, query, intensive computation)"),Object(i.b)("li",{parentName:"ul"},"After operation completes, callback will fire and return to requests")),Object(i.b)("h4",{id:"why-nodejs"},"Why Node.js?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Unites front-end and back-end in one language/framework",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Typescript/Javascript"),Object(i.b)("li",{parentName:"ul"},"Front-end and Back-end in the same language"))),Object(i.b)("li",{parentName:"ul"},"Extremely performant"),Object(i.b)("li",{parentName:"ul"},"Asynchronous and non-blocking"),Object(i.b)("li",{parentName:"ul"},"NPM (node package manager)",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"a directory of many libraries and packages"),Object(i.b)("li",{parentName:"ul"},"access to huge libraries to use in projects and build upon")))),Object(i.b)("h4",{id:"node-package-manager-npm"},"Node Package Manager (NPM)"),Object(i.b)("p",null,"NPM is a dependency manager, like pip for python or maven for java. Think of node packages as recipes made by other people you want to use in your site.\nAlso part of the open sourced community!"),Object(i.b)("h4",{id:"packagejson"},"package.json"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Tracks which node packages you use"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Dependencies"),": packages needed at run-time")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install --save <pkg>\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"devDependencies"),": packages used during development (before pushing to production)")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install --save-dev <pkg>\n")),Object(i.b)("h4",{id:"we-will-use-yarn"},"We will use Yarn!"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"package-lock.json and yarn.lock prevent issues where a broken version of one package causes all dependent packages to break"),Object(i.b)("li",{parentName:"ul"},"Faster at installing dependencies"),Object(i.b)("li",{parentName:"ul"},"More optimized")),Object(i.b)("h4",{id:"npm-vs-yarn-commands"},"NPM vs Yarn commands"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"NPM")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"npm init\nnpm install <pkg_name>\nnpm uninstall <pkg_name>\nnpm update <pkg_name>\nnpm audit\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Yarn")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn init\nyarn add <pkg_name>\nyarn remove\nyarn upgrade\nyarn audit\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Very similar"),Object(i.b)("li",{parentName:"ul"},"Audit: checks for vulnerabilities in dependencies")),Object(i.b)("h2",{id:"express"},"Express"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Intro to ",Object(i.b)("strong",{parentName:"em"},"backend routes"))),Object(i.b)("h3",{id:"http-methods"},"HTTP Methods"),Object(i.b)("p",null,"When you want to visit a website in your browser, you send a request to the server asking for information."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Types",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"POST"),Object(i.b)("li",{parentName:"ul"},"GET"),Object(i.b)("li",{parentName:"ul"},"PUT"),Object(i.b)("li",{parentName:"ul"},"DELETE"),Object(i.b)("li",{parentName:"ul"},"PATCH"),Object(i.b)("li",{parentName:"ul"},"(... and more)"))),Object(i.b)("li",{parentName:"ul"},"Definitions",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"POST"),": used to submit an entity to the specified resource, often causing a change in state or side effects on server"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"GET"),": requests a representation of the specified resource",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Should only ",Object(i.b)("em",{parentName:"li"},"retrieve")," data"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"PUT"),": similar to POST request (uploads data), but ",Object(i.b)("em",{parentName:"li"},"idempotently"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"updates data"),Object(i.b)("li",{parentName:"ul"},"ie. editing a Facebook post")))))),Object(i.b)("h3",{id:"express-1"},"Express"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Very popular, lightweight NPM package used as a middle layer for routing HTTP requests"),Object(i.b)("li",{parentName:"ul"},"Middleware that acts as interface between client and server to make it more dynamic")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const express = require('express');\nconst app = express();\n\n// respond with \"hello world\" when a GET request is made to\n// the homepage (root of website)\napp.get('/', function (req, res) {\n  res.send('hello world');\n});\napp.listen(8080, function () {\n  console.log('Listening on port 8080');\n});\n")),Object(i.b)("h3",{id:"responding-to-requests"},"Responding to Requests"),Object(i.b)("p",null,"One of the first tasks when building a website is responding to the requests that come from the browser. In this lecture, we will be building a basic Node app using Express to interpret requests and respond to them."),Object(i.b)("p",null,"Route definition takes the following structure:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"app.METHOD(PATH, HANDLER);\n")),Object(i.b)("p",null,"Where:\n",Object(i.b)("strong",{parentName:"p"},"app")," is an instance of express.\n",Object(i.b)("strong",{parentName:"p"},"METHOD")," is an HTTP request method, in lowercase.\n",Object(i.b)("strong",{parentName:"p"},"PATH")," is a path on the server.\n",Object(i.b)("strong",{parentName:"p"},"HANDLER")," is the function executed when the route is matched."),Object(i.b)("p",null,"The following code sends \u201chello world\u201d as a result of a GET request to \u2018/' endpoint."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const express = require('express');\nconst app = express();\n\n// respond with \"hello world\" when a GET request is made to the homepage\napp.get('/', function (req, res) {\n  res.send('hello world');\n});\n")),Object(i.b)("h4",{id:"route-parameters-and-query-parameters"},"Route Parameters and Query Parameters"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"/route/some-param")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"typically used to identify a ",Object(i.b)("strong",{parentName:"li"},"specific")," resource")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"/route?param=value")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"typically used to ",Object(i.b)("strong",{parentName:"li"},"sort/filter")," through resources")),Object(i.b)("h4",{id:"route-parameters-in-express"},"Route Parameters in Express"),Object(i.b)("p",null,"Take a look at this route, paying special attention to the ",Object(i.b)("inlineCode",{parentName:"p"},":")," characters. Those denote parameters in the route."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"app.get('/users/:userId/books/:bookId', function (req, res) {\n  res.send(req.params);\n});\n")),Object(i.b)("p",null,"For example, if you navigate to the page ",Object(i.b)("inlineCode",{parentName:"p"},"/users/34/books/12973"),", you would now be able to use those IDs in your code. ",Object(i.b)("inlineCode",{parentName:"p"},"req.params.userId")," would now equal ",Object(i.b)("inlineCode",{parentName:"p"},"34")," and ",Object(i.b)("inlineCode",{parentName:"p"},"req.params.bookId")," would now equal ",Object(i.b)("inlineCode",{parentName:"p"},"12973"),". This allows you to respond differently depending on IDs passed to you by the front end."),Object(i.b)("p",null,"In the following code snippet we use ",Object(i.b)("inlineCode",{parentName:"p"},"app.get()")," to query a messages endpoint and we want to get a specific message. We call this query parameter ",Object(i.b)("inlineCode",{parentName:"p"},"messageId")," and can use it in the function we pass to ",Object(i.b)("inlineCode",{parentName:"p"},"app.get()")," to return that message."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const messages = {...}\napp.get('/messages/:messageId', (req, res) => {\n // messages is an object with an array of message types, with each ID corresponding to its index\n return res.send(messages[req.params.messageId]);\n});\n")),Object(i.b)("h4",{id:"query-parameters-in-express"},"Query Parameters in Express"),Object(i.b)("p",null,"We can also send information in a request through query parameters."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"app.get('/users/', function (req, res) {\n  res.send(req.query.id);\n});\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Example request:\n",Object(i.b)("inlineCode",{parentName:"li"},"/users?id=samwise"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"req.query.id"),' will be set to "samwise"')))),Object(i.b)("h4",{id:"multiple-query-parameters"},"Multiple Query Parameters"),Object(i.b)("p",null,"We can define multiple query parameters"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"app.get('/products', function (req, res) {\n  const name = req.query['name'];\n  const maxPriceFilter = req.query['max-price'];\n  // do some computation on the backend based on this data\n});\n")),Object(i.b)("p",null,"Notice we can treat queries like objects (ie. the ",Object(i.b)("inlineCode",{parentName:"p"},"req.query['name']")," syntax)."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Example request: ",Object(i.b)("inlineCode",{parentName:"li"},"/products?name=apples&max-price=10"))),Object(i.b)("h2",{id:"how-to-set-up-a-node-project"},"How to set up a Node Project"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn init\nyarn add <package name>\n")),Object(i.b)("h3",{id:"initializing-a-node-project"},"Initializing a Node project"),Object(i.b)("p",null,"Let's dive deeper into what happens when you setup a Node project using Yarn."),Object(i.b)("p",null,"Navigate to an empty folder where you want your project to be located. I will assume this folder is called ",Object(i.b)("inlineCode",{parentName:"p"},"helloworld"),"."),Object(i.b)("p",null,"Run ",Object(i.b)("inlineCode",{parentName:"p"},"yarn init")," in this folder on the terminal. (Use ",Object(i.b)("inlineCode",{parentName:"p"},"cd")," to navigate to you ",Object(i.b)("inlineCode",{parentName:"p"},"helloworld")," folder in terminal)"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Note that we are using ",Object(i.b)("inlineCode",{parentName:"p"},"yarn init")," rather than ",Object(i.b)("inlineCode",{parentName:"p"},"npm init"),". We will be using Yarn as our\nNode package manager in its class (this is used in production at many companies like Facebook!), and its corresponding commands for installing packages as well."))),Object(i.b)("p",null,"Upon running ",Object(i.b)("inlineCode",{parentName:"p"},"yarn init"),", and answering the questions as seen in the previous lecture, we now need to add our dependencies for the project and scripts to start it."),Object(i.b)("h3",{id:"installing-dependencies"},"Installing Dependencies"),Object(i.b)("p",null,"Node projects don't come with every possible dependency right out of the box. We\nwill add these with Yarn by using ",Object(i.b)("inlineCode",{parentName:"p"},"yarn add <pkg_name>")," (which is the equivalent\nof ",Object(i.b)("inlineCode",{parentName:"p"},"npm install <pkg_name> --save"),", but remember we are using Yarn.)"),Object(i.b)("p",null,"Every time you add a dependency with ",Object(i.b)("inlineCode",{parentName:"p"},"yarn add <pkg_name>"),", ",Object(i.b)("inlineCode",{parentName:"p"},"<pkg_name>")," will be added to your dependencies in ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," if it can be found. It will also be added to ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules/"),"."),Object(i.b)("p",null,"Take a look inside your ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," folder. This is where all your packages will be installed. Notice that even though you just installed one package, multiple packages are in ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),". This is because ",Object(i.b)("inlineCode",{parentName:"p"},"express")," itself has several of its own dependencies that also got installed."),Object(i.b)("p",null,"You can find more packages to use on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/"}),"npmjs.com"),"."),Object(i.b)("h3",{id:"dont-submit-node_modules"},Object(i.b)("strong",{parentName:"h3"},"Don't Submit ",Object(i.b)("inlineCode",{parentName:"strong"},"node_modules"),"!!")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," can potentially hundreds of megabytes of data on packages you installed. It is important to never submit this with your assignment or push it up to any remote repositories such as GitHub. Before submitting an assignment, remember to remove ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," from the folder, then zip it and submit the zip file. ",Object(i.b)("em",{parentName:"p"},"You will be penalized if ",Object(i.b)("inlineCode",{parentName:"em"},"node_modules")," is submitted"),". Don't worry, we will be able to recover your dependencies simply by running ",Object(i.b)("inlineCode",{parentName:"p"},"yarn install"),"."),Object(i.b)("h3",{id:"how-to-use-and-interpret-packagejson"},"How to use and interpret package.json"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"package.json")," contains instructions for necessary packages and scripts that you can use to run your code."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Dependencies",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Packages we use in code"),Object(i.b)("li",{parentName:"ul"},"if not installed on local end, this will cause an error"),Object(i.b)("li",{parentName:"ul"},"ie. express, ts-node, typescript"))),Object(i.b)("li",{parentName:"ul"},"devDependencies",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Toolkits used during development to make development easier"),Object(i.b)("li",{parentName:"ul"},"ie. types, autocompletion")))),Object(i.b)("h2",{id:"live-coding-demo"},"Live Coding Demo"),Object(i.b)("p",null,"We demoed how to set up a yarn project and create some basic getter HTTP routes."),Object(i.b)("p",null,"Set up a yarn project by running ",Object(i.b)("inlineCode",{parentName:"p"},"yarn init"),". It will ask you a few questions and you can press return to accept all the defaults:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn init v1.22.5\nquestion name (lecture2):\nquestion version (1.0.0):\nquestion description:\nquestion entry point (index.ts):\nquestion repository url:\nquestion author:\nquestion license (MIT):\nquestion private:\nsuccess Saved package.json\n\u2728  Done in 37.88s.\n")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You can also use ",Object(i.b)("inlineCode",{parentName:"p"},"yarn init -y")," to set up a project with all the default values!"))),Object(i.b)("p",null,"This will generate a ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," file with all the inputs you provided."),Object(i.b)("p",null,"We also want to add several dependencies starting with ",Object(i.b)("inlineCode",{parentName:"p"},"express"),". Add express with ",Object(i.b)("inlineCode",{parentName:"p"},"yarn add express"),". Since we are also using TypeScript we want to install the ",Object(i.b)("inlineCode",{parentName:"p"},"typescript")," and ",Object(i.b)("inlineCode",{parentName:"p"},"ts-node")," packages as well using ",Object(i.b)("inlineCode",{parentName:"p"},"yarn add typescript ts-node"),". Finally to get some nice autocompletion features, we want to install ",Object(i.b)("inlineCode",{parentName:"p"},"@types/node")," and ",Object(i.b)("inlineCode",{parentName:"p"},"@types/express")," as ",Object(i.b)("em",{parentName:"p"},"devDependencies")," using ",Object(i.b)("inlineCode",{parentName:"p"},"yarn add -D @types/node @types/express"),"."),Object(i.b)("p",null,"Your ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," should now look like the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="package.json"',title:'"package.json"'}),'{\n  "name": "lecture2",\n  "version": "1.0.0",\n  "main": "index.ts",\n  "license": "MIT",\n  "dependencies": {\n    "express": "^4.17.1",\n    "ts-node": "^9.1.1",\n    "typescript": "^4.2.2"\n  },\n  "devDependencies": {\n    "@types/express": "^4.17.11",\n    "@types/node": "^14.14.31"\n  }\n}\n')),Object(i.b)("p",null,"Now we can define some basic express routes in a file ",Object(i.b)("inlineCode",{parentName:"p"},"index.ts"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'}),"import * as express from 'express';\n\nconst app = express();\n\napp.get('/home', function (req, res) {\n  res.send('Welcome home!');\n});\n\n// example using path parameters\napp.get('/users/:name/:lname', function (req, res) {\n  res.send('Hello ' + req.params.name + ' ' + req.params.lname);\n});\n\n// example using query parameters\napp.get('/users', function (req, res) {\n  res.send('Hello ' + req.query.name + ' ' + req.query.lname);\n});\n\n// tell express to listen for requests on port 8080\napp.listen(8080, function () {\n  console.log('server started');\n});\n")),Object(i.b)("p",null,"Add the following to your ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'// other package.json properties...\n"scripts": {\n  "start": "ts-node index.ts"\n')),Object(i.b)("p",null,"Now when you go to ",Object(i.b)("inlineCode",{parentName:"p"},"localhost:8080/home")," you should see ",Object(i.b)("inlineCode",{parentName:"p"},"Welcome home!"),". At ",Object(i.b)("inlineCode",{parentName:"p"},"localhost:8080/users/<your_name>/<your_last_name>")," or ",Object(i.b)("inlineCode",{parentName:"p"},"localhost:8080/users/?name=<your_name>&lname=<your_last_name>")," you should see ",Object(i.b)("inlineCode",{parentName:"p"},"Hello <your_name> <your_last_name>"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"This was Node.js (and Express)!")))}p.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);