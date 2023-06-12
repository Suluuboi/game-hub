import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/navigation/NavBar";
import GameGrid from "./components/game-card/GameGrid";
import GenreList from "./components/side-filter/GenreList";
import { useState } from "react";
import { IGenre } from "./hooks/useGenres";
import PlatformSelector from "./components/game-card/PlatformSelector";
import { IPlatform } from "./hooks/useGames";
import SortSelector from "./components/game-card/SortSelector";

export interface IGameQuery {
  genre: IGenre | null;
  platform: IPlatform | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<IGameQuery>({} as IGameQuery);
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{
        base: "1fr",
        lg: "200px",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above={"lg"}>
        <GridItem area={"aside"} padding={5}>
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <HStack spacing={5} marginBottom={5} paddingLeft={2}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onPlatformSelected={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            selectedOrder={gameQuery.sortOrder}
            onSortSelected={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </HStack>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
