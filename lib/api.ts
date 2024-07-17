// lib/api.ts
import axios from 'axios';

const API_BASE_URL = 'https://localhost:7103/api';

export const loginUser = async (userName: string, password: string) => {
  const response = await axios.post(`${API_BASE_URL}/users/authenticate`, {
    userName,
    password,
  }, {
    withCredentials: true,
  });
  return response.data;
};

export const registerUser = async (userName: string, password: string) => {
  const response = await axios.post(`${API_BASE_URL}/users/register`, {
    userName,
    password,
  }, {
    withCredentials: true,
  });
  return response.data;
};

export const validateToken = async (token: string, userName: string) => {
    const response = await axios.post(`${API_BASE_URL}/users/validate-token`, {
      token,
      userName,
    }, {
        withCredentials: true,
      });
    return response.data;
  };