---
id: assignment5
title: Assignment 5
---

For A5, you'll be building a React App that utilizes conditional rendering
and the concept of lifting state up.

Sam is trying to build a system to search through his friends list on
SamBook, a new social media platform that he built.

For this search engine, you'll be entering a search query and
maintaining two separate components: the first shows
all results that contain the search query, and the
second shows all OTHER results (i.e. all results that don't contain
the search query).

## Part 1

In App.tsx, initialize a state variable that contains the search query.
Also, create an input field that interacts with this state variable.

Create a state variable that contains Sam's friends list. Make
another input field and a button associated with it to add a name to
Sam's list. Do not display the list in this component; we will be passing
it down to child components.

## Part 2

Create two components: `Filtered.tsx` and `Other.tsx`. The first one
will display a list of all of Sam's friends who have the search query
as a substring of their name (ignore capitalization). The second one
will display all the other friends.

## Part 3

Use conditional rendering to account for the case in which the filtered
list is empty. Display a message such as "No friends found" if the filtered
list in either component is empty.

## Submission

Submit to CMS a zip file of everything in your project (`create-react-app`) directory but **remove node_modules** . _Failure to remove_ `node_modules` _will result in a **10 point** deduction_.
