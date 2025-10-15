import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://laravel-project.test';
export default axios;
