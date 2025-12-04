import type { APIResponse, TCharacter } from "../@types";
import { api } from "./client";


export const getAllCharacters = async() => {
    const res = await api.get<APIResponse<TCharacter>>("/character");
    return res.data.results;
}

export const getCharacterById = async (id: string) => {
  const res = await api.get<TCharacter>(`/character/${id}`);
  return res.data; 
};