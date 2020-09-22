(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(6),i=(n(0),n(82)),a={id:"setup-editor",title:"Setup your editor"},c={unversionedId:"setup-editor",id:"setup-editor",isDocsHomePage:!1,title:"Setup your editor",description:"For convenience, we assume you will use VSCode. If you are using WebStorm and",source:"@site/docs/setup-editor.md",slug:"/setup-editor",permalink:"/docs/setup-editor",version:"current",sidebar:"docs",previous:{title:"Setup your development environment",permalink:"/docs/setup-environment"},next:{title:"Lecture 0",permalink:"/docs/lecture0"}},l=[{value:"Recommended Extensions",id:"recommended-extensions",children:[{value:"ESLint",id:"eslint",children:[]},{value:"Bracket Pair Colorizer",id:"bracket-pair-colorizer",children:[]},{value:"npm",id:"npm",children:[]}]}],s={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"For convenience, we assume you will use VSCode. If you are using WebStorm and\nAtom, you are likely to find some extensions that provide similar\nfunctionalities."),Object(i.a)("h2",{id:"recommended-extensions"},"Recommended Extensions"),Object(i.a)("p",null,"To install extensions in VS Code, navigate to the left-hand sidebar, and click the building blocks icon at the bottom. This should take you to the Extensions marketplace."),Object(i.a)("h3",{id:"eslint"},"ESLint"),Object(i.a)("p",null,"Installing ESLint in VSCode will give you real-time linter feedback in any JavaScript code you write, allowing you to quickly pinpoint many problems and have readable, proper formatting."),Object(i.a)("p",null,"Once installed, add these lines to your VSCode Settings (refer to ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"https://code.visualstudio.com/docs/getstarted/settings"}),"this link")," if you need help getting there):"),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'  // Other settings ...\n  "eslint.alwaysShowStatus": true,\n  "eslint.autoFixOnSave": true,\n  "eslint.enable": true,\n  "eslint.packageManager": "yarn"\n')),Object(i.a)("h3",{id:"bracket-pair-colorizer"},"Bracket Pair Colorizer"),Object(i.a)("p",null,"Highlights matching brackets to make code easier to read."),Object(i.a)("h3",{id:"npm"},"npm"),Object(i.a)("p",null,"This will be useful later when inspecting ",Object(i.a)("inlineCode",{parentName:"p"},"package.json")," files."))}u.isMDXComponent=!0},82:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,b=d["".concat(a,".").concat(m)]||d[m]||p[m]||i;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);