"use strict";(self.webpackChunktrends_in_web_dev_website=self.webpackChunktrends_in_web_dev_website||[]).push([[6536],{7300:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(6687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return n?i.createElement(k,o(o({ref:t},u),{},{components:n})):i.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7939:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var i=n(3206),r=n(5421),a=(n(6687),n(7300)),o=["components"],l={id:"assignment2",title:"Assignment 2"},p=void 0,s={unversionedId:"assignment2",id:"version-2023sp/assignment2",isDocsHomePage:!1,title:"Assignment 2",description:"In this assignment we will be getting familiar with React!",source:"@site/versioned_docs/version-2023sp/assignment2.md",sourceDirName:".",slug:"/assignment2",permalink:"/docs/assignment2",tags:[],version:"2023sp",frontMatter:{id:"assignment2",title:"Assignment 2"}},u=[{value:"Step 0 - Setup",id:"step-0---setup",children:[],level:2},{value:"Step 1 - Get Comfortable",id:"step-1---get-comfortable",children:[],level:2},{value:"Step 2 - Club Roster",id:"step-2---club-roster",children:[],level:2},{value:"Step 3 - BRB Clicker",id:"step-3---brb-clicker",children:[{value:"Hints",id:"hints",children:[],level:3}],level:2},{value:"Step 4 - Submission",id:"step-4---submission",children:[],level:2}],c={toc:u};function m(e){var t=e.components,l=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this assignment we will be getting familiar with React!"),(0,a.kt)("h2",{id:"step-0---setup"},"Step 0 - Setup"),(0,a.kt)("p",null,"Create a Next.js using our ",(0,a.kt)("strong",{parentName:"p"},"starter code")," with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'yarn create next-app --typescript --example "https://github.com/cornell-dti/trends-sp22-starters/tree/main/a2" YOUR_DIR_NAME\n')),(0,a.kt)("h2",{id:"step-1---get-comfortable"},"Step 1 - Get Comfortable"),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn dev")," in the project directory to start the server and navigate to\n",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:3000")," to see what the starter code gives you."),(0,a.kt)("p",null,"Look around the project code to see what it's all about."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First peek with ",(0,a.kt)("inlineCode",{parentName:"li"},"pages/index.tsx"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This is the homepage!"),(0,a.kt)("li",{parentName:"ul"},"You see that it imports a ",(0,a.kt)("inlineCode",{parentName:"li"},"Layout")," component from ",(0,a.kt)("inlineCode",{parentName:"li"},"components/layout")))),(0,a.kt)("li",{parentName:"ul"},"Look at ",(0,a.kt)("inlineCode",{parentName:"li"},"components/layout/Layout.tsx"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This component surrounds the children between ",(0,a.kt)("inlineCode",{parentName:"li"},"Navbar")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Footer"),"\ncomponents"),(0,a.kt)("li",{parentName:"ul"},"Make sure understand how everything is put together")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Make sure to fill in all the TODOs in addition to the steps in this writeup!")),(0,a.kt)("h2",{id:"step-2---club-roster"},"Step 2 - Club Roster"),(0,a.kt)("p",null,"You have been assigned to make a roster web page for your favorite club!"),(0,a.kt)("p",null,"We will be taking advantage of the ",(0,a.kt)("inlineCode",{parentName:"p"},".map()")," function to display a list of data."),(0,a.kt)("p",null,"On your browser, navigate to the Club Roster link in the NavBar, which will\nbring you to ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:3000/roster"),". This page corresponds to the\n",(0,a.kt)("inlineCode",{parentName:"p"},"pages/roster.tsx")," file in your project."),(0,a.kt)("p",null,"Notice that the page imports ",(0,a.kt)("inlineCode",{parentName:"p"},"/components/roster/Roster.tsx")," - navigate to that\nfile to start working."),(0,a.kt)("p",null,"Here is everything you need to do to create your roster:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Extend the ",(0,a.kt)("inlineCode",{parentName:"li"},"ClubMember")," type with AT LEAST TWO other fields/attributes"),(0,a.kt)("li",{parentName:"ul"},"Extend the ",(0,a.kt)("inlineCode",{parentName:"li"},"rosterData")," list with AT LEAST THREE total club members (you may\nremove the example if you wish)"),(0,a.kt)("li",{parentName:"ul"},"Extend the ",(0,a.kt)("inlineCode",{parentName:"li"},"RosterItem")," component to display the additional fields you've\nadded to ",(0,a.kt)("inlineCode",{parentName:"li"},"ClubMember")),(0,a.kt)("li",{parentName:"ul"},"In the ",(0,a.kt)("inlineCode",{parentName:"li"},"Roster")," component, display the list of club members in ",(0,a.kt)("inlineCode",{parentName:"li"},"rosterData"),"\nusing your ",(0,a.kt)("inlineCode",{parentName:"li"},"RosterItem")," component")),(0,a.kt)("h2",{id:"step-3---brb-clicker"},"Step 3 - BRB Clicker"),(0,a.kt)("p",null,"You played ",(0,a.kt)("a",{parentName:"p",href:"https://orteil.dashnet.org/cookieclicker/"},"Cookie Clicker")," and want\nto make your version. ",(0,a.kt)("strong",{parentName:"p"},"Introducing BRB Clicker!")),(0,a.kt)("p",null,"We will be taking advantage of various React ",(0,a.kt)("strong",{parentName:"p"},"hooks")," to introduce\ninteractivity and state into our web app. We will be mainly dealing with\n",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect"),", but ",(0,a.kt)("inlineCode",{parentName:"p"},"useRef")," is given in the starter code as well."),(0,a.kt)("p",null,"The game operates as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You start with 0 BRBs. You want more :)"),(0,a.kt)("li",{parentName:"ul"},"Clicking ",(0,a.kt)("inlineCode",{parentName:"li"},"Acquire BRB")," will give you 1 BRB"),(0,a.kt)("li",{parentName:"ul"},"Clicking ",(0,a.kt)("inlineCode",{parentName:"li"},"Buy")," under ",(0,a.kt)("inlineCode",{parentName:"li"},"Hire Freshman")," will spend 10 BRBs but increase your\npassive income by 1 BRB per tick")),(0,a.kt)("p",null,"We may be expanding upon this in another assignment, but for now we will only\nhave 1 upgrade (hiring freshmen)."),(0,a.kt)("p",null,"Your task is to fill in the unimplemented parts of the starter code in\n",(0,a.kt)("inlineCode",{parentName:"p"},"components/game/Game.tsx")," to make this game work."),(0,a.kt)("p",null,"It'll look like this ",(0,a.kt)("img",{alt:"game demo",src:n(8020).Z})),(0,a.kt)("h3",{id:"hints"},"Hints"),(0,a.kt)("p",null,"Take advantage of the TODOs placed around the code!"),(0,a.kt)("p",null,"Remember that the second argument of ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect"),' dictates when this "effect"\ntriggers. A value of ',(0,a.kt)("inlineCode",{parentName:"p"},"[]")," means the effect will only run once at the beginning.\nA value of ",(0,a.kt)("inlineCode",{parentName:"p"},"[a, b]")," will cause the effect to run every time either ",(0,a.kt)("inlineCode",{parentName:"p"},"a")," OR ",(0,a.kt)("inlineCode",{parentName:"p"},"b")," is\nmodified."),(0,a.kt)("p",null,"Remember that ",(0,a.kt)("inlineCode",{parentName:"p"},"useState(init)")," can be called with an argument specifying the\ninitial value of the state."),(0,a.kt)("p",null,"Fun fact: you can parameterize the ",(0,a.kt)("inlineCode",{parentName:"p"},"useState<Type>()")," call with the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Type>"),"\nnotation to state the type of the state variable. However if you supply an\ninitial value, TypeScript will infer the type (unintuitively sometimes, so watch\nout!) For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"useState<number>(0)")," is the same as ",(0,a.kt)("inlineCode",{parentName:"p"},"useState(0)"),"."),(0,a.kt)("p",null,"Press F12 (in most browsers) to bring up your developer tools. Navigate to the\nConsole tab to look at the console output. You can place ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log()")," calls\nin your code and monitor this console to help debug."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"onClick")," property of the ",(0,a.kt)("inlineCode",{parentName:"p"},"button")," element fires whenever the button is\nclicked. Make sure you are passing in a function ",(0,a.kt)("strong",{parentName:"p"},"to be called"),", rather than\nthe result of calling a function.",(0,a.kt)("br",{parentName:"p"}),"\n","If in doubt, wrap it in an anonymous function: eg. ",(0,a.kt)("inlineCode",{parentName:"p"},'() => console.log("hi")')," vs\n",(0,a.kt)("inlineCode",{parentName:"p"},'console.log("hi")')),(0,a.kt)("h2",{id:"step-4---submission"},"Step 4 - Submission"),(0,a.kt)("p",null,"Once you are done, please zip up everything in your project folder EXCEPT the\n",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".next")," folders."),(0,a.kt)("p",null,"Then submit to CMS!"))}m.isMDXComponent=!0},8020:function(e,t,n){t.Z=n.p+"assets/images/game-demo-5bfc87b3e5c131de5810f241525790e8.gif"},3206:function(e,t,n){function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},i.apply(this,arguments)}n.d(t,{Z:function(){return i}})},5421:function(e,t,n){function i(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,{Z:function(){return i}})}}]);