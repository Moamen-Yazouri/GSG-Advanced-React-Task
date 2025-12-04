import type { IEpisode } from "../@types";
import { distructIds } from "../components/character-details/utils/distructId";
import { api } from "./client";

export const getEpisodesByUrls = async (episodeUrls: string[]): Promise<IEpisode[]> => {
  if (!episodeUrls.length) return [];
  
  const ids = distructIds(episodeUrls);

  const res = await api.get<IEpisode[] | IEpisode>(`/episode/${ids}`);

  return Array.isArray(res.data) ? res.data : [res.data];
};