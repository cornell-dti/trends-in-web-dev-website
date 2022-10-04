"use strict";(self.webpackChunktrends_in_web_dev_website=self.webpackChunktrends_in_web_dev_website||[]).push([[7863],{7300:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(6687);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1215:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=t(3206),r=t(5421),l=(t(6687),t(7300)),i=["components"],o={id:"lecture2",title:"Lecture 2"},s=void 0,p={unversionedId:"lecture2",id:"version-2022fa/lecture2",isDocsHomePage:!1,title:"Lecture 2",description:"Lecture Slides",source:"@site/versioned_docs/version-2022fa/lecture2.md",sourceDirName:".",slug:"/lecture2",permalink:"/docs/lecture2",tags:[],version:"2022fa",frontMatter:{id:"lecture2",title:"Lecture 2"},sidebar:"docs",previous:{title:"Lecture 1",permalink:"/docs/lecture1"},next:{title:"Assignments",permalink:"/docs/assignments"}},u=[{value:"How to build a web app",id:"how-to-build-a-web-app",children:[{value:"How websites work",id:"how-websites-work",children:[],level:3}],level:2},{value:"Node.js",id:"nodejs",children:[{value:"Open Source",id:"open-source",children:[],level:4},{value:"Cross Platform JavaScript Runtime Environment",id:"cross-platform-javascript-runtime-environment",children:[],level:4},{value:"Single-threaded",id:"single-threaded",children:[],level:4},{value:"How does Node.js handle multiple requests?",id:"how-does-nodejs-handle-multiple-requests",children:[],level:4},{value:"Event Loop",id:"event-loop",children:[],level:4},{value:"Why Node.js?",id:"why-nodejs",children:[],level:4},{value:"Node Package Manager (NPM)",id:"node-package-manager-npm",children:[],level:4},{value:"package.json",id:"packagejson",children:[],level:4},{value:"We will use Yarn!",id:"we-will-use-yarn",children:[],level:4},{value:"NPM vs Yarn commands",id:"npm-vs-yarn-commands",children:[],level:4}],level:2},{value:"<del><code>var</code></del>, <code>let</code>, and <code>const</code>",id:"var-let-and-const",children:[],level:2},{value:"Arrow Functions",id:"arrow-functions",children:[],level:2},{value:"Functional Programming",id:"functional-programming",children:[{value:"<code>map</code>",id:"map",children:[],level:3},{value:"<code>filter</code>",id:"filter",children:[],level:3},{value:"<code>forEach</code>",id:"foreach",children:[],level:3},{value:"<code>every</code>",id:"every",children:[],level:3},{value:"<code>some</code>",id:"some",children:[],level:3},{value:"<code>reduce</code>",id:"reduce",children:[],level:3}],level:2},{value:"Spreading and Destructuring",id:"spreading-and-destructuring",children:[],level:2},{value:"Ugly Pieces of JavaScript",id:"ugly-pieces-of-javascript",children:[{value:"Truthy, falsy",id:"truthy-falsy",children:[],level:3},{value:"Global variables",id:"global-variables",children:[],level:3},{value:"Type coercion",id:"type-coercion",children:[{value:"Example 1",id:"example-1",children:[],level:4},{value:"Example 2",id:"example-2",children:[],level:4},{value:"Example 3",id:"example-3",children:[],level:4}],level:3}],level:2},{value:"Why Linters Are Necessary",id:"why-linters-are-necessary",children:[],level:2},{value:"Resources",id:"resources",children:[{value:"JavaScript",id:"javascript",children:[],level:3},{value:"TypeScript",id:"typescript",children:[],level:3}],level:2},{value:"Demo Code",id:"demo-code",children:[],level:2}],c={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1sH_DSuM0o2x3BXGjUFDtUAtp54e2cTCZ/edit?usp=sharing&ouid=110839432285233804143&rtpof=true&sd=true"},"Lecture Slides")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/2022fa/assignment1"},"Assignment 1"),": Due on CMS by 10/17 by 7:30pm"),(0,l.kt)("h2",{id:"how-to-build-a-web-app"},"How to build a web app"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Intro to Node.js and Yarn")),(0,l.kt)("h3",{id:"how-websites-work"},"How websites work"),(0,l.kt)("p",null,"Websites are accessed by HTTP requests, and these requests go to the server, where it fetches the information queried and sends the data back to the client. This cycle between sending requests back and forth between client and server then repeats!"),(0,l.kt)("h2",{id:"nodejs"},"Node.js"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Node.js is an open source, cross platform JavaScript V8 runtime environment using a single-threaded event loop.")),(0,l.kt)("p",null,"Let's break it down..."),(0,l.kt)("h4",{id:"open-source"},"Open Source"),(0,l.kt)("p",null,"All of the code is available to you to view on ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node"},"Github"),"! Anyone can contribute-- this democratizes the development process!"),(0,l.kt)("h4",{id:"cross-platform-javascript-runtime-environment"},"Cross Platform JavaScript Runtime Environment"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Historically you were only able to run JavaScript on the browser or client"),(0,l.kt)("li",{parentName:"ul"},"Node.js takes the V8 JavaScript engine powering Google Chrome outside of the browser allowing you to run Node.js ",(0,l.kt)("strong",{parentName:"li"},"anywhere"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"V8 JavaScript engine is a fast JavaScript engine created by Google. Learn more about it ",(0,l.kt)("a",{parentName:"li",href:"https://v8.dev/"},"here"),"!"))),(0,l.kt)("li",{parentName:"ul"},"Can run Node.js on your terminal as well"),(0,l.kt)("li",{parentName:"ul"},"Now, we can use JavaScript as a ",(0,l.kt)("strong",{parentName:"li"},"universal language"),"!")),(0,l.kt)("h4",{id:"single-threaded"},"Single-threaded"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Threads are a separate line of execution and can be ran in parallel - i.e. several at\nthe same time."),(0,l.kt)("li",{parentName:"ul"},"However, Node.js uses a single-threaded event loop",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Run in a single process"),(0,l.kt)("li",{parentName:"ul"},"Requests do not spawn new threads"))),(0,l.kt)("li",{parentName:"ul"},"Non-blocking")),(0,l.kt)("h4",{id:"how-does-nodejs-handle-multiple-requests"},"How does Node.js handle multiple requests?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Node.js is ",(0,l.kt)("strong",{parentName:"li"},"asynchronous")),(0,l.kt)("li",{parentName:"ul"},"When a request is sent, it is dispatched to the server"),(0,l.kt)("li",{parentName:"ul"},"Instead of blocking the thread and wasting CPU cycles waiting for the request to finish, Node.js continues its operations"),(0,l.kt)("li",{parentName:"ul"},"Once the request is complete, a callback is triggered and information is sent back")),(0,l.kt)("h4",{id:"event-loop"},"Event Loop"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Client can send requests into the event loop"),(0,l.kt)("li",{parentName:"ul"},"We can register callbacks to server when doing things that might take time (ie. search, query, intensive computation)"),(0,l.kt)("li",{parentName:"ul"},"After operation completes, callback will fire and return to requests")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"A callback is a function that you can pass to another function to be executed\nlater. This is a common pattern in web development, since lots of data goes\nfrom the client to the server, and we want to implement certain behavior that fires\nafter the data is received."))),(0,l.kt)("h4",{id:"why-nodejs"},"Why Node.js?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Unites front-end and back-end in one language/framework",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"TypeScript/JavaScript"),(0,l.kt)("li",{parentName:"ul"},"Frontend and backend in the same language"))),(0,l.kt)("li",{parentName:"ul"},"Extremely performant"),(0,l.kt)("li",{parentName:"ul"},"Asynchronous and non-blocking"),(0,l.kt)("li",{parentName:"ul"},"NPM (Node Package Manager)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"a directory of many libraries and packages"),(0,l.kt)("li",{parentName:"ul"},"access to huge libraries to use in projects and build upon"),(0,l.kt)("li",{parentName:"ul"},"similar to ",(0,l.kt)("inlineCode",{parentName:"li"},"pip")," in Python, Gradle/Maven in Java, etc (it's okay if you've never heard of these!)")))),(0,l.kt)("h4",{id:"node-package-manager-npm"},"Node Package Manager (NPM)"),(0,l.kt)("p",null,"NPM is a dependency manager, like pip for python or maven for java. Think of node packages as recipes made by other people you want to use in your site.\nAlso part of the open sourced community!"),(0,l.kt)("h4",{id:"packagejson"},"package.json"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," is kind of like a directory for your Node project. It contains\nvarious metadata and information about it, as well as details on what it depends\non, so others can reproduce the behavior of your project."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Tracks which node packages you use"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Dependencies"),": packages needed at run-time")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm install --save <pkg_name>\nyarn add <pkg_name>\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"devDependencies"),': packages used during development (before pushing to production).\nWhen a "production" or real version gets built prior to deployment, these dependencies\nwill not be included. Only install certain tools that ease development in this manner.')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm install --save-dev <pkg_name>\nyarn add --dev <pkg_name>\n")),(0,l.kt)("h4",{id:"we-will-use-yarn"},"We will use Yarn!"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Faster at installing dependencies in practice"),(0,l.kt)("li",{parentName:"ul"},"More optimized")),(0,l.kt)("h4",{id:"npm-vs-yarn-commands"},"NPM vs Yarn commands"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"NPM")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm init\nnpm install <pkg_name>\nnpm uninstall <pkg_name>\nnpm update <pkg_name>\nnpm audit\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Yarn")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"yarn init\nyarn add <pkg_name>\nyarn remove <pkg_name>\nyarn upgrade <pkg_name>\nyarn audit\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Very similar"),(0,l.kt)("li",{parentName:"ul"},"Audit: checks for vulnerabilities in dependencies")),(0,l.kt)("h2",{id:"var-let-and-const"},(0,l.kt)("del",{parentName:"h2"},(0,l.kt)("inlineCode",{parentName:"del"},"var")),", ",(0,l.kt)("inlineCode",{parentName:"h2"},"let"),", and ",(0,l.kt)("inlineCode",{parentName:"h2"},"const")),(0,l.kt)("p",null,"Before we had ES6, there was only one way to declare variable: ",(0,l.kt)("inlineCode",{parentName:"p"},"var"),". (Well,\nthere is actually another way, but it's very bad and you should never use it.)"),(0,l.kt)("p",null,"For example, if you want to define a variable ",(0,l.kt)("inlineCode",{parentName:"p"},"a")," initialized to ",(0,l.kt)("inlineCode",{parentName:"p"},"21 * 2"),", you\nwrite"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var a = 21 * 2;\n")),(0,l.kt)("p",null,"However, ",(0,l.kt)("inlineCode",{parentName:"p"},"var")," has a big problem: it is function scoped instead of block scoped.\nTherefore, you might accidentally use a local variable that should not be used\nanymore!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"function someComplexFunction() {\n  var foo = 42;\n  if (someCondition()) {\n    var abc = 41 * 2;\n    foo += abc;\n  }\n  // You can still use abc here!\n}\n")),(0,l.kt)("p",null,"In ES6, we finally have ",(0,l.kt)("inlineCode",{parentName:"p"},"let")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"const")," that are block scoped. Using block\nscoped variables outside of the block will be a runtime error. You should use\n",(0,l.kt)("inlineCode",{parentName:"p"},"const")," whenever possible since it defines an immutable variable, only use ",(0,l.kt)("inlineCode",{parentName:"p"},"let"),"\nif the variable has to be mutable. As mentioned above, you should never use\n",(0,l.kt)("inlineCode",{parentName:"p"},"var"),"."),(0,l.kt)("p",null,"Here is a rewrite of the ",(0,l.kt)("inlineCode",{parentName:"p"},"someComplexFunction")," above using only let and const:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"function someComplexFunction() {\n  let foo = 42; // foo might be re-assigned. We need to use `let`.\n  if (someCondition()) {\n    const abc = 41 * 2; // abc is never mutated. We can use `const`.\n    foo += abc;\n  }\n  // You can NOT use abc here! This is nice!\n}\n")),(0,l.kt)("p",null,"Sometimes you have to use ",(0,l.kt)("inlineCode",{parentName:"p"},"let")," even if the variable is only assigned one. This\nusually happens when then they are separately assigned inside two branches. For\nexample,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"let myMood;\nif (hasPrelim()) {\n  myMood = 'bad';\n} else {\n  myMood = 'good';\n}\n")),(0,l.kt)("p",null,"To prevent this, people use the ",(0,l.kt)("strong",{parentName:"p"},"ternary operator"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const myMood = hasPrelim() ? 'bad' : 'good';\n")),(0,l.kt)("h2",{id:"arrow-functions"},"Arrow Functions"),(0,l.kt)("p",null,"Before ES6 we wrote functions as such:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"function myFunction(x) {\n  return x + 1;\n}\n")),(0,l.kt)("p",null,"or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const myFunction = function (x) {\n  return x + 1;\n};\n")),(0,l.kt)("p",null,"Now we have this shorthand:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const myFunction = (x) => {\n  return x + 1;\n};\n")),(0,l.kt)("p",null,"The syntax is"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const functionName = (parameter1, parameter2, parameter3) => {\n  // function body\n};\n")),(0,l.kt)("p",null,"For this simple function, we have even shorter shorthand:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const myFunction = (x) => x + 1;\n")),(0,l.kt)("p",null,"This shorthand works if the function body is just one line that will be\nimmediately returned. In this case, we are simply incrementing ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," and\nreturning the result."),(0,l.kt)("p",null,"Anonymous Arrow Functions: just don't include ",(0,l.kt)("inlineCode",{parentName:"p"},"[function name]")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"(parameter1, parameter2, parameter3) => {\n  // function body\n};\n")),(0,l.kt)("h2",{id:"functional-programming"},"Functional Programming"),(0,l.kt)("h3",{id:"map"},(0,l.kt)("inlineCode",{parentName:"h3"},"map")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"array.map(function)")," runs ",(0,l.kt)("inlineCode",{parentName:"p"},"function")," on each element of ",(0,l.kt)("inlineCode",{parentName:"p"},"array"),"\xa0and returns\nan array containing the results."),(0,l.kt)("p",null,"Example: ",(0,l.kt)("inlineCode",{parentName:"p"},"[1, 4, 9].map(x => Math.sqrt(x))")," will return ",(0,l.kt)("inlineCode",{parentName:"p"},"[1, 2, 3]"),"."),(0,l.kt)("h3",{id:"filter"},(0,l.kt)("inlineCode",{parentName:"h3"},"filter")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"array.filter(function)")," runs ",(0,l.kt)("inlineCode",{parentName:"p"},"function")," on each element of ",(0,l.kt)("inlineCode",{parentName:"p"},"array"),"\xa0and return\nan array containing all elements that satisfy the function requirements."),(0,l.kt)("p",null,"Example: ",(0,l.kt)("inlineCode",{parentName:"p"},"[1, 4, 9].filter(x => x > 3)")," will return ",(0,l.kt)("inlineCode",{parentName:"p"},"[4, 9]")),(0,l.kt)("h3",{id:"foreach"},(0,l.kt)("inlineCode",{parentName:"h3"},"forEach")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"array.forEach(function)")," runs ",(0,l.kt)("inlineCode",{parentName:"p"},"function")," on each element of ",(0,l.kt)("inlineCode",{parentName:"p"},"array"),".\nThe difference between ",(0,l.kt)("inlineCode",{parentName:"p"},"map")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"forEach")," is that map returns a value, whereas\nforEach just applies the function to each element of the array."),(0,l.kt)("p",null,"Example: ",(0,l.kt)("inlineCode",{parentName:"p"},"[1, 4, 9].forEach(x => console.log(x))")," will print out each element\nto the console."),(0,l.kt)("h3",{id:"every"},(0,l.kt)("inlineCode",{parentName:"h3"},"every")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"array.every(function)")," runs ",(0,l.kt)("inlineCode",{parentName:"p"},"function")," on each element of ",(0,l.kt)("inlineCode",{parentName:"p"},"array")," and returns\nwhether every element of the array satisfies the function requirements."),(0,l.kt)("p",null,"Example: ",(0,l.kt)("inlineCode",{parentName:"p"},"[1, 4, 9].every(x => x > 0)")," will return true. However,\n",(0,l.kt)("inlineCode",{parentName:"p"},"[1, 4, 9].every(x => x > 1)")," will return false."),(0,l.kt)("h3",{id:"some"},(0,l.kt)("inlineCode",{parentName:"h3"},"some")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"array.some(function)")," runs ",(0,l.kt)("inlineCode",{parentName:"p"},"function")," on each element of ",(0,l.kt)("inlineCode",{parentName:"p"},"array")," and returns\nwhether any element of the array satisfies the function requirements."),(0,l.kt)("p",null,"Example: ",(0,l.kt)("inlineCode",{parentName:"p"},"[1, 4, 9].some(x => x == 1)")," will return true. However,\n",(0,l.kt)("inlineCode",{parentName:"p"},"[1, 4, 9].some(x => x == 2)")," will return false."),(0,l.kt)("h3",{id:"reduce"},(0,l.kt)("inlineCode",{parentName:"h3"},"reduce")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"array.reduce(function)")," runs ",(0,l.kt)("inlineCode",{parentName:"p"},"function")," on each element of ",(0,l.kt)("inlineCode",{parentName:"p"},"array"),"\xa0and returns\na single value."),(0,l.kt)("p",null,"Example: ",(0,l.kt)("inlineCode",{parentName:"p"},"[1, 4, 9].reduce((sum, curr) => sum + curr)")," will return 14."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"reduce")," can take an optional second parameter to change the value that the\naccumulator starts at."),(0,l.kt)("p",null,"Example: ",(0,l.kt)("inlineCode",{parentName:"p"},"[1, 4, 9].reduce((sum, curr) => sum + curr, 500)")," will return 514."),(0,l.kt)("h2",{id:"spreading-and-destructuring"},"Spreading and Destructuring"),(0,l.kt)("p",null,"Say we have a function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const add3 = (a: number, b: number, c: number) => a + b + c;\n")),(0,l.kt)("p",null,"Now if we had an array:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const arr = [1, 2, 3];\n")),(0,l.kt)("p",null,"We can use the ",(0,l.kt)("strong",{parentName:"p"},"spread operator")," ",(0,l.kt)("inlineCode",{parentName:"p"},"...")," to ",(0,l.kt)("em",{parentName:"p"},"destructure")," each element of the\narray as one of the arguments:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"add3(...arr); // same as add3(arr[0], arr[1], arr[2]) output 6\n")),(0,l.kt)("p",null,"Now if we had an object:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const add3Object = {\n  a: 3,\n  b: 4,\n  c: 7,\n};\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"add3(...add3Object)")," is illegal, since the order of fields in the object is\nnot guaranteed. However, you can refactor the ",(0,l.kt)("inlineCode",{parentName:"p"},"add3")," function to be:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"type ABC = { a: number; b: number; c: number };\n\nconst add3 = ({ a, b, c }: ABC) => a + b + c;\n\n// equivalent to:\nconst add3Uglier = (abc: ABC) => abc.a + abc.b + abc.c;\n")),(0,l.kt)("p",null,"Then we can do"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"add3(add3Object);\n")),(0,l.kt)("p",null,"The spread operator and destructuring is especially useful in\n",(0,l.kt)("em",{parentName:"p"},"destructuring assignment"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const [a, b] = [1, 2];\n\nconsole.log(a); // 1\nconsole.log(b); // 2\n\nconst arr1 = [1, 2, 3, 4, 5];\nconst [c, d, ...rest] = arr1;\n\nconsole.log(c); // 1\nconsole.log(d); // 2\nconsole.log(rest); // [3, 4, 5]\n")),(0,l.kt)("h2",{id:"ugly-pieces-of-javascript"},"Ugly Pieces of JavaScript"),(0,l.kt)("h3",{id:"truthy-falsy"},"Truthy, falsy"),(0,l.kt)("p",null,"JavaScript values can be classified into 'truthy' and 'falsy'. Of course, ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\nis truthy and false is ",(0,l.kt)("inlineCode",{parentName:"p"},"falsy"),". Most values are truthy, except:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"''")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{}")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"null")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"undefined")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NaN"))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"if")," guard in JavaScript checks whether a value is truthy rather than\nwhether the value is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),". Similar mechanism applies to ",(0,l.kt)("inlineCode",{parentName:"p"},"&&")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"||"),".\nTherefore, we have"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'' && 'haha'")," evaluates to ",(0,l.kt)("inlineCode",{parentName:"li"},"''")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'haha' || ''")," evaluates to ",(0,l.kt)("inlineCode",{parentName:"li"},"'haha'"),".")),(0,l.kt)("h3",{id:"global-variables"},"Global variables"),(0,l.kt)("p",null,"You were told because that there are only one way to define a variable before\nES6: ",(0,l.kt)("inlineCode",{parentName:"p"},"var"),". This is a white lie. You can actually define a variable without\n",(0,l.kt)("inlineCode",{parentName:"p"},"var"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"let"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"const"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"foo = 3;\n")),(0,l.kt)("p",null,"If you do this, then you just define a ",(0,l.kt)("strong",{parentName:"p"},"global variable"),". It means you can use\nthe variable ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," everywhere. If you have a local variable, then you might\naccidentally use or override it with the wrong value."),(0,l.kt)("p",null,"Lessons learned: never use or define global variables."),(0,l.kt)("h3",{id:"type-coercion"},"Type coercion"),(0,l.kt)("p",null,"Like most languages, JavaScript coerces types to better suit the operations\nthat are being applied."),(0,l.kt)("h4",{id:"example-1"},"Example 1"),(0,l.kt)("p",null,"If we execute ",(0,l.kt)("inlineCode",{parentName:"p"},"true + false")," we get 1. This is because there is an\naddition operator, and ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," gets coerced to 1 while ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"\xa0gets coerced to 0."),(0,l.kt)("h4",{id:"example-2"},"Example 2"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"{} + [] + {} + [1]")," returns ",(0,l.kt)("inlineCode",{parentName:"p"},"0[object Object]1")," because ",(0,l.kt)("inlineCode",{parentName:"p"},"{} + []"),"\ngets evaluated to 0, ",(0,l.kt)("inlineCode",{parentName:"p"},"{}")," gets evaluated to ","[object Object]",", and they both get\ncoerced to strings. Then, adding a list to a string simply adds the contents of\nthe list to the string, so 1 gets appended to the end."),(0,l.kt)("h4",{id:"example-3"},"Example 3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const zero = +[]; // + coerce [] into 0\nconst one = +!![]; // ! coerce [] into false, got inverted, then coerce to 1\nconst two = +!![] + +!![]; // 2 = 1 + 1\n\nconst fib2 = (__) =>\n  __ === zero || __ === one ? __ : fib2(__ - one) + fib2(__ - two);\n")),(0,l.kt)("p",null,"This is the Fibonacci sequence implemented using type coercion."),(0,l.kt)("h2",{id:"why-linters-are-necessary"},"Why Linters Are Necessary"),(0,l.kt)("p",null,"You have just learned some darkest aspects of JavaScript. We must use it because\nit's the only language that can be understood by browser. To mitigate the\nproblem, people wrote ",(0,l.kt)("em",{parentName:"p"},"linters")," that try to automatically find these problems.\nThey are well integrated with editors so you can directly see the warnings. If\nyou follow the 'Setup your editor' section, you are good to go. You will see\nwarnings when you accidentally write some wrong code."),(0,l.kt)("h2",{id:"resources"},"Resources"),(0,l.kt)("p",null,"I recommend the ",(0,l.kt)("em",{parentName:"p"},"You Don't Know JS")," series by Kyle Simpson. The ebooks are\navailable ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/getify/You-Dont-Know-JS/tree/1st-ed"},"for free on GitHub"),".\nThe series is comprehensive and will teach you everything you want to know."),(0,l.kt)("p",null,"Additionally, the ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/"},"MDN Web Docs")," are a great\nresource for quickly looking up the documentation for various features in Javascript, complete with examples."),(0,l.kt)("h3",{id:"javascript"},"JavaScript"),(0,l.kt)("p",null,"We mentioned Mozilla Developer Network as a site for documentation about the JavaScript language, but it's also a great way to get familiar with the language."),(0,l.kt)("p",null,"Here is their JavaScript guide: ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"},"JavaScript Guide - JavaScript | MDN (mozilla.org)")),(0,l.kt)("p",null,"It's a bit long, so I recommend skimming through the first few parts, up to and including the Objects section (",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects"},"Working with objects - JavaScript | MDN (mozilla.org)"),")."),(0,l.kt)("p",null,"JavaScript objects will show up a good amount in this course, so make sure you understand the basics!"),(0,l.kt)("h3",{id:"typescript"},"TypeScript"),(0,l.kt)("p",null,"The official TypeScript website is a great resource to get familiar with the language. There are different guides that assume different programming backgrounds. Choose the article that best suits your background."),(0,l.kt)("p",null,"Take a look at the Get Started section here: ",(0,l.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/"},"TypeScript: The starting point for learning TypeScript (typescriptlang.org)")),(0,l.kt)("p",null,"If you've gone through the MDN JavaScript guide, fill in your TypeScript knowledge with this: ",(0,l.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"},"TypeScript: Documentation - TypeScript for JavaScript Programmers (typescriptlang.org)")),(0,l.kt)("p",null,"There is also a Handbook that you can chug through if interested (not necessary at all): ",(0,l.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/intro.html"},"TypeScript: Handbook - The TypeScript Handbook (typescriptlang.org)")),(0,l.kt)("p",null,"Hope this is helpful for you all! This will be the language you'll be working with all-semester, so being comfortable with the language will pay off."),(0,l.kt)("h2",{id:"demo-code"},"Demo Code"),(0,l.kt)("p",null,"Need more examples? This code from last year's lecture's live coding demo rewrites\nsome functions from the preassessment first using loops then with map, filter,\nand reduce."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},"// getSqrts: takes in an array and returns an array with all the square roots\n// of those numbers\n// example: [1, 4, 9] => [1, 2, 3]\nconst getSqrts = (arr: number[]): number[] => {\n  const result: number[] = [];\n  for (const num of arr) {\n    result.push(Math.sqrt(num));\n  }\n  return result;\n};\nconst getSqrtsMap = (arr: number[]): number[] => {\n  return arr.map(Math.sqrt);\n};\n\n// perfectSquares: takes in an array and returns an array with only the\n// elements that are perfect squares\n// example: [1, 2, 3] => [1]\nconst perfectSquares = (arr: number[]): number[] => {\n  const result: number[] = [];\n  for (const num of arr) {\n    if (Math.sqrt(num) % 1 === 0) {\n      result.push(num);\n    }\n  }\n  return result;\n};\nconst isPerfectSquare = (num: number) => Math.sqrt(num) % 1 === 0;\nconst perfectSquaresFilter = (arr: number[]): number[] => {\n  return arr.filter(isPerfectSquare);\n};\n\n// mySum: takes in an array and returns the sum of the elements\n// example: [1, 2, 3] => 6\nconst mySum = (arr: number[]): number => {\n  let sum = 0;\n  for (const num of arr) {\n    sum += num;\n  }\n  return sum;\n};\nconst mySumReduce = (arr: number[]): number => {\n  return arr.reduce((acc: number, curr: number) => acc + curr);\n};\n\n// testing!\nconst input = [1, 2, 3];\nconsole.log(getSqrts(input));\nconsole.log(getSqrtsMap(input));\nconsole.log(perfectSquares(input));\nconsole.log(perfectSquaresFilter(input));\nconsole.log(mySum(input));\nconsole.log(mySumReduce(input));\n")))}d.isMDXComponent=!0},3206:function(e,n,t){function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},a.apply(this,arguments)}t.d(n,{Z:function(){return a}})},5421:function(e,n,t){function a(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}t.d(n,{Z:function(){return a}})}}]);