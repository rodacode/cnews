import { Box, Flex, Heading, Text } from '@chakra-ui/react'

const HeaderHero = () => (
    <Box >
        <Flex justifyContent="center">
            <Box className="title__container">
                <Heading fontSize="2vw">The</Heading>
                <Heading as="h1" className="title" fontSize="10vw">Crypto</Heading>
                <Heading className="title__road" fontSize="2vw">road</Heading>
            </Box>
        </Flex>
        <Flex justifyContent="center">
            <Text p="4" textAlign="center">All news about Bitcoin, crypto, altcoins, nfts and descentralization</Text>
        </Flex>
    </Box>
)

export default HeaderHero

