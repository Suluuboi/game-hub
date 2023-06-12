import { IGameQuery } from "../App";
import useData from "./useData";
import { IGenre } from "./useGenres";

export interface IPlatform {
  id: number;
  name: string;
  slug: string;
}

export interface IGame {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: IPlatform }[];
  metacritic: number;
}

const useGames = (gameQury: IGameQuery) =>
  useData<IGame>(
    "/games",
    {
      params: {
        genres: gameQury.genre?.id,
        platforms: gameQury.platform?.id,
        ordering: gameQury.sortOrder,
      },
    },
    [gameQury]
  );

export default useGames;
