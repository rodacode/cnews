import React from 'react';
import Header from './Header'
import { Container } from './Container'
import { Box, Text, Image } from '@chakra-ui/react';

import HomeMoonriverData from './HomeMoonriverData'
import MoonriverTweetsContainer from './MoonriverTweetsContainer'
import Footer from './Footer'


const MoonriverPageContent = ({ element }) => {
    return (
        <Container width="100vw" minH="100vh" >
            <Header />

            <Box minW="100vw" ref={element}>
                <Box width={"90%"} mr="auto" ml="auto" d="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                    <Box p="2" mt="8" width={["100%","50%"]}>
                        <Text fontSize="16px">
                        The network’s Kusama deployment will be called Moonriver, and have its own utility token also called Moonriver (MOVR).

Supply and other token economic behaviors on Moonriver will be the same as Moonbeam, but token distribution will be different in order to support the unique goals and attributes of the network. Moonriver will serve as a “CanaryNet” for Moonbeam, but it will also be a community-led experiment where the community will decide the direction it takes. Among other things, Moonriver used a large parachain crowdloan to obtain its initial parachain slot on Kusama.
                     </Text>
                    </Box>
                    <Box p="10" d="flex" justifyContent="center" width={["100%","50%"]}>
                        <Image boxSize="280px" borderRadius="5px" src={'./images/moonriver.png'} alt="moonriver logo" />
                    </Box>
                </Box>

                <HomeMoonriverData />
                <MoonriverTweetsContainer />
                <Box mt="6">
                    <iframe src="https://lunarcrush.com/widgets/influencers?filter_string=DOT&interval=1 Week&theme=dark" id="candlestick" frameBorder="0" border="0" cellSpacing="0" scrolling="no" Style="width: 100%; height: 600px;" />
                </Box>
                <Footer />
            </Box>
        </Container>
    )
}

export default MoonriverPageContent
