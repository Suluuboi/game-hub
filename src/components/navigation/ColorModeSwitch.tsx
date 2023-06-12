import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

export default function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text whiteSpace={"nowrap"}>
        {colorMode === "light" ? "Dark Mode" : "Light Mode"}
      </Text>
    </HStack>
  );
}
