"use strict";(self.webpackChunktrends_in_web_dev_website=self.webpackChunktrends_in_web_dev_website||[]).push([[5397],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4803:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],o={id:"assignment3",title:"Assignment 3"},p=void 0,s={unversionedId:"assignment3",id:"version-2023sp/assignment3",isDocsHomePage:!1,title:"Assignment 3",description:"In this assignment we will be practicing conditional rendering and lifting state",source:"@site/versioned_docs/version-2023sp/assignment3.md",sourceDirName:".",slug:"/assignment3",permalink:"/docs/assignment3",tags:[],version:"2023sp",frontMatter:{id:"assignment3",title:"Assignment 3"}},d=[{value:"Step 0 - Setup",id:"step-0---setup",children:[],level:2},{value:"Step 1 - Hit The Ground Running",id:"step-1---hit-the-ground-running",children:[],level:2},{value:"Step 2 - Dealing with Lifted State",id:"step-2---dealing-with-lifted-state",children:[{value:"FAQ for Step 2",id:"faq-for-step-2",children:[{value:"What is the type of &quot;setter&quot; functions like <code>setBRBs</code> and <code>setUpgradeCounts</code>?",id:"what-is-the-type-of-setter-functions-like-setbrbs-and-setupgradecounts",children:[],level:4},{value:"Should I always be passing down the state variable/setter function directly to child components?",id:"should-i-always-be-passing-down-the-state-variablesetter-function-directly-to-child-components",children:[],level:4},{value:"Why do the <code>Props</code> types have the <code>readonly</code> thing?",id:"why-do-the-props-types-have-the-readonly-thing",children:[],level:4}],level:3}],level:2},{value:"Step 3 - Tracking Upgrades",id:"step-3---tracking-upgrades",children:[{value:"Accessing <code>upgradeCounts</code>",id:"accessing-upgradecounts",children:[{value:"Hints For Accessing <code>upgradeCounts</code>",id:"hints-for-accessing-upgradecounts",children:[],level:4}],level:3},{value:"Modifying <code>upgradeCounts</code>",id:"modifying-upgradecounts",children:[{value:"Hints For Modifying <code>upgradeCounts</code>",id:"hints-for-modifying-upgradecounts",children:[],level:4}],level:3}],level:2},{value:"Step 4 - Finishing Touches",id:"step-4---finishing-touches",children:[],level:2},{value:"Step 5 - Submission",id:"step-5---submission",children:[],level:2}],u={toc:d};function c(e){var t=e.components,o=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this assignment we will be practicing conditional rendering and lifting state\nup!"),(0,r.kt)("h2",{id:"step-0---setup"},"Step 0 - Setup"),(0,r.kt)("p",null,"Create a Next.js using our ",(0,r.kt)("strong",{parentName:"p"},"starter code")," with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'yarn create next-app --typescript --example "https://github.com/cornell-dti/trends-sp23-a3" YOUR_PROJECT_NAME\n')),(0,r.kt)("h2",{id:"step-1---hit-the-ground-running"},"Step 1 - Hit The Ground Running"),(0,r.kt)("p",null,"As with A2, run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn dev")," in the project directory to start the server and\nnavigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:3000")," to see what the starter code gives you."),(0,r.kt)("p",null,"Here are the important files you'll be working with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"React Components",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"components/game/Game.tsx"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is where our game state will live and be passed down from!"),(0,r.kt)("li",{parentName:"ul"},"Splits the UI into two sections, each of which is its own React component"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"components/game/ClickerSection.tsx"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Displays the number of BRBs you have, as well as other stats"),(0,r.kt)("li",{parentName:"ul"},"Has a button that should give you BRBs when clicked"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"components/game/UpgradesSection.tsx"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Displays a list of upgrades using the ",(0,r.kt)("inlineCode",{parentName:"li"},"UpgradeDisplay")," component"),(0,r.kt)("li",{parentName:"ul"},"Fairly simple - is just a wrapper around the upgrade list"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"components/game/UpgradeDisplay.tsx"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Displays stats of a particular upgrade (purchased count, price, etc)"),(0,r.kt)("li",{parentName:"ul"},"Has a button that should buy the upgrade when clicked"))))),(0,r.kt)("li",{parentName:"ul"},"Other Files",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data/index.ts"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Where all your GAME DATA \ud83e\udd11 is"),(0,r.kt)("li",{parentName:"ul"},"Make sure to add at least one more upgrade to your game"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"types/index.ts"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Just has one type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Upgrade")),(0,r.kt)("li",{parentName:"ul"},"No need to change in this assignment")))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As always, make sure to fill in all the TODOs before submitting!")),(0,r.kt)("h2",{id:"step-2---dealing-with-lifted-state"},"Step 2 - Dealing with Lifted State"),(0,r.kt)("p",null,"In A2, we had the whole game all in one component. But now it's in pieces \ud83d\ude2d"),(0,r.kt)("p",null,"Here is a UML diagram that captures how the starter code is set up:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"component diagram",src:n(9849).Z})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Game.tsx")," has all the lifted state, but it needs to be passed down! The starter\ncode is not complete, which means that your first task is to pass down the props\nthat the other components need."),(0,r.kt)("p",null,"Here are all the ",(0,r.kt)("strong",{parentName:"p"},"additional")," props that need to be passed down:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ClickerSection"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"brbs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setBRBs")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UpgradesSection"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setBRBs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"upgradeCounts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setUpgradeCounts")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UpgradeDisplay"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setBRBs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"upgradeCounts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setUpgradeCounts"))))),(0,r.kt)("p",null,"Remember that adding a required prop is a TWO-FOLD process:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'In the (child) "receiving component", add it to the ',(0,r.kt)("inlineCode",{parentName:"li"},"Props")," type"),(0,r.kt)("li",{parentName:"ol"},'In all (parent) "giving components", supply the prop in JSX (',(0,r.kt)("inlineCode",{parentName:"li"},"<Component />"),")")),(0,r.kt)("h3",{id:"faq-for-step-2"},"FAQ for Step 2"),(0,r.kt)("h4",{id:"what-is-the-type-of-setter-functions-like-setbrbs-and-setupgradecounts"},'What is the type of "setter" functions like ',(0,r.kt)("inlineCode",{parentName:"h4"},"setBRBs")," and ",(0,r.kt)("inlineCode",{parentName:"h4"},"setUpgradeCounts"),"?"),(0,r.kt)("p",null,"Best way to check a type is by hovering over the variable in your IDE!"),(0,r.kt)("p",null,"If you hover over ",(0,r.kt)("inlineCode",{parentName:"p"},"setBRBs"),", you will see ",(0,r.kt)("inlineCode",{parentName:"p"},"Dispatch<SetStateAction<number>>")),(0,r.kt)("p",null,"You will find that the type for the setter function for ",(0,r.kt)("inlineCode",{parentName:"p"},"useState<T>")," will be\n",(0,r.kt)("inlineCode",{parentName:"p"},"Dispatch<SetStateAction<T>>")," for some type ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," representing the state."),(0,r.kt)("h4",{id:"should-i-always-be-passing-down-the-state-variablesetter-function-directly-to-child-components"},"Should I always be passing down the state variable/setter function directly to child components?"),(0,r.kt)("p",null,"You don't have to! We do it in most cases in this assignment for simplicity."),(0,r.kt)("p",null,"However, you can see that ",(0,r.kt)("inlineCode",{parentName:"p"},"clickIncome")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tickIncome")," is passed down to\n",(0,r.kt)("inlineCode",{parentName:"p"},"ClickerSection")," as props. Since those two values are just a function of\n",(0,r.kt)("inlineCode",{parentName:"p"},"upgradeCounts")," (covered in Step 3), you can pass down ",(0,r.kt)("inlineCode",{parentName:"p"},"upgradeCounts")," as a prop\ninstead, and do all the calculation in ",(0,r.kt)("inlineCode",{parentName:"p"},"ClickerSection")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"Game"),"."),(0,r.kt)("p",null,"However(ever), in our assignment we calculate ",(0,r.kt)("inlineCode",{parentName:"p"},"tickIncome")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"Game")," instead of\n",(0,r.kt)("inlineCode",{parentName:"p"},"ClickerSection")," because the tick logic is in ",(0,r.kt)("inlineCode",{parentName:"p"},"Game")," and relies on the value of\n",(0,r.kt)("inlineCode",{parentName:"p"},"tickIncome"),"."),(0,r.kt)("p",null,"TL;DR - Props do not have to mirror state in parent components, you should aim\nto design them in most understandable/practical way!"),(0,r.kt)("h4",{id:"why-do-the-props-types-have-the-readonly-thing"},"Why do the ",(0,r.kt)("inlineCode",{parentName:"h4"},"Props")," types have the ",(0,r.kt)("inlineCode",{parentName:"h4"},"readonly")," thing?"),(0,r.kt)("p",null,"We like to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"readonly")," keyword to attributes in ",(0,r.kt)("inlineCode",{parentName:"p"},"Props")," types to remind\nourselves that props are passed down and cannot be directly modified. If we try\nto do so, we will be warned by TypeScript b/c we have specified it to be\nreadonly. This is an optional code style thing but we like it :)"),(0,r.kt)("h2",{id:"step-3---tracking-upgrades"},"Step 3 - Tracking Upgrades"),(0,r.kt)("p",null,"In A2, we had only 1 upgrade you could buy. Now we can add as many upgrades as\nwe want! ",(0,r.kt)("strong",{parentName:"p"},"However"),", how do we keep track of how many upgrades we've purchased?"),(0,r.kt)("p",null,"If we have one upgrade, we can keep track of this using a single number. But\nwhat if we have ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," number of upgrades? There are many ways to solve this, such\nas with an array. However, we will be instead using the following for A3:"),(0,r.kt)("p",null,"The Map class in JavaScript/TypeScript represents a mapping between a unique key\nand a value. See the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"},"MDN docs"),"\nfor more information on Map if you are unfamiliar."),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"Game.tsx"),", we have a state variable called ",(0,r.kt)("inlineCode",{parentName:"p"},"upgradeCounts")," of type\n",(0,r.kt)("inlineCode",{parentName:"p"},"Map<Upgrade, number>"),". This means that the key is of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Upgrade")," and the\nvalue is of ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),"."),(0,r.kt)("p",null,"If we have an ",(0,r.kt)("inlineCode",{parentName:"p"},"Upgrade")," in mind, we can check the corresponding mapped ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),",\nwhich represents how many times that particular upgrade has been purchased."),(0,r.kt)("h3",{id:"accessing-upgradecounts"},"Accessing ",(0,r.kt)("inlineCode",{parentName:"h3"},"upgradeCounts")),(0,r.kt)("p",null,"We need the values inside ",(0,r.kt)("inlineCode",{parentName:"p"},"upgradeCounts")," for several parts of the game."),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"Game"),", several stats rely on ",(0,r.kt)("inlineCode",{parentName:"p"},"upgradeCounts"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"clickIncome"))," is 1 + the total times purchased across all upgrade\ncategories. Buying any upgrade should increase ",(0,r.kt)("inlineCode",{parentName:"p"},"clickIncome")," by 1."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"tickIncome"))," is the sum of your effective income for each upgrade\n(",(0,r.kt)("inlineCode",{parentName:"p"},"incomePerTick")," ","*"," number of times it was purchased)"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"UpgradesDisplay"),", we want to display the number of times the upgrade has\nbeen purchased (",(0,r.kt)("inlineCode",{parentName:"p"},"purchasedCount"),")"),(0,r.kt)("p",null,"We will also use this ",(0,r.kt)("inlineCode",{parentName:"p"},"purchasedCount")," value to implement a feature in Step 4!"),(0,r.kt)("h4",{id:"hints-for-accessing-upgradecounts"},"Hints For Accessing ",(0,r.kt)("inlineCode",{parentName:"h4"},"upgradeCounts")),(0,r.kt)("p",null,"We can use ",(0,r.kt)("inlineCode",{parentName:"p"},"upgradeCounts.get(upgrade)")," to retrieve the associated value for a\ngiven ",(0,r.kt)("inlineCode",{parentName:"p"},"upgrade"),"."),(0,r.kt)("p",null,"We can use ",(0,r.kt)("inlineCode",{parentName:"p"},"[...upgradeCounts.values()]")," to get a list of values in the Map."),(0,r.kt)("p",null,"We can use ",(0,r.kt)("inlineCode",{parentName:"p"},"[...upgradeCounts.entries()]")," to get a list of ","[key, value]"," pairs in\nthe Map."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"},"MDN docs"),"\nfor more things you can do!"),(0,r.kt)("h3",{id:"modifying-upgradecounts"},"Modifying ",(0,r.kt)("inlineCode",{parentName:"h3"},"upgradeCounts")),(0,r.kt)("p",null,"When we buy an upgrade, we want to increment the associated number in\n",(0,r.kt)("inlineCode",{parentName:"p"},"upgradeCounts")," by 1."),(0,r.kt)("p",null,"This should happen in the ",(0,r.kt)("inlineCode",{parentName:"p"},"buyUpgrade")," function in ",(0,r.kt)("inlineCode",{parentName:"p"},"UpgradeDisplay"),"."),(0,r.kt)("h4",{id:"hints-for-modifying-upgradecounts"},"Hints For Modifying ",(0,r.kt)("inlineCode",{parentName:"h4"},"upgradeCounts")),(0,r.kt)("p",null,"Remember that you can do either ",(0,r.kt)("inlineCode",{parentName:"p"},"setUpgradeCounts(newValue)")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"setUpgradeCounts((oldValue) => newValue)")," to update your state."),(0,r.kt)("p",null,"To make a change to an existing Map, do the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// This *modifies* the Map that upgradeCounts points to\n// newValue points to the SAME Map as upgradeCounts\nconst newValue = upgradeCounts.set(key, newValue);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IMPORTANT")," Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"setUpgradeCounts")," may not behave as you expect when\nworking with object references. If you call ",(0,r.kt)("inlineCode",{parentName:"p"},"setUpgradeCounts(newValue)")," where\n",(0,r.kt)("inlineCode",{parentName:"p"},"newValue")," is the same reference as ",(0,r.kt)("inlineCode",{parentName:"p"},"upgradeCounts"),", then this ",(0,r.kt)("em",{parentName:"p"},"WILL NOT"),"\ntrigger an update/rerender!"),(0,r.kt)("p",null,"To get around this issue, do the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const newValue: Map<Upgrade, number> = upgradeCounts;\nsetUpgradeCounts(newValue); // this is BAD\n// Creates a copy of the map so that React knows that newValue is different\nsetUpgradeCounts(new Map(newValue)); // this is GOOD\n")),(0,r.kt)("h2",{id:"step-4---finishing-touches"},"Step 4 - Finishing Touches"),(0,r.kt)("p",null,"We're done with the biggest part of the assignment, which is dealing with\nupgrades! Now let's add some smaller stuff to make the game cooler :)"),(0,r.kt)("p",null,"Here is a list of features to add:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"Game"),", we normally show ",(0,r.kt)("inlineCode",{parentName:"li"},"<h1>BRB Clicker</h1>")," as the page header.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If we've purchased at least one of every upgrade, then do the following:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Replace the text with ",(0,r.kt)("inlineCode",{parentName:"li"},"\ud83d\udcb0BRB Clicker\ud83d\udcb0")," instead (with ",(0,r.kt)("inlineCode",{parentName:"li"},"h1")," tags still)"),(0,r.kt)("li",{parentName:"ul"},"Right under the header ",(0,r.kt)("inlineCode",{parentName:"li"},"h1")," tag, add a win message in a ",(0,r.kt)("inlineCode",{parentName:"li"},"p")," tag"))),(0,r.kt)("li",{parentName:"ul"},"Refresh your memory on Conditional Rendering from\n",(0,r.kt)("a",{parentName:"li",href:"/docs/2023sp/lecture5#conditional-rendering"},"Lecture 5")," if you're stuck!"))),(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"ClickerSection"),', make the "Acquire BRB" button work!',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Each click should increase BRBs by the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"clickIncome")),(0,r.kt)("li",{parentName:"ul"},"This will be very similar to what you did in A2, using the ",(0,r.kt)("inlineCode",{parentName:"li"},"onClick")," prop"))),(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"UpgradeDisplay"),", we need to increase the price of an upgrade each time we\npurchase it.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In Cookie Clicker, the price increases by 15% every purchase."),(0,r.kt)("li",{parentName:"ul"},"Let's yoink that! (Make sure to round up to the nearest integer)"))),(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"UpgradeDisplay"),", we want to disable the Buy button (make it greyed out and\nunclickable) if we don't have brbs to afford the next upgrade.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<button />")," accepts a prop (like ",(0,r.kt)("inlineCode",{parentName:"li"},"onClick"),") called ",(0,r.kt)("inlineCode",{parentName:"li"},"disabled"),", which takes\na ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," that decides whether the button is disabled or not.")))),(0,r.kt)("h2",{id:"step-5---submission"},"Step 5 - Submission"),(0,r.kt)("p",null,"Make sure you've completed all of the TODOs, including your name/netid in\n",(0,r.kt)("inlineCode",{parentName:"p"},"Footer.tsx")," and the hours worked in ",(0,r.kt)("inlineCode",{parentName:"p"},"index.tsx")),(0,r.kt)("p",null,"Once you are done, please zip up everything in your project folder EXCEPT the\n",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".next")," folders."),(0,r.kt)("p",null,"Be extra careful with ",(0,r.kt)("inlineCode",{parentName:"p"},".next")," because it is a hidden folder, which will not show\nup in Finder/File Explorer by default. Please find out how to show hidden\nfiles/folders for your file browser of your choice."),(0,r.kt)("p",null,"Then submit to CMS!"))}c.isMDXComponent=!0},9849:function(e,t,n){t.Z=n.p+"assets/images/a3_diagram-eae5cb119023b3f5c4f6f0e8d7187049.png"}}]);