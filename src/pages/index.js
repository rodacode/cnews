import { useSelector } from 'react-redux';

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Sidebar } from '../components/Sidebar'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import {
  Box,
  Grid,
  GridItem,
  Heading
} from '@chakra-ui/react';

import CoinNews from '../components/CoinNews'
import HomeTweetsContainer from '../components/HomeTweetsContainer'

import HomeTutorials from '../components/HomeTutorials'

const Index = () => {
  const news = useSelector(state => state.news);

  return (
    <Container width="100vw" minH="100vh">
      <DarkModeSwitch />
      <Hero title={'Crypto Times'} />
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={2}>
        <GridItem colSpan={3}>
          <Box>
            <Heading textAlign="center" >NEWS</Heading>
            <CoinNews news={news} />
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Box>
            <Sidebar />
          </Box>
        </GridItem>
      </Grid>
      <Box minW="100vw">
        <Heading textAlign="center" m="12">On Tweeter</Heading>
        <HomeTweetsContainer />
        <HomeTutorials />
      </Box>

    </Container>
  )
}

export default Index
