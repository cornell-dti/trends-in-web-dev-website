---
id: lecture6
title: Lecture 6 - Full Stack
---

## Why do we even need a backend

- Both run NPM packages
  - Could’ve done A2 with only A4 front-end
- Value in backend
  - Databases
  - Computing (client runs on your PC, server somewhere else)
  - Security (only backend can truly enforce it)

## How to Combine Frontend and backend

### Setup

Suppose your server is running on `http://localhost:5000/`, then add
this line to your `package.json`: `"proxy": "http://localhost:5000/",`. Now you
can directly all backend endpoint like `/api/give-me-data` without `localhost`
prefix.

### Example Code

```jsx
import React, { Component } from 'react';

export default class FetchComponent extends Component {
  // The data from the server is not immediately available when the component
  // mounts. Therefore, we need to give it some dummy or special state so our
  // component won't crash.
  state = {
    foundTaco: false,
    randomTaco: {},
  }

  componentDidMount = () => {
    fetch('http://taco-randomizer.herokuapp.com/random/', { method: 'GET' })
      // The promise must be turned into a json.
      .then(response => response.json())
      // Change the state with the data we fetched from backend.
      .then(responseJSON => this.setState({
        foundTaco: true, randomTaco: responseJSON,
      }));
  }

  render() {
    const { foundTaco, randomTaco } = this.state;
    return (
      <div>
        <h1>Randomly Generated Taco Ingredients</h1>
        {foundTaco && (
          <div>
            <p>Condiment: {randomTaco.condiment.name}</p>
            <p>Mixin: {randomTaco.mixin.name}</p>
            <p>Base layer: {randomTaco.base_layer.name}</p>
            <p>Seasoning: {randomTaco.seasoning.name}</p>
            <p>Shell: {randomTaco.shell.name}</p>
          </div>
        )}
      </div>
    );
  }
}
```
