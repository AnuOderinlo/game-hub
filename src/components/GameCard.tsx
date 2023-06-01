import React from "react";
import { dataRes } from "../hooks/useData";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCroppedImages from "../services/getCroppedImages";

interface Props {
  game: dataRes;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImages(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconsList platform={game.parent_platforms.map((p) => p.platform)}></PlatformIconsList>
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
