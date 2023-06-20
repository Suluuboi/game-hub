import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";

import GameGrid from "../components/game-card/GameGrid";
import GameHeading from "../components/game-card/GameHeading";
import PlatformSelector from "../components/game-card/PlatformSelector";
import SortSelector from "../components/game-card/SortSelector";
import GenreList from "../components/side-filter/GenreList";

export default function HomePage() {
  return (
    <Grid
      templateAreas={{ base: `"main"`, lg: `"aside main"` }}
      templateColumns={{
        base: "1fr",
        lg: "200px",
      }}
    >
      <Show above={"lg"}>
        <GridItem area={"aside"} padding={5}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <Box paddingLeft={2}>
          <GameHeading />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>

        <GameGrid />
      </GridItem>
    </Grid>
  );
}
