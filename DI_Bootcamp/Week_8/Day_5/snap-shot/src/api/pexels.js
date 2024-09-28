const API_KEY = 'KoDg3wIYzMW1faYtcDWzFQuD4KOEDJugH4r6LHTzK6uwo1KpCpklqmNm';
const BASE_URL = 'https://api.pexels.com/v1/';

export const fetchImages = async (query) => {
  const response = await fetch(`${BASE_URL}search?query=${query}&per_page=30`, {
    headers: {
      Authorization: API_KEY,
    },
  });
  const data = await response.json();
  return data.photos;
};