import React, { useEffect, useState } from "react";
import Axios from "../services/api-clients";
import { AxiosError } from "axios";
import { Image, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

export const GameGrid = () => {
  const { games, error, isLoading } = useGames("/games");
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  console.log(games);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10} padding={7}>
        {isLoading && skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard game={game} key={game.id}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};
