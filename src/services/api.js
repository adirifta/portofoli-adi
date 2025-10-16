import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
  timeout: 10000,
});

// Interceptor untuk menambahkan token auth jika ada
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 403) {
      console.error('Access forbidden - check permissions or authentication');
    }
    return Promise.reject(error);
  }
);

export const aboutAPI = {
  getAbout: () => api.get('/about'),
  updateAbout: (aboutData) => api.post('/admin/about', aboutData),
};

export const authAPI = {
  login: (credentials) => api.post('/login', credentials),
  createUser: (userData) => api.post('/create-user', userData),
  resetAdmin: () => api.post('/reset-admin'),
};

export default api;