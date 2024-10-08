import React from 'react';
import { useSelector } from 'react-redux';
import './AgeDisplay.css';

const AgeDisplay = () => {
  const { age, loading } = useSelector((state) => state.age);

  return (
    <div className="age-display">
      {loading ? <div className="spinner"></div> : <h1>Age: {age}</h1>}
    </div>
  );
};

export default AgeDisplay;
