import React from 'react';
import Header from './Header'
import { Container } from './Container'
import { Box } from '@chakra-ui/react';

import TrendingCoins from './TrendingCoins'
import Footer from './Footer'
import AltcoinsNewsHighlights from './AltcoinsNewsHighlights'

const AltcoinsPageContent = ({ element }) => {
    return (
        <Container width="100vw" minH="100vh" >
            <Header />

            <Box minW="100vw" ref={element}>
            <AltcoinsNewsHighlights />
                <TrendingCoins />
                <Footer />
            </Box>
        </Container>
    )
}

export default AltcoinsPageContent
