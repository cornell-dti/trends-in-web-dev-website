"use strict";(self.webpackChunktrends_in_web_dev_website=self.webpackChunktrends_in_web_dev_website||[]).push([[6270],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1033:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),o=["components"],i={id:"assignments",title:"Assignments"},l="Assignments",c={unversionedId:"assignments",id:"version-2023fa/assignments",isDocsHomePage:!1,title:"Assignments",description:"Assignments will be released here after lecture! There will be 5 assignments total,",source:"@site/versioned_docs/version-2023fa/assignments.md",sourceDirName:".",slug:"/assignments",permalink:"/docs/assignments",tags:[],version:"2023fa",frontMatter:{id:"assignments",title:"Assignments"},sidebar:"docs",previous:{title:"Lecture 9",permalink:"/docs/lecture9"},next:{title:"Assignment 1",permalink:"/docs/assignment1"}},p=[{value:"Independent Project Starter Templates",id:"independent-project-starter-templates",children:[{value:"Frontend Starters",id:"frontend-starters",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"assignments"},"Assignments"),(0,s.kt)("p",null,"Assignments will be released here after lecture! There will be 5 assignments total,\nincluding a final project spanning the last few weeks of the class."),(0,s.kt)("p",null,"You are allowed max 3 slip days (out of 6 total for all assignments and the final project) per an assignment."),(0,s.kt)("p",null,"The class is scheduled to finish well before finals week."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/assignment1"},"Assignment 1"),": Due on CMSX by Oct 3 at 11:59pm"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/assignment2"},"Assignment 2"),": Due on CMSX by Oct 10 at 11:59pm"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/assignment3"},"Assignment 3"),": Due on CMSX by Oct 17 at 11:59pm"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/assignment4"},"Assignment 4"),": Due on CMSX by Oct 24 at 11:59pm"),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"independent-project-starter-templates"},"Independent Project Starter Templates"),(0,s.kt)("h3",{id:"frontend-starters"},"Frontend Starters"),(0,s.kt)("p",null,"If you're trying to create a new frontend React project on your own, ",(0,s.kt)("inlineCode",{parentName:"p"},"cd")," into a directory of your choice, and then use one of our starter templates (highly recommended):"),(0,s.kt)("p",null,"The following command creates an incredibly simple React project:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm dlx degit cornell-dti/trends-mono/frontend-starter your-project-name\n")),(0,s.kt)("p",null,"The following command creates a more advanced React project with a component library, icons, and routing built in for you:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm dlx degit cornell-dti/trends-mono/frontend-starter-advanced your-project-name\n")),(0,s.kt)("p",null,"Note that neither of these projects include a backend!"),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Why use our custom frontend templates?")),(0,s.kt)("p",null,"In the past, people recommended using ",(0,s.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"Create React App"),'. However, in recent years, popular opinion has turned against this specific starter: in fact, it was removed from the official React documentation recently. Since we\'re literally "Trends in Web Development", we want to use the latest and greatest tools, and that means not using Create React App.'),(0,s.kt)("p",null,"Well, where are the Trends pointing towards? Past semesters of Trends used ",(0,s.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"Next.js"),", a popular React metaframework (that is, a framework built atop another framework) that adds a lot of useful features to React. However, the future of Next.js is increasingly unclear: it's heavily opinionated, with a business focus on locking its users into its ecosystem, increasingly slow and unnecessarily complex, and just increasingly controversial."),(0,s.kt)("p",null,"So, we've created our own lightweight starter template built atop ",(0,s.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite"),", an incredibly popular, fast, and un-opinionated build tool by ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/yyx990803"},"Evan You"),", the creator of Vue.js. Using industry standard technologies like React Router and easy-to-get-started-with libraries like Mantine and Lucide, we've created a starter template that's easier to use, easier to understand, and easier to build upon."),(0,s.kt)("p",null,"Disagree? That's fine! You're free to use whatever React-based metaframework you want for your project, whether that's ",(0,s.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"Next.js"),", ",(0,s.kt)("a",{parentName:"p",href:"https://remix.run/"},"Remix"),", ",(0,s.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"Create React App"),", or something else."))}d.isMDXComponent=!0}}]);