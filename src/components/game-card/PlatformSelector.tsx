import { Button } from "@chakra-ui/button";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Spinner } from "@chakra-ui/spinner";
import { BsChevronDown } from "react-icons/bs";
import useGetPlatformName from "../../hooks/useGetPlatformName";
import usePlatform from "../../hooks/usePlatforms";
import useGameQueryStore from "../../store";

export default function PlatformSelector() {
  const { data: platforms, error, isLoading: loading } = usePlatform();
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);

  const platformID = useGameQueryStore((s) => s.gameQuery.platformID);
  const platformName = useGetPlatformName(platformID);

  return (
    <>
      {error && null}
      {loading && <Spinner />}
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {platformID ? platformName : "Platforms"}
        </MenuButton>
        <MenuList>
          {platforms?.results.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => setPlatformId(platform.id)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}
