import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area={"nav"} bg="coral">
        NAV
      </GridItem>
      <Show above={"lg"}>
        <GridItem area={"aside"} bg="gold">
          NAV
        </GridItem>
      </Show>

      <GridItem area={"main"} bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
