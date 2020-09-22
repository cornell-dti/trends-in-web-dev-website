---
id: assignment1
title: Assignment 1
---

For the first assignment, you will be setting up a basic server with 3 endpoints as follows:

## Simple URL

The first endpoint will be a simple `GET` request to `/book`. You will send your favorite book's name to the frontend.

## Query Parameters

The second endpoint will be a `GET` request to `/book` with a query parameter called `name`. If the name is "Megan", you will return "Cracking the Coding Interview". If the name is "Ashneel", you will return "The Pragmatic Programmer". Otherwise, return the name of any book you choose!

Example: a request to `/book?name=megan` will return "Cracking the Coding Interview."

P.S. Don't worry, these aren't actually our favorite books.

## Route Parameters

The third endpoint will be a `GET` request to `/book/:userid`. This will simply send "`userid` is really cool!" to the frontend.

Example: a request to `/book/ashneel` will send "ashneel is really cool!" to the frontend.
