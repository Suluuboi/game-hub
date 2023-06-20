import { CACHE_KEY_GAMES } from "./constants";
import APIClient from "./apiClient";
import { IPlatform } from "./platformService";

export interface IGame {
  description: React.ReactNode;
  description_raw: string;
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: IPlatform }[];
  metacritic: number;
  slug: string;
}

const gameService = new APIClient<IGame>(CACHE_KEY_GAMES);

export default gameService;
