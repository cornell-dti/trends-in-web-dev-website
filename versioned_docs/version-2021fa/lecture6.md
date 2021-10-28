---
id: lecture6
title: Lecture 6
---

## Conditional Rendering

Sometimes we only want things to render when a certain condition is met. For
example, only display text when we meet a certain condition. React has
conditional rendering to make this very simple.

```tsx title="PrelimTime.tsx"

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

```

Components may not know their children ahead of time. If we want to create a component A in component B and we want A to have some children components C, D, E... A doesn't know what components are there beforehand. Instead we can pass a `children` prop from B to A to pass in the children components for A.

```tsx title="Container.tsx"

```

```tsx title="App.tsx"

```

There are two paragraph elements `<p></p>` between the `<Container></Container>` tag. Those two elements will be passed to `Container` as `props.children`.

We didn't actually get to this live demo, adapted from [this tutorial](https://reactjs.org/docs/composition-vs-inheritance.html) in the React docs, during lecture but it is very simple if you want to try it out yourself. We also show how to import styles.

Less common but you also may want multiple "holes" in your component (for example, a left and right child):

```tsx title="SplitPane.tsx"

```

```css title="SplitPane.css"

```

```tsx title="App.tsx"

```

## Lifting State Up

Recall containment, which says that the parents don't know their children components beforehand. This brings up some issues when we do need the parents to access some states in the children components. The way we solve this problem is by lifting the states up.

This section was a live demo, adapted from [this tutorial](https://reactjs.org/docs/lifting-state-up.html) in the React docs. In this demo we will create a convertor between Celsius and Fahrenheit. We will create two components, `FahrenheitInput` and `CelsiusInput`. They will each keep a state that stores the current temperature in its corresponding unit. However, this is not enough. Once we change the temperature input in a certain component, we need to update the other so that they will be on the same page. The way we do that is through lifting the states up to store the temperature in `App`. We pass the temperature setter as callbacks to each of the children components.

```tsx title="App.tsx"

```

```tsx title="CelsiusInput.tsx"

```

```tsx title="FahrenheitInput.tsx"

```
