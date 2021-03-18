(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{129:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),s=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||c;return t?r.a.createElement(m,i(i({ref:n},b),{},{components:t})):r.a.createElement(m,i({ref:n},b))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var b=2;b<c;b++)o[b]=t[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var a=t(3),r=t(7),c=(t(0),t(129)),o={id:"lecture4",title:"Lecture 4"},i={unversionedId:"lecture4",id:"version-2021sp/lecture4",isDocsHomePage:!1,title:"Lecture 4",description:"Lecture Video",source:"@site/versioned_docs/version-2021sp/lecture4.md",slug:"/lecture4",permalink:"/docs/lecture4",version:"2021sp",sidebar:"docs",previous:{title:"Lecture 3",permalink:"/docs/lecture3"},next:{title:"Lecture 5",permalink:"/docs/lecture5"}},l=[{value:"<del><code>var</code></del>, <code>let</code>, and <code>const</code>",id:"var-let-and-const",children:[]},{value:"Arrow Functions",id:"arrow-functions",children:[]},{value:"Functional Programming",id:"functional-programming",children:[{value:"<code>map</code>",id:"map",children:[]},{value:"<code>filter</code>",id:"filter",children:[]},{value:"<code>forEach</code>",id:"foreach",children:[]},{value:"<code>every</code>",id:"every",children:[]},{value:"<code>some</code>",id:"some",children:[]},{value:"<code>reduce</code>",id:"reduce",children:[]}]},{value:"Spreading and Destructuring",id:"spreading-and-destructuring",children:[]},{value:"Ugly Pieces of JavaScript",id:"ugly-pieces-of-javascript",children:[{value:"Truthy, falsy",id:"truthy-falsy",children:[]},{value:"Global variables",id:"global-variables",children:[]},{value:"Type coercion",id:"type-coercion",children:[]},{value:"Why Linters Are Necessary",id:"why-linters-are-necessary",children:[]},{value:"Resources",id:"resources",children:[]},{value:"Demo Code",id:"demo-code",children:[]}]}],b={toc:l};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://drive.google.com/file/d/1rC5MTHQ3vU0vELZyzcUHptZq583VsUAT/view?usp=sharing"}),"Lecture Video")),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.google.com/presentation/d/1VseDHeXrYrP2NdsBJTA72mSTlLNUeXeFYkIFUzLuJ5Q/edit?usp=sharing"}),"Lecture Slides")),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/assignment3"}),"Assignment 3")," (due 3/25 3:59 PM on CMS)"),Object(c.b)("h2",{id:"var-let-and-const"},Object(c.b)("del",{parentName:"h2"},Object(c.b)("inlineCode",{parentName:"del"},"var")),", ",Object(c.b)("inlineCode",{parentName:"h2"},"let"),", and ",Object(c.b)("inlineCode",{parentName:"h2"},"const")),Object(c.b)("p",null,"Before we had ES6, there was only one way to declare variable: ",Object(c.b)("inlineCode",{parentName:"p"},"var"),". (Well,\nthere is actually another way, but it's very bad and you should never use it.)"),Object(c.b)("p",null,"For example, if you want to define a variable ",Object(c.b)("inlineCode",{parentName:"p"},"a")," initialized to ",Object(c.b)("inlineCode",{parentName:"p"},"21 * 2"),", you\nwrite"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var a = 21 * 2;\n")),Object(c.b)("p",null,"However, ",Object(c.b)("inlineCode",{parentName:"p"},"var")," has a big problem: it is function scoped instead of block scoped.\nTherefore, you might accidentally use a local variable that should not be used\nanymore!"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function someComplexFunction() {\n  var foo = 42;\n  if (someCondition()) {\n    var abc = 41 * 2;\n    foo += abc;\n  }\n  // You can still use abc here!\n}\n")),Object(c.b)("p",null,"In ES6, we finally have ",Object(c.b)("inlineCode",{parentName:"p"},"let")," and ",Object(c.b)("inlineCode",{parentName:"p"},"const")," that are block scoped. Using block\nscoped variables outside of the block will be a runtime error. You should use\n",Object(c.b)("inlineCode",{parentName:"p"},"const")," whenever possible since it defines an immutable variable, only use ",Object(c.b)("inlineCode",{parentName:"p"},"let"),"\nif the variable has to be mutable. As mentioned above, you should never use\n",Object(c.b)("inlineCode",{parentName:"p"},"var"),"."),Object(c.b)("p",null,"Here is a rewrite of the ",Object(c.b)("inlineCode",{parentName:"p"},"someComplexFunction")," above using only let and const:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function someComplexFunction() {\n  let foo = 42; // foo might be re-assigned. We need to use `let`.\n  if (someCondition()) {\n    const abc = 41 * 2; // abc is never mutated. We can use `const`.\n    foo += abc;\n  }\n  // You can NOT use abc here! This is nice!\n}\n")),Object(c.b)("p",null,"Sometimes you have to use ",Object(c.b)("inlineCode",{parentName:"p"},"let")," even if the variable is only assigned one. This\nusually happens when then they are separately assigned inside two branches. For\nexample,"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"let myMood;\nif (hasPrelim()) {\n  myMood = 'bad';\n} else {\n  myMood = 'good';\n}\n")),Object(c.b)("p",null,"To prevent this, people use the ",Object(c.b)("strong",{parentName:"p"},"ternary operator"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const myMood = hasPrelim() ? 'bad' : 'good';\n")),Object(c.b)("h2",{id:"arrow-functions"},"Arrow Functions"),Object(c.b)("p",null,"Before ES6 we wrote functions as such:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function myFunction(x) {\n  return x + 1;\n}\n")),Object(c.b)("p",null,"or"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const myFunction = function (x) {\n  return x + 1;\n};\n")),Object(c.b)("p",null,"Now we have this shorthand:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const myFunction = (x) => {\n  return x + 1;\n};\n")),Object(c.b)("p",null,"The syntax is"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const functionName = (parameter1, parameter2, parameter3) => {\n  // function body\n};\n")),Object(c.b)("p",null,"For this simple function, we have even shorter shorthand:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const myFunction = (x) => x + 1;\n")),Object(c.b)("p",null,"This shorthand works if the function body is just one line that will be\nimmediately returned. In this case, we are simply incrementing ",Object(c.b)("inlineCode",{parentName:"p"},"x")," and\nreturning the result."),Object(c.b)("p",null,"Anonymous Arrow Functions: just don't include ",Object(c.b)("inlineCode",{parentName:"p"},"[function name]")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"(parameter1, parameter2, parameter3) => {\n  // function body\n};\n")),Object(c.b)("h2",{id:"functional-programming"},"Functional Programming"),Object(c.b)("h3",{id:"map"},Object(c.b)("inlineCode",{parentName:"h3"},"map")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"array.map(function)")," runs ",Object(c.b)("inlineCode",{parentName:"p"},"function")," on each element of ",Object(c.b)("inlineCode",{parentName:"p"},"array"),"\xa0and returns\nan array containing the results."),Object(c.b)("p",null,"Example: ",Object(c.b)("inlineCode",{parentName:"p"},"[1, 4, 9].map(x => Math.sqrt(x))")," will return ",Object(c.b)("inlineCode",{parentName:"p"},"[1, 2, 3]"),"."),Object(c.b)("h3",{id:"filter"},Object(c.b)("inlineCode",{parentName:"h3"},"filter")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"array.filter(function)")," runs ",Object(c.b)("inlineCode",{parentName:"p"},"function")," on each element of ",Object(c.b)("inlineCode",{parentName:"p"},"array"),"\xa0and return\nan array containing all elements that satisfy the function requirements."),Object(c.b)("p",null,"Example: ",Object(c.b)("inlineCode",{parentName:"p"},"[1, 4, 9].filter(x => x > 3)")," will return ",Object(c.b)("inlineCode",{parentName:"p"},"[4, 9]")),Object(c.b)("h3",{id:"foreach"},Object(c.b)("inlineCode",{parentName:"h3"},"forEach")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"array.forEach(function)")," runs ",Object(c.b)("inlineCode",{parentName:"p"},"function")," on each element of ",Object(c.b)("inlineCode",{parentName:"p"},"array"),".\nThe difference between ",Object(c.b)("inlineCode",{parentName:"p"},"map")," and ",Object(c.b)("inlineCode",{parentName:"p"},"forEach")," is that map returns a value, whereas\nforEach just applies the function to each element of the array."),Object(c.b)("p",null,"Example: ",Object(c.b)("inlineCode",{parentName:"p"},"[1, 4, 9].forEach(x => console.log(x))")," will print out each element\nto the console."),Object(c.b)("h3",{id:"every"},Object(c.b)("inlineCode",{parentName:"h3"},"every")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"array.every(function)")," runs ",Object(c.b)("inlineCode",{parentName:"p"},"function")," on each element of ",Object(c.b)("inlineCode",{parentName:"p"},"array")," and returns\nwhether every element of the array satisfies the function requirements."),Object(c.b)("p",null,"Example: ",Object(c.b)("inlineCode",{parentName:"p"},"[1, 4, 9].every(x => x > 0)")," will return true. However,\n",Object(c.b)("inlineCode",{parentName:"p"},"[1, 4, 9].every(x => x > 1)")," will return false."),Object(c.b)("h3",{id:"some"},Object(c.b)("inlineCode",{parentName:"h3"},"some")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"array.some(function)")," runs ",Object(c.b)("inlineCode",{parentName:"p"},"function")," on each element of ",Object(c.b)("inlineCode",{parentName:"p"},"array")," and returns\nwhether any element of the array satisfies the function requirements."),Object(c.b)("p",null,"Example: ",Object(c.b)("inlineCode",{parentName:"p"},"[1, 4, 9].some(x => x == 1)")," will return true. However,\n",Object(c.b)("inlineCode",{parentName:"p"},"[1, 4, 9].some(x => x == 2)")," will return false."),Object(c.b)("h3",{id:"reduce"},Object(c.b)("inlineCode",{parentName:"h3"},"reduce")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"array.reduce(function)")," runs ",Object(c.b)("inlineCode",{parentName:"p"},"function")," on each element of ",Object(c.b)("inlineCode",{parentName:"p"},"array"),"\xa0and returns\na single value."),Object(c.b)("p",null,"Example: ",Object(c.b)("inlineCode",{parentName:"p"},"[1, 4, 9].reduce((sum, curr) => sum + curr)")," will return 14."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"reduce")," can take an optional second parameter to change the value that the\naccumulator starts at."),Object(c.b)("p",null,"Example: ",Object(c.b)("inlineCode",{parentName:"p"},"[1, 4, 9].reduce((sum, curr) => sum + curr, 500)")," will return 514."),Object(c.b)("h2",{id:"spreading-and-destructuring"},"Spreading and Destructuring"),Object(c.b)("p",null,"Say we have a function:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const add3 = (a: number, b: number, c: number) => a + b + c;\n")),Object(c.b)("p",null,"Now if we had an array:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const arr = [1, 2, 3];\n")),Object(c.b)("p",null,"We can use the ",Object(c.b)("strong",{parentName:"p"},"spread operator")," ",Object(c.b)("inlineCode",{parentName:"p"},"...")," to ",Object(c.b)("em",{parentName:"p"},"destructure")," each element of the\narray as one of the arguments:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"add3(...arr); // same as add3(arr[0], arr[1], arr[2]) output 6\n")),Object(c.b)("p",null,"Now if we had an object:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const add3Object = {\n  a: 3,\n  b: 4,\n  c: 7,\n};\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"add3(...add3Object)")," is illegal, since the order of fields in the object is\nnot guaranteed. However, you can refactor the ",Object(c.b)("inlineCode",{parentName:"p"},"add3")," function to be:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"type ABC = { a: number; b: number; c: number };\n\nconst add3 = ({ a, b, c }: ABC) => a + b + c;\n\n// equivalent to:\nconst add3Uglier = (abc: ABC) => abc.a + abc.b + abc.c;\n")),Object(c.b)("p",null,"Then we can do"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"add3(add3Object);\n")),Object(c.b)("p",null,"The spread operator and destructuring is especially useful in\n",Object(c.b)("em",{parentName:"p"},"destructuring assignment"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const [a, b] = [1, 2];\n\nconsole.log(a); // 1\nconsole.log(b); // 2\n\nconst arr1 = [1, 2, 3, 4, 5];\nconst [c, d, ...rest] = arr1;\n\nconsole.log(c); // 1\nconsole.log(d); // 2\nconsole.log(rest); // [3, 4, 5]\n")),Object(c.b)("h2",{id:"ugly-pieces-of-javascript"},"Ugly Pieces of JavaScript"),Object(c.b)("h3",{id:"truthy-falsy"},"Truthy, falsy"),Object(c.b)("p",null,"JavaScript values can be classified into 'truthy' and 'falsy'. Of course, ",Object(c.b)("inlineCode",{parentName:"p"},"true"),"\nis truthy and false is ",Object(c.b)("inlineCode",{parentName:"p"},"falsy"),". Most values are truthy, except:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"false")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"''")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"0")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"{}")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"null")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"undefined")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"NaN"))),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"if")," guard in JavaScript checks whether a value is truthy rather than\nwhether the value is ",Object(c.b)("inlineCode",{parentName:"p"},"true"),". Similar mechanism applies to ",Object(c.b)("inlineCode",{parentName:"p"},"&&")," and ",Object(c.b)("inlineCode",{parentName:"p"},"||"),".\nTherefore, we have"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"'' && 'haha'")," evaluates to ",Object(c.b)("inlineCode",{parentName:"li"},"''")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"'haha' || ''")," evaluates to ",Object(c.b)("inlineCode",{parentName:"li"},"'haha'"),".")),Object(c.b)("h3",{id:"global-variables"},"Global variables"),Object(c.b)("p",null,"You were told because that there are only one way to define a variable before\nES6: ",Object(c.b)("inlineCode",{parentName:"p"},"var"),". This is a white lie. You can actually define a variable without\n",Object(c.b)("inlineCode",{parentName:"p"},"var"),", ",Object(c.b)("inlineCode",{parentName:"p"},"let"),", and ",Object(c.b)("inlineCode",{parentName:"p"},"const"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"foo = 3;\n")),Object(c.b)("p",null,"If you do this, then you just define a ",Object(c.b)("strong",{parentName:"p"},"global variable"),". It means you can use\nthe variable ",Object(c.b)("inlineCode",{parentName:"p"},"foo")," everywhere. If you have a local variable, then you might\naccidentally use or override it with the wrong value."),Object(c.b)("p",null,"Lessons learned: never use or define global variables."),Object(c.b)("h3",{id:"type-coercion"},"Type coercion"),Object(c.b)("p",null,"Like most languages, JavaScript coerces types to better suit the operations\nthat are being applied."),Object(c.b)("h4",{id:"example-1"},"Example 1"),Object(c.b)("p",null,"If we execute ",Object(c.b)("inlineCode",{parentName:"p"},"true + false")," we get 1. This is because there is an\naddition operator, and ",Object(c.b)("inlineCode",{parentName:"p"},"true")," gets coerced to 1 while ",Object(c.b)("inlineCode",{parentName:"p"},"false"),"\xa0gets coerced to 0."),Object(c.b)("h4",{id:"example-2"},"Example 2"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"{} + [] + {} + [1]")," returns ",Object(c.b)("inlineCode",{parentName:"p"},"0[object Object]1")," because ",Object(c.b)("inlineCode",{parentName:"p"},"{} + []"),"\ngets evaluated to 0, ",Object(c.b)("inlineCode",{parentName:"p"},"{}")," gets evaluated to ","[object Object]",", and they both get\ncoerced to strings. Then, adding a list to a string simply adds the contents of\nthe list to the string, so 1 gets appended to the end."),Object(c.b)("h4",{id:"example-3"},"Example 3"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const zero = +[]; // + coerce [] into 0\nconst one = +!![]; // ! coerce [] into false, got inverted, then coerce to 1\nconst two = +!![] + +!![]; // 2 = 1 + 1\n\nconst fib2 = (__) =>\n  __ === zero || __ === one ? __ : fib2(__ - one) + fib2(__ - two);\n")),Object(c.b)("p",null,"This is the Fibonacci sequence implemented using type coercion."),Object(c.b)("h3",{id:"why-linters-are-necessary"},"Why Linters Are Necessary"),Object(c.b)("p",null,"You have just learned some darkest aspects of JavaScript. We must use it because\nit's the only language that can be understood by browser. To mitigate the\nproblem, people wrote ",Object(c.b)("em",{parentName:"p"},"linters")," that try to automatically find these problems.\nThey are well integrated with editors so you can directly see the warnings. If\nyou follow the 'Setup your editor' section, you are good to go. You will see\nwarnings when you accidentally write some wrong code."),Object(c.b)("h3",{id:"resources"},"Resources"),Object(c.b)("p",null,"I recommend the ",Object(c.b)("em",{parentName:"p"},"You Don't Know JS")," series by Kyle Simpson. The ebooks are\navailable ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/getify/You-Dont-Know-JS/tree/1st-ed"}),"for free on GitHub"),".\nThe series is comprehensive and will teach you everything you want to know."),Object(c.b)("h3",{id:"demo-code"},"Demo Code"),Object(c.b)("p",null,"Need more examples? This code from the lecture's live coding demo rewrites\nsome functions from the preassessment first using loops then with map, filter,\nand reduce."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'}),"// getSqrts: takes in an array and returns an array with all the square roots\n// of those numbers\n// example: [1, 4, 9] => [1, 2, 3]\nconst getSqrts = (arr: number[]): number[] => {\n  const result: number[] = [];\n  for (const num of arr) {\n    result.push(Math.sqrt(num));\n  }\n  return result;\n};\nconst getSqrtsMap = (arr: number[]): number[] => {\n  return arr.map(Math.sqrt);\n};\n// perfectSquares: takes in an array and returns an array with only the\n// elements that are perfect squares\n// example: [1, 2, 3] => [1]\nconst perfectSquares = (arr: number[]): number[] => {\n  const result: number[] = [];\n  for (const num of arr) {\n    if (Math.sqrt(num) % 1 === 0) {\n      result.push(num);\n    }\n  }\n  return result;\n};\nconst isPerfectSquare = (num: number) => Math.sqrt(num) % 1 === 0;\nconst perfectSquaresFilter = (arr: number[]): number[] => {\n  return arr.filter(isPerfectSquare);\n};\n// mySum: takes in an array and returns the sum of the elements\n// example: [1, 2, 3] => 6\nconst mySum = (arr: number[]): number => {\n  let sum = 0;\n  for (const num of arr) {\n    sum += num;\n  }\n  return sum;\n};\nconst mySumReduce = (arr: number[]): number => {\n  return arr.reduce((acc: number, curr: number) => acc + curr);\n};\n// testing!\nconst input = [1, 2, 3];\nconsole.log(getSqrts(input));\nconsole.log(getSqrtsMap(input));\nconsole.log(perfectSquares(input));\nconsole.log(perfectSquaresFilter(input));\nconsole.log(mySum(input));\nconsole.log(mySumReduce(input));\n")))}s.isMDXComponent=!0}}]);