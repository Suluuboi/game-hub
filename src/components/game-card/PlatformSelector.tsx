import { Button } from "@chakra-ui/button";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../../hooks/usePlatforms";
import { Spinner } from "@chakra-ui/spinner";
import { IPlatform } from "../../services/platformService";

interface Props {
  onPlatformSelected: (platform: IPlatform) => void;
  selectedPlatform: IPlatform | null;
}

export default function PlatformSelector({
  onPlatformSelected,
  selectedPlatform,
}: Props) {
  const { data: platforms, error, isLoading: loading } = usePlatform();

  return (
    <>
      {error && null}
      {loading && <Spinner />}
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform ? selectedPlatform.name : "Platforms"}
        </MenuButton>
        <MenuList>
          {platforms?.results.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => onPlatformSelected(platform)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}
