import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';

const API_KEY = '1C4a2Aq9lgx69n8XGvjDaXiG4R7jxsyA';

function WeatherPage() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const locationResponse = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/search`, {
        params: { apikey: API_KEY, q: city }
      });

      if (locationResponse.data.length === 0) {
        setError('City not found');
        return;
      }

      const locationKey = locationResponse.data[0].Key;

      const weatherResponse = await axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${locationKey}`, {
        params: { apikey: API_KEY }
      });

      setWeather(weatherResponse.data[0]);
      setError('');
    } catch (error) {
      console.error(error);
      setError('An error occurred while fetching the weather data');
    }
  };

  const handleAddToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const newFavorite = { city, weather };
    localStorage.setItem('favorites', JSON.stringify([...favorites, newFavorite]));
  };

  return (
    <div className="container">
      <TextField label="City" value={city} onChange={(e) => setCity(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>
      {error && <Typography color="error">{error}</Typography>}
      {weather && (
        <Card className="card">
          <CardContent>
            <Typography variant="h5">{weather.WeatherText}</Typography>
            <Typography variant="h6">{weather.Temperature.Metric.Value}°C</Typography>
            <Button variant="contained" color="secondary" onClick={handleAddToFavorites}>Add to Favorites</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default WeatherPage;
