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
        <AdBanner imageUrl="./images/binance.jpeg" link='https://www.binance.com/en/register?ref=73085988&utm_campaign=web_share_copy' />
        <AdBanner imageUrl='./images/celsius_network.jpg' />
        <HeaderAd />
    </Flex>
  </>


)

