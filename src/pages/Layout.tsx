import { Box, GridItem } from "@chakra-ui/react";
import NavBar from "../components/navigation/NavBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
}
