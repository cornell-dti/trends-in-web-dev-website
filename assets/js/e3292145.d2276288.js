"use strict";(self.webpackChunktrends_in_web_dev_website=self.webpackChunktrends_in_web_dev_website||[]).push([[4905],{7300:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(6687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,v=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(v,i(i({ref:t},p),{},{components:n})):a.createElement(v,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},405:function(e,t,n){var a=n(6687);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},6151:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(3206),r=n(6687),o=n(8394),i=n(6565);var l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(8722),u=n(6355),p="tabItem_2JgS";function c(e){var t,n,a,o=e.lazy,i=e.block,c=e.defaultValue,d=e.values,m=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"string"==typeof e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),y=(0,s.lx)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=l(),g=k.tabGroupChoices,w=k.setTabGroupChoices,x=(0,r.useState)(b),N=x[0],T=x[1],C=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=g[m];null!=E&&E!==N&&h.some((function(e){return e.value===E}))&&T(E)}var I=function(e){var t=e.currentTarget,n=C.indexOf(t),a=h[n].value;a!==N&&(O(t),T(a),null!=m&&w(m,a))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},v)},h.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,u.Z)("tabs__item",p,{"tabs__item--active":N===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:S,onFocus:I,onClick:I},null!=n?n:t)}))),o?(0,r.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},6565:function(e,t,n){var a=(0,n(6687).createContext)(void 0);t.Z=a},3483:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return v}});var a=n(3206),r=n(5421),o=(n(6687),n(7300)),i=n(6151),l=n(405),s=["components"],u={id:"lecture10",title:"Lecture 10"},p=void 0,c={unversionedId:"lecture10",id:"version-2020sp/lecture10",isDocsHomePage:!1,title:"Lecture 10",description:"Final Project extended to May 9th 759pm EDT slip days permitting)",source:"@site/versioned_docs/version-2020sp/lecture10.md",sourceDirName:".",slug:"/lecture10",permalink:"/docs/2020sp/lecture10",tags:[],version:"2020sp",frontMatter:{id:"lecture10",title:"Lecture 10"},sidebar:"version-2020sp/docs",previous:{title:"Lecture 9",permalink:"/docs/2020sp/lecture9"}},d=[{value:"React Native",id:"react-native",children:[{value:"What is React Native?",id:"what-is-react-native",children:[],level:3},{value:"Core React Native Components",id:"core-react-native-components",children:[],level:3},{value:"How to start a React Native Project?",id:"how-to-start-a-react-native-project",children:[],level:3},{value:"Demo",id:"demo",children:[],level:3},{value:"Learn more",id:"learn-more",children:[],level:3}],level:2}],m={toc:d};function v(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Final Project extended to May 9th 7:59pm EDT")," (late deadline May 12 7:59pm EDT slip days permitting)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/forms/d/e/1FAIpQLScTsXb5MXUNimc0Jaa2E3DZqAplMZLhUJ3sbVbEiP4THmgUTw/viewform?usp=sf_link"},"Feedback Form")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1E4EgcIwCGGsMHH7dLjhbP7VBAjyZTyG1/view?usp=sharing"},"Lecture Video")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1VI8HUBdegLn4zxV35hv8YmkLG5wBYKOOlVy-eZZZa4Y/edit?usp=sharing"},"Lecture Slides")),(0,o.kt)("h2",{id:"react-native"},"React Native"),(0,o.kt)("h3",{id:"what-is-react-native"},"What is React Native?"),(0,o.kt)("p",null,"React Native allows for cross platform mobile development using a webdev framework we already know--React!"),(0,o.kt)("p",null,"React Native allows you to build UIs independent of the platform. Usually when developing an app you have to develop an Android version (using Java/Kotlin) and iOS version (using Objective-C/Swift) separately. React Native takes care of this conversion for you."),(0,o.kt)("h3",{id:"core-react-native-components"},"Core React Native Components"),(0,o.kt)("p",null,"Since React Native is really just React, many of the same concepts (",(0,o.kt)("inlineCode",{parentName:"p"},"useState"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"props"),", React Hooks, etc) still apply to React. However, instead of HTML we have ",(0,o.kt)("inlineCode",{parentName:"p"},"Views"),". A view is the basic building block of UI in mobile development. Views can display images, hold text, handle user input, etc."),(0,o.kt)("p",null,"Some core React Native components are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<View>"),": A container that supports layout with flexbox, style, some touch handling, and accessibility controls. Similar to a non-scrolling ",(0,o.kt)("inlineCode",{parentName:"li"},"<div>"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<Text>"),": Displays, styles, and nests strings of text and even handles touch events. Similar to a ",(0,o.kt)("inlineCode",{parentName:"li"},"<p>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<Image>"),": Displays images like ",(0,o.kt)("inlineCode",{parentName:"li"},"<img>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<ScrollView>"),": A generic scrolling container than can hold nested components and views. Similar to a ",(0,o.kt)("inlineCode",{parentName:"li"},"<div>"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<TextInput>"),": User text input field similar to ",(0,o.kt)("inlineCode",{parentName:"li"},'<input type="text" />'),"."),(0,o.kt)("li",{parentName:"ul"},"... and you can also define your own custom components (and use those built by the community)!")),(0,o.kt)("h3",{id:"how-to-start-a-react-native-project"},"How to start a React Native Project?"),(0,o.kt)("p",null,"React Native uses ",(0,o.kt)("inlineCode",{parentName:"p"},"Expo")," framework to develop, build, and iterate on iOS, Android and webapps. Expo provides a UI for you to view your changes and if you download the Expo app (",(0,o.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US"},"Android"),", ",(0,o.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/expo-client/id982107779"},"iOS"),") you can see those changes on your phone as well! After all, we're doing mobile development."),(0,o.kt)("p",null,"To start a React Native project run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn global add expo-cli\nexpo init <project name>\nyarn start\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"expo init")," is similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app")," in that it generates boilerplate code for you."),(0,o.kt)("h3",{id:"demo"},"Demo"),(0,o.kt)("p",null,"As part of the demo we built the simple TODO list app from assignment 4 in React Native! The code is here:"),(0,o.kt)(i.Z,{groupId:"lang",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},"import React, { useState } from 'react';\nimport { StyleSheet, Text, View, TextInput, Button } from 'react-native';\n\nexport default function App(): React.ReactElement {\n  const [item, setItem] = useState<string>('');\n  const [items, setItems] = useState<string[]>([]);\n\n  const updateItems = (): void => {\n    setItems([...items, item]);\n    setItem('');\n  };\n\n  return (\n    <View style={styles.container}>\n      <TextInput\n        placeholder=\"Add an item\"\n        style={styles.input}\n        value={item}\n        onChangeText={(text) => setItem(text)}\n      />\n      <Button title=\"Add item\" onPress={() => updateItems()} />\n      {items.map((i, index) => (\n        <Text key={index}> {i} </Text>\n      ))}\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#fff',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n\n  input: {\n    borderWidth: 1,\n    width: 150,\n  },\n});\n"))),(0,o.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.jsx"',title:'"App.jsx"'},"import React, { useState } from 'react';\nimport { StyleSheet, Text, View, TextInput, Button } from 'react-native';\n\nexport default function App() {\n  const [item, setItem] = useState('');\n  const [items, setItems] = useState([]);\n\n  const updateItems = () => {\n    setItems([...items, item]);\n    setItem('');\n  };\n\n  return (\n    <View style={styles.container}>\n      <TextInput\n        placeholder=\"Add an item\"\n        style={styles.input}\n        value={item}\n        onChangeText={(text) => setItem(text)}\n      />\n      <Button title=\"Add item\" onPress={() => updateItems()} />\n      {items.map((i, index) => (\n        <Text key={index}> {i} </Text>\n      ))}\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#fff',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n\n  input: {\n    borderWidth: 1,\n    width: 150,\n  },\n});\n")))),(0,o.kt)("p",null,"Once you ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start"),", you should be taken to Expo where you can view your changes on your browser. On the bottom left, there should also be a QR code. If you download the Expo app and scan the QR code with your phone camera (",(0,o.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US"},"Android"),", ",(0,o.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/expo-client/id982107779"},"iOS"),"), it should take you to the Expo app where you can see your application in mobile form!"),(0,o.kt)("h3",{id:"learn-more"},"Learn more"),(0,o.kt)("p",null,"This was a very cursory introduction to React Native. You can learn more by referring to React docs."),(0,o.kt)("p",null,"React Docs: ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/getting-started"},"https://reactnative.dev/docs/getting-started")),(0,o.kt)("p",null,"Expo Docs: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.expo.io/"},"https://docs.expo.io/")))}v.isMDXComponent=!0}}]);