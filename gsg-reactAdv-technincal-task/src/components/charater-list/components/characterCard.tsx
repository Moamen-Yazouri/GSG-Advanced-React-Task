import type { TCharacter } from "../../../@types";
import { getStatusColor } from "../utils/getStatusColor";
import { Link } from "react-router-dom";

interface IProps {
  character: TCharacter;
}

export const CharacterCard = ({ character }: IProps) => {
  return (
    <Link
      to={`/characters/${character.id}`}
      className="text-left w-full group cursor-pointer block"
    >
      <div
        className="
          bg-slate-900 border border-blue-900/30 rounded-lg overflow-hidden 
          transition-all duration-200 h-full
          hover:border-cyan-400/70 hover:shadow-2xl hover:shadow-cyan-500/40
          hover:-translate-y-1 hover:bg-slate-900/80
        "
      >
        <div className="relative">
          <img
            src={character.image}
            alt={character.name}
            className="w-full aspect-square object-cover transition-transform duration-200 group-hover:scale-105"
          />
          <div className="absolute top-2 right-2">
            <span
              className={`${getStatusColor(
                character.status
              )} px-3 py-1 rounded-full text-xs backdrop-blur-sm`}
            >
              {character.status}
            </span>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-blue-100 mb-2 truncate group-hover:text-cyan-300 transition-colors">
            {character.name}
          </h3>
          <div className="space-y-1">
            <p className="text-sm text-blue-300/70">
              <span className="text-blue-400/50">Species:</span>{" "}
              {character.species}
            </p>
            <p className="text-sm text-blue-300/70 truncate">
              <span className="text-blue-400/50">Location:</span>{" "}
              {character.location.name}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
