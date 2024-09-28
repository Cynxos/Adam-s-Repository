const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const tasksFilePath = path.join(__dirname, '../tasks.json');

const readTasks = () => {
    const data = fs.readFileSync(tasksFilePath);
    return JSON.parse(data);
};

const writeTasks = (tasks) => {
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
};

router.get('/', (req, res) => {
    const tasks = readTasks();
    res.json(tasks);
});

router.get('/:id', (req, res) => {
    const tasks = readTasks();
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) {
        return res.status(404).send('Task not found');
    }
    res.json(task);
});

router.post('/', (req, res) => {
    const tasks = readTasks();
    const newTask = {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        ...req.body
    };
    tasks.push(newTask);
    writeTasks(tasks);
    res.status(201).json(newTask);
});

router.put('/:id', (req, res) => {
    const tasks = readTasks();
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex === -1) {
        return res.status(404).send('Task not found');
    }
    tasks[taskIndex] = { id: parseInt(req.params.id), ...req.body };
    writeTasks(tasks);
    res.json(tasks[taskIndex]);
});

router.delete('/:id', (req, res) => {
    const tasks = readTasks();
    const newTasks = tasks.filter(t => t.id !== parseInt(req.params.id));
    if (tasks.length === newTasks.length) {
        return res.status(404).send('Task not found');
    }
    writeTasks(newTasks);
    res.status(204).send();
});

module.exports = router;

router.post('/', (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).send('Title and description are required');
    }
    const tasks = readTasks();
    const newTask = {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        title,
        description
    };
    tasks.push(newTask);
    writeTasks(tasks);
    res.status(201).json(newTask);
});

router.put('/:id', (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).send('Title and description are required');
    }
    const tasks = readTasks();
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex === -1) {
        return res.status(404).send('Task not found');
    }
    tasks[taskIndex] = { id: parseInt(req.params.id), title, description };
    writeTasks(tasks);
    res.json(tasks[taskIndex]);
});
