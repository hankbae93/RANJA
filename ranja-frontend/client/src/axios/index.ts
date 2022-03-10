import axios from 'axios';

const { REACT_APP_DEV_API_SERVER, REACT_APP_PRODUCTION_API_SERVER } = process.env;

const baseURL =
  process.env.NODE_ENV === 'development' ? REACT_APP_DEV_API_SERVER : `${REACT_APP_PRODUCTION_API_SERVER}/api`;

const instance = axios.create({
  baseURL,
  withCredentials: true,
});

export default instance;
