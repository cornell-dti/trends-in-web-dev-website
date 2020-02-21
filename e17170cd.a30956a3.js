(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),i=n(9),o=(n(0),n(148)),r={id:"lecture2",title:"Lecture 2"},l={id:"lecture2",title:"Lecture 2",description:"[Lecture Slides](https://docs.google.com/presentation/d/1DOnubRBOjOE8JWchbZziMK4COBPXyLq5MBfcTE2ZVRc/edit?usp=sharing)",source:"@site/docs/lecture2.md",permalink:"/docs/lecture2",sidebar:"docs",previous:{title:"Lecture 1",permalink:"/docs/lecture1"},next:{title:"Lecture 3",permalink:"/docs/lecture3"}},s=[{value:"How to set up a Node project",id:"how-to-set-up-a-node-project",children:[{value:"Initializing a Node project",id:"initializing-a-node-project",children:[]},{value:"Installing Packages",id:"installing-packages",children:[]},{value:"<strong>Don&#39;t Submit <code>node_modules</code>!!</strong>",id:"dont-submit-node_modules",children:[]},{value:"Removing packages",id:"removing-packages",children:[]},{value:"<code>yarn install</code>",id:"yarn-install",children:[]}]},{value:"More Express and HTTP Methods",id:"more-express-and-http-methods",children:[{value:"GET Request",id:"get-request",children:[]},{value:"Postman",id:"postman",children:[]},{value:"POST Request",id:"post-request",children:[]},{value:"Request Bodies",id:"request-bodies",children:[]}]},{value:"Intro to Databases and Firebase",id:"intro-to-databases-and-firebase",children:[{value:"Why do we need a database for our backend?",id:"why-do-we-need-a-database-for-our-backend",children:[]},{value:"MySQL + Relational Databases",id:"mysql--relational-databases",children:[]},{value:"NoSQL and Firestore",id:"nosql-and-firestore",children:[]},{value:"SQL vs NoSQL",id:"sql-vs-nosql",children:[]},{value:"What is Firebase?",id:"what-is-firebase",children:[]},{value:"Why Firebase?",id:"why-firebase",children:[]}]}],b={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.google.com/presentation/d/1DOnubRBOjOE8JWchbZziMK4COBPXyLq5MBfcTE2ZVRc/edit?usp=sharing"}),"Lecture Slides")),Object(o.b)("p",null,"No assignment this week; enjoy your break!"),Object(o.b)("h2",{id:"how-to-set-up-a-node-project"},"How to set up a Node project"),Object(o.b)("h3",{id:"initializing-a-node-project"},"Initializing a Node project"),Object(o.b)("p",null,"Here I will be walking you through how to set up a Node project."),Object(o.b)("p",null,"Navigate to an empty folder where you want your project to be located. I will assume this folder is called ",Object(o.b)("inlineCode",{parentName:"p"},"helloworld"),"."),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"yarn init")," in this folder on the terminal. (Use ",Object(o.b)("inlineCode",{parentName:"p"},"cd")," to navigate to you ",Object(o.b)("inlineCode",{parentName:"p"},"helloworld")," folder in terminal)"),Object(o.b)("p",null,"Upon running ",Object(o.b)("inlineCode",{parentName:"p"},"yarn init"),", you should be prompted to answer eight questions. Hit enter each time, we will use the default answer for all of these questions:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn init v1.19.2\nquestion name (helloworld):\nquestion version (1.0.0):\nquestion description:\nquestion entry point (index.js):\nquestion repository url:\nquestion author:\nquestion license (MIT):\nquestion private:\nsuccess Saved package.json\n\u2728  Done in 16.19s.\n")),Object(o.b)("p",null,"In the end, these questions create a ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file. Your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," should like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'// package.json\n{\n  "name": "helloworld",\n  "version": "1.0.0",\n  "main": "index.js",\n  "license": "MIT"\n}\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," is very important. It contains all the metadata about your project. Notice that the name, version, main, and license match the default responses we gave ",Object(o.b)("inlineCode",{parentName:"p"},"yarn init"),". For future projects, you may want to have more specific values for these keys, but for now the defaults will suffice."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"package.json")," essentially acts as an ingredients list for your project. It contains all dependencies your project needs and instructions for how to start and build your project."),Object(o.b)("h3",{id:"installing-packages"},"Installing Packages"),Object(o.b)("p",null,"Lets try installing a package. In the first assignment we asked you to use ",Object(o.b)("inlineCode",{parentName:"p"},"express"),". Install ",Object(o.b)("inlineCode",{parentName:"p"},"express")," by running:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"yarn add express")),Object(o.b)("p",null,"After installation completes, take a look at your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "test",\n  "version": "1.0.0",\n  "main": "index.js",\n  "license": "MIT",\n  "dependencies": {\n    "express": "^4.17.1"\n  }\n}\n')),Object(o.b)("p",null,"Notice that ",Object(o.b)("inlineCode",{parentName:"p"},"express")," was added to our dependencies. Now ",Object(o.b)("inlineCode",{parentName:"p"},"express")," is available for you to use in your project!"),Object(o.b)("p",null,"Every time you add a dependency with ",Object(o.b)("inlineCode",{parentName:"p"},"yarn add <pkg_name>"),", ",Object(o.b)("inlineCode",{parentName:"p"},"<pkg_name>")," will be added to your dependencies in ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," if it can be found. It will also be added to your ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules"),"."),Object(o.b)("p",null,"Take a look inside your ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," folder. This is where all your packages will be installed. Notice that even though you just installed one package, multiple packages are in ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),". This is because ",Object(o.b)("inlineCode",{parentName:"p"},"express")," itself has several dependencies that also got installed."),Object(o.b)("p",null,"You can find packages to use on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"npmjs.com"}),"npmjs.com"),"."),Object(o.b)("h3",{id:"dont-submit-node_modules"},Object(o.b)("strong",{parentName:"h3"},"Don't Submit ",Object(o.b)("inlineCode",{parentName:"strong"},"node_modules"),"!!")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," can potentially hundreds of megabytes of data on packages you installed. It is important to never submit this with your assignment or push it up to any remote repositories such as GitHub. Before submitting an assignment, remember to remove ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," from the folder and then zip it and submit the zip file. ",Object(o.b)("em",{parentName:"p"},"You will be penalized if ",Object(o.b)("inlineCode",{parentName:"em"},"node_modules")," is submitted"),". Don't worry we will be able to recover your dependencies simply by running ",Object(o.b)("inlineCode",{parentName:"p"},"yarn install"),"."),Object(o.b)("h3",{id:"removing-packages"},"Removing packages"),Object(o.b)("p",null,"Lets say you made a typo installing ",Object(o.b)("inlineCode",{parentName:"p"},"express")," and you instead ran"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"yarn add experss")),Object(o.b)("p",null,"Your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," should look like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "test",\n  "scripts": {\n    "start": "node app.js"\n  },\n  "version": "1.0.0",\n  "main": "index.js",\n  "license": "MIT",\n  "dependencies": {\n    "express": "^4.17.1",\n    "experss": ""\n  }\n}\n')),Object(o.b)("p",null,"Unfortunately, some malicious developer capitalized on this typo mistake and made ",Object(o.b)("inlineCode",{parentName:"p"},"experss")," an actual package. How do you remove experss?"),Object(o.b)("p",null,"There are two ways. First, you can just run ",Object(o.b)("inlineCode",{parentName:"p"},"yarn remove experss"),". This will remove ",Object(o.b)("inlineCode",{parentName:"p"},"experss")," from your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," and your ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," folder."),Object(o.b)("h3",{id:"yarn-install"},Object(o.b)("inlineCode",{parentName:"h3"},"yarn install")),Object(o.b)("p",null,"Another way is to delete ",Object(o.b)("inlineCode",{parentName:"p"},"experss")," manually from your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),". (Just delete the line that has ",Object(o.b)("inlineCode",{parentName:"p"},"experss"),"). This won't actually get rid of the package from your ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules"),"."),Object(o.b)("p",null,"To update your ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules"),", first delete your ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," folder and then run"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"yarn install")),Object(o.b)("p",null,"This fetches all your dependencies again based on your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," and since ",Object(o.b)("inlineCode",{parentName:"p"},"experss")," is no longer there, it is not installed."),Object(o.b)("h2",{id:"more-express-and-http-methods"},"More Express and HTTP Methods"),Object(o.b)("p",null,"Now that we have our Node project set up, we can start writing our first script using JavaScript and express."),Object(o.b)("h3",{id:"get-request"},"GET Request"),Object(o.b)("p",null,"Lets make a simple endpoint that gets the value of a variable ",Object(o.b)("inlineCode",{parentName:"p"},"x"),"."),Object(o.b)("p",null,"Create a new file called ",Object(o.b)("inlineCode",{parentName:"p"},"index.js")," and add the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// index.js\nconst express = require('express');\nconst app = express();\nlet x = 0;\n\napp.get('/getX', function(req, res) {\n  res.send(x + '');\n});\n\napp.listen(8080, function(req, res) {\n  console.log('Hello, World!');\n});\n")),Object(o.b)("p",null,"This should be familiar. The first line loads in the ",Object(o.b)("inlineCode",{parentName:"p"},"express")," dependency and the second line initializes ",Object(o.b)("inlineCode",{parentName:"p"},"express"),". We declare a variable called ",Object(o.b)("inlineCode",{parentName:"p"},"x")," that we will be accessing and updating in this example."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"app.get")," specifies that any ",Object(o.b)("inlineCode",{parentName:"p"},"GET")," requests sent to the endpoint ",Object(o.b)("inlineCode",{parentName:"p"},"/getX")," will send back the value of ",Object(o.b)("inlineCode",{parentName:"p"},"x"),"."),Object(o.b)("p",null,"Lastly, ",Object(o.b)("inlineCode",{parentName:"p"},"app.listen")," starts the server on port 8080 asking it to listen for requests."),Object(o.b)("p",null,"Lets test this script by running ",Object(o.b)("inlineCode",{parentName:"p"},"node index.js")," in the terminal at your ",Object(o.b)("inlineCode",{parentName:"p"},"helloworld")," directory."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Hello, World!")," should be printed on the terminal showing that the port is up and running and listening for requests."),Object(o.b)("p",null,"Use your web browser to navigate to ",Object(o.b)("inlineCode",{parentName:"p"},"localhost:8080/getX"),". You should see the value of ",Object(o.b)("inlineCode",{parentName:"p"},"x"),", 0, on the page."),Object(o.b)("p",null,"You can terminate the running of the script using CTRL/Command+C."),Object(o.b)("h3",{id:"postman"},"Postman"),Object(o.b)("p",null,"Instead of always going to the endpoint in the browser, a robust way of testing our endpoints is to use Postman."),Object(o.b)("p",null,"Postman is a software that allows you to simulate requests that could be sent by a user to your backend. It is useful for testing and ensuring that the behavior of your requests (including necessary headers) is what you expect."),Object(o.b)("p",null,"Download Postman ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.postman.com/downloads/"}),"here"),"."),Object(o.b)("p",null,"Once you have Postman set up, make a request to the ",Object(o.b)("inlineCode",{parentName:"p"},"/getX")," endpoint by setting the request type as ",Object(o.b)("inlineCode",{parentName:"p"},"GET")," and the url as ",Object(o.b)("inlineCode",{parentName:"p"},"localhost:8080/getX"),". You should see 0 in the response body."),Object(o.b)("h3",{id:"post-request"},"POST Request"),Object(o.b)("p",null,"Another type of request we talked about was a POST request, used to send data to the backend. Here we will use a POST request to update our variable ",Object(o.b)("inlineCode",{parentName:"p"},"x"),"."),Object(o.b)("p",null,"Add the following to your ",Object(o.b)("inlineCode",{parentName:"p"},"index.js")," file after your ",Object(o.b)("inlineCode",{parentName:"p"},"app.get")," call:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// index.js\napp.post('/addOne', function(req, res) {\n  if (req.query.variable === 'x') {\n    x += 1;\n    res.send(x + '');\n  } else {\n    res.send('We do not have that variable! :(');\n  }\n});\n")),Object(o.b)("p",null,"This code block tells ",Object(o.b)("inlineCode",{parentName:"p"},"express")," that if it receives a POST request at ",Object(o.b)("inlineCode",{parentName:"p"},"/addOne")," it should check if a query parameter was provided and if that parameter is ",Object(o.b)("inlineCode",{parentName:"p"},"x"),", increment ",Object(o.b)("inlineCode",{parentName:"p"},"x")," and send that new value of ",Object(o.b)("inlineCode",{parentName:"p"},"x")," back. Essentially, if we navigate to ",Object(o.b)("inlineCode",{parentName:"p"},"localhost:8080/addOne?variable=x"),", ",Object(o.b)("inlineCode",{parentName:"p"},"x")," will be incremented and the new value will be sent back. Notice that we are using a query variable ",Object(o.b)("inlineCode",{parentName:"p"},"variable"),". If we don't provide this query parameter or don't set it to ",Object(o.b)("inlineCode",{parentName:"p"},"x"),", the result shown will be ",Object(o.b)("inlineCode",{parentName:"p"},"We do not have that variable! :(")),Object(o.b)("p",null,"Using Postman, we can check this endpoint by setting the request type as ",Object(o.b)("inlineCode",{parentName:"p"},"POST")," and sending the request to ",Object(o.b)("inlineCode",{parentName:"p"},"localhost:8080/addOne?variable=x"),". You should see ",Object(o.b)("inlineCode",{parentName:"p"},"x")," incremented. Sending a ",Object(o.b)("inlineCode",{parentName:"p"},"GET")," request to ",Object(o.b)("inlineCode",{parentName:"p"},"localhost:8080/getX")," should return the same value. Alternatively, if we try sending a ",Object(o.b)("inlineCode",{parentName:"p"},"POST")," request to ",Object(o.b)("inlineCode",{parentName:"p"},"localhost:8080/addOne?variable=y")," or ",Object(o.b)("inlineCode",{parentName:"p"},"localhost:8080/addOne"),", you will see ",Object(o.b)("inlineCode",{parentName:"p"},"We do not have that variable! :("),"."),Object(o.b)("h3",{id:"request-bodies"},"Request Bodies"),Object(o.b)("p",null,"Usually when you want to send a ",Object(o.b)("inlineCode",{parentName:"p"},"POST")," request you also want to send information with it. We can do this using request bodies."),Object(o.b)("p",null,"To do this, we will need to use another package ",Object(o.b)("inlineCode",{parentName:"p"},"body-parser"),". ",Object(o.b)("inlineCode",{parentName:"p"},"body-parser")," should already be installed with ",Object(o.b)("inlineCode",{parentName:"p"},"express"),", but if not you can run ",Object(o.b)("inlineCode",{parentName:"p"},"yarn add body-parser"),"."),Object(o.b)("p",null,"We can import it into our script using ",Object(o.b)("inlineCode",{parentName:"p"},"const bodyParser = require('body-parser');")," and tell express to use it to parse JSON input using ",Object(o.b)("inlineCode",{parentName:"p"},"app.use(bodyParser.json());"),"."),Object(o.b)("p",null,"Your index.js should now look like the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// index.js\nconst express = require('express');\nconst bodyParser = require('body-parser');\n\nconst app = express();\napp.use(bodyParser.json());\n\nlet x = 0;\n\napp.get('/getX', function(req, res) {\n  res.send(x + '');\n});\n\napp.post('/add1', function(req, res) {\n  if (req.query.variable === 'x') {\n    x += 1;\n    res.send(x + '');\n  } else {\n    res.send(\"We don't have that variable! :(\");\n  }\n});\n\napp.listen(8080, function(req, res) {\n  console.log('Hello, World!');\n});\n")),Object(o.b)("p",null,"Now we can add the following function:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"app.post('/updateVar', function(req, res) {\n  x = req.body.x;\n  res.send(x + '');\n});\n")),Object(o.b)("p",null,"This tells ",Object(o.b)("inlineCode",{parentName:"p"},"express")," to listen for ",Object(o.b)("inlineCode",{parentName:"p"},"POST")," requests at endpoint ",Object(o.b)("inlineCode",{parentName:"p"},"/updateVar"),". ",Object(o.b)("inlineCode",{parentName:"p"},"req.body.x")," is the request body and we update our local variable ",Object(o.b)("inlineCode",{parentName:"p"},"x")," to that value and send it back."),Object(o.b)("p",null,"We can check that this endpoint is working using Postman. Set the request type to ",Object(o.b)("inlineCode",{parentName:"p"},"POST")," and url as ",Object(o.b)("inlineCode",{parentName:"p"},"localhost:8080/updateVar"),". To send a request body, first go to Headers and add a new key ",Object(o.b)("inlineCode",{parentName:"p"},"Content-Type")," with value ",Object(o.b)("inlineCode",{parentName:"p"},"application/json"),". This says we are sending JSON input (essentially, an object of dictionary) in our request body. In the Body section, select the raw radio button and enter the following in the text field:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "x": 3000\n}\n')),Object(o.b)("p",null,"We will be sending ",Object(o.b)("inlineCode",{parentName:"p"},"x")," with a value of 3000 in the request body."),Object(o.b)("p",null,"Sending this request, you should see 3000 printed in the request body."),Object(o.b)("h2",{id:"intro-to-databases-and-firebase"},"Intro to Databases and Firebase"),Object(o.b)("h3",{id:"why-do-we-need-a-database-for-our-backend"},"Why do we need a database for our backend?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Data stored within Node.js is per instance"),Object(o.b)("li",{parentName:"ul"},"Most applications require persistence"),Object(o.b)("li",{parentName:"ul"},"Data analysis"),Object(o.b)("li",{parentName:"ul"},"Performant data location"),Object(o.b)("li",{parentName:"ul"},"Offloading unneeded data from memory")),Object(o.b)("h3",{id:"mysql--relational-databases"},"MySQL + Relational Databases"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Stores data in tables, utilizing rows and tables."),Object(o.b)("li",{parentName:"ul"},"Is relational (think a tuple)"),Object(o.b)("li",{parentName:"ul"},"Has a schema")),Object(o.b)("h3",{id:"nosql-and-firestore"},"NoSQL and Firestore"),Object(o.b)("p",null,"We will focus on NoSQL"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Many NoSQL implementations are schema-less or have a partial schema"),Object(o.b)("li",{parentName:"ul"},"Firestore is a cloud-hosted NoSQL database"),Object(o.b)("li",{parentName:"ul"},"Very flexible and can be used with most popular languages"),Object(o.b)("li",{parentName:"ul"},"Uses documents to store data"),Object(o.b)("li",{parentName:"ul"},"Efficient querying for data")),Object(o.b)("h3",{id:"sql-vs-nosql"},"SQL vs NoSQL"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"SQL databases have a predefined schema, whereas NoSQL databases can abide to any structure you want it to."),Object(o.b)("li",{parentName:"ul"},"NoSQL databases are better suited for large sets of data, but not for complex queries."),Object(o.b)("li",{parentName:"ul"},"SQL databases tend to be less expensive for smaller datasets, but also less flexible."),Object(o.b)("li",{parentName:"ul"},"SQL has strong consistency whereas NoSQL has eventual consistency (i.e. there may be some delay in getting the response back)"),Object(o.b)("li",{parentName:"ul"},"SQL is vertically scalable (need more computing power on one machine to store more data) while NoSQL is horizontally scalable (can distribute storage and compute power on multiple machines)")),Object(o.b)("h3",{id:"what-is-firebase"},"What is Firebase?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Firebase is a Backend as a Service (BaaS) offered by Google",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Allows you to store data"),Object(o.b)("li",{parentName:"ul"},"Host websites"),Object(o.b)("li",{parentName:"ul"},"Authentication"))),Object(o.b)("li",{parentName:"ul"},"NoSQL DB",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Not only SQL"),Object(o.b)("li",{parentName:"ul"},"Non relational")))),Object(o.b)("h3",{id:"why-firebase"},"Why Firebase?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Real-time operations"),Object(o.b)("li",{parentName:"ul"},"Firebase Authentication"),Object(o.b)("li",{parentName:"ul"},"Built-in analytics"),Object(o.b)("li",{parentName:"ul"},"Also supports hosting/deployment"),Object(o.b)("li",{parentName:"ul"},"Integration with other Google services"),Object(o.b)("li",{parentName:"ul"},"Structure we\u2019re familiar with!")))}p.isMDXComponent=!0},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),p=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},c=function(e){var t=p(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,m=c["".concat(r,".").concat(u)]||c[u]||d[u]||o;return n?i.a.createElement(m,l({ref:t},b,{components:n})):i.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var b=2;b<o;b++)r[b]=n[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);