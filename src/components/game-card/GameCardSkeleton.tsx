import { Card, CardBody, Skeleton } from "@chakra-ui/react";

interface Props {}

export default function GameCardSkeleton() {
  return (
    <Card width={"200px"} borderRadius={10} overflow={"hidden"}>
      <Skeleton height={200} />
      <CardBody>
        <Skeleton />
      </CardBody>
    </Card>
  );
}
