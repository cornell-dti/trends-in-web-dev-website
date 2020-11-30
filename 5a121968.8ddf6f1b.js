(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||c;return n?r.a.createElement(d,l(l({ref:t},b),{},{components:n})):r.a.createElement(d,l({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var b=2;b<c;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),c=(n(0),n(108)),i={id:"lecture0",title:"Lecture 0"},l={unversionedId:"lecture0",id:"version-2020fa/lecture0",isDocsHomePage:!1,title:"Lecture 0",description:"Lecture Video",source:"@site/versioned_docs/version-2020fa/lecture0.md",slug:"/lecture0",permalink:"/docs/lecture0",version:"2020fa",sidebar:"docs",previous:{title:"Setup your editor",permalink:"/docs/setup-editor"},next:{title:"Lecture 1",permalink:"/docs/lecture1"}},o=[{value:"JavaScript",id:"javascript",children:[{value:"What is JavaScript",id:"what-is-javascript",children:[]},{value:"Basic JavaScript Syntax",id:"basic-javascript-syntax",children:[]}]},{value:"TypeScript",id:"typescript",children:[{value:"JavaScript Types",id:"javascript-types",children:[]},{value:"How are types used?",id:"how-are-types-used",children:[]},{value:"Why TypeScript?",id:"why-typescript",children:[]},{value:"TypeScript Types",id:"typescript-types",children:[]},{value:"Demo",id:"demo",children:[]}]}],b={rightToc:o};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://drive.google.com/file/d/1Y7KShrkY0IDFoVN0vsZ1XhGFMf3qopnE/view?usp=sharing"}),"Lecture Video")),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.google.com/presentation/d/1WpfGvyGtjkEmM2MrV2yFfQ_b7pVHGbO-GlnViJOa4HY/edit?usp=sharing"}),"Lecture Slides")),Object(c.b)("p",null,"No homework this week! We're still getting CMS/Piazza set up"),Object(c.b)("h2",{id:"javascript"},"JavaScript"),Object(c.b)("h3",{id:"what-is-javascript"},"What is JavaScript"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"JavaScript is the defacto language of the web"),Object(c.b)("li",{parentName:"ul"},"Commonly used in conjunction with HTML/CSS"),Object(c.b)("li",{parentName:"ul"},"Became really popular for powering client-side logic through AJAX",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Previously, languages like PHP had to communicate with the server before coming back with a response"))),Object(c.b)("li",{parentName:"ul"},"These days JavaScript is everywhere!")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Java is to JavaScript as car is to carpet. They are very different languages!"))),Object(c.b)("h3",{id:"basic-javascript-syntax"},"Basic JavaScript Syntax"),Object(c.b)("h4",{id:"variables"},"Variables"),Object(c.b)("p",null,"There are three ways to create variables in JS:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("del",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"del"},"var x = 5"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"let x = 5")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"const x = 5")))),Object(c.b)("p",null,"We prefer using ",Object(c.b)("strong",{parentName:"p"},"const")," for immutability although let is also accepted. ",Object(c.b)("em",{parentName:"p"},Object(c.b)("strong",{parentName:"em"},"Never use var."))),Object(c.b)("h4",{id:"if-statements"},"if statements"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"if (condition) {\n  // executes if condition is true\n} else if (condition2) {\n  // executes if condition is false but condition2 is true\n} else {\n  // executes if condition is false\n}\n")),Object(c.b)("h4",{id:"for-loops"},"for loops"),Object(c.b)("h5",{id:"regular-counter-for-loop"},"regular counter for loop"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"for (let i = 0; i < 5; i++) {\n  console.log(i);\n}\n")),Object(c.b)("h5",{id:"for-of-loop"},"for of loop"),Object(c.b)("p",null,"We can use ",Object(c.b)("inlineCode",{parentName:"p"},"for..of")," loops to loop through elements of an array."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const arr = [10, 20, 30, 40];\nfor (const val of arr) {\n  console.log(val); // prints values: 10, 20, 30, 40\n}\n")),Object(c.b)("h4",{id:"for-in-loop"},"for in loop"),Object(c.b)("p",null,"We can use ",Object(c.b)("inlineCode",{parentName:"p"},"for..in")," loops to loop through keys of an object."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const object = { a: 1, b: 2, c: 3 };\n\nfor (const property in object) {\n  console.log(`${property}: ${object[property]}`);\n}\n\n// expected output:\n// "a: 1"\n// "b: 2"\n// "c: 3"\n')),Object(c.b)("h4",{id:"while-loops"},"while loops"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let n = 0;\n\nwhile (n < 3) {\n  console.log(n);\n  n++;\n}\n\n// expected output:\n// "0"\n// "1"\n// "2"\n')),Object(c.b)("h4",{id:"function-declaration"},"function declaration"),Object(c.b)("p",null,"We can use the function key word to define a function!"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function calcRectArea(width, height) {\n  return width * height;\n}\n\nconsole.log(calcRectArea(5, 6)); // 30\n")),Object(c.b)("p",null,"or we can use ",Object(c.b)("em",{parentName:"p"},"arrow functions"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const calcRectArea = (width, height) => {\n  return width * height;\n};\n")),Object(c.b)("p",null,"More details on arrow functions in a few weeks when we talk about ES6!"),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"JavaScript is a super powerful language and this was just a small sample of its language features. Check out Mozilla Developer Network (MDN) for the best JavaScript documentation: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"}),"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide")))),Object(c.b)("h2",{id:"typescript"},"TypeScript"),Object(c.b)("p",null,"TypeScript is a typed ",Object(c.b)("em",{parentName:"p"},"superset")," of JavaScript that compiles to plain JavaScript. Superset means TypeScript has everything in JavaScript and more. (Built by Microsoft!)"),Object(c.b)("h3",{id:"javascript-types"},"JavaScript Types"),Object(c.b)("p",null,"JavaScript has 6 primitive types:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Boolean"),Object(c.b)("li",{parentName:"ul"},"String"),Object(c.b)("li",{parentName:"ul"},"Number"),Object(c.b)("li",{parentName:"ul"},"Symbol"),Object(c.b)("li",{parentName:"ul"},"undefined"),Object(c.b)("li",{parentName:"ul"},"BigInt")),Object(c.b)("p",null,"All JavaScript values are those 6 primitive types or a:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"object"),Object(c.b)("li",{parentName:"ul"},"function (JavaScript is functional!)"),Object(c.b)("li",{parentName:"ul"},"null")),Object(c.b)("h3",{id:"how-are-types-used"},"How are types used?"),Object(c.b)("p",null,"In JavaScript we had:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let str = 'Hello, trends';\nlet num = 42;\nlet truth = true;\n\nconst someFunc = (x, s, b) => {\n  // do some operations...\n  return x;\n};\n")),Object(c.b)("p",null,"Notice we don't have any types here! JavaScript is weakly typed."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"let str: string = 'Hello, trends';\nlet num: number = 42;\nlet truth: boolean = false;\nconst someFunc = (x: number, s: string, b: boolean): number => {\n  // do some operations...\n  return x;\n};\n")),Object(c.b)("p",null,"TypeScript allows us to add type information!"),Object(c.b)("h3",{id:"why-typescript"},"Why TypeScript?"),Object(c.b)("p",null,"JavaScript code can be ambiguous. We had the function:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const someFunc = (x, s, b) => {\n  // do some operations...\n  return x;\n};\n")),Object(c.b)("p",null,"What are ",Object(c.b)("inlineCode",{parentName:"p"},"x, s, b"),"? What should I pass in for those? What should I expect returned?"),Object(c.b)("p",null,"Adding the TypeScript types makes this code self-documenting:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const someFunc = (x: number, s: string, b: boolean): number => {\n  // do some operations...\n  return x;\n};\n")),Object(c.b)("p",null,"JavaScript variables can also change type which can be undesirable, unexpected, and error-prone."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let str = 'Hello, trends';\nlet num = 42;\nlet truth = true;\nstr = 13;\n")),Object(c.b)("p",null,"None of these variables have to be any specific type! I can have ",Object(c.b)("inlineCode",{parentName:"p"},"str")," be a string and then a number."),Object(c.b)("p",null,"In the end, we want to use TypeScript because it is:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Easier to read"),Object(c.b)("li",{parentName:"ul"},"Easier and faster to implement"),Object(c.b)("li",{parentName:"ul"},"Easier to refactor"),Object(c.b)("li",{parentName:"ul"},"Less buggy")),Object(c.b)("h3",{id:"typescript-types"},"TypeScript Types"),Object(c.b)("p",null,"Basic Syntax:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let <var_name>: <type> = <something>;\n")),Object(c.b)("p",null,"We can also use ",Object(c.b)("inlineCode",{parentName:"p"},"const")," but again no ",Object(c.b)("inlineCode",{parentName:"p"},"var"),"."),Object(c.b)("h4",{id:"basic-types"},"Basic Types"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// Boolean\nlet isDone: boolean = false;\n// Number can be decimal, or in any base!\nlet decimal: number = 4.2;\nlet binary: number = 0b1010;\nlet hex: number = 0xf00d;\n// String\nlet lang: string = 'typescript';\nlet templateStr: string = `We love ${lang}`;\n// Boolean\nlet isDone: boolean = false;\n// Number can be decimal, or in any base!\nlet decimal: number = 4.2;\nlet binary: number = 0b1010;\nlet hex: number = 0xf00d;\n// String\nlet lang: string = 'typescript';\nlet templateStr: string = `We love ${lang}`;\n")),Object(c.b)("h4",{id:"any"},"Any"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Any")," is a wildcard and it can be anything. ",Object(c.b)("inlineCode",{parentName:"p"},"any")," places no restrictions on type."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// Any: can be anything!\nlet notSure: any = 4;\nnotSure = 'maybe a string instead';\nnotSure = false; // okay, definitely a boolean\n")),Object(c.b)("p",null,"If you were to use ",Object(c.b)("inlineCode",{parentName:"p"},"any")," everywhere though you might as well just use JavaScript"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"let anyList: any[] = [4, 'maybe a string', false];\n")),Object(c.b)("p",null,"But it can be useful in specifying collections of items of different types!"),Object(c.b)("h4",{id:"functions"},"Functions"),Object(c.b)("p",null,"Functions can have types too!"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// un-typed\nconst myFunc = (x, y) => x + y;\n// typed\nconst myFunc = (x: number, y: number): number => x + y;\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"myFunc")," has type ",Object(c.b)("inlineCode",{parentName:"p"},"(x: number, y: number): number"),"."),Object(c.b)("p",null,"TypeScript can do some limited type inference so if you leave out the return type ",Object(c.b)("inlineCode",{parentName:"p"},"number"),", TypeScript can infer it since we are just adding two numbers which can only produce a number. If TypeScript can't infer the type, it defaults as ",Object(c.b)("inlineCode",{parentName:"p"},"any"),"."),Object(c.b)("p",null,"We can also have optional parameters:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const introduce = (name: string, github?: string): string => {\n  return github\n    ? `Hi, I'm ${name}. Checkout my GitHub @${github}`\n    : `Hi, I'm ${name}. I don't have a GitHub.`;\n};\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"github?")," designates ",Object(c.b)("inlineCode",{parentName:"p"},"github")," as an optional parameter that defaults to ",Object(c.b)("inlineCode",{parentName:"p"},"undefined"),"."),Object(c.b)("h4",{id:"literal-types"},"Literal Types"),Object(c.b)("p",null,"Literal Types are types that can be a literal set of possibilities that you specify. TypeScript allows number and string literal types:"),Object(c.b)("h5",{id:"string-literal-types"},"String Literal Types"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// String literal type\ntype TrafficLightColors = 'red' | 'green' | 'yellow';\n")),Object(c.b)("p",null,"Any variable with ",Object(c.b)("inlineCode",{parentName:"p"},"TrafficLightColors")," type can only take on values ",Object(c.b)("inlineCode",{parentName:"p"},'"red", "green", "yellow"'),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"let light1: TrafficLightColors = 'red';\nlight1 = 'blue'; // TypeError\n")),Object(c.b)("h5",{id:"numeric-literal-types"},"Numeric Literal Types"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// Numeric literal type\ntype DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;\nconst rollDice = (): DiceRoll => {\n  // ...\n};\n")),Object(c.b)("h4",{id:"union-types"},"Union Types"),Object(c.b)("p",null,"With union types, a variable can be of one type or another type."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const union: number | string = 5; // number\nconst union2: number | string = 'hello'; // string\n\ntype TrafficLightColors = 'red' | 'green' | 'yellow';\ntype PrimaryColors = 'red' | 'green' | 'blue';\n\n// \"red\" | \"green\" | \"yellow\" | \"blue\"\ntype union = PrimaryColors | TrafficLightColors;\n")),Object(c.b)("h4",{id:"intersection-types"},"Intersection Types"),Object(c.b)("p",null,"With union types, a variable must be of one type and another type."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// Intersection Type\ntype TrafficLightColors = 'red' | 'green' | 'yellow';\ntype PrimaryColors = 'red' | 'green' | 'blue';\ntype intersect = PrimaryColors & TrafficLightColors; // \"red\" | \"green\"\n")),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"There's also so much more to TypeScript. Checkout TypeScript docs to learn more! ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/"}),"https://www.typescriptlang.org/docs/")))),Object(c.b)("h3",{id:"demo"},"Demo"),Object(c.b)("p",null,"We went through a demo of writing and running code in TypeScript using the preassessment as an example. First install ",Object(c.b)("inlineCode",{parentName:"p"},"typescript")," and ",Object(c.b)("inlineCode",{parentName:"p"},"ts-node"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn global add typescript\nyarn global add ts-node\n")),Object(c.b)("p",null,"We used the following example code:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="script.ts"',title:'"script.ts"'}),"const mySum = (inputArray: number[]): number => {\n  let sum: number = 0;\n  for (const num of inputArray) {\n    sum += num;\n  }\n  return sum;\n};\n\nconsole.log(mySum([1, 2, 3])); // expected 6\n\nconst isLeapYear = (year: number): boolean => {\n  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;\n};\n\nconsole.log(isLeapYear(2000)); // is a leap year\nconsole.log(isLeapYear(2100)); // is NOT a leap year;\n\nconst perfectSquares = (arr: number[]): number[] => {\n  const ans: number[] = [];\n  for (const num of arr) {\n    if (Math.sqrt(num) % 1 === 0) {\n      ans.push(num);\n    }\n  }\n  return ans;\n};\n\nconsole.log(perfectSquares([1, 4, 9])); // expected same as input\nconsole.log(perfectSquares([1, 5, 9])); // expected [1, 9]\n")),Object(c.b)("p",null,"Run it with ",Object(c.b)("inlineCode",{parentName:"p"},"ts-node script.ts")))}s.isMDXComponent=!0}}]);