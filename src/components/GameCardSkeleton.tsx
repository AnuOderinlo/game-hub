import { Card, CardBody, Heading, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";
import getCroppedImages from "../services/getCroppedImages";
import CriticScore from "./CriticScore";
import PlatformIconsList from "./PlatformIconsList";

const GameCardSkeleton = () => {
  return (
    <Card width="320px" borderRadius={10} overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
