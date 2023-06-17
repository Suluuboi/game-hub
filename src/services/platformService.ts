import APIClient from "./apiClient";
import { CACHE_KEY_PLATFORMS } from "./constants";

export interface IPlatform {
  id: number;
  name: string;
  slug: string;
}

const platformService = new APIClient<IPlatform>(CACHE_KEY_PLATFORMS);
export default platformService;
