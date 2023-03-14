import axios from 'axios';

const AUTH_API = axios.create({
  // baseURL: 'http://185.233.118.244:8080/auth',
  // mode: 'cors',
  // headers: {
  //   Accept: 'application/json',
  //   'Content-Type': 'application/json',
  // },

  baseURL: "http://localhost:8080/auth",
});


AUTH_API.interceptors.response.use(
  response => response,
  async error => {
    console.log('interceptors');
    return Promise.reject(error);
  },
);
export { AUTH_API };
