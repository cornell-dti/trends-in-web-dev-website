---
id: lecture6
title: Lecture 6
---


## Conditional Rendering

Sometimes we only want things to render when a certain condition is met. For
example, only display text when we meet a certain condition. React has
conditional rendering to make this very simple.

```tsx title="PrelimTime.tsx"
// const PrelimTime = ({ prelimToday }: { readonly prelimToday: boolean }) => {
//   if (prelimToday) {
//     return <p>I have a prelim today.</p>;
//   } else {
//     return <p>I don't have a prelim today.</p>;
//   }
// };

// export default PrelimTime;
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
// const PrelimTime = ({ prelimToday }: { readonly prelimToday: boolean }) => (
//   prelimToday
//     ? <p>I have a prelim today.</p>
//     : <p>I don't have a prelim today.</p>;
// );

// export default PrelimTime;
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

```tsx title="PrelimTime.tsx"
// const PrelimTime = ({ prelimToday }: { readonly prelimToday: boolean }) => (
//   <p>I {!prelimToday && "don't"} have a prelim today.</p>
// );

// export default PrelimTime;
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

If React were to use inheritance, the children components would essentially be very similar to their parent, which doesn't make much sense. Instead, we use composition so that the parent compoens is the sum of their children.

_“React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.”_
-- [React Docs](https://reactjs.org/docs/composition-vs-inheritance.html)

### Containment

Children are the components you put within another component:

```jsx
// <ComponentA>{/* anything here is a child of Component A */}</ComponentA>
```

Components may not know their children ahead of time. If we want to create a component A in component B and we want A to have some children components C, D, E... A doesn't know what components are there beforehand. Instead we can pass a `children` prop from B to A to pass in the children components for A.

```tsx title="Container.tsx"
// import { ReactNode } from 'react';
// type Props = { readonly children: ReactNode };
// const Container = (props: Props) => (
//   <div className="Border">{props.children}</div>
// );
```

```tsx title="App.tsx"
// const App = () => (
//   <div className="App">
//     <Container>
//       <p>Hello!</p>
//       <p>Bye!</p>
//     </Container>
//   </div>
// );
```

There are two paragraph elements `<p></p>` between the `<Container></Container>` tag. Those two elements will be passed to `Container` as `props.children`.

We didn't actually get to this live demo, adapted from [this tutorial](https://reactjs.org/docs/composition-vs-inheritance.html) in the React docs, during lecture but it is very simple if you want to try it out yourself. We also show how to import styles.

Less common but you also may want multiple "holes" in your component (for example, a left and right child):

```tsx title="SplitPane.tsx"
// import { ReactNode } from 'react';
// import './SplitPane.css'; // this is how we import styles

// type Props = { readonly left: ReactNode; readonly right: ReactNode };

// const SplitPane = (props: Props) => (
//   <div>
//     <div className="LeftPane">{props.left}</div>
//     <div className="RightPane">{props.right}</div>
//   </div>
// );

// export default SplitPane;
```

```css title="SplitPane.css"
/* these colors are ugly I know */
/* .LeftPane {
  float: left;
  width: 50%;
  background-color: red;
}

.RightPane {
  float: right;
  width: 50%;
  background-color: aquamarine;
} */
```

```tsx title="App.tsx"
// import SplitPane from './SplitPane';
// import Container from './Container';

// const App = () => {
//   return (
//     <div className="App">
//       <Container>
//         <p>Hello, world!</p>
//       </Container>
//       <SplitPane
//         left={<div>I'm on the left!</div>}
//         right={<div>I'm on the right!</div>}
//       />
//     </div>
//   );
// };

// export default App;
```

## Lifting State Up

Recall containment, which says that the parents don't know their children components beforehand. This brings up some issues when we do need the parents to access some states in the children components. The way we solve this problem is by lifting the states up.

This section was a live demo, adapted from [this tutorial](https://reactjs.org/docs/lifting-state-up.html) in the React docs. In this demo we will create a convertor between Celsius and Fahrenheit. We will create two components, `FahrenheitInput` and `CelsiusInput`. They will each keep a state that stores the current temperature in its corresponding unit. However, this is not enough. Once we change the temperature input in a certain component, we need to update the other so that they will be on the same page. The way we do that is through lifting the states up to store the temperature in `App`. We pass the temperature setter as callbacks to each of the children components.

```tsx title="App.tsx"
// import { useState } from 'react';
// import './App.css';
// import FahrenheitInput from './FahrenheitInput';
// import CelsiusInput from './CelsiusInput';

// function App() {
//   const [temperature, setTemperature] = useState(-40);

//   return (
//     <div className="App">
//       <label>Fahrenheit:</label>
//       <FahrenheitInput
//         temperature={temperature}
//         callback={(temp) => setTemperature(temp)}
//       />
//       <br />
//       <label>Celsius:</label>
//       <CelsiusInput
//         temperature={temperature}
//         callback={(temp) => setTemperature(temp)}
//       />
//       <br />
//       {temperature >= 100 ? (
//         <span>Water would boil here!</span>
//       ) : (
//         <span>Water would not boil here!</span>
//       )}
//       <br />
//       <span>Water would {temperature >= 0 && 'not'} freeze here!</span>
//     </div>
//   );
// }

// export default App;
```

```tsx title="CelsiusInput.tsx"
// import { ChangeEvent } from 'react';

// type Props = {
//   readonly temperature: number;
//   readonly callback: (temperature: number) => void;
// };

// const CelsiusInput = ({ temperature, callback }: Props) => {
//   const handlechange = (e: ChangeEvent<HTMLInputElement>) =>
//     callback(parseInt(e.target.value) || 0);

//   return <input value={temperature} onChange={handlechange} />;
// };

// export default CelsiusInput;
```

```tsx title="FahrenheitInput.tsx"
// type Props = {
//   readonly temperature: number;
//   readonly callback: (temperature: number) => void;
// };

// const FahrenheitInput = ({ temperature, callback }: Props) => {
//   const handlechange = (e: ChangeEvent<HTMLInputElement>) =>
//     callback((((parseInt(e.target.value) || 0) - 32) * 5) / 9);

//   return <input value={(temperature * 9) / 5 + 32} onChange={handlechange} />;
// };

// export default FahrenheitInput;
```
