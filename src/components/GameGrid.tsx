import React, { useEffect, useState } from "react";
import Axios from "../services/api-clients";
import { AxiosError } from "axios";
import { Image, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

export const GameGrid = () => {
  const { games, error } = useGames("/games");

  console.log(games);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10} padding={7}>
        {games.map((game) => (
          <GameCard game={game} key={game.id}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};
