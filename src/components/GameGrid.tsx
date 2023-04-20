import React, { useEffect, useState } from "react";
import Axios from "../services/api-clients";
import { AxiosError } from "axios";
import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

export const GameGrid = () => {
  const { games, error } = useGames("/games");
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
