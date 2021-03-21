import { Box } from '@chakra-ui/react';
import {
  TwitterTimelineEmbed,
} from 'react-twitter-embed';

const HomeTweets = ({user}) => {
  return (
    <>
      <Box>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName={user}
            options={{ height: 600 }}
            theme="dark"
          />
      </Box>
    </>
  );
};

export default HomeTweets;
