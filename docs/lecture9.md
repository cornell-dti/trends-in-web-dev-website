---
id: lecture9
title: Lecture 9 - Design Patterns
---

## Component Communication

### Bad Example 1: All-in-one

```jsx
import React, { Component } from 'react';

export default class BadMessageComponent extends Component {
  state = { messages: [], newMessage: '' };

  onNewMessageChange = e =>
    this.setState({ newMessage: e.currentTarget.value });

  onSubmitNew = () =>
    this.setState(({ messages, newMessage }) => ({
      messages: [...messages, newMessage],
      newMessage: ''
    }));

  render() {
    return (
      <div>
        <h3>Bad Message Component 1</h3>
        <div>
          {this.state.messages.map(msg => (
            <div>{msg}</div>
          ))}
        </div>
        <div>
          <h4>Adder</h4>
          <div>
            <input
              value={this.state.newMessage}
              onChange={this.onNewMessageChange}
            />
            <button onClick={this.onSubmitNew}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}
```

### Bad Example 2: Using Ref

```jsx
import React, { Component } from 'react';

class List extends Component {
  state = { messageList: [] };
  addMessage = msg =>
    this.setState(({ messageList }) => ({
      messageList: [...messageList, msg]
    }));
  render() {
    return (
      <div>
        {this.state.messageList.map(msg => (
          <div>{msg}</div>
        ))}
      </div>
    );
  }
}

class Adder extends Component {
  state = { newMessage: '' };
  onNewMessageChange = e =>
    this.setState({ newMessage: e.currentTarget.value });
  onSubmitNew = () => {
    this.props.listRef.current.addMessage(this.state.newMessage);
    this.setState({ newMessage: '' });
  };
  render() {
    return (
      <div>
        <h4>Adder</h4>
        <div>
          <input
            value={this.state.newMessage}
            onChange={this.onNewMessageChange}
          />
          <button onClick={this.onSubmitNew}>Submit</button>
        </div>
      </div>
    );
  }
}

export default class BadMessageComponent2 extends Component {
  listRef = React.createRef();
  render() {
    return (
      <div>
        <h3>Bad Message Component 2</h3>
        <List ref={this.listRef} />
        <Adder listRef={this.listRef} />
      </div>
    );
  }
}
```

### Good Example: Lifting State Up

```jsx
import React, { Component } from 'react';

const List = ({ messages }) => (
  <div>
    {messages.map(msg => (
      <div>{msg}</div>
    ))}
  </div>
);

export class MessageAdder extends Component {
  state = { newMessage: '' };

  onNewMessageChange = e =>
    this.setState({ newMessage: e.currentTarget.value });
  buttonOnClick = () => {
    this.props.onAdd(this.state.newMessage);
    this.setState({ newMessage: '' });
  };

  render() {
    return (
      <div>
        <h4>Adder</h4>
        <div>
          <input
            value={this.state.newMessage}
            onChange={this.onNewMessageChange}
          />
          <button onClick={this.buttonOnClick}>Submit</button>
        </div>
      </div>
    );
  }
}

export default class LiftingStateUp extends Component {
  state = { messages: [] };

  onAdd = msg =>
    this.setState(({ messages }) => ({ messages: [...messages, msg] }));

  render() {
    return (
      <div>
        <h3>Lifting State Up</h3>
        <List messages={this.state.messages} />
        <MessageAdder onAdd={this.onAdd} />
      </div>
    );
  }
}
```

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

## Favor Composition Over Inheritance

### Bad Example: Using Inheritance

```jsx
class TextEditor extends Component { ... }

class MarkdownTextEditor extends TextEditor {
  render() {
    // ??? what should we do?
    // call super.render()?
  }
}
```

### Good Example: Using Composition

```jsx
class MarkdownTextEditor extends Component {
  // some additional helper methods

  render() {
    return (
      <div>
        {/* some of the customization code */}
        <TextEditor onEdit={...} />
      </div>
    );
  }
}
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
