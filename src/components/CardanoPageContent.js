import React from 'react';
import Header from './Header'
import { Container } from './Container'
import { Box } from '@chakra-ui/react';

import HomeTweetsContainer from './HomeTweetsContainer'
import HomeAdaData from './HomeBtcData'
import HomeBtcNews from './HomeBtcNews'
import Footer from './Footer'


const CardanoPageContent = ({ element }) => {
    return (
        <Container width="100vw" minH="100vh" >
            <Header />

            <Box minW="100vw">
                <HomeAdaData />
                <HomeTweetsContainer />
                <HomeBtcNews />
                <Footer />
            </Box>
        </Container>
    )
}

export default CardanoPageContent
