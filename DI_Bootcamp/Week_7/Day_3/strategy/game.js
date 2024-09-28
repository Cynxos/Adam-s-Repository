const grid = Array(10).fill().map(() => Array(10).fill(null));

const players = {
  player1: { x: 0, y: 0, base: { x: 0, y: 0 } },
  player2: { x: 9, y: 9, base: { x: 9, y: 9 } }
};

const obstacles = [
  { x: 4, y: 4 },
  { x: 5, y: 5 }
];

function isValidMove(player, direction) {
}

function checkWinner() {
}

module.exports = { grid, players, obstacles, isValidMove, checkWinner };
