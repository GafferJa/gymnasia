// src/API.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000', // update this if hosted
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // needed if using httpOnly cookies
});

export default API;
