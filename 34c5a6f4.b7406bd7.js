(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{107:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(0),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(a),h=n,m=d["".concat(o,".").concat(h)]||d[h]||u[h]||s;return a?r.a.createElement(m,i(i({ref:t},p),{},{components:a})):r.a.createElement(m,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},79:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),s=(a(0),a(107)),o={id:"lecture1",title:"Lecture 1"},i={unversionedId:"lecture1",id:"version-2020sp/lecture1",isDocsHomePage:!1,title:"Lecture 1",description:"Lecture Slides",source:"@site/versioned_docs/version-2020sp/lecture1.md",slug:"/lecture1",permalink:"/docs/2020sp/lecture1",version:"2020sp",sidebar:"version-2020sp/docs",next:{title:"Lecture 2",permalink:"/docs/2020sp/lecture2"}},c=[{value:"Introduction to HTTP Methods",id:"introduction-to-http-methods",children:[]},{value:"What is Node?",id:"what-is-node",children:[{value:"That didn&#39;t answer my question.",id:"that-didnt-answer-my-question",children:[]}]},{value:"Responding to Requests",id:"responding-to-requests",children:[]},{value:"Custom URLs",id:"custom-urls",children:[{value:"POST methods",id:"post-methods",children:[]},{value:"Regular Expressions",id:"regular-expressions",children:[]},{value:"Parameterized Routes",id:"parameterized-routes",children:[]}]},{value:"References",id:"references",children:[]}],p={rightToc:c};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.a)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(s.a)("p",null,Object(s.a)("a",Object(n.a)({parentName:"p"},{href:"https://docs.google.com/presentation/d/1hkIoGdaiNgzZwTkAWp3VW5ufsQaVeGzN7eHmULhyWpI/edit?usp=sharing"}),"Lecture Slides")),Object(s.a)("p",null,Object(s.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ashneeldas2/trends-sp20/tree/master/Assignments/a1"}),"Assignment 1")," due ",Object(s.a)("strong",{parentName:"p"},"2/21 (extended the due date!) 7:59pm")),Object(s.a)("h2",{id:"introduction-to-http-methods"},"Introduction to HTTP Methods"),Object(s.a)("p",null,"When you want to visit a website in your browser, you send a request to the server asking for information. These requests have different types including POST, GET, PUT, PATCH, and DELETE. We'll primarily be concerning ourselves POST and GET. Here are MDN's definitions:"),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},"GET - The GET method requests a representation of the specified resource. Requests using GET should only retrieve data."),Object(s.a)("li",{parentName:"ul"},"POST - The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.")),Object(s.a)("p",null,"You can see more details as well as the rest of the methods at the ",Object(s.a)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"}),"official site"),"."),Object(s.a)("h2",{id:"what-is-node"},"What is Node?"),Object(s.a)("blockquote",null,Object(s.a)("p",{parentName:"blockquote"},"Node.js\xae is a JavaScript runtime built on Chrome's V8 JavaScript engine.\nNode.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.")),Object(s.a)("h3",{id:"that-didnt-answer-my-question"},"That didn't answer my question."),Object(s.a)("p",null,"Node is a program that will interpret your Javascript and is commonly used for web servers."),Object(s.a)("p",null,"Node serves as a way to unify the frontend and the backend in one language/framework. On the frontend we have many JavaScript libraries like React, Angular, Vue and on the backend we have Express, Koa, Happi."),Object(s.a)("h2",{id:"responding-to-requests"},"Responding to Requests"),Object(s.a)("p",null,"One of the first tasks when building a website is responding to the requests that come from the browser. In this lecture, we will be building a basic Node app using Express to interpret requests and respond to them."),Object(s.a)("p",null,"Route definition takes the following structure:"),Object(s.a)("pre",null,Object(s.a)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"app.METHOD(PATH, HANDLER);\n")),Object(s.a)("p",null,"Where:\napp is an instance of express.\nMETHOD is an HTTP request method, in lowercase.\nPATH is a path on the server.\nHANDLER is the function executed when the route is matched.\nThe following code sends \u201chello world\u201d as a result of a GET request to \u2018/' endpoint."),Object(s.a)("pre",null,Object(s.a)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const express = require('express');\nconst app = express();\n\n// respond with \"hello world\" when a GET request is made to the homepage\napp.get('/', function (req, res) {\n  res.send('hello world');\n});\n")),Object(s.a)("h2",{id:"custom-urls"},"Custom URLs"),Object(s.a)("p",null,"We can respond differently for requests to different URLs. For example, if we wanted \u2018/home' to respond with \u201cWelcome Home!\u201d we could add a second route."),Object(s.a)("pre",null,Object(s.a)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"app.get('/home', function (req, res) {\n  res.send('Welcome Home!');\n});\n")),Object(s.a)("p",null,"Both of these blocks of code respond to GET requests, because we are using Express's ",Object(s.a)("inlineCode",{parentName:"p"},"app.get()")," function. We tell express what route we want to trigger the response and give it a function that should be run to respond."),Object(s.a)("p",null,Object(s.a)("a",Object(n.a)({parentName:"p"},{href:"https://expressjs.com/en/starter/basic-routing.html"}),"https://expressjs.com/en/starter/basic-routing.html")),Object(s.a)("h3",{id:"post-methods"},"POST methods"),Object(s.a)("p",null,"POST method is generally used to submit data to an endpoint."),Object(s.a)("p",null,"The following uses Express's ",Object(s.a)("inlineCode",{parentName:"p"},"app.post()")," method to send a POST request to \u2018/' and responds with \u2018Got a POST request'. Notice that ",Object(s.a)("inlineCode",{parentName:"p"},"app.post()")," has a second argument that is a function with two parameters, ",Object(s.a)("inlineCode",{parentName:"p"},"req")," and ",Object(s.a)("inlineCode",{parentName:"p"},"res"),". Usually, when you call POST you want to send data with the request. You would send that data as the ",Object(s.a)("inlineCode",{parentName:"p"},"req")," parameter."),Object(s.a)("pre",null,Object(s.a)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"app.post('/', function (req, res) {\n  res.send('Got a POST request');\n});\n")),Object(s.a)("h3",{id:"regular-expressions"},"Regular Expressions"),Object(s.a)("p",null,"You can match patterns in text rather than specific characters. For example, what if you want to return the same page for all URLs of ",Object(s.a)("inlineCode",{parentName:"p"},"/users/[SOME NUMBER]"),"? We can use regular expressions so that the route will be used for any value. We can use the route string ",Object(s.a)("inlineCode",{parentName:"p"},"/users/\\d+")," to match any number. Regular expressions are outside the scope of this class, but you may find more information in the references below."),Object(s.a)("h3",{id:"parameterized-routes"},"Parameterized Routes"),Object(s.a)("p",null,"Take a look at this route, paying special attention to the ",Object(s.a)("inlineCode",{parentName:"p"},":")," characters. Those denote parameters in the route."),Object(s.a)("pre",null,Object(s.a)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"app.get('/users/:userId/books/:bookId', function (req, res) {\n  res.send(req.params);\n});\n")),Object(s.a)("p",null,"For example, if you navigate to the page ",Object(s.a)("inlineCode",{parentName:"p"},"/users/34/books/12973"),", you would now be able to use those IDs in your code. ",Object(s.a)("inlineCode",{parentName:"p"},"req.params.userId")," would now equal ",Object(s.a)("inlineCode",{parentName:"p"},"34")," and ",Object(s.a)("inlineCode",{parentName:"p"},"req.params.bookId")," would now equal ",Object(s.a)("inlineCode",{parentName:"p"},"12973"),". This allows you to respond differently depending on IDs passed to you by the front end."),Object(s.a)("p",null,"In the following code snippet we use ",Object(s.a)("inlineCode",{parentName:"p"},"app.get()")," to query a messages endpoint and we want to get a specific message. We call this query parameter ",Object(s.a)("inlineCode",{parentName:"p"},"messageId")," and can use it in the function we pass to ",Object(s.a)("inlineCode",{parentName:"p"},"app.get()")," to return that message."),Object(s.a)("pre",null,Object(s.a)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const messages = {...}\napp.get('/messages/:messageId', (req, res) => {\n return res.send(messages[req.params.messageId]);\n});\n")),Object(s.a)("h2",{id:"references"},"References"),Object(s.a)("p",null,"Don't know where to start? Check out ",Object(s.a)("a",Object(n.a)({parentName:"p"},{href:"https://expressjs.com/en/starter/installing.html"}),"Express's official getting started page"),". The rest of the pages have great content and will help you along your journey."),Object(s.a)("p",null,"For a more in-depth exploration of this topic, check out ",Object(s.a)("a",Object(n.a)({parentName:"p"},{href:"https://www.robinwieruch.de/node-express-server-rest-api"}),"this tutorial"),"."),Object(s.a)("p",null,Object(s.a)("a",Object(n.a)({parentName:"p"},{href:"http://forbeslindesay.github.io/express-route-tester/"}),"This")," is a useful tool to test your Express regular expressions to make sure that the routes match what you expect."),Object(s.a)("p",null,"For an interactive way to learn regular expressions, ",Object(s.a)("a",Object(n.a)({parentName:"p"},{href:"https://regexone.com/"}),"consider this site"),"."))}l.isMDXComponent=!0}}]);