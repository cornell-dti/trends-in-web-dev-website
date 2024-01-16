"use strict";(self.webpackChunktrends_in_web_dev_website=self.webpackChunktrends_in_web_dev_website||[]).push([[996],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9127:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],o={id:"lecture6",title:"Lecture 6"},l=void 0,p={unversionedId:"lecture6",id:"version-2023fa/lecture6",isDocsHomePage:!1,title:"Lecture 6",description:"Lecture Slides",source:"@site/versioned_docs/version-2023fa/lecture6.md",sourceDirName:".",slug:"/lecture6",permalink:"/docs/2023fa/lecture6",tags:[],version:"2023fa",frontMatter:{id:"lecture6",title:"Lecture 6"},sidebar:"docs",previous:{title:"Lecture 5",permalink:"/docs/2023fa/lecture5"},next:{title:"Lecture 7",permalink:"/docs/2023fa/lecture7"}},d=[{value:"Intro to Express.js",id:"intro-to-expressjs",children:[{value:"Quick Example",id:"quick-example",children:[],level:3},{value:"Routing",id:"routing",children:[{value:"GET Endpoint",id:"get-endpoint",children:[],level:4},{value:"POST Endpoint",id:"post-endpoint",children:[],level:4},{value:"PUT Endpoint",id:"put-endpoint",children:[],level:4},{value:"DELETE Endpoint",id:"delete-endpoint",children:[],level:4}],level:3}],level:2},{value:"Postman",id:"postman",children:[],level:2},{value:"Sample code",id:"sample-code",children:[],level:2}],c={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/u/1/d/1K3KljkgWdJIDIK7sEObq12MTk-AYB6pNJ0GtTaVNFvA/edit"},"Lecture Slides")),(0,i.kt)("h2",{id:"intro-to-expressjs"},"Intro to Express.js"),(0,i.kt)("p",null,"Now that we understand the difference between what we mean by client side programming and server side programming. Our primary focus for the first 4 lectures was client side programming. Now we\u2019re going to dive deeper into server side programming. One tool we can use to create our own server is a framework called Express.js. Express.js is a minimal and flexible web application framework that provides us a set of features to create our own APIs."),(0,i.kt)("p",null,"To install Express, run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install express")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn add express")," in your preferred directory. If you're using ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),", make sure ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn")," is properly installed on your local development environment."),(0,i.kt)("h3",{id:"quick-example"},"Quick Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import express from 'express';\n\nconst app = express();\nconst port = 8080;\napp.use(express.json());\napp.use(cors());\n\napp.get('/', (req, res) => {\n  res.send('Hello World!');\n});\n\napp.listen(port, () => {\n  console.log(`Server listening on port ${port}`);\n});\n")),(0,i.kt)("p",null,"Here is a quick example on how to set up the boiler plate code for creating an express server."),(0,i.kt)("p",null,"We start by importing the express function from the ",(0,i.kt)("inlineCode",{parentName:"p"},"express")," framework that we just installed using npm."),(0,i.kt)("p",null,"Then we\u2019re going to create a variable called app. This is just an instance of express, which is used to create an application. In our case, we\u2019re using this instance of express to create our server application."),(0,i.kt)("p",null,"This next line is ",(0,i.kt)("inlineCode",{parentName:"p"},"app.use(express.json())"),". This just automatically parses any incoming requests into JSON objects. This makes it easier to handle data sent from the client."),(0,i.kt)("p",null,"There\u2019s an interesting line ",(0,i.kt)("inlineCode",{parentName:"p"},"app.use(cors());")," This line enables the express app to respond to something called preflight requests. A preflight request is something like an OPTION request sent to the server before the actual request is sent. An OPTION request is an HTTP method that is sent by browsers to find out what methods are allowed by the server. This allows clients to obtain any parameters and requirements for specific resources and server capabilities that might be necessary. This is just an aside and isn\u2019t crucial. If you\u2019re interested in learning more about OPTION requests, come to office hours! Basically, this line allows our server to be accessible to any domain that requests a resource from our server via a browser. This basically relaxes the security applied to an API. These CORS errors can get really painful, so remember to add this line if you run into them."),(0,i.kt)("p",null,"The next section is where we\u2019re actually creating our API endpoints. Using the app instance, we\u2019re going ot create a ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," endpoint with the location at the root, which is indicated by the string in the function. Then here is some interesting syntax, which I will go into in more detail later. Essentially, we\u2019re creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," endpoint at the root path and then sending a response to the client saying \u201cHello World\u201d"),(0,i.kt)("p",null,"Finally, this last section is where our server application will actually listen for any connections from clients on the specified port, which we indicated before as ",(0,i.kt)("inlineCode",{parentName:"p"},"8080"),". When our server is up and running, we will console log \u201cServer listening on port ",(0,i.kt)("inlineCode",{parentName:"p"},"[insert port number]")," in this case it\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"8080"),". This function will constantly listen for any connections being made."),(0,i.kt)("p",null,"When running the application with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start"),", the server will be listening on ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:[insert port number here]"),"."),(0,i.kt)("h3",{id:"routing"},"Routing"),(0,i.kt)("p",null,"Routing determines how our server responses to a client request to particular endpoint. An endpoint simply consists of a URI (or path) and a specific HTTP request method (",(0,i.kt)("inlineCode",{parentName:"p"},"GET"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE"),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"app.[METHOD]([PATH], [HANDLER])\n")),(0,i.kt)("h4",{id:"get-endpoint"},"GET Endpoint"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"app.get('/', (req, res) => {\n  res.send('Hello World!');\n});\n")),(0,i.kt)("p",null,"Here we go back to the get request that we saw previously. Essentially here again we have a ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," request with the path at the root. We could change this string to anything we want. Then the next parameter is the handler, which is a call back function that is executed when the route is matched. So, when the client makes a ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," request to the root path of our server running on port 8080, the server will match that request to this function right here and call the handler. The req and res objects are created automatically by the framework and is passed as an argument to route handler functions."),(0,i.kt)("p",null,"The handler takes in the request object and a response object as parameters and executes the body of this function. The request object represents an HTTP request and contains any data that the client may have sent over to the server (query strings, parameters, body, HTTP headers, etc). This isn\u2019t applicable to ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," request since ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," requests are only used to request data. But, we will look at other method types later. The second parameter is the response object which represents the HTTP response object the server will send back to the client. So, this in example, when the client request is routed to this handler, the server will send an object containing the string ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello World.")),(0,i.kt)("h4",{id:"post-endpoint"},"POST Endpoint"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"app.post('/', (req, res) => {\n    const body = req.body\nres.send(\u2018This is a POST request\u2019)\n})\n")),(0,i.kt)("p",null,"Here we have a ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," request with the path at the root. We are allowed to have multiple endpoints with the same path they just have to be different HTTP methods. So, we can have a ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," endpoint and a ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," endpoint at the same path. But, we cannot have two ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," endpoints with the same path."),(0,i.kt)("h4",{id:"put-endpoint"},"PUT Endpoint"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"app.put('/user', (req, res) => {\n  const body = req.body;\n  const username = req.body.username;\n  res.send('This is a PUT request');\n});\n")),(0,i.kt)("p",null,"Here we have a ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT")," request with the path at ",(0,i.kt)("inlineCode",{parentName:"p"},"/user"),".\nHere the handler will get the variable called body to the req.body, which represents any data that the client may have sent over to the server at this endpoint. The handler also sets a constant called username to the username parameter sent in through the body of the client\u2019s HTTP request. Then the handler will send a response back saying ",(0,i.kt)("inlineCode",{parentName:"p"},"This is a PUT request.")," A ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT")," request is typically used for updating data, we will take more of a deep dive into all this in the next lecture when we talk about databases."),(0,i.kt)("h4",{id:"delete-endpoint"},"DELETE Endpoint"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"app.delete('/user/:id', (req, res) => {\n  res.send('This is a delete request for id ${req.params.id}');\n});\n")),(0,i.kt)("p",null,"Here we have a ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," request with the path at \u201c/user/:id\u201d. This is an interesting path because we have :id. Here we have defined a route that takes in a parameter called id. When we visit something like /user/1, the server will respond with ",(0,i.kt)("inlineCode",{parentName:"p"},"This is a DELETE request for id 1.")," You can include parameters into any endpoint path for your server and read them from the request object sent from the client\u2019s HTTP request. This is an example of a dynamic route."),(0,i.kt)("h2",{id:"postman"},"Postman"),(0,i.kt)("p",null,"In order to test our APIs and make sure that they are responding appropriately for certain routes, Postman is a great tool for sending and receiving API requests directly to and from the server."),(0,i.kt)("p",null,"Postman is an API platform used for building and using APIs."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/"},"Download here")),(0,i.kt)("h2",{id:"sample-code"},"Sample code"),(0,i.kt)("p",null,"This week's sample code starter can be found in the files under ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cornell-dti/fa23-trends-lec6-demo"},"this directory"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/michelleli01/trends-fa23-lec6-demo-soln"},"demo solution")))}u.isMDXComponent=!0}}]);