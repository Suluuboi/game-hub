import React from "react";
import { IGame } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: IGame;
}

export default function GameCards({ game }: Props) {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
}
