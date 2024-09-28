const todos = require('../models/todo');

let idCounter = 1;

exports.createTodo = (req, res) => {
    const { title, completed } = req.body;
    const newTodo = { id: idCounter++, title, completed: completed || false };
    todos.push(newTodo);
    res.status(201).json(newTodo);
};

exports.getAllTodos = (req, res) => {
    res.json(todos);
};

exports.getTodoById = (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.json(todo);
};

exports.updateTodo = (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json({ message: 'Todo not found' });

    const { title, completed } = req.body;
    if (title) todo.title = title;
    if (completed !== undefined) todo.completed = completed;

    res.json(todo);
};

exports.deleteTodo = (req, res) => {
    const index = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Todo not found' });

    todos.splice(index, 1);
    res.status(204).send();
};
