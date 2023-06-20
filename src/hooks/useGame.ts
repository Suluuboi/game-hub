import { useQuery } from "@tanstack/react-query";
import React from "react";
import gameService, { IGame } from "../services/gameServices";
import { IFetchResponse } from "../services/apiClient";
import { CACHE_KEY_GAMES } from "../services/constants";

export default function useGame(slug: string) {
  return useQuery({
    queryKey: [CACHE_KEY_GAMES, slug],
    queryFn: () => gameService.get(slug),
  });
}
