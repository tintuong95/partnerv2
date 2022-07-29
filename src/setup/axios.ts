import axios from "axios";

const { REACT_APP_HOST } = process.env;

export const fetchAxios = axios.create({
  headers:{
    'Access-Control-Allow-Origin':"*",
    'X-Requested-With': 'XMLHttpRequest'
  },
  baseURL: REACT_APP_HOST,
  withCredentials:true,
});

fetchAxios.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
