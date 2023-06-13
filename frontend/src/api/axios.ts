import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_DEV_API_URL, 
  headers: {
    'Content-Type': 'application/json',
    // Add any custom headers you need
  },
});

export default axiosInstance;

export const TEST_MODEL_API_URL = '/model/test';