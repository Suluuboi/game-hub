import axios, { AxiosRequestConfig } from "axios";
import { IFetchResponse } from "../hooks/useData";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "cd9278d8e301432695571d4056cd16c3",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (config?: AxiosRequestConfig) => {
    const res = await axiosInstance.get<IFetchResponse<T>>(
      this.endpoint,
      config
    );
    return res.data;
  };

  post = async (data: T) => {
    const res = await axiosInstance.post(this.endpoint, data);
    return res.data;
  };
}

export default APIClient;
