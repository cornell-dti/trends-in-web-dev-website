(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(3),i=n(7),o=(n(0),n(125)),s={id:"lecture2",title:"Lecture 2"},r={unversionedId:"lecture2",id:"version-2020fa/lecture2",isDocsHomePage:!1,title:"Lecture 2",description:"Lecture Video",source:"@site/versioned_docs/version-2020fa/lecture2.md",slug:"/lecture2",permalink:"/docs/2020fa/lecture2",version:"2020fa",sidebar:"version-2020fa/docs",previous:{title:"Lecture 1",permalink:"/docs/2020fa/lecture1"},next:{title:"Lecture 3",permalink:"/docs/2020fa/lecture3"}},l=[{value:"<code>tsconfig.json</code>",id:"tsconfigjson",children:[]},{value:"How to set up a Node project",id:"how-to-set-up-a-node-project",children:[{value:"Initializing a Node project",id:"initializing-a-node-project",children:[]},{value:"Installing Dependencies",id:"installing-dependencies",children:[]},{value:"<strong>Don&#39;t Submit <code>node_modules</code>!!</strong>",id:"dont-submit-node_modules",children:[]},{value:"Removing packages",id:"removing-packages",children:[]},{value:"<code>yarn install</code>",id:"yarn-install",children:[]}]},{value:"More Express and HTTP Methods",id:"more-express-and-http-methods",children:[{value:"The Example",id:"the-example",children:[]},{value:"Node Project Setup",id:"node-project-setup",children:[]},{value:"GET Request",id:"get-request",children:[]},{value:"Postman",id:"postman",children:[]},{value:"POST Request",id:"post-request",children:[]},{value:"DELETE Request",id:"delete-request",children:[]}]},{value:"Intro to Databases and Firebase",id:"intro-to-databases-and-firebase",children:[{value:"Why do we need a database for our backend?",id:"why-do-we-need-a-database-for-our-backend",children:[]},{value:"MySQL + Relational Databases",id:"mysql--relational-databases",children:[]},{value:"NoSQL and Firestore",id:"nosql-and-firestore",children:[]},{value:"SQL vs NoSQL",id:"sql-vs-nosql",children:[]},{value:"What is Firebase?",id:"what-is-firebase",children:[]},{value:"Why Firebase?",id:"why-firebase",children:[]}]}],p={toc:l};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://drive.google.com/file/d/1A9MD8NEClykBYMwcoSywPNtGWR2VTVxy/view?usp=sharing"}),"Lecture Video")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.google.com/presentation/d/1pusfE9Zhtzse3yjDCzS4N2Oei2XmhanHElnhYFxXuBA/edit?usp=sharing"}),"Lecture Slides")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.postman.com/downloads/"}),"Install Postman")),Object(o.b)("p",null,"No assignment this week; enjoy your break!"),Object(o.b)("h2",{id:"tsconfigjson"},Object(o.b)("inlineCode",{parentName:"h2"},"tsconfig.json")),Object(o.b)("p",null,"From now on, we will be using a ",Object(o.b)("inlineCode",{parentName:"p"},"tsconfig.json")," file within every Node project\nwe create (a recap on how to do that is below this section). Essentially, the\n",Object(o.b)("inlineCode",{parentName:"p"},"tsconfig.json")," is a file at the root of a Node project which indicates it is using TypeScript, and allows us to configure the TypeScript compiler. If you're more curious about how the file works, you can refer ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"}),"to this link"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "compilerOptions": {\n    "target": "es6",\n    "outDir": "./output",\n    "lib": ["dom", "dom.iterable", "esnext"],\n    "skipLibCheck": true,\n    "esModuleInterop": true,\n    "allowSyntheticDefaultImports": true,\n    "strict": true,\n    "forceConsistentCasingInFileNames": true,\n    "importsNotUsedAsValues": "error",\n    "module": "commonjs",\n    "moduleResolution": "node",\n    "resolveJsonModule": true\n  },\n  "types": ["node"],\n  "include": ["./*"],\n  "exclude": []\n}\n')),Object(o.b)("h2",{id:"how-to-set-up-a-node-project"},"How to set up a Node project"),Object(o.b)("h3",{id:"initializing-a-node-project"},"Initializing a Node project"),Object(o.b)("p",null,"Let's dive deeper into what happens when you setup a Node project using Yarn."),Object(o.b)("p",null,"Navigate to an empty folder where you want your project to be located. I will assume this folder is called ",Object(o.b)("inlineCode",{parentName:"p"},"helloworld"),"."),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"yarn init")," in this folder on the terminal. (Use ",Object(o.b)("inlineCode",{parentName:"p"},"cd")," to navigate to you ",Object(o.b)("inlineCode",{parentName:"p"},"helloworld")," folder in terminal)"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Note that we are using ",Object(o.b)("inlineCode",{parentName:"p"},"yarn init")," rather than ",Object(o.b)("inlineCode",{parentName:"p"},"npm init"),". We will be using Yarn as our\nNode package manager in its class (this is used in production at many companies like Facebook!), and its corresponding commands for installing packages as well."))),Object(o.b)("p",null,"Upon running ",Object(o.b)("inlineCode",{parentName:"p"},"yarn init"),", and answering the questions as seen in the previous lecture, we now need to add our dependencies for the project and scripts to start it."),Object(o.b)("h3",{id:"installing-dependencies"},"Installing Dependencies"),Object(o.b)("p",null,"Node projects don't come with every possible dependency right out of the box. We\nwill add these with Yarn by using ",Object(o.b)("inlineCode",{parentName:"p"},"yarn add <pkg_name>")," (which is the equivalent\nof ",Object(o.b)("inlineCode",{parentName:"p"},"npm install <pkg_name> --save"),", but remember we are using Yarn.)"),Object(o.b)("p",null,"Let's try installing a package. In the first assignment we asked you to use ",Object(o.b)("inlineCode",{parentName:"p"},"express"),". Install ",Object(o.b)("inlineCode",{parentName:"p"},"express")," by running:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"yarn add express")),Object(o.b)("p",null,"After installation completes, take a look at your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),'. We named our project "test".'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "test",\n  "version": "1.0.0",\n  "main": "index.js",\n  "license": "MIT",\n  "dependencies": {\n    "express": "^4.17.1"\n  }\n}\n')),Object(o.b)("p",null,"Notice that ",Object(o.b)("inlineCode",{parentName:"p"},"express")," was added to our dependencies. Now ",Object(o.b)("inlineCode",{parentName:"p"},"express")," is available for you to use in your project!"),Object(o.b)("p",null,"Every time you add a dependency with ",Object(o.b)("inlineCode",{parentName:"p"},"yarn add <pkg_name>"),", ",Object(o.b)("inlineCode",{parentName:"p"},"<pkg_name>")," will be added to your dependencies in ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," if it can be found. It will also be added to ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules/"),"."),Object(o.b)("p",null,"Take a look inside your ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," folder. This is where all your packages will be installed. Notice that even though you just installed one package, multiple packages are in ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),". This is because ",Object(o.b)("inlineCode",{parentName:"p"},"express")," itself has several of its own dependencies that also got installed."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},'You might see red squiggly lines when working with TypeScript files about missing\n"declaration files". This means you need to install the corresponding type packages\nfor each dependency you work with in TypeScript, as it gives you some predefined\ntype definitions to work with, which makes your life easier! You can install these\nusing ',Object(o.b)("inlineCode",{parentName:"p"},"yarn add @types/<pkg_name>")))),Object(o.b)("p",null,"You can find more packages to use on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/"}),"npmjs.com"),"."),Object(o.b)("h3",{id:"dont-submit-node_modules"},Object(o.b)("strong",{parentName:"h3"},"Don't Submit ",Object(o.b)("inlineCode",{parentName:"strong"},"node_modules"),"!!")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," can potentially hundreds of megabytes of data on packages you installed. It is important to never submit this with your assignment or push it up to any remote repositories such as GitHub. Before submitting an assignment, remember to remove ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," from the folder, then zip it and submit the zip file. ",Object(o.b)("em",{parentName:"p"},"You will be penalized if ",Object(o.b)("inlineCode",{parentName:"em"},"node_modules")," is submitted"),". Don't worry, we will be able to recover your dependencies simply by running ",Object(o.b)("inlineCode",{parentName:"p"},"yarn install"),"."),Object(o.b)("h3",{id:"removing-packages"},"Removing packages"),Object(o.b)("p",null,"Let's say you made a typo installing ",Object(o.b)("inlineCode",{parentName:"p"},"express")," and you instead ran"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"yarn add experss")),Object(o.b)("p",null,"Your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," should look like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "test",\n  "version": "1.0.0",\n  "main": "index.js",\n  "license": "MIT",\n  "dependencies": {\n    "express": "^4.17.1",\n    "experss": ""\n  }\n}\n')),Object(o.b)("p",null,"Unfortunately, some malicious developer capitalized on this typo mistake and made ",Object(o.b)("inlineCode",{parentName:"p"},"experss")," an actual package. How do you remove experss?"),Object(o.b)("p",null,"There are two ways. First, you can just run ",Object(o.b)("inlineCode",{parentName:"p"},"yarn remove experss"),". This will remove ",Object(o.b)("inlineCode",{parentName:"p"},"experss")," from your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," and your ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," folder."),Object(o.b)("h3",{id:"yarn-install"},Object(o.b)("inlineCode",{parentName:"h3"},"yarn install")),Object(o.b)("p",null,"Another way is to delete ",Object(o.b)("inlineCode",{parentName:"p"},"experss")," manually from your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),". (Just delete the line that has ",Object(o.b)("inlineCode",{parentName:"p"},"experss"),"). This won't actually get rid of the package from your ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules"),"."),Object(o.b)("p",null,"To update your ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules"),", first delete your ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," folder and then run"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"yarn install")),Object(o.b)("p",null,"This fetches all your dependencies again based on your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," and since ",Object(o.b)("inlineCode",{parentName:"p"},"experss")," is no longer there, it is not installed."),Object(o.b)("h2",{id:"more-express-and-http-methods"},"More Express and HTTP Methods"),Object(o.b)("p",null,"Let's go more in-depth with using Express with HTTP methods beyond\n",Object(o.b)("inlineCode",{parentName:"p"},"GET"),", TypeScript types, and request bodies."),Object(o.b)("p",null,"We'll also introduce a tool called Postman, which makes it much easier to playtest our\nbackend endpoints."),Object(o.b)("h3",{id:"the-example"},"The Example"),Object(o.b)("p",null,"Say we're making some API endpoints for a music streaming service. Each song has its own name and a rating. We want to be able to access all the songs through a ",Object(o.b)("inlineCode",{parentName:"p"},"GET")," endpoint, add new songs through a ",Object(o.b)("inlineCode",{parentName:"p"},"POST")," endpoint, update ratings through a ",Object(o.b)("inlineCode",{parentName:"p"},"POST")," endpoint, and remove a certain song by its name using a ",Object(o.b)("inlineCode",{parentName:"p"},"DELETE")," endpoint."),Object(o.b)("h3",{id:"node-project-setup"},"Node Project Setup"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Before we begin, make sure to put the ",Object(o.b)("inlineCode",{parentName:"strong"},"tsconfig.json")," file with the contents at the top of this page in the root of your Node project folder"),"."),Object(o.b)("p",null,"As described earlier in this lecture, let's do a standard ",Object(o.b)("inlineCode",{parentName:"p"},"yarn init")," and answer the questions accordingly. In the same directory, let's install dependencies with the following commands we need to develop this Express and TypeScript project:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"yarn add express")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"yarn add typescript @types/node @types/express --dev"))),Object(o.b)("p",null,"We install TypeScript and the type definitions for Node.js and Express as dev dependencies because we are not exporting them, but simply using them in our ",Object(o.b)("inlineCode",{parentName:"p"},"index.ts"),"."),Object(o.b)("p",null,"Let's go back to ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," for a moment in order to set up a script to run\nour Express web server. It should currently look like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "lec2demo",\n  "version": "1.0.0",\n  "main": "index.js",\n  "license": "MIT",\n  "dependencies": {\n    "express": "^4.17.1"\n  },\n  "devDependencies": {\n    "@types/express": "^4.17.8",\n    "@types/node": "^14.11.2",\n    "typescript": "^4.0.3"\n  }\n}\n')),Object(o.b)("p",null,"Let's add a ",Object(o.b)("inlineCode",{parentName:"p"},"script")," field with two commands: one to compile our TypeScript file for the server, and one to compile and run the server using Node. You can update the ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," to include a script with these commands:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "lec2demo",\n  "version": "1.0.0",\n  "main": "index.js",\n  "license": "MIT",\n  "scripts": {\n    "tsc": "tsc -p tsconfig.json",\n    "start": "yarn tsc && node output/index"\n  },\n  "dependencies": {\n    "express": "^4.17.1"\n  },\n  "devDependencies": {\n    "@types/express": "^4.17.8",\n    "@types/node": "^14.11.2",\n    "typescript": "^4.0.3"\n  }\n}\n')),Object(o.b)("p",null,"You can run each of these scripts using ",Object(o.b)("inlineCode",{parentName:"p"},"yarn tsc")," and ",Object(o.b)("inlineCode",{parentName:"p"},"yarn start"),". None of these commands should work yet though, since we haven't even started writing ",Object(o.b)("inlineCode",{parentName:"p"},"index.ts"),"!"),Object(o.b)("p",null,"Note that you can name these scripts whatever you want: for example, you could have called ",Object(o.b)("inlineCode",{parentName:"p"},'"start"')," ",Object(o.b)("inlineCode",{parentName:"p"},'"pizza"')," and used ",Object(o.b)("inlineCode",{parentName:"p"},"yarn pizza"),". Also, ",Object(o.b)("inlineCode",{parentName:"p"},"yarn start")," first runs ",Object(o.b)("inlineCode",{parentName:"p"},"yarn tsc")," (through the use of the ",Object(o.b)("inlineCode",{parentName:"p"},"&&"),"), and if this passes without error, we then run ",Object(o.b)("inlineCode",{parentName:"p"},"node output/index")," on the JS file produced by the TypeScript compiler to launch the server."),Object(o.b)("h3",{id:"get-request"},"GET Request"),Object(o.b)("p",null,"Create a new file called ",Object(o.b)("inlineCode",{parentName:"p"},"index.ts")," (note the ",Object(o.b)("inlineCode",{parentName:"p"},".ts"),": JavaScript files use ",Object(o.b)("inlineCode",{parentName:"p"},".js"),", but remember we're using TypeScript) and add the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'}),"const express = require('express');\n\nconst app = express();\n\napp.use(express.json());\n\ntype songtype = {\n  name: string;\n  rating: number;\n};\n\nlet songs: songtype[] = [];\n\napp.get('/getSongs', (req, res) => {\n  res.send(songs);\n});\n\napp.listen(8080, () => console.log('App started!'));\n")),Object(o.b)("p",null,"Much of this should be familiar. The first line loads in the ",Object(o.b)("inlineCode",{parentName:"p"},"express")," dependency and the second line initializes ",Object(o.b)("inlineCode",{parentName:"p"},"express"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"app.use(express.json())")," allows us to make use of request body parsing in Express\nlater (in the ",Object(o.b)("inlineCode",{parentName:"p"},"/addSong")," endpoint). Don't worry too much about what exactly this does,\nbut feel free to search and learn more."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"songtype")," type definition allows us to outline what we expect the metadata for\neach song in the system should be. This is our first powerful use of TypeScript in\nweb development: if data doesn't conform to this spec, we'll immediately know since\nTypeScript's compiler will give an error, saving us a lot of debug time and headaches."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"app.get")," specifies that any ",Object(o.b)("inlineCode",{parentName:"p"},"GET")," requests sent to the endpoint ",Object(o.b)("inlineCode",{parentName:"p"},"/getSongs")," will send back the array of songs, which is initially the empty array ",Object(o.b)("inlineCode",{parentName:"p"},"[]"),"."),Object(o.b)("p",null,"Lastly, ",Object(o.b)("inlineCode",{parentName:"p"},"app.listen")," starts the server on port 8080 asking it to listen for requests."),Object(o.b)("p",null,"Let's test these endpoints by running ",Object(o.b)("inlineCode",{parentName:"p"},"yarn start"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"App started!")," should be printed on the terminal showing that the port is up and running and listening for requests."),Object(o.b)("p",null,"Use your web browser to navigate to ",Object(o.b)("inlineCode",{parentName:"p"},"localhost:8080/getSongs"),". You should see the value of ",Object(o.b)("inlineCode",{parentName:"p"},"songs"),", the empty array ",Object(o.b)("inlineCode",{parentName:"p"},"[]"),", on the page."),Object(o.b)("p",null,"You can terminate the running of the script using ",Object(o.b)("kbd",null,"Ctrl")," + ",Object(o.b)("kbd",null,"C"),"."),Object(o.b)("h3",{id:"postman"},"Postman"),Object(o.b)("p",null,"Instead of always going to the endpoint in the browser, a robust way of testing our endpoints is to use Postman."),Object(o.b)("p",null,"Postman is a software that allows you to simulate requests that could be sent by a user to your backend. It is useful for testing and ensuring that the behavior of your requests (including necessary headers) is what you expect."),Object(o.b)("p",null,"Download Postman ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.postman.com/downloads/"}),"here"),"."),Object(o.b)("p",null,"Once you have Postman set up, make a request to the ",Object(o.b)("inlineCode",{parentName:"p"},"/getSongs")," endpoint by setting the request type as ",Object(o.b)("inlineCode",{parentName:"p"},"GET")," and the url as ",Object(o.b)("inlineCode",{parentName:"p"},"localhost:8080/getSongs"),". You should see ",Object(o.b)("inlineCode",{parentName:"p"},"[]")," in the response body."),Object(o.b)("h3",{id:"post-request"},"POST Request"),Object(o.b)("p",null,"Usually when you want to send a ",Object(o.b)("inlineCode",{parentName:"p"},"POST")," request you also want to send information with it. Situationally, you want to do this using request bodies rather than query parameters."),Object(o.b)("p",null,"Add the following to your ",Object(o.b)("inlineCode",{parentName:"p"},"index.ts")," file after your ",Object(o.b)("inlineCode",{parentName:"p"},"app.get")," call:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="index.ts"',title:'"index.ts"'}),"app.post('/addSong', (req, res) => {\n  const song: songtype = { name: req.body.name, rating: req.body.rating };\n  console.log(song);\n  songs.push(song);\n  res.send(`Song ${req.body.name} added!`);\n});\n")),Object(o.b)("p",null,"Previously, we may have considered using query parameters for sending data for the backend. There's nothing wrong with that; we could have used ",Object(o.b)("inlineCode",{parentName:"p"},"/addSong?name=Despacito&rating=5"),". However, this can lead to extremely long URLs, and limit us from sending more complicated data. That's where ",Object(o.b)("strong",{parentName:"p"},"request bodies")," come in handy. We can instead send request data in JSON format to the backend, allowing us to use the data more easily and integrate it seamlessly with our backend (which happens to be in TypeScript, so we can easily deal with it)."),Object(o.b)("p",null,"This tells ",Object(o.b)("inlineCode",{parentName:"p"},"express")," to listen for ",Object(o.b)("inlineCode",{parentName:"p"},"POST")," requests at endpoint ",Object(o.b)("inlineCode",{parentName:"p"},"/addSong"),". ",Object(o.b)("inlineCode",{parentName:"p"},"req.body")," is a JS object, and we access its properties ",Object(o.b)("inlineCode",{parentName:"p"},"req.body.name")," and ",Object(o.b)("inlineCode",{parentName:"p"},"req.body.rating")," to add a new song to our array of songs. We also make sure that this is compatible with a ",Object(o.b)("inlineCode",{parentName:"p"},"songtype"),": after all, the rating of a song can't be a word, and the TypeScript compiler will yell at us if we mess this up!"),Object(o.b)("p",null,"However, we can't test request bodies quite as easily through the browser; we can check that this endpoint is working using Postman. Set the request type to ",Object(o.b)("inlineCode",{parentName:"p"},"POST")," and URL as ",Object(o.b)("inlineCode",{parentName:"p"},"localhost:8080/addSong"),". To send a request body, first go to Headers and add a new key ",Object(o.b)("inlineCode",{parentName:"p"},"Content-Type")," with value ",Object(o.b)("inlineCode",{parentName:"p"},"application/json"),". This says we are sending JSON input (essentially, an object or dictionary) in our request body. In the Body section, select the raw radio button and enter the following in the text field:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "Despacito",\n  "rating": 5\n}\n')),Object(o.b)("p",null,"We will be sending ",Object(o.b)("inlineCode",{parentName:"p"},"name")," with a value of ",Object(o.b)("inlineCode",{parentName:"p"},'"Despacito"')," and ",Object(o.b)("inlineCode",{parentName:"p"},"rating")," with a value of ",Object(o.b)("inlineCode",{parentName:"p"},"5")," in the request body."),Object(o.b)("p",null,"Sending this request, you should see the corresponding song printed out to the console by the endpoint."),Object(o.b)("p",null,"Now, let's create another ",Object(o.b)("inlineCode",{parentName:"p"},"POST")," endpoint to update a song's rating. This will also use a request body with just a ",Object(o.b)("inlineCode",{parentName:"p"},"name")," field, which should match the song we want to update."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'}),"app.post('/updateRating', (req, res) => {\n  for (const song of songs) {\n    if (song.name === req.body.name) {\n      song.rating = req.body.rating;\n    }\n  }\n  res.send('Rating updated!');\n  console.log(songs);\n});\n")),Object(o.b)("h3",{id:"delete-request"},"DELETE Request"),Object(o.b)("p",null,"When creating APIs, we use the ",Object(o.b)("inlineCode",{parentName:"p"},"DELETE")," request method to quite simply delete a specific resource. This should be pretty straightforward: we simply take the name of the song to delete through the request body, and create a new version of the songs without the specified song. We then send text to the requester that it was deleted."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'}),"app.delete('/removeSong', (req, res) => {\n  const newSongs = [];\n  for (let song of songs) {\n    if (song.name !== req.body.name) {\n      newSongs.push(song);\n    }\n  }\n  songs = newSongs;\n  res.send(`Song ${req.body.name} deleted!`);\n});\n")),Object(o.b)("p",null,"And with that, we're done!"),Object(o.b)("h2",{id:"intro-to-databases-and-firebase"},"Intro to Databases and Firebase"),Object(o.b)("p",null,'The music streaming API we just made "works": we can add songs and then get them while running the Express server. But it has one fatal flaw: try stopping the server and then running it again. You\'ll see that all the music is gone! We need some kind of persistent storage for this data: through\u2014you guessed it\u2014a database.'),Object(o.b)("h3",{id:"why-do-we-need-a-database-for-our-backend"},"Why do we need a database for our backend?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Data stored within Node.js is per instance"),Object(o.b)("li",{parentName:"ul"},"Most applications require persistence"),Object(o.b)("li",{parentName:"ul"},"Data analysis"),Object(o.b)("li",{parentName:"ul"},"Performant data location"),Object(o.b)("li",{parentName:"ul"},"Offloading unneeded data from memory")),Object(o.b)("h3",{id:"mysql--relational-databases"},"MySQL + Relational Databases"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Stores data in tables, utilizing rows and tables."),Object(o.b)("li",{parentName:"ul"},"Is relational (think a tuple)"),Object(o.b)("li",{parentName:"ul"},"Has a schema")),Object(o.b)("h3",{id:"nosql-and-firestore"},"NoSQL and Firestore"),Object(o.b)("p",null,"We will focus on NoSQL"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Many NoSQL implementations are schema-less or have a partial schema"),Object(o.b)("li",{parentName:"ul"},"Firestore is a cloud-hosted NoSQL database"),Object(o.b)("li",{parentName:"ul"},"Very flexible and can be used with most popular languages"),Object(o.b)("li",{parentName:"ul"},"Uses documents to store data"),Object(o.b)("li",{parentName:"ul"},"Efficient querying for data")),Object(o.b)("h3",{id:"sql-vs-nosql"},"SQL vs NoSQL"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"SQL databases have a predefined schema, whereas NoSQL databases can abide to any structure you want it to."),Object(o.b)("li",{parentName:"ul"},"NoSQL databases are better suited for large sets of data, but not for complex queries."),Object(o.b)("li",{parentName:"ul"},"SQL databases tend to be less expensive for smaller datasets, but also less flexible."),Object(o.b)("li",{parentName:"ul"},"SQL has strong consistency whereas NoSQL has eventual consistency (i.e. there may be some delay in getting the response back)"),Object(o.b)("li",{parentName:"ul"},"SQL is vertically scalable (need more computing power on one machine to store more data) while NoSQL is horizontally scalable (can distribute storage and compute power on multiple machines)")),Object(o.b)("h3",{id:"what-is-firebase"},"What is Firebase?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Firebase is a Backend as a Service (BaaS) offered by Google",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Allows you to store data"),Object(o.b)("li",{parentName:"ul"},"Host websites"),Object(o.b)("li",{parentName:"ul"},"Authentication"))),Object(o.b)("li",{parentName:"ul"},"NoSQL DB",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Not only SQL"),Object(o.b)("li",{parentName:"ul"},"Non relational")))),Object(o.b)("h3",{id:"why-firebase"},"Why Firebase?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Real-time operations"),Object(o.b)("li",{parentName:"ul"},"Firebase Authentication"),Object(o.b)("li",{parentName:"ul"},"Built-in analytics"),Object(o.b)("li",{parentName:"ul"},"Also supports hosting/deployment"),Object(o.b)("li",{parentName:"ul"},"Integration with other Google services"),Object(o.b)("li",{parentName:"ul"},"Structure we\u2019re familiar with!")))}c.isMDXComponent=!0},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),c=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,m=d["".concat(s,".").concat(u)]||d[u]||b[u]||o;return n?i.a.createElement(m,r(r({ref:t},p),{},{components:n})):i.a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var p=2;p<o;p++)s[p]=n[p];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);