const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const postRoutes = require('./routes/posts');
app.use('/posts', postRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
