import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/navigation/NavBar";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading as={"h1"}>Oops</Heading>
        <Text as={"h4"}>
          {isRouteErrorResponse(error)
            ? "Page does not exist"
            : "Unexpected Error"}
        </Text>
      </Box>
    </>
  );
}
