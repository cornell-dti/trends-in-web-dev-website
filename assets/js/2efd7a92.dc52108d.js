"use strict";(self.webpackChunktrends_in_web_dev_website=self.webpackChunktrends_in_web_dev_website||[]).push([[5701],{7300:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(6687);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6515:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(3206),o=n(5421),r=(n(6687),n(7300)),i=["components"],s={id:"lecture4",title:"Lecture 4"},l=void 0,c={unversionedId:"lecture4",id:"version-2022sp/lecture4",isDocsHomePage:!1,title:"Lecture 4",description:"Lecture Slides",source:"@site/versioned_docs/version-2022sp/lecture4.md",sourceDirName:".",slug:"/lecture4",permalink:"/docs/lecture4",tags:[],version:"2022sp",frontMatter:{id:"lecture4",title:"Lecture 4"},sidebar:"docs",previous:{title:"Lecture 3",permalink:"/docs/lecture3"},next:{title:"Lecture 5",permalink:"/docs/lecture5"}},u=[{value:"Your First Component",id:"your-first-component",children:[],level:2},{value:"Wat! What&#39;s going on",id:"wat-whats-going-on",children:[{value:"Functional Component",id:"functional-component",children:[],level:3}],level:2},{value:"Stateful Component",id:"stateful-component",children:[],level:2},{value:"Rendering lists",id:"rendering-lists",children:[],level:2},{value:"Modifying State",id:"modifying-state",children:[{value:"Optimizing <code>useEffect</code>",id:"optimizing-useeffect",children:[],level:3},{value:"Cleanup",id:"cleanup",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1CNKnsXYA4BnNFwQY2ixZne5XmZdpqGi8FVuoLOg0aHA/edit?usp=sharing"},"Lecture Slides")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/assignment2"},"Assignment 2")," (due 3/23 4:59pm on CMS)"),(0,r.kt)("h2",{id:"your-first-component"},"Your First Component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ContactCard.tsx"',title:'"ContactCard.tsx"'},"type Props = { readonly name: string; readonly githubLink: string };\n\nconst ContactCard = ({ name, githubLink }: Props) => (\n  <div>\n    You can reach {name} at\n    <a href={githubLink}>{githubLink}</a>\n  </div>\n);\n")),(0,r.kt)("h2",{id:"wat-whats-going-on"},"Wat! What's going on"),(0,r.kt)("h3",{id:"functional-component"},"Functional Component"),(0,r.kt)("p",null,"The simplest component in React is a functional component. A functional component\ndoes not have any internal state. You can think of it as a function whose inputs\nare some JavaScript object and the output is some HTML code that is generated\nfrom the data."),(0,r.kt)("p",null,"In React, we call the JavaScript object ",(0,r.kt)("inlineCode",{parentName:"p"},"props"),", so you can see code like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ContactCard.tsx"',title:'"ContactCard.tsx"'},"type Props = { readonly name: string; readonly githubLink: string };\n\nconst ContactCard = (props: Props) => (\n  <div>\n    You can reach {props.name} at\n    <a href={props.githubLink}>{props.githubLink}</a>\n  </div>\n);\n")),(0,r.kt)("p",null,"Just calling the input ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," is not good for documentation purpose, so we\nusually use object destructuring to make it more explicit:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ContactCard.tsx"',title:'"ContactCard.tsx"'},"type Props = { readonly name: string; readonly githubLink: string };\n\nconst ContactCard = ({ name, githubLink }: Props) => (\n  <div>\n    You can reach {name} at\n    <a href={githubLink}>{githubLink}</a>\n  </div>\n);\n")),(0,r.kt)("p",null,"In order for this component to be reused in another file, we need to export it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ContactCard.tsx"',title:'"ContactCard.tsx"'},"type Props = { readonly name: string; readonly githubLink: string };\n\nconst ContactCard = ({ name, githubLink }: Props) => (\n  <div>\n    You can reach {name} at\n    <a href={githubLink}>{githubLink}</a>\n  </div>\n);\n\nexport default ContactCard;\n")),(0,r.kt)("p",null,"React does not care about the arrow function syntax, so you can also write\nit in function definition syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ContactCard.tsx"',title:'"ContactCard.tsx"'},"type Props = { readonly name: string; readonly githubLink: string };\n\nfunction ContactCard({ name, githubLink }: Props) {\n  return (\n    <div>\n      You can reach {name} at\n      <a href={githubLink}>{githubLink}</a>\n    </div>\n  );\n}\n\nexport default ContactCard;\n")),(0,r.kt)("p",null,"For this course, we prefer that you use arrow function syntax."),(0,r.kt)("h2",{id:"stateful-component"},"Stateful Component"),(0,r.kt)("p",null,"Imagine you are writing a contacts app and you need to implement an editor."),(0,r.kt)("p",null,"Unlike the previous components, you need to maintain state. In React, you will\nneed ",(0,r.kt)("inlineCode",{parentName:"p"},"hooks"),". Hooks are functions that use state and lifecycle methods inside\nfunctional components. The ",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," hook is the hook for maintaining state.\nNote that the general naming convention of a hook is ",(0,r.kt)("inlineCode",{parentName:"p"},"useXXXX"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState, ChangeEvent } from 'react';\n\nconst NewContact = () => {\n  // name is the variable for the state, setName is the function you can use\n  // to change the state.\n  const [name, setName] = useState('');\n  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {\n    // To extract the value from input box, use the following line.\n    const n = event.currentTarget.value;\n    setName(n);\n  };\n  return (\n    <div>\n      <p>Name: {name}</p>\n      <input\n        type=\"text\"\n        placeholder=\"enter the name here\"\n        value={name}\n        onChange={handleChange}\n      />\n    </div>\n  );\n};\n\nexport default NewContact;\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useState")," returns a length-2 array that includes the following elements (in order):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"a state variable that is always synchronized (in a consistent state everywhere any time)"),(0,r.kt)("li",{parentName:"ol"},"a function that can be used to update the state variable.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note that the names of the two should always be in the form x, setX.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const [prosAndCons, setProsAndCons] = useState([]);\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," statement above uses ",(0,r.kt)("strong",{parentName:"p"},"array destructuring")," syntax, which is explained below."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Aside: array destructuring syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const [firstElement, secondElement, ...rest] = [1, 2, 3, 4, 5, 6];\nconst [...rest, beforeTailElement, tailElement] = [1, 2, 3, 4, 5, 6];\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Array destructuring")," is a shorthand that allows you to store the contents of specific element in an array into a variable, without the cumbersome syntax of manually indexing into an array. The ",(0,r.kt)("inlineCode",{parentName:"p"},"...rest")," expression uses the spread (",(0,r.kt)("inlineCode",{parentName:"p"},"..."),") operator to capture the remaining contents of the array (as a subset)."),(0,r.kt)("p",null,"In TypeScript, we can parametrize the useState hook to be of a certain type. (",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," is called a \u201cgeneric\u201d function because it can handle any type that you specify.) This is ",(0,r.kt)("strong",{parentName:"p"},"good")," because in TypeScript (and other typed languges), we work to ",(0,r.kt)("em",{parentName:"p"},"restrict")," the scope of possible types of our code in order to reduce the space for errors."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const [prosAndCons, setProsAndCons] = useState<Array<Pro | Con>>([\n  new Pro('yummy'),\n  new Con('unhealthy'),\n]);\n")),(0,r.kt)("h2",{id:"rendering-lists"},"Rendering lists"),(0,r.kt)("p",null,"You may want to render a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"YourAwesomeComponent"),". Here are some examples\nto show how you can achieve this in different ways."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// Suppose you have a ContactCard component defined there.\nimport ContactCard from './ContactCard';\n\ntype Contact = { name: string; githubLink: string };\n\nconst data: Contact[] = [\n  { name: 'Jason', githubLink: 'www.github.com/guessJason' },\n  { name: 'Peter', githubLink: 'www.github.com/peterIsCool' },\n  { name: 'Enoch', githubLink: 'www.github.com/eno' },\n];\n\nconst ListBySimpleMap = () => (\n  <div>\n    {data.map((contact: Contact) => (\n      <ContactCard\n        key={contact.name}\n        name={contact.name}\n        githubLink={contact.githubLink}\n      />\n    ))}\n  </div>\n);\n\nconst ListBySimpleMapWithObjectDestructing = () => (\n  <div>\n    {data.map(({ name, githubLink }) => (\n      <ContactCard key={name} name={name} githubLink={githubLink} />\n    ))}\n  </div>\n);\n\nconst ListBySimpleMapWithSpread = () => (\n  <div>\n    {data.map((contact: Contact) => (\n      <ContactCard key={contact.name} {...contact} />\n    ))}\n  </div>\n);\n")),(0,r.kt)("p",null,"Note that we always need a ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," prop. Without this, React will give you\nwarnings in the console. React needs a unique ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," for each item in the list to\nhelp it avoid rerendering everything when only one item in the list changes.\nIn this particular example, you should only use ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," as the key if you know\nthat the property ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," is unique. However, if there are multiple objects with\nthe same name in the list that are used as a key, it would confuse React."),(0,r.kt)("h2",{id:"modifying-state"},"Modifying State"),(0,r.kt)("p",null,"We can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," hook. Using ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"setStateVar")," (state variable setter) allows state variables to \u201chook into\u201d the React component and \u201cride along\u201d other changes that occur. \ud83e\udd20\ud83c\udfc7 Here is how!"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useEffect(effect_function)")," => ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect(() => {})"),"\nWhenever the component updates/re-renders, useEffect runs the argument (a function)."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useEffect(() => {setCount(count + 1)})"),"\nThe function can have any arbitrary logic/function calls\u2026 such as the ",(0,r.kt)("inlineCode",{parentName:"p"},"setCount")," state variable update function! But ",(0,r.kt)("inlineCode",{parentName:"p"},"setCount")," also triggers another component update so\u2026"),(0,r.kt)("h3",{id:"optimizing-useeffect"},"Optimizing ",(0,r.kt)("inlineCode",{parentName:"h3"},"useEffect")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useEffect(function, filters)"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," triggers the function at every component update, but you can restrict this to occur only when the variables in the ",(0,r.kt)("inlineCode",{parentName:"p"},"filters")," array update. This makes your React component more optimized. You could say that these variables are a ",(0,r.kt)("em",{parentName:"p"},"dependency")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," statement. Example below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"useEffect(function, [prop1, observable])\n")),(0,r.kt)("p",null,"As a fun fact, it is possible to enter an infinite loop if the dependencies are state variables that are also set inside the effect. Don't do this!"),(0,r.kt)("h3",{id:"cleanup"},"Cleanup"),(0,r.kt)("p",null,"A good use of useEffect is to hook into file streams, WebSockets, Firebase hooks, or some other Observable-like API in order to make your component ",(0,r.kt)("em",{parentName:"p"},"reactive")," to changes in data. (when the observed data/value/file stream updates, the React component should update.) In order to use an API for this purpose, it is often necessary to open up an initial connection or subscription. It is ",(0,r.kt)("em",{parentName:"p"},"good manners")," to ",(0,r.kt)("em",{parentName:"p"},"cleanup")," by closing or unsubscribing. In a ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," statement, the cleanup code is stored in a function that is returned by the effect (function)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"useEffect(() => {\n  return () => {\n    cleanup();\n  };\n});\n")),(0,r.kt)("p",null,"Example usage below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"useEffect(() => {\n  return () => {\n    ObservableAPI.unsubscribe()\n  });\n}, [valueFromObservableApi]);\n\nuseEffect(() => {\n  return () => {\n    dataStream.close()\n  });\n}, [dataStreamContents]);\n")))}d.isMDXComponent=!0},3206:function(e,t,n){function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:function(){return a}})},5421:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return a}})}}]);