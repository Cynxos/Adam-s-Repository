const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const userRoutes = require('./routes/userRoutes');

app.use('/api', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
})

const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
