import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { CACHE_KEY_GAMES, CACHE_KEY_SCREENSHOTS } from "../services/constants";

export interface IScreenshots {
  id: number;
  image: string;
  hidden: boolean;
  width: number;
  height: number;
}

export default function useScreenshots(gameId: number) {
  const trailerService = new APIClient<IScreenshots>(
    `${CACHE_KEY_GAMES}/${gameId}/${CACHE_KEY_SCREENSHOTS}`
  );
  return useQuery({
    queryKey: [CACHE_KEY_SCREENSHOTS, gameId],
    queryFn: trailerService.getAll,
  });
}
