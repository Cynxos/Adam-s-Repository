document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
  
    for (let i = 0; i < 100; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      gameBoard.appendChild(cell);
    }
  });
  
  function makeMove(direction) {
    fetch('/move', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ direction })
    })
    .then(response => response.json())
    .then(data => {
    });
  }
  
  function updateUI() {
  }
  
  document.addEventListener('keydown', (event) => {
    const direction = getDirectionFromKey(event.key);
    makeMove(direction);
  });
  
  function getDirectionFromKey(key) {
    switch (key) {
      case 'ArrowUp': return 'up';
      case 'ArrowDown': return 'down';
      case 'ArrowLeft': return 'left';
      case 'ArrowRight': return 'right';
    }
  }
  