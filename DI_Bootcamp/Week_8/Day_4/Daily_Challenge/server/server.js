const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.json());

app.post('/api/world', (req, res) => {
  console.log('Request body:', req.body);
  res.send(`I received your POST request. This is what you sent me: ${req.body.message}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
