import axios from 'axios';

const ajax = axios.create({
    baseURL: 'https://test-domain.com/api/',
});

export default ajax;
