"use strict";(self.webpackChunktrends_in_web_dev_website=self.webpackChunktrends_in_web_dev_website||[]).push([[1946],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7753:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"lecture5",title:"Lecture 5"},s=void 0,p={unversionedId:"lecture5",id:"version-2024fa/lecture5",isDocsHomePage:!1,title:"Lecture 5",description:"Lecture Slides",source:"@site/versioned_docs/version-2024fa/lecture5.md",sourceDirName:".",slug:"/lecture5",permalink:"/docs/lecture5",tags:[],version:"2024fa",frontMatter:{id:"lecture5",title:"Lecture 5"},sidebar:"docs",previous:{title:"Frontend / Unit 2",permalink:"/docs/unit2"},next:{title:"Lecture 6",permalink:"/docs/lecture6"}},c=[{value:"Data Fetching",id:"data-fetching",children:[{value:"HTTP Requests and Responses",id:"http-requests-and-responses",children:[{value:"Requests",id:"requests",children:[],level:4},{value:"Responses",id:"responses",children:[{value:"Most common response codes:",id:"most-common-response-codes",children:[],level:5}],level:4}],level:3},{value:"How do we fetch (in React)?",id:"how-do-we-fetch-in-react",children:[],level:3},{value:"Fetching Example",id:"fetching-example",children:[],level:3},{value:"<code>fetch</code>",id:"fetch",children:[],level:3},{value:"Promises",id:"promises",children:[{value:"<code>.then()</code>",id:"then",children:[],level:4},{value:"<code>.catch()</code>",id:"catch",children:[],level:4},{value:"Using <code>.then()</code> with <code>fetch()</code>",id:"using-then-with-fetch",children:[],level:4}],level:3},{value:"async/await",id:"asyncawait",children:[],level:3},{value:"Quick Postman Demo",id:"quick-postman-demo",children:[],level:3}],level:2},{value:"Live Demo Material",id:"live-demo-material",children:[],level:2}],u={toc:c};function d(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/16nc6c2WxaoXXrBEbV2tFSeNKa87JjlONM11ZoqovcTo/edit?usp=sharing"},"Lecture Slides")),(0,o.kt)("h2",{id:"data-fetching"},"Data Fetching"),(0,o.kt)("p",null,"Data fetching is ",(0,o.kt)("strong",{parentName:"p"},"getting information (data) from an outside source (e.g. REST API)")),(0,o.kt)("p",null,"In this lecture we'll be discussing how to fetch data through traditional HTTP\nrequests (so far the most popular way), but keep in mind that there are other\nways to fetch data out there, which we will cover later."),(0,o.kt)("h3",{id:"http-requests-and-responses"},"HTTP Requests and Responses"),(0,o.kt)("p",null,"So far, the information we've talked about has been mostly about the client side of a web application. Clients are computers users use to access our web applications (phones, tablets, laptops, gaming consoles, etc). Client side refers to the ",(0,o.kt)("strong",{parentName:"p"},"processing that takes place locally")," on the user's machine where the client can see the results. So, tasks that requires browsers to run scripes on the client machine without involving any processing on the server are client side tasks. Examples of client side operations are rendering images, registering user input, or clicking buttons."),(0,o.kt)("p",null,"In the final half of he course, we will be talking about the server side of a web application. Servers are also computers, however servers centralize information and run code to communicate with multiple clients in addition to executing operations on data. So, server side refers to the processing that is ",(0,o.kt)("strong",{parentName:"p"},"not visible")," to the client and is done on the server. So, tasks such as validating submitted data and requests, storing and retrieving data from databases, and sending corrent data to the client are all examples of server side operations."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"client server model",src:n(1961).Z})),(0,o.kt)("h4",{id:"requests"},"Requests"),(0,o.kt)("p",null,"HTTP requests require one method that indicates the type of request being sent and how to handle the request. The most common methods used are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"GET")),": retrieving information"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"POST")),": sending information with the request"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"DELETE")),": deleting information"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"PUT/PATCH"))," updating information")),(0,o.kt)("p",null,"Metadata can be put in the ",(0,o.kt)("em",{parentName:"p"},"body")," of a request and can be written in many forms (most common is JSON or XML). For example, a ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," request to login into a users' account will likely contain account information such as an email and pasword to be authenticated on the server in the body."),(0,o.kt)("p",null,"Tools like ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/"},"Postman")," allow you to make these requests. So, if you're ever building a backend server, you can test that your API routes are working."),(0,o.kt)("h4",{id:"responses"},"Responses"),(0,o.kt)("p",null,"After sending a HTTP request, the server will respond with a specific status code to give us a general summary of how the request was handled. This helps us determine whether a request was successful or why it was unsuccessful."),(0,o.kt)("h5",{id:"most-common-response-codes"},"Most common response codes:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Code"),(0,o.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"200"),(0,o.kt)("td",{parentName:"tr",align:null},"Successful")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"404"),(0,o.kt)("td",{parentName:"tr",align:null},"Not found")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"500"),(0,o.kt)("td",{parentName:"tr",align:null},"Internal server error (uncaught exception)")))),(0,o.kt)("p",null,"For a more comprehensive list, click ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"},"here"),"."),(0,o.kt)("h3",{id:"how-do-we-fetch-in-react"},"How do we fetch (in React)?"),(0,o.kt)("p",null,"So how do we fetch data with our React frontend?"),(0,o.kt)("p",null,"Two important things to note:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Modern browsers have a nifty little JavaScript function called ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch")," that\nyou can use to call API endpoints. Libraries such as ",(0,o.kt)("inlineCode",{parentName:"p"},"axios")," provide similar\nfunctionality. There are also libraries like ",(0,o.kt)("inlineCode",{parentName:"p"},"swr")," that provide easy ways to\nre-fetch resources automatically.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," React hook allows you to trigger side effects, such as\nfetching data!"))),(0,o.kt)("p",null,"We want to keep track of our data in our component state, and use hooks like\n",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch")," the data and update the state accordingly!"),(0,o.kt)("h3",{id:"fetching-example"},"Fetching Example"),(0,o.kt)("p",null,"Consider this snippet of code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// This corresponds to the type of data you expect to get back in your response\ntype DataType = readonly string[];\n\nconst App = () => {\n  const [data, setData] = useState<DataType>([]);\n\n  useEffect(() => {\n    fetch(`${API}`)\n      .then((res) => res.json())\n      .then((d) => setData(d));\n  });\n  // ... other methods, return, etc\n};\n")),(0,o.kt)("p",null,"Here are the important parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We have ",(0,o.kt)("inlineCode",{parentName:"li"},"data")," in our component state. Later, we call ",(0,o.kt)("inlineCode",{parentName:"li"},"setData")," on what the\nbackend sends to us."),(0,o.kt)("li",{parentName:"ul"},"We declare a type definition for the ",(0,o.kt)("inlineCode",{parentName:"li"},"useState")," call so that TS knows the type\nof data we're working with. (It can't infer type from an empty array!)"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"useEffect")," hook is used to subscribe to new data."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fetch(...)")," is called on an API link, followed by ",(0,o.kt)("inlineCode",{parentName:"li"},".then(...)")," calls that\nformat the response into json and then ",(0,o.kt)("inlineCode",{parentName:"li"},"setData")," to the response. The\n",(0,o.kt)("inlineCode",{parentName:"li"},".then()")," calls exist because ",(0,o.kt)("inlineCode",{parentName:"li"},"fetch()")," returns a ",(0,o.kt)("inlineCode",{parentName:"li"},"Promise")," (this is explained\nbelow)")),(0,o.kt)("p",null,"Let's take a deeper look at ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch"),"!"),(0,o.kt)("h3",{id:"fetch"},(0,o.kt)("inlineCode",{parentName:"h3"},"fetch")),(0,o.kt)("p",null,'"stop trying to make fetch happen \ud83d\udc67"'),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"fetch(resource, [init])")," is a native browser function for making web requests."),(0,o.kt)("p",null,"Its params are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"resource"),": URL of the site you are fetching from"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"init"),": ",(0,o.kt)("em",{parentName:"li"},"optional")," object containing any custom settings you want to apply to\nthe request.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"fetch(\n  url,\n  // your init object might look like this\n  {\n    // HTTP request method\n    method: 'GET', // | 'POST' | 'PUT' | 'DELETE' | etc\n    // Any request headers you want to add\n    headers: {\n      'content-type': 'application/json',\n    },\n    // Request body (remember to stringify!)\n    body: JSON.stringify(requestBody),\n    // ... other settings\n  },\n);\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For more on the init object, refer to\n",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"},"this link"),"!")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"IMPORTANT: fetch() returns a PROMISE!")),(0,o.kt)("h3",{id:"promises"},"Promises"),(0,o.kt)("p",null,"Operations like web requests don't complete instantly! So, while the request is being completed, you want the browser to work on other more important tasks instead of stalling everything and waiting until the operation is complete."),(0,o.kt)("p",null,"Promises represent the ",(0,o.kt)("strong",{parentName:"p"},"eventual")," completion (or failure) of an async operation. What does async mean?"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"async"),": the result arrives at an unspecified time, outside the sequential execution context of the rest of your code"),(0,o.kt)("p",null,"Promises are in one of three possible states:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pending"),": initial state; neither fulfilled nor rejected"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fulfilled"),": operation completed successfully"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rejected"),": operation failed")),(0,o.kt)("h4",{id:"then"},(0,o.kt)("inlineCode",{parentName:"h4"},".then()")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},".then()")," is a function on Promises that return a promise."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"p.then(onFulfilled, onRejected);\n")),(0,o.kt)("p",null,"Let's break this down!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"p")," is a Promise."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"onFulfilled")," is the callback function that is run when ",(0,o.kt)("inlineCode",{parentName:"li"},"p")," is fulfilled"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"onRejected")," (OPTIONAL) is the callback function for when ",(0,o.kt)("inlineCode",{parentName:"li"},"p")," is rejected")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"p.then(\n  (value) => {\n    // fulfullment handler\n    console.log('Success');\n  },\n  (reason) => {\n    // rejection handler\n    console.log('Rejected');\n  },\n);\n")),(0,o.kt)("p",null,"You don't usually have to include an rejection handler since the ",(0,o.kt)("inlineCode",{parentName:"p"},".catch()")," method is an alternative you will typically use to handle rejections and errors. More on that later..."),(0,o.kt)("p",null,"Let's talk about types! ",(0,o.kt)("inlineCode",{parentName:"p"},"p")," in this case might be ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch()"),", which returns the\ntype ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise<Response>"),". If so, then ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," would have the type ",(0,o.kt)("inlineCode",{parentName:"p"},"Response"),".\nThen, if the fulfillment handler (which takes in ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),") returns type\n",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", then the entire expression would be type ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise<String>"),"."),(0,o.kt)("p",null,"If you've taken CS 3110 or done some functional programming outside of this\nclass/category theory, this might make you think of\nMonads/Applicatives/Functors. The specified behavior for ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"s in JS/TS\ndon't exactly follow the laws of what was just listed, but for learning purposes\nit may be helpful to roughly compare the ",(0,o.kt)("inlineCode",{parentName:"p"},"then")," function to ",(0,o.kt)("inlineCode",{parentName:"p"},"fmap")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"bind"),"."),(0,o.kt)("p",null,"If you're interested, take a look at this snippet and notice how the types\nbehave:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// promise: Promise<Response>\nconst promise = fetch('something');\n\n// kindaFunctor: (res: Response) => number\nconst kindaFunctor = (res: Response) => res.status;\n\n// kindaMonad: (res: Response) => Promise<string>\nconst kindaMonad = (res: Response) => res.text();\n\n// newPromise1: Promise<number>\nconst newPromise1 = promise.then(kindaFunctor);\n\n// newPromise2: Promise<string>\nconst newPromise2 = promise.then(kindaMonad);\n")),(0,o.kt)("h4",{id:"catch"},(0,o.kt)("inlineCode",{parentName:"h4"},".catch()")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},".catch()")," is a function on Promises that catches a rejection."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"p.catch(onRejected);\n")),(0,o.kt)("p",null,"For example, you might want to ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log")," errors:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"fetch(`https://jsonplaceholder.typicode.com/posts`)\n  .then(...)\n  .catch((err) => console.log(err));\n")),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"onRejected")," takes a parameter of type ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),", since we don't know the\ntype of the error we will get."),(0,o.kt)("h4",{id:"using-then-with-fetch"},"Using ",(0,o.kt)("inlineCode",{parentName:"h4"},".then()")," with ",(0,o.kt)("inlineCode",{parentName:"h4"},"fetch()")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"fetch()")," returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," that resolves to a ",(0,o.kt)("inlineCode",{parentName:"p"},"Response")," object."),(0,o.kt)("p",null,"Consider this snippet, similar to one shown above:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"fetch(`https://jsonplaceholder.typicode.com/posts`)\n  .then((res) => res.json())\n  .then((d) => setData(d))\n  .catch((err) => console.log(err));\n")),(0,o.kt)("p",null,"We can have multiple ",(0,o.kt)("inlineCode",{parentName:"p"},".then()")," calls within each other! Here we are getting the response from an endpoint ",(0,o.kt)("strong",{parentName:"p"},"and then")," calling ",(0,o.kt)("inlineCode",{parentName:"p"},".json()"),"\non the response ",(0,o.kt)("strong",{parentName:"p"},"and then")," calling ",(0,o.kt)("inlineCode",{parentName:"p"},"setData")," on the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"json()"),"."),(0,o.kt)("p",null,"If a promise gets rejected anywhere along this chain, we will log the error in\nour console."),(0,o.kt)("h3",{id:"asyncawait"},"async/await"),(0,o.kt)("p",null,"If you have too many ",(0,o.kt)("inlineCode",{parentName:"p"},".then()")," calls within each other, you might build a\nPYRAMID OF DOOM \u2620."),(0,o.kt)("p",null,"By adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," keyword to a function, we make it an ",(0,o.kt)("em",{parentName:"p"},"asynchronous"),"\nfunction. Within ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," functions, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," keyword to wait for a\nPromise to return before continuing on to the next statement within the\nfunction."),(0,o.kt)("p",null,"Here is an example of doing equivalent things with either syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const thenCatchExample = () => {\n  fetch(`https://jsonplaceholder.typicode.com/posts`)\n    .then((res) => res.json())\n    .then((d) => setData(d));\n};\n\nconst asyncAwaitExample = async () => {\n  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);\n  const d = await res.json();\n  setData(d);\n};\n")),(0,o.kt)("p",null,"In order to handle rejected Promises using async/await, just wrap all your await\nstatements in a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch"},"try...catch")," block!"),(0,o.kt)("p",null,"Like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"try {\n  asyncAwaitExample();\n} catch (error) {\n  // display any errors that may occur from async/await function\n  console.error(error);\n}\n")),(0,o.kt)("h3",{id:"quick-postman-demo"},"Quick Postman Demo"),(0,o.kt)("p",null,"Check out Postman to send API requests! ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/"},"Here")),(0,o.kt)("h2",{id:"live-demo-material"},"Live Demo Material"),(0,o.kt)("p",null,"You can get the starter code for the live demo by running:\n",(0,o.kt)("inlineCode",{parentName:"p"},'yarn create next-app --typescript --example "https://github.com/cornell-dti/trends-sp24-lec5-demo" YOUR_DIR_NAME')),(0,o.kt)("p",null,"(Replace YOUR_DIR_NAME with whatever you want to name your directory!)"))}d.isMDXComponent=!0},1961:function(e,t,n){t.Z=n.p+"assets/images/client-server-model-d5aec952a3d77702e0793dff7876e9f2.png"}}]);