import { Box } from '@chakra-ui/react';
import {
  TwitterTimelineEmbed,
} from 'react-twitter-embed';

const HomeTweets = ({user}) => {
  return (
      <Box boxShadow="dark-lg" rounded="md">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName={user}
            onLoad={()=>console.log('onLoad')}
            options={{ height: 600 }}
            theme="dark"
          />
      </Box>
  );
};

export default HomeTweets;
