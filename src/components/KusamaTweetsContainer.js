import { Box, Heading } from '@chakra-ui/react';
import HomeTweets from './HomeTweets'

const KusamaTweetsContainer = () => {
  return (
    <Box boxShadow="dark-lg"bg="#fff" pt="12" pb="20" borderRadius="50" ml="4" mr="4">
      <Heading textAlign="center" m="12" color="#16161D"> KUSAMA on Tweeter</Heading>
      <Box d="flex" flexWrap="wrap" flexDirection="row" justifyContent="center">
        <Box m="4">
          <HomeTweets
            user={"gavofyork"}
          />
        </Box>
        <Box m="4">
          <HomeTweets
            user={"DonnieBigBags"}
          />
        </Box>
        <Box m="4">
          <HomeTweets
            user={"gavofhood"}
          />
        </Box>
    
        <Box m="4">
          <HomeTweets
            user={"kusamabinladen"}
          />
        </Box>

      </Box>
    </Box>
  );
};

export default KusamaTweetsContainer;
