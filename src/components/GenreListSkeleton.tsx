import { Card, CardBody, Heading, HStack, Skeleton, SkeletonCircle, SkeletonText, Text } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack>
      <SkeletonCircle />
      {/* <Text> */}
      <SkeletonText mt="4" noOfLines={1} skeletonHeight="4" />
      {/* </Text> */}
    </HStack>
  );
};

export default GenreListSkeleton;
