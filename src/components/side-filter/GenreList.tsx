import useGenres from "../../hooks/useGenres";

interface Props {}

export default function GenreList({}: Props) {
  const { data: genres, error, loading } = useGenres();
  return (
    <>
      <ul>
        {genres.map((g) => (
          <li key={g.id}>{g.name}</li>
        ))}
      </ul>
    </>
  );
}
