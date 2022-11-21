import axios from 'axios';
import { refresh, refreshErrorHandle } from './refresh';

const instance = axios.create({
  baseURL: 'http://3.39.252.177:8080/',
});

instance.interceptors.request.use(refresh, refreshErrorHandle);

export default instance;
