import React from 'react';
import Header from './Header'
import { Container } from './Container'
import { Box } from '@chakra-ui/react';

import HomeAdaData from './HomeBtcData'
import Footer from './Footer'


const CardanoPageContent = ({ element }) => {
    return (
        <Container width="100vw" minH="100vh" >
            <Header />

            <Box minW="100vw" ref={element}>
                <HomeAdaData/>
                <Box mt="6">
                <iframe src="https://lunarcrush.com/widgets/influencers?filter_string=ADA&interval=1 Week&theme=dark" id="candlestick" frameBorder="0" border="0" cellSpacing="0" scrolling="no" Style="width: 100%; height: 600px;"/>
                </Box>
                <Footer />
            </Box>
        </Container>
    )
}

export default CardanoPageContent
