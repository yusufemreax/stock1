import { validateToken } from './api';

const TOKEN_KEY = 'authToken';
const USER_NAME_KEY = 'userName';

export const setToken = (token: string, userName: string) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_NAME_KEY, userName);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const getUserName = () => {
  return localStorage.getItem(USER_NAME_KEY);
};

export const isAuthenticated = async () => {
  const token = getToken();
  const userName = getUserName();
  if (!token || !userName) {
    return false;
  }
  try {
    const validToken = await validateToken(token, userName);
    return !!validToken;
  } catch (error) {
    console.error('Token validation failed', error);
    return false;
  }
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_NAME_KEY);
};
