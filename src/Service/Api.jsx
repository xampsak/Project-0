import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // 🔁 Replace with your actual backend API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
