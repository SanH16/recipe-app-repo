import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://dummyapi.io/data/v1/",
  headers: {
    "app-id": "653ce9a119dd8a83227211b0",
  },
});

// axiosInstance.interceptors.request.use((config) => {
//   console.log(config);
//   return config;
// });
