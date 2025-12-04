import type { IEpisode } from '../../../@types';
import { useQuery } from '@tanstack/react-query';
import { getEpisodesByUrls } from '../../../api/episodes';

const useEpisodes = (urls: string[]) => {
    return useQuery<IEpisode[], Error>({
    queryKey: ["episodes"],
    queryFn: () => getEpisodesByUrls(urls),
    enabled: urls.length > 0, 
    staleTime: 5 * 60 * 1000, 
    gcTime: 10 * 60 * 1000, 
  });
}

export default useEpisodes