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

const DotPageContent = ({ element }) => {
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
            POLKADOT
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
              Polkadot is a next-generation blockchain platform that was created
              to address the scalability and interoperability issues that
              currently plague many blockchain networks. Developed by the Web3
              Foundation, Polkadot allows for the creation of multiple
              independent blockchains that can communicate and exchange data
              with each other, leading to greater efficiency and flexibility in
              the blockchain ecosystem.
            </Text>
            <Box p="2" mt="8" width={["100%", "50%"]}>
              <Text fontSize="24px" mt="12" mb="4">
                POLKADOT KEY FEATURES
              </Text>
              <UnorderedList>
                <ListItem fontWeight="bold" mb="2">
                  Scalability
                </ListItem>
                <Text fontSize="16px" mb="4">
                  Polkadot provides unprecedented economic scalability by
                  enabling a common set of validators to secure multiple
                  blockchains. Polkadot provides transactional scalability by
                  spreading transactions across multiple parallel blockchains.{" "}
                </Text>
                <ListItem fontWeight="bold" mb="2">
                  Interoperability
                </ListItem>
                <Text fontSize="16px" mb="4">
                  Polkadot enables cross-blockchain transfers of any type of
                  data or asset, not just tokens. Connecting to Polkadot gives
                  you the ability to interoperate with a wide variety of
                  blockchains in the Polkadot network.
                </Text>
                <ListItem fontWeight="bold" mb="2">
                  Shared security
                </ListItem>
                <Text fontSize="16px" mb="4">
                  Polkadot's novel data availability and validity scheme allows
                  chains to interact with each other in a meaningful way. Chains
                  remain independent in their governance, but united in their
                  security.
                </Text>
                <ListItem fontWeight="bold" mb="2">
                  On-chain governance
                </ListItem>
                <Text fontSize="16px" mb="4">
                  Polkadot's novel data availability and validity scheme allows
                  chains to interact with each other in a meaningful way. Chains
                  remain independent in their governance, but united in their
                  security.
                </Text>
                <ListItem fontWeight="bold" mb="2">
                  Forkless upgrades
                </ListItem>
                <Text fontSize="16px" mb="4">
                  Polkadot can upgrade without hard forks to integrate new
                  features or fix bugs. This capability enables Polkadot to
                  easily adapt to changes and upgrade itself as better
                  technologies become available.
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
                src={"./images/dot.png"}
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
              src={"./images/PolkadotRelayChain.jpeg"}
              alt="polkadot design chain"
              p={8}
              m={"20px auto"}
            />
            <Text fontSize="16px" mb="4">
              Polkadot is a multi-chain platform that allows for the creation of
              parallel, independent blockchains that can interact with each
              other in a seamless and secure manner. The platform is designed to
              address the scalability and interoperability issues that currently
              affect many blockchain networks, such as slow transaction speeds
              and limited functionality.
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
            <Text fontSize="26px" fontWeight={"bold"} mb="4">
              How Polkadot Works
            </Text>
            <Text fontSize="16px" mb="4">
              Polkadot is built on a unique architecture that allows for the
              creation of multiple independent blockchains that can communicate
              and exchange data with each other. This architecture is designed
              to address the scalability and interoperability issues that
              currently affect many blockchain networks, allowing for greater
              efficiency and flexibility in the ecosystem. At the core of
              Polkadot is the relay chain, which serves as the backbone of the
              entire network. This relay chain connects all of the individual
              blockchains that are built on top of it, allowing for the seamless
              transfer of data and assets between them. Each individual
              blockchain in the Polkadot network is referred to as a
              "parachain." These parachains are built on top of the relay chain
              and are able to communicate with each other using a common set of
              protocols and standards. One of the key benefits of Polkadot's
              architecture is its ability to support multiple consensus
              mechanisms. This allows for greater flexibility in how individual
              blockchains are secured and maintained, depending on their
              specific needs and requirements.
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

export default DotPageContent;
