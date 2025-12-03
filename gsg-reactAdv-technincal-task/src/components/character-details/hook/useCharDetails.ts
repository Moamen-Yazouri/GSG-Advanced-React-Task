import type { TCharacter } from '../../../@types';
import { useQuery } from '@tanstack/react-query';
import { getCharacterById } from '../../../api/characters';

const useCharDetails = (id: string) => {
    return useQuery<TCharacter, Error>({
    queryKey: ["characters", id],
    queryFn: () => getCharacterById(id),
  });
}

export default useCharDetails