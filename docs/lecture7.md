---
id: lecture7
title: Lecture 7
---

[Lecture Slides](https://docs.google.com/presentation/d/1sBLwqUIciol7970umm83ACJZPfp2TaUQ9x5IQQP5sIo/edit?usp=sharing)

[Lecture Video (coming soon)](#)

[Assignment 6 (coming soon)](#) due **04/22 7:59pm**

# Hooks, and More on Functional Components in React

React has changed a lot in the past few years since it was released in 2013,
in true JavaScript library fashion. A major new concept leading the way of much
innovation for React development is Hooks, released in **2019(!)**. While there
exist many Hooks in React (and you can even develop your own), we will be focusing
on two main Hooks in this class: `useState` and `useEffect`. You may read more about these other
(equally as important but more involved) Hooks [here](https://reactjs.org/docs/hooks-reference.html).

## Hooks

To put it simply, Hooks are functions for use in functional components, making them much more powerful.

You can only call Hooks from the top-level of functional components or your own custom hooks.

Previously, class components were primarily used for complex components in React
which required their own states and needed to trigger their own side effects based
on updated values in the component, and more. These functionalities were implemented through
splitting a component into different parts of its lifecycle, which could easily
become messy. The introduction of Hooks was a game changer, as it allows developers
to do away with class-based components and their ugliness.

While Hooks are a new addition to React, their usage along with functional
components have quickly become a dominant paradigm for React development, allowing
for developers to reduce boilerplate (code required every time you make a certain feature)
and make code much more understandable (we've seen how functional programming makes code
both more concise and less bug-prone), without getting bogged down by confusing
lifecycle methods.

### `useState`

We've shown the `useState` Hook in previous lectures and you've had to use it
to keep track of state in A4 and A5. However, let's get deeper into understanding
it more generally and what you can do with it.

#### Simple Counter Example

Let's consider a simple counter component requiring the use of states. We will
outline the code in both the old class-based paradigm, and the new functional +
Hooks paradigm.

**The Class Component Way**

```jsx
import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>Click Me!</button>
        <p>You clicked {count} times</p>
      </div>
    );
  }
}
```

**The Functional Component + Hooks Way**

```jsx
// Counter.jsx
import React, { useState } from 'react';

export default function () {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
      <p>You clicked {count} times</p>
    </div>
  );
}
```

Right off the bat, we notice that the functional component with Hooks method is
much more concise and easier to understand. We were able to define the counter's
default (starting) value of 0, its corresponding setter function, and variable to
access the state in one line!

To generalize the syntax of the `useState` Hook, the form is as shown below:

`const [varname, setterFunc] = useState(initValue);`
_Note: states can be of any type._

We can also share Hooks across multiple components, allowing for even better
reusability of code.

### `useEffect`

The `useEffect` component allows use to trigger side effects in functional components.
It takes in a function (we can pass in ES6 arrow functions), which is called _every
time_ after the component renders, which is to say every time one of the component's
states (in its `useState` Hooks) change.

If we take the previous Counter example and want to change the title of the webpage
every time the Counter rerenders,

```jsx
useEffect(() => {
  document.title = `You clicked ${count} times`;
});
```

`useEffect` also has a optional second parameter, which is an array of dependencies.
If any of these dependencies change (like state variables), the effect is run. For example,
if we want to update the title of our webpage when the Counter from the previous example
changes its `count` state, we would use the following `useEffect` Hook in the functional
component:

```jsx
// This code will only invoke the function when the count changes - more optimized
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);
```

### Important Note

While searching online for help / debugging, you will often
run into StackOverflow answers or other resources for React dating back from
a few years ago. Unfortunately, when it comes to developing with modern web
technologies like React, some solutions often include deprecated features of React
in the present day or need to be translated to the new paradigm (like Hooks).
It is up to the developer to find the best solution that compromises between
the bleeding-edge and practicality.

## Thinking React-ively

You've now had three weeks devoted to React, likely the most predominant frontend
web framework in use for modern web applications. We've learned how to think about
things from a component and state-based perspective, which has greatly helped us
to modularize and reuse code effectively.

Here is a general thought-flow, from the perspective of a front-end engineer
developing a React webapp from a design mock + API from the backend engineers:

1. Break the UI into a component hierarchy. Each component should have a singular
   job, and should be reusable.
2. Begin by building a static version of that component (not data-driven yet and
   not interactive), based on the JSON API provided by the backend.
3. Identify minimal representation of the UI state.
4. Determine where the state should "live": should it be lifted up into a parent component
   as a common owner between multiple child components?
5. Add inverse data flow - handle changes in the child component through a
   parent component
6. Connect component to the backend (more on this in Lecture 8!)

## Filterable Product Table Example

This section contains the code from the live demo presented during class. Watch the
lecture video linked at the top for an explanation of the code, intended to
teach how to think in the React development paradigm.

App.jsx (root component)

```jsx
import React from 'react';
import FilterableProductTable from './FilterableProductTable';

const PRODUCTS = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football',
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball',
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball',
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch',
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5',
  },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];

const App = () => (
  <div className="App">
    <FilterableProductTable products={PRODUCTS} />
  </div>
);

export default App;
```

FilterableProductTable.jsx

```jsx
import React, { useState } from 'react';
import ProductTable from './Starter';

const SearchBar = ({
  filterText,
  inStockOnly,
  handleFilterTextChange,
  handleCheckBoxChange,
}) => (
  <form>
    <input
      type="text"
      placeholder="Search..."
      value={filterText}
      onChange={handleFilterTextChange}
    />
    <p>
      <input
        type="checkbox"
        checked={inStockOnly}
        onChange={handleCheckBoxChange}
      />{' '}
      Only show products in stock
    </p>
  </form>
);

const FilterableProductTable = ({ products }) => {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleFilterTextChange = (e) => setFilterText(e.target.value);
  const handleCheckBoxChange = (e) => setInStockOnly(e.target.checked);

  return (
    <div>
      <SearchBar
        filterText={filterText} // states passed as prop to SearchBar
        inStockOnly={inStockOnly} // states passed as prop to SearchBar
        handleFilterTextChange={handleFilterTextChange} // only step 5
        handleCheckBoxChange={handleCheckBoxChange} // only step 5
      />
      <ProductTable
        products={products} // JSON API model
        filterText={filterText} // states passed as prop to SearchBar
        inStockOnly={inStockOnly} // states passed as prop to SearchBar
      />
    </div>
  );
};

export default FilterableProductTable;
```

Starter.jsx

```jsx
// Contains all the base components (we can put multiple components in a jsx file
// for convenience, though this is not usually good practice).
import React from 'react';

// These components will be starter code because they are most self-explanatory
// and purely presentational. We will go over this code briefly in lecture.
// Students encouraged to read this on their own time.

const ProductRow = ({ product }) => {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: 'red' }}>{product.name}</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

const ProductCategoryRow = ({ category }) => (
  <tr>
    <th colSpan="2">{category}</th>
  </tr>
);

const ProductTable = ({ products, filterText, inStockOnly }) => {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.indexOf(filterText) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

// Here we can export all these components at once!
// Notice also the name of the file does not match any single component name.
// export { ProductRow, ProductCategoryRow, ProductTable };
export default ProductTable; // but we only need ProductTable here (in FilterableProductTable.jsx)
```
