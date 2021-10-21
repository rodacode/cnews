import { Flex, Heading } from '@chakra-ui/react'
import TopTenCoins from './TopTenCoins'
import HeaderAd from './HeaderAd'
import AdBanner from './AdBanner'

export const Sidebar = () => (
  <>
    <Flex justifyContent="center" maxW={'15vv'}>
      <Heading>Top 10 Coins</Heading>
    </Flex>
    <Flex justifyContent="center" flexDirection="column">
      <TopTenCoins />
      <AdBanner imageUrl='./images/celsius_network.jpg' />
      {/* <CryptoMonstersBanner /> */}
      <HeaderAd />
    </Flex>
  </>


)

