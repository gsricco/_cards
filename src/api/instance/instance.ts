import axios from 'axios';
import rateLimit from 'axios-rate-limit';

export const instance = rateLimit(
  axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:7542/2.0/',
    withCredentials: true,
  }),
  {
    maxRequests: 1,
    perMilliseconds: 500,
    maxRPS: 1,
  },
);
