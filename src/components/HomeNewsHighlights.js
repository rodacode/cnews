import NewsCard from './NewsCard'

const HomeNewsHighlights = () => {
  return (
    <>
      <NewsCard
        title="Avalanche (AVAX) price is up 200% this month"
        description="One of the biggest developments to happen for the Avalanche protocol was the announcement of Avalanche Rush on Aug. 18, a $180 million liquidity mining incentive program launched in conjunction with Aave and Curve that is designed to introduce more applications and assets to its growing DeFi ecosystem"
        imageUrl="./images/avax.png"
        url="https://cointelegraph.com/news/3-reasons-why-avalanche-avax-price-is-up-200-this-month"
      />
      <NewsCard
        title="Lionel Messi NFT Collection Set for Launch"
        description="Lionel Messi will be celebrated in his first authenticated NFT collection, 'The Messiverse.'"
        imageUrl="./images/messi.jpeg"
        url="https://www.coindesk.com/lionel-messi-nft-collection-set-for-launch"
      />
    </>
  );
};

export default HomeNewsHighlights;
