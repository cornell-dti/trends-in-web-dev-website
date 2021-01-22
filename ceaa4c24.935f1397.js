(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(125)),o={id:"assignment5",title:"Assignment 5"},s={unversionedId:"assignment5",id:"version-2020fa/assignment5",isDocsHomePage:!1,title:"Assignment 5",description:"For A5, you'll be building a React App that utilizes conditional rendering",source:"@site/versioned_docs/version-2020fa/assignment5.md",slug:"/assignment5",permalink:"/docs/2020fa/assignment5",version:"2020fa",sidebar:"version-2020fa/docs",previous:{title:"Assignment 4",permalink:"/docs/2020fa/assignment4"},next:{title:"Final Project",permalink:"/docs/2020fa/finalproject"}},c=[{value:"Part 1",id:"part-1",children:[]},{value:"Part 2",id:"part-2",children:[]},{value:"Part 3",id:"part-3",children:[]},{value:"Submission",id:"submission",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"For A5, you'll be building a React App that utilizes conditional rendering\nand the concept of lifting state up."),Object(i.b)("p",null,"Sam is trying to build a system to search through his friends list on\nSamBook, a new social media platform that he built."),Object(i.b)("p",null,"For this search engine, you'll be entering a search query and\nmaintaining two separate components: the first shows\nall results that contain the search query, and the\nsecond shows all OTHER results (i.e. all results that don't contain\nthe search query)."),Object(i.b)("h2",{id:"part-1"},"Part 1"),Object(i.b)("p",null,"In App.tsx, initialize a state variable that contains the search query.\nAlso, create an input field that interacts with this state variable."),Object(i.b)("p",null,"Create a state variable that contains Sam's friends list. For simplicity,\nyou can assume friends are just their name with type ",Object(i.b)("inlineCode",{parentName:"p"},"string"),". Make\nanother input field and a button associated with it to add a name to\nSam's list. Do not display the list in this component; we will be passing\nit down to child components."),Object(i.b)("h2",{id:"part-2"},"Part 2"),Object(i.b)("p",null,"Create two components: ",Object(i.b)("inlineCode",{parentName:"p"},"Filtered.tsx")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Other.tsx"),". The first one\nwill display a list of all of Sam's friends who have the search query\nas a substring of their name (ignore capitalization). The second one\nwill display all the other friends."),Object(i.b)("h2",{id:"part-3"},"Part 3"),Object(i.b)("p",null,'Use conditional rendering to account for the case in which the filtered\nlist is empty. Display a message such as "No friends found" if the filtered\nlist in either component is empty.'),Object(i.b)("h2",{id:"submission"},"Submission"),Object(i.b)("p",null,"Submit to CMS a zip file of everything in your project (",Object(i.b)("inlineCode",{parentName:"p"},"create-react-app"),") directory but ",Object(i.b)("strong",{parentName:"p"},"remove node_modules")," . ",Object(i.b)("em",{parentName:"p"},"Failure to remove")," ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," ",Object(i.b)("em",{parentName:"p"},"will result in a ",Object(i.b)("strong",{parentName:"em"},"10 point")," deduction"),"."))}p.isMDXComponent=!0},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);