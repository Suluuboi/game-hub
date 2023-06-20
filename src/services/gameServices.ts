import { CACHE_KEY_GAMES } from "./constants";
import APIClient from "./apiClient";
import { IPlatform } from "./platformService";
import { IGenre } from "./genreService";

interface Publisher {
  id: number;
  name: string;
}

export interface IGame {
  description: React.ReactNode;
  description_raw: string;
  name: string;
  id: number;
  genres: IGenre[];
  publishers: Publisher[];
  background_image: string;
  parent_platforms: { platform: IPlatform }[];
  metacritic: number;
  slug: string;
}

const gameService = new APIClient<IGame>(CACHE_KEY_GAMES);

export default gameService;
