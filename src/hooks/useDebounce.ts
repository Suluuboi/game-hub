import { useEffect, useState } from "react";

export default function useDebouncedInput(initialValue: string, delay: number) {
  const [inputValue, setInputValue] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInputValue(initialValue);
    }, delay);

    return () => clearTimeout(timer);
  }, [initialValue, delay]);

  const handleChange = (s: string) => {
    setInputValue(s);
  };

  return { inputValue, handleChange };
}
