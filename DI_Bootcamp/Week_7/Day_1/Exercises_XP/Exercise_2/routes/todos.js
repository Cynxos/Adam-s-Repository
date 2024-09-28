const express = require('express');
const router = express.Router();

let todos = [];

router.get('/', (req, res) => {
  res.json(todos);
});

router.post('/', (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedTodo = req.body;
  todos = todos.map(todo => (todo.id === id ? updatedTodo : todo));
  res.json(updatedTodo);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id !== id);
  res.status(204).send();
});

module.exports = router;
