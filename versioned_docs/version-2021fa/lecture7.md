---
id: lecture7
title: Lecture 7
---

[Lecture Slides](https://docs.google.com/presentation/d/1s9rJRQdEVnHNxW_HxVFZWShuQDpseuov8QDaCPZCSAw/edit?usp=sharing)

[Assignment 5](/docs/assignment5) (due 11/11 6:29 PM on CMS)

[Final Project Instructions](/docs/finalproject)

[Final Project Team Matching Form](https://forms.gle/kzqW3r5fdP1u5Yix9) due **Sunday, 11/7 at 11:59 PM** (no slip days)

[Milestone 0](/docs/finalproject#milestone-0) due **11/14 by 11:59pm** (no slip days)

## Hooks, and More on Functional Components in React

In true JavaScript library fashion, React has changed a lot in the past few years
since it was released in 2013. A major new concept leading the way of much
innovation for React development is Hooks, released in **2019(!)**. While there
are many Hooks in React (and you can even develop your own), we will be focusing
on two main Hooks in this class: `useState` and `useEffect`. You may read more about these other
(equally as important but more involved) Hooks [here](https://reactjs.org/docs/hooks-reference.html).

## Hooks

To put it simply, Hooks are functions for use in functional components, making them much more powerful. You can only call Hooks from the top-level of functional components or your own custom hooks.

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

##### The Class Component Way (bad!)

```jsx title="Counter.jsx"
import React from 'react';

export default class Counter extends React.Component {
  state = { count: 0 };

  handleClick = () => this.setState({ count: this.state.count + 1 });

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me!</button>
        <p>You clicked {this.state.count} times</p>
      </div>
    );
  }
}
```

##### The Functional Component + Hooks Way

```jsx title="Counter.jsx / Counter.tsx"
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
      <p>You clicked {count} times</p>
    </div>
  );
};

export default Counter;
```

:::caution

Note: this caution is a rather advanced case and requires some understanding of
asynchronous code.

In the above example, note that we passed the callback
`() => setCount(count + 1)` to the button's `onClick` prop. Sometimes, we end up
with complicated callbacks involving states, and because of the nature of `count`
as an immutable const,it will not behave as expected if you do multiple `setCount`
calls involving the `count` variable. Instead, you can pass yet another callback
to the setter function to make sure we evaluate the current value of the state
up to the current point. This is done through `setCount((val) => val + 1)`.

:::

Immediately, we notice that the functional component with Hooks method is
much more concise and easier to understand (16 lines to just 11 lines of code).
We were able to define the counter's default (starting) value of 0, its
corresponding setter function, and variable toaccess the state in one line!

To generalize the syntax of the `useState` Hook, the form is as shown below:

`const [varname, setterFunc] = useState(initValue);`
_Note: states can be of any type._

Additionally, we can add type parameters to the `useState` call. This is
particularly important when we want to (1) ensure that state is always a certain
type, or (2) make sure that TypeScript doesn't yell at us when we are trying to
set a state for an iterable. That second case sounds confusing, so let's see an
example. Imagine we have a `products` state that will eventually have an array
of `Product` type objects. Then, we would use the following `useState` call:

`const [products, setProducts] = useState<Product[]>([])`

If we had simply done it without the `<Product>` parametrization, then TypeScript
would not know what type that the state should hold, because of the ambiguity
of the empty array `[]` type.

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

```jsx
// This code will only invoke the function when the component first renders.
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, []);
```

#### `useEffect` - Subscribing to Outside Data and Separating Concerns

Oftentimes when developing web applications, we use APIs to continually update
and serve data to the user. These can be our own homemade APIs through tools like
Express, or external APIs. In any case, it can be wasteful to constantly subscribe
to an API when the data isn't being rendered. Consider this toy example. In the
second `useEffect` call below, assume we have a `ChatAPI` object we can subscribe
to and receive data from, or unsubscribe to. We can return a **function** from a
`useEffect` call to be run after it completes. We do this by passing `useEffect`
an arrow function that simply unsubscribes from the current API instance.

Also, even though we might be using the same hook for managing side effects of
different parts of a component, it's best practice to separate them into different
function calls, as seen with the two `useEffect` functions below especially if
your effects concern different things. Both of them will still be run when the
component re-renders (e.x. when any state of the component or parent component is changed).

```tsx title="FriendStatusWithCounter.tsx"
type Props = { readonly friend: { readonly id: string } };

const FriendStatusWithCounter = ({ friend }: Props) => {
  const [count, setCount] = useState(0);
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  useEffect(() => {
    // assume we have some ChatAPI instance with this function
    ChatAPI.subscribeToFriendStatus(friend.id, (status) => {
      setIsOnline(status.online);
    });
    // Cleanup code
    return () => ChatAPI.unsubscribeToFriendStatus(friend.id);
  });

  return (
    <div>
      Your friend with id {id} is {isOnline ? 'Online' : 'Offline'}.
    </div>
  );
};
```

Here, we have one call to `useEffect()` for updating `document.title` based on count
and another call for handling friend status.

:::caution
While searching online for help / debugging, you will often
run into StackOverflow answers or other resources for React dating back from
a few years ago. Unfortunately, when it comes to developing with modern web
technologies like React, some solutions often include deprecated features of React
in the present day or need to be translated to the new paradigm (like Hooks).
It is up to the developer to find the best solution that compromises between
the bleeding-edge and practicality.
:::

## Rules of Hooks

1. Only call hooks from the top-level (not in loops, conditions, or nested functions).
   1. Ensures that hooks are called in the same order each time a component renders.
2. Only call hooks from React functions (not regular JS functions).
   1. Can call from **React functional components**.
   2. Can call from your own custom hooks.

## Thinking React-ively

You've now had three weeks devoted to React, currently the most dominant frontend
web framework in use for modern web applications. We've learned how to think about
things from a component and state-based perspective, which has greatly helped us
to modularize and reuse code effectively.

Here is a general thought-flow, from the perspective of a frontend engineer
developing a React webapp from a design mock + API from the backend engineers:

1. Break the UI into a component hierarchy. Each component should have a singular
   job, and should be reusable.
2. Begin by building a static version of that component (not data-driven yet and
   not interactive), based on the JSON API provided by the backend.
3. Identify minimal representation of the UI state. There’s going to be a lot of
   data floating around; try to keep it only to the components that need it by
   abiding to the DRY principle (**D**ON'T **R**EPEAT **Y**OURSELF).
4. Determine where the state should "live": should it be lifted up into a parent
   component as a common owner between multiple child components?
5. Add inverse data flow - handle changes in the child component through a
   parent component
6. Connect component to the backend (more on this in Lecture 8!)

## Filterable Product Table Example

This section contains the code from the live demo presented during class. Watch the
lecture video linked at the top for an explanation of the code, intended to
teach how to think in the React development paradigm.

```tsx title="App.tsx (root component)"
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
  {
    category: 'Electronics',
    price: '$199.99',
    stocked: true,
    name: 'Nexus 7',
  },
];

const App = () => (
  <div className="App">
    <FilterableProductTable products={PRODUCTS} />
  </div>
);

export default App;
```

```tsx title="FilterableProductTable.tsx"
import React, { ChangeEvent, useState } from 'react';
import ProductTable, { Product } from './Starter';

type TableProps = {
  readonly products: Product[];
};

type SearchProps = {
  readonly filterText: string;
  readonly inStockOnly: boolean;
  readonly handleFilterTextChange: (e: ChangeEvent<HTMLInputElement>) => void;
  readonly handleCheckBoxChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({
  filterText,
  inStockOnly,
  handleFilterTextChange,
  handleCheckBoxChange,
}: SearchProps) => (
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

const FilterableProductTable = ({ products }: TableProps) => {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleFilterTextChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFilterText(e.target.value);
  const handleCheckBoxChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInStockOnly(e.target.checked);

  return (
    <div>
      <SearchBar
        filterText={filterText} // states passed as prop to SearchBar
        inStockOnly={inStockOnly} // states passed as prop to SearchBar
        handleFilterTextChange={handleFilterTextChange} // pass down callbacks to update search state
        handleCheckBoxChange={handleCheckBoxChange}
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

```tsx title="Starter.tsx"
// Contains all the base components (we can put multiple components in a jsx file
// for convenience, though this is not usually good practice).
import React, { ReactElement } from 'react';
// These components will be starter code because they are most self-explanatory
// and purely presentational. We will go over this code briefly in lecture.
// Students encouraged to read this on their own time.

// Export since this is used in FilterableProductTable as well
export type Product = {
  readonly category: string;
  readonly price: string;
  readonly stocked: boolean;
  readonly name: string;
};

const ProductRow = (product: Product) => {
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

type RowProps = {
  readonly category: string;
};

const ProductCategoryRow = ({ category }: RowProps) => (
  <tr>
    <th colSpan={2}>{category}</th>
  </tr>
);

type Props = {
  readonly products: Product[];
  readonly filterText: string;
  readonly inStockOnly: boolean;
};

const ProductTable = ({ products, filterText, inStockOnly }: Props) => {
  const rows: ReactElement[] = [];
  let lastCategory: string | null = null;

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
    rows.push(<ProductRow key={product.name} {...product} />);
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
export default ProductTable; // but we only need ProductTable here (in FilterableProductTable.tsx)
```
