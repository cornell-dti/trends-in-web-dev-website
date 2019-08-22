---
id: lecture2
title: Lecture 2 - Back End Web Development
---

## Example Code

```javascript
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('This is the homepage.');
});

app.get('/api/hello-world', (req, res) => {
  res.json({ hello: 'world' });
});

app.post('/api/flip-first-last-name', (req, res) => {
  console.log(req.body);
  const { firstName, lastName } = req.body;
  res.json({ firstName: lastName, lastName: firstName });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
```
