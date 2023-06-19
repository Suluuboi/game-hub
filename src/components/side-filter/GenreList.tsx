import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { HStack, List, ListItem } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import useGenres from "../../hooks/useGenres";
import { IGenre } from "../../services/genreService";
import getCropedImageUrl from "../../services/image-url";
import useGameQueryStore from "../../store";

export default function GenreList() {
  const { data: genres, error, isLoading: loading } = useGenres();
  const { gameQuery, setGenreId } = useGameQueryStore();

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      {error && null}
      {loading && <Spinner />}
      <List>
        {genres?.results.map((g) => (
          <ListItem key={g.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize="32px"
                objectFit={"cover"}
                src={getCropedImageUrl(g.image_background).toString()}
                borderRadius={8}
              />
              <Button
                fontWeight={g.id === gameQuery.genreID ? "bold" : "normal"}
                whiteSpace={"normal"}
                textAlign={"left"}
                variant={"link"}
                fontSize={"lg"}
                onClick={() => setGenreId(g.id)}
              >
                {g.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}
