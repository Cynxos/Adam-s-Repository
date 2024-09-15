async function fetchGameData() {
    const response = await fetch('/game');
    const data = await response.json();
    displayGame(data);
  }

  function displayGame(data) {
    const gameDiv = document.getElementById('game');
    gameDiv.innerHTML = `
      <p>${data.emoji}</p>
      ${data.options.map(option => `<button onclick="submitGuess('${option}', '${data.correct}')">${option}</button>`).join('')}
    `;
  }

  async function submitGuess(guess, correct) {
    const response = await fetch('/guess', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ guess, correct })
    });
    const result = await response.json();
    alert(result.message);
    fetchGameData();
  }

  fetchGameData();