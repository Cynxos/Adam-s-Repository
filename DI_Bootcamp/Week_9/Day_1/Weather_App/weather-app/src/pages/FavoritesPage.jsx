import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleRemoveFavorite = (city) => {
    const updatedFavorites = favorites.filter(fav => fav.city !== city);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <div className="container">
      <h2>Favorites</h2>
      {favorites.map((fav, index) => (
        <Card key={index} className="card">
          <CardContent>
            <Typography variant="h5">{fav.city}</Typography>
            <Typography variant="h6">{fav.weather.WeatherText}</Typography>
            <Typography variant="h6">{fav.weather.Temperature.Metric.Value}°C</Typography>
            <Button variant="contained" color="secondary" onClick={() => handleRemoveFavorite(fav.city)}>Remove</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default FavoritesPage;
