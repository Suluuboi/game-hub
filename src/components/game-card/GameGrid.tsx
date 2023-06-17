import { Box, Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCards from "../game-card/GameCards";
import GameCardSkeleton from "../game-card/GameCardSkeleton";
import GameCardContainer from "../game-card/GameCardContainer";
import { IGameQuery } from "../../App";
import useGames from "../../hooks/useGames";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: IGameQuery;
}

export default function GameGrid({ gameQuery }: Props) {
  const {
    data: games,
    error,
    isLoading: loading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  const fetchGameCount =
    games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchGameCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        padding={"10px"}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
      >
        {loading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games?.pages.map((pages, idx) => (
          <React.Fragment key={idx}>
            {pages.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCards game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {/* {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )} */}
    </InfiniteScroll>
  );
}
