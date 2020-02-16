(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(9),s=(n(0),n(146)),o={id:"lecture1",title:"Lecture 1"},i={id:"lecture1",title:"Lecture 1",description:"[Lecture Slides](https://docs.google.com/presentation/d/1hkIoGdaiNgzZwTkAWp3VW5ufsQaVeGzN7eHmULhyWpI/edit?usp=sharing)",source:"@site/docs/lecture1.md",permalink:"/docs/lecture1",sidebar:"docs",previous:{title:"Setup your editor",permalink:"/docs/setup-editor"},next:{title:"Lecture 2",permalink:"/docs/lecture2"}},c=[{value:"That didn't answer my question.",id:"that-didnt-answer-my-question",children:[]},{value:"POST methods",id:"post-methods",children:[]},{value:"Regular Expressions",id:"regular-expressions",children:[]},{value:"Parameterized Routes",id:"parameterized-routes",children:[]}],p={rightToc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.google.com/presentation/d/1hkIoGdaiNgzZwTkAWp3VW5ufsQaVeGzN7eHmULhyWpI/edit?usp=sharing"}),"Lecture Slides")),Object(s.b)("p",null,Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ashneeldas2/trends-sp20/tree/master/Assignments/a1"}),"Assignment 1")," due ",Object(s.b)("strong",{parentName:"p"},"2/19 7:59pm")),Object(s.b)("h1",{id:"introduction-to-http-methods"},"Introduction to HTTP Methods"),Object(s.b)("p",null,"When you want to visit a website in your browser, you send a request to the server asking for information. These requests have different types including POST, GET, PUT, PATCH, and DELETE. We'll primarily be concerning ourselves POST and GET. Here are MDN's definitions:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"GET - The GET method requests a representation of the specified resource. Requests using GET should only retrieve data."),Object(s.b)("li",{parentName:"ul"},"POST - The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.")),Object(s.b)("p",null,"You can see more details as well as the rest of the methods at the ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"}),"official site"),"."),Object(s.b)("h1",{id:"what-is-node"},"What is Node?"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Node.js\xae is a JavaScript runtime built on Chrome's V8 JavaScript engine.\nNode.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.")),Object(s.b)("h2",{id:"that-didnt-answer-my-question"},"That didn't answer my question."),Object(s.b)("p",null,"Node is a program that will interpret your Javascript and is commonly used for web servers."),Object(s.b)("p",null,"Node serves as a way to unify the frontend and the backend in one language/framework. On the frontend we have many JavaScript libraries like React, Angular, Vue and on the backend we have Express, Koa, Happi."),Object(s.b)("h1",{id:"responding-to-requests"},"Responding to Requests"),Object(s.b)("p",null,"One of the first tasks when building a website is responding to the requests that come from the browser. In this lecture, we will be building a basic Node app using Express to interpret requests and respond to them."),Object(s.b)("p",null,"Route definition takes the following structure:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"app.METHOD(PATH, HANDLER);\n")),Object(s.b)("p",null,"Where:\napp is an instance of express.\nMETHOD is an HTTP request method, in lowercase.\nPATH is a path on the server.\nHANDLER is the function executed when the route is matched.\nThe following code sends \u201chello world\u201d as a result of a GET request to \u2018/' endpoint."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const express = require('express');\nconst app = express();\n\n// respond with \"hello world\" when a GET request is made to the homepage\napp.get('/', function(req, res) {\n  res.send('hello world');\n});\n")),Object(s.b)("h1",{id:"custom-urls"},"Custom URLs"),Object(s.b)("p",null,"We can respond differently for requests to different URLs. For example, if we wanted \u2018/home' to respond with \u201cWelcome Home!\u201d we could add a second route."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"app.get('/home', function(req, res) {\n  res.send('Welcome Home!');\n});\n")),Object(s.b)("p",null,"Both of these blocks of code respond to GET requests, because we are using Express's ",Object(s.b)("inlineCode",{parentName:"p"},"app.get()")," function. We tell express what route we want to trigger the response and give it a function that should be run to respond."),Object(s.b)("p",null,Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://expressjs.com/en/starter/basic-routing.html"}),"https://expressjs.com/en/starter/basic-routing.html")),Object(s.b)("h2",{id:"post-methods"},"POST methods"),Object(s.b)("p",null,"POST method is generally used to submit data to an endpoint."),Object(s.b)("p",null,"The following uses Express's ",Object(s.b)("inlineCode",{parentName:"p"},"app.post()")," method to send a POST request to \u2018/' and responds with \u2018Got a POST request'. Notice that ",Object(s.b)("inlineCode",{parentName:"p"},"app.post()")," has a second argument that is a function with two parameters, ",Object(s.b)("inlineCode",{parentName:"p"},"req")," and ",Object(s.b)("inlineCode",{parentName:"p"},"res"),". Usually, when you call POST you want to send data with the request. You would send that data as the ",Object(s.b)("inlineCode",{parentName:"p"},"req")," parameter."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"app.post('/', function(req, res) {\n  res.send('Got a POST request');\n});\n")),Object(s.b)("h2",{id:"regular-expressions"},"Regular Expressions"),Object(s.b)("p",null,"You can match patterns in text rather than specific characters. For example, what if you want to return the same page for all URLs of ",Object(s.b)("inlineCode",{parentName:"p"},"/users/[SOME NUMBER]"),"? We can use regular expressions so that the route will be used for any value. We can use the route string ",Object(s.b)("inlineCode",{parentName:"p"},"/users/\\d+")," to match any number. Regular expressions are outside the scope of this class, but you may find more information in the references below."),Object(s.b)("h2",{id:"parameterized-routes"},"Parameterized Routes"),Object(s.b)("p",null,"Take a look at this route, paying special attention to the ",Object(s.b)("inlineCode",{parentName:"p"},":")," characters. Those denote parameters in the route."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"app.get('/users/:userId/books/:bookId', function(req, res) {\n  res.send(req.params);\n});\n")),Object(s.b)("p",null,"For example, if you navigate to the page ",Object(s.b)("inlineCode",{parentName:"p"},"/users/34/books/12973"),", you would now be able to use those IDs in your code. ",Object(s.b)("inlineCode",{parentName:"p"},"req.params.userId")," would now equal ",Object(s.b)("inlineCode",{parentName:"p"},"34")," and ",Object(s.b)("inlineCode",{parentName:"p"},"req.params.bookId")," would now equal ",Object(s.b)("inlineCode",{parentName:"p"},"12973"),". This allows you to respond differently depending on IDs passed to you by the front end."),Object(s.b)("p",null,"In the following code snippet we use ",Object(s.b)("inlineCode",{parentName:"p"},"app.get()")," to query a messages endpoint and we want to get a specific message. We call this query parameter ",Object(s.b)("inlineCode",{parentName:"p"},"messageId")," and can use it in the function we pass to ",Object(s.b)("inlineCode",{parentName:"p"},"app.get()")," to return that message."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const messages = {...}\napp.get('/messages/:messageId', (req, res) => {\n return res.send(messages[req.params.messageId]);\n});\n")),Object(s.b)("h1",{id:"references"},"References"),Object(s.b)("p",null,"Don't know where to start? Check out ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://expressjs.com/en/starter/installing.html"}),"Express's official getting started page"),". The rest of the pages have great content and will help you along your journey."),Object(s.b)("p",null,"For a more in-depth exploration of this topic, check out ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.robinwieruch.de/node-express-server-rest-api"}),"this tutorial"),"."),Object(s.b)("p",null,Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://expressjs.com/en/guide/routing.html"}),"This")," is a useful tool to test your Express regular expressions to make sure that the routes match what you expect."),Object(s.b)("p",null,"For an interactive way to learn regular expressions, ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://regexone.com/"}),"consider this site"),"."))}l.isMDXComponent=!0},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,h=u["".concat(o,".").concat(b)]||u[b]||d[b]||s;return n?a.a.createElement(h,i({ref:t},p,{components:n})):a.a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);