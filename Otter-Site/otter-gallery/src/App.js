import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [gifs, setGifs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGifs = async () => {
      try {
        const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
          params: {
            api_key: process.env.REACT_APP_GIPHY_API_KEY,
            q: 'otter',
            limit: 25,
            rating: 'G',
            lang: 'en'
          }
        });
        setGifs(response.data.data.map(gif => gif.images.original.url));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching gifs:', error);
        setLoading(false);
      }
    };

    fetchGifs();
  }, []);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % gifs.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + gifs.length) % gifs.length);
  };

  return (
    <div className="App">
      <h1>A site for Riri</h1>
      <p>I hope you enjoy, Alexa</p>
      <div className="gallery">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <img src={gifs[currentIndex]} alt="Otter" />
        )}
      </div>
      <div className="button-container">
        <button onClick={handlePrev} disabled={loading}>Previous</button>
        <button onClick={handleNext} disabled={loading}>Next</button>
      </div>
    </div>
  );
};

export default App;
