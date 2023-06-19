import { useInfiniteQuery } from "@tanstack/react-query";
import { IFetchResponse } from "../services/apiClient";
import { CACHE_KEY_GAMES } from "../services/constants";
import gameService, { IGame } from "../services/gameServices";
import useGameQueryStore from "../store";

function useGames() {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<IFetchResponse<IGame>, Error>({
    queryKey: [CACHE_KEY_GAMES, gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gameService.getAll({
        params: {
          genres: gameQuery.genreID,
          parent_platforms: gameQuery.platformID,
          ordering: gameQuery.sortOrder,
          search: gameQuery.search,
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
