import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "cd9278d8e301432695571d4056cd16c3",
  },
});
