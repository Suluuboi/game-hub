import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/navigation/NavBar";
import GameGrid from "./components/game-card/GameGrid";
import GenreList from "./components/side-filter/GenreList";
import { useState } from "react";
import { IGenre } from "./hooks/useGenres";
import PlatformIconList from "./components/game-card/PlatformIconList";
import PlatformSelector from "./components/game-card/PlatformSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<IGenre | null>(null);
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
            onSelectGenre={setSelectedGenre}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <PlatformSelector />
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
