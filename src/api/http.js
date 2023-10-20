import axios from 'axios';

const http = axios.create({
  baseURL: 'https://scigroup.com.vn/app/offline/api',
});

export default http;
