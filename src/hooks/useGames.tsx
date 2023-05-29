import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGames = () => useData<Platform>("/games");

export default useGames;
