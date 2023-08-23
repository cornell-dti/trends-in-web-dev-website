---
id: lecture10
title: Lecture 10
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Final Project due December 15 at 3:59pm** (late deadline December 18 3:59pm ET slip days permitting)

[Lecture Video](https://drive.google.com/file/d/1h5dfr9K-YTAb4iQtIKO9NiAabGcqI0p4/view?usp=sharing)

[Lecture Slides](https://docs.google.com/presentation/d/17J8pTSoy3DoBVNdXBWcbc3opYMBsrg5t5k7V9CMBssc/edit?usp=sharing)

## How to prettify your app!

There are a lot of different options for styling your app. You can write the CSS stylesheets yourself and import them into your React application or you can use a framework! Frameworks like MaterialUI, Bootstrap, SemanticUI have developed ✨ styled ✨ React Components for you to use easily! It's as easy as importing and using!

In this lecture we went through how to add one framework, [**MaterialUI**](https://material-ui.com/), to our [Thinking in React example](./lecture7#filterable-product-table-example) from lecture 7.

### MaterialUI

MaterialUI is a framework developed from Google for applying some default (Google-like) styling to your React components!

#### Getting Started

When using MaterialUI or really any framework, package, or external tool, you should first look at the documentation. The documentation usually gives you tips on how to install and use the package.

For MaterialUI, we see that we first need to install it since it's an external package. Run

```bash
yarn add @material-ui/core
```

Next, we also want to use the classic Roboto font and the documentation says we need to add this line

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
```

to our `public/index.html`.

#### Inputs

Let's first convert our input fields (the search bar and the checkbox) into MaterialUI. We can navigate to the components page of MaterialUI by clicking the hamburger icon (three lines) on the top left of the page and scrolling down to `Components`.

We see that there is a [`TextField`](https://material-ui.com/components/text-fields/) component. On that page we can see several variations of `TextField` and the code associated with it. There is also a [`Checkbox`](https://material-ui.com/components/checkboxes/) component that can replace our original checkbox.

Adding these to the `SearchBar` component in `FilterableProductTable.tsx`, the final file looks like this:

```tsx title="FilterableProductTable.tsx"
import React, { ChangeEvent, useState } from 'react';
import ProductTable, { Product } from './Starter';
import { TextField, Checkbox } from '@material-ui/core/';

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
    <TextField
      label="Search"
      variant="outlined"
      placeholder="Search for a product!"
      value={filterText}
      onChange={handleFilterTextChange}
    />
    <p>
      <Checkbox
        inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
        value={inStockOnly}
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
    </div>
  );
};

export default FilterableProductTable;
```

Notice that we imported each component from `@material-ui/core` before using it.

#### Starter.tsx

We apply the same methodology to converting the product table to MaterialUI. MaterialUI has several [Table components](https://material-ui.com/components/tables/) that can replace the traditional HTML table elements we use in `Starter.tsx`.

```tsx title="Starter.tsx"
import React, { ReactElement } from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  createStyles,
  withStyles,
  WithStyles,
} from '@material-ui/core';

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
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{product.price}</TableCell>
    </TableRow>
  );
};

interface RowProps extends WithStyles<typeof styles> {
  readonly category: string;
}

const styles = createStyles({
  ProductCategoryRow: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

const _ProductCategoryRow = ({ category, classes }: RowProps) => (
  <TableRow>
    <TableCell colSpan={2} className={classes.ProductCategoryRow}>
      {category}
    </TableCell>
  </TableRow>
);

const ProductCategoryRow = withStyles(styles)(_ProductCategoryRow);

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
        />,
      );
    }
    rows.push(<ProductRow key={product.name} {...product} />);
    lastCategory = product.category;
  });

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Price</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{rows}</TableBody>
    </Table>
  );
};

export default ProductTable;
```

Notice we also used MaterialUI's higher order component `withStyles` to inject our own styles into `ProductCategoryRow`. Customizing our own styles is a little bit tricky with a framework since the framework styles generally override our styles. MaterialUI recommends `withStyles` for custom styles [here](https://material-ui.com/customization/components/). It also has some guides on [using `withStyles` with TypeScript](https://material-ui.com/guides/typescript/) since `withStyles` passes the styles down as a prop `classes` so we need to add that to our `RowType`.

### Other Resources for Styling

- [Styled Components 💅](https://styled-components.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Semantic UI](https://react.semantic-ui.com/)
- [SCSS](https://sass-lang.com/)
- [stylelint](https://stylelint.io/)

## React Native

### What is React Native?

React Native allows for cross platform mobile development using a webdev framework we already know--React!

React Native allows you to build UIs independent of the platform. Usually when developing an app you have to develop an Android version (using Java/Kotlin) and iOS version (using Objective-C/Swift) separately. React Native takes care of this conversion for you.

### Core React Native Components

Since React Native is really just React, many of the same concepts (`useState`, `props`, React Hooks, etc) still apply to React. However, instead of HTML we have `Views`. A view is the basic building block of UI in mobile development. Views can display images, hold text, handle user input, etc.

Some core React Native components are:

- `<View>`: A container that supports layout with flexbox, style, some touch handling, and accessibility controls. Similar to a non-scrolling `<div>`.
- `<Text>`: Displays, styles, and nests strings of text and even handles touch events. Similar to a `<p>`
- `<Image>`: Displays images like `<img>`
- `<ScrollView>`: A generic scrolling container than can hold nested components and views. Similar to a `<div>`.
- `<TextInput>`: User text input field similar to `<input type="text" />`.
- ... and you can also define your own custom components (and use those built by the community)!

### How to start a React Native Project?

React Native uses `Expo` framework to develop, build, and iterate on iOS, Android and webapps. Expo provides a UI for you to view your changes and if you download the Expo app ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US), [iOS](https://apps.apple.com/us/app/expo-client/id982107779)) you can see those changes on your phone as well! After all, we're doing mobile development.

To start a React Native project run the following:

```bash
yarn add expo-cli
yarn expo init <project name>
yarn start
```

`yarn expo init` is similar to `create-react-app` in that it generates boilerplate code for you.

### Demo

As part of the demo we built the simple TODO list app from assignment 4 in React Native! The code is here:

```tsx title="App.tsx"
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App(): React.ReactElement {
  const [item, setItem] = useState<string>('');
  const [items, setItems] = useState<string[]>([]);

  const updateItems = (): void => {
    setItems([...items, item]);
    setItem('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add an item"
        style={styles.input}
        value={item}
        onChangeText={(text) => setItem(text)}
      />
      <Button title="Add item" onPress={() => updateItems()} />
      {items.map((i, index) => (
        <Text key={index}> {i} </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    borderWidth: 1,
    width: 150,
  },
});
```

Once you `yarn start`, you should be taken to Expo where you can view your changes on your browser. On the bottom left, there should also be a QR code. If you download the Expo app and scan the QR code with your phone camera ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US), [iOS](https://apps.apple.com/us/app/expo-client/id982107779)), it should take you to the Expo app where you can see your application in mobile form!

### Learn more

This was a very cursory introduction to React Native. You can learn more by referring to React docs.

React Docs: [https://reactnative.dev/docs/getting-started](https://reactnative.dev/docs/getting-started)

Expo Docs: [https://docs.expo.io/](https://docs.expo.io/)
