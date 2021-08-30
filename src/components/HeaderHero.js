import { Box, Flex, Heading, Text } from '@chakra-ui/react'

const HeaderHero = () => (
    <Box mt="6" d="flex" justifyContent="center" flexDirection="column">
        <Box className="title__container">
            <Heading fontSize={["8vw", "2vw"]} className="title__the">The</Heading>
            <Heading as="h1" className="title" fontSize={["20vw", "10vw"]}>Crypto</Heading>
            <Heading className="title__road" fontSize={["4vw", "2vw"]}>road</Heading>
        </Box>
        <Text p="4" textAlign="center">News about Bitcoin, crypto, altcoins, nfts and decentralization</Text>
    </Box>
)

export default HeaderHero

