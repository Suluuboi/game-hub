import { Button } from "@chakra-ui/button";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { BsChevronDown } from "react-icons/bs";

interface IOrder {
  value: string;
  label: string;
}

interface Props {
  onSortSelected: (sortOrder: string) => void;
  selectedOrder: string | null;
}

export default function SortSelector({ onSortSelected, selectedOrder }: Props) {
  const sortOrder = [
    { value: "", label: "Relevence" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-added", label: "Date added" },
    { value: "created", label: "Created" },
    { value: "updated", label: "Updated" },
    { value: "-rating", label: "Average rating" },
    { value: "metacritic", label: "Popularity" },
  ];

  const label = sortOrder.filter((order) => order.value === selectedOrder);
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Sort by: {label[0]?.label || "Relevence"}
        </MenuButton>
        <MenuList>
          {sortOrder.map((order) => (
            <MenuItem
              key={order.label}
              onClick={() => onSortSelected(order.value)}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}
