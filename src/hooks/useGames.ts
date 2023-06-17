import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { IGameQuery } from "../App";
import gameService, { IGame } from "../services/gameServices";
import { CACHE_KEY_GAMES } from "../services/constants";
import { IFetchResponse } from "../services/apiClient";

function useGames(gameQury: IGameQuery) {
  return useInfiniteQuery<IFetchResponse<IGame>, Error>({
    queryKey: [CACHE_KEY_GAMES, gameQury],
    queryFn: ({ pageParam = 1 }) =>
      gameService.getAll({
        params: {
          genres: gameQury.genre?.id,
          parent_platforms: gameQury.platform?.id,
          ordering: gameQury.sortOrder,
          search: gameQury.search,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, //24hrs
  });
}

export default useGames;
