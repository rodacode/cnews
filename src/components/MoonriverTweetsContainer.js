import { Box, Heading } from '@chakra-ui/react';
import HomeTweets from './HomeTweets'

const MoonriverTweetsContainer = () => {
  return (
    <Box boxShadow="dark-lg"bg="#fff" pt="12" pb="20" borderRadius="50" ml="4" mr="4">
      <Heading textAlign="center" m="12" color="#16161D"> MOONRIVER on Tweeter</Heading>
      <Box d="flex" flexWrap="wrap" flexDirection="row" justifyContent="center">
        <Box m="4">
          <HomeTweets
            user={"MoonriverNW"}
          />
        </Box>
        <Box m="4">
          <HomeTweets
            user={"Trobriand15"}
          />
        </Box>
        <Box m="4">
          <HomeTweets
            user={"DonnieBigBags"}
          />
        </Box>
        <Box m="4">
          <HomeTweets
            user={"PaulsCryptoCall"}
          />
        </Box>

      </Box>
    </Box>
  );
};

export default MoonriverTweetsContainer;
