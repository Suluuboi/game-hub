import { Card, CardBody, Skeleton } from "@chakra-ui/react";

interface Props {}

export default function GameCardSkeleton() {
  return (
    <Card>
      <Skeleton height={200} />
      <CardBody>
        <Skeleton />
      </CardBody>
    </Card>
  );
}
