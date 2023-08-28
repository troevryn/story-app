import axios from 'axios';
import Utils from '../utils/utils';
import Config from '../config/config';

const Axios = axios.create({
  baseURL: 'https://story-api.dicoding.dev/v1/',
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
  },
});

export default Axios;
