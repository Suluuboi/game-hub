import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/navigation/NavBar";
import GameGrid from "./components/game-card/GameGrid";
import GenreList from "./components/side-filter/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above={"lg"}>
        <GridItem area={"aside"}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
