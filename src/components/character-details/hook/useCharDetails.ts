import type { TCharacter } from '../../../@types';
import { useQuery } from '@tanstack/react-query';
import { getCharacterById } from '../../../api/characters';

const useCharDetails = (id: string) => {
  return useQuery<TCharacter, Error>({
    queryKey: ["characters", id],
    queryFn: () => getCharacterById(id),
    enabled: !!id, 
    staleTime: 5 * 60 * 1000, 
    gcTime: 10 * 60 * 1000, 
  });
}

export default useCharDetails