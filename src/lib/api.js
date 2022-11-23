import axios from 'axios';
import { refresh, refreshErrorHandle } from './refresh';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

instance.interceptors.request.use(refresh, refreshErrorHandle);

export default instance;
