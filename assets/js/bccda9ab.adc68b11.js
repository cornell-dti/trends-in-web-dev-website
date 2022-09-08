"use strict";(self.webpackChunktrends_in_web_dev_website=self.webpackChunktrends_in_web_dev_website||[]).push([[4204],{7300:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(6687);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return t?a.createElement(f,i(i({ref:n},u),{},{components:t})):a.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2162:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=t(3206),r=t(5421),o=(t(6687),t(7300)),i=["components"],s={id:"assignment1",title:"Assignment 1"},l=void 0,p={unversionedId:"assignment1",id:"version-2022sp/assignment1",isDocsHomePage:!1,title:"Assignment 1",description:"For this assignment, we will be practicing JavaScript/Typescript fundamentals!",source:"@site/versioned_docs/version-2022sp/assignment1.md",sourceDirName:".",slug:"/assignment1",permalink:"/docs/2022sp/assignment1",tags:[],version:"2022sp",frontMatter:{id:"assignment1",title:"Assignment 1"},sidebar:"docs",previous:{title:"Assignments",permalink:"/docs/2022sp/assignments"},next:{title:"Assignment 2",permalink:"/docs/2022sp/assignment2"}},u=[{value:"Question 1",id:"question-1",children:[{value:"Example for myMean",id:"example-for-mymean",children:[],level:3}],level:2},{value:"Question 2",id:"question-2",children:[{value:"Example for affordableHousing",id:"example-for-affordablehousing",children:[],level:3}],level:2},{value:"Question 3",id:"question-3",children:[{value:"Example for evenEven",id:"example-for-eveneven",children:[],level:3}],level:2},{value:"Question 4",id:"question-4",children:[{value:"NOTE",id:"note",children:[],level:3},{value:"Example for makeSentences",id:"example-for-makesentences",children:[],level:3}],level:2},{value:"Submission",id:"submission",children:[],level:2}],c={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For this assignment, we will be practicing JavaScript/Typescript fundamentals!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ALL questions in this assignment MUST be done using ",(0,o.kt)("inlineCode",{parentName:"strong"},".map"),", ",(0,o.kt)("inlineCode",{parentName:"strong"},".filter"),", or\n",(0,o.kt)("inlineCode",{parentName:"strong"},".reduce"),". We will give you no credit for an approach that is not functional.")),(0,o.kt)("p",null,"ALL functions must also be defined using ",(0,o.kt)("strong",{parentName:"p"},"arrow functions"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"(params) => {\n  // function body\n};\n")),(0,o.kt)("p",null,"You must write your functions from the starter code. You are not allowed to\nchange the function signature."),(0,o.kt)("h2",{id:"question-1"},"Question 1"),(0,o.kt)("p",null,"Write a function ",(0,o.kt)("inlineCode",{parentName:"p"},"arrayMean")," that takes in an array of numbers and returns the mean.\nIf the array is empty, return undefined."),(0,o.kt)("p",null,"Starter code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export const arrayMean = (array: number[]): number | undefined => {\n  /* TODO: add your code */\n};\n")),(0,o.kt)("h3",{id:"example-for-mymean"},"Example for myMean"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"arrayMean([1, 2, 3, 4, 5]); // 3\narrayMean([]); // undefined\n")),(0,o.kt)("h2",{id:"question-2"},"Question 2"),(0,o.kt)("p",null,"Write a function ",(0,o.kt)("inlineCode",{parentName:"p"},"affordableHousing")," that takes in an array of ",(0,o.kt)("inlineCode",{parentName:"p"},"Apartment"),"s\nand returns the list of ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),"s of ",(0,o.kt)("inlineCode",{parentName:"p"},"Apartment"),"s with ",(0,o.kt)("inlineCode",{parentName:"p"},"rent")," less than or equal to\n",(0,o.kt)("inlineCode",{parentName:"p"},"budget"),"."),(0,o.kt)("p",null,"Starter code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type Apartment = {\n  id: string;\n  rent: number;\n};\n\nexport const affordableHousing = (\n  listings: Apartment[],\n  budget: number\n): string[] => {\n  /* TODO: add your code */\n};\n")),(0,o.kt)("h3",{id:"example-for-affordablehousing"},"Example for affordableHousing"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const apts: Apartment[] = [\n  { id: 'orbis', rent: 5000 },\n  { id: 'ereve', rent: 12345 },\n  { id: 'henesys', rent: 1337 },\n];\n\naffordableHousing(apts, 5000); // ['orbis', 'henesys']\naffordableHousing(apts, 4000); // ['henesys']\n")),(0,o.kt)("h2",{id:"question-3"},"Question 3"),(0,o.kt)("p",null,"Write a function ",(0,o.kt)("inlineCode",{parentName:"p"},"evenEven")," that takes in an optional string array and returns\ntrue if every even-length string contains ",(0,o.kt)("inlineCode",{parentName:"p"},"'even'")," as a substring."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"array")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),", then return ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". Remember that optional parameters\ndefault to ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," if unspecified."),(0,o.kt)("p",null,"Starter code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export const evenEven = (array?: string[]): boolean => {\n  /* TODO: add your code */\n};\n")),(0,o.kt)("h3",{id:"example-for-eveneven"},"Example for evenEven"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"evenEven(); // true\nevenEven([]); // true\nevenEven(['bob']); // true\nevenEven(['bob', 'steven']); // true\nevenEven(['bob', 'steven', 'even']); // true\nevenEven(['bob', 'steven', 'anna']); // false\n")),(0,o.kt)("h2",{id:"question-4"},"Question 4"),(0,o.kt)("p",null,"Write a function ",(0,o.kt)("inlineCode",{parentName:"p"},"makeSentences")," that takes in an array of objects in the format\n",(0,o.kt)("inlineCode",{parentName:"p"},"{name: string, age: number, breed: string}"),' and maps it to an array of\nsentences in the format "',(0,o.kt)("em",{parentName:"p"},"name")," is ",(0,o.kt)("em",{parentName:"p"},"age")," years old, and is a ",(0,o.kt)("em",{parentName:"p"},"breed"),'."'),(0,o.kt)("p",null,"Please use ",(0,o.kt)("em",{parentName:"p"},"object destructuring")," to get object fields."),(0,o.kt)("h3",{id:"note"},"NOTE"),(0,o.kt)("p",null,'A "prototype" is an instance of an object in JavaScript/TypeScript. In\ndocumentation, methods are often denoted like: ',(0,o.kt)("inlineCode",{parentName:"p"},"Type.prototype.method()")),(0,o.kt)("p",null,"Remember, anything in JavaScript/TypeScript can be an object!"),(0,o.kt)("p",null,"So, we can do: ",(0,o.kt)("inlineCode",{parentName:"p"},"(5).toExponential(10)")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"let x = 5; x.toExponential()")),(0,o.kt)("p",null,"Your goal is to round the age to the nearest tenth."),(0,o.kt)("p",null,"For example, you want to display ",(0,o.kt)("inlineCode",{parentName:"p"},'"5.6 years"')," for the value ",(0,o.kt)("inlineCode",{parentName:"p"},"5.64")," and ",(0,o.kt)("inlineCode",{parentName:"p"},'"5.7 years"')," for the value ",(0,o.kt)("inlineCode",{parentName:"p"},"5.65"),"."),(0,o.kt)("p",null,"Take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/2021fa/Web/JavaScript/Reference/Global_Objects/Number#Methods"},"this documentation")," if you are stuck!"),(0,o.kt)("h3",{id:"example-for-makesentences"},"Example for makeSentences"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const doggos = [\n  { name: 'Sparky', age: 3.35, breed: 'Pomeranian Husky' },\n  { name: 'Oreo', age: 5.42, breed: 'Dalmatian' },\n  { name: 'Stella', age: 4, breed: 'Alaskan Klee Kai' },\n];\n\nmakeSentences(doggos);\n")),(0,o.kt)("p",null,"should output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"[\n  'Sparky is 3.4 years old and is a Pomeranian Husky',\n  'Oreo is 5.4 years old and is a Dalmatian',\n  'Stella is 4.0 years old and is a Alaskan Klee Kai',\n];\n")),(0,o.kt)("p",null,"Starter code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// TODO: You should replace this any with an accurate object type in your submission!\ntype Doggo = any;\n\nexport const makeSentences = (array: Doggo[]): string[] => {\n  /* TODO: add your code */\n};\n")),(0,o.kt)("p",null,'Don\'t worry about printing "year" vs "years" or "a" vs "an", unless you want the\nextra challenge!'),(0,o.kt)("h2",{id:"submission"},"Submission"),(0,o.kt)("p",null,"Please submit to CMS your ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts")," file containing your implementations of\neach of the functions described above."))}d.isMDXComponent=!0},3206:function(e,n,t){function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},a.apply(this,arguments)}t.d(n,{Z:function(){return a}})},5421:function(e,n,t){function a(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}t.d(n,{Z:function(){return a}})}}]);