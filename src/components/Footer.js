import { Flex, Box, Heading, Text } from '@chakra-ui/react'
import SocialIcons from './SocialIcons'

const Footer = () => {
    return (
        <Flex as="footer" py="2rem" flexDirection="row" justifyContent="space-around" alignItems="center">
            <Box mt="6">
                <Flex justifyContent="center">
                    <Box className="title__container">
                        <Heading fontSize="1vw">The</Heading>
                        <Heading as="h1" className="title" fontSize="4vw">Crypto</Heading>
                        <Heading className="title__road" fontSize="1vw">road</Heading>
                    </Box>
                </Flex>
            </Box>
            <SocialIcons />
        </Flex>
    )
}

export default Footer;
