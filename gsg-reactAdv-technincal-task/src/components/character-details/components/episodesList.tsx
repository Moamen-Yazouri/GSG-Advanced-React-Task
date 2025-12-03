import type { IEpisode } from "../../../@types";
import { Tv } from "lucide-react";

interface IProps {
  episodes: IEpisode[];
}

export const EpisodesList = ({ episodes }: IProps) => {
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
