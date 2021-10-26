import React from 'react';
import Header from './Header'
import { Container } from './Container'
import { Box, Text, Image } from '@chakra-ui/react';

import TweetsContainer from './TweetsContainer'
import BTCPageTestimonials from './BTCPageTestimonials'
import BTCPageTestimonials2 from './BTCPageTestimonials2'
import Footer from './Footer'


const BitcoinPageContent = ({ element }) => {
    return (
        <Container width="100vw" minH="100vh" >
            <Header />
            <Box minW="100vw" ref={element}  >
                <Box p="8" d="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                    <Box p="8" mt="8" width={["100%","50%"]}>
                        <Text fontSize="20px">
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
                <BTCPageTestimonials2 />
                <TweetsContainer  title="BTC" account1="DocumentingBTC" account2="BTC_Archive" account3="BitcoinFear" account4="whale_alert"/>
                <Footer />
            </Box>
        </Container>
    )
}

export default BitcoinPageContent
