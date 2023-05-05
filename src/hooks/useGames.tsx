import Axios from "../services/api-clients";
import { AxiosError } from "axios";
import { useState, useEffect } from "react";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface GamesRes {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (url: string) => {
  const [games, setGames] = useState<GamesRes[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getGames = async () => {
      try {
        const { data } = await Axios.get(url);
        const { results } = data;

        setGames(results);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };
    getGames();
  }, []);

  return { games, error };
};

export default useGames;
