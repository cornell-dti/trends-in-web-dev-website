---
id: lecture10
title: Lecture 10
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[Feedback Form](https://docs.google.com/forms/d/e/1FAIpQLScTsXb5MXUNimc0Jaa2E3DZqAplMZLhUJ3sbVbEiP4THmgUTw/viewform?usp=sf_link)

[Lecture Video](https://drive.google.com/file/d/1E4EgcIwCGGsMHH7dLjhbP7VBAjyZTyG1/view?usp=sharing)

[Lecture Slides](https://docs.google.com/presentation/d/1VI8HUBdegLn4zxV35hv8YmkLG5wBYKOOlVy-eZZZa4Y/edit?usp=sharing)

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
yarn global add expo-cli
expo init <project name>
yarn start
```

`expo init` is similar to `create-react-app` in that it generates boilerplate code for you.

### Demo

As part of the demo we built the simple TODO list app from assignment 4 in React Native! The code is here:

<Tabs
groupId="lang"
defaultValue="ts"
values={[
{ label: 'TypeScript', value: 'ts', },
{ label: 'JavaScript', value: 'js', },
]
}>

<TabItem value="ts">

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

</TabItem>

<TabItem value="js">

```jsx title="App.jsx"
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  const updateItems = () => {
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

</TabItem>
</Tabs>

Once you `yarn start`, you should be taken to Expo where you can view your changes on your browser. On the bottom left, there should also be a QR code. If you download the Expo app and scan the QR code with your phone camera ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US), [iOS](https://apps.apple.com/us/app/expo-client/id982107779)), it should take you to the Expo app where you can see your application in mobile form!

### Learn more

This was a very cursory introduction to React Native. You can learn more by referring to React docs.

React Docs: [https://reactnative.dev/docs/getting-started](https://reactnative.dev/docs/getting-started)

Expo Docs: [https://docs.expo.io/](https://docs.expo.io/)
