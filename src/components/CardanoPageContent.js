import React from 'react';
import Header from './Header'
import { Container } from './Container'
import { Box, Text } from '@chakra-ui/react';

import HomeADAData from './HomeADAData'
import ADATweetsContainer from './ADATweetsContainer'
import Footer from './Footer'


const CardanoPageContent = ({ element }) => {
    return (
        <Container width="100vw" minH="100vh" >
            <Header />

            <Box minW="100vw" ref={element}>
                <Box p="8">
                    <Text fontSize="16px">
Cardano is a blockchain platform. The development started in 2015 and was launched in 2017 
by Charles Hoskinson, co-founder of Ethereum and BitShares.
The Cardano project is different from other blockchain projects as it openly addresses the need for regulatory oversight whilst maintaining consumer privacy and protections through an
 innovative software architecture. The protocol features a layered blockchain software stack that is flexible, scalable, and is being developed with the most rigorous academic and commercial 
 software standards in the industry. 
 </Text>
                </Box>
                <HomeADAData />
                <ADATweetsContainer />
                <Box mt="6">
                    <iframe src="https://lunarcrush.com/widgets/influencers?filter_string=ADA&interval=1 Week&theme=dark" id="candlestick" frameBorder="0" border="0" cellSpacing="0" scrolling="no" Style="width: 100%; height: 600px;" />
                </Box>
                <Footer />
            </Box>
        </Container>
    )
}

export default CardanoPageContent
