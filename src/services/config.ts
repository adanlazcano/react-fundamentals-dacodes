/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from "axios";

const baseURL: any = import.meta.env.VITE_APP_API;

const headers = {
  "Content-Type": "application/json; charset=utf-8",
  Authorization: "",
};

const SERVICE = (): AxiosInstance => {
  const token = sessionStorage.getItem("token") ?? "";
  let authHeaders = headers;
  if (token !== null) {
    authHeaders = {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    };
  }
  return axios.create({ baseURL, headers: authHeaders });
};

export { SERVICE };
