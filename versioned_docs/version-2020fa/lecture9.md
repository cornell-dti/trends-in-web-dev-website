---
id: lecture9
title: Lecture 9
---

[Lecture Video](https://drive.google.com/file/d/1W2pFu7ehAC_GqSjfhDUtSZ0Y7VINe1MS/view?usp=sharing)

[Lecture Slides](https://docs.google.com/presentation/d/1ee6oDLDs_n2aGa16Gz97comB8Trkv7oQcvxzTiyWqqE/edit#slide=id.g825bd93030_0_0)

[Final Project - Milestone 2 due 12/8](https://webdev.cornelldti.org/docs/finalproject#milestone-2)

Vote for the Lecture 10 topic [here](https://bit.ly/lec10fa20vote) by **Friday 11:59PM ET**

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

### Yarn workspaces setup

We will be showing Yarn workspaces setup on our example Songs App we've been working on throughout the semester. After lecture 8, we bridged the frontend and the backend together to fetch data from our API endpoints defined in `backend/index.ts` to show in the frontend UI.

We kept these two folders separate and we showed the old way of `cd` into each folder and running Yarn install. Now with workspaces we can manage the package from the root and directly run `yarn install` once to install all frontend and backend dependencies!

#### Root

To do this, our root `package.json` will define the workspaces. (Note: root means outside of both the frontend and backend folders, on that same level of the directory hierarchy.)

Most important lines here are 3-7 which define the workspaces and set `private: true` since [workspaces can't be published](https://classic.yarnpkg.com/en/docs/workspaces/#toc-how-to-use-it).

```json title="/package.json"
{
  "name": "songs-app",
  "private": true,
  "workspaces": ["backend", "frontend"],
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}
```

#### Backend

Now our backend workspace will look like the following. I've omitted some of the dependencies part for brevity you can find the full file [below](./lecture9#backendpackagejson)

```json title="backend/package.json"
{
  "name": "backend",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "start": "node index.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "firebase-admin": "^9.4.1"
  }
  // dev dependencies...
}
```

#### Frontend

Our frontend workspace will also look like the following. The full file can also be found is very similar to the default `package.json` from create react app we have been using all along.

```json title="frontend/package.json"
{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "proxy": "http://localhost:8080",
  "dependencies": {
    "axios": "^0.19.2",
    "firebase": "^8.1.1",
    "firebase-tools": "^8.16.2",
    "react": "^17.0.1"
  },
  // other dependencies, dev dependencies
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

#### Profit!

Now we can profit from all our hardwork setting up by managing everything from the project root. In the root we can run:

`yarn workspace frontend build` to build our frontend application. This is equivalent to running `react-scripts start` based on `frontend/package.json`.

We can also run `yarn workspace backend build` to build our backend application. This is equivalent to running `tsc -p tsconfig.json` based on `backend/package.json`.

In general the syntax for running a script for a workspace is `yarn workspace <workspace_name> <script_name>`. Where `<workspace_name>/package.json` has a value for `<script_name>` in the `scripts` section.

We notice we have two build scripts in backend and frontend. `yarn workspace run build` will tell yarn to run build script in all workspaces that have them.

Of course, we can also run `yarn install` in the project root to install all the dependencies required in all of our workspaces. If there are duplicates, yarn will only install the dependency once.

### Learn more!

Yarn workspaces is super cool and we just covered a subset of functionality. If you want to learn more check out these links:

- [How to use Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/#toc-how-to-use-it)
- [Blog post](https://classic.yarnpkg.com/blog/2017/08/02/introducing-workspaces/)

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

Luckily for us, [React DOM escapes values embedded in JSX before rendering them by default, preventing injection attacks](https://reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks).

### 3. Don't Rely on Client Side Verification

In general you cannot assume your endpoint will only be used by your frontend.

Recall that we used Postman at the beginning of the semester to test Express endpoints. As such, it is always important to verify your inputs and authenticate your requests!

### 4. Separation of Privileges

Going hand-in-hand with the last point, when a request is made to your backend, make sure that the source of your request has the sufficient permissions to perform whatever action is being asked!

For example, if the OfficeHours app recieved a request to edit the times to someone's office hours, the backend would check that this person is indeed the TA who owns that OH and not a student.

### Let's hack our app!

In lecture, we showed how to hack our very simple application by sending in bad unauthenticated input data. This caused our frontend to break a little bit. Check the lecture video for details!

We fixed the backend by using Firebase Admin's verifyIdToken function to check whether the user had logged in or not.

#### Backend

On the backend, we had the `post` endpoints check the `idtoken` in the request headers.

```ts title="backend/index.ts"
// setup, GET route
app.post('/createSong', async (req, res) => {
  admin
    .auth()
    .verifyIdToken(req.headers.idtoken as string)
    .then(async () => {
      const newSong = req.body;
      const addedSong = await songsCollection.add(newSong);
      res.send(addedSong.id);
    })
    .catch(() => {
      console.log('auth error');
    });
});

app.post('/updateRating', async (req, res) => {
  admin
    .auth()
    .verifyIdToken(req.headers.idtoken as string)
    .then(async () => {
      const id = req.query.id as string;
      const rating = req.query.rating;
      await songsCollection.doc(id).update({ rating });
      res.send('Song rating updated!');
    })
    .catch(() => {
      console.log('auth error');
    });
});
```

We call `admin.auth().verifyIdToken(req.headers.idtoken as string)` and only then do we allow the input to be saved. Otherwise, we log the error.

#### Frontend

Now when we send the request back, we need to send the idtoken with the request header. So in the `addSong` and `updateRating` methods that called the POST endpoints above, we send call `firebase.auth().currentUser?.getIdToken(true)` to get the user's idtoken. Then we pass it in as a field to `headers` in the fetch. However, if the currentUser is undefined for some reason (what the `?` catches), then we console that the user isn't authenticated. Everything else should be familiar from last lecture.

```ts title="frontend/src/SongList.tsx"
const addSong = (name: string, artist: string, rating: number) => {
  firebase
    .auth()
    .currentUser?.getIdToken(true)
    .then((idtoken) => {
      fetch('/createSong', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          idtoken,
        },
        body: JSON.stringify({ name, artist, rating }),
      })
        .then((res) => res.text())
        .then((id) => setSongs([...songs, { name, artist, rating, id }]));
    })
    .catch(() => {
      console.log('not authenticated');
    });
};

const updateRating = (id: string, rating: number) => {
  firebase
    .auth()
    .currentUser?.getIdToken(true)
    .then((idtoken) => {
      fetch(`/updateRating?id=${id}&rating=${rating}`, {
        method: 'POST',
        headers: {
          idtoken,
        },
      }).then(() =>
        setSongs(
          songs.map((song) =>
            song.id === id
              ? { name: song.name, artist: song.artist, rating, id }
              : song
          )
        )
      );
    })
    .catch(() => {
      console.log('not authenticated');
    });
};
```

#### Security Best Practices

There is a lot more we could've done in terms of security here.

1. We should send back error messages to the user about why requests are failing instead of just doing `console.log()` since the user won't see that. This would be bad user experience since they don't have feedback about why things aren't working.
2. We should also do input validation on the backend to ensure we are getting our expected inputs. What if we aren't passing an object that looks like:

```json
{
  "artist": string
  "title": string
  "rating": number [in 1-5]
}
```

## Deployment

To deploy your web application means to put it on a Web server so others can access it via the internet. We will deploy both our frontend and backend on Heroku. There are a variety of services you can use for deployment including Firebase, Amazon AWS, Microsoft Azure, etc, but we decided to show you Heroku deployment since it is easier and requires less setup.

We will be taking our songs app we have been building throughout the course and deploying it to a remote server. To deploy your own app (for final project for example), you can follow the same steps usually.

### Deployment Setup

#### Backend

##### `index.ts`

To deploy to Heroku we need some additional setup. We will be serving our frontend via our backend so express should grab files from the `frontend/build` folder. In the frontend folder, when you run `yarn build`, you will get a `build` directory containing all the optimized, bundled frontend React code ready to be pushed to a remote server. We will include the line `app.use(express.static(path.join(__dirname, '../frontend/build')));` to do this. (Note: this requires us to `import path from 'path';`)

We will also be calling upon our express app to use CORS to allow cross origin requests. If your backend requests are being blocked be of some `CORS cross origin policy` issue you probably forgot to include the `app.use(cors());` line. (Note: this requires us to `import cors from 'cors';`)

The beginning of your `backend/index.ts` should look like the below. Note the CORS line (line 12) and express static serving line (line 13) we described above and the relevant import statements.

```ts title="backend/index.ts"
import express from 'express';
import admin from 'firebase-admin';
import cors from 'cors';
import path from 'path';

const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: '', // add dbURL
});

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.use(express.json());
const db = admin.firestore();

const songsCollection = db.collection('songs');

app.get('/getSongs', async (req, res) => {
  const songs = await songsCollection.get();
  res.json(songs.docs.map((song) => ({ ...song.data(), id: song.id })));
});

// other routes...
app.listen(process.env.PORT || 8080, () => console.log('backend started'));
```

:::note
Notice we are having `app.listen` listen for either port 8080 or `process.env.PORT`. Previously, we hardcoded `8080` for this parameter. `process.env.PORT` will be defined by Heroku and we want the app to listen for requests on that port in the deployed site. 
:::

##### `backend/package.json`

Our `backend/package.json` will look like this since we need to compile the TypeScript to JavaScript first. The build step calls `tsc` the TypeScript compiler to compile the `index.ts` to `index.js`. You should see a new `index.js` file after you run `yarn build`.

:::note
We are using the same `tsconfig.json` as found in [lecture2](./lecture2#tsconfigjson).
:::

```json title="backend/package.json"
{
  "name": "backend",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "start": "node index.js"
  },
  "license": "MIT",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "firebase-admin": "^9.4.1"
  },
  "devDependencies": {
    "heroku": "^7.47.3",
    "ts-node": "^9.0.0",
    "typescript": "^4.1.2",
    "@types/cors": "^2.8.8",
    "@types/express": "^4.17.9",
    "@types/node": "^14.14.10"
  }
}
```

#### Frontend

No further setup required in our frontend folder.

#### Root

##### `package.json`

Our root `package.json` will look like the following. We are using yarn workspaces as described [above](./lecture9#root) and the `heroku-postbuild` script will build both workspaces to prep them for push to remote server. (We discussed `yarn workspaces run build` [above](./lecture9#profit)) `heroku-postbuild` is a special command recognized by Heroku to allow you to customize the build process.

```json title="/package.json"
{
  "name": "songs-app",
  "private": true,
  "scripts": {
    "heroku-postbuild": "yarn workspaces run build"
  },
  "workspaces": ["backend", "frontend"],
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "devDependencies": {
    "heroku": "^7.47.3"
  }
}
```

:::note
The root `package.json` can have dependencies and yarn will install them with `yarn install` just like everything else. You will just need to run `yarn add -W <pkg_name>` since just using `yarn add` will show a warning message asking if you are sure about adding a dependency to the root. We add Heroku in this case to help with deployment!
:::

Read more about `heroku-postbuild` [here](https://devcenter.heroku.com/articles/nodejs-support#customizing-the-build-process).

##### `Procfile`

We will also have Procfile that tells Heroku what script to run to start the application. In this case we will be using the backend `node index.js` to start the backend listening for requests and serving the frontend assets from the `frontend/build` folder.

```bash title="Procfile"
web: yarn workspace backend start
```

Read more about the Heroku Procfile [here](https://devcenter.heroku.com/articles/procfile).

#### Deploy time

We will now show the series of commands to deploy to Heroku. We will be using Heroku Git to deploy.

```bash
yarn add heroku
git init
git add .
git commit -m "COMMIT MESSAGE"
yarn heroku login
yarn heroku create <optional project name>
git push heroku master
(optional) yarn heroku open
```

Visiting the URL should take you to the same application you had locally. Now you can share that link with your friends so they can visit your website too! Take a look at our deployed site here: [https://webdev-demo-fa20.herokuapp.com/](https://webdev-demo-fa20.herokuapp.com/) (If you have issues deploying feel free to submit this link for the attendance question, but please do come to [office hours](./introduction#when-are-office-hours) first!)

:::note
If you run into issues that the app isn't authorized to use authentication, go to your Firebase project on [firebase.google.com](https://firebase.google.com/) > Go to Console > [your project] > Authentication [on sidebar] > Sign-in Method > Authorized domains > Add Domain and enter the URL of your deployed site.
:::

:::info
In your final submission of your final project, we want you to follow these steps to deploy your app to Heroku and place the link in the `README.md`. If you prefer to deploy on another platform feel free but we do not guarantee we know how to debug any issues that come up.
:::
