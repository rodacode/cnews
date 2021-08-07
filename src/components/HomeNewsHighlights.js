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
        title="Lionel Messi NFT Collection Set for Launch"
        description="Lionel Messi will be celebrated in his first authenticated NFT collection, 'The Messiverse.'"
        imageUrl="./images/messi.jpeg"
        url="https://www.coindesk.com/lionel-messi-nft-collection-set-for-launch"
      />
    </>
  );
};

export default HomeNewsHighlights;
