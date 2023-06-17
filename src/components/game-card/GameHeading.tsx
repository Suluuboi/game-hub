import { Heading } from "@chakra-ui/react";
import { IGameQuery } from "../../App";
import useGenres from "../../hooks/useGenres";

interface Props {
  gameQuery: IGameQuery;
}

export default function GameHeading({ gameQuery }: Props) {
  const { data: genres } = useGenres();
  const genreName =
    genres.results.find((genre) => genre.id === gameQuery.genreID)?.name || "";

  const heading = `${gameQuery.platform?.name || ""} ${genreName} Games`;

  return (
    <Heading as={"h1"} marginY={5}>
      {heading}
    </Heading>
  );
}
