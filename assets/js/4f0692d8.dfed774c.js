"use strict";(self.webpackChunktrends_in_web_dev_website=self.webpackChunktrends_in_web_dev_website||[]).push([[5568],{7300:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(6687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4400:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=n(3206),r=n(5421),o=(n(6687),n(7300)),i=["components"],l={id:"lecture10",title:"Lecture 10"},p=void 0,s={unversionedId:"lecture10",id:"version-2021sp/lecture10",isDocsHomePage:!1,title:"Lecture 10",description:"Lecture Slides",source:"@site/versioned_docs/version-2021sp/lecture10.md",sourceDirName:".",slug:"/lecture10",permalink:"/docs/2021sp/lecture10",tags:[],version:"2021sp",frontMatter:{id:"lecture10",title:"Lecture 10"},sidebar:"docs",previous:{title:"Lecture 9",permalink:"/docs/2021sp/lecture9"},next:{title:"Assignments",permalink:"/docs/2021sp/assignments"}},c=[{value:"React Native",id:"react-native",children:[{value:"What is React Native?",id:"what-is-react-native",children:[],level:3},{value:"Core React Native Components",id:"core-react-native-components",children:[],level:3},{value:"How to start a React Native Project?",id:"how-to-start-a-react-native-project",children:[],level:3},{value:"Demo",id:"demo",children:[],level:3},{value:"Learn more",id:"learn-more",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1_DbVZInabluIm2QDOkgWZG0SwecCYTcyOInm_PIQELE/edit?usp=sharing"},"Lecture Slides")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1d2mCrRM_mavlNhCJk0kf-6ZoTS9VvVGP/view?usp=sharing"},"Lecture Video")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/2021sp/finalproject#milestone-2"},"Final Project - Milestone 2 due 5/6 3:59 PM")),(0,o.kt)("h2",{id:"react-native"},"React Native"),(0,o.kt)("h3",{id:"what-is-react-native"},"What is React Native?"),(0,o.kt)("p",null,"React Native allows for cross platform mobile development using a webdev framework we already know--React!"),(0,o.kt)("p",null,"React Native allows you to build UIs independent of the platform. Usually when developing an app you have to develop an Android version (using Java/Kotlin) and iOS version (using Objective-C/Swift) separately. React Native takes care of this conversion for you."),(0,o.kt)("h3",{id:"core-react-native-components"},"Core React Native Components"),(0,o.kt)("p",null,"Since React Native is really just React, many of the same concepts (",(0,o.kt)("inlineCode",{parentName:"p"},"useState"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"props"),", React Hooks, etc) still apply to React. However, instead of HTML we have ",(0,o.kt)("inlineCode",{parentName:"p"},"Views"),". A view is the basic building block of UI in mobile development. Views can display images, hold text, handle user input, etc."),(0,o.kt)("p",null,"Some core React Native components are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<View>"),": A container that supports layout with flexbox, style, some touch handling, and accessibility controls. Similar to a non-scrolling ",(0,o.kt)("inlineCode",{parentName:"li"},"<div>"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<Text>"),": Displays, styles, and nests strings of text and even handles touch events. Similar to a ",(0,o.kt)("inlineCode",{parentName:"li"},"<p>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<Image>"),": Displays images like ",(0,o.kt)("inlineCode",{parentName:"li"},"<img>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<ScrollView>"),": A generic scrolling container than can hold nested components and views. Similar to a ",(0,o.kt)("inlineCode",{parentName:"li"},"<div>"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<TextInput>"),": User text input field similar to ",(0,o.kt)("inlineCode",{parentName:"li"},'<input type="text" />'),"."),(0,o.kt)("li",{parentName:"ul"},"... and you can also define your own custom components (and use those built by the community)!")),(0,o.kt)("h3",{id:"how-to-start-a-react-native-project"},"How to start a React Native Project?"),(0,o.kt)("p",null,"A popular way to use React Native is through the ",(0,o.kt)("inlineCode",{parentName:"p"},"Expo")," framework, which allows developing, building, and iterating on iOS, Android and webapps. Expo provides a UI for you to view your changes and if you download the Expo app (",(0,o.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US"},"Android"),", ",(0,o.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/expo-client/id982107779"},"iOS"),") you can see those changes on your phone as well! After all, we're doing mobile development."),(0,o.kt)("p",null,"To start a React Native project run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn global add expo-cli\nexpo init <project name>\nyarn start\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"expo init")," is similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app")," in that it generates boilerplate code for you."),(0,o.kt)("h3",{id:"demo"},"Demo"),(0,o.kt)("p",null,"As part of the demo we built the simple TODO list app from assignment 4 in React Native! The code is here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},"import { StatusBar } from 'expo-status-bar';\nimport React, { useState } from 'react';\nimport { StyleSheet, Text, View, TextInput, Button } from 'react-native';\n\nexport default function App(): React.ReactElement {\n  const [inputItem, setInputItem] = useState<string>('');\n  const [items, setItems] = useState<string[]>([]);\n\n  const updateItems = (): void => {\n    setItems([...items, inputItem]);\n    setInputItem('');\n  };\n\n  return (\n    <View style={styles.container}>\n      <View style={styles.itemsView}>\n       {items.map((item, idx) => (\n         <Text key={idx}> {item} </Text>\n       ))}\n      </View>\n      <TextInput\n        placeholder=\"Add an item\"\n        style={styles.input}\n        value={inputItem}\n        onChangeText={(text) => setInputItem(text)}\n      />\n      <Button title=\"Add Item\" onPress={() => updateItems()} />\n      <StatusBar style=\"auto\">\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#fff',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  input: {\n    borderWidth: 1,\n    width: 150,\n    marginBottom: 10,\n  },\n  itemsView: {\n    borderWidth: 1\n  }\n});\n")),(0,o.kt)("p",null,"Once you ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start"),", you should be taken to Expo where you can view your changes on your browser. On the bottom left, there should also be a QR code. If you download the Expo app and scan the QR code with your phone camera (",(0,o.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US"},"Android"),", ",(0,o.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/expo-client/id982107779"},"iOS"),"), it should take you to the Expo app where you can see your application in mobile form!"),(0,o.kt)("h3",{id:"learn-more"},"Learn more"),(0,o.kt)("p",null,"This was a very cursory introduction to React Native. You can learn more by referring to React docs."),(0,o.kt)("p",null,"React Docs: ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/getting-started"},"https://reactnative.dev/docs/getting-started")),(0,o.kt)("p",null,"Expo Docs: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.expo.io/"},"https://docs.expo.io/")))}d.isMDXComponent=!0},3206:function(e,t,n){function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:function(){return a}})},5421:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,{Z:function(){return a}})}}]);