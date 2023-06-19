import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useDebouncedValue } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../../store";

export default function SearchInput() {
  const [value, setValue] = useState("");
  const [debounced] = useDebouncedValue(value, 1000);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  useEffect(() => {
    setSearchText(debounced);
  }, [debounced]);

  return (
    <>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Search games..."
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
      </InputGroup>
    </>
  );
}
