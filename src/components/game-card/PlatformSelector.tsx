import { Button } from "@chakra-ui/button";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../../hooks/usePlatforms";
import { Spinner } from "@chakra-ui/spinner";
import { IPlatform } from "../../services/platformService";

interface Props {
  onPlatformIdSelected: (platformId: number) => void;
  selectedPlatformID?: number;
}

export default function PlatformSelector({
  onPlatformIdSelected,
  selectedPlatformID,
}: Props) {
  const { data: platforms, error, isLoading: loading } = usePlatform();

  const platformName = platforms.results.find(
    (platform) => platform.id === selectedPlatformID
  )?.name;

  return (
    <>
      {error && null}
      {loading && <Spinner />}
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatformID ? platformName : "Platforms"}
        </MenuButton>
        <MenuList>
          {platforms?.results.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => onPlatformIdSelected(platform.id)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}
