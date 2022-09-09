import axios from 'axios';
import rateLimit from 'axios-rate-limit';

export const instance = rateLimit(
  axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
  }),
  {
    maxRequests: 1,
    perMilliseconds: 500,
    maxRPS: 1,
  },
);

export const instanceHeroku = rateLimit(
  axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
  }),
  {
    maxRequests: 1,
    perMilliseconds: 500,
    maxRPS: 1,
  },
);
