---
id: assignment5
title: Assignment 5
---

For A5, you'll be building a React app that utilizes conditional rendering
and the concept of lifting state up.

In this project, we'll be building a searchable or filterable grocery list that
maintains a list of items, each with its own metadata. This metadata simply
consists of the name of the item, as well as its price. The app is composed out
of a few components: one that maintains each grocery item itself, one that
renders the list of grocery items, and one that acts as a search bar for us
to filter and search through our list of items, rerendering the list of grocery
items. There will also be some helper text depending on the state of items in the
grocery list. You will need to use lifting state up and conditional rendering in
order to accomplish all of this.

Here is a GIF showing the final functionality of the app:

![Assignment 5 Demo](/img/assignment5-func.gif)

## Part 1 - `App.tsx` Scaffolding

In App.tsx, we will have two states, as well as a type definition to be exported
to other components. Let's start with the type definition. We want to make a type
for each item's metadata (remember, each item has a string name and a price that
is a number). When you define this, make sure to put the `export` keyword before
the type definition so that you can import it in other components that need to use it.

Next, create the two states, each of which will be lifted up from a child component.
The first state should represent all of the items (metadata) on the list, and the
second should keep track of the current search query string. Do not display the list in this component; we will be passing it down to a child component.

## Part 2 - Lifting State Up

Create two components: `SearchBar.tsx` and `AddItemBar.tsx`. The first one
will have an `<input>` field representing the search bar, and will need to lift
the value of the input up into the `App.tsx` parent. The second one will have two
input fields: one for the name of the item, and the second for the price, as well
as a button to actually submit the data in the two fields to the list. The button
`onClick` prop will be useful for implementing this, as well as maintaining two
internal states for the name and price values in `AddItemBar`.

Once you've created these child components, add them to `App.tsx` and supply them
with the necessary props. Assuming you've lifted state up correctly from them, you
can now make use of the search query and the list of item metadata in order to
render a filtered list based on the query.

:::note
When working with HTML `<input>` tags, you can specify the `type` property to be
of `'number'` if the input field corresponds to a numerical input.
:::

## Part 3 - Render the Grocery List

Create a new component called `GroceryList.tsx`. This should display the list in
a similar way as the songs list from Assignment 4, but should be made up of the items
that have the search query as a substring of their name
([hint](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)). It should also show each
item's name and price. You can format it as in the GIF.

## Part 4 - Conditional Rendering

Use conditional rendering to handle two cases: first, if there are no grocery
items in the list, render some text that tells the user that the list is empty.
Otherwise, don't display anything. Second, if the search query didn't match any
of the items in the list, make sure to render a message saying that the item could
not be found.

## Part 5 (Optional): Input Validation

You can perform input validation on the `onClick` event of our add item button
by making sure that the name is not the empty string and the price is positive.
This is seen in the demo, and implemented using an `alert()` function call to
alert the user. (Note: generally, we avoid using `alert()` in actual production-level
apps, since it can be annoying and look like spam. If this were a more professional
app, we would use some notification UI such as [toasts](https://stackoverflow.com/questions/1348788/what-does-toast-mean).)

## Submission

Submit to CMS a zip file of everything in your project (`create-react-app`) directory but **remove node_modules** . _Failure to remove_ `node_modules` _will result in a **10 point** deduction_.

## FAQ

### Does my app need to look exactly like what the GIF shows?

No, you're free to make your UI as pretty or as ugly as you want, as long as the
functionality is there.

### How do I get the type for the callback function when lifting the state up from the child components?

You can mouse over the type (using VS Code) of the setter function in the `useState`
hook for the state you want to lift up into the `App.tsx`. This way, you can use
it in the prop type for each of the child components that need it.

### Getting a weird error with my items state in the `App.tsx` (`never[]`)

Unfortunately, TypeScript can't infer the type of your state if you set the initial
value to simply `[]`, and it assumes that it's just a falsy value. To fix this,
make sure to parametrize the `useState` hook using the type definition you created;
for example, `const [state, setState] = useState<myType>([])`.
