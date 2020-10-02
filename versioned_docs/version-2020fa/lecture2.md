---
id: lecture2
title: Lecture 2
---

[Lecture Video](https://drive.google.com/file/d/1A9MD8NEClykBYMwcoSywPNtGWR2VTVxy/view?usp=sharing)

[Lecture Slides](https://docs.google.com/presentation/d/1pusfE9Zhtzse3yjDCzS4N2Oei2XmhanHElnhYFxXuBA/edit?usp=sharing)

[Install Postman](https://www.postman.com/downloads/)

No assignment this week; enjoy your break!

## `tsconfig.json`

From now on, we will be using a `tsconfig.json` file within every Node project
we create (a recap on how to do that is below this section). Essentially, the
`tsconfig.json` is a file at the root of a Node project which indicates it is using TypeScript, and allows us to configure the TypeScript compiler. If you're more curious about how the file works, you can refer [to this link](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

```json
{
  "compilerOptions": {
    "target": "es6",
    "outDir": "./output",
    "lib": ["dom", "dom.iterable", "esnext"],
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "importsNotUsedAsValues": "error",
    "module": "commonjs",
    "moduleResolution": "node",
    "resolveJsonModule": true
  },
  "types": ["node"],
  "include": ["./*"],
  "exclude": []
}
```

## How to set up a Node project

### Initializing a Node project

Let's dive deeper into what happens when you setup a Node project using Yarn.

Navigate to an empty folder where you want your project to be located. I will assume this folder is called `helloworld`.

Run `yarn init` in this folder on the terminal. (Use `cd` to navigate to you `helloworld` folder in terminal)

:::note
Note that we are using `yarn init` rather than `npm init`. We will be using Yarn as our
Node package manager in its class (this is used in production at many companies like Facebook!), and its corresponding commands for installing packages as well.
:::

Upon running `yarn init`, and answering the questions as seen in the previous lecture, we now need to add our dependencies for the project and scripts to start it.

### Installing Dependencies

Node projects don't come with every possible dependency right out of the box. We
will add these with Yarn by using `yarn add <pkg_name>` (which is the equivalent
of `npm install <pkg_name> --save`, but remember we are using Yarn.)

Let's try installing a package. In the first assignment we asked you to use `express`. Install `express` by running:

`yarn add express`

After installation completes, take a look at your `package.json`. We named our project "test".

```json
{
  "name": "test",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

Notice that `express` was added to our dependencies. Now `express` is available for you to use in your project!

Every time you add a dependency with `yarn add <pkg_name>`, `<pkg_name>` will be added to your dependencies in `package.json` if it can be found. It will also be added to `node_modules/`.

Take a look inside your `node_modules` folder. This is where all your packages will be installed. Notice that even though you just installed one package, multiple packages are in `package.json`. This is because `express` itself has several of its own dependencies that also got installed.

:::tip
You might see red squiggly lines when working with TypeScript files about missing
"declaration files". This means you need to install the corresponding type packages
for each dependency you work with in TypeScript, as it gives you some predefined
type definitions to work with, which makes your life easier! You can install these
using `yarn add @types/<pkg_name>`
:::

You can find more packages to use on [npmjs.com](https://www.npmjs.com/).

### **Don't Submit `node_modules`!!**

`node_modules` can potentially hundreds of megabytes of data on packages you installed. It is important to never submit this with your assignment or push it up to any remote repositories such as GitHub. Before submitting an assignment, remember to remove `node_modules` from the folder, then zip it and submit the zip file. _You will be penalized if `node_modules` is submitted_. Don't worry, we will be able to recover your dependencies simply by running `yarn install`.

### Removing packages

Let's say you made a typo installing `express` and you instead ran

`yarn add experss`

Your `package.json` should look like this:

```json
{
  "name": "test",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "express": "^4.17.1",
    "experss": ""
  }
}
```

Unfortunately, some malicious developer capitalized on this typo mistake and made `experss` an actual package. How do you remove experss?

There are two ways. First, you can just run `yarn remove experss`. This will remove `experss` from your `package.json` and your `node_modules` folder.

### `yarn install`

Another way is to delete `experss` manually from your `package.json`. (Just delete the line that has `experss`). This won't actually get rid of the package from your `node_modules`.

To update your `node_modules`, first delete your `node_modules` folder and then run

`yarn install`

This fetches all your dependencies again based on your `package.json` and since `experss` is no longer there, it is not installed.

## More Express and HTTP Methods

Let's go more in-depth with using Express with HTTP methods beyond
`GET`, TypeScript types, and request bodies.

We'll also introduce a tool called Postman, which makes it much easier to playtest our
backend endpoints.

### The Example

Say we're making some API endpoints for a music streaming service. Each song has its own name and a rating. We want to be able to access all the songs through a `GET` endpoint, add new songs through a `POST` endpoint, update ratings through a `POST` endpoint, and remove a certain song by its name using a `DELETE` endpoint.

### Node Project Setup

**Before we begin, make sure to put the `tsconfig.json` file with the contents at the top of this page in the root of your Node project folder**.

As described earlier in this lecture, let's do a standard `yarn init` and answer the questions accordingly. In the same directory, let's install dependencies with the following commands we need to develop this Express and TypeScript project:

- `yarn add express`
- `yarn add typescript @types/node @types/express --dev`

We install TypeScript and the type definitions for Node.js and Express as dev dependencies because we are not exporting them, but simply using them in our `index.ts`.

Let's go back to `package.json` for a moment in order to set up a script to run
our Express web server. It should currently look like this:

```json
{
  "name": "lec2demo",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "@types/express": "^4.17.8",
    "@types/node": "^14.11.2",
    "typescript": "^4.0.3"
  }
}
```

Let's add a `script` field with two commands: one to compile our TypeScript file for the server, and one to compile and run the server using Node. You can update the `package.json` to include a script with these commands:

```json
{
  "name": "lec2demo",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "tsc": "tsc -p tsconfig.json",
    "start": "yarn tsc && node output/index"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "@types/express": "^4.17.8",
    "@types/node": "^14.11.2",
    "typescript": "^4.0.3"
  }
}
```

You can run each of these scripts using `yarn tsc` and `yarn start`. None of these commands should work yet though, since we haven't even started writing `index.ts`!

Note that you can name these scripts whatever you want: for example, you could have called `"start"` `"pizza"` and used `yarn pizza`. Also, `yarn start` first runs `yarn tsc` (through the use of the `&&`), and if this passes without error, we then run `node output/index` on the JS file produced by the TypeScript compiler to launch the server.

### GET Request

Create a new file called `index.ts` (note the `.ts`: JavaScript files use `.js`, but remember we're using TypeScript) and add the following:

```ts title="index.ts"
const express = require('express');

