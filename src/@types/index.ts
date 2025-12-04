export type TCharacter = {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: Gender;
  origin: ICharData;
  location: ICharData
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export interface ICharData {
  name: string;
  url: string; 
}

export enum EGender {
  Male = "Male",
  Female = "Female",
  Genderless = "Genderless",
  Unknown = "unknown",
}
export enum EStatus {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}
export type CharacterStatus = `${EStatus}`
export type Gender = `${EGender}`

export interface IEpisode{
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[]; 
  url: string;
  created: string;
}

export interface APIResponse<T> {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: T[];
}
