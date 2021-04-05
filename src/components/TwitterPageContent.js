import React from 'react';
import Header from './Header'
import { Container } from './Container'
import { Box } from '@chakra-ui/react';

import TwitterPage1TweetsContainer  from './TwitterPage1TweetsContainer'
import Footer from './Footer'


const TwitterPageContent = ({ element }) => {
    return (
        <Container width="100vw" minH="100vh" >
            <Header />

            <Box minW="100vw" ref={element}>
                <TwitterPage1TweetsContainer />
                <Footer />
            </Box>
        </Container>
    )
}

export default TwitterPageContent
