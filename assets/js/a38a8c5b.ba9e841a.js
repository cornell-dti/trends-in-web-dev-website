"use strict";(self.webpackChunktrends_in_web_dev_website=self.webpackChunktrends_in_web_dev_website||[]).push([[2691],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),d=a,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return n?o.createElement(m,r(r({ref:t},c),{},{components:n})):o.createElement(m,r({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1791:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],s={id:"lecture8",title:"Lecture 8"},l=void 0,u={unversionedId:"lecture8",id:"version-2023fa/lecture8",isDocsHomePage:!1,title:"Lecture 8",description:"Lecture Slides",source:"@site/versioned_docs/version-2023fa/lecture8.md",sourceDirName:".",slug:"/lecture8",permalink:"/docs/2023fa/lecture8",tags:[],version:"2023fa",frontMatter:{id:"lecture8",title:"Lecture 8"},sidebar:"docs",previous:{title:"Lecture 7",permalink:"/docs/2023fa/lecture7"},next:{title:"Lecture 9",permalink:"/docs/2023fa/lecture9"}},c=[{value:"Authentication",id:"authentication",children:[{value:"Password",id:"password",children:[],level:3},{value:"Email Link/Phone number",id:"email-linkphone-number",children:[],level:3},{value:"OAuth",id:"oauth",children:[],level:3},{value:"Anonymous",id:"anonymous",children:[],level:3},{value:"Why Authentication?",id:"why-authentication",children:[],level:3}],level:2},{value:"Authentication In Practice",id:"authentication-in-practice",children:[{value:"Firebase Auth",id:"firebase-auth",children:[],level:3},{value:"Firebase Providers",id:"firebase-providers",children:[],level:3},{value:"React Context",id:"react-context",children:[],level:3},{value:"Protecting Actions",id:"protecting-actions",children:[],level:3}],level:2},{value:"Demo code",id:"demo-code",children:[],level:2}],p={toc:c};function h(e){var t=e.components,s=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1enuaGBnQWxxcU59_qi49vIR1zWhsHd1YsAZV9s2ruT4/edit?usp=sharing"},"Lecture Slides")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"finalproject"},"Final Project")),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"We use authentication to refer to the verification of a user's identity. In many\ncases we want to prevent users from pretending to be a person that they are not."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Identity theft is not a joke Jim!"))),(0,i.kt)("p",null,'On websites, we want users to have "accounts" and be able to perform actions\nlike logging in and logging out.'),(0,i.kt)("p",null,"Here are some common ways of authenticating users:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Password"),(0,i.kt)("li",{parentName:"ul"},"Email link"),(0,i.kt)("li",{parentName:"ul"},"Phone number"),(0,i.kt)("li",{parentName:"ul"},"OAuth (Sign in with Google/Apple/etc)"),(0,i.kt)("li",{parentName:"ul"},"Anonymous")),(0,i.kt)("h3",{id:"password"},"Password"),(0,i.kt)("p",null,"Username/password combos have been by far the most prevalent method for\nauthentication. Usernames are usually either bound to the user's email or is\nsimply chosen by the user upon registration."),(0,i.kt)("p",null,"Despite the popularity, password-based authentication has some pitfalls."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It's annoying to type your password every time \ud83d\ude29\ud83d\ude29",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Solved by browser autofill, BUT is prone to attacks"),(0,i.kt)("li",{parentName:"ul"},"If you ever get infected by malware, say goodbye to your passwords!"))),(0,i.kt)("li",{parentName:"ul"},"Also prone to other attacks",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Hashes (especially with older algorithms) are breakable")))),(0,i.kt)("p",null,"There always seems to be a tradeoff:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use the same password for multiple websites = one site gets hacked and now\nthey have all your passwords"),(0,i.kt)("li",{parentName:"ul"},"Use different passwords for multiple websites = i forgort \ud83d\udc80"),(0,i.kt)("li",{parentName:"ul"},"Use password management software = one central password \ud83e\udd21")),(0,i.kt)("p",null,"Despite these pitfalls, password-based authentication is not particularly bad to\nuse. However let's check out some other options!"),(0,i.kt)("h3",{id:"email-linkphone-number"},"Email Link/Phone number"),(0,i.kt)("p",null,"This method of authentication assumes you have an email address or phone number\nthat only you have access to. When you want to log in, an automated service will\nsend an email or text message with a link or code, which you will click or enter\nto prove your identity."),(0,i.kt)("p",null,"With this format, there is no password to remember!"),(0,i.kt)("p",null,'However, email/SMS sending requires a good amount of additional "infrastructure"\nand if taken down, disrupts everyone\'s ability to login this way.'),(0,i.kt)("p",null,"Logging in this way can be slower than typing a password, which is a possible\ndisadvantage as well."),(0,i.kt)("h3",{id:"oauth"},"OAuth"),(0,i.kt)("p",null,"By OAuth we refer to the whole family of 3rd party login providers, perhaps most\npopular being Sign In With Google."),(0,i.kt)("p",null,'This approach to authentication allows us to "offload" all of the login logic to\nanother provider such as Google, magically giving us the authentication data at\nthe end. We get the same advantages as Email/SMS by not having to worry about\nstoring passwords securely.'),(0,i.kt)("p",null,"If users are already signed into the third party provider, such as Google,\nlogging in can be as fast as just clicking a button."),(0,i.kt)("p",null,"One disadvantage of using OAuth is that we expect users to already have accounts\nwith the provider. However this is offset by the monopolization of the Internet\n","-"," it is hard to find users ",(0,i.kt)("strong",{parentName:"p"},"without")," accounts on these platforms."),(0,i.kt)("p",null,"We prefer this approach when building apps for Cornell because every netid has a\nGoogle Workspace account, which we can accept through OAuth."),(0,i.kt)("h3",{id:"anonymous"},"Anonymous"),(0,i.kt)("p",null,"This is a half-approach to authentication and usually an addition to other\nauthentication schemes."),(0,i.kt)("p",null,'Anonymous sign in allows you to instantly create an account without any email or\npassword or anything. However this is with the catch that the account is\ntemporary - you would need to link it with another sign-in method in order to\n"save" the account.'),(0,i.kt)("p",null,"If you accidentally close the browser and/or lose cookies or session data, your\naccount is gone forever!"),(0,i.kt)("p",null,"All in all, this is a pretty niche way to offer account creation, and not\nsomething we will delve into this course."),(0,i.kt)("h3",{id:"why-authentication"},"Why Authentication?"),(0,i.kt)("p",null,"In almost any kind of website that deals with data, you don't want anybody to be\nable to do anything they want."),(0,i.kt)("p",null,"For example, on a social media site, you would only want the user themselves to\nbe able to change their bio or post something. Some sites offer certain content\nonly for certain accounts (like Netflix)."),(0,i.kt)("p",null,"By authenticating users, we are able to implement this kind of logic to restrict\ndifferent users to different actions (also known as authorization)!"),(0,i.kt)("h2",{id:"authentication-in-practice"},"Authentication In Practice"),(0,i.kt)("h3",{id:"firebase-auth"},"Firebase Auth"),(0,i.kt)("p",null,"Firebase offers a simple API which allows for multiple ways of logging in:\nPassword, Email, Phone, OAuth, Anonymous (everything we've discussed above)"),(0,i.kt)("p",null,"There are some pain points with taking advantage of Next.js's SSR with Firebase\nAuth, but it works well with just client side auth!"),(0,i.kt)("p",null,"Before writing any code, you need to setup Firebase Auth in Firebase Console."),(0,i.kt)("p",null,"In your project's Firebase Console, click on the authentication icon below the settings icon:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"authentication icon",src:n(6362).Z})),(0,i.kt)("p",null,"Then click on the sign-in method tab and enable Google login by following the setup instructions:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"sign in method",src:n(1358).Z})),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Check the demo code for code examples on how to implement authentication\nwith Firebase Auth using Google Sign In!"))),(0,i.kt)("h3",{id:"firebase-providers"},"Firebase Providers"),(0,i.kt)("p",null,"Just as we did ",(0,i.kt)("inlineCode",{parentName:"p"},"getFirestore(app)")," to get the Firestore instance of our Firebase\napp, we can do ",(0,i.kt)("inlineCode",{parentName:"p"},"getAuth(app)")," to get access to Firebase Auth."),(0,i.kt)("p",null,"Then we will set up a ",(0,i.kt)("inlineCode",{parentName:"p"},"GoogleAuthProvider")," so that users can log in to our site\nusing Google!"),(0,i.kt)("p",null,"To help us with this, we will use a library called ",(0,i.kt)("inlineCode",{parentName:"p"},"react-with-firebase-auth"),",\nwhich you can install with"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-with-firebase-auth\n")),(0,i.kt)("p",null,"After following relevant documentation, you should get something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="firebase.ts"',title:'"firebase.ts"'},"// other imports\nimport withFirebaseAuth from 'react-with-firebase-auth';\n\n// other Firebase setup stuff\n\nconst auth = getAuth(app);\nconst db = getFirestore(app);\n\nconst providers = {\n  googleProvider: new GoogleAuthProvider(),\n};\n\nconst createComponentWithAuth = withFirebaseAuth({\n  providers,\n  firebaseAppAuth: auth,\n});\n\nconst signInWithGoogle = () => {\n  signInWithPopup(auth, providers.googleProvider);\n};\n\nconst signOutFirebase = () => {\n  signOut(auth);\n};\n\nexport {\n  db,\n  auth,\n  createComponentWithAuth,\n  signInWithGoogle,\n  signOutFirebase as signOut,\n};\n")),(0,i.kt)("p",null,"See ",(0,i.kt)("inlineCode",{parentName:"p"},"util/firebase.ts")," in the demo code below for more!"),(0,i.kt)("h3",{id:"react-context"},"React Context"),(0,i.kt)("p",null,"In our React app, we want to store auth/user data ",(0,i.kt)("em",{parentName:"p"},"somewhere"),"."),(0,i.kt)("p",null,"Unlike regular component state, authentication data is something that almost all\ncomponents want access to. We could stick it as regular state in the very top\ncomponent in our component tree, but that would have to be passed down through\nprops over and over..."),(0,i.kt)("p",null,"We can use React Context with the ",(0,i.kt)("inlineCode",{parentName:"p"},"useContext")," hook (discussed in ",(0,i.kt)("a",{parentName:"p",href:"/docs/lecture6#usecontext"},"Lecture\n6"),") to solve this ",(0,i.kt)("strong",{parentName:"p"},"prop drilling")," problem."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="AuthUserProvider.tsx"',title:'"AuthUserProvider.tsx"'},"// other imports\nimport { WrappedComponentProps } from 'react-with-firebase-auth';\nimport { createComponentWithAuth } from '../../util/firebase';\n\ntype AuthData = Omit<WrappedComponentProps, 'user'> & {\n  user?: User | null;\n};\n\nconst AuthUserContext = createContext<AuthData | undefined>(undefined);\n\nconst AuthUserProvider: FC<WrappedComponentProps> = ({ children, ...auth }) => (\n  <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>\n);\n\nexport default createComponentWithAuth(AuthUserProvider);\n\nexport const useAuth = () => {\n  const context = useContext(AuthUserContext);\n  if (!context) throw new Error('AuthUserContext has no value');\n  return context;\n};\n")),(0,i.kt)("p",null,"After creating this Context Provider, we can wrap our root component in\n",(0,i.kt)("inlineCode",{parentName:"p"},"pages/_app.tsx")," so that any child component can access and interact with our\ncontext."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="_app.tsx"',title:'"_app.tsx"'},"// other imports\nimport AuthUserProvider from '../components/auth/AuthUserProvider';\n\nfunction App({ Component, pageProps }: AppProps) {\n  return (\n    <ChakraProvider>\n      <AuthUserProvider>\n        <Component {...pageProps} />\n      </AuthUserProvider>\n    </ChakraProvider>\n  );\n}\n\nexport default App;\n")),(0,i.kt)("p",null,"Once that is done, you can log in by calling the function inside the context:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="frodo.tsx"',title:'"frodo.tsx"'},"import { signInWithGoogle } from '../util/firebase';\n\n//...\n\n<Button onClick={signInWithGoogle}>Sign In</Button>;\n")),(0,i.kt)("p",null,"See ",(0,i.kt)("inlineCode",{parentName:"p"},"components/auth/AuthUserProvider.tsx")," in the demo code below for more!"),(0,i.kt)("h3",{id:"protecting-actions"},"Protecting Actions"),(0,i.kt)("p",null,"Now that we can access which user is signed in, we would like to use the\ninformation to change how our app deals with the database."),(0,i.kt)("p",null,"Let's take Frodo, our Todo List app. We would like to give each user their own\ntodo list. To do this, we can add a field to every task called ",(0,i.kt)("inlineCode",{parentName:"p"},"owner"),", which\nspecifies who created the task."),(0,i.kt)("p",null,"Then in our query to retrieve from the database, we can filter for only tasks\nthat belong to the current user."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Frodo.tsx"',title:'"Frodo.tsx"'},"const { user } = useAuth();\n\n//...\n\nconst taskQuery = query(\n  collection(db, 'tasks'),\n  where('owner', '==', user!.uid),\n);\n")),(0,i.kt)("p",null,"Similarly, we can populate the ",(0,i.kt)("inlineCode",{parentName:"p"},"owner")," field whenever we create a task."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="TaskAddControl.tsx"',title:'"TaskAddControl.tsx"'},"const { user } = useAuth();\n\n//...\n\nconst task: Task = {\n  text: input,\n  checked: false,\n  owner: user!.uid,\n};\naddDoc(collection(db, 'tasks'), task);\n")),(0,i.kt)("h2",{id:"demo-code"},"Demo code"),(0,i.kt)("p",null,"Feel free to reference our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cornell-dti/trends-fa23-lec8-demo"},"demo code"),"\nto implement authentication in your final project!"),(0,i.kt)("p",null,"Here is the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/michelleli01/trends-fa23-lec8-demo-soln"},"final solution")," to the in class demo"))}h.isMDXComponent=!0},6362:function(e,t,n){t.Z=n.p+"assets/images/authentication-icon-6219e823efacb6f2d39630fc21d027bb.png"},1358:function(e,t,n){t.Z=n.p+"assets/images/signin-method-a02703a228bc864af687a9d2cd2090c9.png"}}]);