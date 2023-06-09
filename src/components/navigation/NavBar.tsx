import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";

export default function NavBar() {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <HStack>
        <Image src={logo} boxSize={"60px"} />
        <Text>Navbar</Text>
      </HStack>

      <ColorModeSwitch />
    </HStack>
  );
}
