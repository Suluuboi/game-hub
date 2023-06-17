import { Heading } from "@chakra-ui/react";
import { IGameQuery } from "../../App";
import useGenres from "../../hooks/useGenres";
import usePlatform from "../../hooks/usePlatforms";

interface Props {
  gameQuery: IGameQuery;
}

export default function GameHeading({ gameQuery }: Props) {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatform();
  const genreName =
    genres.results.find((genre) => genre.id === gameQuery.genreID)?.name || "";

    const platformName =
    platforms.results.find((platform) => platform.id === gameQuery.platformID)?.name || "";

  const heading = `${platformName} ${genreName} Games`;

  return (
    <Heading as={"h1"} marginY={5}>
      {heading}
    </Heading>
  );
}
