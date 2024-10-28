const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const users = []; 

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { username, password: hashedPassword };
    users.push(user);
    const token = jwt.sign({ username: username }, 'secret_key', { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true }).status(201).json({ message: 'User registered', token });
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }
    const user = users.find(user => user.username === username);
    if (user && await bcrypt.compare(password, user.password)) {
        const accessToken = jwt.sign({ username: username }, 'access_secret_key', { expiresIn: '15m' });
        const refreshToken = jwt.sign({ username: username }, 'refresh_secret_key', { expiresIn: '7d' });
        res.cookie('accessToken', accessToken, { httpOnly: true });
        res.cookie('refreshToken', refreshToken, { httpOnly: true });
        res.json({ message: 'User logged in', accessToken, refreshToken });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

router.post('/logout', (req, res) => {
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    res.json({ message: 'Logged out' });
});

router.post('/refresh', (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
        return res.sendStatus(401);
    }
    jwt.verify(refreshToken, 'refresh_secret_key', (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        const newAccessToken = jwt.sign({ username: user.username }, 'access_secret_key', { expiresIn: '15m' });
        res.cookie('accessToken', newAccessToken, { httpOnly: true });
        res.json({ accessToken: newAccessToken });
    });
});

module.exports = router;
