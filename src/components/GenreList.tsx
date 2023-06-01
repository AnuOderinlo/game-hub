import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import getCroppedImages from "../services/getCroppedImages";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return null;
  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => (
          <ListItem key={skeleton} paddingY={1}>
            <GenreListSkeleton />
          </ListItem>
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={1}>
          <HStack>
            <Image src={getCroppedImages(genre.image_background)} boxSize="32px" borderRadius={8} />
            <Button
              onClick={() => {
                onSelectGenre(genre);
              }}
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
export default GenreList;
