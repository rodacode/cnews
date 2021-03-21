import { Box, Flex, Stack, Link } from '@chakra-ui/react'

const HeaderNav = () => (
    <Box>
        <Flex justifyContent="center">
            <Stack direction={'row'} spacing={4}>
                <Link
                    p={2}
                    fontSize={'sm'}
                    fontWeight={500}
                    _hover={{
                        textDecoration: 'none',
                    }}>
                    Coin News
        </Link>
                <Link
                    p={2}
                    fontSize={'sm'}
                    fontWeight={500}
                    _hover={{
                        textDecoration: 'none',
                    }}>
                    Altcoins selection
        </Link>
                <Link
                    p={2}
                    fontSize={'sm'}
                    fontWeight={500}
                    _hover={{
                        textDecoration: 'none',
                    }}>
                    CoinParator
        </Link>
            </Stack>

        </Flex>
    </Box>



)


export default HeaderNav

