import React from 'react';
import Header from './Header'
import { Container } from './Container'
import { Box, Text, Image, Heading } from '@chakra-ui/react';

import HomeKusamaData from './HomeKusamaData'
import TweetsContainer from './TweetsContainer'
import Footer from './Footer'


const KusamaPageContent = ({ element }) => {
    return (
        <Container width="100vw" minH="100vh" >
            <Header />

            <Box minW="100vw" ref={element}>
                <Box width={"90%"} mr="auto" ml="auto" d="flex" flexDirection="column" flexWrap="wrap" justifyContent="center">
                    <Heading textAlign="center" mt="12" mb="12">KUSAMA</Heading>
                    <Box width={"90%"} mr="auto" ml="auto" d="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="center">
                        <Box p="2" mt="8" width={["100%", "50%"]}>
                            <Text fontSize="16px">
                                Kusama is a scalable network of specialized blockchains built using Substrate and nearly the same codebase as Polkadot. The network is an experimental development environment for teams who want to move fast and innovate on Kusama, or prepare for deployment on Polkadot.
                                Kusama was founded in 2019 by Gavin Wood, founder of Polkadot and co-founder and former CTO of Ethereum.∆
                                Kusama is a network built as a risk-taking, fast-moving ‘canary in the coal mine’ for its cousin Polkadot. It's a living platform built for change agents to take back control, spark innovation and disrupt the status quo.
                            </Text>
                        </Box>
                        <Box p="10" d="flex" justifyContent="center" width={["100%", "50%"]}>
                            <Image boxSize="280px" borderRadius="5px" src={'./images/kusama2.png'} alt="polkadot logo" />
                        </Box>
                    </Box>
                </Box>
                <TweetsContainer title="KSM" account1="gavofyork" account2="DonnieBigBags" account3="gavofhood" account4="kusamabinladen"/>
                <Box mt="6">
                    
                    <iframe src="https://lunarcrush.com/widgets/influencers?filter_string=KSM&interval=1 Week&theme=dark" id="candlestick" frameBorder="0" border="0" cellSpacing="0" scrolling="no" Style="width: 100%; height: 600px;" />
                </Box>
                <Footer />
            </Box>
        </Container>
    )
}

export default KusamaPageContent
