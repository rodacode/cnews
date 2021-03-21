import { Box, Flex, Heading } from '@chakra-ui/react'

const HeaderAd = () => (
    <Box p="8" borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        m="12"
        bgGradient="linear(to-t, green.200, pink.500)"
        boxShadow="dark-lg">
        <Flex justifyContent="center">
            <Box className="title__container">
                <Heading className="title" fontSize="3vw">We have a long way babe...</Heading>
            </Box>
        </Flex>
    </Box>
)

export default HeaderAd

