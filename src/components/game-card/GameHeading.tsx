import { Heading } from "@chakra-ui/react";
import { IGameQuery } from "../../App";
import useGenres from "../../hooks/useGenres";
import usePlatform from "../../hooks/usePlatforms";
import useGetPlatformName from "../../hooks/useGetPlatformName";
import useGetGenreName from "../../hooks/useGetGenreName";

interface Props {
  gameQuery: IGameQuery;
}

export default function GameHeading({ gameQuery }: Props) {
  const genreName = useGetGenreName(gameQuery.genreID);
  const platformName = useGetPlatformName(gameQuery.platformID);

  const heading = `${platformName} ${genreName} Games`;

  return (
    <Heading as={"h1"} marginY={5}>
      {heading}
    </Heading>
  );
}
