"use strict";(self.webpackChunktrends_in_web_dev_website=self.webpackChunktrends_in_web_dev_website||[]).push([[1430],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6125:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={id:"lecture3",title:"Lecture 3"},s=void 0,c={unversionedId:"lecture3",id:"version-2023sp/lecture3",isDocsHomePage:!1,title:"Lecture 3",description:"Homework JS, TS, and Basic React, is due 3/11 by 11:59pm",source:"@site/versioned_docs/version-2023sp/lecture3.md",sourceDirName:".",slug:"/lecture3",permalink:"/docs/2023sp/lecture3",tags:[],version:"2023sp",frontMatter:{id:"lecture3",title:"Lecture 3"},sidebar:"docs",previous:{title:"Lecture 2",permalink:"/docs/2023sp/lecture2"},next:{title:"Lecture 4",permalink:"/docs/2023sp/lecture4"}},u=[{value:"Before the lecture",id:"before-the-lecture",children:[{value:"Create a Next.js Project",id:"create-a-nextjs-project",children:[],level:3}],level:2},{value:"Recap of Last Lecture: Why React?",id:"recap-of-last-lecture-why-react",children:[{value:"HTTP requests and responses",id:"http-requests-and-responses",children:[],level:3},{value:"HTML (and CSS and JavaScript)",id:"html-and-css-and-javascript",children:[],level:3},{value:"Your Own Website",id:"your-own-website",children:[],level:3}],level:2},{value:"Rendering",id:"rendering",children:[{value:"React.js, specifically, in-depth",id:"reactjs-specifically-in-depth",children:[{value:"Why React/Next.js?",id:"why-reactnextjs",children:[],level:4}],level:3},{value:"A Bit Of A Problem",id:"a-bit-of-a-problem",children:[],level:3},{value:"Server-Side Rendering",id:"server-side-rendering",children:[{value:"An Analogy",id:"an-analogy",children:[],level:4}],level:3}],level:2},{value:"Next.js",id:"nextjs",children:[{value:"Creating Your Project",id:"creating-your-project",children:[],level:3},{value:"Project Structure",id:"project-structure",children:[{value:"<code>package.json</code>",id:"packagejson",children:[],level:4},{value:"<code>tsconfig.json</code>",id:"tsconfigjson",children:[],level:4},{value:"<code>pages/</code>",id:"pages",children:[],level:4},{value:"<code>pages/api/</code>",id:"pagesapi",children:[],level:4},{value:"<code>styles/</code>",id:"styles",children:[],level:4},{value:"<code>public/</code>",id:"public",children:[],level:4},{value:"<code>components/</code>",id:"components",children:[],level:4}],level:3},{value:"Running The Server",id:"running-the-server",children:[],level:3}],level:2},{value:"How React?",id:"how-react",children:[{value:"Components",id:"components-1",children:[],level:3},{value:"Hooks",id:"hooks",children:[],level:3}],level:2},{value:"In-class Demo 1: An Extremely Simple React App",id:"in-class-demo-1-an-extremely-simple-react-app",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Homework: Assignment 1: JS, TS, and Basic React, is due 3/11 by 11:59pm"),(0,r.kt)("p",null,"Slides: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1uLo7Qg5X-UTO_IyX2nZTFSdk2a2M6UY1ok8GMkt6Aj0/edit?usp=sharing"},"Here")),(0,r.kt)("p",null,"Explore more: N/A"),(0,r.kt)("h1",{id:"todays-lecture-36"},"Today's Lecture 3/6"),(0,r.kt)("p",null,"By the end of today, you should be able to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Understand how to create a Next.js project, and what the project structure is"),(0,r.kt)("li",{parentName:"ul"},"Understand how to create a React project utilizing hooks and components.")),(0,r.kt)("h2",{id:"before-the-lecture"},"Before the lecture"),(0,r.kt)("h3",{id:"create-a-nextjs-project"},"Create a Next.js Project"),(0,r.kt)("p",null,"This will create a Next.js project with TypeScript."),(0,r.kt)("p",null,"First, make sure that ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn")," is set up on your system."),(0,r.kt)("p",null,"Then run this command to set up everything!"),(0,r.kt)("p",null,"NOTE: This will ",(0,r.kt)("strong",{parentName:"p"},"create")," a new folder in the current directory containing all\nthe project files, so run this where you want your project folder to be."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},"yarn create next-app --typescript [optional: directory-name]\n")),(0,r.kt)("p",null,"If you don't specify a directory name in your command, you'll be prompted for\none."),(0,r.kt)("h2",{id:"recap-of-last-lecture-why-react"},"Recap of Last Lecture: Why React?"),(0,r.kt)("h3",{id:"http-requests-and-responses"},"HTTP requests and responses"),(0,r.kt)("p",null,"As previously touched upon in previous lectures, data is most commonly\ncommunicated on the internet between a client and a server through the HTTP\nprotocol."),(0,r.kt)("p",null,"When you type in a URL into your browser (the client), it makes a HTTP request\nto the server specified by the URL. The server, if reached, then responds with a\nHTTP response, which contains various information. Depending on the\nserver and/or endpoint that the request is for, the response body (the main\ncontent) may contain different types of data."),(0,r.kt)("p",null,"You might see the data in response bodies ranging from simple strings, to large\nJSON objects, to full-on byte streams (most common used for file downloads and\nimages). Responses will have headers that carry additional information, some\nthat describe what kind of content the response carries. Note that HTTP requests\nalso have headers and bodies!"),(0,r.kt)("h3",{id:"html-and-css-and-javascript"},"HTML (and CSS and JavaScript)"),(0,r.kt)("p",null,"However, the most familiar response body you will have encountered as a regular\nperson is a website, the structure of which is defined in HTML (Hypertext Markup\nLanguage). When encountering this kind of response, your browser will take the\nHTML code from the body and render it into a website."),(0,r.kt)("p",null,"Of course it's not just all HTML that makes up a website. While HTML provides\nthe structure or backbone of the website, you also have CSS (Cascading Style\nSheets) for styling and JavaScript for interactivity."),(0,r.kt)("h3",{id:"your-own-website"},"Your Own Website"),(0,r.kt)("p",null,"Now that we understand how information is transmitted over the internet, we can\nhave a better understanding of how we can host websites for others to\nuse."),(0,r.kt)("p",null,"First, we need to have a server that clients (commonly browsers) can send\nrequests to. In this course, we will be writing a Node.JS app that does exactly\nthis. Once we have this server, all we have to do is supply the HTML/CSS/JS for\nthe website to render!"),(0,r.kt)("h2",{id:"rendering"},"Rendering"),(0,r.kt)("h3",{id:"reactjs-specifically-in-depth"},"React.js, specifically, in-depth"),(0,r.kt)("p",null,"We loosely covered a ",(0,r.kt)("em",{parentName:"p"},"ton")," of frameworks in the last lesson, but in this lesson and for the remainder of the course, we will be focusing on React.js (and Next.js, which is built atop it)."),(0,r.kt)("p",null,"So, let's review what we covered last time, but in-depth for Next.js specifically."),(0,r.kt)("h4",{id:"why-reactnextjs"},"Why React/Next.js?"),(0,r.kt)("p",null,"One important reason, among many others, is that using regular JavaScript to\nimplement interactivity is hard. React and similar technologies simply make\nthings like reactive state management easier on the developer's end. We'll talk\nmore about the advantages of such libraries later on."),(0,r.kt)("p",null,"While using such libaries, however, we must understand that browsers are only\ncapable of rendering regular HTML/CSS/JS sites. You might be working with React\nin TypeScript, for example, but a browser won't understand your TypeScript source\ncode."),(0,r.kt)("p",null,"Of course, there is a solution: we can compile/transpile","*"," our source code into\nregular HTML/CSS/JS that is readable by the browser!"),(0,r.kt)("p",null,"*","Note: usually transpilation is used to describe the process in which source\ncode is turned into equivalent source code (perhaps in another language), while\ncompilation is used more generally and often implied to produce machine code."),(0,r.kt)("p",null,"However, this transpiled HTML/CSS/JS code bundle is incredibly heavy on the JS\nend of things. The HTML is mostly empty, waiting for the browser to run the\nJavaScript code to actually populate it with content. This results in a rather\nlarge bundle size and another problem that we will discuss."),(0,r.kt)("h3",{id:"a-bit-of-a-problem"},"A Bit Of A Problem"),(0,r.kt)("p",null,"When using React normally, the rendering of the site is done on the client side\n(on the browser). Note that when we talk about client-side rendering, we are not\ntalking about how the browser turns HTML into pixels on your screen. Instead, we\nare talking one step before that, where the browser runs the React application\n(in JavaScript) to figure out the resulting HTML."),(0,r.kt)("p",null,"This reveals a potential weakness of React - the HTML is empty for the most\npart, requiring JavaScript to be run before the page actually shows up. This can\nlead to undesirable results, such as web crawlers not being able view your\nwebsite correctly, since the page is blank/incomplete until the browser runs the\nJavaScript for some amount of time."),(0,r.kt)("h3",{id:"server-side-rendering"},"Server-Side Rendering"),(0,r.kt)("p",null,"The problem discussed above is exclusive to when the client does this rendering\ncomputation. What if we have the server do it instead? Instead of sending tons\nof JS for the browser to execute, we can execute it on the server side and then\nsend the rendered resulting HTML to the client. This saves the browser the time\nit would have taken running the JavaScript!"),(0,r.kt)("h4",{id:"an-analogy"},"An Analogy"),(0,r.kt)("p",null,"Traditionally to play video games, you would use your computer to run the game,\nwhich might involve running some game logic and computing some shaders to figure\nout the pixels on your screen. This might be a suboptimal experience if you\ndon't have the right or powerful enough hardware. It's like client-side\nrendering!"),(0,r.kt)("p",null,"Cloud gaming allows you to offload all this computation to the cloud so that you\ncan simply receive the pixels you need over the internet to display on your\nscreen, without figuring out those pixels locally on your own machine. It's like\nserver-side rendering!"),(0,r.kt)("h2",{id:"nextjs"},"Next.js"),(0,r.kt)("p",null,"Next.js is a server framework built around React that provides you nice features\nlike server-side rendering. Over the past few years, this technology has\nsteadily increased in popularity."),(0,r.kt)("p",null,"In this course, we'll be taking advantage of Next.js to make our web development\neasier. This is something new we're introducing this semester, so please bear\nwith us as we wade through uncharted territory."),(0,r.kt)("p",null,"We'll be writing React apps within the Next.js framework and exploring some\nother features later on as well, such as authentication."),(0,r.kt)("h3",{id:"creating-your-project"},"Creating Your Project"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"#before-the-lecture"},"this section")," for instructions on creating a Next.js\nproject."),(0,r.kt)("p",null,"You can open up the newly created directory in VSCode from your terminal with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},"code [directory name]\n")),(0,r.kt)("h3",{id:"project-structure"},"Project Structure"),(0,r.kt)("p",null,"Your new project should have a few folders and files - let's talk about the\none's you'll be interacting with the most:"),(0,r.kt)("h4",{id:"packagejson"},(0,r.kt)("inlineCode",{parentName:"h4"},"package.json")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'This is the "project file" for all Node.js projects. It contains metadata\nabout your project, such as dependencies, as well as user-defined scripts to\nuse with yarn/npm. Lecture 2 has some more info on this file.')),(0,r.kt)("h4",{id:"tsconfigjson"},(0,r.kt)("inlineCode",{parentName:"h4"},"tsconfig.json")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This is the TypeScript config file. You usually don't touch this too often,\nbut it is responsible for how TypeScript interprets and interacts with your\ncodebase.")),(0,r.kt)("h4",{id:"pages"},(0,r.kt)("inlineCode",{parentName:"h4"},"pages/")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pages in Next.js represent full-on web pages attached to a route. You'll see\n",(0,r.kt)("inlineCode",{parentName:"li"},".tsx")," (React) files in this folder representing each page (excluding ones\nthat start with ",(0,r.kt)("inlineCode",{parentName:"li"},"_"),", such as ",(0,r.kt)("inlineCode",{parentName:"li"},"_app.tsx"),")."),(0,r.kt)("li",{parentName:"ul"},"Important Note: Don't put all of your React components in this folder! We'll\nbe making a new folder called ",(0,r.kt)("inlineCode",{parentName:"li"},"components/")," for those. Only ",(0,r.kt)("em",{parentName:"li"},"pages")," belong\nhere.")),(0,r.kt)("h4",{id:"pagesapi"},(0,r.kt)("inlineCode",{parentName:"h4"},"pages/api/")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We will see ",(0,r.kt)("inlineCode",{parentName:"li"},"/api/")," folders a lot, which are designated for ",(0,r.kt)("em",{parentName:"li"},"backend")," related\nfiles. You'll find ",(0,r.kt)("inlineCode",{parentName:"li"},".ts"),' files here, which compose the backend API of your\nNext.js server. This frequently serves as "middleware" between the frontend and\nthe database. This is important, since we don\'t want to expose our database\ndirectly to the frontend.')),(0,r.kt)("h4",{id:"styles"},(0,r.kt)("inlineCode",{parentName:"h4"},"styles/")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This is where your CSS styles live by default. Note how the ",(0,r.kt)("inlineCode",{parentName:"li"},".css")," files are\nnamed.")),(0,r.kt)("h4",{id:"public"},(0,r.kt)("inlineCode",{parentName:"h4"},"public/")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Static files live here. You might want to place files or images in this\nfolder.")),(0,r.kt)("h4",{id:"components"},(0,r.kt)("inlineCode",{parentName:"h4"},"components/")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This folder doesn't exist by default, but let's add it! We'll be putting our\nReact components here.")),(0,r.kt)("h3",{id:"running-the-server"},"Running The Server"),(0,r.kt)("p",null,"If we look at our ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", we have have 4 scripts by default:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dev"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Runs the project in development mode. This is what you'll be running while\ndeveloping. Next.js has hot reloading (\"Fast Refresh\"), so you won't have to\nrerun this command every time you make a change locally."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"build"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Builds the Next.js project for production use. You'll need to run this\nbefore running the ",(0,r.kt)("inlineCode",{parentName:"li"},"next start")," command."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"start"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Runs the optimized production build generated by the ",(0,r.kt)("inlineCode",{parentName:"li"},"next build")," command."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lint"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Searches through your code and tries to find bad code. If you set up ESLint\nwith your VSCode correctly, you should be getting linter warnings directly\nin your IDE. However, you can also run this command to run the linter.")))),(0,r.kt)("p",null,"You can run these scripts with ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn [script]"),", for example ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn dev"),"."),(0,r.kt)("p",null,"And that's it! Feel free to play around with this project, and we'll be diving\ninto React in the next lecture."),(0,r.kt)("h2",{id:"how-react"},"How React?"),(0,r.kt)("p",null,"Allows developers to create reusable UI components and manage the state of those components efficiently. React uses a virtual DOM (Document Object Model) to improve performance by minimizing the amount of DOM manipulation required when a user interacts with a React application. This allows for efficient updates and rendering of components, making it a popular choice for building complex and high-performing web and mobile applications."),(0,r.kt)("p",null,"In essence, it's built around a few core features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reusable components"),(0,r.kt)("li",{parentName:"ul"},"Reactivity (state management)")),(0,r.kt)("p",null,"Conceptually, everything in React is a ",(0,r.kt)("em",{parentName:"p"},"function"),". Your entire UI is therefore a function of your state. This is a very powerful concept."),(0,r.kt)("h3",{id:"components-1"},"Components"),(0,r.kt)("p",null,"Components are the building blocks of visual React. They are reusable pieces of code that can be used to build more complex components. These functional components form the visual basis of all React applications. They are defined as functions that return a React element. They are the simplest way to define a component."),(0,r.kt)("p",null,"Here, an example of a functional component (implemented as an arrow function):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const MyComponent = () => {\n  return <div>Hello World!</div>;\n};\n")),(0,r.kt)("p",null,"Then, elsewhere, you can reuse MyComponent, such as in a higher-order App.tsx component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const App = () => {\n  return (\n    <div>\n      <MyComponent />\n    </div>\n  );\n};\n")),(0,r.kt)("p",null,"The returned code is JSX, which is a JavaScript extension that allows you to write HTML-like code in JavaScript. It is compiled to JavaScript by Babel, and then inserted as HTML into the DOM."),(0,r.kt)("p",null,"Thus, we can ",(0,r.kt)("em",{parentName:"p"},"compose")," components together to build more complex components. This is the basis of React's component-based architecture, which is ",(0,r.kt)("em",{parentName:"p"},"compositional"),". This is a very powerful concept, and we'll cover it in more detail later in the next lecture, once you have a more firm grasp of basic React."),(0,r.kt)("h3",{id:"hooks"},"Hooks"),(0,r.kt)("p",null,"Hooks are the building blocks of logical React. They are reusable pieces of code that can be used to manage the state of your application, and are the most powerful feature of React. Changes to a hook variable will cause components and other hooks that depend on it to re-render or re-calculate their values, which is the basis of React's reactivity."),(0,r.kt)("p",null,"Like for components, you can create custom hooks to encapsulate logic and reuse it across your application. However, extremely frequently, you'll also use the built-in hooks provided by React."),(0,r.kt)("p",null,"The most important hook is useState, which simply provides a getter and setter for a variable. This is the basis of React's state management."),(0,r.kt)("p",null,"Here, an example of a component that uses useState:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const MyComponent = () => {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>Click me</button>\n    </div>\n  );\n};\n")),(0,r.kt)("p",null,"The other most important built-in hook is useEffect, which allows you to run code when a component is mounted or unmounted, or when a variable changes. This is the basis of React's lifecycle management."),(0,r.kt)("p",null,"Lifecycle management is when you want to run code when a component is mounted or unmounted, or when a variable changes, or on every render. It encapsulates logic that must in essence run at certain points during a component's lifecycle."),(0,r.kt)("p",null,"Here, an example of a component that uses useEffect:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const MyComponent = () => {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    console.log('The count changed!'); // this will fire every time count variable changes\n  }, [count]);\n\n  useEffect(() => {\n    console.log('The component mounted or the count changed!'); // this will fire every render (all the time)\n  });\n\n  useEffect(() => {\n    console.log('The component mounted!'); // this will fire once, when the component is mounted\n    return () => {\n      console.log('The component unmounted!'); // this will fire once, when the component is unmounted\n    };\n  }, []);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>Click me</button>\n    </div>\n  );\n};\n")),(0,r.kt)("p",null,"Combining components and hooks, you can build complex applications with React that respond to events, update their state accordingly, and then re-render the UI to reflect the new state!"),(0,r.kt)("p",null,"Today, let's build an extremely simple React app to get a feel for how React works. Next time, we'll use useState, useEffect, and components more extensively, along with other React features."),(0,r.kt)("h2",{id:"in-class-demo-1-an-extremely-simple-react-app"},"In-class Demo 1: An Extremely Simple React App"),(0,r.kt)("p",null,"TODO: @daniel"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Let's implement a simple minutes-since-event counter. It'll increase indefinitely, but can be reset to 0.")))}d.isMDXComponent=!0}}]);