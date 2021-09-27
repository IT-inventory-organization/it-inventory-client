import axios from 'axios';

const server = axios.create({
  baseURL: process.env.APP_API_URL
});

export default server;