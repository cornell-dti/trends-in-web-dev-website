"use strict";(self.webpackChunktrends_in_web_dev_website=self.webpackChunktrends_in_web_dev_website||[]).push([[7476],{7300:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(6687);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6513:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(3206),o=n(5421),i=(n(6687),n(7300)),a=["components"],l={id:"setup-editor",title:"Setup your editor"},u=void 0,s={unversionedId:"setup-editor",id:"version-2023sp/setup-editor",isDocsHomePage:!1,title:"Setup your editor",description:"For convenience, we assume you will use VSCode. If you are using WebStorm and",source:"@site/versioned_docs/version-2023sp/setup-editor.md",sourceDirName:".",slug:"/setup-editor",permalink:"/docs/setup-editor",tags:[],version:"2023sp",frontMatter:{id:"setup-editor",title:"Setup your editor"},sidebar:"docs",previous:{title:"Setup your development environment",permalink:"/docs/setup-environment"}},c=[{value:"Recommended Extensions",id:"recommended-extensions",children:[{value:"ESLint",id:"eslint",children:[],level:3},{value:"Bracket Pair Colorizer",id:"bracket-pair-colorizer",children:[],level:3},{value:"npm",id:"npm",children:[],level:3}],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For convenience, we assume you will use VSCode. If you are using WebStorm and\nAtom, you are likely to find some extensions that provide similar\nfunctionalities."),(0,i.kt)("h2",{id:"recommended-extensions"},"Recommended Extensions"),(0,i.kt)("p",null,"To install extensions in VS Code, navigate to the left-hand sidebar, and click the building blocks icon at the bottom. This should take you to the Extensions marketplace."),(0,i.kt)("h3",{id:"eslint"},"ESLint"),(0,i.kt)("p",null,"Installing ESLint in VSCode will give you real-time linter feedback in any JavaScript code you write, allowing you to quickly pinpoint many problems and have readable, proper formatting."),(0,i.kt)("p",null,"Once installed, add these lines to your VSCode Settings (refer to ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/getstarted/settings"},"this link")," if you need help getting there or alternatively open the command palette in VSCode with ",(0,i.kt)("kbd",null,"CMD"),"/",(0,i.kt)("kbd",null,"CTRL")," + ",(0,i.kt)("kbd",null,"SHIFT")," + ",(0,i.kt)("kbd",null,"P")," and search ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.json"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'  // Other settings ...\n  "eslint.alwaysShowStatus": true,\n  "editor.codeActionsOnSave": {\n    "source.fixAll.eslint": true\n  },\n  "eslint.packageManager": "yarn"\n')),(0,i.kt)("h3",{id:"bracket-pair-colorizer"},"Bracket Pair Colorizer"),(0,i.kt)("p",null,"Highlights matching brackets to make code easier to read."),(0,i.kt)("h3",{id:"npm"},"npm"),(0,i.kt)("p",null,"This will be useful later when inspecting ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," files."))}d.isMDXComponent=!0},3206:function(e,t,n){function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:function(){return r}})},5421:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})}}]);