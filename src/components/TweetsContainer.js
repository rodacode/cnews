import { Box, Heading } from '@chakra-ui/react';
import Tweets from './Tweets'

const TweetsContainer = ({title,account1, account2, account3, account4}) => {
  return (
    <Box boxShadow="dark-lg" bg="#f6f6f6" pt="12" pb="20" borderRadius="50" ml="4" mr="4">
      <Heading textAlign="center" m="12" color="#16161D">On Tweeter</Heading>
      <Box d="flex" flexWrap="wrap" flexDirection="row" justifyContent="center">
        <Box m="4">
          <Tweets
            user={account1}
          />
        </Box>
        <Box m="4">
          <Tweets
            user={account2}
          />
        </Box>
        <Box m="4">
          <Tweets
            user={account3}
          />
        </Box>
        <Box m="4">
          <Tweets
            user={account4}
          />
        </Box>

      </Box>
    </Box>
  );
};

export default TweetsContainer;
