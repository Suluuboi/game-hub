import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { IPlatform } from "../../hooks/useGames";
import GameCards from "../game-card/GameCards";
import GameCardSkeleton from "../game-card/GameCardSkeleton";
import GameCardContainer from "../game-card/GameCardContainer";
import { IGenre } from "../../hooks/useGenres";
import { IGameQuery } from "../../App";

interface Props {
  gameQuery: IGameQuery;
}

export default function GameGrid({ gameQuery }: Props) {
  const { data: games, error, loading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={"10px"}
        spacing={2}
      >
        {loading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCards game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}
