import axios from "axios";
import { ILoginViewModel } from "viewModels";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

let onError: (error: any) => void;
const setOnError = (cb: (error: any) => void) => {
  onError = cb;
};

let onRefreshToken: (data:ILoginViewModel) => void;
const setOnRefreshToken = (cb: (data: ILoginViewModel) => void) => {
  onRefreshToken = cb;
};

export const refreshToken = (error?: any) =>
  new Promise((resolve, reject) => {
    try {
      const rToken = localStorage.getItem("@legal_audit_refresh_token");
      if (!rToken) return reject(error);
      const refresh = JSON.parse(rToken);

      return api
        .post("auth/refresh-token", JSON.stringify(refresh), {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          onRefreshToken(res.data);
          return resolve(res);
        })
        .catch((err) => {
          onError?.(err);
          return reject(error);
        });
    } catch (err) {
      onError?.(err);
      return reject(err);
    }
  });

export const setters = {
  setOnError,
  setOnRefreshToken,
};

api.interceptors.request.use((config) => {
  try {
    const token = JSON.parse(localStorage.getItem("@api_laravel") || "");
    if (token && config?.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (error) {
    //...
  }

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  // eslint-disable-next-line consistent-return
  (error) => {
    if (error?.response?.status === 401) {
      return new Promise((resolve, reject) => {
        refreshToken(error)
          .then((res) => {
            error.config.headers.Authorization = `Bearer ${
              (res as any).data.token
            }`;
            resolve(api.request(error.config));
          })
          .catch(reject);
      });
    }
    return Promise.reject(error);
  }
);

export default api;