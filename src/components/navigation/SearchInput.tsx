import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useDebouncedValue } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../../store";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";

export default function SearchInput() {
  const [value, setValue] = useState("");
  const [debounced] = useDebouncedValue(value, 1000);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  useEffect(() => {
    setSearchText(debounced);
  }, [debounced]);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  console.log(location);
  return (
    <>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Search games..."
          value={value}
          onChange={(event) => {
            if (pathname !== "/") navigate("/");
            seachData(event);
          }}
        />
      </InputGroup>
    </>
  );

  function seachData(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value);
  }
}
