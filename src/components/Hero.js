import { Flex, Heading, Text } from '@chakra-ui/react'

export const Hero = ({ title }) => (
  <>
    <Flex justifyContent="center">
      <Heading fontSize="10vw">{title}</Heading>
    </Flex>
    <Flex justifyContent="center">
      <Text>All news about crypto coins, altcoins, nfts and descentralization</Text>
    </Flex>
  </>


)

Hero.defaultProps = {
  title: 'Crypto Times',
}
