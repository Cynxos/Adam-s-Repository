import React, { useState } from 'react';
import './App.css';

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const handleVote = (index) => {
    const newLanguages = [...languages];
    newLanguages[index].votes += 1;
    setLanguages(newLanguages);
  };

  return (
    <div>
      <h1>Vote for your favorite language</h1>
      {languages.map((language, index) => (
        <div key={index}>
          <span>{language.name}: {language.votes}</span>
          <button onClick={() => handleVote(index)}>Vote</button>
        </div>
      ))}
    </div>
  );
}

export default App;