"use strict";(self.webpackChunktrends_in_web_dev_website=self.webpackChunktrends_in_web_dev_website||[]).push([[3847],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),r=n(7294),o=n(2389),l=n(9443);var i=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(9558),c=n(6010),p="tabItem_vU9c";function u(e){var t,n,a,o=e.lazy,l=e.block,u=e.defaultValue,d=e.values,m=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"string"==typeof e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),k=(0,s.lx)(y,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===u?u:null!=(t=null!=u?u:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=i(),b=v.tabGroupChoices,w=v.setTabGroupChoices,x=(0,r.useState)(g),N=x[0],C=x[1],T=[],S=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var R=b[m];null!=R&&R!==N&&y.some((function(e){return e.value===R}))&&C(R)}var O=function(e){var t=e.currentTarget,n=T.indexOf(t),a=y[n].value;a!==N&&(S(t),C(a),null!=m&&w(m,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},h)},y.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,c.Z)("tabs__item",p,{"tabs__item--active":N===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:P,onFocus:O,onClick:O},null!=n?n:t)}))),o?(0,r.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},123:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=(n(5064),n(8215),["components"]),i={id:"lecture10",title:"Lecture 10"},s=void 0,c={unversionedId:"lecture10",id:"version-2020fa/lecture10",isDocsHomePage:!1,title:"Lecture 10",description:"Final Project due December 15 at 359pm ET slip days permitting)",source:"@site/versioned_docs/version-2020fa/lecture10.md",sourceDirName:".",slug:"/lecture10",permalink:"/docs/2020fa/lecture10",tags:[],version:"2020fa",frontMatter:{id:"lecture10",title:"Lecture 10"},sidebar:"version-2020fa/docs",previous:{title:"Lecture 9",permalink:"/docs/2020fa/lecture9"},next:{title:"Assignments",permalink:"/docs/2020fa/assignments"}},p=[{value:"How to prettify your app!",id:"how-to-prettify-your-app",children:[{value:"MaterialUI",id:"materialui",children:[{value:"Getting Started",id:"getting-started",children:[],level:4},{value:"Inputs",id:"inputs",children:[],level:4},{value:"Starter.tsx",id:"startertsx",children:[],level:4}],level:3},{value:"Other Resources for Styling",id:"other-resources-for-styling",children:[],level:3}],level:2},{value:"React Native",id:"react-native",children:[{value:"What is React Native?",id:"what-is-react-native",children:[],level:3},{value:"Core React Native Components",id:"core-react-native-components",children:[],level:3},{value:"How to start a React Native Project?",id:"how-to-start-a-react-native-project",children:[],level:3},{value:"Demo",id:"demo",children:[],level:3},{value:"Learn more",id:"learn-more",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Final Project due December 15 at 3:59pm")," (late deadline December 18 3:59pm ET slip days permitting)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1h5dfr9K-YTAb4iQtIKO9NiAabGcqI0p4/view?usp=sharing"},"Lecture Video")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/17J8pTSoy3DoBVNdXBWcbc3opYMBsrg5t5k7V9CMBssc/edit?usp=sharing"},"Lecture Slides")),(0,o.kt)("h2",{id:"how-to-prettify-your-app"},"How to prettify your app!"),(0,o.kt)("p",null,"There are a lot of different options for styling your app. You can write the CSS stylesheets yourself and import them into your React application or you can use a framework! Frameworks like MaterialUI, Bootstrap, SemanticUI have developed \u2728 styled \u2728 React Components for you to use easily! It's as easy as importing and using!"),(0,o.kt)("p",null,"In this lecture we went through how to add one framework, ",(0,o.kt)("a",{parentName:"p",href:"https://material-ui.com/"},(0,o.kt)("strong",{parentName:"a"},"MaterialUI")),", to our ",(0,o.kt)("a",{parentName:"p",href:"./lecture7#filterable-product-table-example"},"Thinking in React example")," from lecture 7."),(0,o.kt)("h3",{id:"materialui"},"MaterialUI"),(0,o.kt)("p",null,"MaterialUI is a framework developed from Google for applying some default (Google-like) styling to your React components!"),(0,o.kt)("h4",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"When using MaterialUI or really any framework, package, or external tool, you should first look at the documentation. The documentation usually gives you tips on how to install and use the package."),(0,o.kt)("p",null,"For MaterialUI, we see that we first need to install it since it's an external package. Run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @material-ui/core\n")),(0,o.kt)("p",null,"Next, we also want to use the classic Roboto font and the documentation says we need to add this line"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<link\n  rel="stylesheet"\n  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"\n/>\n')),(0,o.kt)("p",null,"to our ",(0,o.kt)("inlineCode",{parentName:"p"},"public/index.html"),"."),(0,o.kt)("h4",{id:"inputs"},"Inputs"),(0,o.kt)("p",null,"Let's first convert our input fields (the search bar and the checkbox) into MaterialUI. We can navigate to the components page of MaterialUI by clicking the hamburger icon (three lines) on the top left of the page and scrolling down to ",(0,o.kt)("inlineCode",{parentName:"p"},"Components"),"."),(0,o.kt)("p",null,"We see that there is a ",(0,o.kt)("a",{parentName:"p",href:"https://material-ui.com/components/text-fields/"},(0,o.kt)("inlineCode",{parentName:"a"},"TextField"))," component. On that page we can see several variations of ",(0,o.kt)("inlineCode",{parentName:"p"},"TextField")," and the code associated with it. There is also a ",(0,o.kt)("a",{parentName:"p",href:"https://material-ui.com/components/checkboxes/"},(0,o.kt)("inlineCode",{parentName:"a"},"Checkbox"))," component that can replace our original checkbox."),(0,o.kt)("p",null,"Adding these to the ",(0,o.kt)("inlineCode",{parentName:"p"},"SearchBar")," component in ",(0,o.kt)("inlineCode",{parentName:"p"},"FilterableProductTable.tsx"),", the final file looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="FilterableProductTable.tsx"',title:'"FilterableProductTable.tsx"'},"import React, { ChangeEvent, useState } from 'react';\nimport ProductTable, { Product } from './Starter';\nimport { TextField, Checkbox } from '@material-ui/core/';\n\ntype TableProps = {\n  readonly products: Product[];\n};\n\ntype SearchProps = {\n  readonly filterText: string;\n  readonly inStockOnly: boolean;\n  readonly handleFilterTextChange: (e: ChangeEvent<HTMLInputElement>) => void;\n  readonly handleCheckBoxChange: (e: ChangeEvent<HTMLInputElement>) => void;\n};\n\nconst SearchBar = ({\n  filterText,\n  inStockOnly,\n  handleFilterTextChange,\n  handleCheckBoxChange,\n}: SearchProps) => (\n  <form>\n    <TextField\n      label=\"Search\"\n      variant=\"outlined\"\n      placeholder=\"Search for a product!\"\n      value={filterText}\n      onChange={handleFilterTextChange}\n    />\n    <p>\n      <Checkbox\n        inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}\n        value={inStockOnly}\n        onChange={handleCheckBoxChange}\n      />{' '}\n      Only show products in stock\n    </p>\n  </form>\n);\n\nconst FilterableProductTable = ({ products }: TableProps) => {\n  const [filterText, setFilterText] = useState('');\n  const [inStockOnly, setInStockOnly] = useState(false);\n\n  const handleFilterTextChange = (e: ChangeEvent<HTMLInputElement>) =>\n    setFilterText(e.target.value);\n  const handleCheckBoxChange = (e: ChangeEvent<HTMLInputElement>) =>\n    setInStockOnly(e.target.checked);\n\n  return (\n    <div>\n      <SearchBar\n        filterText={filterText}\n        inStockOnly={inStockOnly}\n        handleFilterTextChange={handleFilterTextChange}\n        handleCheckBoxChange={handleCheckBoxChange}\n      />\n      <ProductTable\n        products={products}\n        filterText={filterText}\n        inStockOnly={inStockOnly}\n      />\n    </div>\n  );\n};\n\nexport default FilterableProductTable;\n")),(0,o.kt)("p",null,"Notice that we imported each component from ",(0,o.kt)("inlineCode",{parentName:"p"},"@material-ui/core")," before using it."),(0,o.kt)("h4",{id:"startertsx"},"Starter.tsx"),(0,o.kt)("p",null,"We apply the same methodology to converting the product table to MaterialUI. MaterialUI has several ",(0,o.kt)("a",{parentName:"p",href:"https://material-ui.com/components/tables/"},"Table components")," that can replace the traditional HTML table elements we use in ",(0,o.kt)("inlineCode",{parentName:"p"},"Starter.tsx"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Starter.tsx"',title:'"Starter.tsx"'},"import React, { ReactElement } from 'react';\nimport {\n  Table,\n  TableHead,\n  TableBody,\n  TableRow,\n  TableCell,\n  createStyles,\n  withStyles,\n  WithStyles,\n} from '@material-ui/core';\n\nexport type Product = {\n  readonly category: string;\n  readonly price: string;\n  readonly stocked: boolean;\n  readonly name: string;\n};\n\nconst ProductRow = (product: Product) => {\n  const name = product.stocked ? (\n    product.name\n  ) : (\n    <span style={{ color: 'red' }}>{product.name}</span>\n  );\n  return (\n    <TableRow>\n      <TableCell>{name}</TableCell>\n      <TableCell>{product.price}</TableCell>\n    </TableRow>\n  );\n};\n\ninterface RowProps extends WithStyles<typeof styles> {\n  readonly category: string;\n}\n\nconst styles = createStyles({\n  ProductCategoryRow: {\n    textAlign: 'center',\n    fontWeight: 'bold',\n  },\n});\n\nconst _ProductCategoryRow = ({ category, classes }: RowProps) => (\n  <TableRow>\n    <TableCell colSpan={2} className={classes.ProductCategoryRow}>\n      {category}\n    </TableCell>\n  </TableRow>\n);\n\nconst ProductCategoryRow = withStyles(styles)(_ProductCategoryRow);\n\ntype Props = {\n  readonly products: Product[];\n  readonly filterText: string;\n  readonly inStockOnly: boolean;\n};\n\nconst ProductTable = ({ products, filterText, inStockOnly }: Props) => {\n  const rows: ReactElement[] = [];\n  let lastCategory: string | null = null;\n\n  products.forEach((product) => {\n    if (product.name.indexOf(filterText) === -1) {\n      return;\n    }\n    if (inStockOnly && !product.stocked) {\n      return;\n    }\n    if (product.category !== lastCategory) {\n      rows.push(\n        <ProductCategoryRow\n          category={product.category}\n          key={product.category}\n        />\n      );\n    }\n    rows.push(<ProductRow key={product.name} {...product} />);\n    lastCategory = product.category;\n  });\n\n  return (\n    <Table>\n      <TableHead>\n        <TableRow>\n          <TableCell>Name</TableCell>\n          <TableCell>Price</TableCell>\n        </TableRow>\n      </TableHead>\n      <TableBody>{rows}</TableBody>\n    </Table>\n  );\n};\n\nexport default ProductTable;\n")),(0,o.kt)("p",null,"Notice we also used MaterialUI's higher order component ",(0,o.kt)("inlineCode",{parentName:"p"},"withStyles")," to inject our own styles into ",(0,o.kt)("inlineCode",{parentName:"p"},"ProductCategoryRow"),". Customizing our own styles is a little bit tricky with a framework since the framework styles generally override our styles. MaterialUI recommends ",(0,o.kt)("inlineCode",{parentName:"p"},"withStyles")," for custom styles ",(0,o.kt)("a",{parentName:"p",href:"https://material-ui.com/customization/components/"},"here"),". It also has some guides on ",(0,o.kt)("a",{parentName:"p",href:"https://material-ui.com/guides/typescript/"},"using ",(0,o.kt)("inlineCode",{parentName:"a"},"withStyles")," with TypeScript")," since ",(0,o.kt)("inlineCode",{parentName:"p"},"withStyles")," passes the styles down as a prop ",(0,o.kt)("inlineCode",{parentName:"p"},"classes")," so we need to add that to our ",(0,o.kt)("inlineCode",{parentName:"p"},"RowType"),"."),(0,o.kt)("h3",{id:"other-resources-for-styling"},"Other Resources for Styling"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://styled-components.com/"},"Styled Components \ud83d\udc85")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://react-bootstrap.github.io/"},"React Bootstrap")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://react.semantic-ui.com/"},"Semantic UI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sass-lang.com/"},"SCSS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stylelint.io/"},"stylelint"))),(0,o.kt)("h2",{id:"react-native"},"React Native"),(0,o.kt)("h3",{id:"what-is-react-native"},"What is React Native?"),(0,o.kt)("p",null,"React Native allows for cross platform mobile development using a webdev framework we already know--React!"),(0,o.kt)("p",null,"React Native allows you to build UIs independent of the platform. Usually when developing an app you have to develop an Android version (using Java/Kotlin) and iOS version (using Objective-C/Swift) separately. React Native takes care of this conversion for you."),(0,o.kt)("h3",{id:"core-react-native-components"},"Core React Native Components"),(0,o.kt)("p",null,"Since React Native is really just React, many of the same concepts (",(0,o.kt)("inlineCode",{parentName:"p"},"useState"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"props"),", React Hooks, etc) still apply to React. However, instead of HTML we have ",(0,o.kt)("inlineCode",{parentName:"p"},"Views"),". A view is the basic building block of UI in mobile development. Views can display images, hold text, handle user input, etc."),(0,o.kt)("p",null,"Some core React Native components are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<View>"),": A container that supports layout with flexbox, style, some touch handling, and accessibility controls. Similar to a non-scrolling ",(0,o.kt)("inlineCode",{parentName:"li"},"<div>"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<Text>"),": Displays, styles, and nests strings of text and even handles touch events. Similar to a ",(0,o.kt)("inlineCode",{parentName:"li"},"<p>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<Image>"),": Displays images like ",(0,o.kt)("inlineCode",{parentName:"li"},"<img>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<ScrollView>"),": A generic scrolling container than can hold nested components and views. Similar to a ",(0,o.kt)("inlineCode",{parentName:"li"},"<div>"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<TextInput>"),": User text input field similar to ",(0,o.kt)("inlineCode",{parentName:"li"},'<input type="text" />'),"."),(0,o.kt)("li",{parentName:"ul"},"... and you can also define your own custom components (and use those built by the community)!")),(0,o.kt)("h3",{id:"how-to-start-a-react-native-project"},"How to start a React Native Project?"),(0,o.kt)("p",null,"React Native uses ",(0,o.kt)("inlineCode",{parentName:"p"},"Expo")," framework to develop, build, and iterate on iOS, Android and webapps. Expo provides a UI for you to view your changes and if you download the Expo app (",(0,o.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US"},"Android"),", ",(0,o.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/expo-client/id982107779"},"iOS"),") you can see those changes on your phone as well! After all, we're doing mobile development."),(0,o.kt)("p",null,"To start a React Native project run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add expo-cli\nyarn expo init <project name>\nyarn start\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"yarn expo init")," is similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app")," in that it generates boilerplate code for you."),(0,o.kt)("h3",{id:"demo"},"Demo"),(0,o.kt)("p",null,"As part of the demo we built the simple TODO list app from assignment 4 in React Native! The code is here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},"import React, { useState } from 'react';\nimport { StyleSheet, Text, View, TextInput, Button } from 'react-native';\n\nexport default function App(): React.ReactElement {\n  const [item, setItem] = useState<string>('');\n  const [items, setItems] = useState<string[]>([]);\n\n  const updateItems = (): void => {\n    setItems([...items, item]);\n    setItem('');\n  };\n\n  return (\n    <View style={styles.container}>\n      <TextInput\n        placeholder=\"Add an item\"\n        style={styles.input}\n        value={item}\n        onChangeText={(text) => setItem(text)}\n      />\n      <Button title=\"Add item\" onPress={() => updateItems()} />\n      {items.map((i, index) => (\n        <Text key={index}> {i} </Text>\n      ))}\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#fff',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n\n  input: {\n    borderWidth: 1,\n    width: 150,\n  },\n});\n")),(0,o.kt)("p",null,"Once you ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start"),", you should be taken to Expo where you can view your changes on your browser. On the bottom left, there should also be a QR code. If you download the Expo app and scan the QR code with your phone camera (",(0,o.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US"},"Android"),", ",(0,o.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/expo-client/id982107779"},"iOS"),"), it should take you to the Expo app where you can see your application in mobile form!"),(0,o.kt)("h3",{id:"learn-more"},"Learn more"),(0,o.kt)("p",null,"This was a very cursory introduction to React Native. You can learn more by referring to React docs."),(0,o.kt)("p",null,"React Docs: ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/getting-started"},"https://reactnative.dev/docs/getting-started")),(0,o.kt)("p",null,"Expo Docs: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.expo.io/"},"https://docs.expo.io/")))}d.isMDXComponent=!0}}]);