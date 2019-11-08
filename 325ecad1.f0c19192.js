(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{151:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return c}));t(58),t(31),t(22),t(23),t(59),t(0);var a=t(171);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var i={id:"lecture3",title:"Lecture 3 - Frontend 2"},o=[{value:"Conditional Rendering",id:"conditional-rendering",children:[]},{value:"Lifting State Up",id:"lifting-state-up",children:[]}],p={rightToc:o},l="wrapper";function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(l,r({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",r({parentName:"p"},{href:"https://docs.google.com/presentation/d/1heis2PITlZCH75tmn3ht9DqmeXsLQi0a3bboTkNpM-g/edit?usp=sharing"}),"Lecture Slides")),Object(a.b)("h2",{id:"conditional-rendering"},"Conditional Rendering"),Object(a.b)("p",null,"Sometimes we only want things to render when a certain condition is met. For\nexample, only display text when we meet a certain condition. React has\nconditional rendering to make this very simple."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"// PrelimTime.jsx\nimport React from 'react';\n\nexport default ({ prelimToday }) => {\n  if (prelimToday) {\n    return <p>I have a prelim today.</p>;\n  } else {\n    return <p>I don't have a prelim today.</p>;\n  }\n};\n")),Object(a.b)("p",null,"In this example, we have a functional component ",Object(a.b)("inlineCode",{parentName:"p"},"PrelimTime")," that takes in a\nprop ",Object(a.b)("inlineCode",{parentName:"p"},"prelimToday"),". ",Object(a.b)("inlineCode",{parentName:"p"},"prelimToday"),' is a boolean holding whether we have a prelim\ntoday or not. We want the component to display "I have a prelim today." if\n',Object(a.b)("inlineCode",{parentName:"p"},"prelimToday")," is ",Object(a.b)("inlineCode",{parentName:"p"},"true"),' and "I don\'t have a prelim today." if it is ',Object(a.b)("inlineCode",{parentName:"p"},"false"),"."),Object(a.b)("p",null,"Traditionally, we would use the ",Object(a.b)("inlineCode",{parentName:"p"},"if")," statement for this behavior (as shown\nabove). We can also use conditional rendering to make writing this functionality\nmore convenient."),Object(a.b)("p",null,"First we can use the ",Object(a.b)("strong",{parentName:"p"},"ternary operator"),":"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"// PrelimTime.jsx\nimport React from 'react';\n\nexport default ({ prelimToday }) => (\n  prelimToday\n    ? <p>I have a prelim today.</p>\n    : <p>I don't have a prelim today.</p>;\n);\n")),Object(a.b)("p",null,"The ternary operator is also very common in other languages as well such as\nJava or Python. The basic syntax is as follows:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"[boolean expression] ? [true_result] : [false_result]\n")),Object(a.b)("p",null,"Before the ",Object(a.b)("inlineCode",{parentName:"p"},"?")," you have your expression producing ",Object(a.b)("inlineCode",{parentName:"p"},"true")," or ",Object(a.b)("inlineCode",{parentName:"p"},"false"),". The part\nafter the ",Object(a.b)("inlineCode",{parentName:"p"},"?")," but before the ",Object(a.b)("inlineCode",{parentName:"p"},":")," is the result/functionality you want if the\nboolean expression evaluates to ",Object(a.b)("inlineCode",{parentName:"p"},"true"),". The part after the ",Object(a.b)("inlineCode",{parentName:"p"},":")," is what you want\nto happen if the expression is ",Object(a.b)("inlineCode",{parentName:"p"},"false"),"."),Object(a.b)("p",null,"Connecting with the ",Object(a.b)("inlineCode",{parentName:"p"},"PrelimTime")," example, my boolean expression was just the\nprop ",Object(a.b)("inlineCode",{parentName:"p"},"prelimToday"),", although in your code it can be a more complex boolean\nexpression. If ",Object(a.b)("inlineCode",{parentName:"p"},"prelimToday"),' is true, I display "I have a prelim today." If\n',Object(a.b)("inlineCode",{parentName:"p"},"prelimToday"),' is false, I display "I have a prelim today."'),Object(a.b)("p",null,'Notice though, how the only thing changing in this text is adding the word\n"don\'t" if ',Object(a.b)("inlineCode",{parentName:"p"},"prelimToday")," is ",Object(a.b)("inlineCode",{parentName:"p"},"false"),". So only if ",Object(a.b)("inlineCode",{parentName:"p"},"prelimToday")," is ",Object(a.b)("inlineCode",{parentName:"p"},"false"),", we\nwant to add don't."),Object(a.b)("p",null,"React supports the use of ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"&&"))," operator:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"// PrelimTime.jsx\nimport React from 'react';\n\nexport default ({ prelimToday }) => (\n  <p>I {!prelimToday && \"don't\"} have a prelim today.</p>\n);\n")),Object(a.b)("p",null,'Here, we display the text "I have a prelim today.". However, in the curly\nbraces, if ',Object(a.b)("inlineCode",{parentName:"p"},"prelimToday")," is ",Object(a.b)("inlineCode",{parentName:"p"},"false"),' then the word "don\'t" will be rendered.\nConditional rendering with ',Object(a.b)("inlineCode",{parentName:"p"},"&&")," is useful when you only have expected behavior\nfor one branch of the conditional. In this case, I only had desired behavior if\n",Object(a.b)("inlineCode",{parentName:"p"},"prelimToday")," were ",Object(a.b)("inlineCode",{parentName:"p"},"false"),"."),Object(a.b)("p",null,"As you have seen, React's conditional rendering made modifying render behavior\nbased on conditions a lot easier. In this small example, we went from five lines\nof code in the component to just one!"),Object(a.b)("h2",{id:"lifting-state-up"},"Lifting State Up"),Object(a.b)("p",null,"This section was a live demo, adapted from ",Object(a.b)("a",r({parentName:"p"},{href:""}),"this tutorial")," in the React docs."),Object(a.b)("p",null,"App.js"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { useState } from 'react';\nimport './App.css';\nimport FahrenheitInput from './FahrenheitInput';\nimport CelciusInput from './CelciusInput';\n\nfunction App() {\n  const [temperature, setTemperature] = useState(-40);\n\n  return (\n    <div className=\"App\">\n      <label>Fahrenheit:</label>\n      <FahrenheitInput\n        temperature={temperature}\n        callback={temp => setTemperature(temp)}\n      />\n      <br />\n      <label>Celcius:</label>\n      <CelciusInput\n        temperature={temperature}\n        callback={temp => setTemperature(temp)}\n      />\n      <br />\n      {temperature >= 100 ? (\n        <span>Water would boil here!</span>\n      ) : (\n        <span>Water wouldn't boil here!</span>\n      )}\n      <br />\n      <span>Water would {temperature <= 0 && 'not'} freeze here!</span>\n    </div>\n  );\n}\n\nexport default App;\n")),Object(a.b)("p",null,"CelciusInput.jsx"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\n\nexport default ({ temperature, callback }) => {\n  const handlechange = e => {\n    callback(e.target.value || 0);\n  };\n  return <input value={temperature} onChange={handlechange} />;\n};\n")),Object(a.b)("p",null,"FahrenheitInput.jsx"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\n\nexport default ({ temperature, callback }) => {\n  const handlechange = e => {\n    callback((((e.target.value || 0) - 32) * 5) / 9);\n  };\n  return <input value={(temperature * 9) / 5 + 32} onChange={handlechange} />;\n};\n")))}c.isMDXComponent=!0},171:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a),i=r.a.createContext({}),o=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},p=function(e){var n=o(e.components);return r.a.createElement(i.Provider,{value:n},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),s=o(t),b=a,m=s[p+"."+b]||s[b]||c[b]||i;return t?r.a.createElement(m,Object.assign({},{ref:n},l,{components:t})):r.a.createElement(m,Object.assign({},{ref:n},l))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[l]="string"==typeof e?e:a,o[1]=p;for(var b=2;b<i;b++)o[b]=t[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);