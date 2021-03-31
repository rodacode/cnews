import React from 'react';
import Header from './Header'
import { Container } from './Container'
import { Box } from '@chakra-ui/react';

import HomeTweetsContainer from './HomeTweetsContainer'
import HomeBtcData from './HomeBtcData'
import HomeBtcNews from './HomeBtcNews'
import BTCPageTestimonials from './BTCPageTestimonials'
import Footer from './Footer'


const BitcoinPageContent = ({ element }) => {
    return (
        <Container width="100vw" minH="100vh" >
            <Header />

            <Box minW="100vw" ref={element}>
                <BTCPageTestimonials />
                <HomeBtcData />
                <HomeTweetsContainer />
                <HomeBtcNews />
                <Footer />
            </Box>
        </Container>
    )
}

export default BitcoinPageContent
