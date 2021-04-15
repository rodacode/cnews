import { Box } from '@chakra-ui/react';

import NewsCard from './NewsCard'

const AltcoinsNewsHighlights = () => {
  return (
    <Box d="flex" flexWrap="wrap" justifyContent="center" m="4">
      <NewsCard
        title="Everyone can be a chef with SUSHI"
        description="Sushi Swap's token on the rise, 73% this week and doesn't look to be the top near.
        SushiSwap has an appealing revenue to price ratio. Third, the DeFi market, in general, is performing strongly with the total value locked (TVL) now surpassing $30 billion.
        If SUSHI nears UNI, then the price of SUSHI could reach around $40 to $60, considering that Uniswap is valued at around $6 billion"
        imageUrl="./images/sushi.jpeg"
        url="https://sushi.com//"
      />
      <NewsCard
        title="Vesta Equity chooses Algorand"
        description="Algorand permite a los desarrolladores crear nuevas aplicaciones en su plataforma impulsadas por criptomonedas, pero todavía existe un nivel de incertidumbre en torno al proyecto. La noticia positiva es que Vesta Equity anunció la semana pasada que utilizaría la blockchain de Algorand para la financiación y la inversión de propiedades residenciales."
        imageUrl="./images/algorand.png"
        url="https://morpheus.network/"
      />
      <NewsCard
        title="
        Chainlink publishes its version 2.0 Whitepaper with several new features"
        description="
        Since the release of the original Chainlink whitepaper more than three years ago, Chainlink has become the most widely used decentralized Oracle solution in the blockchain ecosystem, including DeFi, insurance, video games, NFT, and more."
        imageUrl="./images/chainlink.jpeg"
        url="#"
      />
      <NewsCard
        title="Great week for Celsius"
        description="Celsius Network is a P2P lending platform allowing users to borrow and lend cryptocurrencies. The system is based on the Celsius Network native token, CEL. By using their cryptocurrencies as collateral, borrowers can easily have access to fiat currencies with a small interest rate without the need to sell their cryptocurrencies.The business model of Celsius is making lots of sense in the crypto community. Why sell your crypto when you can borrow against it?."
        imageUrl="./images/celsius_network.jpg"
        url="#"
      />
      <NewsCard
        title="Vesta Equity chooses Algorand"
        description="Algorand permite a los desarrolladores crear nuevas aplicaciones en su plataforma impulsadas por criptomonedas, pero todavía existe un nivel de incertidumbre en torno al proyecto. La noticia positiva es que Vesta Equity anunció la semana pasada que utilizaría la blockchain de Algorand para la financiación y la inversión de propiedades residenciales."
        imageUrl="./images/algorand.png"
        url="https://morpheus.network/"
      />
    </Box>
  );
};

export default AltcoinsNewsHighlights;
