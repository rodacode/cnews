import { Box, Flex, Stack, Link } from '@chakra-ui/react'

const HeaderNav = () => (
    <Box>
        <Flex>
            <Stack justifyContent="center" direction={'row'} spacing={4} flexWrap="wrap">
                <Link
                    p={2}
                    fontSize={'sm'}
                    fontWeight={500}
                    _hover={{
                        textDecoration: 'none',
                    }}
                    href="/">
                    HOME
                </Link>
                <Link
                    p={2}
                    fontSize={'sm'}
                    fontWeight={500}
                    _hover={{
                        textDecoration: 'none',
                    }}
                    href="/bitcoin">
                    BITCOIN
                </Link>
                <Link
                    p={2}
                    fontSize={'sm'}
                    fontWeight={500}
                    _hover={{
                        textDecoration: 'none',
                    }}
                    href="/altcoins">
                    ALTCOINS
                </Link>
                <Link
                    p={2}
                    fontSize={'sm'}
                    fontWeight={500}
                    _hover={{
                        textDecoration: 'none',
                    }}
                    href="/cardano">
                    CARDANO
                </Link>
                <Link
                    p={2}
                    fontSize={'sm'}
                    fontWeight={500}
                    _hover={{
                        textDecoration: 'none',
                    }}
                    href="/defi">
                    DEFI
                </Link>
                <Link
                    p={2}
                    fontSize={'sm'}
                    fontWeight={500}
                    _hover={{
                        textDecoration: 'none',
                    }}
                    href="/twitter">
                    ON TWITTER
                </Link>
            </Stack>
        </Flex>
    </Box>



)


export default HeaderNav

