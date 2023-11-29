---
id: lecture8
title: Lecture 8
---

[Lecture Slides](https://docs.google.com/presentation/d/1Htc7OxgJo8OVVxC6Sepl743kXdstj2k3s9kM7q3UYRc/edit?usp=sharing)

[Assignment 5](/docs/2021fa/assignment5) ~~(due 11/11 6:29 PM on CMS)~~ (due date extended to **11/14 by 11:59pm**)

[Final Project Instructions](/docs/2021fa/finalproject)

[Final Project - Milestone 0](/docs/2021fa/finalproject#milestone-0) due **11/14 by 11:59pm**

[Final Project - Milestone 1](/docs/2021fa/finalproject#milestone-1) due **11/21 by 11:59pm**

## Concurrently

The `concurrently` npm package lets us run multiple commands concurrently, as
the name suggests. This is perfect for us since we want to run both the backend
and the frontend at the same time!

You can install and add `concurrently` to `package.json` by running
`yarn install concurrently`.

We can create a `backend` folder as well as a `frontend` folder which contain
the corresponding projects.

Then, you can set up your scripts in your `package.json` like so:

```json title="package.json"
{
  "name": "demo",
  // ...other stuff
  "scripts": {
    "server": "cd backend && yarn start",
    "frontend": "cd frontend && yarn start",
    "start": "concurrently \"yarn server\" \"yarn frontend\" "
  }
}
```

Running `yarn start` would use `concurrently` to start both the backend and
frontend!

## Bridging the Frontend & Backend

We've worked with Express/Firebase on the backend and React on the frontend. So
far, we've been learning about them separately. How can we bring both ends
together to make one working product?

## Data Fetching

"_data_ is the new oil 🤑"

### What IS data fetching?

Data fetching is **getting information (data) from an outside source (e.g. REST API)**

The frontend wants to **fetch data** from the backend.

Frontend tells Backend what it wants.
Backend sends the appropriate data to Frontend.
Frontend displays the data to the user!

In Trends, our React website will be fetching data from our Express server.

### How do we fetch (in React)?

So how do we fetch data with our React frontend?

Two important things to note:

1. Modern browsers have a nifty little JavaScript function called `fetch` that
   you can use to call API endpoints. Libraries such as `axios` provide similar
   functionality.

2. The `useEffect` React hook allows you to trigger side effects, such as
   fetching data!

We want to keep track of our data in our component state, and use hooks like
`useEffect` to `fetch` the data and update the state accordingly!

### Fetching Example

Consider this snippet of code:

```tsx title="App.tsx"
// This corresponds to the type of data you get back in your response
type DataType = readonly string[];

const App = () => {
  const [data, setData] = useState<DataType>([]);
  useEffect(() => {
    fetch(`${API}`)
      .then((response) => response.json())
      .then((d) => setData(d));
  });
  // ... other methods, return, etc
};
```

Here are the important parts:

- We have `data` in our component state. Later, we call `setData` on what the
  backend sends to us.
- We declare a type definition for the `useState` call so that TS knows the type
  of data we're working with. (It can't infer type from an empty array!)
- The `useEffect` hook is used to subscribe to new data.
- `fetch(...)` is called on an API link, followed by `.then(...)` calls that
  format the response into json and then `setData` to the response. The
  `.then()` calls exist because `fetch()` returns a `Promise` (this is explained
  below)

Let's take a deeper look at `fetch`!

## `fetch`

"stop trying to make fetch happen 👧"

`fetch(resource, [init])` is a native browser function for making web requests.

Its params are:

- `resource`: URL of the site you are fetching from
- `init`: optional object containing any custom settings you want to apply to
  the request.

```typescript
    // your init object might look like this
    {
      // HTTP request method
       method: 'GET', // | 'POST' | 'PUT' | 'DELETE' | etc
       // Any request headers you want to add
       headers: {
         'content-type': 'application/json'
       },
       // Request body (remember to stringify!)
       body: JSON.stringify(requestBody)
       // ... other settings
    }
```

- For more on the init object, refer to
  [this link](https://developer.mozilla.org/en-US/docs/2021fa/Web/API/WindowOrWorkerGlobalScope/fetch)!

**IMPORTANT: fetch() returns a PROMISE!**

## Promises

Operations like web requests don't complete instantly! You want to do other stuff
while the operation is still going on.

Promises represent the **eventual** completion (or failure) of an async operation.

Promises are in one of three possible states:

- `pending`: initial state; neither fulfilled nor rejected
- `fulfilled`: operation completed successfully
- `rejected`: operation failed

### `.then()`

`.then()` is a function on Promises that return a promise.

```typescript
p.then(onFulfilled[, onRejected])
```

Let's break this down!

- `p` is a Promise.
- `onFulfilled` is the callback function that is run when `p` is fulfilled
- `onRejected` (OPTIONAL) is the callback for when `p` is rejected

```typescript
p.then(
  (value) => {
    // fulfillment
  },
  (reason) => {
    // rejection
  },
);
```

Let's talk about types! `p` in this case might be `fetch()`, which returns the
type `Promise<Response>`. If so, then `value` would have the type `Response`.
Then, if the fulfillment function (which takes in `value`) returns type
`string`, then the entire expression would be type `Promise<String>`.

If you've taken CS 3110 or done some functional programming outside of this
class/category theory, this might make you think of
Monads/Applicatives/Functors. The specified behavior for `Promise`s in JS/TS
don't exactly follow the laws of what was just listed, but for learning purposes
it may be helpful to roughly compare the `then` function to `fmap` or `bind`.

If you're interested, take a look at this snippet and notice how the types
behave:

```typescript
// promise: Promise<Response>
const promise = fetch('something');

// kindaFunctor: (res: Response) => number
const kindaFunctor = (res: Response) => res.status;

// kindaMonad: (res: Response) => Promise<string>
const kindaMonad = (res: Response) => res.text();

// newPromise1: Promise<number>
const newPromise1 = promise.then(kindaFunctor);

// newPromise2: Promise<string>
const newPromise2 = promise.then(kindaMonad);
```

### `.catch()`

`.catch()` is a function on Promises that catches a rejection.

```typescript
p.catch(onRejected);
```

For example, you might want to `console.log` errors:

```typescript
fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then(...)
  .catch((err) => console.log(err))
```

Note that `onRejected` takes a parameter of type `any`, since we don't know the
type of the error we will get.

### Using `.then()` with `fetch()`

`fetch()` returns a `Promise` that resolves to a `Response` object.

Consider this snippet, similar to one shown above:

```typescript
fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then((response) => response.json())
  .then((d) => setData(d));
  .catch((err) => console.log(err))
```

Here we are getting the response from an endpoint **and then** calling `.json()`
on the response **and then** calling `setData` on the result of `json()`.

If a promise gets rejected anywhere along this chain, we will log the error in
our console.

### async/await

If you have too many `.then()` calls within each other, you might build a
PYRAMID OF DOOM ☠.

Adding the `async` keyword to a function designates that function as an
asynchronous function

Within these `async` functions we can use await to designate which lines need to
be “awaited” upon to resolve

```typescript
// .then
const fetchData = () => {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
    .then((d) => setData(d));
};

// async/await
const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  setData(posts);
};
```

### I still don't understand Promises

Let's say you are at a store and you want to know whether the store has
something in stock. So you ask an employee named Joe and he **promises** you
that he'll be back with the results.

You are now waiting for Joe to come back. The Promise will be **pending** for as
long as Joe is gone.

Let's say Joe comes back with the results. Now you know whether the store is in
stock or not. Now the Promise is **fulfilled**.

Let's say Joe doesn't come back with the results. Unfortunately an anvil fell on
him or something. Now you know that Joe will not come back with the result. Now
the Promise is **rejected**.

## What if I don't like `fetch`? 😩

Try `axios` instead!

Axios is an npm package that can give you a better experience fetching data.

It has methods like:

- `axios.get(url[, config])`
- `axios.post(url[, data[, config]])`
- `axios.put(url[, data[, config]])`
- `axios.delete(url[, config])`

Axios also returns a promise and can be resolved with `.then()`.

Here's an example:

```typescript
// fetch()
const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  setData(posts);
};

// axios
const fetchData = async () => {
  const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
  setData(posts);
};
```

In Typescript you can provide type definitions for the response you'll get from
a request, similar to what we do in `useState<type>`. If you don't specify,
you'll get the `any` type.

```typescript
// anyResponse: AxiosResponse<any>
const anyResponse = await axios.get('url');
// anyData: any
const anyData = anyResponse.data;

type DataType = ...;
// typedResponse: AxiosResponse<DataType>
const typedResponse = await axios.get<DataType>('url');
// typedData: DataType
const typedData = typedResponse.data;
```

## CORS workaround: proxy

When you are testing your backend and frontend together on localhost, you will
come across some sort of **CORS policy error** when you try to call the backend
from the frontend.

One way to get around this is to add this line to your **frontend**'s
`package.json`:

```json
  "proxy": "http://localhost:8080",
```

where `8080` is the the port of your **backend** (change it accordingly).

After adding the proxy config, remove the base URL from your requests:

```typescript
// do this
const posts = await axios.get('/getAllPosts');

// instead of this
const posts = await axios.get('http://localhost:8080/getAllPosts');
```

## Summary

You keep track of your data in component state. Your app displays whatever data
you have.

You update your data by calling an endpoint within `useEffect` and setting your
data to the response that you get back.

You can call endpoints using `fetch()` or `axios` and handle the responses
asynchronously.

## Demo Code

### Backend

```typescript title="index.ts (backend)"
import admin from 'firebase-admin';
import express from 'express';

const serviceAccount = require('../service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const app = express();
const port = 8080;
app.use(express.json());

type Product = {
  price: string;
  stocked: boolean;
  name: string;
};

type ProductWithID = Product & {
  id: string;
};

const productsCollection = db.collection('products');

app.get('/getProducts', async (_, res) => {
  const products = await productsCollection.get();
  res.json(
    products.docs.map((doc): ProductWithID => {
      const product = doc.data() as Product;
      return { ...product, id: doc.id };
    }),
  );
});

app.post('/createProduct', async (req, res) => {
  const newProduct = req.body as Product;
  const addedProduct = await productsCollection.add(newProduct);
  res.send(addedProduct.id);
});

app.post('/updatePrice', async (req, res) => {
  const { id, rating } = req.query;
  await productsCollection.doc(id as string).update({ rating });
  res.send('Product updated!');
});

app.delete('/deleteProduct', async (req, res) => {
  const { id } = req.query;
  await productsCollection.doc(id as string).delete();
  res.send('Product deleted!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
```

### Frontend

```tsx title="ProductTable.tsx (frontend)"
// import axios from "axios";

export type Product = {
  readonly price: string;
  readonly stocked: boolean;
  readonly name: string;
  readonly id: string;
};

type ProductRowProps = {
  product: Product;
};

// new code 3
const ProductRow = ({
  product: { name, stocked, price, id },
}: ProductRowProps) => {
  // DELETE request using fetch
  const deleteProduct = () => {
    fetch(`/deleteProduct?id=${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    });
  };

  // DELETE request using axios and async/await
  // const deleteProduct = async () => {
  //   await axios.delete('/deleteProduct?id=${id}');
  // }

  const nameStyle = stocked ? {} : { color: 'red' };
  return (
    <tr>
      <td style={{ ...nameStyle }}>{name}</td>
      <td>{price}</td>
      <td>
        <button onClick={deleteProduct}>X</button>
      </td>
    </tr>
  );
};

