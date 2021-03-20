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

const Index = () => {
  const news = useSelector(state => state.news);
  return (
    <Container width="100vw" height="100vh">
      <DarkModeSwitch />
      <Hero title={'Crypto Times'} />
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={2}>
        <GridItem colSpan={4}>
          <Box>
            <Heading>NEWS</Heading>
          <CoinNews news={news} />
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box>
            <Sidebar />
          </Box>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Index
