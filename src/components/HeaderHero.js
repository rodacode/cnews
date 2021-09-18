import { Box, Heading, Text } from '@chakra-ui/react'

const HeaderHero = () => (
    <Box mt="6" d="flex" justifyContent="center" flexDirection="column">
        <Box className="title__container">
        <Text
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="6xl"
                fontWeight="extrabold" fontSize={["8vw", "2vw"]} className="title__the">The</Text>
            <Text
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="6xl"
                fontWeight="extrabold"
            className="title" fontSize={["20vw", "10vw"]}>Crypto</Text>
            <Text
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="6xl"
                fontWeight="extrabold" className="title__road" fontSize={["4vw", "2vw"]}>road</Text>
        </Box>
    </Box>
)

export default HeaderHero

