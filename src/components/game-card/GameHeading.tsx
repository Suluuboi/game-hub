import { Heading } from "@chakra-ui/react";
import useGetGenreName from "../../hooks/useGetGenreName";
import useGetPlatformName from "../../hooks/useGetPlatformName";
import useGameQueryStore from "../../store";

export default function GameHeading() {
  const genreID = useGameQueryStore((s) => s.gameQuery.genreID);
  const genreName = useGetGenreName(genreID);

  const platformID = useGameQueryStore((s) => s.gameQuery.platformID);
  const platformName = useGetPlatformName(platformID);

  const heading = `${platformName} ${genreName} Games`;

  return (
    <Heading as={"h1"} marginY={5}>
      {heading}
    </Heading>
  );
}
