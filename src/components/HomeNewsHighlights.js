import NewsCard from './NewsCard'

const HomeNewsHighlights = () => {
  return (
    <>
      <NewsCard
        title="Kusama’s parachain auctions"
        description="Eleven projects joined the race when Kusama parachain auctions started on June 15. A few more got in during the latter auctions of the first batch. With impressive gains to the tune of 900,000 KSM (approximately $180 million, at the time of writing), are Kusama auctions still fair and democratic, or is everything already decided by whales?"
        imageUrl="./images/kusama.png"
        url="https://cointelegraph.com/news/how-much-intrigue-is-behind-kusama-s-parachain-auctions"
      />
      <NewsCard
        title="$22B hedge fund Point72 reportedly searching for a 'head of crypto'"
        description="New York billionaire Steven Cohen’s hedge fund Point72 Asset Management, is reportedly searching for a “head of crypto."
        imageUrl="./images/cointelegraph.jpeg"
        url="https://cointelegraph.com/news/22b-hedge-fund-point72-reportedly-searching-for-a-head-of-crypto"
      />
    </>
  );
};

export default HomeNewsHighlights;
