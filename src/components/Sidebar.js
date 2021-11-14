import { Flex, Heading } from '@chakra-ui/react'
import TopTenCoins from './topTenCoins/TopTenCoins'

export const Sidebar = () => (
  <>
    <Flex justifyContent="center" maxW={'15vv'}>
      <Heading>Top 10 Coins</Heading>
    </Flex>
    <Flex justifyContent="center" flexDirection="column">
      <TopTenCoins />
      {/* <AdBanner imageUrl='./images/celsius_network.jpg' /> */}
    </Flex>
  </>


)

