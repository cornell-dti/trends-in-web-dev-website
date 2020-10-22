(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{54:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return l}));var a=t(1),r=t(6),o=(t(0),t(98)),i={id:"assignment3",title:"Assignment 3"},c={unversionedId:"assignment3",id:"version-2020fa/assignment3",isDocsHomePage:!1,title:"Assignment 3",description:"For this assignment, we will be taking a nice break from Express and Firebase to learn about some cool JavaScript fundamentals!",source:"@site/versioned_docs/version-2020fa/assignment3.md",slug:"/assignment3",permalink:"/docs/assignment3",version:"2020fa",sidebar:"docs",previous:{title:"Assignment 2",permalink:"/docs/assignment2"},next:{title:"Assignment 4",permalink:"/docs/assignment4"}},b=[{value:"Question 1",id:"question-1",children:[]},{value:"Question 2",id:"question-2",children:[]},{value:"Question 3",id:"question-3",children:[]},{value:"Question 4",id:"question-4",children:[]},{value:"Submission",id:"submission",children:[]}],s={rightToc:b};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"For this assignment, we will be taking a nice break from Express and Firebase to learn about some cool JavaScript fundamentals!"),Object(o.b)("p",null,"ALL questions in this assignment MUST be done using ",Object(o.b)("inlineCode",{parentName:"p"},".map"),", ",Object(o.b)("inlineCode",{parentName:"p"},".filter"),", or ",Object(o.b)("inlineCode",{parentName:"p"},".reduce"),". We will give you no credit for an approach that is not functional."),Object(o.b)("p",null,"ALL functions must also be defined using ",Object(o.b)("strong",{parentName:"p"},"arrow functions"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"(params) => {\n  // function body\n};\n")),Object(o.b)("p",null,"You must write your functions from the starter code. You are not allowed to change the function signature."),Object(o.b)("h2",{id:"question-1"},"Question 1"),Object(o.b)("p",null,"Write a function, ",Object(o.b)("inlineCode",{parentName:"p"},"myMean"),", that takes in an array of numbers and returns the mean."),Object(o.b)("p",null,"Starter code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export const myMean = (array: number[]): number => {\n  /* TODO: add your code */\n};\n")),Object(o.b)("h2",{id:"question-2"},"Question 2"),Object(o.b)("p",null,"Write a function, ",Object(o.b)("inlineCode",{parentName:"p"},"getPrimes"),", that takes in an array of numbers and returns a new array containing only the elements that are primes.\nReminder: prime numbers are natural numbers larger than 1 that can only be divisible by itself and 1. Don't worry about efficiency! It's ok to brute force this :)"),Object(o.b)("p",null,"Example: ",Object(o.b)("inlineCode",{parentName:"p"},"getPrimes([1, 5, 16, 3])")," should return ",Object(o.b)("inlineCode",{parentName:"p"},"[5, 3]"),"."),Object(o.b)("p",null,"Starter code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export const getPrimes = (array: number[]): number[] => {\n  /* TODO: add your code */\n};\n")),Object(o.b)("h2",{id:"question-3"},"Question 3"),Object(o.b)("p",null,"Write a function, ",Object(o.b)("inlineCode",{parentName:"p"},"partition"),", that takes in an array of numbers and a function ",Object(o.b)("inlineCode",{parentName:"p"},"belongToGroup1"),", and returns an object of two arrays ",Object(o.b)("inlineCode",{parentName:"p"},"group1")," and ",Object(o.b)("inlineCode",{parentName:"p"},"group2"),"."),Object(o.b)("p",null,"If ",Object(o.b)("inlineCode",{parentName:"p"},"belongToGroup1")," returns ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", then the element should go into ",Object(o.b)("inlineCode",{parentName:"p"},"group1"),". If ",Object(o.b)("inlineCode",{parentName:"p"},"belongToGroup1")," returns ",Object(o.b)("inlineCode",{parentName:"p"},"false"),", then the element should go into ",Object(o.b)("inlineCode",{parentName:"p"},"group2"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"EXAMPLE")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"partition([1, 2, 3, 4, 5, 6], (n) => n % 3 === 0); // { group1: [3, 6], [1, 2, 4, 5] }\npartition([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0); // { group1: [2, 4, 6], [1, 3, 5] }\n")),Object(o.b)("p",null,"Starter code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export const partition = (\n  array: number[],\n  belongToGroup1: (element: number) => boolean\n): { group1: number[]; group2: number[] } => {\n  /* TODO: add your code */\n};\n")),Object(o.b)("h2",{id:"question-4"},"Question 4"),Object(o.b)("p",null,'Write a function, makeSentences, that takes in an array of objects\nin the format {name: string, age: number, breed: string} and maps it to an array of sentences\nin the format "',Object(o.b)("em",{parentName:"p"},"name")," is ",Object(o.b)("em",{parentName:"p"},"age")," years old, and is a ",Object(o.b)("em",{parentName:"p"},"breed"),'."'),Object(o.b)("p",null,"Please use ",Object(o.b)("em",{parentName:"p"},"object destructuring")," to get object fields."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE")),Object(o.b)("p",null,'A "prototype" is an instance of an object in JavaScript/TypeScript. In documentation, methods are often denoted like:\n',Object(o.b)("inlineCode",{parentName:"p"},"Type.prototype.method()")),Object(o.b)("p",null,"Remember, anything in JavaScript/TypeScript can be an object!"),Object(o.b)("p",null,"So, we can do: ",Object(o.b)("inlineCode",{parentName:"p"},"5.toExponential(10)")," or ",Object(o.b)("inlineCode",{parentName:"p"},"let x = 5; x.toExponential()")),Object(o.b)("p",null,'Your goal is to display "5 years" for the value 5.6'),Object(o.b)("p",null,"Take a look at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#Methods"}),"this documentation")," and choose an appropriate method to use!"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"EXAMPLE")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const doggos = [\n  { name: 'Sparky', age: 3.3, breed: 'Pomeranian Husky' },\n  { name: 'Oreo', age: 5.4, breed: 'Dalmatian' },\n  { name: 'Stella', age: 4.3, breed: 'Alaskan Klee Kai' },\n];\n\nmakeSentences(doggos);\n")),Object(o.b)("p",null,"should output"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"[\n  'Sparky is 3 years old and is a Pomeranian Husky',\n  'Oreo is 5 years old and is a Dalmatian',\n  'Stella is 4 years old and is a Alaskan Klee Kai',\n];\n")),Object(o.b)("p",null,"Starter code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// TODO: You should replace this any with an accurate object type in your submission!\ntype Doggo = any;\n\nexport const makeSentences = (array: Doggo[]): string[] => {\n  /* TODO: add your code */\n};\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},'Optional Challenge: In English, "a" becomes "an" before vowels. Create a function such that makeCorrectSentences(doggos) correctly handles this case.')),Object(o.b)("h2",{id:"submission"},"Submission"),Object(o.b)("p",null,"Please submit to CMS your ",Object(o.b)("inlineCode",{parentName:"p"},"index.ts")," file containing your implementations of each of the functions described above."))}l.isMDXComponent=!0},98:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),l=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return t?r.a.createElement(d,c(c({ref:n},s),{},{components:t})):r.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var b in n)hasOwnProperty.call(n,b)&&(c[b]=n[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);