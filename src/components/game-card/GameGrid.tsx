import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCards from "../game-card/GameCards";
import GameCardSkeleton from "../game-card/GameCardSkeleton";
import GameCardContainer from "../game-card/GameCardContainer";
import { IGameQuery } from "../../App";
import useGames from "../../hooks/useGames";

interface Props {
  gameQuery: IGameQuery;
}

export default function GameGrid({ gameQuery }: Props) {
  const { data: games, error, isLoading: loading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={"10px"}
        spacing={6}
      >
        {loading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {games?.results.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCards game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}
