import type { IEpisode } from "../@types";
import { api } from "./client";

export const getEpisodesByUrls = async (episodeUrls: string[]): Promise<IEpisode[]> => {
  if (!episodeUrls.length) return [];
  
  const ids = episodeUrls
    .map((url) => url.split("/").pop())
    .filter(Boolean)
    .join(",");

  const res = await api.get<IEpisode[] | IEpisode>(`/episode/${ids}`);

  return Array.isArray(res.data) ? res.data : [res.data];
};