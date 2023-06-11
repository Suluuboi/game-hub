import { HStack, List, ListItem } from "@chakra-ui/layout";
import useGenres, { IGenre } from "../../hooks/useGenres";
import { Image } from "@chakra-ui/image";
import getCropedImageUrl from "../../services/image-url";
import { Spinner } from "@chakra-ui/spinner";
import { Button } from "@chakra-ui/button";

interface Props {
  onSelectGenre: (genre: IGenre) => void;
  selectedGenre: IGenre | null;
}

export default function GenreList({ onSelectGenre, selectedGenre }: Props) {
  const { data: genres, error, loading } = useGenres();

  return (
    <>
      {error && null}
      {loading && <Spinner />}
      <List>
        {genres.map((g) => (
          <ListItem key={g.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize="32px"
                src={getCropedImageUrl(g.image_background).toString()}
                borderRadius={8}
              />
              <Button
                fontWeight={g.id === selectedGenre?.id ? "bold" : "normal"}
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
