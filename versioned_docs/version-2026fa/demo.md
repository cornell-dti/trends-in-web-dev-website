---
id: demo
title: Live Courseplan Clone Demo
---

# Demo

Starting from lecture 3, we will build a Courseplan Clone Demo, combining all the concepts we have learned so far. This demo will be a simplified version of the Courseplan website, which allows students to view and manage their courses.

## Learning objectives

- Understand how to structure a full-stack web application using React, Express, and Firebase.
- Learn how to implement user authentication and authorization using Firebase Auth.

## Setup

First let us up the project. Please follow this video tutorial. We will be pulling from a starter repo. As each lecture progresses, we will be adding more code.

```bash
cd your/working/directory
pnpm dlx degit cornell-dti/trends-mono-<version>/demos/lec<number> lec<number>
cd lec<number>
pnpm i
pnpm dev
```

From lecture 6 and onwards, you will have to cd into the `client` and `server` folders then run `pnpm i` and `pnpm dev`

If you are getting errors such as a package not existing, then this is most likely the instructors fault when setting the lecture demos up. In that case, you can use the original git commands

```bash
git clone <git repo URL>
git pull
cd demos/lec<number>
pnpm i or yarn install
pnpm dev
```

## Demonstration

<iframe width="560" height="315" src="https://www.youtube.com/embed/zp_3KnYEqOI?si=1RQMqQz4hl1uATYz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Breakdown of the demos

- Lec 2-4: Setting up the frontend using React and TypeScript.
- Lec 5: Implementing HTTP requests using React hooks and Axios.
- Lec 6: Implementing the backend using Express.
- Lec 7: Integrating Firebase for data storage.
- Lec 8: Implementing user authentication and authorization using Firebase Auth.
