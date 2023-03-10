import React from "react";
import Header from "./Header";
import { Container } from "./Container";
import { Box, Text, Image } from "@chakra-ui/react";

import TweetsContainer from "./TweetsContainer";
import BTCPageTestimonials from "./BTCPageTestimonials";
import BTCPageTestimonials2 from "./BTCPageTestimonials2";
import Footer from "./Footer";

const BitcoinPageContent = ({ element }) => {
  return (
    <Container width="100vw" minH="100vh">
      <Header />
      <Box minW="100vw" ref={element}>
        <Box
          p="8"
          d="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
        >
          <Box p="8" mt="8" width={["100%", "50%"]}>
            <Text fontSize="20px" mb={2}>
              Bitcoin, the world's first decentralized cryptocurrency, was
              created in 2009 by an unknown person or group using the pseudonym
              Satoshi Nakamoto. Bitcoin operates on a decentralized digital
              ledger technology known as blockchain, which records every
              transaction made on the network. In this article, we will delve
              into the story of Bitcoin, its origin, how it works, and its
              impact on the world.
            </Text>
            <Text fontSize="30px" mb={2}>
              How Bitcoin Works
            </Text>
            <Text fontSize="20px" mb={2}>
              Bitcoin is a digital currency that operates on a decentralized
              network, meaning it is not controlled by any central authority or
              government. Instead, Bitcoin transactions are recorded on a public
              ledger known as the blockchain, which is maintained by a network
              of computers around the world. Bitcoin transactions are verified
              by a process known as mining, where computers on the network
              compete to solve complex mathematical puzzles. The first computer
              to solve the puzzle earns a reward in the form of new Bitcoins,
              and the transaction is added to the blockchain.
            </Text>
            <Text fontSize="20px" mb={2}>
              To prevent fraudulent activity, the Bitcoin network uses
              cryptographic protocols to secure transactions and verify the
              identity of users. Each user has a public key and a private key,
              which are used to sign and verify transactions. When a user
              initiates a transaction, it is broadcast to the network and
              verified by other nodes using complex mathematical algorithms.
              Once a transaction is verified, it is added to the blockchain,
              which is a decentralized ledger that records all transactions made
              on the network. Each block in the blockchain contains a hash of
              the previous block, creating a chain of blocks that cannot be
              altered without consensus from the network. This decentralized
              system ensures that transactions are secure, transparent, and
              resistant to censorship or interference from governments or other
              authorities.
            </Text>
            <Text fontSize="30px" mb={2}>
              {" "}
              Advantages of Bitcoin
            </Text>
            <Text fontSize="20px" mb={2}>
              Bitcoin has several advantages over traditional currencies and
              payment systems. These include:
            </Text>
            <Text fontSize="20px" mb={2}>
              Decentralization: Bitcoin is decentralized, meaning that it is not
              controlled by any central authority. This makes it resistant to
              government interference, inflation, and other economic factors
              that can affect traditional currencies.{" "}
            </Text>
            <Text fontSize="20px" mb={2}>
              Transparency: The blockchain is a public ledger that keeps a
              record of all Bitcoin transactions. This makes it easy to trace
              the flow of funds and ensures that transactions are transparent
              and secure.
            </Text>
            <Text fontSize="20px" mb={2}>
              Low Transaction Fees: Bitcoin transactions have lower fees than
              traditional payment systems, making it more cost-effective for
              businesses and individuals to send and receive money.
            </Text>
          </Box>
          <Box p="4" d="flex" justifyContent="center" width={["100%", "50%"]}>
            <Image
              boxSize="320px"
              borderRadius="50%"
              src={"./images/btc.png"}
              alt="cardano logo"
            />
          </Box>
        </Box>
        <BTCPageTestimonials />
        <BTCPageTestimonials2 />
        <Footer />
      </Box>
    </Container>
  );
};

export default BitcoinPageContent;
