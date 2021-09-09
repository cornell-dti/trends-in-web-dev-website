---
id: finalproject
title: Final Project
---

This semester, we've learned some great tools for
frontend, backend, and database development. Now,
we will put them all together to make an amazing final
project!

## Outline

This project will involve building a web app complete
with a backend that connects to a Firestore database.

You will be working in **groups of 2** to complete this final
project. Your method of collaboration is up to you,
but **using GitHub is strongly advised**. VS Code also has
an excellent live coding tool which you can use if you prefer
to do all work together.

## Requirements

- Firebase authentication system
- Create a backend using GET and POST requests
- Have a React frontend which talks to the backend and
  puts/fetches data from the database.
- Use conditional rendering (at least once)
- Use ES6 syntax (includes arrow functions, spreading, destructuring)
- Use Functional programming (map/filter/reduce)
- Use React Hooks
- Use TypeScript (and code is well typed, so no `any`)

## Suggested Project Ideas

- Picnic items
- Card game
- Blog
- Forum
- Chat bot
- Wiki
- School management db

You are not limited to these ideas, they are just some things
we've seen in the past that might help you get started!

## Milestones

The project will be divided into a number of milestones to help
you progress in a reasonable way.

Each milestone is due before lecture on its due date. Your remaining slip days are still valid for this. If you and your partner have different number of slip days left, **the partner with the most slip days left counts.** E.g. if Megan and Ashneel are a group and Megan has 5 slip days and Ashneel has 3. We are allowed 5 slip days for the final project. **You are allowed to use at most 3 slip days per each of Milestones 1, 2, 3.**

### Team Matching Form

**Due: November 7 by 11:59 PM (no slip days)**

Please fill out [**this team matching form**](https://forms.gle/kzqW3r5fdP1u5Yix9) by **Saturday, Nov. 7th**. This is a hard deadline because I want to assign partners on Sunday so you have enough time to work on Milestone 0 (due by next class).

### Milestone 0

**Due: November 10 by 3:59 PM (no slip days)**

Upload to CMS a mock and description of your web app! Your mock can be a picture/pictures (handdrawn or created from a drawing program) and the description should be in `pdf` form. Your mock should include sketches of the different pages or views in your application. Your description should be **at least 200 words** and elaborate on what your project will be about. Also consider how you will structure your database schema! (What tables will you need, how will they be related, and what will they store). Finally, if you are using GitHub (_highly recommended!_), please link it in your description (and make the GitHub repo public). Please zip both of these together to submit to CMS.

### Milestone 1

**Due: December 1 by 3:59 PM**

Get started implementing either the frontend or backend (you choose).
If you're doing frontend, you can use hardcoded data for now just to get the layout done. This can be default values embedded in your frontend code like we had for [Thinking in React lecture 7](/docs/2020fa/lecture7#filterable-product-table-example). You will connect it to a backend in the subsequent milestones.

### Milestone 2

**Due: December 8 by 3:59PM**

Work on the other side (if you did frontend for Milestone 1, do backend now and vice versa).

Also have an authentication system set up using Firebase.

### Milestone 3

**Due: December 15 by 3:59PM**

Bridge the frontend and backend together using data fetching. This will involve some full stack work! Also, the app should be fully deployed on Firebase and styled using any CSS you deem necessary. This is your final submission!

:::tip
Need help? Come to [office hours](/docs/introduction#when-are-office-hours) and we can help you debug. Also feel free to post questions on Piazza!
:::

:::danger
Do not push private API keys, Firebase service accounts, or other sensitive information to GitHub. Similarly, do not push `node_modules` up to GitHub/Heroku. **If we see these in your GitHub, you will lose points.**

Do, however, submit your keys in your CMS submissions if they are necessary to run your app. Don't worry, your secrets are safe with us :)
:::

## Optional Extensions

If you're looking for an added challenge, consider doing one or more of these extensions! There is no extra credit for these extensions, but it will really enrich your understanding of webdev (and make us very impressed!) :)

1. Use Material-UI or Bootstrap (libraries to help with styling!)
2. Mobile-friendly/Responsive
3. Use an external API with your backend (note: this doesn't replace your Firebase backend)

## Grading

- Frontend (25%)

  - Use of ES6 & TypeScript
  - Component structure
  - Use of hooks
  - Functional programming

- Backend (25%)

  - Use of ES6 & TypeScript
  - Has both GET and POST requests
  - Is connected to a database
  - Functional programming

- Database/Auth (15%)

  - Data fetching
  - Data insertion
  - Authentication (using Firebase auth)

- Styling (5%)

- Deployment (5%)

- Code style and file structure (5%)

- Effort (20%)
  - This may seem like an arbitrary measure, but we expect most people to
    get most of the points here; the only way to lose points is if it is
    clear that not a lot of effort has been put in or you are consistently
    missing milestones.

## Submission

Submission for each milestone will be a zip file of your code, along with a
README containing a description of the project, a list of
group members and netIDs, a link to the deployed site, a link to the GitHub repo if you used GitHub,
and anything else that you think is important for us
to know.

As always, do not include your `node_modules`.

## Tips for Success!

- Get in contact with your partner early!
  - Milestone 0 is intended for you to get some discussion on what you want to build before you start implementation. Make sure you are both aligned on what needs to be built to avoid issues later on. _Better initial planning means less frustrations later on._
- Be realistic.
  - We know you are ambitious but also understand your own capabilities. Building something too complex may be too overwhelming. You are allowed to change ideas, but that would be time wasted on the old project.
- Use GitHub
  - GitHub is the best tool for sharing code between you and your partner/team members. _Please_ use GitHub instead of emailing code back and forth to each other.
- Use branches!
  - When developing a feature, you should open up a new GitHub branch rather than committing and pushing directly to master. This will allow you to develop your feature independently of the current state of master (and what your partner is doing) and only merge in when you are sure your feature is done and works.
  - Branches can also protect you from weird frustrating merge conflicts (so you can focus on developing awesome features!)
- Pair programming is fun!
  - Ideally, you should both be actively involved in the whole development process. A good way to achieve this is to step up a time to [pair program](https://en.wikipedia.org/wiki/Pair_programming) and code together!
- Also refer to tips in [How to Lose in CS 2112](https://www.cs.cornell.edu/courses/cs2112/2020fa/handouts/how-to-lose.html)
