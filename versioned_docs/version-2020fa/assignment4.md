---
id: assignment4
title: Assignment 4
---

In this assignment, we finally get to work on frontend!!! You will be developing a simple songs list app which allows you
to add and view songs.

## Part 1: Song component

Create a component, Song, that represents a song in your playlist.
It will be passed a prop called `info` that is an object which contains some information about the song. The fields in this object will be `title`, and `artist`.

You can test this component by importing the Song component in
App.tsx and creating a component:

```js
<Song info={{ title: 'Never Gonna Give You Up', artist: 'Rick Astley' }} />
```

## Part 2: Adding songs

Create a component, Playlist, that contains all of the songs you've added. This will do the following:

- Maintain a state containing a list of `songs`, which are objects containing the info about each song.
- Have two input fields, one for title and one for artist.
- Have a button which allows you to submit the new song and adds to the list.

## Part 3: Adding Playlist to App.ts

Initialize your Playlist component in App.ts. This can be done by
importing Playlist and creating a component:

`<Playlist />`

## Part 4: Optional Challenge

Make it so that checking a box next to a song removes it from the Playlist.

## Submission

Submit a zip file of everything in your project directory EXCEPT `node_modules`. You WILL lose points for including `node_modules`.
