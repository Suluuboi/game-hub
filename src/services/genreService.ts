import { CACHE_KEY_GENRE } from "./constants";
import APIClient from "./apiClient";

export interface IGenre {
  id: number;
  name: string;
  image_background: string;
}

const genreClient = new APIClient<IGenre>(CACHE_KEY_GENRE);

export default genreClient;
