import useGenres from "./useGenres";

export default function useGetGenreName(id?: number) {
  const { data: genres } = useGenres();
  const genreName = genres.results.find((genre) => genre.id === id)?.name || "";
  return genreName;
}
