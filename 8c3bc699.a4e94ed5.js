(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||i;return n?r.a.createElement(d,l(l({ref:t},c),{},{components:n})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},101:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},103:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},104:function(e,t,n){"use strict";var a=n(0),r=n(103);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},105:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(104),o=n(101),l=n(48),p=n.n(l),c=37,s=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,b=e.values,u=e.groupId,m=Object(i.a)(),d=m.tabGroupChoices,h=m.setTabGroupChoices,j=Object(a.useState)(l),f=j[0],O=j[1],g=Object(a.useState)(!1),v=g[0],y=g[1];if(null!=u){var x=d[u];null!=x&&x!==f&&b.some((function(e){return e.value===x}))&&O(x)}var N=function(e){O(e),null!=u&&h(u,e)},T=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},w=function(){y(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",C),window.addEventListener("mousedown",w)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(o.a)("tabs__item",p.a.tabItem,{"tabs__item--active":f===t}),style:v?{}:{outline:"none"},key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e),C(e)},onFocus:function(){return N(t)},onClick:function(){N(t),y(!1)},onPointerDown:function(){return y(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===f}))[0]))}},106:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(6),i=(n(0),n(100)),o=n(105),l=n(106),p={id:"lecture6",title:"Lecture 6"},c={unversionedId:"lecture6",id:"version-2020sp/lecture6",isDocsHomePage:!1,title:"Lecture 6",description:"Lecture Slides",source:"@site/versioned_docs/version-2020sp/lecture6.md",slug:"/lecture6",permalink:"/docs/2020sp/lecture6",version:"2020sp",sidebar:"version-2020sp/docs",previous:{title:"Lecture 5",permalink:"/docs/2020sp/lecture5"},next:{title:"Lecture 7",permalink:"/docs/2020sp/lecture7"}},s=[{value:"Conditional Rendering",id:"conditional-rendering",children:[]},{value:"Composition vs. Inheritance",id:"composition-vs-inheritance",children:[{value:"Composition",id:"composition",children:[]},{value:"Inheritance",id:"inheritance",children:[]},{value:"<strong>React uses Composition</strong>",id:"react-uses-composition",children:[]},{value:"Containment",id:"containment",children:[]}]},{value:"Lifting State Up",id:"lifting-state-up",children:[]}],b={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.google.com/presentation/d/1sBLwqUIciol7970umm83ACJZPfp2TaUQ9x5IQQP5sIo/edit?usp=sharing"}),"Lecture Slides")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://drive.google.com/file/d/1YWpFb_xJ5O1xjEyjCX9PKCpq-iSPtmrt/view?usp=sharing"}),"Lecture Video")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ashneeldas2/trends-sp20/tree/master/Assignments/a5"}),"Assignment 5")," due ",Object(i.b)("strong",{parentName:"p"},"04/15 7:59pm")),Object(i.b)("h2",{id:"conditional-rendering"},"Conditional Rendering"),Object(i.b)("p",null,"Sometimes we only want things to render when a certain condition is met. For\nexample, only display text when we meet a certain condition. React has\nconditional rendering to make this very simple."),Object(i.b)(o.a,{groupId:"lang",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="PrelimTime.tsx"',title:'"PrelimTime.tsx"'}),"import React from 'react';\n\nexport default ({ prelimToday }: { readonly prelimToday: boolean }) => {\n  if (prelimToday) {\n    return <p>I have a prelim today.</p>;\n  } else {\n    return <p>I don't have a prelim today.</p>;\n  }\n};\n"))),Object(i.b)(l.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="PrelimTime.jsx"',title:'"PrelimTime.jsx"'}),"import React from 'react';\n\nexport default ({ prelimToday }) => {\n  if (prelimToday) {\n    return <p>I have a prelim today.</p>;\n  } else {\n    return <p>I don't have a prelim today.</p>;\n  }\n};\n")))),Object(i.b)("p",null,"In this example, we have a functional component ",Object(i.b)("inlineCode",{parentName:"p"},"PrelimTime")," that takes in a\nprop ",Object(i.b)("inlineCode",{parentName:"p"},"prelimToday"),". ",Object(i.b)("inlineCode",{parentName:"p"},"prelimToday"),' is a boolean holding whether we have a prelim\ntoday or not. We want the component to display "I have a prelim today." if\n',Object(i.b)("inlineCode",{parentName:"p"},"prelimToday")," is ",Object(i.b)("inlineCode",{parentName:"p"},"true"),' and "I don\'t have a prelim today." if it is ',Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("p",null,"Traditionally, we would use the ",Object(i.b)("inlineCode",{parentName:"p"},"if")," statement for this behavior (as shown\nabove). We can also use conditional rendering to make writing this functionality\nmore convenient."),Object(i.b)("p",null,"First we can use the ",Object(i.b)("strong",{parentName:"p"},"ternary operator"),":"),Object(i.b)(o.a,{groupId:"lang",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="PrelimTime.ssx"',title:'"PrelimTime.ssx"'}),"import React from 'react';\n\nexport default ({ prelimToday }: { readonly prelimToday: boolean }) => (\n  prelimToday\n    ? <p>I have a prelim today.</p>\n    : <p>I don't have a prelim today.</p>;\n);\n"))),Object(i.b)(l.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="PrelimTime.jsx"',title:'"PrelimTime.jsx"'}),"import React from 'react';\n\nexport default ({ prelimToday }) => (\n  prelimToday\n    ? <p>I have a prelim today.</p>\n    : <p>I don't have a prelim today.</p>;\n);\n")))),Object(i.b)("p",null,"The ternary operator is also very common in other languages as well such as\nJava or Python. The basic syntax is as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"[boolean expression] ? [true_result] : [false_result]\n")),Object(i.b)("p",null,"Before the ",Object(i.b)("inlineCode",{parentName:"p"},"?")," you have your expression producing ",Object(i.b)("inlineCode",{parentName:"p"},"true")," or ",Object(i.b)("inlineCode",{parentName:"p"},"false"),". The part\nafter the ",Object(i.b)("inlineCode",{parentName:"p"},"?")," but before the ",Object(i.b)("inlineCode",{parentName:"p"},":")," is the result/functionality you want if the\nboolean expression evaluates to ",Object(i.b)("inlineCode",{parentName:"p"},"true"),". The part after the ",Object(i.b)("inlineCode",{parentName:"p"},":")," is what you want\nto happen if the expression is ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("p",null,"Connecting with the ",Object(i.b)("inlineCode",{parentName:"p"},"PrelimTime")," example, my boolean expression was just the\nprop ",Object(i.b)("inlineCode",{parentName:"p"},"prelimToday"),", although in your code it can be a more complex boolean\nexpression. If ",Object(i.b)("inlineCode",{parentName:"p"},"prelimToday"),' is true, I display "I have a prelim today." If\n',Object(i.b)("inlineCode",{parentName:"p"},"prelimToday"),' is false, I display "I have a prelim today."'),Object(i.b)("p",null,'Notice though, how the only thing changing in this text is adding the word\n"don\'t" if ',Object(i.b)("inlineCode",{parentName:"p"},"prelimToday")," is ",Object(i.b)("inlineCode",{parentName:"p"},"false"),". So only if ",Object(i.b)("inlineCode",{parentName:"p"},"prelimToday")," is ",Object(i.b)("inlineCode",{parentName:"p"},"false"),", we\nwant to add don't."),Object(i.b)("p",null,"React supports the use of ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"&&"))," operator:"),Object(i.b)(o.a,{groupId:"lang",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="PrelimTime.tsx"',title:'"PrelimTime.tsx"'}),"import React from 'react';\n\nexport default ({ prelimToday }: { readonly prelimToday: boolean }) => (\n  <p>I {!prelimToday && \"don't\"} have a prelim today.</p>\n);\n"))),Object(i.b)(l.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="PrelimTime.jsx"',title:'"PrelimTime.jsx"'}),"import React from 'react';\n\nexport default ({ prelimToday }) => (\n  <p>I {!prelimToday && \"don't\"} have a prelim today.</p>\n);\n")))),Object(i.b)("p",null,'Here, we display the text "I have a prelim today.". However, in the curly\nbraces, if ',Object(i.b)("inlineCode",{parentName:"p"},"prelimToday")," is ",Object(i.b)("inlineCode",{parentName:"p"},"false"),' then the word "don\'t" will be rendered.\nConditional rendering with ',Object(i.b)("inlineCode",{parentName:"p"},"&&")," is useful when you only have expected behavior\nfor one branch of the conditional. In this case, I only had desired behavior if\n",Object(i.b)("inlineCode",{parentName:"p"},"prelimToday")," was ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("p",null,"As you have seen, React's conditional rendering made modifying render behavior\nbased on conditions a lot easier. In this small example, we went from five lines\nof code in the component to just one!"),Object(i.b)("h2",{id:"composition-vs-inheritance"},"Composition vs. Inheritance"),Object(i.b)("p",null,"Composition and inheritance are two programming techniques for defining how classes relate to objects. (Think of classes as the blueprint for a house and objects the actual houses created from that blueprint)"),Object(i.b)("h3",{id:"composition"},"Composition"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Composition"),' defines a class as the sum of its individual parts. This is a "has-a" relationship (e.g. a car has a steering wheel, has a window, etc). In Java (and other object oriented languages), these components are represented as ',Object(i.b)("em",{parentName:"p"},"instance")," variables."),Object(i.b)("h3",{id:"inheritance"},"Inheritance"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Inheritance"),' derives one class from another. If class A is the parent of class B and C, B and C inherit the properties/functions of A. This is a "is-a" relationship (e.g. car is a vehicle, circle is a shape.)'),Object(i.b)("h3",{id:"react-uses-composition"},Object(i.b)("strong",{parentName:"h3"},"React uses Composition")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"\u201cReact has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.\u201d"),"\n-- ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/composition-vs-inheritance.html"}),"React Docs")),Object(i.b)("h3",{id:"containment"},"Containment"),Object(i.b)("p",null,"Components may not know their children ahead of time."),Object(i.b)("p",null,"Children are the components you put within another component:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<ComponentA>{/* anything here is a child of Component A */}</ComponentA>\n")),Object(i.b)("p",null,"Use the ",Object(i.b)("inlineCode",{parentName:"p"},"children")," prop to pass in children components."),Object(i.b)(o.a,{groupId:"lang",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="Container.tsx"',title:'"Container.tsx"'}),"import React, { ReactNode } from 'react';\ntype Props = { readonly children: ReactNode };\nconst Container = (props: Props) => (\n  <div className=\"Border\">{props.children}</div>\n);\n"))),Object(i.b)(l.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="Container.jsx"',title:'"Container.jsx"'}),"import React from 'react';\n\nconst Container = (props) => <div className=\"Border\">{props.children}</div>;\n")))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'const App = () => (\n  <div className="App">\n    <Container>\n      <p>Hello!</p>\n      <p>Bye!</p>\n    </Container>\n  </div>\n);\n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"props.children")," will have the paragraph elements."),Object(i.b)("p",null,"We didn't actually get to this live demo, adapted from ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/composition-vs-inheritance.html"}),"this tutorial")," in the React docs, during lecture but it is very simple if you want to try it out yourself. We also show how to import styles."),Object(i.b)(o.a,{groupId:"lang",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="Container.tsx"',title:'"Container.tsx"'}),"import React, { ReactNode } from 'react';\nimport './Container.css'; // this is how we import styles\n\ntype Props = { readonly children: ReactNode };\n\nexport default (props: Props) => <div className=\"Border\">{props.children}</div>;\n"))),Object(i.b)(l.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="Container.jsx"',title:'"Container.jsx"'}),"import React from 'react';\nimport './Container.css'; // this is how we import styles\n\nexport default (props) => <div className=\"Border\">{props.children}</div>;\n")))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css",metastring:'title="Container.css"',title:'"Container.css"'}),".Border {\n  border: 4px solid black;\n  background-color: azure;\n}\n")),Object(i.b)("p",null,'Less common but you also may want multiple "holes" in your component (for example, a left and right child):'),Object(i.b)(o.a,{groupId:"lang",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="SplintPane.tsx"',title:'"SplintPane.tsx"'}),"import React, { ReactNode } from 'react';\nimport './SplitPane.css';\n\ntype Props = { readonly left: ReactNode; readonly right: ReactNode };\n\nexport default (props: Props) => (\n  <div>\n    <div className=\"LeftPane\">{props.left}</div>\n    <div className=\"RightPane\">{props.right}</div>\n  </div>\n);\n"))),Object(i.b)(l.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="SplintPane.jsx"',title:'"SplintPane.jsx"'}),"import React from 'react';\nimport './SplitPane.css';\n\nexport default (props) => (\n  <div>\n    <div className=\"LeftPane\">{props.left}</div>\n    <div className=\"RightPane\">{props.right}</div>\n  </div>\n);\n")))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css",metastring:'title="SplitPane.css"',title:'"SplitPane.css"'}),"/* these colors are ugly I know */\n.LeftPane {\n  float: left;\n  width: 50%;\n  background-color: red;\n}\n\n.RightPane {\n  float: right;\n  width: 50%;\n  background-color: aquamarine;\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport SplitPane from './SplitPane';\nimport Container from './Container';\n\nexport default () => {\n  return (\n    <div className=\"App\">\n      <Container>\n        <p>Hello, world!</p>\n      </Container>\n      <SplitPane\n        left={<div>I'm on the left!</div>}\n        right={<div>I'm on the right!</div>}\n      />\n    </div>\n  );\n};\n")),Object(i.b)("h2",{id:"lifting-state-up"},"Lifting State Up"),Object(i.b)("p",null,"This section was a live demo, adapted from ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/lifting-state-up.html"}),"this tutorial")," in the React docs."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="App.js"',title:'"App.js"'}),"import React, { useState } from 'react';\nimport './App.css';\nimport FahrenheitInput from './FahrenheitInput';\nimport CelsiusInput from './CelsiusInput';\n\nfunction App() {\n  const [temperature, setTemperature] = useState(-40);\n\n  return (\n    <div className=\"App\">\n      <label>Fahrenheit:</label>\n      <FahrenheitInput\n        temperature={temperature}\n        callback={(temp) => setTemperature(temp)}\n      />\n      <br />\n      <label>Celcius:</label>\n      <CelsiusInput\n        temperature={temperature}\n        callback={(temp) => setTemperature(temp)}\n      />\n      <br />\n      {temperature >= 100 ? (\n        <span>Water would boil here!</span>\n      ) : (\n        <span>Water would not boil here!</span>\n      )}\n      <br />\n      <span>Water would {temperature >= 0 && 'not'} freeze here!</span>\n    </div>\n  );\n}\n\nexport default App;\n")),Object(i.b)(o.a,{groupId:"lang",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="CalciusInput.tsx"',title:'"CalciusInput.tsx"'}),"import React, { ChangeEvent } from 'react';\n\ntype Props = {\n  readonly temperature: number;\n  readonly callback: (temperature: number) => void;\n};\n\nexport default ({ temperature, callback }: Props) => {\n  const handlechange = (e: ChangeEvent<HTMLInputElement>) =>\n    callback(parseInt(e.target.value) || 0);\n\n  return <input value={temperature} onChange={handlechange} />;\n};\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="FahrenheitInput.tsx"',title:'"FahrenheitInput.tsx"'}),"import React from 'react';\n\ntype Props = {\n  readonly temperature: number;\n  readonly callback: (temperature: number) => void;\n};\n\nexport default ({ temperature, callback }: Props) => {\n  const handlechange = (e: ChangeEvent<HTMLInputElement>) =>\n    callback((((parseInt(e.target.value) || 0) - 32) * 5) / 9);\n\n  return <input value={(temperature * 9) / 5 + 32} onChange={handlechange} />;\n};\n"))),Object(i.b)(l.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="CalciusInput.jsx"',title:'"CalciusInput.jsx"'}),"import React from 'react';\n\nexport default ({ temperature, callback }) => {\n  const handlechange = (e) => callback(parseInt(e.target.value) || 0);\n\n  return <input value={temperature} onChange={handlechange} />;\n};\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="FahrenheitInput.jsx"',title:'"FahrenheitInput.jsx"'}),"import React from 'react';\n\nexport default ({ temperature, callback }) => {\n  const handlechange = (e) =>\n    callback((((parseInt(e.target.value) || 0) - 32) * 5) / 9);\n\n  return <input value={(temperature * 9) / 5 + 32} onChange={handlechange} />;\n};\n")))),Object(i.b)("p",null,"Check lecture video for a more detailed explanation."))}u.isMDXComponent=!0}}]);