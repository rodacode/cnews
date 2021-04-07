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
        title="Coinbase made more in Q1 2021 than all of 2020"
        description="The release showed Coinbase made over $1.8 billion (revenue) in Q1 of 2021—an amount greater than the $1.1 billion figure for all of 2020 and nearly ten times the $190 million revenue in the first quarter of last year."
        imageUrl="./images/coinbase_q1_2021.png"
        url="#"
      />
    </>
  );
};

export default HomeNewsHighlights;
