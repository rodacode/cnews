import { Box, Flex, Heading, Text } from '@chakra-ui/react'

export const Hero = ({ title }) => (
  <Box mb="12" mt="6">
    <Flex justifyContent="center">
      <Box className="title__container">
      <Heading fontSize="2vw">The</Heading>
      <Heading className="title" fontSize="10vw">Crypto</Heading>
      <Heading className="title__road" fontSize="2vw">road</Heading>
      </Box>
    </Flex>
    <Flex justifyContent="center">
      <Text>All news about crypto coins, altcoins, nfts and descentralization</Text>
    </Flex>
  </Box>


)

Hero.defaultProps = {
  title: 'Crypto Times',
}
