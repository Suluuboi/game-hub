import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";
import gameDataDummy from "../components/sections/game-data-dummy";

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

export interface IFetchGamesResponse {
  count: number;
  results: IGame[];
}

export default function useGames() {
  const [games, setGames] = useState<IGame[]>([]);
  const [error, setError] = useState([]);
  /*useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<IFetchGamesResponse>("games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort(); //abort if moving from page
  }, []);*/
  useEffect(() => {
    setGames(gameDataDummy.dummy_data.results);
  }, []);

  return { games, error };
}
