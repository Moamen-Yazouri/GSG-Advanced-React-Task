import { useQuery } from "@tanstack/react-query";
import type { TCharacter } from "../../../@types";
import { getAllCharacters } from "../../../api/characters";

export function useCharacters() {
  return useQuery<TCharacter[], Error>({
    queryKey: ["characters"],
    queryFn: getAllCharacters,
  });
}