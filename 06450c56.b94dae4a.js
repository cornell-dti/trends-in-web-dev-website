(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{131:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),b=a,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||r;return t?o.a.createElement(m,c(c({ref:n},l),{},{components:t})):o.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},65:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var a=t(3),o=t(7),r=(t(0),t(131)),i={id:"lecture5",title:"Lecture 5"},c={unversionedId:"lecture5",id:"version-2021sp/lecture5",isDocsHomePage:!1,title:"Lecture 5",description:"Lecture Video",source:"@site/versioned_docs/version-2021sp/lecture5.md",slug:"/lecture5",permalink:"/docs/lecture5",version:"2021sp",sidebar:"docs",previous:{title:"Lecture 4",permalink:"/docs/lecture4"},next:{title:"Lecture 6",permalink:"/docs/lecture6"}},s=[{value:"Your First Component",id:"your-first-component",children:[]},{value:"Wat! What&#39;s going on",id:"wat-whats-going-on",children:[{value:"Functional Component",id:"functional-component",children:[]},{value:"<code>index.tsx</code>",id:"indextsx",children:[]}]},{value:"Stateful Component",id:"stateful-component",children:[]},{value:"Rendering lists",id:"rendering-lists",children:[]}],l={toc:s};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://drive.google.com/file/d/1az7P1eYb42oSr8aF1-30lCED9WoRWyVh/view?usp=sharing"}),"Lecture Video")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.google.com/presentation/d/1EkK8zboXxakJYecXWlGR93NvyTevfyy6byxpXZEQVgI/edit?usp=sharing"}),"Lecture Slides")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/assignment4"}),"Assignment 4")," (due 4/1 3:59 PM on CMS. This is not an April Fool's joke, we swear.)"),Object(r.b)("h2",{id:"your-first-component"},"Your First Component"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="ContactCard.tsx"',title:'"ContactCard.tsx"'}),"type Props = { readonly name: string; readonly githubLink: string };\n\nconst ContactCard = ({ name, githubLink }: Props) => (\n  <div>\n    <div>\n      You can reach to {name} at\n      <a href={githubLink}>{githubLink}</a>\n    </div>\n  </div>\n);\n")),Object(r.b)("h2",{id:"wat-whats-going-on"},"Wat! What's going on"),Object(r.b)("h3",{id:"functional-component"},"Functional Component"),Object(r.b)("p",null,"The simplest component in React is a functional component. A functional component\ndoes not have any internal state. You can think of it as a function whose inputs\nare some JavaScript object and the output is some HTML code that is generated\nfrom the data."),Object(r.b)("p",null,"In React, we call the JavaScript object ",Object(r.b)("inlineCode",{parentName:"p"},"props"),", so you can see code like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="ContactCard.tsx"',title:'"ContactCard.tsx"'}),"type Props = { readonly name: string; readonly githubLink: string };\n\nconst ContactCard = (props: Props) => (\n  <div>\n    <div>\n      You can reach to {props.name} at\n      <a href={props.githubLink}>{props.githubLink}</a>\n    </div>\n  </div>\n);\n")),Object(r.b)("p",null,"Just calling the input ",Object(r.b)("inlineCode",{parentName:"p"},"props")," is not good for documentation purpose, so we\nusually use object destructuring to make it more explicit:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="ContactCard.tsx"',title:'"ContactCard.tsx"'}),"type Props = { readonly name: string; readonly githubLink: string };\n\nconst ContactCard = ({ name, githubLink }: Props) => (\n  <div>\n    <div>\n      You can reach to {name} at\n      <a href={githubLink}>{githubLink}</a>\n    </div>\n  </div>\n);\n")),Object(r.b)("p",null,"In order for this component to be reused in another file, we need to export it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="ContactCard.tsx"',title:'"ContactCard.tsx"'}),"type Props = { readonly name: string; readonly githubLink: string };\n\nconst ContactCard = ({ name, githubLink }: Props) => (\n  <div>\n    <div>\n      You can reach to {name} at\n      <a href={githubLink}>{githubLink}</a>\n    </div>\n  </div>\n);\n\nexport default ContactCard;\n")),Object(r.b)("p",null,"React does not care about the arrow function syntax, so you can also write\nit in function definition syntax:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="ContactCard.tsx"',title:'"ContactCard.tsx"'}),"type Props = { readonly name: string; readonly githubLink: string };\n\nfunction ContactCard ({ name, githubLink }: Props) = (\n  <div>\n    <div>You can reach to {name} at\n      <a href={githubLink}>{githubLink}</a>\n    </div>\n  </div>\n);\n\nexport default ContactCard;\n")),Object(r.b)("p",null,"For this course, we prefer that you use arrow function syntax."),Object(r.b)("h3",{id:"indextsx"},Object(r.b)("inlineCode",{parentName:"h3"},"index.tsx")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="index.tsx"',title:'"index.tsx"'}),"import ReactDOM from 'react-dom';\nimport ContactCard from './ContactCard';\n\nconst link = 'https://github.com/cornell-dti';\nconst root = document.getElementById('root');\n\nReactDOM.render(<ContactCard name=\"Cornell DTI\" githubLink={link} />, root);\n")),Object(r.b)("p",null,"In a React app, ",Object(r.b)("inlineCode",{parentName:"p"},"index.tsx")," is usually the entry point. In the code above, it\nrenders your component into the DOM element that has id ",Object(r.b)("inlineCode",{parentName:"p"},"root"),"."),Object(r.b)("h2",{id:"stateful-component"},"Stateful Component"),Object(r.b)("p",null,"Imagine you are writing a contacts app and you need to implement an editor."),Object(r.b)("p",null,"Unlike the previous components, you need to maintain state. In React, you will\nneed ",Object(r.b)("inlineCode",{parentName:"p"},"hooks"),". Hooks are functions that use state and lifecycle methods inside\nfunctional components. The ",Object(r.b)("inlineCode",{parentName:"p"},"useState")," hook is the hook for maintaining state.\nNote that the general naming convention of a hook is ",Object(r.b)("inlineCode",{parentName:"p"},"useXXXX"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { useState, ChangeEvent } from 'react';\n\nconst NewContact = () => {\n  // name is the variable for the state, setName is the function you can use\n  // to change the state.\n  const [name, setName] = useState('');\n  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {\n    // To extract the value from input box, use the following line.\n    const n = event.currentTarget.value;\n    setName(n);\n  };\n  return (\n    <div>\n      <div>Name: {name}</div>\n      <input\n        type=\"text\"\n        placeholder=\"enter the name here\"\n        value={name}\n        onChange={handleChange}\n      />\n    </div>\n  );\n};\n\nexport default NewContact;\n")),Object(r.b)("h2",{id:"rendering-lists"},"Rendering lists"),Object(r.b)("p",null,"You may want to render a list of ",Object(r.b)("inlineCode",{parentName:"p"},"YourAwesomeComponent"),". Here are some examples\nto show how you can achieve this in different ways."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// Suppose you have a ContactCard component defined there.\nimport ContactCard from './ContactCard';\n\ntype Contact = { name: string; githubLink: string };\n\nconst data: Contact[] = [\n  { name: 'Jason', githubLink: 'www.github.com/guessJason' },\n  { name: 'Peter', githubLink: 'www.github.com/peterIsCool' },\n  { name: 'Enoch', githubLink: 'www.github.com/eno' },\n];\n\nconst ListBySimpleMap = () => (\n  <div>\n    {data.map((contact: Contact) => (\n      <ContactCard\n        key={contact.name}\n        name={contact.name}\n        githubLink={contact.githubLink}\n      />\n    ))}\n  </div>\n);\n\nconst ListBySimpleMapWithObjectDestructing = () => (\n  <div>\n    {data.map(({ name, githubLink }) => (\n      <ContactCard key={name} name={name} githubLink={githubLink} />\n    ))}\n  </div>\n);\n\nconst ListBySimpleMapWithSpread = () => (\n  <div>\n    {data.map((contact: Contact) => (\n      <ContactCard key={contact.name} {...contact} />\n    ))}\n  </div>\n);\n")),Object(r.b)("p",null,"Note that we always need a ",Object(r.b)("inlineCode",{parentName:"p"},"key")," prop. Without this, React will give you\nwarnings in the console. React needs a unique ",Object(r.b)("inlineCode",{parentName:"p"},"key")," for each item in the list to\nhelp it avoid rerendering everything when only one item in the list changes.\nIn this particular example, you should only use ",Object(r.b)("inlineCode",{parentName:"p"},"name")," as the key if you know\nthat the property ",Object(r.b)("inlineCode",{parentName:"p"},"name")," is unique. However, if there are multiple objects with\nthe same name in the list that are used as a key, it would confuse React."))}u.isMDXComponent=!0}}]);