import { ArrowLeft } from "lucide-react";
import { useMemo } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import useCharDetails from "../hook/useCharDetails";
import { distructIds } from "../utils/distructId";
import { ErrorMessage } from "../../shared/errorMessage";
import { LoadingSpinner } from "../../shared/loadingSpinner";
import { CharacterInfo } from "./characterInfo";
import { EpisodesList } from "./episodesList";

const CharacterDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: character,
    isLoading: isLoadingCharacter,
    isError: isErrorCharacter,
    error: characterError,
  } = useCharDetails(id || "");

  const ids = useMemo(() => {
    if (character?.episode) {
      return distructIds(character.episode);
    }
    return [];
  }, [character]);



  const handleBack = () => {
  
    navigate("/");
  };

  if (isLoadingCharacter) {
    return <LoadingSpinner />;
  }

  if (isErrorCharacter) {
    return (
      <div className="space-y-4">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-blue-900/50 rounded-lg text-blue-100 hover:border-blue-500/50 hover:bg-slate-800 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Characters
        </button>
        <ErrorMessage
          title="Failed to load character"
          message={
            characterError?.message ||
            "An error occurred while fetching character details"
          }
        />
      </div>
    );
  }

  if (!id || !character) {
    return <Navigate to="*" replace />;
  }

  return (
    <div className="space-y-6">
      <button
        onClick={handleBack}
        className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-blue-900/50 rounded-lg text-blue-100 hover:border-blue-500/50 hover:bg-slate-800 transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Characters
      </button>

      <CharacterInfo character={character} />



      <EpisodesList ids={ids}/>
    </div>
  );
};

export default CharacterDetails;
