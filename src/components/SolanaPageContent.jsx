import React from "react";
import Header from "./Header";
import { Container } from "./Container";
import {
  Box,
  Text,
  Image,
  ListItem,
  UnorderedList,
  Heading,
} from "@chakra-ui/react";
import Footer from "./Footer";

const SolanaPageContent = ({ element }) => {
  return (
    <Container width="100vw" minH="100vh">
      <Header />

      <Box minW="100vw" ref={element}>
        <Box
          width={"90%"}
          mr="auto"
          ml="auto"
          d="flex"
          flexDirection="column"
          flexWrap="wrap"
          justifyContent="center"
        >
          <Heading textAlign="center" mt="12" mb="12">
            Solana
          </Heading>

          <Box
            width={"90%"}
            mr="auto"
            ml="auto"
            d="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="16px">
              In the ever-evolving landscape of blockchain technology, one name
              has been making waves for its exceptional performance and
              innovative approach – Solana. Launched in 2020, Solana has quickly
              risen to prominence as a high-performance blockchain, offering
              unparalleled speed and efficiency. In this article, we'll explore
              the fascinating world of Solana, delving into its tokenomics,
              history, and key differentiators that set it apart from other
              blockchains.
            </Text>
            <Box p="2" mt="8" width={["100%", "50%"]}>
              <Text fontSize="24px" mt="12" mb="4">
                SOLANA KEY FEATURES
              </Text>
              <UnorderedList>
                <ListItem fontWeight="bold" mb="2">
                  Scalability
                </ListItem>
                <Text fontSize="16px" mb="4">
                  Solana stands out for its exceptional scalability, processing
                  transactions at a speed that surpasses traditional blockchain
                  networks. The combination of PoH and PoS allows Solana to
                  handle a high throughput, making it an ideal choice for
                  applications requiring quick and cost-effective transactions.
                </Text>
                <ListItem fontWeight="bold" mb="2">
                  Low Transaction Costs
                </ListItem>
                <Text fontSize="16px" mb="4">
                  The efficient design of Solana's architecture translates into
                  significantly lower transaction fees compared to many other
                  blockchains. This makes it an attractive option for developers
                  and users seeking cost-effective solutions for their
                  decentralized applications
                </Text>
                <ListItem fontWeight="bold" mb="2">
                  Energy Efficiency
                </ListItem>
                <Text fontSize="16px" mb="4">
                  In contrast to the energy-intensive Proof of Work (PoW)
                  consensus mechanism used by some prominent blockchains,
                  Solana's PoH and PoS combination is more energy-efficient.
                  This aligns with the growing global focus on sustainable and
                  eco-friendly blockchain technologies.
                </Text>
                <ListItem fontWeight="bold" mb="2">
                  Ecosystem Growth
                </ListItem>
                <Text fontSize="16px" mb="4">
                  Solana's ecosystem has experienced rapid growth, with a myriad
                  of decentralized applications and projects being built on the
                  network. The Solana Foundation actively supports the
                  development of the ecosystem through grants, fostering
                  innovation and creativity.
                </Text>
              </UnorderedList>
            </Box>
            <Box
              p="10"
              d="flex"
              justifyContent="center"
              width={["100%", "50%"]}
            >
              <Image
                boxSize="280px"
                borderRadius="5px"
                src={"./images/solana_logo.png"}
                alt="solana logo"
              />
            </Box>
          </Box>
          <Box
            p="10"
            d="flex"
            flexDirection={"column"}
            justifyContent="center"
            width={"100%"}
          >
            <Image
              borderRadius="5px"
              src={"./images/solana.jpeg"}
              alt="solana design chain"
              p={8}
              m={"20px auto"}
            />
            <Text fontSize="16px" mb="4">
              As we navigate the complex landscape of blockchain technologies,
              Solana emerges as a beacon of innovation, offering a scalable and
              efficient solution to the challenges faced by its predecessors.
              With a robust tokenomics model, a brief but impactful history, and
              key differentiators setting it apart, Solana is undoubtedly a
              force to be reckoned with in the blockchain space. As the crypto
              industry continues to evolve, Solana's contributions are likely to
              play a pivotal role in shaping the future of decentralized
              technologies.
            </Text>

            <Text fontSize="26px" fontWeight={"bold"} mb="4">
              Solana Tokenomics
            </Text>
            <Text fontSize="16px" mb="4">
              Solana's native cryptocurrency is SOL, and it plays a crucial role
              in the network's operations. With a total supply of 500 million
              SOL, the tokenomics of Solana are designed to incentivize network
              validators and developers while promoting decentralization.
              Staking is a fundamental aspect of Solana's tokenomics. SOL
              holders can participate in the network's security and governance
              by staking their tokens, earning rewards in the process. This not
              only strengthens the network but also provides an avenue for SOL
              holders to generate passive income. Transaction fees on Solana are
              minimal, thanks to its efficient consensus mechanism. This
              low-cost structure fosters a vibrant ecosystem of decentralized
              applications (DApps) and decentralized finance (DeFi) projects,
              attracting developers and users alike.
            </Text>
          </Box>
        </Box>
        <Box mt="6">
          <div
            id="coinmarketcap-widget-marquee"
            coins="1,1027,825,6636,2010,5034,9285,5426,52"
            currency="USD"
            theme="light"
            transparent="true"
            show-symbol-logo="true"
          ></div>
        </Box>
        <Footer />
      </Box>
    </Container>
  );
};

export default SolanaPageContent;
