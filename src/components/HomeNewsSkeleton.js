import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";

const HomeNewsSkeleton = () => (
  <Box>
    <SkeletonText mt="4" noOfLines={1} spacing="4" />
    <Skeleton height="120px" />
    <Skeleton height="120px" />
    <Skeleton height="120px" />
    <Skeleton height="120px" />
  </Box>
);

export default HomeNewsSkeleton;
