import { Flex, Heading } from '@chakra-ui/react'
import TopTenCoins from './TopTenCoins'
import HeaderAd from './HeaderAd'
import HeaderNav from './HeaderNav'

export const Sidebar = () => (
  <>
    <Flex justifyContent="center" maxW={'15vv'}>
      <Heading>Top 10 Coins</Heading>
    </Flex>
    <Flex justifyContent="center" flexDirection="column">
        <TopTenCoins />
        <HeaderAd />
    </Flex>
  </>


)

