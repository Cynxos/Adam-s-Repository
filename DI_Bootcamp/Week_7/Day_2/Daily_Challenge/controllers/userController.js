const bcrypt = require('bcryptjs');
const { users, hashpwd } = require('../models/userModel');

exports.register = async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    res.status(201).send('User registered successfully');
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = hashpwd.find(user => user.username === username);
    if (user && await bcrypt.compare(password, user.password)) {
        res.status(200).send('Login successful');
    } else {
        res.status(401).send('Invalid credentials');
    }
};

exports.getAllUsers = (req, res) => {
    res.status(200).json(users);
};

exports.getUserById = (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id));
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).send('User not found');
    }
};

exports.updateUser = (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id));
    if (user) {
        res.status(200).send('User updated successfully');
    } else {
        res.status(404).send('User not found');
    }
};
