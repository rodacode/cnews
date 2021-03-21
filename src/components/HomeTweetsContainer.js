import { Box } from '@chakra-ui/react';
import {
  TwitterTimelineEmbed,
} from 'react-twitter-embed';
import HomeTweets from './HomeTweets'

const HomeTweetsContainer = () => {
  return (
    <>
      <Box d="flex" flexDirection="row" justifyContent="center">
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
    </>
  );
};

export default HomeTweetsContainer;
