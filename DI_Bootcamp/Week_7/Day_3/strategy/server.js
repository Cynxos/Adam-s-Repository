const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const routes = require('./routes');
app.use('/', routes);

app.get('/', (req, res) => {
    res.send('Welcome to the Turn-Based Strategy Game!');
  });
  