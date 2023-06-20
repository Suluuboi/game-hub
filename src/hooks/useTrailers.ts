import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { CACHE_KEY_GAMES, CACHE_KEY_GAME_TRAILER } from "../services/constants";

export interface ITrailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}

export default function useTrailers(gameId: number) {
  const trailerService = new APIClient<ITrailer>(
    `${CACHE_KEY_GAMES}/${gameId}/movies`
  );
  return useQuery({
    queryKey: [CACHE_KEY_GAME_TRAILER, gameId],
    queryFn: trailerService.getAll,
  });
}
