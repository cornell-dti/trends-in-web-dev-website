(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=o,h=u["".concat(c,".").concat(b)]||u[b]||p[b]||r;return n?a.a.createElement(h,i(i({ref:t},l),{},{components:n})):a.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var o=n(3),a=n(7),r=(n(0),n(111)),c={id:"lecture7",title:"Lecture 7"},i={unversionedId:"lecture7",id:"version-2020fa/lecture7",isDocsHomePage:!1,title:"Lecture 7",description:"Lecture Slides",source:"@site/versioned_docs/version-2020fa/lecture7.md",slug:"/lecture7",permalink:"/docs/lecture7",version:"2020fa",sidebar:"docs",previous:{title:"Lecture 6",permalink:"/docs/lecture6"},next:{title:"Lecture 8",permalink:"/docs/lecture8"}},s=[{value:"Hooks, and More on Functional Components in React",id:"hooks-and-more-on-functional-components-in-react",children:[]},{value:"Hooks",id:"hooks",children:[{value:"<code>useState</code>",id:"usestate",children:[]},{value:"<code>useEffect</code>",id:"useeffect",children:[]}]},{value:"Thinking React-ively",id:"thinking-react-ively",children:[]},{value:"Filterable Product Table Example",id:"filterable-product-table-example",children:[]}],l={toc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.google.com/presentation/d/1KhWjXajJQJQygI7npPgk4x6I7N4jY__RBvlVDO2jFO4/edit?usp=sharing"}),"Lecture Slides")),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://drive.google.com/file/d/1MeeIoZl0wN8RMCJkSC17vPyTwrg-2tn3/view?usp=sharing"}),"Lecture Video")),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/finalproject"}),"Final Project Instructions")),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://forms.gle/kzqW3r5fdP1u5Yix9"}),"Final Project Team Matching Form")," due ",Object(r.b)("strong",{parentName:"p"},"Saturday, Nov. 7th")," (no slip days)"),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/finalproject#milestone-0"}),"Milestone 0")," due ",Object(r.b)("strong",{parentName:"p"},"11/10 by 3:59pm")," (no slip days)"),Object(r.b)("h2",{id:"hooks-and-more-on-functional-components-in-react"},"Hooks, and More on Functional Components in React"),Object(r.b)("p",null,"React has changed a lot in the past few years since it was released in 2013,\nin true JavaScript library fashion. A major new concept leading the way of much\ninnovation for React development is Hooks, released in ",Object(r.b)("strong",{parentName:"p"},"2019(!)"),". While there\nare several different Hooks in React (and you can even develop your own), we will be focusing on two main Hooks in this class: ",Object(r.b)("inlineCode",{parentName:"p"},"useState")," and ",Object(r.b)("inlineCode",{parentName:"p"},"useEffect"),". You may read more about these other (equally as important but more involved) Hooks ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://reactjs.org/docs/hooks-reference.html"}),"here"),"."),Object(r.b)("h2",{id:"hooks"},"Hooks"),Object(r.b)("p",null,"To put it simply, Hooks are functions for use in functional components, making them much more powerful."),Object(r.b)("p",null,"You can only call Hooks from the top-level of functional components or your own custom hooks."),Object(r.b)("p",null,"Previously, class components were primarily used for complex components in React\nwhich required their own states and needed to trigger their own side effects based\non updated values in the component, and more. These functionalities were implemented through splitting a component into different parts of its lifecycle, which could easily\nbecome messy. The introduction of Hooks was a game changer, as it allowed developers\nto do away with class-based components and their ugliness."),Object(r.b)("p",null,"While Hooks are a relatively new addition to React, their usage along with functional\ncomponents have quickly become a dominant paradigm for React development, allowing\nfor developers to reduce boilerplate (code required every time you make a certain feature)\nand make code much more understandable (we've seen how functional programming makes code\nboth more concise and less bug-prone), without getting bogged down by confusing\nlifecycle methods."),Object(r.b)("h3",{id:"usestate"},Object(r.b)("inlineCode",{parentName:"h3"},"useState")),Object(r.b)("p",null,"We've shown the ",Object(r.b)("inlineCode",{parentName:"p"},"useState")," Hook in previous lectures and you've had to use it\nto keep track of state in A4 and A5. However, let's get deeper into understanding\nit more generally and what you can do with it."),Object(r.b)("h4",{id:"simple-counter-example"},"Simple Counter Example"),Object(r.b)("p",null,"Let's consider a simple counter component requiring the use of states. We will\noutline the code in both the old class-based paradigm, and the new functional +\nHooks paradigm."),Object(r.b)("h5",{id:"the-class-component-way"},"The Class Component Way"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="Counter.tsx"',title:'"Counter.tsx"'}),"import React from 'react';\n\ntype State = { readonly count: number };\nexport default class Counter extends React.Component<{}, State> {\n  state: State = { count: 0 };\n\n  handleClick = () => this.setState({ count: this.state.count + 1 });\n\n  render() {\n    return (\n      <div>\n        <button onClick={this.handleClick}>Click Me!</button>\n        <p>You clicked {this.state.count} times</p>\n      </div>\n    );\n  }\n}\n")),Object(r.b)("h5",{id:"the-functional-component--hooks-way"},"The Functional Component + Hooks Way"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="Counter.tsx"',title:'"Counter.tsx"'}),"import React, { useState } from 'react';\n\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <button onClick={() => setCount(count + 1)}>Click Me!</button>\n      <p>You clicked {count} times</p>\n    </div>\n  );\n};\n\nexport default Counter;\n")),Object(r.b)("p",null,"Right off the bat, we notice that the functional component with Hooks method is\nmuch more concise and easier to understand. We were able to define the counter's\ndefault (starting) value of 0, its corresponding setter function, and variable to\naccess the state in one line!"),Object(r.b)("p",null,"To generalize the syntax of the ",Object(r.b)("inlineCode",{parentName:"p"},"useState")," Hook, the form is as shown below:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"const [varname, setterFunc] = useState(initValue);"),"\n",Object(r.b)("em",{parentName:"p"},"Note: states can be of any type.")),Object(r.b)("p",null,"We can also share Hooks across multiple components, allowing for even better\nreusability of code."),Object(r.b)("h3",{id:"useeffect"},Object(r.b)("inlineCode",{parentName:"h3"},"useEffect")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"useEffect")," component allows use to trigger side effects in functional components.\nIt takes in a function (we can pass in ES6 arrow functions), which is called ",Object(r.b)("em",{parentName:"p"},"every\ntime")," after the component renders, which is to say every time one of the component's\nstates (in its ",Object(r.b)("inlineCode",{parentName:"p"},"useState")," Hooks) change."),Object(r.b)("p",null,"If we take the previous Counter example and want to change the title of the webpage\nevery time the Counter rerenders,"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"useEffect(() => {\n  document.title = `You clicked ${count} times`;\n});\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"useEffect")," also has a optional second parameter, which is an array of dependencies.\nIf any of these dependencies change (like state variables), the effect is run. For example,\nif we want to update the title of our webpage when the Counter from the previous example\nchanges its ",Object(r.b)("inlineCode",{parentName:"p"},"count")," state, we would use the following ",Object(r.b)("inlineCode",{parentName:"p"},"useEffect")," Hook in the functional\ncomponent:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"// This code will only call the function when the count changes - more optimized\nuseEffect(() => {\n  document.title = `You clicked ${count} times`;\n}, [count]);\n")),Object(r.b)("h4",{id:"useeffect---subscribing-to-outside-data-and-separating-concerns"},Object(r.b)("inlineCode",{parentName:"h4"},"useEffect")," - Subscribing to Outside Data and Separating Concerns"),Object(r.b)("p",null,"Oftentimes when developing web applications, we use APIs to continually update\nand serve data to the user. These can be our own homemade APIs through tools like\nExpress, or external APIs. In any case, it can be wasteful to constantly subscribe\nto an API when the data isn't being rendered. In the second ",Object(r.b)("inlineCode",{parentName:"p"},"useEffect")," call below,\nassume we have a ",Object(r.b)("inlineCode",{parentName:"p"},"ChatAPI")," object we can subscribe to and receive data from, or\nunsubscribe to. We can return a ",Object(r.b)("strong",{parentName:"p"},"function")," from a ",Object(r.b)("inlineCode",{parentName:"p"},"useEffect")," call to be run\nafter it completes, and we pass it an arrow function that simply unsubscribes from the current API instance."),Object(r.b)("p",null,"Also, even though we might be using the same hook for managing side effects of\ndifferent parts of a component, it's best practice to separate them into different\nfunction calls, as seen with the two ",Object(r.b)("inlineCode",{parentName:"p"},"useEffect")," functions below. Both of them will\nstill be run when the component re-renders (e.x. when any state of the component or parent component is changed)."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="FriendStatusWithCounter.tsx"',title:'"FriendStatusWithCounter.tsx"'}),"type Props = { readonly friend: { readonly id: string } };\n\nconst FriendStatusWithCounter = ({ friend }: Props) => {\n  const [count, setCount] = useState(0);\n  const [isOnline, setIsOnline] = useState(false);\n\n  useEffect(() => {\n    document.title = `You clicked ${count} times`;\n  });\n\n  useEffect(() => {\n    ChatAPI.subscribeToFriendStatus(friend.id, (status) => {\n      setIsOnline(status.online);\n    });\n    // Cleanup code\n    return () => ChatAPI.unsubscribeToFriendStatus(friend.id);\n  });\n\n  return (\n    <div>\n      Your friend with id {id} is {isOnline ? 'Online' : 'Offline'}.\n    </div>\n  );\n};\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"While searching online for help / debugging, you will often\nrun into StackOverflow answers or other resources for React dating back from\na few years ago. Unfortunately, when it comes to developing with modern web\ntechnologies like React, some solutions often include deprecated features of React\nin the present day or need to be translated to the new paradigm (like Hooks).\nIt is up to the developer to find the best solution that compromises between\nthe bleeding-edge and practicality."))),Object(r.b)("h2",{id:"thinking-react-ively"},"Thinking React-ively"),Object(r.b)("p",null,"You've now had three weeks devoted to React, currently the most dominant frontend\nweb framework in use for modern web applications. We've learned how to think about\nthings from a component and state-based perspective, which has greatly helped us\nto modularize and reuse code effectively."),Object(r.b)("p",null,"Here is a general thought-flow, from the perspective of a front-end engineer\ndeveloping a React webapp from a design mock + API from the backend engineers:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Break the UI into a component hierarchy. Each component should have a singular\njob, and should be reusable."),Object(r.b)("li",{parentName:"ol"},"Begin by building a static version of that component (not data-driven yet and\nnot interactive), based on the JSON API provided by the backend."),Object(r.b)("li",{parentName:"ol"},"Identify minimal representation of the UI state."),Object(r.b)("li",{parentName:"ol"},'Determine where the state should "live": should it be lifted up into a parent component\nas a common owner between multiple child components?'),Object(r.b)("li",{parentName:"ol"},"Add inverse data flow - handle changes in the child component through a\nparent component"),Object(r.b)("li",{parentName:"ol"},"Connect component to the backend (more on this in Lecture 8!)")),Object(r.b)("h2",{id:"filterable-product-table-example"},"Filterable Product Table Example"),Object(r.b)("p",null,"This section contains the code from the live demo presented during class. Watch the\nlecture video linked at the top for an explanation of the code, intended to\nteach how to think in the React development paradigm."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="App.tsx (root component)"',title:'"App.tsx',"(root":!0,'component)"':!0}),"import React from 'react';\nimport FilterableProductTable from './FilterableProductTable';\n\nconst PRODUCTS = [\n  {\n    category: 'Sporting Goods',\n    price: '$49.99',\n    stocked: true,\n    name: 'Football',\n  },\n  {\n    category: 'Sporting Goods',\n    price: '$9.99',\n    stocked: true,\n    name: 'Baseball',\n  },\n  {\n    category: 'Sporting Goods',\n    price: '$29.99',\n    stocked: false,\n    name: 'Basketball',\n  },\n  {\n    category: 'Electronics',\n    price: '$99.99',\n    stocked: true,\n    name: 'iPod Touch',\n  },\n  {\n    category: 'Electronics',\n    price: '$399.99',\n    stocked: false,\n    name: 'iPhone 5',\n  },\n  {\n    category: 'Electronics',\n    price: '$199.99',\n    stocked: true,\n    name: 'Nexus 7',\n  },\n];\n\nconst App = () => (\n  <div className=\"App\">\n    <FilterableProductTable products={PRODUCTS} />\n  </div>\n);\n\nexport default App;\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="FilterableProductTable.tsx"',title:'"FilterableProductTable.tsx"'}),"import React, { ChangeEvent, useState } from 'react';\nimport ProductTable, { Product } from './Starter';\n\ntype TableProps = {\n  readonly products: Product[];\n};\n\ntype SearchProps = {\n  readonly filterText: string;\n  readonly inStockOnly: boolean;\n  readonly handleFilterTextChange: (e: ChangeEvent<HTMLInputElement>) => void;\n  readonly handleCheckBoxChange: (e: ChangeEvent<HTMLInputElement>) => void;\n};\n\nconst SearchBar = ({\n  filterText,\n  inStockOnly,\n  handleFilterTextChange,\n  handleCheckBoxChange,\n}: SearchProps) => (\n  <form>\n    <input\n      type=\"text\"\n      placeholder=\"Search...\"\n      value={filterText}\n      onChange={handleFilterTextChange}\n    />\n    <p>\n      <input\n        type=\"checkbox\"\n        checked={inStockOnly}\n        onChange={handleCheckBoxChange}\n      />{' '}\n      Only show products in stock\n    </p>\n  </form>\n);\n\nconst FilterableProductTable = ({ products }: TableProps) => {\n  const [filterText, setFilterText] = useState('');\n  const [inStockOnly, setInStockOnly] = useState(false);\n\n  const handleFilterTextChange = (e: ChangeEvent<HTMLInputElement>) =>\n    setFilterText(e.target.value);\n  const handleCheckBoxChange = (e: ChangeEvent<HTMLInputElement>) =>\n    setInStockOnly(e.target.checked);\n\n  return (\n    <div>\n      <SearchBar\n        filterText={filterText} // states passed as prop to SearchBar\n        inStockOnly={inStockOnly} // states passed as prop to SearchBar\n        handleFilterTextChange={handleFilterTextChange} // pass down callbacks to update search state\n        handleCheckBoxChange={handleCheckBoxChange}\n      />\n      <ProductTable\n        products={products} // JSON API model\n        filterText={filterText} // states passed as prop to SearchBar\n        inStockOnly={inStockOnly} // states passed as prop to SearchBar\n      />\n    </div>\n  );\n};\n\nexport default FilterableProductTable;\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="Starter.tsx"',title:'"Starter.tsx"'}),"// Contains all the base components (we can put multiple components in a jsx file\n// for convenience, though this is not usually good practice).\nimport React, { ReactElement } from 'react';\n// These components will be starter code because they are most self-explanatory\n// and purely presentational. We will go over this code briefly in lecture.\n// Students encouraged to read this on their own time.\n\n// Export since this is used in FilterableProductTable as well\nexport type Product = {\n  readonly category: string;\n  readonly price: string;\n  readonly stocked: boolean;\n  readonly name: string;\n};\n\nconst ProductRow = (product: Product) => {\n  const name = product.stocked ? (\n    product.name\n  ) : (\n    <span style={{ color: 'red' }}>{product.name}</span>\n  );\n  return (\n    <tr>\n      <td>{name}</td>\n      <td>{product.price}</td>\n    </tr>\n  );\n};\n\ntype RowProps = {\n  readonly category: string;\n};\n\nconst ProductCategoryRow = ({ category }: RowProps) => (\n  <tr>\n    <th colSpan={2}>{category}</th>\n  </tr>\n);\n\ntype Props = {\n  readonly products: Product[];\n  readonly filterText: string;\n  readonly inStockOnly: boolean;\n};\n\nconst ProductTable = ({ products, filterText, inStockOnly }: Props) => {\n  const rows: ReactElement[] = [];\n  let lastCategory: string | null = null;\n\n  products.forEach((product) => {\n    if (product.name.indexOf(filterText) === -1) {\n      return;\n    }\n    if (inStockOnly && !product.stocked) {\n      return;\n    }\n    if (product.category !== lastCategory) {\n      rows.push(\n        <ProductCategoryRow\n          category={product.category}\n          key={product.category}\n        />\n      );\n    }\n    rows.push(<ProductRow key={product.name} {...product} />);\n    lastCategory = product.category;\n  });\n\n  return (\n    <table>\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Price</th>\n        </tr>\n      </thead>\n      <tbody>{rows}</tbody>\n    </table>\n  );\n};\n\n// Here we can export all these components at once!\n// Notice also the name of the file does not match any single component name.\n// export { ProductRow, ProductCategoryRow, ProductTable };\nexport default ProductTable; // but we only need ProductTable here (in FilterableProductTable.jsx)\n")))}d.isMDXComponent=!0}}]);