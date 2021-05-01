---
id: lecture10
title: Lecture 10
---

[Lecture Slides](https://docs.google.com/presentation/d/1_DbVZInabluIm2QDOkgWZG0SwecCYTcyOInm_PIQELE/edit?usp=sharing)

[Lecture Video](https://drive.google.com/file/d/1d2mCrRM_mavlNhCJk0kf-6ZoTS9VvVGP/view?usp=sharing)

[Final Project - Milestone 2 due 5/6 3:59 PM](/docs/finalproject#milestone-2)

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

A popular way to use React Native is through the `Expo` framework, which allows developing, building, and iterating on iOS, Android and webapps. Expo provides a UI for you to view your changes and if you download the Expo app ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US), [iOS](https://apps.apple.com/us/app/expo-client/id982107779)) you can see those changes on your phone as well! After all, we're doing mobile development.

To start a React Native project run the following:

```bash 
yarn global add expo-cli
expo init <project name>
yarn start
```

`expo init` is similar to `create-react-app` in that it generates boilerplate code for you.

### Demo

As part of the demo we built the simple TODO list app from assignment 4 in React Native! The code is here:

```tsx title="App.tsx"
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App(): React.ReactElement {
  const [inputItem, setInputItem] = useState<string>('');
  const [items, setItems] = useState<string[]>([]);

  const updateItems = (): void => {
    setItems([...items, inputItem]);
    setInputItem('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemsView}>
       {items.map((item, idx) => (
         <Text key={idx}> {item} </Text>
       ))}
      </View>
      <TextInput
        placeholder="Add an item"
        style={styles.input}
        value={inputItem}
        onChangeText={(text) => setInputItem(text)}
      />
      <Button title="Add Item" onPress={() => updateItems()} />
      <StatusBar style="auto">
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
    marginBottom: 10,
  },
  itemsView: {
    borderWidth: 1
  }
});
```

Once you `yarn start`, you should be taken to Expo where you can view your changes on your browser. On the bottom left, there should also be a QR code. If you download the Expo app and scan the QR code with your phone camera ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US), [iOS](https://apps.apple.com/us/app/expo-client/id982107779)), it should take you to the Expo app where you can see your application in mobile form!

### Learn more

This was a very cursory introduction to React Native. You can learn more by referring to React docs.

React Docs: [https://reactnative.dev/docs/getting-started](https://reactnative.dev/docs/getting-started)

Expo Docs: [https://docs.expo.io/](https://docs.expo.io/)
