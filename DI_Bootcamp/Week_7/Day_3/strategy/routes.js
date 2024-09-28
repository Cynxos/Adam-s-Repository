const express = require('express');
const router = express.Router();
const { grid, players, obstacles, isValidMove, checkWinner } = require('./game');

router.post('/register', (req, res) => {
});

router.post('/login', (req, res) => {
});

router.post('/start-game', (req, res) => {
});

router.post('/move', (req, res) => {
});

router.get('/check-winner', (req, res) => {
});

module.exports = router;
