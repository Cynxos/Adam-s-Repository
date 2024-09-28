const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const usersFile = 'users.json';

if (!fs.existsSync(usersFile)) {
    fs.writeFileSync(usersFile, JSON.stringify([]));
}

const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const users = JSON.parse(fs.readFileSync(usersFile));
    users.push({ id: users.length + 1, username, password: hashedPassword });
    fs.writeFileSync(usersFile, JSON.stringify(users));
    res.status(201).send('User registered');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const users = JSON.parse(fs.readFileSync(usersFile));
    const user = users.find(u => u.username === username);
    if (user && await bcrypt.compare(password, user.password)) {
        res.send('Login successful');
    } else {
        res.status(401).send('Invalid credentials');
    }
});

router.get('/users', (req, res) => {
    const users = JSON.parse(fs.readFileSync(usersFile));
    res.json(users);
});

router.get('/users/:id', (req, res) => {
    const users = JSON.parse(fs.readFileSync(usersFile));
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

router.put('/users/:id', (req, res) => {
    const users = JSON.parse(fs.readFileSync(usersFile));
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...req.body };
        fs.writeFileSync(usersFile, JSON.stringify(users));
        res.send('User updated');
    } else {
        res.status(404).send('User not found');
    }
});

app.use('/api', router);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
