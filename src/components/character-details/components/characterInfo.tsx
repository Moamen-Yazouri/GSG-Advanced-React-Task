
import { MapPin, User, Dna, Sparkles } from "lucide-react";
import type { TCharacter } from "../../../@types";

interface IProps {
  character: TCharacter;
}

export const CharacterInfo = ({ character }: IProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Alive":
        return "bg-emerald-500/90 text-emerald-100";
      case "Dead":
        return "bg-red-500/90 text-red-100";
      default:
        return "bg-slate-500/90 text-slate-100";
    }
  };

  return (
    <div className="bg-slate-900 border border-blue-900/30 rounded-lg p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <img
            src={character.image}
            alt={character.name}
            className="w-full md:w-64 h-auto rounded-lg shadow-lg shadow-blue-500/20"
          />
        </div>
        
        <div className="flex-1 space-y-4">
          <div>
            <h1 className="text-blue-100 mb-2">{character.name}</h1>
            <span className={`${getStatusColor(character.status)} px-3 py-1 rounded-full text-xs`}>
              {character.status}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Dna className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-blue-400/50">Species</p>
                <p className="text-blue-100">{character.species}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-blue-400/50">Gender</p>
                <p className="text-blue-100">{character.gender}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-blue-400/50">Origin</p>
                <p className="text-blue-100">{character.origin.name}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-rose-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-blue-400/50">Location</p>
                <p className="text-blue-100">{character.location.name}</p>
              </div>
            </div>
          </div>

          {character.type && (
            <div className="pt-4 border-t border-blue-900/30">
              <p className="text-sm text-blue-400/50">Type</p>
              <p className="text-blue-100">{character.type}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
