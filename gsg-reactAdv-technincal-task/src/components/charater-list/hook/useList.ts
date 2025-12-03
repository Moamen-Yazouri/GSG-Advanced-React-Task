import { useMemo, useState } from "react";
import type { TCharacter } from "../../../@types";
import { useCharacters } from "./useCharacters";
import { useDebouncedValue } from "../../../hooks/useDebounceHook";

export const useList = () => {
  const { data, isLoading, isError, error } = useCharacters();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebouncedValue(search, 500);
  const chars = useMemo<TCharacter[]>(() => {
    if (!data || isLoading) return [];
    
    return data.filter((char) =>
      char.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [data, isLoading, debouncedSearch]);

  return {
    search,
    setSearch,
    chars,
    isLoading,
    isError,
    error,
  };
};