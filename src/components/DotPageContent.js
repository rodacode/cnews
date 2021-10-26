import React from 'react';
import Header from './Header'
import { Container } from './Container'
import { Box, Text, Image, ListItem, UnorderedList, Heading } from '@chakra-ui/react';

import HomeDOTData from './HomeDOTData'
import TweetsContainer from './TweetsContainer'
import Footer from './Footer'


const DotPageContent = ({ element }) => {
    return (
        <Container width="100vw" minH="100vh" >
            <Header />

            <Box minW="100vw" ref={element}>
                <Box width={"90%"} mr="auto" ml="auto" d="flex" flexDirection="column" flexWrap="wrap" justifyContent="center">
                    <Heading textAlign="center" mt="12" mb="12">POLKADOT</Heading>

                    <Box width={"90%"} mr="auto" ml="auto" d="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="center">
                        <Text fontSize="16px">
                            Polkadot is a layer 0 blockchain created by Dr. Gavin Wood, co-founder of Ethereum, and the creator of Solidity , the smart contracts language used in EVM.
                        </Text>
                        <Text fontSize="16px">
                            It is designed with some key features that makes Polkadot a very special blockchain, ready to scale and communicate with other blockchains.
                        </Text>
                        <Box p="2" mt="8" width={["100%", "50%"]}>

                            <Text fontSize="24px" mt="12" mb="4">POLKADOT KEY FEATURES</Text>
                            <UnorderedList>
                                <ListItem fontWeight="bold" mb="2">Scalability</ListItem>
                                <Text fontSize="16px" mb="4">
                                    Polkadot provides unprecedented economic scalability by enabling a common set of validators to secure multiple blockchains. Polkadot provides transactional scalability by spreading transactions across multiple parallel blockchains.                            </Text>
                                <ListItem fontWeight="bold" mb="2">Interoperability</ListItem>
                                <Text fontSize="16px" mb="4">
                                    Polkadot enables cross-blockchain transfers of any type of data or asset, not just tokens. Connecting to Polkadot gives you the ability to interoperate with a wide variety of blockchains in the Polkadot network.
                                </Text>
                                <ListItem fontWeight="bold" mb="2">Shared security</ListItem>
                                <Text fontSize="16px" mb="4">
                                    Polkadot's novel data availability and validity scheme allows chains to interact with each other in a meaningful way. Chains remain independent in their governance, but united in their security.
                                </Text>
                                <ListItem fontWeight="bold" mb="2">On-chain governance</ListItem>
                                <Text fontSize="16px" mb="4">
                                    Polkadot's novel data availability and validity scheme allows chains to interact with each other in a meaningful way. Chains remain independent in their governance, but united in their security.
                                </Text>
                                <ListItem fontWeight="bold" mb="2">Forkless upgrades</ListItem>
                                <Text fontSize="16px" mb="4">
                                    Polkadot can upgrade without hard forks to integrate new features or fix bugs. This capability enables Polkadot to easily adapt to changes and upgrade itself as better technologies become available.
                                </Text>
                            </UnorderedList>
                        </Box>
                        <Box p="10" d="flex" justifyContent="center" width={["100%", "50%"]}>
                            <Image boxSize="280px" borderRadius="5px" src={'./images/dot.png'} alt="polkadot logo" />
                        </Box>
                    </Box>
                    <Box p="10" d="flex" justifyContent="center" width={"100%"}>
                            <Image borderRadius="5px" src={'./images/PolkadotRelayChain.jpeg'} alt="polkadot design chain" />
                        </Box>
                </Box>
                <TweetsContainer title="DOT" account1="gavofyork" account2="gavofhood" account3="DonnieBigBags" account4="JEFE_DOTSAMA"/>
                <Box mt="6">
                    <div id="coinmarketcap-widget-marquee" coins="1,1027,825,6636,2010,5034,9285,5426,52" currency="USD" theme="light" transparent="true" show-symbol-logo="true"></div>
                </Box>
                <Footer />
            </Box>
        </Container>
    )
}

export default DotPageContent
