import React from 'react';
import Header from './Header'
import { Container } from './Container'
import { Box, Text, Image } from '@chakra-ui/react';

import HomeTweetsContainer from './HomeTweetsContainer'
import HomeBtcData from './HomeBtcData'
import HomeBtcNews from './HomeBtcNews'
import BTCPageTestimonials from './BTCPageTestimonials'
import BTCPageTestimonials2 from './BTCPageTestimonials2'
import Footer from './Footer'


const BitcoinPageContent = ({ element }) => {
    return (
        <Container width="100vw" minH="100vh" >
            <Header />
            <Box minW="100vw" ref={element}  >
                <Box d="flex" flexDirection="row" flexWrap="wrap">
                    <Box p="8" mt="8" width={["100%","50%"]}>
                        <Text fontSize="16px">
                            Bitcoin is a cryptocurrency. It is a decentralized digital currency that is based on cryptography.
                            As such, it can operate without the need of a central authority like a central bank or a company. It is unlike government-issued or fiat currencies such as US Dollars or Euro in which they are controlled by the country’s central bank.
                            The decentralized nature allows it to operate on a peer-to-peer network whereby users are able to send funds to each other without going through intermediaries.
                     </Text>
                    </Box>
                    <Box p="4" d="flex" justifyContent="center" width={["100%","50%"]}>
                        <Image boxSize="320px" borderRadius="50%" src={'./images/btc.png'} alt="cardano logo" />
                    </Box>
                </Box>
                <BTCPageTestimonials />
                <HomeBtcData />
                <BTCPageTestimonials2 />
                <HomeTweetsContainer />
                <HomeBtcNews />
                <Footer />
            </Box>
        </Container>
    )
}

export default BitcoinPageContent
