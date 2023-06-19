import { Button } from "@chakra-ui/button";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../../hooks/usePlatforms";
import { Spinner } from "@chakra-ui/spinner";
import { IPlatform } from "../../services/platformService";
import useGetPlatformName from "../../hooks/useGetPlatformName";
import useGameQueryStore from "../../store";

export default function PlatformSelector() {
  const { data: platforms, error, isLoading: loading } = usePlatform();
  const { gameQuery, setPlatformId } = useGameQueryStore();

  const platformName = useGetPlatformName(gameQuery.platformID);

  return (
    <>
      {error && null}
      {loading && <Spinner />}
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {gameQuery.platformID ? platformName : "Platforms"}
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
