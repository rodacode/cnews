import React from 'react';
import Header from './Header'
import { Container } from './Container'
import { Box, Text, Image, ListItem, UnorderedList, Heading } from '@chakra-ui/react';

import HomeDOTData from './HomeDOTData'
import DOTTweetsContainer from './DOTTweetsContainer'
import Footer from './Footer'


const DotPageContent = ({ element }) => {
    return (
        <Container width="100vw" minH="100vh" >
            <Header />

            <Box minW="100vw" ref={element}>
                <Box width={"90%"} mr="auto" ml="auto" d="flex" flexDirection="column" flexWrap="wrap" justifyContent="center">
                <Heading textAlign="center" mt="12" mb="12">POLKADOT</Heading>
                <Box width={"90%"} mr="auto" ml="auto" d="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="center">

                    <Box p="2" mt="8" width={["100%", "50%"]}>
                        <Text fontSize="16px">
                            Polkadot is a layer 0 blockchain created by Dr. Gavin Wood, co-founder of Ethereum, creator of Solidity , the smart contracts language used in ETH.
                        </Text>
                        <Text fontSize="24px" mt="12" mb="4">POLKADOT KEY FEATURES</Text>
                        <UnorderedList>
                            <ListItem>Heterogeneity</ListItem>
                            <ListItem>Scalability</ListItem>
                            <ListItem>Interoperability</ListItem>
                            <ListItem>Shared security</ListItem>
                            <ListItem>On-chain governance</ListItem>
                            <ListItem>Forkless upgrades</ListItem>
                            <ListItem>Extra key security</ListItem>
                            <ListItem>Novel economics and game theory</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box p="10" d="flex" justifyContent="center" width={["100%", "50%"]}>
                        <Image boxSize="280px" borderRadius="5px" src={'./images/dot.png'} alt="polkadot logo" />
                    </Box>
                </Box>
                </Box>


                <HomeDOTData />
                <DOTTweetsContainer />
                <Box mt="6">
                    <iframe src="https://lunarcrush.com/widgets/influencers?filter_string=DOT&interval=1 Week&theme=dark" id="candlestick" frameBorder="0" border="0" cellSpacing="0" scrolling="no" Style="width: 100%; height: 600px;" />
                </Box>
                <Footer />
            </Box>
        </Container>
    )
}

export default DotPageContent
