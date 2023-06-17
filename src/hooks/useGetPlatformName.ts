import usePlatform from "./usePlatforms";

export default function useGetPlatformName(id?: number) {
  const { data: platforms, error, isLoading: loading } = usePlatform();

  const platformName =
    platforms?.results.find((platform) => platform.id === id)?.name || "";

  return platformName;
}
