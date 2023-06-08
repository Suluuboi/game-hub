import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

interface IGame {
  id: number;
  name: string;
}

interface IFetchGamesResponse {
  count: number;
  results: IGame[];
}

export default function useGames() {
  const [games, setGames] = useState<IGame[]>([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<IFetchGamesResponse>("games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort(); //about if moving from page
  }, []);
  return { games, error };
}
