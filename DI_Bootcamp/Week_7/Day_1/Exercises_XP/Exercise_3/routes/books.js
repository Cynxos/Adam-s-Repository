const express = require('express');
const router = express.Router();

let books = [];

router.get('/', (req, res) => {
  res.json(books);
});

router.post('/', (req, res) => {
  const book = req.body;
  books.push(book);
  res.status(201).json(book);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedBook = req.body;
  books = books.map(book => (book.id === id ? updatedBook : book));
  res.json(updatedBook);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  books = books.filter(book => book.id !== id);
  res.status(204).send();
});

module.exports = router;
