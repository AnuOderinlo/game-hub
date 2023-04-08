import { Box, Button, ButtonGroup, Grid, GridItem, Show, StackDivider, VStack } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { ColorModeSwitch } from "./components/ColorModeSwitch";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>

      <GridItem area="main">Main</GridItem>
    </Grid>
  );
}

export default App;
