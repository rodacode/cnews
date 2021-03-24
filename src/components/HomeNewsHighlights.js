import NewsCard from './NewsCard'

const HomeNewsHighlights = () => {
  return (
    <>
      <NewsCard
        title="Tesla is now accepting bitcoin as payment method"
        description="Elon Musk, Tesla CEO, announced that the company is accepting bitcoin as a payment method to buy Tesla vehicles in the United States.
      But not only that, he also said that is going to hodl the bitcoins that the company get from the sells."
        imageUrl="./images/teslaNews.jpeg"
        url="#"
      />
      <NewsCard
        title="Coinbase’s IPO is going to be a breakpoint for crypto"
        description="Coinbase’s IPO could lead to a valuation for the company of around $67.6 billion and will be the first direct listing to take place on the Nasdaq."
        imageUrl="./images/coinbase-ipo.jpeg"
        url="#"
      />
    </>
  );
};

export default HomeNewsHighlights;
