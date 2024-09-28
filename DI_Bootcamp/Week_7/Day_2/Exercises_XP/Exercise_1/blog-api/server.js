const express = require('express');
const app = express();
const port = 3000;
const postRoutes = require('./server/routes/posts');

app.use(express.json());
app.use('/api', postRoutes);

app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server error' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
