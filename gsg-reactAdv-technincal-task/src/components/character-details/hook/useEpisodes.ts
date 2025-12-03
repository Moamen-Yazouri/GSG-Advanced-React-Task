import type { IEpisode } from '../../../@types';
import { useQuery } from '@tanstack/react-query';
import { getEpisodesByUrls } from '../../../api/episodes';

const useEpisodes = (urls: string[]) => {
    return useQuery<IEpisode[], Error>({
    queryKey: ["episodes"],
    queryFn: () => getEpisodesByUrls(urls),
  });
}

export default useEpisodes