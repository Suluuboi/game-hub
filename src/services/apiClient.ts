import axios from "axios";

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

  getAll = async () => {
    const res = await axiosInstance.get<T>(this.endpoint);
    return res.data;
  };

  post = async (data: T) => {
    const res = await axiosInstance.post(this.endpoint, data);
    return res.data;
  };
}

export default APIClient;
