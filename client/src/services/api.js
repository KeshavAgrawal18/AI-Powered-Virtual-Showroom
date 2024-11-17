import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchRecommendations = async (preferences) => {
  const response = await axios.post(${API_URL}/recommend, preferences);
  return response.data;
};