const app = express();

app.use(express.json());

type songtype = {
  name: string;
  rating: number;
};

let songs: songtype[] = [];

app.get('/getSongs', (req, res) => {
  res.send(songs);
});

app.listen(8080, () => console.log('App started!'));
```

Much of this should be familiar. The first line loads in the `express` dependency and the second line initializes `express`.

`app.use(express.json())` allows us to make use of request body parsing in Express
later (in the `/addSong` endpoint). Don't worry too much about what exactly this does,
but feel free to search and learn more.

The `songtype` type definition allows us to outline what we expect the metadata for
each song in the system should be. This is our first powerful use of TypeScript in
web development: if data doesn't conform to this spec, we'll immediately know since
TypeScript's compiler will give an error, saving us a lot of debug time and headaches.

`app.get` specifies that any `GET` requests sent to the endpoint `/getSongs` will send back the array of songs, which is initially the empty array `[]`.

Lastly, `app.listen` starts the server on port 8080 asking it to listen for requests.

Let's test these endpoints by running `yarn start`.

`App started!` should be printed on the terminal showing that the port is up and running and listening for requests.

Use your web browser to navigate to `localhost:8080/getSongs`. You should see the value of `songs`, the empty array `[]`, on the page.

You can terminate the running of the script using <kbd>Ctrl</kbd> + <kbd>C</kbd>.

### Postman

Instead of always going to the endpoint in the browser, a robust way of testing our endpoints is to use Postman.

Postman is a software that allows you to simulate requests that could be sent by a user to your backend. It is useful for testing and ensuring that the behavior of your requests (including necessary headers) is what you expect.

Download Postman [here](https://www.postman.com/downloads/).

Once you have Postman set up, make a request to the `/getSongs` endpoint by setting the request type as `GET` and the url as `localhost:8080/getSongs`. You should see `[]` in the response body.

### POST Request

Usually when you want to send a `POST` request you also want to send information with it. Situationally, you want to do this using request bodies rather than query parameters.

Add the following to your `index.ts` file after your `app.get` call:

```js title="index.ts"
app.post('/addSong', (req, res) => {
  const song: songtype = { name: req.body.name, rating: req.body.rating };
  console.log(song);
  songs.push(song);
  res.send(`Song ${req.body.name} added!`);
});
```

Previously, we may have considered using query parameters for sending data for the backend. There's nothing wrong with that; we could have used `/addSong?name=Despacito&rating=5`. However, this can lead to extremely long URLs, and limit us from sending more complicated data. That's where **request bodies** come in handy. We can instead send request data in JSON format to the backend, allowing us to use the data more easily and integrate it seamlessly with our backend (which happens to be in TypeScript, so we can easily deal with it).

This tells `express` to listen for `POST` requests at endpoint `/addSong`. `req.body` is a JS object, and we access its properties `req.body.name` and `req.body.rating` to add a new song to our array of songs. We also make sure that this is compatible with a `songtype`: after all, the rating of a song can't be a word, and the TypeScript compiler will yell at us if we mess this up!

However, we can't test request bodies quite as easily through the browser; we can check that this endpoint is working using Postman. Set the request type to `POST` and URL as `localhost:8080/addSong`. To send a request body, first go to Headers and add a new key `Content-Type` with value `application/json`. This says we are sending JSON input (essentially, an object or dictionary) in our request body. In the Body section, select the raw radio button and enter the following in the text field:

```json
{
  "name": "Despacito",
  "rating": 5
}
```

We will be sending `name` with a value of `"Despacito"` and `rating` with a value of `5` in the request body.

Sending this request, you should see the corresponding song printed out to the console by the endpoint.

Now, let's create another `POST` endpoint to update a song's rating. This will also use a request body with just a `name` field, which should match the song we want to update.

```ts title="index.ts"
app.post('/updateRating', (req, res) => {
  for (const song of songs) {
    if (song.name === req.body.name) {
      song.rating = req.body.rating;
    }
  }
  res.send('Rating updated!');
  console.log(songs);
});
```

### DELETE Request

When creating APIs, we use the `DELETE` request method to quite simply delete a specific resource. This should be pretty straightforward: we simply take the name of the song to delete through the request body, and create a new version of the songs without the specified song. We then send text to the requester that it was deleted.

```ts title="index.ts"
app.delete('/removeSong', (req, res) => {
  const newSongs = [];
  for (let song of songs) {
    if (song.name !== req.body.name) {
      newSongs.push(song);
    }
  }
  songs = newSongs;
  res.send(`Song ${req.body.name} deleted!`);
});
```

And with that, we're done!

## Intro to Databases and Firebase

The music streaming API we just made "works": we can add songs and then get them while running the Express server. But it has one fatal flaw: try stopping the server and then running it again. You'll see that all the music is gone! We need some kind of persistent storage for this data: through—you guessed it—a database.

### Why do we need a database for our backend?

- Data stored within Node.js is per instance
- Most applications require persistence
- Data analysis
- Performant data location
- Offloading unneeded data from memory

### MySQL + Relational Databases

- Stores data in tables, utilizing rows and tables.
- Is relational (think a tuple)
- Has a schema

### NoSQL and Firestore

We will focus on NoSQL

- Many NoSQL implementations are schema-less or have a partial schema
- Firestore is a cloud-hosted NoSQL database
- Very flexible and can be used with most popular languages
- Uses documents to store data
- Efficient querying for data

### SQL vs NoSQL

- SQL databases have a predefined schema, whereas NoSQL databases can abide to any structure you want it to.
- NoSQL databases are better suited for large sets of data, but not for complex queries.
- SQL databases tend to be less expensive for smaller datasets, but also less flexible.
- SQL has strong consistency whereas NoSQL has eventual consistency (i.e. there may be some delay in getting the response back)
- SQL is vertically scalable (need more computing power on one machine to store more data) while NoSQL is horizontally scalable (can distribute storage and compute power on multiple machines)

### What is Firebase?

- Firebase is a Backend as a Service (BaaS) offered by Google
  - Allows you to store data
  - Host websites
  - Authentication
- NoSQL DB
  - Not only SQL
  - Non relational

### Why Firebase?

- Real-time operations
- Firebase Authentication
- Built-in analytics
- Also supports hosting/deployment
- Integration with other Google services
- Structure we’re familiar with!
