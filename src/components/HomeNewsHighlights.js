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
        title="Kilt Protocol looking to be the next winner of the Kusama Crowdloans auction"
        description="KILT provides a base layer for verifiable credentials in the Web 3.0 world. Using the benefits of blockchain, we bring real-world accreditation to the digital world, creating a way for business to verify credentials and bring trust to a whole new level."
        imageUrl="./images/kilt.png"
        url="https://www.kilt.io/"
      />
    </>
  );
};

export default HomeNewsHighlights;
