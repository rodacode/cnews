import React from 'react';
import HeaderTwitterTron from './HeaderTwitterTron'
import { Container } from './Container'
import { Box } from '@chakra-ui/react';

import TwitterTronTweetsContainer  from './TwitterTronTweetsContainer'
import Footer from './Footer'


const TwitterTronContent = ({ element }) => {
    return (
        <Container width="100vw" minH="100vh" >
            <HeaderTwitterTron />

            <Box minW="100vw" ref={element} bgGradient="linear(to-l, #2AFA85,#FF0080)">
                <TwitterTronTweetsContainer />
                <Footer />
            </Box>
        </Container>
    )
}

export default TwitterTronContent
