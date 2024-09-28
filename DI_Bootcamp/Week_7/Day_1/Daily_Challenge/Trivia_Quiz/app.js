const express = require('express');
const app = express();
const port = 3000;
const quizRoutes = require('./quizRoutes');

app.use(express.json());
app.use(express.static('public'));
app.use('/', quizRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
