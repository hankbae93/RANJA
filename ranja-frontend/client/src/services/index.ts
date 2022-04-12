import axios from 'axios';

const { REACT_APP_DEV_API_SERVER, REACT_APP_PRODUCTION_API_SERVER } = process.env;

const baseURL =
  process.env.NODE_ENV === 'development' ? `${REACT_APP_DEV_API_SERVER}/api` : `${REACT_APP_PRODUCTION_API_SERVER}/api`;

axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

export { default as MapService } from './MapService';
export { default as UserService } from './UserService';
