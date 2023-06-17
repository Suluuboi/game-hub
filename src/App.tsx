import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/navigation/NavBar";
import GameGrid from "./components/game-card/GameGrid";
import GenreList from "./components/side-filter/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/game-card/PlatformSelector";
import SortSelector from "./components/game-card/SortSelector";
import GameHeading from "./components/game-card/GameHeading";
import { IGenre } from "./services/genreService";
import { IPlatform } from "./services/platformService";

export interface IGameQuery {
  genre: IGenre | null;
  platform: IPlatform | null;
  sortOrder: string;
  search: string;
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
        <NavBar onSearch={(search) => setGameQuery({ ...gameQuery, search })} />
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
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5} marginBottom={5}>
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
        </Box>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
