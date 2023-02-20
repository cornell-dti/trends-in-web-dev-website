"use strict";(self.webpackChunktrends_in_web_dev_website=self.webpackChunktrends_in_web_dev_website||[]).push([[824],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4022:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],s={id:"lecture5",title:"Lecture 5"},i=void 0,c={unversionedId:"lecture5",id:"version-2023sp/lecture5",isDocsHomePage:!1,title:"Lecture 5",description:"Homework CSS and Complex React, is due 3/25 by 11:59pm",source:"@site/versioned_docs/version-2023sp/lecture5.md",sourceDirName:".",slug:"/lecture5",permalink:"/docs/lecture5",tags:[],version:"2023sp",frontMatter:{id:"lecture5",title:"Lecture 5"}},p=[{value:"The Basics of CSS",id:"the-basics-of-css",children:[{value:"CSS Properties",id:"css-properties",children:[],level:3},{value:"CSS Selectors",id:"css-selectors",children:[],level:3}],level:2},{value:"Styling Options",id:"styling-options",children:[{value:"CSS",id:"css",children:[],level:3},{value:"Inline styles",id:"inline-styles",children:[],level:3},{value:"CSS files",id:"css-files",children:[],level:3},{value:"CSS modules",id:"css-modules",children:[],level:3}],level:2},{value:"Demo 1: External CSS",id:"demo-1-external-css",children:[],level:2},{value:"Demo 2: Inline CSS",id:"demo-2-inline-css",children:[],level:2}],m={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Homework: Assignment 2: CSS and Complex React, is due 3/25 by 11:59pm"),(0,a.kt)("p",null,"Slides: TODO: @daniel"),(0,a.kt)("p",null,"Explore more:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Prefabricated React components in Google's Material UI Style: ",(0,a.kt)("a",{parentName:"li",href:"https://mui.com/"},"React MUI")),(0,a.kt)("li",{parentName:"ul"},"Prefabricated Tailwind CSS components: ",(0,a.kt)("a",{parentName:"li",href:"https://daisyui.com/"},"Daisy UI"))),(0,a.kt)("p",null,"Now that we have a complete understanding of React for building the raw HTML frontend of our application and manipulating that interface, let's take a look at that most-loved of frontend tasks: styling."),(0,a.kt)("h1",{id:"todays-lecture-320"},"Today's Lecture 3/20"),(0,a.kt)("p",null,"By the end of today, you should be able to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Understand the basics of how to use CSS."),(0,a.kt)("li",{parentName:"ul"},"Understand the evolution of CSS and styling solutions"),(0,a.kt)("li",{parentName:"ul"},"Understand the different ways to style React components")),(0,a.kt)("h2",{id:"the-basics-of-css"},"The Basics of CSS"),(0,a.kt)("h3",{id:"css-properties"},"CSS Properties"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div className="\u201ccontainer\u201d">\n  <button id="\u201dclick-me\u201d" />\n  <hr />\n</div>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  padding: 2rem 1rem 2rem 1rem;\n  margin: 30px;\n}\n\n#click-me {\n  border: 5px solid #ff0000;\n}\n\nhr {\n  color: red;\n}\n")),(0,a.kt)("p",null,"Above, you can see how we use ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"selectors"))," to select elements in our HTML and then apply ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"properties"))," to them. In the above example, we have three selectors: ",(0,a.kt)("inlineCode",{parentName:"p"},".container"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"#click-me"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"hr"),". Each selector has a set of properties that are applied to it. For example, the ",(0,a.kt)("inlineCode",{parentName:"p"},".container")," selector has a ",(0,a.kt)("inlineCode",{parentName:"p"},"padding")," property, a ",(0,a.kt)("inlineCode",{parentName:"p"},"margin")," property, and a ",(0,a.kt)("inlineCode",{parentName:"p"},"border")," property. The ",(0,a.kt)("inlineCode",{parentName:"p"},"#click-me")," selector has a ",(0,a.kt)("inlineCode",{parentName:"p"},"border")," property, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"hr")," selector has a ",(0,a.kt)("inlineCode",{parentName:"p"},"color")," property."),(0,a.kt)("p",null,"You can check out more properties ",(0,a.kt)("a",{parentName:"p",href:"https://web.stanford.edu/group/csp/cs21/csscheatsheet.pdf"},"here"),"."),(0,a.kt)("h3",{id:"css-selectors"},"CSS Selectors"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div className="\u201ccontainer\u201d">\n  <button id="\u201dclick-me\u201d" />\n  <hr />\n</div>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"div hr:hover {\n  background-color: black;\n}\n\n.container > #click-me {\n  background-color: grey;\n}\n")),(0,a.kt)("p",null,"Above, you can see how we use ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"selectors"))," to select elements in our HTML and then apply ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"properties"))," to them. In the above example, we have two selectors: ",(0,a.kt)("inlineCode",{parentName:"p"},"div hr:hover")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".container > #click-me"),". The first refers to any ",(0,a.kt)("inlineCode",{parentName:"p"},"hr")," element that is a child of a ",(0,a.kt)("inlineCode",{parentName:"p"},"div")," element and is being hovered over by the mouse. The second refers to any ",(0,a.kt)("inlineCode",{parentName:"p"},"#click-me")," element that is a child of a ",(0,a.kt)("inlineCode",{parentName:"p"},".container")," element."),(0,a.kt)("p",null,"You can check out more selectors ",(0,a.kt)("a",{parentName:"p",href:"https://htmlcheatsheet.com/css/"},"here"),"."),(0,a.kt)("h2",{id:"styling-options"},"Styling Options"),(0,a.kt)("p",null,"There are a few different ways to style your React components. We'll go over the most common ones here."),(0,a.kt)("h3",{id:"css"},"CSS"),(0,a.kt)("p",null,"CSS is the most common way to style your React components. You can use CSS in a few different ways:"),(0,a.kt)("h3",{id:"inline-styles"},"Inline styles"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"style")," prop to pass in a JavaScript object with CSS properties and values. This is the most common way to style React components."),(0,a.kt)("p",null,"Conceptually, the styles prop takes in an object with camelCased properties, where the names correspond to CSS properties, and the values correspond to the CSS values. For example, the following code will set the color of the text to red:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<div style={{ color: 'red' }}>This text is red!</div>\n")),(0,a.kt)("p",null,"Thus, you can manipulate CSS just like you would any other object. For instance,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\n\nconst MyComponent: React.FC = () => {\n  const styles = {\n    container: {\n      backgroundColor: 'red',\n      padding: '20px',\n    },\n    text: {\n      color: 'white',\n    },\n  };\n\n  return (\n    <div style={styles.container}>\n      <p style={styles.text}>Hello, world!</p>\n    </div>\n  );\n};\n\nexport default MyComponent;\n")),(0,a.kt)("p",null,"However, because the CSS is camelCased, this comes at a cost: you can't use CSS pseudo-selectors, media queries, or other CSS features that aren't supported by JavaScript. You can't use CSS classes, either."),(0,a.kt)("h3",{id:"css-files"},"CSS files"),(0,a.kt)("p",null,"In React, just like in normal HTML, you can use external CSS files to apply styles to your components. Here's an example of how you can use an external CSS file in a React function component written in TypeScript:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a new CSS file in your project directory, for example, styles.css.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/* styles.css */\n.container {\n  background-color: red;\n  padding: 20px;\n}\n\n.text {\n  color: white;\n}\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Import the CSS file in your React component file.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport './styles.css';\n\nconst MyComponent: React.FC = () => {\n  return (\n    <div className=\"container\">\n      <p className=\"text\">Hello, world!</p>\n    </div>\n  );\n};\n\nexport default MyComponent;\n")),(0,a.kt)("p",null,"In the above example, we import the CSS file styles.css in the React component file, and then we use the className property to apply the classes to the div and p elements."),(0,a.kt)("h3",{id:"css-modules"},"CSS modules"),(0,a.kt)("p",null,"CSS modules are a way to use CSS files in a modular way. This means that you can use the same CSS class names in different files without worrying about them conflicting with each other. This is useful when you have a large project with many CSS files."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a new CSS file in your project directory, for example, ",(0,a.kt)("inlineCode",{parentName:"li"},"styles.module.css"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/* styles.module.css */\n.container {\n  background-color: red;\n  padding: 20px;\n}\n\n.text {\n  color: white;\n}\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Import the CSS file in your React component file.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport styles from './styles.module.css';\n\nconst MyComponent: React.FC = () => {\n  return (\n    <div className={styles.container}>\n      <p className={styles.text}>Hello, world!</p>\n    </div>\n  );\n};\n\nexport default MyComponent;\n")),(0,a.kt)("p",null,"In the above example, we import the CSS file styles.module.css in the React component file, and then we use the className property to apply the classes to the div and p elements. Instead of passing a string, we pass the imported object, which contains the scoped class names as properties."),(0,a.kt)("h2",{id:"demo-1-external-css"},"Demo 1: External CSS"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://tinyurl.com/6mdndykp"},"https://tinyurl.com/6mdndykp")),(0,a.kt)("h2",{id:"demo-2-inline-css"},"Demo 2: Inline CSS"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://tinyurl.com/45w66v3t"},"https://tinyurl.com/45w66v3t")))}u.isMDXComponent=!0}}]);