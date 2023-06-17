import { Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { useDebouncedValue } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import useDebouncedInput from "../../hooks/useDebounce";

interface Props {
  onSearch: (search: string) => void;
}

export default function SearchInput({ onSearch }: Props) {
  const [value, setValue] = useState("");
  const [debounced] = useDebouncedValue(value, 1000);

  useEffect(() => {
    onSearch(debounced);
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
