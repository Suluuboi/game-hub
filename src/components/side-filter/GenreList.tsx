import { HStack, List, ListItem } from "@chakra-ui/layout";
import useGenres from "../../hooks/useGenres";
import { Image } from "@chakra-ui/image";
import getCropedImageUrl from "../../services/image-url";
import { Spinner } from "@chakra-ui/spinner";
import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/react";
import genreDummyData from "./genre-dummy-data";
import { IGenre } from "../../services/genreService";

interface Props {
  onSelectGenre: (genre: IGenre) => void;
  selectedGenre: IGenre | null;
}

export default function GenreList({ onSelectGenre, selectedGenre }: Props) {
  /*const {
    data: genres,
    error,
    loading,
  } = { data: genreDummyData.genre_dummy.results, loading: false, error: null };*/
  const { data: genres, error, isLoading: loading } = useGenres();

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
                fontWeight={g.id === selectedGenre?.id ? "bold" : "normal"}
                whiteSpace={"normal"}
                textAlign={"left"}
                variant={"link"}
                fontSize={"lg"}
                onClick={() => onSelectGenre(g)}
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
