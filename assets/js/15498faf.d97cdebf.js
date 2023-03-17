"use strict";(self.webpackChunktrends_in_web_dev_website=self.webpackChunktrends_in_web_dev_website||[]).push([[6536],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4200:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"assignment2",title:"Assignment 2"},s=void 0,p={unversionedId:"assignment2",id:"version-2023sp/assignment2",isDocsHomePage:!1,title:"Assignment 2",description:"Starter template here",source:"@site/versioned_docs/version-2023sp/assignment2.md",sourceDirName:".",slug:"/assignment2",permalink:"/docs/assignment2",tags:[],version:"2023sp",frontMatter:{id:"assignment2",title:"Assignment 2"},sidebar:"docs",previous:{title:"Assignment 1",permalink:"/docs/assignment1"}},u=[{value:"Starter template here",id:"starter-template-here",children:[],level:2},{value:"Step 0 - Setup",id:"step-0---setup",children:[],level:2},{value:"Step 1 - Get Comfortable",id:"step-1---get-comfortable",children:[],level:2},{value:"Step 2 - Club Roster",id:"step-2---club-roster",children:[],level:2},{value:"Step 3 - BRB Clicker",id:"step-3---brb-clicker",children:[{value:"Hints",id:"hints",children:[],level:3}],level:2},{value:"Step 4 - Submission",id:"step-4---submission",children:[],level:2}],m={toc:u};function c(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"starter-template-here"},"Starter template ",(0,r.kt)("a",{parentName:"h2",href:"https://github.com/cornell-dti/trends-sp23-starters/releases/download/1.0/a2.zip"},"here")),(0,r.kt)("p",null,"In this assignment we will be getting familiar with React!"),(0,r.kt)("h2",{id:"step-0---setup"},"Step 0 - Setup"),(0,r.kt)("p",null,"Create a Next.js using our ",(0,r.kt)("strong",{parentName:"p"},"starter code")," with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'yarn create next-app --typescript --example "https://github.com/cornell-dti/trends-sp22-starters/tree/main/a2" YOUR_DIR_NAME\n')),(0,r.kt)("h2",{id:"step-1---get-comfortable"},"Step 1 - Get Comfortable"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn dev")," in the project directory to start the server and navigate to\n",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:3000")," to see what the starter code gives you."),(0,r.kt)("p",null,"Look around the project code to see what it's all about."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First peek with ",(0,r.kt)("inlineCode",{parentName:"li"},"pages/index.tsx"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is the homepage!"),(0,r.kt)("li",{parentName:"ul"},"You see that it imports a ",(0,r.kt)("inlineCode",{parentName:"li"},"Layout")," component from ",(0,r.kt)("inlineCode",{parentName:"li"},"components/layout")))),(0,r.kt)("li",{parentName:"ul"},"Look at ",(0,r.kt)("inlineCode",{parentName:"li"},"components/layout/Layout.tsx"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This component surrounds the children between ",(0,r.kt)("inlineCode",{parentName:"li"},"Navbar")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Footer"),"\ncomponents"),(0,r.kt)("li",{parentName:"ul"},"Make sure understand how everything is put together")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Make sure to fill in all the TODOs in addition to the steps in this writeup!")),(0,r.kt)("h2",{id:"step-2---club-roster"},"Step 2 - Club Roster"),(0,r.kt)("p",null,"You have been assigned to make a roster web page for your favorite club!"),(0,r.kt)("p",null,"We will be taking advantage of the ",(0,r.kt)("inlineCode",{parentName:"p"},".map()")," function to display a list of data."),(0,r.kt)("p",null,"On your browser, navigate to the Club Roster link in the NavBar, which will\nbring you to ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:3000/roster"),". This page corresponds to the\n",(0,r.kt)("inlineCode",{parentName:"p"},"pages/roster.tsx")," file in your project."),(0,r.kt)("p",null,"Notice that the page imports ",(0,r.kt)("inlineCode",{parentName:"p"},"/components/roster/Roster.tsx")," - navigate to that\nfile to start working."),(0,r.kt)("p",null,"Here is everything you need to do to create your roster:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Extend the ",(0,r.kt)("inlineCode",{parentName:"li"},"ClubMember")," type with AT LEAST TWO other fields/attributes"),(0,r.kt)("li",{parentName:"ul"},"Extend the ",(0,r.kt)("inlineCode",{parentName:"li"},"rosterData")," list with AT LEAST THREE total club members (you may\nremove the example if you wish)"),(0,r.kt)("li",{parentName:"ul"},"Extend the ",(0,r.kt)("inlineCode",{parentName:"li"},"RosterItem")," component to display the additional fields you've\nadded to ",(0,r.kt)("inlineCode",{parentName:"li"},"ClubMember")),(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("inlineCode",{parentName:"li"},"Roster")," component, display the list of club members in ",(0,r.kt)("inlineCode",{parentName:"li"},"rosterData"),"\nusing your ",(0,r.kt)("inlineCode",{parentName:"li"},"RosterItem")," component")),(0,r.kt)("h2",{id:"step-3---brb-clicker"},"Step 3 - BRB Clicker"),(0,r.kt)("p",null,"You played ",(0,r.kt)("a",{parentName:"p",href:"https://orteil.dashnet.org/cookieclicker/"},"Cookie Clicker")," and want\nto make your version. ",(0,r.kt)("strong",{parentName:"p"},"Introducing BRB Clicker!")),(0,r.kt)("p",null,"We will be taking advantage of various React ",(0,r.kt)("strong",{parentName:"p"},"hooks")," to introduce\ninteractivity and state into our web app. We will be mainly dealing with\n",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect"),", but ",(0,r.kt)("inlineCode",{parentName:"p"},"useRef")," is given in the starter code as well."),(0,r.kt)("p",null,"The game operates as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You start with 0 BRBs. You want more :)"),(0,r.kt)("li",{parentName:"ul"},"Clicking ",(0,r.kt)("inlineCode",{parentName:"li"},"Acquire BRB")," will give you 1 BRB"),(0,r.kt)("li",{parentName:"ul"},"Clicking ",(0,r.kt)("inlineCode",{parentName:"li"},"Buy")," under ",(0,r.kt)("inlineCode",{parentName:"li"},"Hire Freshman")," will spend 10 BRBs but increase your\npassive income by 1 BRB per tick")),(0,r.kt)("p",null,"We may be expanding upon this in another assignment, but for now we will only\nhave 1 upgrade (hiring freshmen)."),(0,r.kt)("p",null,"Your task is to fill in the unimplemented parts of the starter code in\n",(0,r.kt)("inlineCode",{parentName:"p"},"components/game/Game.tsx")," to make this game work."),(0,r.kt)("p",null,"It'll look like this ",(0,r.kt)("img",{alt:"game demo",src:n(6866).Z})),(0,r.kt)("h3",{id:"hints"},"Hints"),(0,r.kt)("p",null,"Take advantage of the TODOs placed around the code!"),(0,r.kt)("p",null,"Remember that the second argument of ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect"),' dictates when this "effect"\ntriggers. A value of ',(0,r.kt)("inlineCode",{parentName:"p"},"[]")," means the effect will only run once at the beginning.\nA value of ",(0,r.kt)("inlineCode",{parentName:"p"},"[a, b]")," will cause the effect to run every time either ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," OR ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," is\nmodified."),(0,r.kt)("p",null,"Remember that ",(0,r.kt)("inlineCode",{parentName:"p"},"useState(init)")," can be called with an argument specifying the\ninitial value of the state."),(0,r.kt)("p",null,"Fun fact: you can parameterize the ",(0,r.kt)("inlineCode",{parentName:"p"},"useState<Type>()")," call with the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Type>"),"\nnotation to state the type of the state variable. However if you supply an\ninitial value, TypeScript will infer the type (unintuitively sometimes, so watch\nout!) For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"useState<number>(0)")," is the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"useState(0)"),"."),(0,r.kt)("p",null,"Press F12 (in most browsers) to bring up your developer tools. Navigate to the\nConsole tab to look at the console output. You can place ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," calls\nin your code and monitor this console to help debug."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"onClick")," property of the ",(0,r.kt)("inlineCode",{parentName:"p"},"button")," element fires whenever the button is\nclicked. Make sure you are passing in a function ",(0,r.kt)("strong",{parentName:"p"},"to be called"),", rather than\nthe result of calling a function.",(0,r.kt)("br",{parentName:"p"}),"\n","If in doubt, wrap it in an anonymous function: eg. ",(0,r.kt)("inlineCode",{parentName:"p"},'() => console.log("hi")')," vs\n",(0,r.kt)("inlineCode",{parentName:"p"},'console.log("hi")')),(0,r.kt)("h2",{id:"step-4---submission"},"Step 4 - Submission"),(0,r.kt)("p",null,"Once you are done, please zip up everything in your project folder EXCEPT the\n",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".next")," folders."),(0,r.kt)("p",null,"Then submit to CMS!"))}c.isMDXComponent=!0},6866:function(e,t,n){t.Z=n.p+"assets/images/game-demo-5bfc87b3e5c131de5810f241525790e8.gif"}}]);