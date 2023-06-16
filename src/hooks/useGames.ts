import { useQuery } from "@tanstack/react-query";
import { IGameQuery } from "../App";
import gameService, { IGame } from "../services/gameServices";
import { IFetchResponse } from "./useData";
import { CACHE_KEY_GAMES } from "../services/constants";

function useGames(gameQury: IGameQuery) {
  return useQuery<IFetchResponse<IGame>, Error>({
    queryKey: [CACHE_KEY_GAMES, gameQury],
    queryFn: () =>
      gameService.getAll({
        params: {
          genres: gameQury.genre?.id,
          parent_platforms: gameQury.platform?.id,
          ordering: gameQury.sortOrder,
          search: gameQury.search,
        },
      }),
  });
}

export default useGames;
