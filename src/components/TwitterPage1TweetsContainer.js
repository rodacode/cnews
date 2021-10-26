import { Box, Heading } from '@chakra-ui/react';
import Tweets from './Tweets'

const TwitterPage1TweetsContainer = () => {
  return (
    <>
      <Box boxShadow="dark-lg" bg="#f6f6f6" pt="12" pb="20" borderRadius="50" ml="4" mr="4" mb="30">
        <Heading textAlign="center" m="12" color="#16161D">BITCOIN</Heading>
        <Box d="flex" flexWrap="wrap" flexDirection="row" justifyContent="center">
          <Box m="4">
            <Tweets
              user={"DocumentingBTC"}
            />
          </Box>
          <Box m="4">
            <Tweets
              user={"BTC_Archive"}
            />
          </Box>
          <Box m="4">
            <Tweets
              user={"michael_saylor"}
            />
          </Box>
          <Box m="4">
            <Tweets
              user={"whale_alert"}
            />
          </Box>

        </Box>
      </Box>
      <Box boxShadow="dark-lg" bg="#f6f6f6" pt="12" pb="20" borderRadius="50" ml="4" mr="4" mb="30">
        <Heading textAlign="center" m="12" color="#16161D">ALTCOINS</Heading>
        <Box d="flex" flexWrap="wrap" flexDirection="row" justifyContent="center">
          <Box m="4">
            <Tweets
              user={"Tronfoundation"}
            />
          </Box>
          <Box m="4">
            <Tweets
              user={"AltcoinDailyio"}
            />
          </Box>
          <Box m="4">
            <Tweets
              user={"danreecer_"}
            />
          </Box>
          <Box m="4">
            <Tweets
              user={"AltcoinPsycho"}
            />
          </Box>

        </Box>
      </Box>
      <Box boxShadow="dark-lg" bg="#f6f6f6" pt="12" pb="20" borderRadius="50" ml="4" mr="4" mb="30">
        <Heading textAlign="center" m="12" color="#16161D">ETHEREUM</Heading>
        <Box d="flex" flexWrap="wrap" flexDirection="row" justifyContent="center">
          <Box m="4">
            <Tweets
              user={"VitalikButerin"}
            />
          </Box>
          <Box m="4">
            <Tweets
              user={"TimBeiko"}
            />
          </Box>
          <Box m="4">
            <Tweets
              user={"ethereum"}
            />
          </Box>
          <Box m="4">
            <Tweets
              user={"DocumentEther"}
            />
          </Box>

        </Box>
      </Box>
      <Box boxShadow="dark-lg" bg="#f6f6f6" pt="12" pb="20" borderRadius="50" ml="4" mr="4" mb="30">
        <Heading textAlign="center" m="12" color="#16161D">DEFI</Heading>
        <Box d="flex" flexWrap="wrap" flexDirection="row" justifyContent="center">
          <Box m="4">
            <Tweets
              user={"JoinDefi"}
            />
          </Box>
          <Box m="4">
            <Tweets
              user={"defiprime"}
            />
          </Box>
          <Box m="4">
            <Tweets
              user={"DeFi_Dad"}
            />
          </Box>
          <Box m="4">
            <Tweets
              user={"defipulse"}
            />
          </Box>

        </Box>
      </Box>
      <Box boxShadow="dark-lg" bg="#f6f6f6" pt="12" pb="20" borderRadius="50" ml="4" mr="4" mb="30">
        <Heading textAlign="center" m="12" color="#16161D">EXCHANGES</Heading>
        <Box d="flex" flexWrap="wrap" flexDirection="row" justifyContent="center">
          <Box m="4">
            <Tweets
              user={"cz_binance"}
            />
          </Box>
          <Box m="4">
            <Tweets
              user={"coinbase"}
            />
          </Box>
          <Box m="4">
            <Tweets
              user={"cryptocom"}
            />
          </Box>
          <Box m="4">
            <Tweets
              user={"Uniswap"}
            />
          </Box>

        </Box>
      </Box>
    </>
  );
};

export default TwitterPage1TweetsContainer;
