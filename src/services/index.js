import axios from 'axios';
import { useState } from 'react';
// const [baseURL,setBaseURL]=useState('http://3.85.49.93')
const instance = axios.create({
  baseURL: 'http://localhost:8081'
  // baseURL: 'http://192.168.5.51:8081'
  // baseURL: 'http://18.206.201.109'
  // baseURL:'http://35.153.180.148/'
});
instance.interceptors.request.use(
  config => {
    document.body.classList.add('loading-indicator');
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  error => {
    document.body.classList.remove('loading-indicator');
    return Promise.reject(error);
  }
);
//Add a response interceptor
instance.interceptors.response.use(
  response => {
    document.body.classList.remove('loading-indicator');
    return response;
  },
  error => {
    console.log(error);
    document.body.classList.remove('loading-indicator');
    return Promise.reject(error);
  }
);
export const get = async (url, params = '') => {
  return await instance.get(`${url}${params}`);
};
export const post = async (url, data = {}) => {
  try {
    return await instance.post(`${url}`, data);
  } catch (e) {
    return e;
  }
};
export default instance;