import { Badge } from "@chakra-ui/react";
import { IGame } from "../../hooks/useGames";

interface Props {
  score: number;
}

export default function CriticScore({ score }: Props) {
  let color = score > 90 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge fontSize={14} borderRadius={4} paddingX={2} colorScheme={color}>
      {score}
    </Badge>
  );
}
