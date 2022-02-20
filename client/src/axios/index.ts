import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/' : 'http://www.ranja.co.kr/api/';

const instance = axios.create({
  baseURL,
  withCredentials: true,
});

export default instance;
