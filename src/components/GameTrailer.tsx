import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

export default function GameTrailer({ gameId }: Props) {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];
  if (!first) return null;

  return <video poster={`${first.preview}`} src={first.data[480]} controls />;
}
