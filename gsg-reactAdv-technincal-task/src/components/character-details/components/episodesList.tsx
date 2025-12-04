import type { IEpisode } from "../../../@types";
import { Tv } from "lucide-react";
import useEpisodes from "../hook/useEpisodes";
import { LoadingSpinner } from "../../shared/loadingSpinner";
import { ErrorMessage } from "../../shared/errorMessage";

interface IProps {
  ids: string[];
}

export const EpisodesList = ({ ids }: IProps) => {
  const {
    data,
    isLoading,
    isError,
  } = useEpisodes(ids);

  if (isLoading) {
    return (
      <div className="py-8">
        <LoadingSpinner />
      </div>
    );
  }

  if (isError) {
    return (
      <ErrorMessage
        title="Failed to load episodes"
        message="An error occurred while fetching episode information"
      />
    );
  }

  const episodes: IEpisode[] = data ?? [];

  
  if (episodes.length === 0 && !isLoading) {
    return (
      <div className="bg-slate-900 border border-blue-900/30 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-2">
          <Tv className="w-5 h-5 text-cyan-400" />
          <h2 className="text-blue-100">Episodes</h2>
        </div>
        <p className="text-blue-300/70 text-sm">
          This character doesn&apos;t appear in any episodes.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-blue-900/30 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <Tv className="w-5 h-5 text-cyan-400" />
        <h2 className="text-blue-100">Episodes ({episodes.length})</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {episodes.map((episode) => (
          <div
            key={episode.id}
            className="p-4 bg-slate-800/50 border border-blue-900/20 rounded-lg hover:bg-slate-800 hover:border-blue-500/30 transition-all"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <p className="text-blue-100 truncate">{episode.name}</p>
                <p className="text-sm text-blue-300/70">{episode.episode}</p>
              </div>
              <span className="text-sm text-blue-400/50 whitespace-nowrap">
                {episode.air_date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
