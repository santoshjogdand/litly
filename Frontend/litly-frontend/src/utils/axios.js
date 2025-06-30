// src/utils/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:80/api/v1',
  withCredentials: true, // ⬅️ Important for cookies
});

export default axiosInstance;
