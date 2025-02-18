---
id: assignments
title: Assignments
---

# Assignments

Assignments will be released here after lecture! There will be 5 assignments total,
including a final project spanning the last few weeks of the class.

You are allowed max 3 slip days (out of 6 total for all assignments and the final project) per an assignment.

The class is scheduled to finish well before finals week.

[Assignment 1](/docs/assignment1): Due on CMSX by Feb 24 at 11:59pm

Assignment 2: Due on CMSX by Mar 10 at 11:59pm

Assignment 3: Due on CMSX by Mar 17 at 11:59pm

Assignment 4: Due on CMSX by Mar 24 at 11:59pm

Assignment 5: Due by May 4 at 11:59pm

---

## Independent Project Starter Templates

### Frontend Starters

If you're trying to create a new frontend React project on your own, `cd` into a directory of your choice, and then use one of our starter templates (highly recommended):

The following command creates an incredibly simple React project:

```bash
pnpm dlx degit cornell-dti/trends-mono-sp25/frontend-starter your-project-name
```

The following command creates a more advanced React project with a component library, icons, and routing built in for you:

```bash
pnpm dlx degit cornell-dti/trends-mono-sp25/frontend-starter-advanced your-project-name
```

Note that neither of these projects include a backend!

---

**Why use our custom frontend templates?**

In the past, people recommended using [Create React App](https://create-react-app.dev/). However, in recent years, popular opinion has turned against this specific starter: in fact, it was removed from the official React documentation recently. Since we're literally "Trends in Web Development", we want to use the latest and greatest tools, and that means not using Create React App.

Well, where are the Trends pointing towards? Past semesters of Trends used [Next.js](https://nextjs.org/), a popular React metaframework (that is, a framework built atop another framework) that adds a lot of useful features to React. However, the future of Next.js is increasingly unclear: it's heavily opinionated, with a business focus on locking its users into its ecosystem, increasingly slow and unnecessarily complex, and just increasingly controversial.

So, we've created our own lightweight starter template built atop [Vite](https://vitejs.dev/), an incredibly popular, fast, and un-opinionated build tool by [Evan You](https://github.com/yyx990803), the creator of Vue.js. Using industry standard technologies like React Router and easy-to-get-started-with libraries like Mantine and Lucide, we've created a starter template that's easier to use, easier to understand, and easier to build upon.

Disagree? That's fine! You're free to use whatever React-based metaframework you want for your project, whether that's [Next.js](https://nextjs.org/), [Remix](https://remix.run/), [Create React App](https://create-react-app.dev/), or something else.
