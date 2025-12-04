import type { TCharacter } from "../../../@types";
import { CharacterCard } from "./characterCard";

interface IProps {
  characters: TCharacter[];
}

export const CharactersList = ({ characters }: IProps) => {
  if (characters.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-blue-300/50">No characters found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {characters.map((character) => (
        <CharacterCard 
          key={character.id} 
          character={character}
        />
      ))}
    </div>
  );
};
