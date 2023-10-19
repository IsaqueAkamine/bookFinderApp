import axios from 'axios';

const baseURL = 'https://www.googleapis.com/books/v1';

const api = axios.create({
  baseURL,
});

export default api;
