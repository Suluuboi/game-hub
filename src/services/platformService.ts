import { IFetchResponse } from "../hooks/useData";
import { IPlatform } from "../hooks/useGames";
import APIClient from "./apiClient";
import { CACHE_KEY_PLATFORMS } from "./constants";

const platformService = new APIClient<IFetchResponse<IPlatform>>(
  CACHE_KEY_PLATFORMS
);
export default platformService;
