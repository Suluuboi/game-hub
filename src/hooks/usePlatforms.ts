import { useQuery } from "@tanstack/react-query";
import platformDummyData from "../components/game-card/platform-dummy-data";
import { IFetchResponse } from "../services/apiClient";
import platformService, { IPlatform } from "../services/platformService";

export default function usePlatform() {
  return useQuery<IFetchResponse<IPlatform>, Error>({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: platformDummyData.data,
  });
}
