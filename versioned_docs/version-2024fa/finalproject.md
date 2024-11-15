---
id: finalproject
title: Final Project
---

This semester, we've learned some great tools for web development. Now, we will
put them all together to make an amazing final project!

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

### Milestone 1

**Due: November 3rd, 2024 by 11:59 PM**
This milestone is primarily focused to allow you to ideate ideas with your team (check out project suggestions for inspiration!). You will meet with your assigned TA for idea approval and roadmapping. Your assigned TA will be your primary point of contact for any trouble you face while working on the project. All our TAs are incredibly kind and supportive so don't feel intimidated!

**Requirements**

- Text document detailing project idea and road map (make sure this has been approved by your TA)

### Milestone 2

**Due: November 13th, 2024 by 11:59 PM**
For this milestone, we expect a skeleton of a website. So, by this checkpoint, you should have established your frontend pages and outlined the API routes you plan on implementing in Express. Your frontend and backend should be properly connected and can communicate with one another locally. Again, make sure your TA approves and has checked in with you.

**Requirements**

- Frontend UI (at least 3 pages)
- Express API & server that supports HTTP requests
  - at least one of each HTTP request type (`GET`, `POST`, `PUT`, `DELETE`)
  - full implementation is not necessary, we just want to see the outline of each route function

### Milestone 3

**Due: November 26th, 2024 by 11:59 PM (No slip days allowed for this check-in)**
For this milestone, you should have fully functioning prototype with maybe some minor bugs and getting your web application ready to be deployed. This is your final TA check in.

**Requirements**

- Frontend UI (at least 3 pages)
- Express API & server that supports HTTP requests
  - at least one of each HTTP request type (`GET`, `POST`, `PUT`, `DELETE`)
  - full implementation should be completed here with proper read/write functonality to your Firebase database
- Authentication
- **[Updated 11/15]** GitHub use
  - no sensitive information pushed
  - descriptive README

### Final Project

**Due: December 3rd, 2024 by 11:59 PM**
Submit your final work! Great job and we're all excited for demo day!!
**Make sure to fill out the Peer Review Form (*coming soon*) for all members on your team**

#### FINAL PRESENTATION DAY: December 4th, 2024 (7:30PM) in Upson 222

**Requirements**

Please prepare to present a demo that is approximately **5 minutes**. Please also include information regarding

- A feature you are really proud of
- Something you learned in creating this project
- Something you would like to improve upon if you were to continue working on the project

Completing your first full-stack web development project is something worth celebrating! If you are in a group, please try to have all members present. We are excited to see all of your presentations! If there are any questions or concerns,
reach out to Chris, Simon, or any of the TAs.

:::tip
Need help? Come to [office hours](/docs/2024fa/introduction) and we can help you debug. Also feel free to post questions on Ed!
:::

:::danger
Do not push private API keys, Firebase service accounts, or other sensitive information to GitHub. Similarly, do not push `node_modules` up to GitHub. If we see these in your GitHub, you **will** lose points.

Note that firebase configs for the frontend are fine (and **should be**) included in your submission.
:::

Submit a zip file of your project to CMSX and fill out the Final Project Link (*coming soon*) by the deadline!

## Optional Extensions

If you're looking for an added challenge, consider doing one or more of these extensions! There is no extra credit for these extensions, but it will really enrich your understanding of webdev (and make us very impressed!)

1. Make your website mobile-friendly/responsive to different screen sizes. You can get started using Media Queries and Clamping in CSS.
2. Use an external API (in additional to your Firebase backend!). For instance, you could use the [Spotify API](https://developer.spotify.com/documentation/web-api/) to pull in song data, or the [OpenWeather API](https://openweathermap.org/api) to pull in weather data.
3. Implement testing using [Jest](https://jestjs.io/) and/or the [React Testing Library](https://testing-library.com/docs/react-testing-library/).
4. If you're a CS 3110 student, use a [TypeScript Pattern-Matching Library](https://github.com/gvergnaud/ts-pattern) to go further with functional programming in your frontend.

## Grading

This is subject to change.

- Frontend (25%)

  - Use of ES6 & TypeScript
  - Component structure
  - Use of hooks
  - Functional programming

- Database/Backend (20%)

  - Data fetching
  - Data insertion
  - Data deletion
  - Proper frontend/backend communication

- Auth (10%)

  - Authentication (using Firebase auth)

- Styling (5%)

- Deployment (5%)

- Code style and file structure (5%)

- Effort (**[Updated 11/15]** ~~10%~~ 5%)

  - This may seem like an arbitrary measure, but we expect most people to
    get most of the points here; the only way to lose points is if it is
    clear that not a lot of effort has been put in or you are consistently
    missing milestones.

- **[Updated 11/15]** GitHub use (5%)

- Milestones (15%)

  - Each milestone is worth 5% of your grade.

- Peer Review (5%)
  - Fill out this Peer Review Form (*coming soon*) for all members on your team

## Tips for Success!

- Get in contact with your partner early! _Better initial planning means less frustrations later on._
- Be realistic. We know you are ambitious, but also understand your own capabilities, and avoid changing ideas halfway through.
- Use git.
  - It is great for sharing code between you and your partner/team members. _Please_ don't just email code back and forth.
  - Use git branches!
    - When developing a feature, you should open up a new GitHub branch rather than committing and pushing directly to the main branch. This will allow you to develop your feature independently of the current state of main (and what your partners are doing) and only merge in when you are sure your feature is done and works.
    - Branches can also protect you from weird frustrating merge conflicts (so you can focus on developing awesome features!)
- Pair programming is fun!
  - Ideally, you should both be actively involved in the whole development process. A good way to achieve this is to step up a time to [pair program](https://en.wikipedia.org/wiki/Pair_programming) and code together!
- Also refer to tips in [How to Lose in CS 2112](https://www.cs.cornell.edu/courses/cs2112/2021fa/handouts/how-to-lose.html)
