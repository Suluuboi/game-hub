import { SimpleGrid, Text } from "@chakra-ui/react";
import { IGame } from "../services/gameServices";
import DefenitionItem from "./DefenitionItem";
import CriticScore from "./game-card/CriticScore";

interface Props {
  game: IGame;
}

export default function GameAttributes({ game }: Props) {
  return (
    <SimpleGrid columns={2} as={"dl"}>
      <DefenitionItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefenitionItem>
      <DefenitionItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefenitionItem>
      <DefenitionItem term="Genre">
        {game.genres.map((g) => (
          <Text key={g.id}>{g.name}</Text>
        ))}
      </DefenitionItem>
      <DefenitionItem term="Publishers">
        {game.publishers?.map((p) => (
          <Text key={p.id}>{p.name}</Text>
        ))}
      </DefenitionItem>
    </SimpleGrid>
  );
}
