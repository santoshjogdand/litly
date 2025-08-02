// src/utils/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://litly.vercel.app/api/v1',
  withCredentials: true, // ⬅️ Important for cookies
});

export default axiosInstance;
