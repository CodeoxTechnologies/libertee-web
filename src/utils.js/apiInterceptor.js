import axios from "axios";
var axiosInstance = axios.create({});
axiosInstance.defaults.baseURL = "http://46.101.65.156:8069/api/";
axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return error.response;
  }
);
export default axiosInstance;
