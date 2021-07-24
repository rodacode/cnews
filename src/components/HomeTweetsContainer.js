import { Box, Heading } from '@chakra-ui/react';
import HomeTweets from './HomeTweets'

const HomeTweetsContainer = () => {
  return (
    <Box boxShadow="dark-lg" bg="#fff" pt="12" pb="20" borderRadius="50" ml="4" mr="4">
      <Heading textAlign="center" m="12" color="#16161D">On Tweeter</Heading>
      <Box d="flex" flexWrap="wrap" flexDirection="row" justifyContent="center">
        <Box m="4">
          <HomeTweets
            user={"DocumentingBTC"}
          />
        </Box>
        <Box m="4">
          <HomeTweets
            user={"BTC_Archive"}
          />
        </Box>
        <Box m="4">
          <HomeTweets
            user={"edwardmorra_btc"}
          />
        </Box>
        <Box m="4">
          <HomeTweets
            user={"whale_alert"}
          />
        </Box>

      </Box>
    </Box>
  );
};

export default HomeTweetsContainer;
