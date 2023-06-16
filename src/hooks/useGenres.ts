import genreClient, { IGenre } from "../services/genreService";
import { CACHE_KEY_GENRE } from "../services/constants";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { IFetchResponse } from "./useData";
import genreDummyData from "../components/side-filter/genre-dummy-data";

export default function useGenres() {
  return useQuery<IFetchResponse<IGenre>, Error>({
    queryKey: [CACHE_KEY_GENRE],
    queryFn: genreClient.getAll,
    //staleTime: 24 * 60 * 60 * 1000, //1 day
    //initialData: genreDummyData.genre_dummy,
  });
}
