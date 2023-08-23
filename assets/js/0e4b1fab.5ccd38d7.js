"use strict";(self.webpackChunktrends_in_web_dev_website=self.webpackChunktrends_in_web_dev_website||[]).push([[2176],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(k,r(r({ref:t},d),{},{components:n})):a.createElement(k,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5830:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={id:"assignment4",title:"Assignment 4"},s=void 0,p={unversionedId:"assignment4",id:"version-2023sp/assignment4",isDocsHomePage:!1,title:"Assignment 4",description:"In this assignment we will be connecting to a database directly through our",source:"@site/versioned_docs/version-2023sp/assignment4.md",sourceDirName:".",slug:"/assignment4",permalink:"/docs/2023sp/assignment4",tags:[],version:"2023sp",frontMatter:{id:"assignment4",title:"Assignment 4"},sidebar:"docs",previous:{title:"Assignment 3",permalink:"/docs/2023sp/assignment3"},next:{title:"Final Project",permalink:"/docs/2023sp/finalproject"}},d=[{value:"Step 0 - Setup",id:"step-0---setup",children:[],level:2},{value:"Create a Firebase Project",id:"create-a-firebase-project",children:[],level:2},{value:"Step 1 - Finding One&#39;s Bearings",id:"step-1---finding-ones-bearings",children:[],level:2},{value:"Step 2 - Add The Firebase Config",id:"step-2---add-the-firebase-config",children:[],level:2},{value:"Step 3 - Fetching Data",id:"step-3---fetching-data",children:[],level:2},{value:"Step 4 - Adding Tasks",id:"step-4---adding-tasks",children:[],level:2},{value:"Step 5 - Modifying Tasks",id:"step-5---modifying-tasks",children:[],level:2},{value:"Step 6 - Submission",id:"step-6---submission",children:[],level:2}],u={toc:d};function c(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this assignment we will be connecting to a database directly through our\nfrontend!"),(0,o.kt)("h2",{id:"step-0---setup"},"Step 0 - Setup"),(0,o.kt)("p",null,"Create a Next.js using our ",(0,o.kt)("strong",{parentName:"p"},"starter code")," with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'yarn create next-app --typescript --example "https://github.com/cornell-dti/trends-sp23-a4" YOUR_PROJECT_NAME\n')),(0,o.kt)("h2",{id:"create-a-firebase-project"},"Create a Firebase Project"),(0,o.kt)("p",null,"For this assignment, you will be setting up your own Firebase project. You will\nbe connecting your Next.js web app to the Firestore database to store task data."),(0,o.kt)("p",null,"See Ed for more specific Firebase setup instructions."),(0,o.kt)("h2",{id:"step-1---finding-ones-bearings"},"Step 1 - Finding One's Bearings"),(0,o.kt)("p",null,"As with A2/A3, run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn dev")," in the project directory to start the server and\nnavigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:3000")," to see what the starter code gives you."),(0,o.kt)("p",null,"In this assignment we will be implementing a simple ",(0,o.kt)("strong",{parentName:"p"},"task/todo list"),' with\nadd/delete functionality. Each task can also be "checked off" to denote being\ncompleted.'),(0,o.kt)("p",null,"Tasks will be stored in our Firestore database, within a collection called\n",(0,o.kt)("inlineCode",{parentName:"p"},"tasks"),". Each document in the collection will represent a single task,\ncontaining information such as the text/name of the task, as well as whether is\nchecked off."),(0,o.kt)("p",null,"Here are the important files you'll be working with:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"React Components",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"util/firebase.ts"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Utility file for all Firebase-related exports."),(0,o.kt)("li",{parentName:"ul"},"We initialize the Firebase app here, so this is the place to paste your\n",(0,o.kt)("inlineCode",{parentName:"li"},"firebaseConfig"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"components/frodo/Frodo.tsx"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Overall "todo list" component.'),(0,o.kt)("li",{parentName:"ul"},"We store a list of tasks in the state which gets passed down and displayed\nin children components."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"components/frodo/TaskAddControl.tsx"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Component for adding a new task to the task list."),(0,o.kt)("li",{parentName:"ul"},"Instead of updating state directly, we will perform a database\noperation in order to add a task."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"components/frodo/TaskList.tsx"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Simple "intermediate" component that maps over a list of tasks.'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"components/frodo/TaskItem.tsx"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Component for displaying a task's information."),(0,o.kt)("li",{parentName:"ul"},'Has a toggleable checkbox and a "delete" button'))))),(0,o.kt)("li",{parentName:"ul"},"Other Files",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"types/index.ts"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Task")," is a simple schema for a task. Firebase documents that represent\ntasks should match this schema."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TaskWithId")," is a type that has every property in ",(0,o.kt)("inlineCode",{parentName:"li"},"Tasks")," PLUS the ",(0,o.kt)("inlineCode",{parentName:"li"},"id"),"\nproperty, which represents the task's Firebase document id.")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"As always, make sure to fill in all the TODOs before submitting!")),(0,o.kt)("p",null,"You can press CTRL + SHIFT + F in VSCode to search through all project files."),(0,o.kt)("h2",{id:"step-2---add-the-firebase-config"},"Step 2 - Add The Firebase Config"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"util/firebase.ts"),", you want to fill in your Firebase config with data found\non the Firebase Console. To find the config, you can start at your Console and\nnavigate ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings/Cog -> Project settings -> Scroll Down")),(0,o.kt)("p",null,"You will find a code snippet including something that looks like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const firebaseConfig = {\n  apiKey: 'XXXXXXXXXXXXXXXXXXXXXX',\n  authDomain: 'XXXXXXXXXXXXXXXXXXX.firebaseapp.com',\n  projectId: 'XXXXXXXXXXXXXXXXXXX',\n  storageBucket: 'XXXXXXXXXXXXXXXXXXX.appspot.com',\n  messagingSenderId: 'XXXXXXXXXXXXXXX',\n  appId: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',\n};\n")),(0,o.kt)("p",null,"Copy/replace the empty object in your project code in order to finish setting up\nyour Firebase."),(0,o.kt)("h2",{id:"step-3---fetching-data"},"Step 3 - Fetching Data"),(0,o.kt)("p",null,"If we look at ",(0,o.kt)("inlineCode",{parentName:"p"},"components/frodo/Frodo.tsx"),", we see that there is a ",(0,o.kt)("inlineCode",{parentName:"p"},"useState"),"\nhook used to keep track of the tasks. However, we never call ",(0,o.kt)("inlineCode",{parentName:"p"},"setTasks"),"!"),(0,o.kt)("p",null,"This web app should connect to our Firestore database to get all the tasks, and\nthen set our local state to what the database gives us."),(0,o.kt)("p",null,"The plan is simple:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First, construct a Firebase ",(0,o.kt)("em",{parentName:"li"},"query")," that gets all the documents in the ",(0,o.kt)("inlineCode",{parentName:"li"},"tasks"),"\ncollection.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Hint: use ",(0,o.kt)("inlineCode",{parentName:"li"},"query()")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"collection()")," to create the query"))),(0,o.kt)("li",{parentName:"ol"},"Then, subscribe to the query in order to get ",(0,o.kt)("strong",{parentName:"li"},"realtime updates")," to the\nquery results",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"We use the ",(0,o.kt)("inlineCode",{parentName:"li"},"onSnapshot()")," function from the Firebase library to do this"),(0,o.kt)("li",{parentName:"ul"},"The code for this step is provided, you just have to uncomment it"))),(0,o.kt)("li",{parentName:"ol"},"Finally, set our tasks state with information contained in ",(0,o.kt)("inlineCode",{parentName:"li"},"querySnapshot"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Hint: use ",(0,o.kt)("inlineCode",{parentName:"li"},".map()")," to create a ",(0,o.kt)("inlineCode",{parentName:"li"},"TaskWithId[]")," list"),(0,o.kt)("li",{parentName:"ul"},"Hint 2: use ",(0,o.kt)("inlineCode",{parentName:"li"},"obj as Task"),' to "cast" an object to type ',(0,o.kt)("inlineCode",{parentName:"li"},"Task")),(0,o.kt)("li",{parentName:"ul"},"Hint 3: use ",(0,o.kt)("inlineCode",{parentName:"li"},"doc.id")," to get the id of a document"),(0,o.kt)("li",{parentName:"ul"},"Hint 4: use ",(0,o.kt)("inlineCode",{parentName:"li"},"{...obj, foo: 'bar'}")," to create a new object based on ",(0,o.kt)("inlineCode",{parentName:"li"},"obj"),",\nbut with an additional property ",(0,o.kt)("inlineCode",{parentName:"li"},"foo")," (this is object destructuring!)")))),(0,o.kt)("p",null,"Feel free to add in dummy Firestore documents through the web interface\n(Console) to check if you've completed this step properly."),(0,o.kt)("h2",{id:"step-4---adding-tasks"},"Step 4 - Adding Tasks"),(0,o.kt)("p",null,"Now let's direct our attention to ",(0,o.kt)("inlineCode",{parentName:"p"},"components/frodo/TaskAddControl.tsx"),"."),(0,o.kt)("p",null,"We have a function called ",(0,o.kt)("inlineCode",{parentName:"p"},"addTask")," that fires whenever the form submits (such\nas when a user clicks the ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Task")," button)."),(0,o.kt)("p",null,"All we have to do here is implement the rest of this function!"),(0,o.kt)("p",null,"Hint: you can call the ",(0,o.kt)("inlineCode",{parentName:"p"},"addDoc()")," function without specifying an ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," to create\na document with a random id (in many cases this is preferable)."),(0,o.kt)("h2",{id:"step-5---modifying-tasks"},"Step 5 - Modifying Tasks"),(0,o.kt)("p",null,"Let's wrap up by implementing functionality in ",(0,o.kt)("inlineCode",{parentName:"p"},"components/frodo/TaskItem.tsx"),"."),(0,o.kt)("p",null,"We have two functions ",(0,o.kt)("inlineCode",{parentName:"p"},"toggleTask")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"deleteTask")," that are empty."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"toggleTask")," is triggered when a user clicks on the checkbox. It should toggle\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"checked")," status of that particular task."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"deleteTask")," is triggered when a user clicks on the delete button. It should\nremove that particular task from the database."),(0,o.kt)("p",null,"You may find ",(0,o.kt)("inlineCode",{parentName:"p"},"updateDoc")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"deleteDoc")," helpful for this part."),(0,o.kt)("h2",{id:"step-6---submission"},"Step 6 - Submission"),(0,o.kt)("p",null,"Make sure you've completed all of the TODOs, including your name/netid in\n",(0,o.kt)("inlineCode",{parentName:"p"},"components/layout/Footer.tsx")," and the hours worked in ",(0,o.kt)("inlineCode",{parentName:"p"},"pages/index.tsx"),"."),(0,o.kt)("p",null,"Once you are done, please zip up everything in your project folder EXCEPT the\n",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".next")," folders."),(0,o.kt)("p",null,"Then submit to CMS!"))}c.isMDXComponent=!0}}]);