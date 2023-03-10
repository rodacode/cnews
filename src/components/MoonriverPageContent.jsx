import React from "react";
import Header from "./Header";
import { Container } from "./Container";
import { Box, Text, Image, Heading } from "@chakra-ui/react";
import TweetsContainer from "./TweetsContainer";
import Footer from "./Footer";

const MoonriverPageContent = ({ element }) => {
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
            MOONRIVER
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
            <Box p="2" mt="8" width={["100%", "50%"]}>
              <Text fontSize="16px">
                Moonriver is the network’s Kusama deployment, and have its own
                utility token also called Moonriver (MOVR). Supply and other
                token economic behaviors on Moonriver will be the same as
                Moonbeam, but token distribution will be different in order to
                support the unique goals and attributes of the network.
                Moonriver will serve as a “CanaryNet” for Moonbeam, but it will
                also be a community-led experiment where the community will
                decide the direction it takes. Among other things, Moonriver
                used a large parachain crowdloan to obtain its initial parachain
                slot on Kusama.
              </Text>
              <Text fontSize="16px">
                By mirroring Ethereum’s Web3 RPC, accounts, keys, subscriptions,
                logs, and more, Moonriver minimizes the changes required to run
                existing Solidity smart contracts on the network. Ethereum
                projects can simply replicate their DApp and deploy it to
                Moonbeam using Hardhat, Truffle, Remix, and other popular
                deployment tools.
              </Text>
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
                src={"./images/moonriver.png"}
                alt="moonriver logo"
              />
            </Box>
          </Box>
          <Box p="10" d="flex" justifyContent="center" width={"100%"}>
            <Image
              borderRadius="5px"
              src={"./images/ParallelParachains.jpeg"}
              alt="movr design chain"
            />
          </Box>
        </Box>
        <Footer />
      </Box>
    </Container>
  );
};

export default MoonriverPageContent;
