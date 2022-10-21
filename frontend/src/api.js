import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 1000,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const get = (url, params) => api.get(url, { params });

const post = (url, data) => api.post(url, data);

export const authApi = {
  login: async (data) => await post("/auth/login", data),
  register: async (data) => await post("/auth/register", data),
};
