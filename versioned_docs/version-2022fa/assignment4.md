---
id: assignment4
title: Assignment 4
---

In this assignment we will be connecting to a database directly through our
frontend!

## Step 0 - Setup

Create a Next.js using our **starter code** with the following command:

```bash
yarn create next-app --typescript --example "https://github.com/cornell-dti/trends-fa22-starters/tree/main/a4" YOUR_DIR_NAME
```

## Create a Firebase Project

For this assignment, you will be setting up your own Firebase project. You will
be connecting your Next.js web app to the Firestore database to store task data.

See Ed for more specific Firebase setup instructions.

## Step 1 - Finding One's Bearings

As with A2/A3, run `yarn dev` in the project directory to start the server and
navigate to `localhost:3000` to see what the starter code gives you.

In this assignment we will be implementing a simple **task/todo list** with
add/delete functionality. Each task can also be "checked off" to denote being
completed.

Tasks will be stored in our Firestore database, within a collection called
`tasks`. Each document in the collection will represent a single task,
containing information such as the text/name of the task, as well as whether is
checked off.

Here are the important files you'll be working with:

- React Components
  - `util/firebase.ts`
    - Utility file for all Firebase-related exports.
    - We initialize the Firebase app here, so this is the place to paste your
      `firebaseConfig`.
  - `components/frodo/Frodo.tsx`
    - Overall "todo list" component.
    - We store a list of tasks in the state which gets passed down and displayed
      in children components.
  - `components/frodo/TaskAddControl.tsx`
    - Component for adding a new task to the task list.
    - Instead of updating state directly, we will perform a database
      operation in order to add a task.
  - `components/frodo/TaskList.tsx`
    - Simple "intermediate" component that maps over a list of tasks.
  - `components/frodo/TaskItem.tsx`
    - Component for displaying a task's information.
    - Has a toggleable checkbox and a "delete" button
- Other Files
  - `types/index.ts`
    - `Task` is a simple schema for a task. Firebase documents that represent
      tasks should match this schema.
    - `TaskWithId` is a type that has every property in `Tasks` PLUS the `id`
      property, which represents the task's Firebase document id.

**As always, make sure to fill in all the TODOs before submitting!**

You can press CTRL + SHIFT + F in VSCode to search through all project files.

## Step 2 - Add The Firebase Config

In `util/firebase.ts`, you want to fill in your Firebase config with data found
on the Firebase Console. To find the config, you can start at your Console and
navigate `Settings/Cog -> Project settings -> Scroll Down`

You will find a code snippet including something that looks like the following:

```typescript
const firebaseConfig = {
  apiKey: 'XXXXXXXXXXXXXXXXXXXXXX',
  authDomain: 'XXXXXXXXXXXXXXXXXXX.firebaseapp.com',
  projectId: 'XXXXXXXXXXXXXXXXXXX',
  storageBucket: 'XXXXXXXXXXXXXXXXXXX.appspot.com',
  messagingSenderId: 'XXXXXXXXXXXXXXX',
  appId: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
};
```

Copy/replace the empty object in your project code in order to finish setting up
your Firebase.

## Step 3 - Fetching Data

If we look at `components/frodo/Frodo.tsx`, we see that there is a `useState`
hook used to keep track of the tasks. However, we never call `setTasks`!

This web app should connect to our Firestore database to get all the tasks, and
then set our local state to what the database gives us.

The plan is simple:

1. First, construct a Firebase _query_ that gets all the documents in the `tasks`
   collection.
   - Hint: use `query()` and `collection()` to create the query
2. Then, subscribe to the query in order to get **realtime updates** to the
   query results
   - We use the `onSnapshot()` function from the Firebase library to do this
   - The code for this step is provided, you just have to uncomment it
3. Finally, set our tasks state with information contained in `querySnapshot`
   - Hint: use `.map()` to create a `TaskWithId[]` list
   - Hint 2: use `obj as Task` to "cast" an object to type `Task`
   - Hint 3: use `doc.id` to get the id of a document
   - Hint 4: use `{...obj, foo: 'bar'}` to create a new object based on `obj`,
     but with an additional property `foo` (this is object destructuring!)

Feel free to add in dummy Firestore documents through the web interface
(Console) to check if you've completed this step properly.

## Step 4 - Adding Tasks

Now let's direct our attention to `components/frodo/TaskAddControl.tsx`.

We have a function called `addTask` that fires whenever the form submits (such
as when a user clicks the `Add Task` button).

All we have to do here is implement the rest of this function!

Hint: you can call the `addDoc()` function without specifying an `id` to create
a document with a random id (in many cases this is preferable).

## Step 5 - Modifying Tasks

Let's wrap up by implementing functionality in `components/frodo/TaskItem.tsx`.

We have two functions `toggleTask` and `deleteTask` that are empty.

`toggleTask` is triggered when a user clicks on the checkbox. It should toggle
the `checked` status of that particular task.

`deleteTask` is triggered when a user clicks on the delete button. It should
remove that particular task from the database.

You may find `updateDoc` and `deleteDoc` helpful for this part.

## Step 6 - Submission

Make sure you've completed all of the TODOs, including your name/netid in
`components/layout/Footer.tsx` and the hours worked in `pages/index.tsx`

Feel free to remove the contents of your `firebaseConfig` object in
`firebase.ts` before submission. We will be grading by connecting your app to
our own database.

Once you are done, please zip up everything in your project folder EXCEPT the
`node_modules` and `.next` folders.

Then submit to CMS!
