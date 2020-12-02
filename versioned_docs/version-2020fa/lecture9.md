---
id: lecture9
title: Lecture 9
---

Lecture Video (To be added)

[Lecture Slides](https://docs.google.com/presentation/d/1ee6oDLDs_n2aGa16Gz97comB8Trkv7oQcvxzTiyWqqE/edit#slide=id.g825bd93030_0_0)

[Final Project - Milestone 2 due 12/8](https://webdev.cornelldti.org/docs/finalproject#milestone-2)

## Yarn Workspaces

### Replacing our familiar workflow

Normally, to run both the backend and frontend, we have to do something like this:

```bash
cd backend
yarn install
yarn start  # start the backend

cd ../frontend
yarn install
yarn start  # start the frontend
```

We can make managing the frontend and backend easier by creating a package.json in our root directory and declaring a workspaces!

```json title="package.json"
{
  "private": true,
  "workspaces": ["frontend", "backend"]
}
```

### Hositing package manager out to root

One advantage of doing this is that dependencies are installed at the root, so if both your frontend and backend use the same version of TypeScript, it is only installed once at the workspace root.

Another thing you may notice is that only one lockfile is generated and it is placed at the workspace root with `package.json`.

Having your package manager at your root also makes running scripts from both workspaces much simpler. To run the respective `start` script for the frontend or backend, you can
run `yarn workspace frontend start` or `yarn workspace backend start`

### Local workspace as dependency

If there is code that you wish to be shared between both your frontend and backend, for example, you can also declare that as another workspace in your `package.json`
and include it in the respective frontend and backend `package.json` like so:

```json title="frontend/package.json"
{
  "name": "frontend",
  "version": "1.0.0",
  "dependencies": {
    "typescript": "^4.1.2",
    "react": "^17.0.0",
    "helper-functions": "1.0.0"
  }
}
```

### Why use workspaces?

- Yarn workspaces allows your dependencies to be linked together, making it easier to manage a monorepo
- Having one lockfile creates fewer conflicts and easier code reviews
- Reduces redundancy in packages
- Including workspaces as dependencies makes it easier to test your utility functions locally before you publish them online

## Security

Web app security is integral in a world where people have malicious intentions. As such, we advocate for at least these basic security measures.

### 1. Passwords

Do NOT store passwords in plain text in your database!!

If somehow there were a vulnerability in your database, the passwords of all of your users would be directly exposed to hackers.
Moreover, many people reuse their passwords for some if not all other, so you could also compromise something like someone's banking credentials or emails.

While it is safer to store hashed passwords, it is very easy to do it incorrectly, which is why we teach firebase authentication!

### 2. Input Sanitization

Input sanitization 'cleanses' inputs so that they can not be used in unintended ways.

For example, it may seem reasonable to add every comment on a blog into a database entry like this:
`“INSERT INTO 'comments' (comment) VALUES '” + user_input + “';”`, but it is actually incredibly unsafe
if `user_input` were something like `'; DROP TABLE comments;`.

Luckily for us, React DOM escapes values embedded in JSX before rendering them by default, preventing injection attacks.

### 3. Don't Rely on Client Side Verification

In general you cannot assume your endpoint will only be used by your frontend.

Recall that we used Postman at the beginning of the semester to test Express endpoints. As such, it is always important to verify your inputs and authenticate your requests!

### 4. Separation of Privileges

Going hand-in-hand with the last point, when a request is made to your backend, make sure that the source of your request has the sufficient permissions to perform whatever action is being asked!

For example, if the OfficeHours app recieved a request to edit the times to someone's office hours, the backend would check that this person is indeed the TA who owns that OH and not a student.

## Deployment

To deploy your web application means to put it on a Web server so others can access it via the internet. We will deploy frontend on Firebase and backend on Heroku.

### Frontend Deployment

To deploy to Firebase enter the following commands into terminal:

```bash
yarn global add firebase-tools
yarn build
firebase login
firebase init
<answer the questions>
firebase deploy
```

`yarn build` will create a `build` directory containing a production build of your application.

`firebase login` will prompt you to log in by opening up a web browser if you're not already signed it.

`firebase init` will ask you the following questions:

1. Which Firebase CLI features do you want to set up for this folder? Select **Hosting**.
2. Associate with a Firebase project. **Select your Firebase project**
3. What do you want as your public directory? **build**
4. Configure as a single-page app (rewrite all urls to /index.html)? **Yes**
5. Overwrite `index.html`? **No**

Running `firebase deploy` will push your build assets to Firebase remote server and give you a URL to your live Firebase app site! Now you can share this site and access it over the internet.

### Backend Deployment

We will deploy backend on Heroku because deploying on Firebase is much more involved

```bash
yarn global add heroku
git init
git add .
git commit -m "COMMIT MESSAGE"
heroku login
heroku create <optional project name>
git push heroku master
(optional) heroku open
```

You can then use the url generated as your backend endpoint in your frontend code.

## Authentication

One of the best parts about Firebase is you can use Sign in with Google/Facebook/GitHub/etc! This way you don't have to deal with usernames and passwords yourself!

We did a Live Coding Demo here based on the Songs example from last week. I will include the files changed here.

To handle authentication we made a wrapper component `Authenticated` to handle all Authentication:

```tsx title="Authenticated.tsx"
import React, { useState } from 'react';
import 'firebase/auth';
import firebase from 'firebase/app';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';
import { useEffect } from 'react';

const firebaseConfig = {}; // put firebase config in here

firebase.initializeApp(firebaseConfig);

type Props = {
  children: React.ReactNode;
};

const Authenticated = ({ children }: Props) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };

  function onAuthStateChange() {
    return firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }

  useEffect(() => onAuthStateChange(), []);

  return (
    <div>
      {user && children}
      {!user && (
        <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      )}
    </div>
  );
};

export default Authenticated;
```

We then wrap our whole `SongList` app in `Authenticated`.

```tsx title="App.tsx"
import React from 'react';
import './App.css';
import SongList from './SongList';
import Authenticated from './Authenticated';

const App = (): React.ReactElement => (
  <div className="App">
    <Authenticated>
      <SongList />
    </Authenticated>
  </div>
);

export default App;
```

If the user is logged in, `SongList` will show. Otherwise they will be asked to log in.

We then deployed this app on Firebase for the frontend and Heroku for the backend. Refer to the commands above.