type Props = {
  readonly products: Product[];
  readonly filterText: string;
  readonly inStockOnly: boolean;
};

const ProductTable = ({ products, filterText, inStockOnly }: Props) => {
  const filteredProducts = products.filter(({ name, stocked }) => {
    return name.includes(filterText) && (!inStockOnly || stocked);
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {filteredProducts.map((product) => (
          <ProductRow product={product} key={product.id} />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
```

```tsx title="FilterableProductTable.tsx (frontend)"
// import axios from "axios";
import { ChangeEvent, useEffect, useState } from 'react';
import ProductTable, { Product } from './ProductTable';

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
      placeholder="search here"
      value={filterText}
      onChange={handleFilterTextChange}
    />
    <p>
      <input
        type="checkbox"
        checked={inStockOnly}
        onChange={handleCheckBoxChange}
      />
      Only show the products in stock
    </p>
  </form>
);

type NewProductProps = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

const NewProduct = ({ products, setProducts }: NewProductProps) => {
  const [price, setPrice] = useState('');
  const [stocked, setStocked] = useState(true);
  const [name, setName] = useState('');

  // POST request using fetch
  const createProduct = () => {
    const newProduct = { price, stocked, name };
    fetch('/createProduct', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.text())
      .then((data) => {
        const newProductWithID = { ...newProduct, id: data };
        setProducts([...products, newProductWithID]);
      });
  };

  // POST request using axios and async/await
  // const createProduct = async () => {
  //   const newProduct = { price, stocked, name };
  //   const { data } = await axios.post<string>('/createProduct', newProduct);
  //   const newProductWithID = { ...newProduct, id: data };
  //   setProducts([...products, newProductWithID]);
  // }

  return (
    <div>
      <p>Add New Product:</p>
      <input
        type="text"
        name="name"
        placeholder="name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="price"
        placeholder="price..."
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <select
        name="stock"
        onChange={(e) => setStocked(e.target.selectedIndex === 0)}
      >
        <option value="true">in stock</option>
        <option value="false">out of stock</option>
      </select>
      <button onClick={createProduct}>add a product</button>
    </div>
  );
};

const FilterableProductTable = () => {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  // GET request using fetch
  useEffect(() => {
    fetch('/getProducts')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [products]);

  // GET request using axios and async/await
  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axios.get<Product[]>("/getProducts");
  //     setProducts(data);
  //   })();
  // }, [products]);

  const handleFilterTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  const handleCheckBoxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInStockOnly(e.target.checked);
  };

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        handleFilterTextChange={handleFilterTextChange}
        handleCheckBoxChange={handleCheckBoxChange}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
      <NewProduct products={products} setProducts={setProducts} />
    </div>
  );
};

export default FilterableProductTable;
```

```tsx title="App.tsx (frontend)"
import './App.css';
import FilterableProductTable from './FilterableProductTable';

function App() {
  return (
    <div>
      <FilterableProductTable />
    </div>
  );
}

export default App;
```
