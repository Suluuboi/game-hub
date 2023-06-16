import { CACHE_KEY_GAMES } from "./constants";
import APIClient from "./apiClient";
import { IFetchResponse } from "../hooks/useData";
import { IPlatform } from "./platformService";

export interface IGame {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: IPlatform }[];
  metacritic: number;
}

const gameService = new APIClient<IGame>(CACHE_KEY_GAMES);

export default gameService;
