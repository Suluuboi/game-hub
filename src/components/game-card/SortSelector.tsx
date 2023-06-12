import { Button } from "@chakra-ui/button";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../../hooks/usePlatforms";
import { Spinner } from "@chakra-ui/spinner";
import { IPlatform } from "../../hooks/useGames";

interface Props {
  //onSortSelected: (platform: IPlatform) => void;
  //selectedPlatform: IPlatform | null;
}

export default function SortSelector({}: //onSortSelected,
//selectedPlatform,
Props) {
  const { data: platforms, error, loading } = usePlatform();

  return (
    <>
      {error && null}
      {loading && <Spinner />}
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {/*selectedPlatform ? selectedPlatform.name : "Platforms"*/}
          Order By: Relevence
        </MenuButton>
        <MenuList>
          <MenuItem>Relevence</MenuItem>
          <MenuItem>Date added</MenuItem>
          <MenuItem>Name</MenuItem>
          <MenuItem>Release Date</MenuItem>
          <MenuItem>Popularity</MenuItem>
          <MenuItem>Average rating</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
