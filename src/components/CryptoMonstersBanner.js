import { Box, Button, Image, Text, Link } from '@chakra-ui/react'

const CryptoMonstersBanner = () => (
    <Box
        p="4"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        m="12"
        boxShadow="dark-lg"
        d="flex"
        flexDirection="column"
        justifyContent="center"
    >
        <Box className="monster" ml="auto" mr="auto">
            <Image
                boxSize="200px"
                objectFit="contain"
                src={'./images/monster1.png'}
                alt=''
                p="2"
            />
        </Box>
        <Box className="title__container" textAlign="center" mt="8" mb="8">
            <Text className="arcade" fontSize="2vw">Play Crypto Monsters!</Text>
        </Box>
        <Box
            ml="auto"
            mr="auto"
        >
            <Button bgGradient="linear(to-l, #7928CA, #FF0080)"
                boxShadow="dark-lg"
                size="lg"
                p="12"
            >
                <Link className="arcade" href="https://cryptomonstersgame.com" isExternal>
                    PLAY
                </Link>
            </Button>
        </Box>
    </Box>
)

export default CryptoMonstersBanner

