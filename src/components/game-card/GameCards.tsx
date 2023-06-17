import React from "react";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCropedImageUrl from "../../services/image-url";
import { IGame } from "../../services/gameServices";

interface Props {
  game: IGame;
}

export default function GameCards({ game }: Props) {
  return (
    <Card>
      <Image src={getCropedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize={"2xl"} marginBottom={2}>
          {game.name}
        </Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}
