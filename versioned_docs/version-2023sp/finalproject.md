---
id: finalproject
title: Final Project
---

This semester, we've learned some great tools for web development. Now, we will
put them all together to make an amazing final project!

## Outline

This project will involve building a React web app complete with a connection to
a Firestore database.

You will be working in **groups of 3 or 4** to complete this final project. Your
method of collaboration is up to you, but **using GitHub is strongly advised**.

## Requirements

- Firebase authentication system
- Firestore database connection on Frontend
  - Create, Read, Update, Delete operations
- Use conditional rendering (at least once)
- Use ES6 syntax (includes arrow functions, spreading, destructuring)
- Use Functional programming (map/filter/reduce)
- Use React Hooks
- Use TypeScript (and code is well typed, so no `any`)
- Use Next.js with at least 2 pages

## Suggested Project Ideas

- Picnic items
- Clicker game (more involved)
- Blog
- Forum
- Wiki
- Songs browsing website
- Social network
- School management DB

You are not limited to these ideas, they are just some things
we've seen in the past that might help you get started!

## Milestones

The project will be divided into a number of milestones to help you progress in
a reasonable way.

Your remaining slip days are still valid for this. The group's allotted slip days is the max of your group members'. **You are allowed to use at most 3 slip days per each of Milestones 1, 2, 3.**

### Team Matching Form

#### Due: April 19 by 11:59 PM (no slip days)

Please fill out [**this team matching form**](https://forms.gle/pwzpcwkL9rXWqJnz9) by **Wednesday, April 19th**. This is a hard deadline because we want to assign group members the same day so you have enough time to work on Milestone 1.

### Milestone 1

**Due: April 23 by 11:59 PM**

Let's get started early! You'll want to really think about what you want to build and how you want to build it. This milestone is intended to help you get started on that.

**Steps:**

1. Create a mock of your web app. This can be a picture, or multiple pictures (handdrawn or created from a design program such as Figma etc.). Your mock should include sketches of the different pages or views in your application. You will attach these pictures to the document in step 2.

2. Create a proposal for your web app. This should be a `pdf` file at least **200 words long**. It should contain:

- A description that outlines what your project will be about, what it does, etc.
- Technical considerations! For instance, how will you structure your database schema! (What collections will you need, how will they be related, and what documents will they store).
- A link to your GitHub repo link, if you are using GitHub (_highly recommended!_). Make sure the repo is public!
- The mockups you created in step 1.

**Submission**

Submit the PDF document to CMSX by the deadline!

### Milestone 2

**Due: May 3 by 11:59 PM**

Time to properly get started coding!

Get started implementing the frontend, using the skills we learned in class (Next.js, CSS, etc.).

To get started, you may need to reference the materials we covered in [Lecture 3](https://webdev.cornelldti.org/docs/lecture3#create-a-nextjs-project).

Use hardcoded data for now as necessary just to get the layout done. These can be default values embedded in your frontend code. You will connect it to the database in the subsequent milestones.

Submit a zip file of your project to CMSX by the deadline! Along with your code, include a README containing a description of the project, a list of group members and netIDs, a link to the deployed site, a link to the GitHub repo if you used GitHub, and anything else that you think is important for us to know. This is _separate_ from the proposal you submitted in Milestone 1.

### Milestone 3

**Due: May 7 by 11:59 PM**

Now, it's time to connect your frontend to your backend, using the skills we learned in class (Firebase, Firestore, etc.).

Connect the app to Firebase by replacing hardcoded data with database calls.

Also work on having an authentication system set up using Firebase Auth.

Submit a zip file of your project to CMSX by the deadline! Include all the same things as in Milestone 2.

### Final Project

**Due: May 10 by 11:59 PM**

This is the last milestone!

Finish up the authentication system on your site and deploy your website.

:::tip
Need help? Come to [office hours](/docs/2023sp/introduction) and we can help you debug. Also feel free to post questions on Ed!
:::

:::danger
Do not push private API keys, Firebase service accounts, or other sensitive information to GitHub. Similarly, do not push `node_modules` up to GitHub. If we see these in your GitHub, you **will** lose points.

Note that firebase configs for the frontend are fine (and **should be**) included in your submission.
:::

Submit a zip file of your project to CMSX by the deadline! Include all the same things as in Milestone 2, _PLUS_ the URL of your deployed site.

## Optional Extensions

If you're looking for an added challenge, consider doing one or more of these extensions! There is no extra credit for these extensions, but it will really enrich your understanding of webdev (and make us very impressed!) :)

1. Use [Material UI](https://mui.com/), [Boostrap](https://getbootstrap.com/), [Mantine](https://mantine.dev/), or another pre-fabricated component library.
2. Make your website mobile-friendly/responsive to different screen sizes. You can get started using Media Queries and Clamping in CSS, which we [covered in Lecture 5](https://webdev.cornelldti.org/docs/lecture5#media-queries-and-clamping).
3. Use an external API (in additional to your Firebase backend!). For instance, you could use the [Spotify API](https://developer.spotify.com/documentation/web-api/) to pull in song data, or the [OpenWeather API](https://openweathermap.org/api) to pull in weather data.
4. Implement testing using [Jest](https://jestjs.io/) and/or the [React Testing Library](https://testing-library.com/docs/react-testing-library/).
5. Use Vercel's `useSWR` hook to implement [client-side data fetching](https://swr.vercel.app).
6. If you're a CS 3110 student, use a [TypeScript Pattern-Matching Library](https://github.com/gvergnaud/ts-pattern) to go further with functional programming in your frontend.

## Grading

- Frontend (35%)

  - Use of ES6 & TypeScript
  - Component structure
  - Use of hooks
  - Functional programming

- Database/Backend (15%)

  - Data fetching
  - Data insertion
  - Data deletion

- Auth (10%)

  - Authentication (using Firebase auth)

- Styling (5%)

- Deployment (5%)

- Code style and file structure (5%)

- Effort (25%)
  - This may seem like an arbitrary measure, but we expect most people to
    get most of the points here; the only way to lose points is if it is
    clear that not a lot of effort has been put in or you are consistently
    missing milestones.

## Tips for Success!

- Get in contact with your partner early!
  - Milestone 0 is intended for you to get some discussion on what you want to build before you start implementation. Make sure you are both aligned on what needs to be built to avoid issues later on. _Better initial planning means less frustrations later on._
- Be realistic.
  - We know you are ambitious but also understand your own capabilities. Building something too complex may be too overwhelming. You are allowed to change ideas, but that would be time wasted on the old project.
- Use git
  - git is one of the best (and prevalent) version control systems out there. It is great for sharing code between you and your partner/team members. _Please_ use a service like GitHub instead of emailing code back and forth to each other.
- Use branches!
  - When developing a feature, you should open up a new GitHub branch rather than committing and pushing directly to the main branch. This will allow you to develop your feature independently of the current state of main (and what your partners are doing) and only merge in when you are sure your feature is done and works.
  - Branches can also protect you from weird frustrating merge conflicts (so you can focus on developing awesome features!)
- Pair programming is fun!
  - Ideally, you should both be actively involved in the whole development process. A good way to achieve this is to step up a time to [pair program](https://en.wikipedia.org/wiki/Pair_programming) and code together!
- Also refer to tips in [How to Lose in CS 2112](https://www.cs.cornell.edu/courses/cs2112/2021fa/handouts/how-to-lose.html)
