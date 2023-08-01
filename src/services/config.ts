/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from "axios";

const baseURL: any = import.meta.env.VITE_APP_API;

const SERVICE = (): AxiosInstance => {
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
  };

  return axios.create({ baseURL, headers });
};

export { SERVICE };
