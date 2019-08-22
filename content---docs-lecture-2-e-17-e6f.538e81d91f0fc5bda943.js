(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{44:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",function(){return p}),r.d(n,"rightToc",function(){return s}),r.d(n,"default",function(){return l});r(0);var t=r(66);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p={id:"lecture2",title:"Lecture 2 - Back End Web Development"},s=[{value:"Example Code",id:"example-code",children:[]}],c={rightToc:s},i="wrapper";function l(e){var n=e.components,r=o(e,["components"]);return Object(t.b)(i,a({},c,r,{components:n,mdxType:"MDXLayout"}),Object(t.b)("h2",{id:"example-code"},"Example Code"),Object(t.b)("pre",null,Object(t.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"const express = require('express');\nconst bodyParser = require('body-parser');\n\nconst app = express();\nconst port = 3000;\n\napp.use(express.static('public'));\napp.use(bodyParser.json());\n\napp.get('/', (req, res) => {\n  res.send('This is the homepage.');\n});\n\napp.get('/api/hello-world', (req, res) => {\n  res.json({ hello: 'world' });\n});\n\napp.post('/api/flip-first-last-name', (req, res) => {\n  console.log(req.body);\n  const { firstName, lastName } = req.body;\n  res.json({ firstName: lastName, lastName: firstName });\n});\n\napp.listen(port, () => console.log(`Example app listening on port ${port}!`));\n")))}l.isMDXComponent=!0},66:function(e,n,r){"use strict";r.d(n,"a",function(){return s}),r.d(n,"b",function(){return u});var t=r(0),a=r.n(t),o=a.a.createContext({}),p=function(e){var n=a.a.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):Object.assign({},n,e)),r},s=function(e){var n=p(e.components);return a.a.createElement(o.Provider,{value:n},e.children)};var c="mdxType",i={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},l=function(e){var n=e.components,r=e.mdxType,t=e.originalType,o=e.parentName,s=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===n.indexOf(t)&&(r[t]=e[t]);return r}(e,["components","mdxType","originalType","parentName"]),c=p(n),l=r,u=c[o+"."+l]||c[l]||i[l]||t;return n?a.a.createElement(u,Object.assign({},s,{components:n})):a.a.createElement(u,s)};function u(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,p=new Array(o);p[0]=l;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[c]="string"==typeof e?e:t,p[1]=s;for(var u=2;u<o;u++)p[u]=r[u];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"}}]);