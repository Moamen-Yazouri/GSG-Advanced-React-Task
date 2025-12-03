
import { ArrowLeft } from "lucide-react";
import useCharDetails from "../hook/useCharDetails";
import { distructIds } from "../utils/distructId";
import { useMemo } from "react";
import useEpisodes from "../hook/useEpisodes";
import { ErrorMessage } from "../../errorMessage";
import { LoadingSpinner } from "../../loadingSpinner";
import { CharacterInfo } from "./characterInfo";
import { EpisodesList } from "./episodesList";

interface CharacterDetailsPageProps {
  characterId: string;
  onBack: () => void;
}

const CharacterDetailsPage = ({ characterId, onBack }: CharacterDetailsPageProps) => {
  const { 
        data: character, 
        isLoading: isLoadingCharacter, 
        isError: isErrorCharacter, 
        error: characterError
    } = useCharDetails(characterId);


    const ids = useMemo(() => {
        if(character?.episode) {
            return distructIds(character.episode)
        }
        else{
            return [];
        }
    }, [character]);
        
    const { 
        data: episodes, 
        isLoading: isLoadingEpisodes, 
        isError: isErrorEpisodes 
    } = useEpisodes(ids);

  if (isLoadingCharacter) {
    return <LoadingSpinner />;
  }

  if (isErrorCharacter) {
    return (
      <div className="space-y-4">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-blue-900/50 rounded-lg text-blue-100 hover:border-blue-500/50 hover:bg-slate-800 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Characters
        </button>
        <ErrorMessage
          title="Failed to load character"
          message={characterError?.message || "An error occurred while fetching character details"}
        />
      </div>
    );
  }

  if (!character) {
    return null;
  }

  return (
    <div className="space-y-6">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-blue-900/50 rounded-lg text-blue-100 hover:border-blue-500/50 hover:bg-slate-800 transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Characters
      </button>

      <CharacterInfo character={character} />

      {isLoadingEpisodes && (
        <div className="py-8">
          <LoadingSpinner />
        </div>
      )}

      {isErrorEpisodes && (
        <ErrorMessage
          title="Failed to load episodes"
          message="An error occurred while fetching episode information"
        />
      )}

      {episodes && episodes.length > 0 && (
        <EpisodesList episodes={episodes} />
      )}
    </div>
  );
};

export default CharacterDetailsPage;