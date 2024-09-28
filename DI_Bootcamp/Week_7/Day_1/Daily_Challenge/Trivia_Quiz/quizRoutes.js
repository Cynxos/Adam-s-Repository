const express = require('express');
const router = express.Router();
const questions = require('./quizModel');

let currentQuestionIndex = 0;
let score = 0;

router.get('/quiz', (req, res) => {
  if (currentQuestionIndex < questions.length) {
    const { question, options } = questions[currentQuestionIndex];
    res.json({ question, options });
  } else {
    res.redirect('/quiz/score');
  }
});

router.post('/quiz', (req, res) => {
  const userAnswer = req.body.answer;
  if (userAnswer === questions[currentQuestionIndex].answer) {
    score++;
    res.send('Correct!');
  } else {
    res.send('Incorrect!');
  }
  currentQuestionIndex++;
  res.redirect('/quiz');
});

router.get('/quiz/score', (req, res) => {
  res.send(`Your final score is ${score} out of ${questions.length}`);
});

module.exports = router;
