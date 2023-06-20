import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
interface Props {
  children: string;
}
export default function ExpandableText({ children }: Props) {
  const [expand, setExpand] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = children.substring(0, limit);

  return (
    <Text>
      {!expand ? `${summary}...` : children}
      <Button
        size={"xs"}
        fontWeight={"bold"}
        colorScheme={"yellow"}
        marginStart={2}
        onClick={() => setExpand(!expand)}
      >
        {expand ? "Read More" : "Show Less"}
      </Button>
    </Text>
  );
}
