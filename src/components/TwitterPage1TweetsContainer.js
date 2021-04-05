import { Box, Heading } from '@chakra-ui/react';
import HomeTweets from './HomeTweets'

const TwitterPage1TweetsContainer = () => {
  return (
    <>
      <Box boxShadow="dark-lg" bg="#f6f6f6" pt="12" pb="20" borderRadius="50" ml="4" mr="4" mb="30">
        <Heading textAlign="center" m="12" color="#16161D">BITCOIN</Heading>
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
              user={"michael_saylor"}
            />
          </Box>
          <Box m="4">
            <HomeTweets
              user={"whale_alert"}
            />
          </Box>

        </Box>
      </Box>
      <Box boxShadow="dark-lg" bg="#f6f6f6" pt="12" pb="20" borderRadius="50" ml="4" mr="4" mb="30">
        <Heading textAlign="center" m="12" color="#16161D">ALTCOINS</Heading>
        <Box d="flex" flexWrap="wrap" flexDirection="row" justifyContent="center">
          <Box m="4">
            <HomeTweets
              user={"Tronfoundation"}
            />
          </Box>
          <Box m="4">
            <HomeTweets
              user={"AltcoinDailyio"}
            />
          </Box>
          <Box m="4">
            <HomeTweets
              user={"danreecer_"}
            />
          </Box>
          <Box m="4">
            <HomeTweets
              user={"AltcoinPsycho"}
            />
          </Box>

        </Box>
      </Box>
      <Box boxShadow="dark-lg" bg="#f6f6f6" pt="12" pb="20" borderRadius="50" ml="4" mr="4" mb="30">
        <Heading textAlign="center" m="12" color="#16161D">ETHEREUM</Heading>
        <Box d="flex" flexWrap="wrap" flexDirection="row" justifyContent="center">
          <Box m="4">
            <HomeTweets
              user={"VitalikButerin"}
            />
          </Box>
          <Box m="4">
            <HomeTweets
              user={"TimBeiko"}
            />
          </Box>
          <Box m="4">
            <HomeTweets
              user={"ethereum"}
            />
          </Box>
          <Box m="4">
            <HomeTweets
              user={"DocumentEther"}
            />
          </Box>

        </Box>
      </Box>
      <Box boxShadow="dark-lg" bg="#f6f6f6" pt="12" pb="20" borderRadius="50" ml="4" mr="4" mb="30">
        <Heading textAlign="center" m="12" color="#16161D">DEFI</Heading>
        <Box d="flex" flexWrap="wrap" flexDirection="row" justifyContent="center">
          <Box m="4">
            <HomeTweets
              user={"JoinDefi"}
            />
          </Box>
          <Box m="4">
            <HomeTweets
              user={"defiprime"}
            />
          </Box>
          <Box m="4">
            <HomeTweets
              user={"DeFi_Dad"}
            />
          </Box>
          <Box m="4">
            <HomeTweets
              user={"defipulse"}
            />
          </Box>

        </Box>
      </Box>
      <Box boxShadow="dark-lg" bg="#f6f6f6" pt="12" pb="20" borderRadius="50" ml="4" mr="4" mb="30">
        <Heading textAlign="center" m="12" color="#16161D">EXCHANGES</Heading>
        <Box d="flex" flexWrap="wrap" flexDirection="row" justifyContent="center">
          <Box m="4">
            <HomeTweets
              user={"cz_binance"}
            />
          </Box>
          <Box m="4">
            <HomeTweets
              user={"coinbase"}
            />
          </Box>
          <Box m="4">
            <HomeTweets
              user={"cryptocom"}
            />
          </Box>
          <Box m="4">
            <HomeTweets
              user={"Uniswap"}
            />
          </Box>

        </Box>
      </Box>
    </>
  );
};

export default TwitterPage1TweetsContainer;
