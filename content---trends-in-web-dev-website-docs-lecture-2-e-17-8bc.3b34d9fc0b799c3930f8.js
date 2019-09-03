(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{44:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",function(){return i}),t.d(n,"rightToc",function(){return c}),t.d(n,"default",function(){return m});t(0);var a=t(66);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i={id:"lecture2",title:"Lecture 2 - Frontend 1"},c=[{value:"Before the Lecture",id:"before-the-lecture",children:[]},{value:"Your First Component",id:"your-first-component",children:[]},{value:"Wat! What's going on",id:"wat-whats-going-on",children:[{value:"Functional Component",id:"functional-component",children:[]},{value:"index.js",id:"indexjs",children:[]}]},{value:"Stateful Component",id:"stateful-component",children:[]},{value:"Rendering lists",id:"rendering-lists",children:[]}],l={rightToc:c},p="wrapper";function m(e){var n=e.components,t=r(e,["components"]);return Object(a.b)(p,o({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"before-the-lecture"},"Before the Lecture"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"npx create-react-app lecture4\ncd lecture4\nnpm start\n")),Object(a.b)("h2",{id:"your-first-component"},"Your First Component"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-jsx"}),"// MyComponent.jsx\nimport React from 'react';\n\nexport default ({ name, githubLink }) => (\n  <div>\n    <div>My name is {name}.</div>\n    <a href={githubLink}>My GitHub</a>\n  </div>\n);\n")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-jsx"}),"// index.js\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport MyComponent from './MyComponent';\n\nconst link = 'https://github.com/cornell-dti';\nReactDOM.render(\n  <MyComponent name=\"Cornell DTI\" githubLink={link} />,\n  document.getElementById('root'),\n);\n")),Object(a.b)("h2",{id:"wat-whats-going-on"},"Wat! What's going on"),Object(a.b)("h3",{id:"functional-component"},"Functional Component"),Object(a.b)("p",null,"The simplest component in React is functional component. A functional component\ndoes not have any internal state. You can think of it as a function whose inputs\nare some JavaScript object and the output is some HTML code that is generated\nfrom the data."),Object(a.b)("p",null,"In React, we call the JavaScript object ",Object(a.b)("inlineCode",{parentName:"p"},"props"),", so you can see code like this:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\n\nfunction MyFirstComponent(props) {\n  return (\n    <div>\n      <div>My name is {props.name}.</div>\n      <a href={props.githubLink}>My GitHub</a>\n    </div>\n  );\n}\n")),Object(a.b)("p",null,"Just calling the input ",Object(a.b)("inlineCode",{parentName:"p"},"props")," is not good for documentation purpose, so we\nusually use the object destruct syntax to make it more explicit:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\n\n// Replace props with { name, githubLink }, so we can directly use `name` and\n// `githubLink` below.\nfunction MyFirstComponent({ name, githubLink }) {\n  return (\n    <div>\n      <div>My name is {name}.</div>\n      <a href={githubLink}>My GitHub</a>\n    </div>\n  );\n}\n")),Object(a.b)("p",null,"In order for this component to be reused in another file, we need to export it:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\n\n// export default added.\nexport default function MyFirstComponent({ name, githubLink }) {\n  return (\n    <div>\n      <div>My name is {name}.</div>\n      <a href={githubLink}>My GitHub</a>\n    </div>\n  );\n}\n")),Object(a.b)("p",null,"React does not care about the function definition syntax, so you can also write\nit in arrow function syntax:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\n\nexport default ({ name, githubLink }) => (\n  <div>\n    <div>My name is {name}.</div>\n    <a href={githubLink}>My GitHub</a>\n  </div>\n);\n")),Object(a.b)("p",null,"You can choose whatever style you like for the purpose of this course."),Object(a.b)("h3",{id:"indexjs"},Object(a.b)("inlineCode",{parentName:"h3"},"index.js")),Object(a.b)("p",null,"In a React app, ",Object(a.b)("inlineCode",{parentName:"p"},"index.js")," is usually the entry point. In the code above, it\nrenders your component into the DOM element that has id ",Object(a.b)("inlineCode",{parentName:"p"},"root"),"."),Object(a.b)("h2",{id:"stateful-component"},"Stateful Component"),Object(a.b)("p",null,"Imagine you are writing a message board app and you need to implement an editor."),Object(a.b)("p",null,"Unlike functional components, you need to maintain state. In React, you will\nneed a class component:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-jsx"}),"import React, { Component } from 'react';\n\nexport default class SimpleEditor extends Component {\n  // Define your initial state here.\n  state = { name: '' };\n\n  changeName = (event) => {\n    // To extract the value from input box, use the following line.\n    const name = event.currentTarget.value;\n    this.setState({ name });\n    // The above line is a short form of this.setState({ name: name });\n  };\n\n  hello = ({ name }) => <p>Hello, {name}</p>;\n\n  render() {\n    const { name } = this.state;\n    return (\n      <div>\n        <div>{name !== '' ? this.hello({ name }) : ''}</div>\n        <input\n          className={styles.InputBox}\n          type=\"text\"\n          placeholder=\"Type your name...\"\n          value={name}\n          onChange={this.changeName}\n        />\n      </div>\n    );\n  }\n}\n")),Object(a.b)("h2",{id:"rendering-lists"},"Rendering lists"),Object(a.b)("p",null,"You may want to render a list of ",Object(a.b)("inlineCode",{parentName:"p"},"YourAwesomeComponent"),". Here are some examples\nto show how you can achieve this in different ways."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\n// Suppose you have a ContactCard component defined there.\nimport ContactCard from './ContactCard';\n\nconst data = [\n  { name: 'Sam1', email: 'foo@bar.com' },\n  { name: 'Sam2', email: 'bar@baz.com' },\n  { name: 'Sam3', email: 'baz@foo.com' },\n];\n\nconst ListBySimpleMap = () => (\n  <div>\n    {data.map(contact => (\n      <ContactCard\n        key={contact.name}\n        name={contact.name}\n        email={contact.email}\n      />\n    ))}\n  </div>\n);\n\nconst ListBySimpleMapWithObjectDestructing = () => (\n  <div>\n    {data.map(({ name, email }) => (\n      <ContactCard key={name} name={name} email={email} />\n    ))}\n  </div>\n);\n\nconst ListBySimpleMapWithSpread = () => (\n  <div>\n    {data.map(contact => (\n      <ContactCard key={contact.name} {...contact} />\n    ))}\n  </div>\n);\n")),Object(a.b)("p",null,"Note that we always need a ",Object(a.b)("inlineCode",{parentName:"p"},"key")," prop. Without this, React will give you\nwarnings in the console. React needs a unique ",Object(a.b)("inlineCode",{parentName:"p"},"key")," for each item in the list to\nhelp it avoid rerendering everything when only one item in the list changes."))}m.isMDXComponent=!0},66:function(e,n,t){"use strict";t.d(n,"a",function(){return c}),t.d(n,"b",function(){return s});var a=t(0),o=t.n(a),r=o.a.createContext({}),i=function(e){var n=o.a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},c=function(e){var n=i(e.components);return o.a.createElement(r.Provider,{value:n},e.children)};var l="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=function(e){var n=e.components,t=e.mdxType,a=e.originalType,r=e.parentName,c=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),l=i(n),m=t,s=l[r+"."+m]||l[m]||p[m]||a;return n?o.a.createElement(s,Object.assign({},c,{components:n})):o.a.createElement(s,c)};function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[l]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);