import axios from 'axios';

export const fetchData = async () => {
  const response = await axios.get('API_URL_HERE');
  return response.data;
};
