(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{46:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",function(){return c}),t.d(n,"rightToc",function(){return i}),t.d(n,"default",function(){return p});t(0);var r=t(66);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c={id:"lecture3",title:"Lecture 3 - Random JS Facts"},i=[{value:"Random Facts",id:"random-facts",children:[]}],l={rightToc:i},u="wrapper";function p(e){var n=e.components,t=o(e,["components"]);return Object(r.b)(u,a({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"random-facts"},"Random Facts"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"undefined == null")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"this")," is fun."),Object(r.b)("li",{parentName:"ul"},"Classes are functions.")))}p.isMDXComponent=!0},66:function(e,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"b",function(){return s});var r=t(0),a=t.n(r),o=a.a.createContext({}),c=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},i=function(e){var n=c(e.components);return a.a.createElement(o.Provider,{value:n},e.children)};var l="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=function(e){var n=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,i=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),l=c(n),p=t,s=l[o+"."+p]||l[p]||u[p]||r;return n?a.a.createElement(s,Object.assign({},i,{components:n})):a.a.createElement(s,i)};function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[l]="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);