---
id: lecture9
title: Lecture 9
---

Final Project due **May 6 7:59pm**

[Lecture Video Coming Soon]()

[Lecture Slides](https://docs.google.com/presentation/d/1BBYlbYxKl2qpOOosClVwt-xVr-r7knLTzxY41x7Z6_c/edit?usp=sharing)

## Deployment

To deploy your web application means to put it on a Web server so others can access it via the internet. We will deploy frontend on Firebase and backend on Heroku.

### Frontend Deployment

To deploy to Firebase enter the following commands into terminal:

```bash
yarn global add firebase-tools
yarn build
firebase login
firebase init
<answer the questions>
firebase deploy
```

`yarn build` will create a `build` directory containing a production build of your application.

`firebase login` will prompt you to log in by opening up a web browser if you're not already signed it.

`firebase init` will ask you the following questions:

1. Which Firebase CLI features do you want to set up for this folder? Select **Hosting**.
2. Associate with a Firebase project. **Select your Firebase project**
3. What do you want as your public directory? **build**
4. Configure as a single-page app (rewrite all urls to /index.html)? **Yes**
5. Overwrite `index.html`? **No**

Running `firebase deploy` will push your build assets to Firebase remote server and give you a URL to your live Firebase app site! Now you can share this site and access it over the internet.

### Backend Deployment

We will deploy backend on Heroku because deploying on Firebase is much more involved

```bash
yarn global add heroku
git init
git add .
git commit -m “COMMIT MESSAGE”
heroku login
heroku create <optional project name>
git push heroku master
(optional) heroku open
```

You can then use the url generated as your backend endpoint in your frontend code.

## Authentication

One of the best parts about Firebase is you can use Sign in with Google/Facebook/GitHub/etc! This way you don't have to deal with usernames and passwords yourself!

We did a Live Coding Demo here based on the Songs example from last week. I will include the files changed here.

To handle authentication we made a wrapper component `Authenticated` to handle all Authentication:

```jsx
import React, { useState } from 'react';
import 'firebase/auth';
import * as firebase from 'firebase/app';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';
import { useEffect } from 'react';

const firebaseConfig = {}; // put firebase config in here

firebase.initializeApp(firebaseConfig);

export default (props) => {
  const [user, setUser] = useState(null);

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };

  function onAuthStateChange() {
    return firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }

  useEffect(() => onAuthStateChange(), []);

  return (
    <div>
      {user && props.children}
      {!user && (
        <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      )}
    </div>
  );
};
```

We then wrap our whole `SongList` app in `Authenticated`.

```jsx
import React from 'react';
import logo from './logo.svg';
import './App.css';
import SongList from './SongList';
import Authenticated from './Authenticated';

function App() {
  return (
    <div className="App">
      <Authenticated>
        <SongList />
      </Authenticated>
    </div>
  );
}

export default App;
```

If the user is logged in, `SongList` will show. Otherwise they will be asked to log in.

We then deployed this app on Firebase for the frontend and Heroku for the backend. Refer to the commands above.

## TypeScript

TypeScript is a typed _superset_ of JavaScript that compiles to plain JavaScript. Superset means TypeScript has everything in JavaScript and more. (Built by Microsoft!)

### JavaScript Types

JavaScript has 6 primitive types:

- Boolean
- String
- Number
- Symbol
- undefined
- BigInt

All JavaScript values are those 6 primitive types or a:

- object
- function (JavaScript is functional!)
- null

### How are types used?

In JavaScript we had:

```js
let str = 'Hello, trends';
let num = 42;
let truth = true;

const someFunc = (x, s, b) => {
  // do some operations...
  return x;
};
```

Notice we don't have any types here! JavaScript is weakly typed.

```ts
let str: string = 'Hello, trends';
let num: number = 42;
let truth: boolean = false;
const someFunc = (x: number, s: string, b: boolean): number => {
  // do some operations...
  return x;
};
```

TypeScript allows us to add type information!

### Why TypeScript?

JavaScript code can be ambiguous. We had the function:

```js
const someFunc = (x, s, b) => {
  // do some operations...
  return x;
};
```

What are `x, s, b`? What should I pass in for those? What should I expect returned?

Adding the TypeScript types makes this code self-documenting:

```ts
const someFunc = (x: number, s: string, b: boolean): number => {
  // do some operations...
  return x;
};
```

JavaScript variables can also change type which can be undesirable, unexpected, and error-prone.

```js
let str = 'Hello, trends';
let num = 42;
let truth = true;
str = 13;
```

None of these variables have to be any specific type! I can have `str` be a string and then a number.

In the end, we want to use TypeScript because it is:

- Easier to read
- Easier and faster to implement
- Easier to refactor
- Less buggy

### TypeScript Types

Basic Syntax:

```js
let <var_name>: <type> = <something>;
```

We can also use `const` but again no `var`.

#### Basic Types

```ts
// Boolean
let isDone: boolean = false;
// Number can be decimal, or in any base!
let decimal: number = 4.2;
let binary: number = 0b1010;
let hex: number = 0xf00d;
// String
let lang: string = 'typescript';
let templateStr: string = `We love ${lang}`;
// Boolean
let isDone: boolean = false;
// Number can be decimal, or in any base!
let decimal: number = 4.2;
let binary: number = 0b1010;
let hex: number = 0xf00d;
// String
let lang: string = 'typescript';
let templateStr: string = `We love ${lang}`;
```

#### Any

`Any` is a wildcard and it can be anything. `any` places no restrictions on type.

```ts
// Any: can be anything!
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean
```

If you were to use `any` everywhere though you might as well just use JavaScript

```ts
let anyList: any[] = [4, 'maybe a string', false];
```

But it can be useful in specifying collections of items of different types!

#### Functions

Functions can have types too!

```ts
// un-typed
const myFunc = (x, y) => x + y;
// typed
const myFunc = (x: number, y: number): number => x + y;
```

`myFunc` has type `(x: number, y: number): number`.

TypeScript can do some limited type inference so if you leave out the return type `number`, TypeScript can infer it since we are just adding two numbers which can only produce a number. If TypeScript can't infer the type, it defaults as `any`.

We can also have optional parameters:

```ts
const introduce = (name: string, github?: string): string => {
 return github
   ? ‘Hi, I'm ${name}. Checkout my GitHub @${github}’
   : ‘Hi, I'm ${name}. I don't have a GitHub.’;
}
```

`github?` designates `github` as an optional parameter that defaults to `undefined`.

#### Literal Types

Literal Types are types that can be a literal set of possibilities that you specify. TypeScript allows number and string literal types:

##### String Literal Types

```ts
// String literal type
type TrafficLightColors = 'red' | 'green' | 'yellow';
```

Any variable with `TrafficLightColors` type can only take on values `"red", "green", "yellow"`.

```ts
let light1: TrafficLightColors = 'red';
light1 = 'blue'; // TypeError
```

##### Numeric Literal Types

```ts
// Numeric literal type
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
const rollDice = (): DiceRoll => {
  // ...
};
```

#### Union Types

With union types, a variable can be of one type or another type.

```ts
const union: number | string = 5; // number
const union2: number | string = 'hello'; // string

type TrafficLightColors = 'red' | 'green' | 'yellow';
type PrimaryColors = 'red' | 'green' | 'blue';

// "red" | "green" | "yellow" | "blue"
type union = PrimaryColors | TrafficLightColors;
```

#### Intersection Types

With union types, a variable must be of one type and another type.

```ts
// Intersection Type
type TrafficLightColors = 'red' | 'green' | 'yellow';
type PrimaryColors = 'red' | 'green' | 'blue';
type intersect = PrimaryColors & TrafficLightColors; // "red" | "green"
```

### Type Inference

Type inference is determining type information without being told explicitly. TypeScript has limited type inference capabilities. If it can't infer the type the default is `any`.

Sometimes type inference is easy:

```ts
// TypeScript can infer these types
let isDone = false; // boolean
let decimal = 4.2; // number
let lang = 'typescript'; // string
```

Other times it involves some more advanced reasoning:

```ts
const whatType = (a, b, c) => (a(b + 1) === true ? b : c);
```

What are the types of `a, b, c` and what is the return type?

First `b` should be a number because we are adding 1 to it. Knowing `b` should be a number, `a` should then be a function taking in a `number` and returning a `boolean`. Finally, this function returns either `b` or `c` and `b` is already a `number` so `c` must also be `number`. Thus the return type is `number`.

We expect the following types:

```
a: number => boolean
b: number
c: number
return: number
```

In reality TypeScript infers the following:

```
a: any
b: any
c: any
return: any
```

### Add TypeScript to React!

You can learn how to add TypeScript to your Create React App application [here](https://create-react-app.dev/docs/adding-typescript/).
