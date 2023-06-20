import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface IGameQuery {
  genreID?: number;
  platformID?: number;
  sortOrder?: string;
  search?: string;
}

interface IGameQueryStore {
  gameQuery: IGameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (gernreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<IGameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) =>
    set(() => ({ gameQuery: { search: searchText } })),
  setGenreId: (genreId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, ...{ genreID: genreId } },
    })),
  setPlatformId: (platformId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, ...{ platformID: platformId } },
    })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Game Query Store", useGameQueryStore);

export default useGameQueryStore;
