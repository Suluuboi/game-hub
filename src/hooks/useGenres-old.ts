import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";
import genreDummyData from "../components/side-filter/genre-dummy-data";

interface IGenre {
  id: number;
  name: string;
}

export interface IFetchGenresResponse {
  count: number;
  results: IGenre[];
}

function useGenres() {
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   const controller = new AbortController();
  //   setLoading(true);
  //   apiClient
  //     .get<IFetchGenresResponse>("genres", { signal: controller.signal })
  //     .then((res) => {
  //       setLoading(false);
  //       setGenres(res.data.results);
  //     })
  //     .catch((err) => {
  //       if (err instanceof CanceledError) return;
  //       setError(err.message);
  //       setLoading(false);
  //     });

  //   return () => controller.abort(); //abort if moving from page
  // }, []);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setGenres(genreDummyData.genre_dummy.results);
    }, 2000);
  }, []);

  return { genres, error, loading };
}

//export default useGenres;
