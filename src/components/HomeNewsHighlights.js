import NewsCard from './NewsCard'

const HomeNewsHighlights = () => {
  return (
    <>
      <NewsCard
        title="Binance Launches Zero-Commission, Tradable Stock Tokens"
        description="Binance announces the official launch of its zero-commission, tradable stock tokens, allowing the users to trade fractional stocks. Stock tokens are denominated, settled, and collateralized in BUSD.
        The first Binance Stock Token to be listed is Tesla Inc. (TSLA). Trading for the TSLA/BUSD pair is scheduled to open at 2021-04-12 1:35 PM (UTC). Users will be able to trade fractional Tesla stock on the Binance website."
        imageUrl="./images/teslaNews.jpeg"
        url="https://www.binance.com/en/support/articles/2c64611658c645a59e05ef12f02c22ab"
      />
      <NewsCard
        title="Coinbase made more in Q1 2021 than all of 2020"
        description="The release showed Coinbase made over $1.8 billion (revenue) in Q1 of 2021—an amount greater than the $1.1 billion figure for all of 2020 and nearly ten times the $190 million revenue in the first quarter of last year."
        imageUrl="./images/coinbase_q1_2021.png"
        url="#"
      />
    </>
  );
};

export default HomeNewsHighlights;
