import axios from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const api = async (method, url, data = {}, params = {}, headers = {}) => {
  return http
    .request({
      method,
      url,
      data,
      params,
      headers,
    })
    .then(response => response)
    .catch(error => error.response);
};

export default api;

export { http };