import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-114c7.firebaseio.com/'
});

export default instance;