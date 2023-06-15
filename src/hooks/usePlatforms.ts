import { useQueries, useQuery } from "@tanstack/react-query";
import platformService from "../services/platformService";
import useData, { IFetchResponse } from "./useData";
import { CACHE_KEY_PLATFORMS } from "../services/constants";
import platformDummyData from "../components/game-card/platform-dummy-data";

interface IPlatform {
  id: number;
  name: string;
  slug: string;
}

export default function usePlatform() {
  return useQuery<IFetchResponse<IPlatform>, Error>({
    queryKey: [CACHE_KEY_PLATFORMS],
    queryFn: platformService.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: platformDummyData.data,
  });
}
