// src/services/AuthService.ts
import axios from 'axios';

const API_URL = 'https://api.fulfillmentbridge.com/auth'; // modifie si besoin

export const register = (data: {
  name: string;
  email: string;
  password: string;
}) => {
  return axios.post(`${API_URL}/signup`, {
    name: data.name,
    email: data.email,
    password: data.password,
  });
};
