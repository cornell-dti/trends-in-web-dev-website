(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(7),o=(n(0),n(128)),i={id:"assignment1",title:"Assignment 1"},s={unversionedId:"assignment1",id:"version-2021sp/assignment1",isDocsHomePage:!1,title:"Assignment 1",description:"For the first assignment, you will be setting up a basic server with 3 simple GET endpoints.",source:"@site/versioned_docs/version-2021sp/assignment1.md",slug:"/assignment1",permalink:"/docs/assignment1",version:"2021sp",sidebar:"docs",previous:{title:"Assignments",permalink:"/docs/assignments"},next:{title:"Assignment 2",permalink:"/docs/assignment2"}},p=[{value:"Set up your project",id:"set-up-your-project",children:[]},{value:"Endpoints",id:"endpoints",children:[{value:"1. Simple URL",id:"1-simple-url",children:[]},{value:"2. Query Parameters",id:"2-query-parameters",children:[]},{value:"3. Route Parameters",id:"3-route-parameters",children:[]}]},{value:"Testing your code",id:"testing-your-code",children:[]},{value:"Submission",id:"submission",children:[]},{value:"FAQ",id:"faq",children:[{value:"Does case-sensitivity matter for the <code>/book</code> query parameter?",id:"does-case-sensitivity-matter-for-the-book-query-parameter",children:[]},{value:"What&#39;s the difference between a route and query parameter?",id:"whats-the-difference-between-a-route-and-query-parameter",children:[]},{value:"Two endpoints for the same path?!?!? What&#39;s going on?",id:"two-endpoints-for-the-same-path-whats-going-on",children:[]},{value:"I still need help. Where should I go?",id:"i-still-need-help-where-should-i-go",children:[]}]}],l={toc:p};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"For the first assignment, you will be setting up a basic server with 3 simple GET endpoints."),Object(o.b)("h2",{id:"set-up-your-project"},"Set up your project"),Object(o.b)("p",null,"First, let's set up your first Node project!"),Object(o.b)("p",null,"To create a project, first make a folder for your assignment code using ",Object(o.b)("inlineCode",{parentName:"p"},"mkdir a1")," in terminal and change into that directory with ",Object(o.b)("inlineCode",{parentName:"p"},"cd a1"),". You can then use the command ",Object(o.b)("inlineCode",{parentName:"p"},"code .")," to open that folder in VSCode (install VSCode ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://code.visualstudio.com/"}),"here"),"). You can also just open it in VSCode from the application directly."),Object(o.b)("p",null,"Set up the yarn project by running ",Object(o.b)("inlineCode",{parentName:"p"},"yarn init -y")," in that ",Object(o.b)("inlineCode",{parentName:"p"},"a1")," folder. Add the necessary dependencies: ",Object(o.b)("inlineCode",{parentName:"p"},"express"),", ",Object(o.b)("inlineCode",{parentName:"p"},"typescript"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ts-node"),", ",Object(o.b)("inlineCode",{parentName:"p"},"@types/node"),", ",Object(o.b)("inlineCode",{parentName:"p"},"@types/express")," by running:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn init -y\nyarn add express\nyarn add --dev typescript ts-node @types/express\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Check out ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/lecture2"}),"Lecture 2")," for more details on how this setup works!"))),Object(o.b)("p",null,"Now you can create an ",Object(o.b)("inlineCode",{parentName:"p"},"index.ts")," file to add your routes and assignment code in."),Object(o.b)("h2",{id:"endpoints"},"Endpoints"),Object(o.b)("h3",{id:"1-simple-url"},"1. Simple URL"),Object(o.b)("p",null,"The first endpoint will be a simple ",Object(o.b)("inlineCode",{parentName:"p"},"GET")," request to ",Object(o.b)("inlineCode",{parentName:"p"},"/book"),". You will send your favorite book's name to the frontend."),Object(o.b)("h3",{id:"2-query-parameters"},"2. Query Parameters"),Object(o.b)("p",null,"The second endpoint will be a ",Object(o.b)("inlineCode",{parentName:"p"},"GET")," request to ",Object(o.b)("inlineCode",{parentName:"p"},"/book")," with a query parameter called ",Object(o.b)("inlineCode",{parentName:"p"},"name"),'. If the name is "Peter", you will return "Cracking the Coding Interview". If the name is "Becky", you will return "The Pragmatic Programmer". Otherwise, return the name of any book you choose!'),Object(o.b)("p",null,"Example: a request to ",Object(o.b)("inlineCode",{parentName:"p"},"/book?name=peter"),' will return "Cracking the Coding Interview."'),Object(o.b)("p",null,"P.S. Don't worry, these aren't actually our favorite books."),Object(o.b)("h3",{id:"3-route-parameters"},"3. Route Parameters"),Object(o.b)("p",null,"The third endpoint will be a ",Object(o.b)("inlineCode",{parentName:"p"},"GET")," request to ",Object(o.b)("inlineCode",{parentName:"p"},"/book/:userid"),'. This will simply send "',Object(o.b)("inlineCode",{parentName:"p"},"userid"),' is really cool!" to the frontend.'),Object(o.b)("p",null,"Example: a request to ",Object(o.b)("inlineCode",{parentName:"p"},"/book/peter"),' will send "peter is really cool!" to the frontend.'),Object(o.b)("h2",{id:"testing-your-code"},"Testing your code"),Object(o.b)("p",null,"To test your code, run ",Object(o.b)("inlineCode",{parentName:"p"},"ts-node index.ts"),". Your server should be up and running (if not, debug!) and you should be able to navigate to ",Object(o.b)("inlineCode",{parentName:"p"},"localhost:<PORT>/book")," where PORT is the port number express is listening for requests on (we usually use ",Object(o.b)("inlineCode",{parentName:"p"},"8080"),") and specify query/path parameters that give the intended results."),Object(o.b)("h2",{id:"submission"},"Submission"),Object(o.b)("p",null,"Please submit to CMS the ",Object(o.b)("inlineCode",{parentName:"p"},"index.ts")," file in which you've defined your routes by ",Object(o.b)("strong",{parentName:"p"},"Thursday 3/11 at 3:59pm"),". You are allowed max 3 slip days (out of 6 total for all assignments and the final project) per an assignment."),Object(o.b)("h2",{id:"faq"},"FAQ"),Object(o.b)("h3",{id:"does-case-sensitivity-matter-for-the-book-query-parameter"},"Does case-sensitivity matter for the ",Object(o.b)("inlineCode",{parentName:"h3"},"/book")," query parameter?"),Object(o.b)("p",null,"We won't discount you for this when grading, but when it comes to implementing\nthings like this as a software engineer, it's up to you to make the best possible\ndesign decision!"),Object(o.b)("h3",{id:"whats-the-difference-between-a-route-and-query-parameter"},"What's the difference between a route and query parameter?"),Object(o.b)("p",null,"Query parameters come after a ",Object(o.b)("inlineCode",{parentName:"p"},"?")," in a route. For example: with ",Object(o.b)("inlineCode",{parentName:"p"},"/books?name=Megan"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Megan"),"' would be in ",Object(o.b)("inlineCode",{parentName:"p"},"req.query.name"),". We could make the query parameter name anything we\nwant, from ",Object(o.b)("inlineCode",{parentName:"p"},"id")," to ",Object(o.b)("inlineCode",{parentName:"p"},"pizza")," and we could access it through ",Object(o.b)("inlineCode",{parentName:"p"},"req.query.paramName"),"."),Object(o.b)("p",null,"Route parameters are an actual part of the route and come after a ",Object(o.b)("inlineCode",{parentName:"p"},":"),". For example: with ",Object(o.b)("inlineCode",{parentName:"p"},"/books/:userid"),", in the request ",Object(o.b)("inlineCode",{parentName:"p"},"/books/Megan"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'Megan'")," would be in ",Object(o.b)("inlineCode",{parentName:"p"},"req.params.userid"),"."),Object(o.b)("h3",{id:"two-endpoints-for-the-same-path-whats-going-on"},"Two endpoints for the same path?!?!? What's going on?"),Object(o.b)("p",null,"This is allowed and not a typo. While you might need to make two endpoints if you need to handle a route's path parameters (say ",Object(o.b)("inlineCode",{parentName:"p"},"/users")," and and ",Object(o.b)("inlineCode",{parentName:"p"},"/users/:id"),"), think about what the query parameters would be from visiting route ",Object(o.b)("inlineCode",{parentName:"p"},"/book")," rather than ",Object(o.b)("inlineCode",{parentName:"p"},"/book?name=megan"),", and see if you can consolidate the logic into just one endpoint: ",Object(o.b)("inlineCode",{parentName:"p"},"req.query.name")," will have some kind of value no matter what, even if you don't pass in a query parameter value."),Object(o.b)("p",null,"Extra aside: you might have heard of REST APIs: they all follow certain design principles that allow developers to know what to expect based on an abstract specification of what the API routes do. Generally, REST APIs use path params to identify a specific resource, and query params to filter those resources."),Object(o.b)("h3",{id:"i-still-need-help-where-should-i-go"},"I still need help. Where should I go?"),Object(o.b)("p",null,"Check out the office hours schedule on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/introduction#when-are-office-hours"}),"our syllabus"),". In addition, you can join the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://edstem.org/us/courses/4868/discussion/"}),"Ed")," and post your question."))}c.isMDXComponent=!0},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),c=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);