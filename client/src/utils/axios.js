import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://doctor-booking-app-backend-zgk4.onrender.com',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export default axiosInstance;
