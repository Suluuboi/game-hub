import { Button } from "@chakra-ui/button";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../../store";

export default function SortSelector() {
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOrderString = useGameQueryStore((s) => s.gameQuery.sortOrder);

  const sortOrders = [
    { value: "", label: "Relevence" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-added", label: "Date added" },
    { value: "created", label: "Created" },
    { value: "updated", label: "Updated" },
    { value: "-rating", label: "Average rating" },
    { value: "metacritic", label: "Popularity" },
  ];

  const label = sortOrders.filter((order) => order.value === sortOrderString);
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Sort by: {label[0]?.label || "Relevence"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem
              key={order.label}
              onClick={() => setSortOrder(order.value)}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}
