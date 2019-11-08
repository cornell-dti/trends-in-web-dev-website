(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{165:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return s}));t(58),t(31),t(22),t(23),t(59),t(0);var r=t(171);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var o={id:"setup-environment",title:"Setup your development environment"},i=[{value:"Install Node.js",id:"install-nodejs",children:[]},{value:"Install Yarn",id:"install-yarn",children:[]}],l={rightToc:i},c="wrapper";function s(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(c,a({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"install-nodejs"},"Install Node.js"),Object(r.b)("p",null,"Go to ",Object(r.b)("a",a({parentName:"p"},{href:"https://nodejs.org/en/download/"}),"this website")," and follow the instructions."),Object(r.b)("p",null,"For consistency, we will use Node version newer than LTS."),Object(r.b)("h2",{id:"install-yarn"},"Install Yarn"),Object(r.b)("p",null,"For convenience, we assume you will use Yarn instead of npm."),Object(r.b)("p",null,"Go to ",Object(r.b)("a",a({parentName:"p"},{href:"https://yarnpkg.com/en/"}),"this website")," and follow the instructions."))}s.isMDXComponent=!0},171:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return p}));var r=t(0),a=t.n(r),o=a.a.createContext({}),i=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},l=function(e){var n=i(e.components);return a.a.createElement(o.Provider,{value:n},e.children)};var c="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),u=i(t),p=r,f=u[l+"."+p]||u[p]||s[p]||o;return t?a.a.createElement(f,Object.assign({},{ref:n},c,{components:t})):a.a.createElement(f,Object.assign({},{ref:n},c))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);