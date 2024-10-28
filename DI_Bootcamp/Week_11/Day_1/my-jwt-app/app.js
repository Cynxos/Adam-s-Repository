const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authenticateJWT = require('./middleware/auth');
const authRouter = require('./routes/auth');

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/auth', authRouter);

app.get('/protected', authenticateJWT, (req, res) => {
    res.json({ message: 'This is a protected route' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

