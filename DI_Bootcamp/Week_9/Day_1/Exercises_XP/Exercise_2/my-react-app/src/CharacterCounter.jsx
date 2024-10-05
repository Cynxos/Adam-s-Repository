import React, { useRef, useState } from 'react';
import './App.css';

const CharacterCounter = () => {
  const inputRef = useRef(null);
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = () => {
    setCharCount(inputRef.current.value.length);
  };

  return (
    <div className="container">
      <input
        type="text"
        ref={inputRef}
        onInput={handleInputChange}
        placeholder="Type something..."
        className="text-input"
      />
      <p className="counter">Character Count: {charCount}</p>
    </div>
  );
};

export default CharacterCounter;
