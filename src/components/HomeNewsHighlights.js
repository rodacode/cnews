import NewsCard from './NewsCard'

const HomeNewsHighlights = () => {
  return (
    <>
      <NewsCard
        title="Moonriver Smart Contract Platform Completes Launch Sequence and is Live on Kusama"
        description="Moonbeam, the Ethereum-compatible smart contract platform on Polkadot, announced today the launch completion of Moonriver, its community-led sister network on Kusama.  Moonriver is now live. In completing the final phase of the launch process, balance transfers and EVM functionality have been enabled and the network is fully functional. Moonriver is the first EVM-compatible parachain on Kusama, and the only blockchain to deliver a seamless experience through full Ethereum compatibility"
        imageUrl="./images/moonriver.png"
        url="https://moonbeam.network/announcements/moonriver-completes-launch-kusama/"
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
