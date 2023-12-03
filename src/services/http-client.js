import axios from "axios";
import { getToken, removeToken } from "@/utilities/auth.js";

const baseUrl = process.env.VUE_APP_API;
const httpClient = axios;

// You can specify config defaults that will be applied to every request.
httpClient.defaults.baseURL = baseUrl;
httpClient.defaults.timeout = 80000;

/* -- You can intercept requests or responses before they are handled by then or catch. -- */

// Request Interceptor
httpClient.interceptors.request.use(
  config => {
    const token = getToken();
    if (new Array("post", "put").includes(config.method)) {
      config.headers["Content-Type"] = "application/json";
    }
    config.headers["X-Application"] = "vcc-interface";
    if (token != null) {
      // config.headers["Authorization"] = `Bearer ${token}`;
      config.headers["x-auth-token"] = `${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response Interceptor
httpClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (
      error.response &&
      (error.response.status == 401 || error.response.status == 403)
    ) {
      removeToken();
      if (window.location.pathname != "/#/login") {
        window.location.replace("/#/login");
      }
    }
    return Promise.reject(error);
  }
);
export { httpClient };