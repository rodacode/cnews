import React from 'react';
import Header from './Header'
import { Container } from './Container'
import { Box, Text, Image } from '@chakra-ui/react';

import HomeDOTData from './HomeDOTData'
import DOTTweetsContainer from './DOTTweetsContainer'
import Footer from './Footer'


const DotPageContent = ({ element }) => {
    return (
        <Container width="100vw" minH="100vh" >
            <Header />

            <Box minW="100vw" ref={element}>
                <Box width={"90%"} mr="auto" ml="auto" d="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                    <Box p="2" mt="8" width={["100%","50%"]}>
                        <Text fontSize="16px">
                        Polkadot will enable a completely decentralized web where users are in control.
                        Polkadot is built to connect private and consortium chains, public and permissionless networks, oracles, and future technologies that are yet to be created. Polkadot facilitates an internet where independent blockchains can exchange information and transactions in a trustless way via the Polkadot relay chain.
                        Polkadot makes it easier than ever to create and connect decentralized applications, services, and institutions. By empowering innovators to build better solutions, we seek to free society from its reliance on a broken web where its large institutions can’t violate our trust.
                     </Text>
                    </Box>
                    <Box p="10" d="flex" justifyContent="center" width={["100%","50%"]}>
                        <Image boxSize="280px" borderRadius="5px" src={'./images/dot.png'} alt="polkadot logo" />
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
