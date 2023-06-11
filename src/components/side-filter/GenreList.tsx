import { HStack, List, ListItem, Text } from "@chakra-ui/layout";
import useGenres from "../../hooks/useGenres";
import { Image } from "@chakra-ui/image";
import getCropedImageUrl from "../../services/image-url";
import { Spinner } from "@chakra-ui/spinner";

interface Props {}

export default function GenreList({}: Props) {
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
              <Text fontSize={"lg"}>{g.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}
