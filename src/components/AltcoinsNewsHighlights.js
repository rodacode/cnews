import { Box } from '@chakra-ui/react';

import NewsCard from './NewsCard'

const AltcoinsNewsHighlights = () => {
  return (
    <Box d="flex" flexWrap="wrap" justifyContent="center" m="4">
      <NewsCard
        title="TLM, Aliens may be the next hot coin available for staking in Binance"
        description="Binance announces the 19th project on Binance Launchpool - Alien Worlds (TLM), a simulated economy where players compete with NFTs. Listing on Binance 2021-04-13"
        imageUrl="./images/tlm.jpeg"
        url="#"
      />
      <NewsCard
        title="Great week for Celsius"
        description="Celsius Network is a P2P lending platform allowing users to borrow and lend cryptocurrencies. The system is based on the Celsius Network native token, CEL. By using their cryptocurrencies as collateral, borrowers can easily have access to fiat currencies with a small interest rate without the need to sell their cryptocurrencies.The business model of Celsius is making lots of sense in the crypto community. Why sell your crypto when you can borrow against it?."
        imageUrl="./images/celsius_network.jpg"
        url="#"
      />
    </Box>
  );
};

export default AltcoinsNewsHighlights;
