---
id: lecture10
title: Lecture 10
---

[Lecture Slides](https://docs.google.com/presentation/d/1tVozUya-oCwHNIHjMt926mJxvxdInIAWSN_4j19a94I/edit?usp=sharing)

[Final Project Instructions](/docs/2021fa/finalproject)

[Final Project - Milestone 2](/docs/2021fa/finalproject#milestone-2) due **12/2 by 11:59pm**

[Final Project - Milestone 3](/docs/2021fa/finalproject#milestone-3) due **12/9 by 11:59pm**

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

A popular way to use React Native is through the `Expo` framework, which allows developing, building, and iterating on iOS, Android and webapps. Expo provides a UI for you to view your changes and if you download the Expo app ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US), [iOS](https://apps.apple.com/us/app/expo-client/id982107779)) you can see those changes on your phone as well! After all, we're doing mobile development. Expo also has a lot of packages specific to accessing features on mobile devices like the status bar, battery level, I/O devices, etc.

To start a React Native project run the following:

```bash
yarn global add expo-cli
expo init <project name>
yarn start
```

`expo init` is similar to `create-react-app` in that it generates boilerplate code for you.

### Demo

As part of the demo we built the simple TODO list app from [assignment 4](/docs/2021fa/assignment4) and battery tracker in React Native!

Before starting though, we have to install the `expo-battery` package by running `expo install expo-battery`. We use `expo install` to install expo packages instead of `yarn add` or `npm install` because it prevents you from installing incompatible versions with your particular Expo SDK version.

```tsx title="App.tsx"
import { addBatteryLevelListener, getBatteryLevelAsync } from 'expo-battery';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import TaskList from './TaskList';

export default function App() {
  const [battery, setBattery] = useState(0);
  const [count, setCount] = useState(0);

  // Example of using a battery package from expo to access mobile features
  useEffect(() => {
    // initially gets battery level
    getBatteryLevelAsync().then(setBattery);
    // subscribe to battery level to keep it in sync
    const listener = addBatteryLevelListener((event) =>
      setBattery(event.batteryLevel),
    );
    // remove the subscription after unmounting
    return listener.remove;
  }, []);

  return (
    <View style={styles.container}>
      <Text>Battery: {battery * 100}%</Text>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount((x) => x + 1)} />
      <TaskList />
      <StatusBar style="auto" />
    </View>
  );
}

// how to style elements
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
  },
});
```

```tsx title=Playlist.tsx
import {
  Button,
  FlatList,
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';

const styles = StyleSheet.create({
  // space out the container a bit
  container: { display: 'flex', gap: '8px' },
  // give our textbox a border
  input: {
    borderWidth: 1,
  },
});

export default () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState('');
  return (
    <View style={styles.container}>
      <Text>Task List</Text>
      {/* flatlist is a canonical way to render a list of items instead of using
      map like you would in regular react */}
      <FlatList data={tasks} renderItem={(info) => <Text>{info.item}</Text>} />
      <TextInput
        style={styles.input}
        placeholder="Item Name"
        onChangeText={setInput}
        value={input}
      ></TextInput>
      <Button
        title="Add"
        onPress={() => {
          setTasks((tasks) => [...tasks, input]);
          setInput('');
        }}
      />
    </View>
  );
};
```

Once you `yarn start`, you should be taken to Expo where you can view your changes on your browser. On the bottom left, there should also be a QR code. If you download the Expo app and scan the QR code with your phone camera ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US), [iOS](https://apps.apple.com/us/app/expo-client/id982107779)), it should take you to the Expo app where you can see your application in mobile form!

### Learn more

This was a very cursory introduction to React Native. You can learn more by referring to React docs.

React Docs: [https://reactnative.dev/docs/2021fa/getting-started](https://reactnative.dev/docs/2021fa/getting-started)

Expo Docs: [https://docs.expo.io/](https://docs.expo.io/)

### Extras - Prettifying your UI

[Material UI](https://mui.com/) is a library that ships a bunch of pre-style and customizable components for you to use in your own React projects. Material UI comes with a variety of components ranging from [buttons](https://mui.com/components/buttons/) to [icons](https://mui.com/components/material-icons/) to [drawers](https://mui.com/components/drawers/), all of which are customizable and come with their own props that can do common tweaks to their existing components to fit your individual need.

[Semantic UI](https://semantic-ui.com/) and [Bootstrap](https://getbootstrap.com/) are two other popular libraries used for styling and do not require projects written in React and provide pre-written classes for styling elements and organizing layout. Nevertheless - they do come with "React component" versions ([Semantic UI React](https://react.semantic-ui.com/) and [React Bootstrap](https://react-bootstrap.github.io/)) similar to Material UI!
