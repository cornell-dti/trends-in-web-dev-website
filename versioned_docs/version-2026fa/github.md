---
id: github
title: Git and GitHub Tutorial
---

Git is a tool for tracking changes to files. GitHub is an online service that
stores Git repositories and makes it easier to collaborate with other
developers. In this tutorial, you will set up Git, create or copy a repository,
and use Git to share your work.

## Introduction to Git

Git keeps a history of your project as a series of **commits**. A commit is a
saved snapshot of your changes with a message describing what changed. Git
also lets you work on separate **branches**, so you can develop a feature
without changing the main version of the project.

These are the most important parts of a Git workflow:

1. Edit files in your working directory.
2. Select changes with `git add`.
3. Save a snapshot with `git commit`.
4. Upload commits to a remote repository with `git push`.
5. Download and integrate your teammates' commits with `git pull`.

The `.git` folder stores a repository's history. Do not delete it unless you
intend to remove Git tracking from the project.

## Setting Up Git

### Install Git

Download and install [Git for Windows](https://git-scm.com/download/win).
Accept the default options unless you have a reason to change them. Then open
PowerShell or Git Bash and verify the installation:

```bash
git --version
```

### Configure your identity

Git uses your name and email address to label your commits. Use the same email
address that is connected to your GitHub account:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Check your configuration with:

```bash
git config --global --list
```

These settings identify your commits; they do not sign you in to GitHub.
Authentication is handled when you connect to GitHub over HTTPS or SSH.

## Introduction to GitHub

GitHub hosts Git repositories online. A GitHub repository, often shortened to
**repo**, can contain your code, its commit history, a README, issues, and
other collaboration tools.

Git and GitHub are related but not the same:

- **Git** runs on your computer and tracks project history.
- **GitHub** stores a copy of that history online and helps a team collaborate.
- A **remote** is a name for a repository hosted somewhere else. The usual
  remote name is `origin`.

Create a GitHub account at [github.com](https://github.com/) if you do not
already have one. Never commit passwords, API keys, Firebase service accounts,
or other private information to a repository.

## Create a Git Repository

There are two common ways to start a repository.

### Start with a local project

In PowerShell, move into your project folder. For example:

```powershell
cd path\to\your-project
git init
git add .
git commit -m "Initial commit"
```

Create an empty repository on GitHub. Give it a name, choose the appropriate
visibility, and do **not** add a README, `.gitignore`, or license if the local
project already has those files. GitHub will show commands for connecting the
local project; they follow this pattern:

```bash
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

Replace `USERNAME` and `REPOSITORY` with your GitHub username and repository
name. The `-u` option remembers that `origin/main` is the default upstream for
your local `main` branch.

### Create a repository on GitHub first

On GitHub, select **New repository**, enter a repository name, and create it.
If you are starting from an empty repository, copy its URL and then clone it
to your computer as described below.

## Clone a Git Repository

Cloning downloads a repository, its files, and its history to your computer.
Copy the repository URL from GitHub and run:

```bash
git clone https://github.com/USERNAME/REPOSITORY.git
cd REPOSITORY
```

You can check the repository's remote and current state with:

```bash
git remote -v
git status
```

If the repository is private, GitHub may ask you to authenticate. Follow
GitHub's instructions for HTTPS credentials or configure an SSH key.

## Develop, Commit, Push, and Sync

### Create a branch

Do not develop directly on `main` for a team project. Create a branch for each
feature or fix:

```bash
git switch main
git pull origin main
git switch -c add-home-page
```

Use a short, descriptive branch name. The first command switches to `main`,
the second downloads the newest `main`, and the third creates and switches to a
new branch.

### Develop and inspect changes

Edit and test your code. Then inspect what changed:

```bash
git status
git diff
```

`git status` lists changed and untracked files. `git diff` shows unstaged
changes.

### Stage and commit

Stage only the files that belong in the commit:

```bash
git add path\to\changed-file.tsx
git add path\to\another-file.css
git diff --staged
git commit -m "Add home page"
```

You can stage all changes with `git add .`, but check `git status` first so
that you do not accidentally add secrets, generated files, or unrelated work.
Write commit messages in the imperative mood and keep each commit focused.

### Push your branch

Upload your branch to GitHub:

```bash
git push -u origin add-home-page
```

After the first push, future pushes from that branch only need:

```bash
git push
```

On GitHub, open a pull request from your branch into `main` so your teammates
can review the work before it is merged.

### Sync with teammates

Before starting work, and before pushing a long-running branch, update your
local copy of `main`:

```bash
git switch main
git pull origin main
git switch add-home-page
git merge main
```

If Git reports a merge conflict, open each conflicted file and look for
`<<<<<<<`, `=======`, and `>>>>>>>`. Keep the correct code, remove the
conflict markers, then run:

```bash
git add path\to\resolved-file
git commit -m "Resolve merge conflict"
git push
```

Do not overwrite a teammate's work to make a conflict disappear. Ask your
teammates or a TA if you are unsure which version to keep.

## Connect Git and GitHub to the Final Project

Use one GitHub repository for your final project so every teammate can work
from the same codebase:

1. Choose one teammate to create an empty GitHub repository and add the other
   teammates as collaborators.
2. Each teammate should clone the repository instead of downloading a ZIP.
3. Add a `.gitignore` before the first push. At minimum, ignore
   `node_modules/`, local environment files such as `.env`, and build output.
4. Each teammate should create a branch for a feature, make focused commits,
   push the branch, and open a pull request.
5. Review and test a pull request before merging it into `main`.
6. Before beginning new work, run `git switch main` and
   `git pull origin main`.

For the final project, GitHub is especially useful for collaborating on the
frontend, Express server, Firebase integration, and authentication. Keep
private API keys and Firebase service account files out of the repository;
refer to [Final Project](./finalproject.md) for the project's submission
requirements and additional reminders.

:::tip
If you are not sure whether a file should be committed, run `git status` and
ask a teammate or TA before pushing it.
:::
