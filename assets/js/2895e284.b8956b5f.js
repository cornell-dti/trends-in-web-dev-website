"use strict";(self.webpackChunktrends_in_web_dev_website=self.webpackChunktrends_in_web_dev_website||[]).push([[2020],{7300:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(6687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6749:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(3206),a=n(5421),o=(n(6687),n(7300)),i=["components"],l={id:"lecture6",title:"Lecture 6"},s=void 0,p={unversionedId:"lecture6",id:"version-2021fa/lecture6",isDocsHomePage:!1,title:"Lecture 6",description:"Lecture Slides",source:"@site/versioned_docs/version-2021fa/lecture6.md",sourceDirName:".",slug:"/lecture6",permalink:"/docs/lecture6",tags:[],version:"2021fa",frontMatter:{id:"lecture6",title:"Lecture 6"},sidebar:"version-2021fa/docs",previous:{title:"Lecture 5",permalink:"/docs/lecture5"},next:{title:"Lecture 7",permalink:"/docs/lecture7"}},c=[{value:"Conditional Rendering",id:"conditional-rendering",children:[],level:2},{value:"Composition vs. Inheritance",id:"composition-vs-inheritance",children:[{value:"Composition",id:"composition",children:[],level:3},{value:"Inheritance",id:"inheritance",children:[],level:3},{value:"<strong>React uses Composition</strong>",id:"react-uses-composition",children:[],level:3},{value:"Containment",id:"containment",children:[],level:3}],level:2},{value:"Lifting State Up",id:"lifting-state-up",children:[],level:2}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1WrI2lRkh-J9GOXuV7z8_SlQVXVrYlADWWYRLXjwAw1M/edit?usp=sharing"},"Lecture Slides")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/assignment4"},"Assignment 4")," (due 11/4 6:29 PM on CMS)"),(0,o.kt)("h2",{id:"conditional-rendering"},"Conditional Rendering"),(0,o.kt)("p",null,"Sometimes we only want things to render when a certain condition is met. For\nexample, only display text when we meet a certain condition. React has\nconditional rendering to make this very simple."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="PrelimTime.tsx"',title:'"PrelimTime.tsx"'},"import React from 'react';\n\nexport default ({ prelimToday }: { readonly prelimToday: boolean }) => {\n  if (prelimToday) {\n    return <p>I have a prelim today.</p>;\n  } else {\n    return <p>I don't have a prelim today.</p>;\n  }\n};\n")),(0,o.kt)("p",null,"In this example, we have a functional component ",(0,o.kt)("inlineCode",{parentName:"p"},"PrelimTime")," that takes in a\nprop ",(0,o.kt)("inlineCode",{parentName:"p"},"prelimToday"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"prelimToday"),' is a boolean holding whether we have a prelim\ntoday or not. We want the component to display "I have a prelim today." if\n',(0,o.kt)("inlineCode",{parentName:"p"},"prelimToday")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),' and "I don\'t have a prelim today." if it is ',(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("p",null,"Traditionally, we would use the ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," statement for this behavior (as shown\nabove). We can also use conditional rendering to make writing this functionality\nmore convenient."),(0,o.kt)("p",null,"First we can use the ",(0,o.kt)("strong",{parentName:"p"},"ternary operator"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="PrelimTime.tsx"',title:'"PrelimTime.tsx"'},"import React from 'react';\n\nexport default ({ prelimToday }: { readonly prelimToday: boolean }) => (\n  prelimToday\n    ? <p>I have a prelim today.</p>\n    : <p>I don't have a prelim today.</p>;\n);\n")),(0,o.kt)("p",null,"The ternary operator is also very common in other languages as well such as\nJava or Python. The basic syntax is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"[boolean expression] ? [true_result] : [false_result]\n")),(0,o.kt)("p",null,"Before the ",(0,o.kt)("inlineCode",{parentName:"p"},"?")," you have your expression producing ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". The part\nafter the ",(0,o.kt)("inlineCode",{parentName:"p"},"?")," but before the ",(0,o.kt)("inlineCode",{parentName:"p"},":")," is the result/functionality you want if the\nboolean expression evaluates to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". The part after the ",(0,o.kt)("inlineCode",{parentName:"p"},":")," is what you want\nto happen if the expression is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("p",null,"Connecting with the ",(0,o.kt)("inlineCode",{parentName:"p"},"PrelimTime")," example, my boolean expression was just the\nprop ",(0,o.kt)("inlineCode",{parentName:"p"},"prelimToday"),", although in your code it can be a more complex boolean\nexpression. If ",(0,o.kt)("inlineCode",{parentName:"p"},"prelimToday"),' is true, I display "I have a prelim today." If\n',(0,o.kt)("inlineCode",{parentName:"p"},"prelimToday"),' is false, I display "I have a prelim today."'),(0,o.kt)("p",null,'Notice though, how the only thing changing in this text is adding the word\n"don\'t" if ',(0,o.kt)("inlineCode",{parentName:"p"},"prelimToday")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". So only if ",(0,o.kt)("inlineCode",{parentName:"p"},"prelimToday")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", we\nwant to add don't."),(0,o.kt)("p",null,"React supports the use of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"&&"))," operator:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="PrelimTime.tsx"',title:'"PrelimTime.tsx"'},"import React from 'react';\n\nexport default ({ prelimToday }: { readonly prelimToday: boolean }) => (\n  <p>I {!prelimToday && \"don't\"} have a prelim today.</p>\n);\n")),(0,o.kt)("p",null,'Here, we display the text "I have a prelim today.". However, in the curly\nbraces, if ',(0,o.kt)("inlineCode",{parentName:"p"},"prelimToday")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),' then the word "don\'t" will be rendered.\nConditional rendering with ',(0,o.kt)("inlineCode",{parentName:"p"},"&&")," is useful when you only have expected behavior\nfor one branch of the conditional. In this case, I only had desired behavior if\n",(0,o.kt)("inlineCode",{parentName:"p"},"prelimToday")," was ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("p",null,"As you have seen, React's conditional rendering made modifying render behavior\nbased on conditions a lot easier. In this small example, we went from five lines\nof code in the component to just one!"),(0,o.kt)("h2",{id:"composition-vs-inheritance"},"Composition vs. Inheritance"),(0,o.kt)("p",null,"Composition and inheritance are two programming techniques for defining how classes relate to objects. (Think of classes as the blueprint for a house and objects the actual houses created from that blueprint)"),(0,o.kt)("h3",{id:"composition"},"Composition"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Composition"),' defines a class as the sum of its individual parts. This is a "has-a" relationship (e.g. a car has a steering wheel, has a window, etc). In Java (and other object oriented languages), these components are represented as ',(0,o.kt)("em",{parentName:"p"},"instance")," variables."),(0,o.kt)("h3",{id:"inheritance"},"Inheritance"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Inheritance"),' derives one class from another. If class A is the parent of class B and C, B and C inherit the properties/functions of A. This is a "is-a" relationship (e.g. car is a vehicle, circle is a shape.)'),(0,o.kt)("h3",{id:"react-uses-composition"},(0,o.kt)("strong",{parentName:"h3"},"React uses Composition")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"\u201cReact has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.\u201d"),"\n-- ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/composition-vs-inheritance.html"},"React Docs")),(0,o.kt)("h3",{id:"containment"},"Containment"),(0,o.kt)("p",null,"Components may not know their children ahead of time."),(0,o.kt)("p",null,"Children are the components you put within another component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<ComponentA>{/* anything here is a child of Component A */}</ComponentA>\n")),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"children")," prop to pass in children components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Container.tsx"',title:'"Container.tsx"'},"import React, { ReactNode } from 'react';\ntype Props = { readonly children: ReactNode };\nconst Container = (props: Props) => (\n  <div className=\"Border\">{props.children}</div>\n);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const App = () => (\n  <div className="App">\n    <Container>\n      <p>Hello!</p>\n      <p>Bye!</p>\n    </Container>\n  </div>\n);\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"props.children")," will have the paragraph elements."),(0,o.kt)("p",null,"We didn't actually get to this live demo, adapted from ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/composition-vs-inheritance.html"},"this tutorial")," in the React docs, during lecture but it is very simple if you want to try it out yourself. We also show how to import styles."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Container.tsx"',title:'"Container.tsx"'},"import React, { ReactNode } from 'react';\nimport './Container.css'; // this is how we import styles\n\ntype Props = { readonly children: ReactNode };\n\nexport default (props: Props) => <div className=\"Border\">{props.children}</div>;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Container.css"',title:'"Container.css"'},".Border {\n  border: 4px solid black;\n  background-color: azure;\n}\n")),(0,o.kt)("p",null,'Less common but you also may want multiple "holes" in your component (for example, a left and right child):'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="SplintPane.tsx"',title:'"SplintPane.tsx"'},"import React, { ReactNode } from 'react';\nimport './SplitPane.css';\n\ntype Props = { readonly left: ReactNode; readonly right: ReactNode };\n\nexport default (props: Props) => (\n  <div>\n    <div className=\"LeftPane\">{props.left}</div>\n    <div className=\"RightPane\">{props.right}</div>\n  </div>\n);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="SplitPane.css"',title:'"SplitPane.css"'},"/* these colors are ugly I know */\n.LeftPane {\n  float: left;\n  width: 50%;\n  background-color: red;\n}\n\n.RightPane {\n  float: right;\n  width: 50%;\n  background-color: aquamarine;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport SplitPane from './SplitPane';\nimport Container from './Container';\n\nexport default () => {\n  return (\n    <div className=\"App\">\n      <Container>\n        <p>Hello, world!</p>\n      </Container>\n      <SplitPane\n        left={<div>I'm on the left!</div>}\n        right={<div>I'm on the right!</div>}\n      />\n    </div>\n  );\n};\n")),(0,o.kt)("h2",{id:"lifting-state-up"},"Lifting State Up"),(0,o.kt)("p",null,"This section was a live demo, adapted from ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/lifting-state-up.html"},"this tutorial")," in the React docs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Calculator.tsx"',title:'"Calculator.tsx"'},"import { useState } from 'react';\nimport TemperatureInput from './TemperatureInput';\n\ntype Scale = 'celsius' | 'fahrenheit';\n\nconst Calculator = () => {\n  const [temperature, setTemperature] = useState('');\n  const [scale, setScale] = useState<Scale>('celsius');\n\n  const onCelsiusChange = (t: string) => {\n    setTemperature(t);\n    setScale('celsius');\n  };\n\n  const onFahrenheitChange = (t: string) => {\n    setTemperature(t);\n    setScale('fahrenheit');\n  };\n\n  const fahrenheitToCelsius = (t: number) => {\n    return ((t - 32) * 5) / 9;\n  };\n\n  const celsiusToFahrenheit = (t: number) => {\n    return (t * 9) / 5 + 32;\n  };\n\n  const tryConvert = (targetScale: Scale) => {\n    const temp = parseFloat(temperature);\n    if (Number.isNaN(temp)) {\n      return '';\n    }\n    const res = getAppropriateTemperature(temp, targetScale);\n    const trimmed = Math.round(res * 1000) / 1000;\n    return trimmed.toString();\n  };\n\n  const getAppropriateTemperature = (tempNum: number, targetScale: Scale) => {\n    if (targetScale === scale) {\n      return tempNum;\n    } else {\n      if (targetScale === 'celsius') {\n        return fahrenheitToCelsius(tempNum);\n      } else {\n        return celsiusToFahrenheit(tempNum);\n      }\n    }\n  };\n\n  return (\n    <div>\n      <TemperatureInput\n        scale=\"celsius\"\n        temperature={tryConvert('celsius')}\n        onTemperatureChange={onCelsiusChange}\n      />\n      <TemperatureInput\n        scale=\"fahrenheit\"\n        temperature={tryConvert('fahrenheit')}\n        onTemperatureChange={onFahrenheitChange}\n      />\n    </div>\n  );\n};\n\nexport type { Scale };\nexport default Calculator;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="TemperatureInput.tsx"',title:'"TemperatureInput.tsx"'},"import { Scale } from './Calculator';\n\ntype Props = {\n  readonly scale: Scale;\n  readonly temperature: string;\n  readonly onTemperatureChange: (t: string) => void;\n};\n\nconst TemperatureInput = ({\n  scale,\n  temperature,\n  onTemperatureChange,\n}: Props) => {\n  return (\n    <div>\n      <legend>Enter temperature in {scale}</legend>\n      <input\n        value={temperature}\n        onChange={(event) => onTemperatureChange(event.target.value)}\n      />\n    </div>\n  );\n};\n\nexport default TemperatureInput;\n")))}u.isMDXComponent=!0},3206:function(e,t,n){function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:function(){return r}})},5421:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})}}]);