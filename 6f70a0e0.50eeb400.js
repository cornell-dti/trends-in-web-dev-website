(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||o;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},109:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},112:function(e,t,n){"use strict";var a=n(0),r=n(113);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},113:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},114:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(112),i=n(109),c=n(53),l=n.n(c),s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.children,p=e.defaultValue,m=e.values,b=e.groupId,d=e.className,f=Object(o.a)(),y=f.tabGroupChoices,v=f.setTabGroupChoices,g=Object(a.useState)(p),j=g[0],h=g[1];if(null!=b){var O=y[b];null!=O&&O!==j&&m.some((function(e){return e.value===O}))&&h(O)}var x=function(e){h(e),null!=b&&v(b,e)},C=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},m.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return x(t)},onClick:function(){x(t)}},n)}))),t?Object(a.cloneElement)(c.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},c.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},115:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),o=(n(0),n(108)),i=n(114),c=n(115),l={id:"lecture5",title:"Lecture 5"},s={unversionedId:"lecture5",id:"version-2020sp/lecture5",isDocsHomePage:!1,title:"Lecture 5",description:"Lecture Slides",source:"@site/versioned_docs/version-2020sp/lecture5.md",slug:"/lecture5",permalink:"/docs/2020sp/lecture5",version:"2020sp",sidebar:"version-2020sp/docs",previous:{title:"Lecture 4",permalink:"/docs/2020sp/lecture4"},next:{title:"Lecture 6",permalink:"/docs/2020sp/lecture6"}},u=[{value:"Before the Lecture",id:"before-the-lecture",children:[]},{value:"Your First Component",id:"your-first-component",children:[]},{value:"Wat! What&#39;s going on",id:"wat-whats-going-on",children:[{value:"Functional Component",id:"functional-component",children:[]},{value:"<code>index.js</code> / <code>index.tsx</code>",id:"indexjs--indextsx",children:[]}]},{value:"Stateful Component",id:"stateful-component",children:[]},{value:"Rendering lists",id:"rendering-lists",children:[]}],p={rightToc:u};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.google.com/presentation/d/1NEGIbKzm0QZ87iS5BJQZOE8Dakio5YPqrAAg0f9puYI/edit?usp=sharing"}),"Lecture Slides")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://drive.google.com/file/d/1zkZIy2RJqxtPS6-10ClNYRA55NwNvBNc/view?usp=sharing"}),"Lecture Video")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ashneeldas2/trends-sp20/tree/master/Assignments/a4"}),"Assignment 4")," due ",Object(o.b)("strong",{parentName:"p"},"04/08 7:59pm")),Object(o.b)("h2",{id:"before-the-lecture"},"Before the Lecture"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn create react-app lecture2\ncd lecture2\nyarn start\n")),Object(o.b)("h2",{id:"your-first-component"},"Your First Component"),Object(o.b)(i.a,{groupId:"lang",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="MyComponent.tsx"',title:'"MyComponent.tsx"'}),"import React from 'react';\n\ntype Props = { readonly name: string; readonly githubLink: string };\n\nexport default ({ name, githubLink }: Props) => (\n  <div>\n    <div>My name is {name}.</div>\n    <a href={githubLink}>My GitHub</a>\n  </div>\n);\n"))),Object(o.b)(c.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="MyComponent.jsx"',title:'"MyComponent.jsx"'}),"import React from 'react';\n\nexport default ({ name, githubLink }) => (\n  <div>\n    <div>My name is {name}.</div>\n    <a href={githubLink}>My GitHub</a>\n  </div>\n);\n")))),Object(o.b)(i.a,{groupId:"lang",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="index.tsx"',title:'"index.tsx"'}),"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport MyComponent from './MyComponent';\n\nconst link = 'https://github.com/cornell-dti';\nconst root = document.getElementById('root');\nif (root == null) {\n  throw new Error();\n}\nReactDOM.render(<MyComponent name=\"Cornell DTI\" githubLink={link} />, root);\n"))),Object(o.b)(c.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="index.js"',title:'"index.js"'}),"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport MyComponent from './MyComponent';\n\nconst link = 'https://github.com/cornell-dti';\nReactDOM.render(\n  <MyComponent name=\"Cornell DTI\" githubLink={link} />,\n  document.getElementById('root')\n);\n")))),Object(o.b)("h2",{id:"wat-whats-going-on"},"Wat! What's going on"),Object(o.b)("h3",{id:"functional-component"},"Functional Component"),Object(o.b)("p",null,"The simplest component in React is functional component. A functional component\ndoes not have any internal state. You can think of it as a function whose inputs\nare some JavaScript object and the output is some HTML code that is generated\nfrom the data."),Object(o.b)("p",null,"In React, we call the JavaScript object ",Object(o.b)("inlineCode",{parentName:"p"},"props"),", so you can see code like this:"),Object(o.b)(i.a,{groupId:"lang",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="MyComponent.tsx"',title:'"MyComponent.tsx"'}),"import React from 'react';\n\ntype Props = { readonly name: string; readonly githubLink: string };\n\nfunction MyFirstComponent(props: Props) {\n  return (\n    <div>\n      <div>My name is {props.name}.</div>\n      <a href={props.githubLink}>My GitHub</a>\n    </div>\n  );\n}\n"))),Object(o.b)(c.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="MyComponent.jsx"',title:'"MyComponent.jsx"'}),"import React from 'react';\n\nfunction MyFirstComponent(props) {\n  return (\n    <div>\n      <div>My name is {props.name}.</div>\n      <a href={props.githubLink}>My GitHub</a>\n    </div>\n  );\n}\n")))),Object(o.b)("p",null,"Just calling the input ",Object(o.b)("inlineCode",{parentName:"p"},"props")," is not good for documentation purpose, so we\nusually use the object destruct syntax to make it more explicit:"),Object(o.b)(i.a,{groupId:"lang",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="MyComponent.tsx"',title:'"MyComponent.tsx"'}),"import React from 'react';\n\ntype Props = { readonly name: string; readonly githubLink: string };\n\n// Replace props with { name, githubLink }, so we can directly use `name` and\n// `githubLink` below.\nfunction MyFirstComponent({ name, githubLink }: Props) {\n  return (\n    <div>\n      <div>My name is {name}.</div>\n      <a href={githubLink}>My GitHub</a>\n    </div>\n  );\n}\n"))),Object(o.b)(c.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="MyComponent.jsx"',title:'"MyComponent.jsx"'}),"import React from 'react';\n\n// Replace props with { name, githubLink }, so we can directly use `name` and\n// `githubLink` below.\nfunction MyFirstComponent({ name, githubLink }) {\n  return (\n    <div>\n      <div>My name is {name}.</div>\n      <a href={githubLink}>My GitHub</a>\n    </div>\n  );\n}\n")))),Object(o.b)("p",null,"In order for this component to be reused in another file, we need to export it:"),Object(o.b)(i.a,{groupId:"lang",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="MyComponent.tsx"',title:'"MyComponent.tsx"'}),"import React from 'react';\n\ntype Props = { readonly name: string; readonly githubLink: string };\n\n// export default added.\nexport default function MyFirstComponent({ name, githubLink }: Props) {\n  return (\n    <div>\n      <div>My name is {name}.</div>\n      <a href={githubLink}>My GitHub</a>\n    </div>\n  );\n}\n"))),Object(o.b)(c.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="MyComponent.jsx"',title:'"MyComponent.jsx"'}),"import React from 'react';\n\n// export default added.\nexport default function MyFirstComponent({ name, githubLink }) {\n  return (\n    <div>\n      <div>My name is {name}.</div>\n      <a href={githubLink}>My GitHub</a>\n    </div>\n  );\n}\n")))),Object(o.b)("p",null,"React does not care about the function definition syntax, so you can also write\nit in arrow function syntax:"),Object(o.b)(i.a,{groupId:"lang",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="MyComponent.tsx"',title:'"MyComponent.tsx"'}),"import React from 'react';\n\ntype Props = { readonly name: string; readonly githubLink: string };\n\nexport default ({ name, githubLink }: Props) => (\n  <div>\n    <div>My name is {name}.</div>\n    <a href={githubLink}>My GitHub</a>\n  </div>\n);\n"))),Object(o.b)(c.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="MyComponent.jsx"',title:'"MyComponent.jsx"'}),"import React from 'react';\n\nexport default ({ name, githubLink }) => (\n  <div>\n    <div>My name is {name}.</div>\n    <a href={githubLink}>My GitHub</a>\n  </div>\n);\n")))),Object(o.b)("p",null,"You can choose whatever style you like for the purpose of this course."),Object(o.b)("h3",{id:"indexjs--indextsx"},Object(o.b)("inlineCode",{parentName:"h3"},"index.js")," / ",Object(o.b)("inlineCode",{parentName:"h3"},"index.tsx")),Object(o.b)("p",null,"In a React app, ",Object(o.b)("inlineCode",{parentName:"p"},"index.js")," is usually the entry point.\n(",Object(o.b)("inlineCode",{parentName:"p"},"index.tsx")," is the entry point if you use TypeScript). In the code above, it\nrenders your component into the DOM element that has id ",Object(o.b)("inlineCode",{parentName:"p"},"root"),"."),Object(o.b)("h2",{id:"stateful-component"},"Stateful Component"),Object(o.b)("p",null,"Imagine you are writing a message board app and you need to implement an editor."),Object(o.b)("p",null,"Unlike the previous components, you need to maintain state. In React, you will\nneed ",Object(o.b)("inlineCode",{parentName:"p"},"hooks"),"."),Object(o.b)(i.a,{groupId:"lang",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import React, { useState, ChangeEvent } from 'react';\n\nexport default function SimpleEditor() {\n  // name is the variable for the state, setName is the function you can use\n  // to change the state.\n  const [name, setName] = useState(''); // '' is the initial state for name.\n\n  const changeName = (event: ChangeEvent<HTMLInputElement>) => {\n    // To extract the value from input box, use the following line.\n    const name = event.currentTarget.value;\n    setName(name);\n  };\n\n  return (\n    <div>\n      <div>{name !== '' ? `Hello, ${name}` : ''}</div>\n      <input\n        className={styles.InputBox}\n        type=\"text\"\n        placeholder=\"Type your name...\"\n        value={name}\n        onChange={changeName}\n      />\n    </div>\n  );\n}\nconst [stateVar, setterFunc] = useState(initValue);\n"))),Object(o.b)(c.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import React, { useState } from 'react';\n\nexport default function SimpleEditor() {\n  // name is the variable for the state, setName is the function you can use\n  // to change the state.\n  const [name, setName] = useState(''); // '' is the initial state for name.\n\n  const changeName = (event) => {\n    // To extract the value from input box, use the following line.\n    const name = event.currentTarget.value;\n    setName(name);\n  };\n\n  return (\n    <div>\n      <div>{name !== '' ? `Hello, ${name}` : ''}</div>\n      <input\n        className={styles.InputBox}\n        type=\"text\"\n        placeholder=\"Type your name...\"\n        value={name}\n        onChange={changeName}\n      />\n    </div>\n  );\n}\nconst [stateVar, setterFunc] = useState(initValue);\n")))),Object(o.b)("h2",{id:"rendering-lists"},"Rendering lists"),Object(o.b)("p",null,"You may want to render a list of ",Object(o.b)("inlineCode",{parentName:"p"},"YourAwesomeComponent"),". Here are some examples\nto show how you can achieve this in different ways."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\n// Suppose you have a ContactCard component defined there.\nimport ContactCard from './ContactCard';\n\nconst data = [\n  { name: 'Sam1', email: 'foo@bar.com' },\n  { name: 'Sam2', email: 'bar@baz.com' },\n  { name: 'Sam3', email: 'baz@foo.com' },\n];\n\nconst ListBySimpleMap = () => (\n  <div>\n    {data.map((contact) => (\n      <ContactCard\n        key={contact.name}\n        name={contact.name}\n        email={contact.email}\n      />\n    ))}\n  </div>\n);\n\nconst ListBySimpleMapWithObjectDestructing = () => (\n  <div>\n    {data.map(({ name, email }) => (\n      <ContactCard key={name} name={name} email={email} />\n    ))}\n  </div>\n);\n\nconst ListBySimpleMapWithSpread = () => (\n  <div>\n    {data.map((contact) => (\n      <ContactCard key={contact.name} {...contact} />\n    ))}\n  </div>\n);\n")),Object(o.b)("p",null,"Note that we always need a ",Object(o.b)("inlineCode",{parentName:"p"},"key")," prop. Without this, React will give you\nwarnings in the console. React needs a unique ",Object(o.b)("inlineCode",{parentName:"p"},"key")," for each item in the list to\nhelp it avoid rerendering everything when only one item in the list changes."))}m.isMDXComponent=!0}}]);