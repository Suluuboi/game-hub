import { Heading } from "@chakra-ui/react";
import useGetGenreName from "../../hooks/useGetGenreName";
import useGetPlatformName from "../../hooks/useGetPlatformName";
import useGameQueryStore from "../../store";

export default function GameHeading() {
  const { gameQuery } = useGameQueryStore();
  const genreName = useGetGenreName(gameQuery.genreID);
  const platformName = useGetPlatformName(gameQuery.platformID);

  const heading = `${platformName} ${genreName} Games`;

  return (
    <Heading as={"h1"} marginY={5}>
      {heading}
    </Heading>
  );
}
