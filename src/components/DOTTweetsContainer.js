import { Box, Heading } from '@chakra-ui/react';
import HomeTweets from './HomeTweets'

const DOTTweetsContainer = () => {
  return (
    <Box boxShadow="dark-lg"bg="#fff" pt="12" pb="20" borderRadius="50" ml="4" mr="4">
      <Heading textAlign="center" m="12" color="#16161D"> DOT on Tweeter</Heading>
      <Box d="flex" flexWrap="wrap" flexDirection="row" justifyContent="center">
        <Box m="4">
          <HomeTweets
            user={"gavofyork"}
          />
        </Box>
        <Box m="4">
          <HomeTweets
            user={"gavofhood"}
          />
        </Box>
        <Box m="4">
          <HomeTweets
            user={"DonnieBigBags"}
          />
        </Box>
        <Box m="4">
          <HomeTweets
            user={"JEFE_DOTSAMA"}
          />
        </Box>

      </Box>
    </Box>
  );
};

export default DOTTweetsContainer;
