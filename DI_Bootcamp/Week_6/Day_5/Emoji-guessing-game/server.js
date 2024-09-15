const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const emojis = [
    { emoji: '😀', name: 'grinning face' },
    { emoji: '😂', name: 'face with tears of joy' },
    { emoji: '😍', name: 'smiling face with heart-eyes' },
  ];
  
  function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const correctEmoji = emojis[randomIndex];
    const options = [correctEmoji.name];
  
    while (options.length < 4) {
      const randomOption = emojis[Math.floor(Math.random() * emojis.length)].name;
      if (!options.includes(randomOption)) {
        options.push(randomOption);
      }
    }
  
    return {
      emoji: correctEmoji.emoji,
      options: options.sort(() => Math.random() - 0.5),
      correct: correctEmoji.name
    };
  }
  
  app.get('/game', (req, res) => {
    const gameData = getRandomEmoji();
    res.json(gameData);
  });
  
  let score = 0;

app.post('/guess', (req, res) => {
  const { guess, correct } = req.body;
  if (guess === correct) {
    score++;
    res.json({ message: 'Correct!', score });
  } else {
    res.json({ message: 'Incorrect!', score });
  }
});
