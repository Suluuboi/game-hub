import axios, { AxiosRequestConfig } from "axios";

export interface IFetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}



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

  get = async (id: number | string) => {
    const res = await axiosInstance.get<T>(this.endpoint + `/${id}`);
    return res.data;
  };

  post = async (data: T) => {
    const res = await axiosInstance.post(this.endpoint, data);
    return res.data;
  };
}

export default APIClient;
