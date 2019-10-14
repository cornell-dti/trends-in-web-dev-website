---
id: lecture3
title: Lecture 3 - Frontend 2
---

[Lecture Slides](https://docs.google.com/presentation/d/1heis2PITlZCH75tmn3ht9DqmeXsLQi0a3bboTkNpM-g/edit?usp=sharing)

## Conditional Rendering

Sometimes we only want things to render when a certain condition is met. For
example, only display text when we meet a certain condition. React has
conditional rendering to make this very simple.

```jsx
// PrelimTime.jsx
import React from 'react';

export default ({ prelimToday }) => {
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

```jsx
// PrelimTime.jsx
import React from 'react';

export default ({ prelimToday }) => (
  prelimToday
    ? <p>I have a prelim today.</p>
    : <p>I don't have a prelim today.</p>;
);
```

The ternary operator is also very common in other languages as well such as
Java or Python. The basic syntax is as follows:

```javascript
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

```jsx
// PrelimTime.jsx
import React from 'react';

export default ({ prelimToday }) => (
  <p>I {!prelimToday && "don't"} have a prelim today.</p>
);
```

Here, we display the text "I have a prelim today.". However, in the curly
braces, if `prelimToday` is `false` then the word "don't" will be rendered.
Conditional rendering with `&&` is useful when you only have expected behavior
for one branch of the conditional. In this case, I only had desired behavior if
`prelimToday` were `false`.

As you have seen, React's conditional rendering made modifying render behavior
based on conditions a lot easier. In this small example, we went from five lines
of code in the component to just one!

## Lifting State Up

This section was a live demo, adapted from [this tutorial]() in the React docs.

App.js

```jsx
import React from 'react';
import { useState } from 'react';
import './App.css';
import FahrenheitInput from './FahrenheitInput';
import CelciusInput from './CelciusInput';

function App() {
  const [temperature, setTemperature] = useState(-40);

  return (
    <div className="App">
      <label>Fahrenheit:</label>
      <FahrenheitInput
        temperature={temperature}
        callback={temp => setTemperature(temp)}
      />
      <br />
      <label>Celcius:</label>
      <CelciusInput
        temperature={temperature}
        callback={temp => setTemperature(temp)}
      />
      <br />
      {temperature >= 100 ? (
        <span>Water would boil here!</span>
      ) : (
        <span>Water wouldn't boil here!</span>
      )}
      <br />
      <span>Water would {temperature <= 0 && 'not'} freeze here!</span>
    </div>
  );
}

export default App;
```

CelciusInput.jsx

```jsx
import React from 'react';

export default ({ temperature, callback }) => {
  const handlechange = e => {
    callback(e.target.value || 0);
  };
  return <input value={temperature} onChange={handlechange} />;
};
```

FahrenheitInput.jsx

```jsx
import React from 'react';

export default ({ temperature, callback }) => {
  const handlechange = e => {
    callback((((e.target.value || 0) - 32) * 5) / 9);
  };
  return <input value={(temperature * 9) / 5 + 32} onChange={handlechange} />;
};
```
