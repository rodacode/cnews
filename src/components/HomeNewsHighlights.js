import NewsCard from './NewsCard'

const HomeNewsHighlights = () => {
  return (
    <>
      <NewsCard
        title="Ethereum’s London Hard Fork happening this week"
        description="The next major upgrade coming to the Ethereum blockchain is the London hard fork. Although it’s difficult to pinpoint exactly when it will be released, current thinking suggests that it’ll be on Wednesday, Aug. 4.

 

        Contained within the hard fork are five Ethereum Improvement Proposals, otherwise known as EIPs for short. It’s here where we find the devil in the detail, and the reasons why a not-insubstantial-chunk of the community are unhappy."
        imageUrl="./images/eth.jpg"
        url="https://coinmarketcap.com/alexandria/article/ethereums-london-hard-fork-what-is-it-and-why-is-it-controversial"
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
