import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const login = async (credentials) => {
  const response = await axios.post(${API_URL}/login, credentials);
  localStorage.setItem('token', response.data.token);
  return response.data;
};

export const register = async (userDetails) => {
  const response = await axios.post(${API_URL}/register, userDetails);
  return response.data;
};