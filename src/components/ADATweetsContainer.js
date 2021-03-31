import { Box, Heading } from '@chakra-ui/react';
import HomeTweets from './HomeTweets'

const HomeTweetsContainer = () => {
  return (
    <Box boxShadow="dark-lg"bg="#fff" pt="12" pb="20" borderRadius="50" ml="4" mr="4">
      <Heading textAlign="center" m="12" color="#16161D"> Cardano nn Tweeter</Heading>
      <Box d="flex" flexWrap="wrap" flexDirection="row" justifyContent="center">
        <Box m="4">
          <HomeTweets
            user={"Cardano"}
          />
        </Box>
        <Box m="4">
          <HomeTweets
            user={"IOHK_Charles"}
          />
        </Box>
        <Box m="4">
          <HomeTweets
            user={"bigpeyYT"}
          />
        </Box>
        <Box m="4">
          <HomeTweets
            user={"_Cardano_ADA"}
          />
        </Box>

      </Box>
    </Box>
  );
};

export default HomeTweetsContainer;
