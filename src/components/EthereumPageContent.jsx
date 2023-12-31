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
import TweetsContainer from "./TweetsContainer";
import Footer from "./Footer";

const EthereumPageContent = ({ element }) => {
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
            ETHEREUM
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
              In the ever-evolving landscape of blockchain technology, Ethereum
              stands tall as a pioneering force that has redefined the
              possibilities of decentralized applications (DApps) and smart
              contracts. Launched in 2015 by visionary Vitalik Buterin and
              co-founder Gavin Wood, Ethereum has rapidly become the
              second-largest cryptocurrency by market capitalization. This
              article will delve into the key points of Ethereum, exploring its
              history, fundamental concepts, and the transformative impact it
              has had on the world of decentralized finance (DeFi) and beyond.
            </Text>
            <Box p="2" mt="8" width={["100%", "50%"]}>
              <Text fontSize="24px" mt="12" mb="4">
                ETHEREUM KEY FEATURES
              </Text>
              <UnorderedList>
                <ListItem fontWeight="bold" mb="2">
                  Flexibility and Versatility
                </ListItem>
                <Text fontSize="16px" mb="4">
                  Ethereum's blockchain is designed to be a flexible and
                  versatile platform, allowing developers to create a wide range
                  of applications beyond simple transactions. This adaptability
                  has contributed to Ethereum's prominence in hosting diverse
                  decentralized projects.
                </Text>
                <ListItem fontWeight="bold" mb="2">
                  Interoperability
                </ListItem>
                <Text fontSize="16px" mb="4">
                  Ethereum has facilitated interoperability between different
                  blockchain networks. Its standards, such as the ERC-20 and
                  ERC-721 token standards, have become widely adopted, allowing
                  for seamless integration and interaction between various
                  projects and platforms.
                </Text>
                <ListItem fontWeight="bold" mb="2">
                  Decentralization
                </ListItem>
                <Text fontSize="16px" mb="4">
                  Ethereum operates on a decentralized network of nodes,
                  ensuring that no single entity has control over the entire
                  network. This decentralization enhances security, resilience,
                  and censorship resistance.
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
                src={"./images/ethereum_logo.jpeg"}
                alt="polkadot logo"
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
              src={"./images/ethereum.jpeg"}
              alt="polkadot design chain"
              p={8}
              m={"20px auto"}
            />
            <Text fontSize="16px" mb="4">
              Ethereum's inception is intricately tied to the collaborative
              efforts of Vitalik Buterin and Gavin Wood. In 2013, Buterin
              envisioned a blockchain that transcended the limitations of
              Bitcoin, focusing on enabling smart contracts. Wood, Ethereum's
              co-founder, played a pivotal role in the technical development of
              the platform. In 2014, a groundbreaking crowdfunding campaign
              raised over $18 million to fund Ethereum's development, and the
              network officially went live on July 30, 2015.
            </Text>
            <Text fontSize="16px" mb="4">
              Polkadot was developed by the Web3 Foundation, a non-profit
              organization that is dedicated to promoting the use of
              decentralized technologies to create a more open and accessible
              internet. The platform was launched in 2020 and has since gained a
              significant following in the blockchain community. At its core,
              Polkadot is built on a unique architecture that allows for the
              creation of a "relay chain" that serves as the backbone of the
              entire network. This relay chain connects all of the individual
              blockchains that are built on top of it, allowing for the seamless
              transfer of data and assets between them. One of the key features
              of Polkadot is its ability to support multiple consensus
              mechanisms, including Proof of Stake (PoS) and Proof of Authority
              (PoA). This allows for greater flexibility in how individual
              blockchains are secured and maintained, depending on their
              specific needs and requirements. Overall, Polkadot offers a
              powerful and flexible blockchain platform that has the potential
              to revolutionize the way that decentralized applications are built
              and deployed.
            </Text>

            <Text fontSize="16px" mb="4">
              Recognizing the need for scalability improvements, Ethereum 2.0,
              also known as Serenity, was proposed as a comprehensive upgrade.
              The transition includes the adoption of the Proof-of-Stake (PoS)
              consensus mechanism to enhance scalability, security, and
              sustainability.
            </Text>
            <Text fontSize="16px" mb="4">
              In addition to supporting multiple consensus mechanisms, Polkadot
              also incorporates a number of other advanced features, such as:
              Cross-chain communication: Polkadot allows for seamless
              communication and exchange of data and assets between different
              parachains. Shared security: Polkadot's architecture allows for
              individual parachains to share the security provided by the
              network's overall consensus mechanism, further enhancing the
              overall security of the network. Upgradability: Polkadot's
              architecture allows for individual parachains to be upgraded
              without requiring a hard fork of the entire network, making it
              easier to implement new features and functionality. Overall,
              Polkadot's architecture is designed to be flexible, scalable, and
              interoperable, making it well-suited for a wide range of use cases
              and applications.
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

export default EthereumPageContent;
