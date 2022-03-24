---
id: lecture5
title: Lecture 5
---

[Lecture Slides](https://docs.google.com/presentation/d/1tswPifJjsH5ElZWmbi7WSswKBkcMOwXF-j9PlAQ25lk/edit?usp=sharing)

Assignment 3 (To be posted)

<!-- [Assignment 3](/docs/assignment3) (due XYZ PM on CMS) -->

## Conditional Rendering

Sometimes we only want things to render when a certain condition is met. For
example, only display text when we meet a certain condition. React has
conditional rendering to make this very simple.

```tsx title="PrelimTime.tsx"
import React from 'react';

export default ({ prelimToday }: { readonly prelimToday: boolean }) => {
  if (prelimToday) {
    return <p>I have a prelim today.</p>;
  } else {
    return <p>I don't have a prelim today.</p>;
  }
};
```

In this example, we have a functional component `PrelimTime` that takes in a
prop `prelimToday`. `prelimToday` is a boolean holding whether we have a prelim
today or not. We want the component to display "I have a prelim today." if
`prelimToday` is `true` and "I don't have a prelim today." if it is `false`.

Traditionally, we would use the `if` statement for this behavior (as shown
above). We can also use conditional rendering to make writing this functionality
more convenient.

First we can use the **ternary operator**:

```tsx title="PrelimTime.tsx"
import React from 'react';

export default ({ prelimToday }: { readonly prelimToday: boolean }) => (
  prelimToday
    ? <p>I have a prelim today.</p>
    : <p>I don't have a prelim today.</p>;
);
```

The ternary operator is also very common in other languages as well such as
Java or Python. The basic syntax is as follows:

```ts
[boolean expression] ? [true_result] : [false_result]
```

Before the `?` you have your expression producing `true` or `false`. The part
after the `?` but before the `:` is the result/functionality you want if the
boolean expression evaluates to `true`. The part after the `:` is what you want
to happen if the expression is `false`.

Connecting with the `PrelimTime` example, my boolean expression was just the
prop `prelimToday`, although in your code it can be a more complex boolean
expression. If `prelimToday` is true, I display "I have a prelim today." If
`prelimToday` is false, I display "I have a prelim today."

Notice though, how the only thing changing in this text is adding the word
"don't" if `prelimToday` is `false`. So only if `prelimToday` is `false`, we
want to add don't.

React supports the use of **`&&`** operator:

```tsx title="PrelimTime.tsx"
import React from 'react';

export default ({ prelimToday }: { readonly prelimToday: boolean }) => (
  <p>I {!prelimToday && "don't"} have a prelim today.</p>
);
```

Here, we display the text "I have a prelim today.". However, in the curly
braces, if `prelimToday` is `false` then the word "don't" will be rendered.
Conditional rendering with `&&` is useful when you only have expected behavior
for one branch of the conditional. In this case, I only had desired behavior if
`prelimToday` was `false`.

As you have seen, React's conditional rendering made modifying render behavior
based on conditions a lot easier. In this small example, we went from five lines
of code in the component to just one!

## Composition vs. Inheritance

Composition and inheritance are two programming techniques for defining how classes relate to objects. (Think of classes as the blueprint for a house and objects the actual houses created from that blueprint)

### Composition

**Composition** defines a class as the sum of its individual parts. This is a "has-a" relationship (e.g. a car has a steering wheel, has a window, etc). In Java (and other object oriented languages), these components are represented as _instance_ variables.

### Inheritance

**Inheritance** derives one class from another. If class A is the parent of class B and C, B and C inherit the properties/functions of A. This is a "is-a" relationship (e.g. car is a vehicle, circle is a shape.)

### **React uses Composition**

_“React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.”_
-- [React Docs](https://reactjs.org/docs/2021fa/composition-vs-inheritance.html)

### Containment

Components may not know their children ahead of time.

Children are the components you put within another component:

```jsx
<ComponentA>{/* anything here is a child of Component A */}</ComponentA>
```

Use the `children` prop to pass in children components.

```tsx title="Container.tsx"
import React, { ReactNode } from 'react';
type Props = { readonly children: ReactNode };
const Container = (props: Props) => (
  <div className="Border">{props.children}</div>
);
```

```tsx
const App = () => (
  <div className="App">
    <Container>
      <p>Hello!</p>
      <p>Bye!</p>
    </Container>
  </div>
);
```

`props.children` will have the paragraph elements.

We didn't actually get to this live demo, adapted from [this tutorial](https://reactjs.org/docs/2021fa/composition-vs-inheritance.html) in the React docs, during lecture but it is very simple if you want to try it out yourself. We also show how to import styles.

```tsx title="Container.tsx"
import React, { ReactNode } from 'react';
import './Container.css'; // this is how we import styles

type Props = { readonly children: ReactNode };

export default (props: Props) => <div className="Border">{props.children}</div>;
```

```css title="Container.css"
.Border {
  border: 4px solid black;
  background-color: azure;
}
```

Less common but you also may want multiple "holes" in your component (for example, a left and right child):

```tsx title="SplintPane.tsx"
import React, { ReactNode } from 'react';
import './SplitPane.css';

type Props = { readonly left: ReactNode; readonly right: ReactNode };

export default (props: Props) => (
  <div>
    <div className="LeftPane">{props.left}</div>
    <div className="RightPane">{props.right}</div>
  </div>
);
```

```css title="SplitPane.css"
/* these colors are ugly I know */
.LeftPane {
  float: left;
  width: 50%;
  background-color: red;
}

.RightPane {
  float: right;
  width: 50%;
  background-color: aquamarine;
}
```

```tsx
import React from 'react';
import SplitPane from './SplitPane';
import Container from './Container';

export default () => {
  return (
    <div className="App">
      <Container>
        <p>Hello, world!</p>
      </Container>
      <SplitPane
        left={<div>I'm on the left!</div>}
        right={<div>I'm on the right!</div>}
      />
    </div>
  );
};
```

## Lifting State Up

This section was a (old) live demo, adapted from [this tutorial](https://reactjs.org/docs/2021fa/lifting-state-up.html) in the React docs.

```tsx title="Calculator.tsx"
import { useState } from 'react';
import TemperatureInput from './TemperatureInput';

type Scale = 'celsius' | 'fahrenheit';

const Calculator = () => {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState<Scale>('celsius');

  const onCelsiusChange = (t: string) => {
    setTemperature(t);
    setScale('celsius');
  };

  const onFahrenheitChange = (t: string) => {
    setTemperature(t);
    setScale('fahrenheit');
  };

  const fahrenheitToCelsius = (t: number) => {
    return ((t - 32) * 5) / 9;
  };

  const celsiusToFahrenheit = (t: number) => {
    return (t * 9) / 5 + 32;
  };

  const tryConvert = (targetScale: Scale) => {
    const temp = parseFloat(temperature);
    if (Number.isNaN(temp)) {
      return '';
    }
    const res = getAppropriateTemperature(temp, targetScale);
    const trimmed = Math.round(res * 1000) / 1000;
    return trimmed.toString();
  };

  const getAppropriateTemperature = (tempNum: number, targetScale: Scale) => {
    if (targetScale === scale) {
      return tempNum;
    } else {
      if (targetScale === 'celsius') {
        return fahrenheitToCelsius(tempNum);
      } else {
        return celsiusToFahrenheit(tempNum);
      }
    }
  };

  return (
    <div>
      <TemperatureInput
        scale="celsius"
        temperature={tryConvert('celsius')}
        onTemperatureChange={onCelsiusChange}
      />
      <TemperatureInput
        scale="fahrenheit"
        temperature={tryConvert('fahrenheit')}
        onTemperatureChange={onFahrenheitChange}
      />
    </div>
  );
};

export type { Scale };
export default Calculator;
```

```tsx title="TemperatureInput.tsx"
import { Scale } from './Calculator';

type Props = {
  readonly scale: Scale;
  readonly temperature: string;
  readonly onTemperatureChange: (t: string) => void;
};

const TemperatureInput = ({
  scale,
  temperature,
  onTemperatureChange,
}: Props) => {
  return (
    <div>
      <legend>Enter temperature in {scale}</legend>
      <input
        value={temperature}
        onChange={(event) => onTemperatureChange(event.target.value)}
      />
    </div>
  );
};

export default TemperatureInput;
```

## Live Demo Material

You can get the starter code for the live demo by running:
`yarn create next-app --typescript --example "https://github.com/cornell-dti/trends-sp22-starters/tree/main/lec5-demo" YOUR_DIR_NAME`

(Replace YOUR_DIR_NAME with whatever you want to name your directory!)

Here's my [completed version](https://github.com/cornell-dti/trends-sp22-starters/tree/main/lec5-soln) from class.
