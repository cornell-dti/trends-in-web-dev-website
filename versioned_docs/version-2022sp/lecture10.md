---
id: lecture10
title: Lecture 10
---

[Lecture Slides](https://docs.google.com/presentation/d/1MOFsKAfAH2kVq9B__ZwHC_HHtpL5YpGoePVsZgzow7o/edit?usp=sharing)

[Final Project Instructions](/docs/finalproject)

[Final Project - Milestone 1](/docs/finalproject#milestone-1) due **4/29 by 11:59pm**

[Final Project - Milestone 2](/docs/finalproject#milestone-2) due **5/6 by 11:59pm**

[Final Project - Milestone 3](/docs/finalproject#milestone-3) due **5/13 by 11:59pm**

## Deployment

You've been running `yarn dev` to run your Next.js server locally, but what if
you want to share your website with others?

When we talk about deployment in webdev, we usually mean the process of putting
your code onto server(s) that will serve your website or API to others.

### What's different with Next.js?

Classic React apps are "compiled" into a HTML/JS/CSS bundle once at build time.
That bundle then is delivered to anyone who visits your website. This can make
deployment very simple, because all you need is a server that can serve static
files (pretty much all of them).

Next.js, on the other hand, offers features like Server Side Rendering that are
not compatible with the pattern of just giving every website visitor the same
bundle of code. Depending on the time of day, or authorization status of the
user, or a myriad of other factors, your Next.js server would like to modify the
bundle that it sends. This means that your server has to run the Next.js server
in particular. As a side note, the production server is what is ran when you run
`yarn start`.

### Vercel (Recommended)

Vercel is the company behind Next.js, and they make it really easy to deploy
your Next.js app on their platform!

To install the Vercel CLI, run this:

```
yarn global add vercel
```

Then to deploy your Next.js app, run this in the project's root:

```
vercel
```

That's it!

So... what's the catch?

Vercel can be a bit pricy, especially when you compare it to other competitors.
In exchange for unparalleled Next.js integration, they charge a premium.

That said, Vercel has a free tier, which is perfect for your final project!

### Other Hosting Solutions

Let's say you are taking your final project idea to a startup. You have a
sizeable userbase, and the free tier is no longer an option. You could continue
to use Vercel, but you also want to take a look at alternative platforms for
deployment.

**AWS Amplify**/**Azure**/**GCP** ("Big Cloud") may be one of the first options you come
across. They are usually competitive with pricing and allow you to tap into the
vast cloud resources these big companies have.

**Netlify** and **Heroku** are also great options if you want to deploy anything.
Netlify in particular offers a great deployment experience, similar to Vercel.
On DTI (at the time of writing) we use both! This website is hosted by Netlify.
:)

A final alternative is renting a single server (VPS) through platforms like
**DigitalOcean**. You are able to run the Next.js server from this one machine,
which is priced at a static (cheap) rate. However it may not scale as well
compared to cloud platforms. This may be a good option for your personal
website, if free tier hosting doesn't cut it.

We won't list instructions here on how to deploy your app with these other
hosting providers, but there are many resources on the internet that you can tap
into!

### Post-Deployment

Once you have a public URL for your website, here are some things to check:

- Make sure your app doesn't hardcode urls like `localhost:3000`
- If using Firebase auth, add your new URL to the list of Authorized Domains
  (else authentication won't work)
  - Navigate: [Firebase Console](https://console.firebase.google.com/) -> Authentication -> Sign-in method -> Authorized domains

And that's pretty much it! Enjoy your website 😍

## Small Note on Component Libraries

If you want to make your website look good, an alternative to customizing all
the CSS yourself is using a _component library_.

There are tons of them out there, but here are some we recommend:

- [Material UI](https://mui.com/)
- [Chakra UI](https://chakra-ui.com/)
- [Semantic UI](https://react.semantic-ui.com/)
- [Bootstrap](https://react-bootstrap.github.io/)

What these libraries have in common is that they export styled **React**
components, such as `<Button>` for you to use instead of regular HTML elements,
such as `<button>`.

They also allow you to define layouts and grids in particular ways, making it
easy for you to create responsive layouts that work on both desktop and mobile.

This allows you to build off something that already looks decent. However, some
of these libraries are more _opinionated_, such as Material UI, which means that
it is relatively harder to deviate from the intended design.

You install all these as dependencies into your Next.js project through `yarn add` (more specific instructions found on the corresponding sites)

### Other ways to style

[Tailwind CSS](https://tailwindcss.com/) is pretty popular "CSS framework" that
gives you more low-level utilities for styling your website. Rather than
pre-styling components for you, it allows you to write styles more easily.

You can also just use plain old CSS to put things in the right place and make
things look pretty! For example, you may use [CSS
Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) to display
elements in a particular way. It's a huge rabbit hole - beware!

### Icons

Want to spice up your website? Add icons!

If using Material UI, adding in [Material Icons](https://mui.com/material-ui/material-icons/) is a no brainer.

There is also [react-icons](https://react-icons.github.io/react-icons/), which
offers a crazy large variety of icons with different styles.

## Even Further Beyond

This semester, we covered a ton of frontend web development, enough to make
interactive web apps that can authenticate users and interact with databases!

If you would like to delve further into frontend, you might find it fun to look
at other JavaScript frameworks aside from React such as
[Angular](https://angular.io/), [Vue](https://vuejs.org/), or
[Svelte](https://svelte.dev/).

If you want to do more React, look into [Redux](https://redux-toolkit.js.org/)
(more advanced state management), [SWR](https://swr.vercel.app/) (data
fetching), or [Cypress](https://www.cypress.io/) (end-to-end testing).

If you think Next.js and SSR is cool, there are tons of features we couldn't
cover this semester, such as
[getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)
and [Incremental Static
Regeneration](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration).

If you are interested in the backend side, we recommend looking through [our
notes on Express](/docs/2021fa/lecture2#express) from past semesters! Take it up
a notch with [Nest.js](https://nestjs.com/) for a more complete backend
framework. You may have built backends in Python or Java, but using TypeScript
for both allows you to do nifty things like share types!

On the full-stack side, check out technologies like
[GraphQL](https://graphql.org/) and
[WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
that allow for more interesting communication between client and server.

We've been using Node.js for everything, but check out
[Deno](https://deno.land/)! Deno supports TypeScript out of the box (pretty
cool) and was created by Node.js creator Ryan Dahl to fix some things he didn't
like about Node.js.
