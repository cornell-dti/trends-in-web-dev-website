"use strict";(self.webpackChunktrends_in_web_dev_website=self.webpackChunktrends_in_web_dev_website||[]).push([[4289],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6470:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),o=["components"],i={id:"lecture1",title:"Lecture 1"},l=void 0,p={unversionedId:"lecture1",id:"version-2020fa/lecture1",isDocsHomePage:!1,title:"Lecture 1",description:"Lecture Video",source:"@site/versioned_docs/version-2020fa/lecture1.md",sourceDirName:".",slug:"/lecture1",permalink:"/docs/2020fa/lecture1",tags:[],version:"2020fa",frontMatter:{id:"lecture1",title:"Lecture 1"},sidebar:"version-2020fa/docs",previous:{title:"Lecture 0",permalink:"/docs/2020fa/lecture0"},next:{title:"Lecture 2",permalink:"/docs/2020fa/lecture2"}},u=[{value:"Introduction to HTTP Methods",id:"introduction-to-http-methods",children:[],level:2},{value:"What is Node?",id:"what-is-node",children:[{value:"That didn&#39;t answer my question.",id:"that-didnt-answer-my-question",children:[],level:3}],level:2},{value:"Responding to Requests",id:"responding-to-requests",children:[],level:2},{value:"Custom URLs",id:"custom-urls",children:[{value:"POST methods",id:"post-methods",children:[],level:3},{value:"Regular Expressions",id:"regular-expressions",children:[],level:3},{value:"Parameterized Routes",id:"parameterized-routes",children:[],level:3}],level:2},{value:"References",id:"references",children:[],level:2},{value:"Coding Demo",id:"coding-demo",children:[],level:2}],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1SqAVtowEq0ZdieRYVK3-FdEUMgSWc20K/view?usp=sharing"},"Lecture Video")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1a3qkQruToLPrxLdNk06f30XIVgMavLr8n5KQah_7YRY/edit?usp=sharing"},"Lecture Slides")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/2020fa/assignment1"},"Assignment 1")," due ",(0,s.kt)("strong",{parentName:"p"},"10/2 11:59pm")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Join the ",(0,s.kt)("a",{parentName:"strong",href:"https://piazza.com/cornell/fall2020/info1998section604"},"Piazza"),"!")),(0,s.kt)("h2",{id:"introduction-to-http-methods"},"Introduction to HTTP Methods"),(0,s.kt)("p",null,"When you want to visit a website in your browser, you send a request to the server asking for information. These requests have different types including POST, GET, PUT, PATCH, and DELETE. We'll primarily be concerning ourselves POST and GET. Here are MDN's definitions:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"GET - The GET method requests a representation of the specified resource. Requests using GET should only retrieve data."),(0,s.kt)("li",{parentName:"ul"},"POST - The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.")),(0,s.kt)("p",null,"You can see more details as well as the rest of the methods at the ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"},"official site"),"."),(0,s.kt)("h2",{id:"what-is-node"},"What is Node?"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Node.js\xae is a JavaScript runtime built on Chrome's V8 JavaScript engine.\nNode.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.")),(0,s.kt)("h3",{id:"that-didnt-answer-my-question"},"That didn't answer my question."),(0,s.kt)("p",null,"Node is a program that will interpret your Javascript and is commonly used for web servers."),(0,s.kt)("p",null,"Node serves as a way to unify the frontend and the backend in one language/framework. On the frontend we have many JavaScript libraries like React, Angular, Vue and on the backend we have Express, Koa, Happi."),(0,s.kt)("h2",{id:"responding-to-requests"},"Responding to Requests"),(0,s.kt)("p",null,"One of the first tasks when building a website is responding to the requests that come from the browser. In this lecture, we will be building a basic Node app using Express to interpret requests and respond to them."),(0,s.kt)("p",null,"Route definition takes the following structure:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"app.METHOD(PATH, HANDLER);\n")),(0,s.kt)("p",null,"Where:\napp is an instance of express.\nMETHOD is an HTTP request method, in lowercase.\nPATH is a path on the server.\nHANDLER is the function executed when the route is matched.\nThe following code sends \u201chello world\u201d as a result of a GET request to \u2018/' endpoint."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const express = require('express');\nconst app = express();\n\n// respond with \"hello world\" when a GET request is made to the homepage\napp.get('/', function (req, res) {\n  res.send('hello world');\n});\n")),(0,s.kt)("h2",{id:"custom-urls"},"Custom URLs"),(0,s.kt)("p",null,"We can respond differently for requests to different URLs. For example, if we wanted \u2018/home' to respond with \u201cWelcome Home!\u201d we could add a second route."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"app.get('/home', function (req, res) {\n  res.send('Welcome Home!');\n});\n")),(0,s.kt)("p",null,"Both of these blocks of code respond to GET requests, because we are using Express's ",(0,s.kt)("inlineCode",{parentName:"p"},"app.get()")," function. We tell express what route we want to trigger the response and give it a function that should be run to respond."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://expressjs.com/en/starter/basic-routing.html"},"https://expressjs.com/en/starter/basic-routing.html")),(0,s.kt)("h3",{id:"post-methods"},"POST methods"),(0,s.kt)("p",null,"POST method is generally used to submit data to an endpoint."),(0,s.kt)("p",null,"The following uses Express's ",(0,s.kt)("inlineCode",{parentName:"p"},"app.post()")," method to send a POST request to \u2018/' and responds with \u2018Got a POST request'. Notice that ",(0,s.kt)("inlineCode",{parentName:"p"},"app.post()")," has a second argument that is a function with two parameters, ",(0,s.kt)("inlineCode",{parentName:"p"},"req")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"res"),". Usually, when you call POST you want to send data with the request. You would send that data as the ",(0,s.kt)("inlineCode",{parentName:"p"},"req")," parameter."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"app.post('/', function (req, res) {\n  res.send('Got a POST request');\n});\n")),(0,s.kt)("h3",{id:"regular-expressions"},"Regular Expressions"),(0,s.kt)("p",null,"You can match patterns in text rather than specific characters. For example, what if you want to return the same page for all URLs of ",(0,s.kt)("inlineCode",{parentName:"p"},"/users/[SOME NUMBER]"),"? We can use regular expressions so that the route will be used for any value. We can use the route string ",(0,s.kt)("inlineCode",{parentName:"p"},"/users/\\d+")," to match any number. Regular expressions are outside the scope of this class, but you may find more information in the references below."),(0,s.kt)("h3",{id:"parameterized-routes"},"Parameterized Routes"),(0,s.kt)("p",null,"Take a look at this route, paying special attention to the ",(0,s.kt)("inlineCode",{parentName:"p"},":")," characters. Those denote parameters in the route."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"app.get('/users/:userId/books/:bookId', function (req, res) {\n  res.send(req.params);\n});\n")),(0,s.kt)("p",null,"For example, if you navigate to the page ",(0,s.kt)("inlineCode",{parentName:"p"},"/users/34/books/12973"),", you would now be able to use those IDs in your code. ",(0,s.kt)("inlineCode",{parentName:"p"},"req.params.userId")," would now equal ",(0,s.kt)("inlineCode",{parentName:"p"},"34")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"req.params.bookId")," would now equal ",(0,s.kt)("inlineCode",{parentName:"p"},"12973"),". This allows you to respond differently depending on IDs passed to you by the front end."),(0,s.kt)("p",null,"In the following code snippet we use ",(0,s.kt)("inlineCode",{parentName:"p"},"app.get()")," to query a messages endpoint and we want to get a specific message. We call this query parameter ",(0,s.kt)("inlineCode",{parentName:"p"},"messageId")," and can use it in the function we pass to ",(0,s.kt)("inlineCode",{parentName:"p"},"app.get()")," to return that message."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const messages = {...}\napp.get('/messages/:messageId', (req, res) => {\n return res.send(messages[req.params.messageId]);\n});\n")),(0,s.kt)("h2",{id:"references"},"References"),(0,s.kt)("p",null,"Don't know where to start? Check out ",(0,s.kt)("a",{parentName:"p",href:"https://expressjs.com/en/starter/installing.html"},"Express's official getting started page"),". The rest of the pages have great content and will help you along your journey."),(0,s.kt)("p",null,"For a more in-depth exploration of this topic, check out ",(0,s.kt)("a",{parentName:"p",href:"https://www.robinwieruch.de/node-express-server-rest-api"},"this tutorial"),"."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"http://forbeslindesay.github.io/express-route-tester/"},"This")," is a useful tool to test your Express regular expressions to make sure that the routes match what you expect."),(0,s.kt)("p",null,"For an interactive way to learn regular expressions, ",(0,s.kt)("a",{parentName:"p",href:"https://regexone.com/"},"consider this site"),"."),(0,s.kt)("h2",{id:"coding-demo"},"Coding Demo"),(0,s.kt)("p",null,"We demoed how to set up a yarn project and create some basic getter HTTP routes."),(0,s.kt)("p",null,"Set up a yarn project by running ",(0,s.kt)("inlineCode",{parentName:"p"},"yarn init"),". It will ask you a few questions and you can press return to accept all the defaults:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn init v1.22.5\nquestion name (lec1code):\nquestion version (1.0.0):\nquestion description:\nquestion entry point (index.js):\nquestion repository url:\nquestion author:\nquestion license (MIT):\nquestion private:\nsuccess Saved package.json\n\u2728  Done in 37.88s.\n")),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"You can also use ",(0,s.kt)("inlineCode",{parentName:"p"},"yarn init -y")," to set up a project with all the default values!"))),(0,s.kt)("p",null,"This will generate a ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json")," file with all the inputs you provided."),(0,s.kt)("p",null,"We also want to add several dependencies starting with ",(0,s.kt)("inlineCode",{parentName:"p"},"express"),". Add express with ",(0,s.kt)("inlineCode",{parentName:"p"},"yarn add express"),". Since we are also using TypeScript we want to install the ",(0,s.kt)("inlineCode",{parentName:"p"},"typescript")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-node")," packages as well using ",(0,s.kt)("inlineCode",{parentName:"p"},"yarn add typescript ts-node"),". Finally to get some nice autocompletion features, we want to install ",(0,s.kt)("inlineCode",{parentName:"p"},"@types/node")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"@types/express")," as ",(0,s.kt)("em",{parentName:"p"},"devDependencies")," using ",(0,s.kt)("inlineCode",{parentName:"p"},"yarn add -D @types/node @types/express"),"."),(0,s.kt)("p",null,"Your ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json")," should now look like the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "name": "lec1code",\n  "version": "1.0.0",\n  "main": "index.js",\n  "license": "MIT",\n  "dependencies": {\n    "express": "^4.17.1",\n    "ts-node": "^9.0.0",\n    "typescript": "^4.0.3"\n  },\n  "devDependencies": {\n    "@types/express": "^4.17.8",\n    "@types/node": "^14.11.2"\n  }\n}\n')),(0,s.kt)("p",null,"Now we can define some basic express routes in a file ",(0,s.kt)("inlineCode",{parentName:"p"},"index.ts"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'},"import * as express from 'express';\n\nconst app = express();\n\napp.get('/home', function (req, res) {\n  res.send('Welcome home!');\n});\n\n// example using path parameters\napp.get('/users/:name/:lname', function (req, res) {\n  res.send('Hello ' + req.params.name + ' ' + req.params.lname);\n});\n\n// example using query parameters\napp.get('/users', function (req, res) {\n  res.send('Hello ' + req.query.name + ' ' + req.query.lname);\n});\n\n// tell express to listen for requests on port 8080\napp.listen(8080, function () {\n  console.log('server started');\n});\n")),(0,s.kt)("p",null,"Add the following to your ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'// other package.json properties...\n"scripts": {\n  "start": "ts-node index.ts"\n},\n')),(0,s.kt)("p",null,"This will allow you to run ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-node")," without having it installed globally (which is bad practice). Now you can run the app with ",(0,s.kt)("inlineCode",{parentName:"p"},"yarn start"),"."),(0,s.kt)("p",null,"Now when you go to ",(0,s.kt)("inlineCode",{parentName:"p"},"localhost:8080/home")," you should see ",(0,s.kt)("inlineCode",{parentName:"p"},"Welcome home!"),". At ",(0,s.kt)("inlineCode",{parentName:"p"},"localhost:8080/users/<your_name>/<your_last_name>")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"localhost:8080/users/?name=<your_name>&lname=<your_last_name>")," you should see ",(0,s.kt)("inlineCode",{parentName:"p"},"Hello <your_name> <your_last_name>"),"."))}c.isMDXComponent=!0}}]);