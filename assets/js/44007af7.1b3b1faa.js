"use strict";(self.webpackChunktrends_in_web_dev_website=self.webpackChunktrends_in_web_dev_website||[]).push([[6582],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return t?o.createElement(m,i(i({ref:n},u),{},{components:t})):o.createElement(m,i({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2300:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var o=t(7462),a=t(3366),r=(t(7294),t(3905)),i=["components"],l={id:"lecture7",title:"Lecture 7"},s=void 0,c={unversionedId:"lecture7",id:"version-2021sp/lecture7",isDocsHomePage:!1,title:"Lecture 7",description:"Lecture Video will be posted here after lecture",source:"@site/versioned_docs/version-2021sp/lecture7.md",sourceDirName:".",slug:"/lecture7",permalink:"/docs/2021sp/lecture7",tags:[],version:"2021sp",frontMatter:{id:"lecture7",title:"Lecture 7"},sidebar:"docs",previous:{title:"Lecture 6",permalink:"/docs/2021sp/lecture6"},next:{title:"Lecture 8",permalink:"/docs/2021sp/lecture8"}},u=[{value:"Hooks, and More on Functional Components in React",id:"hooks-and-more-on-functional-components-in-react",children:[],level:2},{value:"Hooks",id:"hooks",children:[{value:"<code>useState</code>",id:"usestate",children:[{value:"Simple Counter Example",id:"simple-counter-example",children:[{value:"The Class Component Way",id:"the-class-component-way",children:[],level:5},{value:"The Functional Component + Hooks Way",id:"the-functional-component--hooks-way",children:[],level:5}],level:4}],level:3},{value:"<code>useEffect</code>",id:"useeffect",children:[{value:"<code>useEffect</code> - Subscribing to Outside Data and Separating Concerns",id:"useeffect---subscribing-to-outside-data-and-separating-concerns",children:[],level:4}],level:3}],level:2},{value:"Rules of Hooks",id:"rules-of-hooks",children:[],level:2},{value:"Thinking React-ively",id:"thinking-react-ively",children:[],level:2},{value:"Filterable Product Table Example",id:"filterable-product-table-example",children:[],level:2}],d={toc:u};function p(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Lecture Video will be posted here after lecture"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/13Hx1PQqD7UysPZGjj9Jqd4ZSn1ODt9TfOcqgNG9dCcM/edit?usp=sharing"},"Lecture Slides")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1NS9cAenKt1VVtUzpY0hDf3kQAdg3xU64/view?usp=sharing"},"Lecture Video")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://forms.gle/wQnrAwEB44oYNbCa8"},"Final Project Team Formation Form due 4/11 11:59PM (NO SLIP DAYS USABLE)")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/2021sp/finalproject"},"Final Project (Milestone 0 due Thursday 4/15 3:59PM)")),(0,r.kt)("h2",{id:"hooks-and-more-on-functional-components-in-react"},"Hooks, and More on Functional Components in React"),(0,r.kt)("p",null,"React has changed a lot in the past few years since it was released in 2013,\nin true JavaScript library fashion. A major new concept leading the way of much\ninnovation for React development is Hooks, released in ",(0,r.kt)("strong",{parentName:"p"},"2019(!)"),". While there\nexist many Hooks in React (and you can even develop your own), we will be focusing\non two main Hooks in this class: ",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect"),". You may read more about these other\n(equally as important but more involved) Hooks ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html"},"here"),"."),(0,r.kt)("h2",{id:"hooks"},"Hooks"),(0,r.kt)("p",null,"To put it simply, Hooks are functions for use in functional components, making them much more powerful."),(0,r.kt)("p",null,"You can only call Hooks from the top-level of functional components or your own custom hooks."),(0,r.kt)("p",null,"Previously, class components were primarily used for complex components in React\nwhich required their own states and needed to trigger their own side effects based\non updated values in the component, and more. These functionalities were implemented through\nsplitting a component into different parts of its lifecycle, which could easily\nbecome messy. The introduction of Hooks was a game changer, as it allows developers\nto do away with class-based components and their ugliness."),(0,r.kt)("p",null,"While Hooks are a new addition to React, their usage along with functional\ncomponents have quickly become a dominant paradigm for React development, allowing\nfor developers to reduce boilerplate (code required every time you make a certain feature)\nand make code much more understandable (we've seen how functional programming makes code\nboth more concise and less bug-prone), without getting bogged down by confusing\nlifecycle methods."),(0,r.kt)("h3",{id:"usestate"},(0,r.kt)("inlineCode",{parentName:"h3"},"useState")),(0,r.kt)("p",null,"We've shown the ",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," Hook in previous lectures and you've had to use it\nto keep track of state in A4 and A5. However, let's get deeper into understanding\nit more generally and what you can do with it."),(0,r.kt)("h4",{id:"simple-counter-example"},"Simple Counter Example"),(0,r.kt)("p",null,"Let's consider a simple counter component requiring the use of states. We will\noutline the code in both the old class-based paradigm, and the new functional +\nHooks paradigm."),(0,r.kt)("h5",{id:"the-class-component-way"},"The Class Component Way"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Counter.jsx"',title:'"Counter.jsx"'},"import React from 'react';\n\nexport default class Counter extends React.Component {\n  state = { count: 0 };\n\n  handleClick = () => this.setState({ count: this.state.count + 1 });\n\n  render() {\n    return (\n      <div>\n        <button onClick={this.handleClick}>Click Me!</button>\n        <p>You clicked {this.state.count} times</p>\n      </div>\n    );\n  }\n}\n")),(0,r.kt)("h5",{id:"the-functional-component--hooks-way"},"The Functional Component + Hooks Way"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Counter.jsx / Counter.tsx"',title:'"Counter.jsx',"/":!0,'Counter.tsx"':!0},"import React, { useState } from 'react';\n\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <button onClick={() => setCount(count + 1)}>Click Me!</button>\n      <p>You clicked {count} times</p>\n    </div>\n  );\n};\n\nexport default Counter;\n")),(0,r.kt)("p",null,"Immediately, we notice that the functional component with Hooks method is\nmuch more concise and easier to understand (16 lines to just 11 lines of code). We were able to define the counter's\ndefault (starting) value of 0, its corresponding setter function, and variable to\naccess the state in one line!"),(0,r.kt)("p",null,"To generalize the syntax of the ",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," Hook, the form is as shown below:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"const [varname, setterFunc] = useState(initValue);"),"\n",(0,r.kt)("em",{parentName:"p"},"Note: states can be of any type.")),(0,r.kt)("p",null,"We can also share Hooks across multiple components, allowing for even better\nreusability of code."),(0,r.kt)("h3",{id:"useeffect"},(0,r.kt)("inlineCode",{parentName:"h3"},"useEffect")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," component allows use to trigger side effects in functional components.\nIt takes in a function (we can pass in ES6 arrow functions), which is called ",(0,r.kt)("em",{parentName:"p"},"every\ntime")," after the component renders, which is to say every time one of the component's\nstates (in its ",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," Hooks) change."),(0,r.kt)("p",null,"If we take the previous Counter example and want to change the title of the webpage\nevery time the Counter rerenders,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"useEffect(() => {\n  document.title = `You clicked ${count} times`;\n});\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," also has a optional second parameter, which is an array of dependencies.\nIf any of these dependencies change (like state variables), the effect is run. For example,\nif we want to update the title of our webpage when the Counter from the previous example\nchanges its ",(0,r.kt)("inlineCode",{parentName:"p"},"count")," state, we would use the following ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," Hook in the functional\ncomponent:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// This code will only invoke the function when the count changes - more optimized\nuseEffect(() => {\n  document.title = `You clicked ${count} times`;\n}, [count]);\n")),(0,r.kt)("h4",{id:"useeffect---subscribing-to-outside-data-and-separating-concerns"},(0,r.kt)("inlineCode",{parentName:"h4"},"useEffect")," - Subscribing to Outside Data and Separating Concerns"),(0,r.kt)("p",null,"Oftentimes when developing web applications, we use APIs to continually update\nand serve data to the user. These can be our own homemade APIs through tools like\nExpress, or external APIs. In any case, it can be wasteful to constantly subscribe\nto an API when the data isn't being rendered. In the second ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," call below,\nassume we have a ",(0,r.kt)("inlineCode",{parentName:"p"},"ChatAPI")," object we can subscribe to and receive data from, or\nunsubscribe to. We can return a ",(0,r.kt)("strong",{parentName:"p"},"function")," from a ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," call to be run\nafter it completes, and we pass it an arrow function that simply unsubscribes from the current API instance."),(0,r.kt)("p",null,"Also, even though we might be using the same hook for managing side effects of\ndifferent parts of a component, it's best practice to separate them into different\nfunction calls, as seen with the two ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," functions below especially if your effects concern different things. Both of them will\nstill be run when the component re-renders (e.x. when any state of the component or parent component is changed)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="FriendStatusWithCounter.tsx"',title:'"FriendStatusWithCounter.tsx"'},"type Props = { readonly friend: { readonly id: string } };\n\nconst FriendStatusWithCounter = ({ friend }: Props) => {\n  const [count, setCount] = useState(0);\n  const [isOnline, setIsOnline] = useState(false);\n\n  useEffect(() => {\n    document.title = `You clicked ${count} times`;\n  });\n\n  useEffect(() => {\n    ChatAPI.subscribeToFriendStatus(friend.id, (status) => {\n      setIsOnline(status.online);\n    });\n    // Cleanup code\n    return () => ChatAPI.unsubscribeToFriendStatus(friend.id);\n  });\n\n  return (\n    <div>\n      Your friend with id {id} is {isOnline ? 'Online' : 'Offline'}.\n    </div>\n  );\n};\n")),(0,r.kt)("p",null,"Here, we have one call to ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect()")," for updating ",(0,r.kt)("inlineCode",{parentName:"p"},"document.title")," based on count\nand another call for handling friend status."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"While searching online for help / debugging, you will often\nrun into StackOverflow answers or other resources for React dating back from\na few years ago. Unfortunately, when it comes to developing with modern web\ntechnologies like React, some solutions often include deprecated features of React\nin the present day or need to be translated to the new paradigm (like Hooks).\nIt is up to the developer to find the best solution that compromises between\nthe bleeding-edge and practicality."))),(0,r.kt)("h2",{id:"rules-of-hooks"},"Rules of Hooks"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Only call hooks from the top-level (not in loops, conditions, or nested functions).",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Ensures that hooks are called in the same order each time a component renders."))),(0,r.kt)("li",{parentName:"ol"},"Only call hooks from React functions (not regular JS functions).",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Can call from ",(0,r.kt)("strong",{parentName:"li"},"React functional components"),"."),(0,r.kt)("li",{parentName:"ol"},"Can call from your own custom hooks.")))),(0,r.kt)("h2",{id:"thinking-react-ively"},"Thinking React-ively"),(0,r.kt)("p",null,"You've now had three weeks devoted to React, currently the most dominant frontend\nweb framework in use for modern web applications. We've learned how to think about\nthings from a component and state-based perspective, which has greatly helped us\nto modularize and reuse code effectively."),(0,r.kt)("p",null,"Here is a general thought-flow, from the perspective of a front-end engineer\ndeveloping a React webapp from a design mock + API from the backend engineers:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Break the UI into a component hierarchy. Each component should have a singular\njob, and should be reusable."),(0,r.kt)("li",{parentName:"ol"},"Begin by building a static version of that component (not data-driven yet and\nnot interactive), based on the JSON API provided by the backend."),(0,r.kt)("li",{parentName:"ol"},"Identify minimal representation of the UI state. There\u2019s going to be a lot of data floating around try to keep it only the components that need it by abiding to the DRY principle (DON'T REPEAT YOURSELF)."),(0,r.kt)("li",{parentName:"ol"},'Determine where the state should "live": should it be lifted up into a parent component\nas a common owner between multiple child components?'),(0,r.kt)("li",{parentName:"ol"},"Add inverse data flow - handle changes in the child component through a\nparent component"),(0,r.kt)("li",{parentName:"ol"},"Connect component to the backend (more on this in Lecture 8!)")),(0,r.kt)("h2",{id:"filterable-product-table-example"},"Filterable Product Table Example"),(0,r.kt)("p",null,"This section contains the code from the live demo presented during class. Watch the\nlecture video linked at the top for an explanation of the code, intended to\nteach how to think in the React development paradigm."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx (root component)"',title:'"App.tsx',"(root":!0,'component)"':!0},"import React from 'react';\nimport FilterableProductTable from './FilterableProductTable';\n\nconst PRODUCTS = [\n  {\n    category: 'Sporting Goods',\n    price: '$49.99',\n    stocked: true,\n    name: 'Football',\n  },\n  {\n    category: 'Sporting Goods',\n    price: '$9.99',\n    stocked: true,\n    name: 'Baseball',\n  },\n  {\n    category: 'Sporting Goods',\n    price: '$29.99',\n    stocked: false,\n    name: 'Basketball',\n  },\n  {\n    category: 'Electronics',\n    price: '$99.99',\n    stocked: true,\n    name: 'iPod Touch',\n  },\n  {\n    category: 'Electronics',\n    price: '$399.99',\n    stocked: false,\n    name: 'iPhone 5',\n  },\n  {\n    category: 'Electronics',\n    price: '$199.99',\n    stocked: true,\n    name: 'Nexus 7',\n  },\n];\n\nconst App = () => (\n  <div className=\"App\">\n    <FilterableProductTable products={PRODUCTS} />\n  </div>\n);\n\nexport default App;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="FilterableProductTable.tsx"',title:'"FilterableProductTable.tsx"'},"import { ChangeEvent, useEffect, useState } from 'react';\nimport ProductTable, { Product } from './ProductTable';\n\ntype SearchProps = {\n  readonly filterText: string;\n  readonly inStockOnly: boolean;\n  readonly handleFilterTextChange: (e: ChangeEvent<HTMLInputElement>) => void;\n  readonly handleCheckBoxChange: (e: ChangeEvent<HTMLInputElement>) => void;\n};\n\nconst SearchBar = ({\n  filterText,\n  inStockOnly,\n  handleFilterTextChange,\n  handleCheckBoxChange,\n}: SearchProps) => (\n  <form>\n    <input\n      type=\"text\"\n      placeholder=\"search here\"\n      value={filterText}\n      onChange={handleFilterTextChange}\n    />\n    <p>\n      <input\n        type=\"checkbox\"\n        checked={inStockOnly}\n        onChange={handleCheckBoxChange}\n      />\n      Only show products in stock\n    </p>\n  </form>\n);\n\ntype TableProps = {\n  readonly products: Product[];\n};\n\nconst FilterableProductTable = ({ products }: TableProps) => {\n  const [filterText, setFilterText] = useState('');\n  const [inStockOnly, setInStockOnly] = useState(false);\n  const [loading, setLoading] = useState(false);\n\n  const handleFilterTextChange = (e: ChangeEvent<HTMLInputElement>) =>\n    setFilterText(e.target.value);\n  const handleCheckBoxChange = (e: ChangeEvent<HTMLInputElement>) =>\n    setInStockOnly(e.target.checked);\n\n  useEffect(() => {\n    setLoading(true);\n    setTimeout(() => setLoading(false), 3000);\n  }, [inStockOnly]);\n\n  return loading ? (\n    <div>loading</div>\n  ) : (\n    <div>\n      <SearchBar\n        filterText={filterText} // states passed as prop to SearchBar\n        inStockOnly={inStockOnly} // states passed as prop to SearchBar\n        handleFilterTextChange={handleFilterTextChange} // pass down callbacks to update search state\n        handleCheckBoxChange={handleCheckBoxChange}\n      />\n      <ProductTable\n        products={products} // JSON API model\n        filterText={filterText} // states passed as prop to SearchBar\n        inStockOnly={inStockOnly} // states passed as prop to SearchBar\n      />\n    </div>\n  );\n};\n\nexport default FilterableProductTable;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Starter.tsx"',title:'"Starter.tsx"'},"// Contains all the base components (we can put multiple components in a jsx file\n// for convenience, though this is not usually good practice).\nimport React, { ReactElement } from 'react';\n// These components will be starter code because they are most self-explanatory\n// and purely presentational. We will go over this code briefly in lecture.\n// Students encouraged to read this on their own time.\n\n// Export since this is used in FilterableProductTable as well\nexport type Product = {\n  readonly category: string;\n  readonly price: string;\n  readonly stocked: boolean;\n  readonly name: string;\n};\n\nconst ProductRow = (product: Product) => {\n  const name = product.stocked ? (\n    product.name\n  ) : (\n    <span style={{ color: 'red' }}>{product.name}</span>\n  );\n  return (\n    <tr>\n      <td>{name}</td>\n      <td>{product.price}</td>\n    </tr>\n  );\n};\n\ntype RowProps = {\n  readonly category: string;\n};\n\nconst ProductCategoryRow = ({ category }: RowProps) => (\n  <tr>\n    <th colSpan={2}>{category}</th>\n  </tr>\n);\n\ntype Props = {\n  readonly products: Product[];\n  readonly filterText: string;\n  readonly inStockOnly: boolean;\n};\n\nconst ProductTable = ({ products, filterText, inStockOnly }: Props) => {\n  const rows: ReactElement[] = [];\n  let lastCategory: string | null = null;\n\n  products.forEach((product) => {\n    if (product.name.indexOf(filterText) === -1) {\n      return;\n    }\n    if (inStockOnly && !product.stocked) {\n      return;\n    }\n    if (product.category !== lastCategory) {\n      rows.push(\n        <ProductCategoryRow\n          category={product.category}\n          key={product.category}\n        />,\n      );\n    }\n    rows.push(<ProductRow key={product.name} {...product} />);\n    lastCategory = product.category;\n  });\n\n  return (\n    <table>\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Price</th>\n        </tr>\n      </thead>\n      <tbody>{rows}</tbody>\n    </table>\n  );\n};\n\n// Here we can export all these components at once!\n// Notice also the name of the file does not match any single component name.\n// export { ProductRow, ProductCategoryRow, ProductTable };\nexport default ProductTable; // but we only need ProductTable here (in FilterableProductTable.jsx)\n")))}p.isMDXComponent=!0}}]);