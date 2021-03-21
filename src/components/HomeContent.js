import { useSelector } from 'react-redux';
import { Header } from './Header'
import { Container } from './Container'
import { Sidebar } from './Sidebar'
import {
    Box,
    Grid,
    GridItem,
    Heading
} from '@chakra-ui/react';

import HomeNews from './HomeNews'
import HomeTweetsContainer from './HomeTweetsContainer'
import TrendingCoins from './TrendingCoins'

import HomeTutorials from './HomeTutorials'
import HomeNFT from './HomeNFT'
import HomeBtcData from './HomeBtcData'
import HomeBtcNews from './HomeBtcNews'
import HomeADAData from './HomeADAData'


const HomeContent = ({ element }) => {
    const news = useSelector(state => state.news);

    return (
        <Container width="100vw" minH="100vh" >
            <Box>
                <Header/>
                <Box minW="100vw" pb="12">
                    <Grid
                        templateColumns="repeat(5, 1fr)"
                        gap={2}>
                        <GridItem colSpan={[5, 5, 3]}>
                            <Box>
                                <div ref={element}>

                                    <Heading textAlign="center" >NEWS</Heading>
                                    <HomeNews news={news} />
                                </div>

                            </Box>
                        </GridItem>
                        <GridItem colSpan={[5, 5, 2]}>
                            <Box>
                                <Sidebar />
                            </Box>
                        </GridItem>
                    </Grid>
                </Box>

                <Box minW="100vw">
                    <HomeTweetsContainer />
                    <HomeBtcData />
                    <TrendingCoins />
                    <HomeBtcNews />
                    <HomeADAData />
                </Box>
            </Box>
        </Container>
    )
}

export default HomeContent