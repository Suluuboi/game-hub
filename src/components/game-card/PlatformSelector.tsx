import { Button } from "@chakra-ui/button";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../../hooks/usePlatforms";
import { Spinner } from "@chakra-ui/spinner";

interface Props {}

export default function PlatformSelector({}: Props) {
  const { data: platforms, error, loading } = usePlatform();

  return (
    <>
      {error && null}
      {loading && <Spinner />}
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Platforms
        </MenuButton>
        <MenuList>
          {platforms.map((platform) => (
            <MenuItem key={platform.id}>{platform.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}
