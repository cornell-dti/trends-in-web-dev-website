"use strict";(self.webpackChunktrends_in_web_dev_website=self.webpackChunktrends_in_web_dev_website||[]).push([[2632],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6133:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"lecture2",title:"Lecture 2"},l=void 0,d={unversionedId:"lecture2",id:"version-2023sp/lecture2",isDocsHomePage:!1,title:"Lecture 2",description:"Homework JS, TS, and Basic React, is due 3/11 by 11:59pm",source:"@site/versioned_docs/version-2023sp/lecture2.md",sourceDirName:".",slug:"/lecture2",permalink:"/docs/lecture2",tags:[],version:"2023sp",frontMatter:{id:"lecture2",title:"Lecture 2"}},c=[{value:"How to build a web app",id:"how-to-build-a-web-app",children:[{value:"How do websites work?",id:"how-do-websites-work",children:[{value:"Static websites",id:"static-websites",children:[],level:4},{value:"Dynamic websites",id:"dynamic-websites",children:[],level:4},{value:"In reality...",id:"in-reality",children:[],level:4}],level:3}],level:2},{value:"Node.js",id:"nodejs",children:[{value:"Open Source",id:"open-source",children:[],level:4},{value:"Cross Platform JavaScript Runtime Environment",id:"cross-platform-javascript-runtime-environment",children:[],level:4},{value:"Single-threaded",id:"single-threaded",children:[],level:4},{value:"How does Node.js handle multiple requests?",id:"how-does-nodejs-handle-multiple-requests",children:[],level:4},{value:"Event Loop",id:"event-loop",children:[],level:4},{value:"Why Node.js?",id:"why-nodejs",children:[],level:4},{value:"Conceptual Overview: Node.js vs Browser JS",id:"conceptual-overview-nodejs-vs-browser-js",children:[{value:"Node Package Manager (NPM)",id:"node-package-manager-npm",children:[],level:4},{value:"package.json",id:"packagejson",children:[],level:4},{value:"We will use Yarn!",id:"we-will-use-yarn",children:[],level:4},{value:"NPM vs Yarn commands",id:"npm-vs-yarn-commands",children:[],level:4}],level:3}],level:2},{value:"JavaScript Frameworks, Rendering Models, and more.",id:"javascript-frameworks-rendering-models-and-more",children:[],level:2},{value:"Why Linters Are Necessary",id:"why-linters-are-necessary",children:[],level:2},{value:"Resources",id:"resources",children:[{value:"JavaScript",id:"javascript",children:[],level:3},{value:"TypeScript",id:"typescript",children:[],level:3}],level:2},{value:"In-Class Demo 1: Executing Javascript in <code>node</code> and in the browser",id:"in-class-demo-1-executing-javascript-in-node-and-in-the-browser",children:[],level:2}],p={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Homework: Assignment 1: JS, TS, and Basic React, is due 3/11 by 11:59pm"),(0,i.kt)("p",null,"Slides: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1jv8itKRUyCkyRJCdipxk8znlYjsHsk5c78OdkP7UQaQ/edit?usp=sharing"},"Here")),(0,i.kt)("p",null,"Explore more:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://trpc.io/"},"tRPC"),": End-to-end type safety for a full-stack TypeScript app"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://turborepo.com/"},"Turborepo"),": A monorepo tool for TypeScript, to keep all libraries, backend, and frontend code in one place")),(0,i.kt)("h1",{id:"todays-lecture-227"},"Today's Lecture 2/27"),(0,i.kt)("p",null,"By the end of today, you should be able to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Understand the evolution of web development"),(0,i.kt)("li",{parentName:"ul"},"Understand how websites work under the hood"),(0,i.kt)("li",{parentName:"ul"},"Understand the difference between Node.js and Browser JS"),(0,i.kt)("li",{parentName:"ul"},"Understand the ecosystem of modern web development tools (Yarn, JS Frameworks, Linting, etc.), how each tool fits into the development process, why each is present, and how to use them.")),(0,i.kt)("h2",{id:"how-to-build-a-web-app"},"How to build a web app"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Intro to Node.js and Yarn")),(0,i.kt)("h3",{id:"how-do-websites-work"},"How do websites work?"),(0,i.kt)("p",null,"There are two main models of websites: static and dynamic. The difference between the two is how the content is generated."),(0,i.kt)("h4",{id:"static-websites"},"Static websites"),(0,i.kt)("p",null,'When we originally conceived of the "website", it was a static little bundle of HTML, CSS, and JavaScript. In essence, when you access a URL, your browser asks the server at the other end for that bundle via an HTTP request. The server then sends back the bundle, and your browser renders it.'),(0,i.kt)("p",null,"This is the traditional ",(0,i.kt)("em",{parentName:"p"},"static website"),", and it adheres cleanly to the server-client model. However, as webpages got more complex, we needed a way to make them more dynamic. We needed a way to store data, and to send it back to the client when they requested it. This is where the ",(0,i.kt)("em",{parentName:"p"},"dynamic website")," comes in."),(0,i.kt)("h4",{id:"dynamic-websites"},"Dynamic websites"),(0,i.kt)("p",null,"Dynamic websites are websites that are generated on the fly. They are not static bundles of HTML, CSS, and JavaScript. Instead, they are generated by a server-side language, such as PHP, Python, or Ruby. When a user requests a page, the server runs the code to generate the page, and then sends it back to the client."),(0,i.kt)("h4",{id:"in-reality"},"In reality..."),(0,i.kt)("p",null,"In reality, most websites are a mix of static and dynamic content. The static content is the HTML, CSS, and JavaScript that is sent to the client. The dynamic content is the data that is sent to the client when they request it."),(0,i.kt)("p",null,"This led to the rise of all kinds of rendering models and JavaScript frameworks, which we'll cover shortly. First, however, you need to know Node and Yarn."),(0,i.kt)("h2",{id:"nodejs"},"Node.js"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Node.js is an open source, cross platform JavaScript V8 runtime environment using a single-threaded event loop.")),(0,i.kt)("p",null,"Let's break it down..."),(0,i.kt)("h4",{id:"open-source"},"Open Source"),(0,i.kt)("p",null,"All of the code is available to you to view on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node"},"Github"),"! Anyone can contribute-- this democratizes the development process!"),(0,i.kt)("h4",{id:"cross-platform-javascript-runtime-environment"},"Cross Platform JavaScript Runtime Environment"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Historically you were only able to run JavaScript on the browser or client"),(0,i.kt)("li",{parentName:"ul"},"Node.js takes the V8 JavaScript engine powering Google Chrome outside of the browser allowing you to run Node.js ",(0,i.kt)("strong",{parentName:"li"},"anywhere"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"V8 JavaScript engine is a fast JavaScript engine created by Google. Learn more about it ",(0,i.kt)("a",{parentName:"li",href:"https://v8.dev/"},"here"),"!"))),(0,i.kt)("li",{parentName:"ul"},"Can run Node.js on your terminal as well"),(0,i.kt)("li",{parentName:"ul"},"Now, we can use JavaScript as a ",(0,i.kt)("strong",{parentName:"li"},"universal language"),"!")),(0,i.kt)("h4",{id:"single-threaded"},"Single-threaded"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Threads are a separate line of execution and can be ran in parallel - i.e. several at\nthe same time."),(0,i.kt)("li",{parentName:"ul"},"However, Node.js uses a single-threaded event loop",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Run in a single process"),(0,i.kt)("li",{parentName:"ul"},"Requests do not spawn new threads"))),(0,i.kt)("li",{parentName:"ul"},"Non-blocking")),(0,i.kt)("h4",{id:"how-does-nodejs-handle-multiple-requests"},"How does Node.js handle multiple requests?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Node.js is ",(0,i.kt)("strong",{parentName:"li"},"asynchronous")),(0,i.kt)("li",{parentName:"ul"},"When a request is sent, it is dispatched to the server"),(0,i.kt)("li",{parentName:"ul"},"Instead of blocking the thread and wasting CPU cycles waiting for the request to finish, Node.js continues its operations"),(0,i.kt)("li",{parentName:"ul"},"Once the request is complete, a callback is triggered and information is sent back")),(0,i.kt)("h4",{id:"event-loop"},"Event Loop"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Client can send requests into the event loop"),(0,i.kt)("li",{parentName:"ul"},"We can register callbacks to server when doing things that might take time (ie. search, query, intensive computation)"),(0,i.kt)("li",{parentName:"ul"},"After operation completes, callback will fire and return to requests")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A callback is a function that you can pass to another function to be executed\nlater. This is a common pattern in web development, since lots of data goes\nfrom the client to the server, and we want to implement certain behavior that fires\nafter the data is received."))),(0,i.kt)("h4",{id:"why-nodejs"},"Why Node.js?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Unites front-end and back-end in one language/framework",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"TypeScript/JavaScript"),(0,i.kt)("li",{parentName:"ul"},"Frontend and backend in the same language"))),(0,i.kt)("li",{parentName:"ul"},"Extremely performant"),(0,i.kt)("li",{parentName:"ul"},"Asynchronous and non-blocking"),(0,i.kt)("li",{parentName:"ul"},"NPM (Node Package Manager)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"a directory of many libraries and packages"),(0,i.kt)("li",{parentName:"ul"},"access to huge libraries to use in projects and build upon"),(0,i.kt)("li",{parentName:"ul"},"similar to ",(0,i.kt)("inlineCode",{parentName:"li"},"pip")," in Python, Gradle/Maven in Java, etc (it's okay if you've never heard of these!)")))),(0,i.kt)("h3",{id:"conceptual-overview-nodejs-vs-browser-js"},"Conceptual Overview: Node.js vs Browser JS"),(0,i.kt)("p",null,"Node.js runs on the server (aka not in your browser), while browser JS runs on the client (in your browser). They are both JavaScript, but since JavaScript is a standard, not a single unified language, there are differences between the two (some native functions that exist in a browser, such as accessing a window's URL, obviously have no meaning in Node.js)."),(0,i.kt)("p",null,"Keep this in mind! If you install a package meant for Node.js and try to use it in the browser, it might behave unexpectedly. If you install a package meant for the browser and try to use it in Node.js, it might not behave unexpectedly. These are two entirely separate runtime environments!"),(0,i.kt)("h4",{id:"node-package-manager-npm"},"Node Package Manager (NPM)"),(0,i.kt)("p",null,"NPM is a dependency manager, like pip for python or maven for java. Think of node packages as recipes made by other people you want to use in your site.\nAlso part of the open sourced community!"),(0,i.kt)("h4",{id:"packagejson"},"package.json"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," is kind of like a directory for your Node project. It contains\nvarious metadata and information about it, as well as details on what it depends\non, so others can reproduce the behavior of your project."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tracks which node packages you use"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Dependencies"),": packages needed at run-time")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install --save <pkg_name>\nyarn add <pkg_name>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"devDependencies"),': packages used during development (before pushing to production).\nWhen a "production" or real version gets built prior to deployment, these dependencies\nwill not be included. Only install certain tools that ease development in this manner.')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install --save-dev <pkg_name>\nyarn add --dev <pkg_name>\n")),(0,i.kt)("h4",{id:"we-will-use-yarn"},"We will use Yarn!"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Faster at installing dependencies in practice"),(0,i.kt)("li",{parentName:"ul"},"More optimized")),(0,i.kt)("h4",{id:"npm-vs-yarn-commands"},"NPM vs Yarn commands"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"NPM")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm init\nnpm install <pkg_name>\nnpm uninstall <pkg_name>\nnpm update <pkg_name>\nnpm audit\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Yarn")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn init\nyarn add <pkg_name>\nyarn remove <pkg_name>\nyarn upgrade <pkg_name>\nyarn audit\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Very similar"),(0,i.kt)("li",{parentName:"ul"},"Audit: checks for vulnerabilities in dependencies")),(0,i.kt)("h2",{id:"javascript-frameworks-rendering-models-and-more"},"JavaScript Frameworks, Rendering Models, and more."),(0,i.kt)("p",null,"Because of the rise of Node.js, there has been a rise in JavaScript frameworks and rendering models. These frameworks are either client-side or full-stack frameworks, and they are used to make the development process easier. Now, JS can run in your client's browser and on your server, meaning we have unified the front-end and back-end in one language! With this power comes ... more power, as we can manipulate how the user renders a website in different ways. This led to the rise of correpsonding JavaScript Frameworks, each of which embraces a slightly different rendering model. Here's a brief overview of all the main ways:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Static websites are pre-built and served to the client without the need for any server-side processing. They are fast and simple, but lack dynamic functionality. We covered this above.\n\nProgressive Web Apps (PWAs) are web applications that can be "installed" on a user\'s device and run offline. They can be built using a variety of technologies, including **React.js**. These are entirely client-side frameworks that run in the browser, and are in reality singular empty HTML shells with a massive JS bundle that pushes in all the content on-the-fly as the user navigates the site.\n\nServer-side rendering with hydration is a technique where the initial render of a web application is done on the server, and then "hydrated" on the client with JavaScript to add dynamic functionality. This improves the initial load time and SEO of the application, while still allowing the application to be dynamic. The most famous framework in this category, and the one we\'ll be using, is **Next.js**.\n\nIncremental static regeneration is a technique where a web application is rendered statically, but certain parts of the application are periodically re-rendered on the server to ensure that the content is up-to-date (we check if the content has turned "stale" and then refresh from the server when that happens). This is a technique used by Next.js to improve the performance of certain parts of the interface, as well as by other frameworks.\n\nPartial hydration is a technique where only certain parts of a web application are hydrated, rather than the entire application. This can improve the performance of the application by reducing the amount of JavaScript that needs to be executed on the client. Unlike the previous rendering models, this is less of the basis of an existing framework, and more of a technique that different frameworks can use.\n\nIslands is a technique where a web application is divided into "islands" of functionality, each with its own hydration and JavaScript execution, isolated in a sea of very-performant and lightweight, but static HTML. This can improve the performance of the application by reducing the amount of JavaScript that needs to be executed on the client. The team behind this architecture is the **Astro.js** framework.\n\nStreaming SSR is a technique where the server sends the initial HTML of a web application to the client in chunks, allowing the browser to start rendering the application before all of the JavaScript has been loaded. Like...a lot of this list, Vercel\'s **Next.js** framework is pioneering this technique, with their newly released Next.js 13 (beta).\n\nResumability is a technique where a web application serializes all of its JavaScript into HTML, and then loads JS in in as tiny of chunks as possible, allowing the browser to start rendering the application before all of the JavaScript has been loaded. This is the fastest and most performant framework, being pioneered by the team at Qwik. I won\'t pretend to understand exactly how this works.\n')),(0,i.kt)("p",null,"Then, at the end of the day, all of this fancy code has to be compiled down into bundles that the browser can understand anyway. Towards this end, the industry heavyweight is ",(0,i.kt)("strong",{parentName:"p"},"Webpack"),", which is a bundler written in JS that can be used to compile all of your code into a single file that can be served to the client. Recent challengers, however, include Vercel's ",(0,i.kt)("strong",{parentName:"p"},"Turbopack"),", which is written in Rust and offers a much faster build time. ",(0,i.kt)("strong",{parentName:"p"},"Vite")," also exists -- an extremely lightweight and performant bundler, normally used in development environments."),(0,i.kt)("h1",{id:"other-stuff-linting-resources-etc"},"Other stuff (linting, resources, etc.)"),(0,i.kt)("h2",{id:"why-linters-are-necessary"},"Why Linters Are Necessary"),(0,i.kt)("p",null,"Remember all the weird quirks of JavaScript from last lesson? Unfortunately, we're stuck with JS because\nit's the only language that can be understood by browser (for now). To mitigate the\nproblem, people wrote ",(0,i.kt)("em",{parentName:"p"},"linters")," that try to automatically find common problems in written JS.\nThey are well integrated with editors so you can directly see the warnings. If\nyou follow the 'Setup your editor' section, you are good to go. You will see\nwarnings when you accidentally write some wrong code."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("p",null,"I recommend the ",(0,i.kt)("em",{parentName:"p"},"You Don't Know JS")," series by Kyle Simpson. The ebooks are\navailable ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/getify/You-Dont-Know-JS/tree/1st-ed"},"for free on GitHub"),".\nThe series is comprehensive and will teach you everything you want to know."),(0,i.kt)("p",null,"Additionally, the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/"},"MDN Web Docs")," are a great\nresource for quickly looking up the documentation for various features in Javascript, complete with examples."),(0,i.kt)("h3",{id:"javascript"},"JavaScript"),(0,i.kt)("p",null,"We mentioned Mozilla Developer Network as a site for documentation about the JavaScript language, but it's also a great way to get familiar with the language."),(0,i.kt)("p",null,"Here is their JavaScript guide: ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"},"JavaScript Guide - JavaScript | MDN (mozilla.org)")),(0,i.kt)("p",null,"It's a bit long, so I recommend skimming through the first few parts, up to and including the Objects section (",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects"},"Working with objects - JavaScript | MDN (mozilla.org)"),")."),(0,i.kt)("p",null,"JavaScript objects will show up a good amount in this course, so make sure you understand the basics!"),(0,i.kt)("h3",{id:"typescript"},"TypeScript"),(0,i.kt)("p",null,"The official TypeScript website is a great resource to get familiar with the language. There are different guides that assume different programming backgrounds. Choose the article that best suits your background."),(0,i.kt)("p",null,"Take a look at the Get Started section here: ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/"},"TypeScript: The starting point for learning TypeScript (typescriptlang.org)")),(0,i.kt)("p",null,"If you've gone through the MDN JavaScript guide, fill in your TypeScript knowledge with this: ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"},"TypeScript: Documentation - TypeScript for JavaScript Programmers (typescriptlang.org)")),(0,i.kt)("p",null,"There is also a Handbook that you can chug through if interested (not necessary at all): ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/intro.html"},"TypeScript: Handbook - The TypeScript Handbook (typescriptlang.org)")),(0,i.kt)("p",null,"Hope this is helpful for you all! This will be the language you'll be working with all-semester, so being comfortable with the language will pay off."),(0,i.kt)("h2",{id:"in-class-demo-1-executing-javascript-in-node-and-in-the-browser"},"In-Class Demo 1: Executing Javascript in ",(0,i.kt)("inlineCode",{parentName:"h2"},"node")," and in the browser"),(0,i.kt)("p",null,"TODO: @daniel"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Walk them through using node to execute javascript line by line, as well as using the console to execute javascript line-by-line."),(0,i.kt)("li",{parentName:"ul"},"Specifically,")))}u.isMDXComponent=!0}}]);