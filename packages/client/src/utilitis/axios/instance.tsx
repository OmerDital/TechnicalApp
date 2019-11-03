import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  responseType: 'json'
});

export { axiosInstance as instance };
