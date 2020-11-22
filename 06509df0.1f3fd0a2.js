(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,b=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?r.a.createElement(b,s(s({ref:t},l),{},{components:n})):r.a.createElement(b,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},62:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(107)),o={id:"assignment1",title:"Assignment 1"},s={unversionedId:"assignment1",id:"version-2020fa/assignment1",isDocsHomePage:!1,title:"Assignment 1",description:"For the first assignment, you will be setting up a basic server with 3 simple GET endpoints.",source:"@site/versioned_docs/version-2020fa/assignment1.md",slug:"/assignment1",permalink:"/docs/assignment1",version:"2020fa",sidebar:"docs",previous:{title:"Assignments",permalink:"/docs/assignments"},next:{title:"Assignment 2",permalink:"/docs/assignment2"}},c=[{value:"Set up your project",id:"set-up-your-project",children:[]},{value:"Endpoints",id:"endpoints",children:[{value:"1. Simple URL",id:"1-simple-url",children:[]},{value:"2. Query Parameters",id:"2-query-parameters",children:[]},{value:"3. Route Parameters",id:"3-route-parameters",children:[]}]},{value:"Testing your code",id:"testing-your-code",children:[]},{value:"Getting help",id:"getting-help",children:[]},{value:"Submission",id:"submission",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"For the first assignment, you will be setting up a basic server with 3 simple GET endpoints."),Object(i.a)("h2",{id:"set-up-your-project"},"Set up your project"),Object(i.a)("p",null,"First, let's set up your first Node project!"),Object(i.a)("p",null,"To create a project, first make a folder for your assignment code using ",Object(i.a)("inlineCode",{parentName:"p"},"mkdir a1")," in terminal and change into that directory with ",Object(i.a)("inlineCode",{parentName:"p"},"cd a1"),". You can then use the command ",Object(i.a)("inlineCode",{parentName:"p"},"code .")," to open that folder in VSCode (install VSCode ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"https://code.visualstudio.com/"}),"here"),"). You can also just open it in VSCode from the application directly."),Object(i.a)("p",null,"Set up the yarn project by running ",Object(i.a)("inlineCode",{parentName:"p"},"yarn init -y")," in that ",Object(i.a)("inlineCode",{parentName:"p"},"a1")," folder. Add the necessary dependencies ",Object(i.a)("inlineCode",{parentName:"p"},"express"),", ",Object(i.a)("inlineCode",{parentName:"p"},"typescript"),", ",Object(i.a)("inlineCode",{parentName:"p"},"ts-node"),", ",Object(i.a)("inlineCode",{parentName:"p"},"@types/node"),", ",Object(i.a)("inlineCode",{parentName:"p"},"@types/express")," by running:"),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn init -y\nyarn add express\nyarn add --dev typescript ts-node @types/express\n")),Object(i.a)("div",{className:"admonition admonition-info alert alert--info"},Object(i.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.a)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.a)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.a)("p",{parentName:"div"},"Check out ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"/docs/lecture1"}),"lecture1")," for more details on how this setup works!"))),Object(i.a)("p",null,"Now you can create an ",Object(i.a)("inlineCode",{parentName:"p"},"index.ts")," file to add your routes and assignment code in."),Object(i.a)("h2",{id:"endpoints"},"Endpoints"),Object(i.a)("h3",{id:"1-simple-url"},"1. Simple URL"),Object(i.a)("p",null,"The first endpoint will be a simple ",Object(i.a)("inlineCode",{parentName:"p"},"GET")," request to ",Object(i.a)("inlineCode",{parentName:"p"},"/book"),". You will send your favorite book's name to the frontend."),Object(i.a)("h3",{id:"2-query-parameters"},"2. Query Parameters"),Object(i.a)("p",null,"The second endpoint will be a ",Object(i.a)("inlineCode",{parentName:"p"},"GET")," request to ",Object(i.a)("inlineCode",{parentName:"p"},"/book")," with a query parameter called ",Object(i.a)("inlineCode",{parentName:"p"},"name"),'. If the name is "Megan", you will return "Cracking the Coding Interview". If the name is "Ashneel", you will return "The Pragmatic Programmer". Otherwise, return the name of any book you choose!'),Object(i.a)("p",null,"Example: a request to ",Object(i.a)("inlineCode",{parentName:"p"},"/book?name=megan"),' will return "Cracking the Coding Interview."'),Object(i.a)("p",null,"P.S. Don't worry, these aren't actually our favorite books."),Object(i.a)("h3",{id:"3-route-parameters"},"3. Route Parameters"),Object(i.a)("p",null,"The third endpoint will be a ",Object(i.a)("inlineCode",{parentName:"p"},"GET")," request to ",Object(i.a)("inlineCode",{parentName:"p"},"/book/:userid"),'. This will simply send "',Object(i.a)("inlineCode",{parentName:"p"},"userid"),' is really cool!" to the frontend.'),Object(i.a)("p",null,"Example: a request to ",Object(i.a)("inlineCode",{parentName:"p"},"/book/ashneel"),' will send "ashneel is really cool!" to the frontend.'),Object(i.a)("h2",{id:"testing-your-code"},"Testing your code"),Object(i.a)("p",null,"To test your code run ",Object(i.a)("inlineCode",{parentName:"p"},"ts-node index.ts"),". Your server should be up and running (if not, debug!) and you should be able to navigate to ",Object(i.a)("inlineCode",{parentName:"p"},"localhost:<PORT>/book")," where PORT is the port number express is listening for requests on (we usually use ",Object(i.a)("inlineCode",{parentName:"p"},"8080"),") and specify query/path parameters that give the intended results."),Object(i.a)("h2",{id:"getting-help"},"Getting help"),Object(i.a)("p",null,"If you're stuck, we have ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"/docs/introduction#when-are-office-hours"}),"TA office hours")," every week day so feel free to come and ask questions! In addition, you can join the ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"http://piazza.com/cornell/fall2020/info1998section604"}),"Piazza")," and post your question. Please make it public if it's just a general question with no code screenshots, otherwise make it private."),Object(i.a)("h2",{id:"submission"},"Submission"),Object(i.a)("p",null,"Please submit to CMS the ",Object(i.a)("inlineCode",{parentName:"p"},"index.ts")," file where you have defined your routes by ",Object(i.a)("strong",{parentName:"p"},"Tuesday 9/29 at 3:59pm")," although you are allowed max 3 slip days (out of 6 total) per an assignment. (Note: we are still getting CMS set up. If we are unable to have CMS up by Monday, we will notify you of another mode of submission or extend the deadline)"))}p.isMDXComponent=!0}}]);