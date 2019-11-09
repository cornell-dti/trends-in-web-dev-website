---
id: lecture9
title: Lecture 9 - Design Patterns
---

## Composition

### Syntactic Sugar for `props.children`

React Documentation is [here](https://reactjs.org/docs/composition-vs-inheritance.html#containment)

```jsx
function RedBackgroundContainer(props) {
  return (
    <div style={{ background: ‘red’ }}>
      <div>Hello</div>
      {props.children}
    </div>
  );
}

// somewhere else
<RedBackgroundContainer>
  <div>Stuff inside the container</div>
</RedBackgroundContainer>
```

## Different Dev & Production Env

- Create a different `.env` file for dev and production environment.
- Load different `.env` file for different environment.
- Add those `.env` files to `.gitignore`: For security reasons.

```bash
# .env.dev file
DB_SECRET=DEV

# .env.production file
DB_SECRET=PRODUCTION
```

## Using Routes

```javascript
// index.js
const express = require('express');
const gameRouter = require('./game');
const messageBoardRouter = require('./message-board');

const isProduction = process.env.NODE_ENV === 'production';
require('dotenv').config({
  path: isProduction ? '.env.production' : '.env.dev'
});

const app = express();

// WARINING: usually you should never send these kind of information to the user
// We do here to let you see that you are indeed using different config.
// Again, the .env files are not gitignore here simply because we want you to see the difference.
app.get('/', (_, resp) => resp.send(`DB_SECRET is ${process.env.DB_SECRET}\n`));

app.use('/game', gameRouter);
app.use('/msg-board', messageBoardRouter);

app.listen(8080, () => console.log('Server started.'));
```

```javascript
// game.js
const express = require('express');

const router = express.Router();

router.get('/guess-number', (req, resp) => {
  if (parseInt(req.query.num) === 42) {
    resp.send('Your guess is right.');
  } else {
    resp.send('Your guess is wrong.');
  }
});

// imaging there are a lot of other games...

module.exports = router;
```

```javascript
// message-board.js
const express = require('express');

const router = express.Router();

router.get('/', (_, resp) => resp.send([{ id: 1, content: 'hello world' }]));

// imaging there are a lot of other functionality of message board.

module.exports = router;
```

## Anti-patterns

- Spaghetti Code
- Premature Optimizations
- Magic Numbers
- Overengineering: DO NOT let this lecture destroy your codebase
