import React, { useEffect, useState } from "react";
import Axios from "../services/api-clients";
import { AxiosError } from "axios";
import { Text } from "@chakra-ui/react";

interface GamesRes {
  id: number;
  name: string;
}

export const GameGrid = () => {
  const [games, setGames] = useState<GamesRes[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getGames = async () => {
      try {
        const { data } = await Axios.get("/games");
        const { results } = data;

        setGames(results);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };
    getGames();
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => {
          return <li key={game.id}>{game.name}</li>;
        })}
      </ul>
    </>
  );
};
