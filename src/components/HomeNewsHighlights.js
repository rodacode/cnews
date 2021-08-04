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
        title="Grayscale Hires David LaValle to Be ETF Head"
        description="LaValle is Grayscale’s first hire for its ETF business following the posting in the spring of several job listings by Grayscale for ETF specialists. (Grayscale is a subsidiary of Digital Currency Group, CoinDesk’s parent company.)"
        imageUrl="./images/lavalle.jpeg"
        url="https://www.coindesk.com/grayscale-hires-david-lavalle-to-be-etf-head"
      />
    </>
  );
};

export default HomeNewsHighlights;
